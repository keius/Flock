class Api::RsvpsController < ApplicationController
  def create
    @rsvp = Rsvp.new({event_id: params[:event_id]})
    @rsvp.user_id = current_user.id
    if @rsvp.save
      @user = User.find(@rsvp.user_id)
      render :show
    else
      render json: @rsvp.errors.full_messages, status: 422
    end
  end

  def destroy
    rsvp = Rsvp.where("event_id = ?", params[:event_id]).find_by(user_id: current_user.id)
    @user = rsvp.user
    if rsvp.destroy
      render '/api/users/show'
    else
      render json: ["You are not a guest of this event!"], status: 404
    end
  end

end
