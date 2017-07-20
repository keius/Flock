class Api::GroupsController < ApplicationController
  before_action :require_user
  
  def create
    @group = Group.new(group_params)
    if @group.save
      render 'api/groups/show'
    else
      render @group.errors.full_messages, status: 422
    end
  end

  def update
    @group = Group.find(params[:id])
    if @group.update_attributes(group_params)
      render 'api/groups/show'
    else
      render @group.errors.full_messages, status: 422
    end
  end

  def index
    @groups = Group.all
  end

  def show
    @group = Group.find(params[:id])
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render ['Object destroyed']
  end

  private
  def group_params
    params.require(:group).permit(:owner_id, :category_id, :title, :description, :location, :image_url)
  end
end
