class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    if params[:group_id]
      @users = Group.find(params[:group_id]).members
    elsif params[:event_id]
      @users = Event.find(params[:event_id]).users
    end
  end

  def show
    @user = User.includes(:groups).find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :update
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:group_id, :event_id, :username, :password, :first_name, :last_name, :location, :about, :image_url)
  end
end
