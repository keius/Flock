Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:index, :create, :update, :show, :destroy] do
      resources :memberships, only: [:create]
      delete '/memberships', to: 'memberships#destroy'
    end
  end

  root "static_pages#root"
end
