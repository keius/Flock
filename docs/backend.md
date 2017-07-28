# Backend

Flock runs on Ruby on Rails and is hosted on Heroku. The sole purpose of the backend is to provide RESTful APIs and respond with JSON data.

Following the structure from the frontend, the backend was built to respond to different fetch requests than the typical RESTful APIs such as index and show. In order to retrieve just the associations for a particular model, the AJAX request would contain a parameter that, if present, signaled what time of filtering action the controller must render.

The following code is an example of how the event index can handle displaying all events, the list of events for a particular user (i.e. on the user profile page), and the events for a particular group (i.e. on the group detail page)

````````Ruby
class Api::EventsController < ApplicationController

  def index
    if params[:group_id]
      @events = Group.find(params[:group_id]).events
    elsif params[:user_id]
      @events = User.find(params[:user_id]).attending_events
    else
      @events = Event.all
    end
    render :index
  end

end
````````

## Database

PostgreSQL RDBMS is a must for Heroku.
