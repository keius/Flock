class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    if @event.save
      Rsvp.create({user_id: @event.host_id, event_id: @event.id})
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render :update
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    if params[:group_id]
      @events = Group.find(params[:group_id]).events.sort_by { |event| event.datetime }
    elsif params[:user_id]
      @events = User.find(params[:user_id]).attending_events.sort_by { |event| event.datetime }
    else
      @events = Event.all.sort_by { |event| event.datetime }
    end
    render :index
  end

  def show
    @event = Event.includes(:group, :host).find(params[:id])
    render :show
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: {}
  end

  private
  def event_params
    params.require(:event).permit(:group_id, :user_id, :title, :datetime, :description, :location, :image_url)
  end
end
