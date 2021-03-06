Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:index, :create, :update, :show, :destroy] do
      resources :memberships, only: [:create]
      delete '/memberships', to: 'memberships#destroy'
    end
    resources :events, only: [:index, :create, :update, :show, :destroy] do
      resources :rsvps, only: [:create]
      delete 'rsvps', to: 'rsvps#destroy'
    end
  end

  root "static_pages#root"
end
