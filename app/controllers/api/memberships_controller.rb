class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new({group_id: params[:group_id]})
    @membership.user_id = current_user.id
    if @membership.save
      @user = User.find(@membership.user_id)
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    membership = Membership.where("group_id = ?", params[:group_id]).find_by(user_id: current_user.id)
    @user = membership.user
    if membership.destroy
      render '/api/users/show'
    else
      render json: ["You are not part of this group!"], status: 404
    end
  end
end
