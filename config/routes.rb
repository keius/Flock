Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resource :groups, only: [:create, :update, :destroy, :index, :show]
  end

  root "static_pages#root"
end
