class Api::GroupsController < ApplicationController
  before_action :require_user

  def create
    @group = Group.new(group_params)
    @group.owner_id = current_user.id
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
    if params[:current_user]
      @groups = current_user.groups
    else
      @groups = Group.all
    end
  end

  def show
    @group = Group.find(params[:id])
    if params[:members]
      @users = @group.members
      render 'api/users/index'
    else
      render 'api/groups/show'
    end
  end

  def destroy
    @group = Group.find(params[:id])
    @group.destroy
    render ['Object destroyed']
  end

  private
  def group_params
    params.require(:group).permit(:current_user, :members, :category_id, :title, :description, :location, :image_url)
  end
end
