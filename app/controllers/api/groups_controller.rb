class Api::GroupsController < ApplicationController

  def create
    @group = Group.new(group_params)
    @group.owner_id = current_user.id
    if @group.save
      Membership.create({user_id: @group.owner_id, group_id: @group.id})
      render :show
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
    if params[:user_id]
      @groups = User.find(params[:user_id]).groups
    elsif params[:search_category]
      @groups = Group.where(category: params[:search_category])
    else
      @groups = Group.all
    end
    render :index
  end

  def show
    @group = Group.includes(:owner).find(params[:id])
    render :show
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render json: {}
  end

  private
  def group_params
    params.require(:group).permit(:user_id, :search_category, :title, :category, :description, :location, :image_url)
  end
end
