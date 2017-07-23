Rails.application.routes.draw do
  get 'home/index'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show]
    resource :session, only: [:create, :destroy]
    resources :groups, only: [:create, :update, :destroy, :index, :show]
    resources :memberships, only: [:create, :destroy]
  end

  root "static_pages#root"
end
