class Api::SessionsController < ApplicationController
  def create
    @user = User.includes(:groups).find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    # debugger
    if @user
      login(@user)
      render :show
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
