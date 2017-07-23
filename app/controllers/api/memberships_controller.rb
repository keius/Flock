class Api::MembershipsController < ApplicationController
  def create
    @membership = Membership.new(membership_params)
    if @membership.save
      @user = User.find(@membership.user_id)
      @group = Group.includes(:members, :owner).find(@membership.group_id)
      render :create
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end

  def destroy
    membership = Membership.where("group_id = ?", params[:group_id]).find_by(user_id: current_user.id)
    if membership.destroy
      render json: membership
    else
      render json: ["You are not part of this group!"], status: 404
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:user_id, :group_id)
  end
end
