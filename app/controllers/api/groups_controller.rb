class Api::GroupsController < ApplicationController

  def create
    @group = Group.new(group_params)
    @group.owner_id = current_user.id
    if @group.save
      Membership.create({user_id: @group.owner_id, group_id: @group.id})
      @user = current_user
      render :create
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render :update
    else
      render json: @group.errors.full_messages, status: 422
    end
  end

  def index
    @groups = Group.includes(:members, :owner)
    render :index
  end

  def show
    @group = Group.includes(:members, :organizer).find(params[:id])
    render :show
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    @user = current_user
    render :destroy
  end

  private
  def group_params
    params.require(:group).permit(:title, :description, :location, :image_url)
  end
end
