class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(user)
      render json: 'api'
  end
end
