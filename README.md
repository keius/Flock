# Flock

[Flock][flock] is a social site designed to bring people together. Inspired by the site [MeetUp][meetup], Flock users are able to browse, search (coming soon), create and join groups and events that express their interests.

Flock is a project compiled by Gregory Park.

![Flock home page: https://meetsapp.herokuapp.com/#/][homepage]

## Features

- User accounts with secure authentication
![Flock's Auth Page][auth]

- Group/Event creation and deletion
![Flock's Group Page][group]

- Ability to Join or Rsvp for a Group or Event
![Flock's Event Page][event]

- User Pages with joined Groups
![Flock's User Page][user]

- Current User Profile showing Groups and Calendar of Events
![Flock's Profile Page][profile]

- Categories to organize Groups
![Flock's Category Page][category]

## Project Design

Flock was designed and built in two weeks.

A [proposal][proposal] was drafted to outline the needs of the project and to keep the development on schedule.

A [database schema][schema] was prepared alongside the design proposal.

## Technology

MeetApp is a single-page application built using Rails and React.js. It was deployed using Heroku services.



# Frontend

As a single-page application, Flock utilizes the React.js framework and follows the Redux architecture to deliver the frontend.

## State Structure

Because of the nature of single-page application, careful planning went into structuring the state. Each main component (Session, User, Group, Event) has its own slice of state, that are all contained inside the store of the application. In order to retrieve information such as associations without overloading or redundancy, manual data fetch requests were created and implemented in order to extract only the relevant parts from the backend, and keeping main components separated (i.e. On looking at the group detail page, each group can have events, but the groups slice of state would contain just that group. Furthermore, the events will be fetched on page load with a request to the backend to just the associated events for the group. This allows a constant state structure that makes it easy to debug as well as providing the flexibility needed to implement future features.

// state on accessing a logged in user's profile page
```js
{
  session: {
    current_user: 1
    errors: []
  },

  users: {
    users: {
      1: {
        id: 1,
        username: "greg",
        password_digest: "party-hash",
        session_token: "party-token",
        full_name: "Greg",
        image_url: "greg.png",
      }
    }
  }

  groups: {
    groups: {  
      1: {
        id: 1,
        owner_id: 1,
        title: "Party Animals",
        description: "Party Animals",
        location: "Party City",
        image_url: "party.png",
      }
    }
  },

  events: {
    groups: {
      1: {
        id: 1,
        group_id: 1,
        host_id: 1,
        title: "First Party",
        date: "TBD",
        location: "Party City",
        description: "Partay",
        image_url: "first-party.png",
      }
    }
  }
}
```

## React - Redux

Flock uses React Router 4. All of the React components, Redux action creators, API utilities, dispatcher, and stores are located in the [frontend](../frontend) directory.

## npm

Node package manager (npm) is used to install all of the frontend dependencies.

A post-install script is configured so that webpack bundles all of the frontend files after the deployment to Heroku is complete.

## Webpack

Webpack conveniently bundles all of the frontend components and Redux parts. The bundled file is located in `/app/assets/javascripts` and included in the main `application.js` file.

## jQuery

jQuery is only used to make AJAX requests with the Rails server.

## Sass/Styling

Site layout and styling are done with Sass and was inspired by MeetUp to a minor extent. Font Awesome Icons and Cloudinary (online image hosting) were the main visual components to add design to the site.

## Others

Other frontend dependencies are:

- React DOM
- React Router
- React History to manipulating the browser history
- React Modal
- Babel for transpiling JSX into JavaScript.



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



## Future Implementations

The features originally implemented are basic features to bring people together. Flock would benefit from additional features that are listed in the [future implementations][future] outline.

[flock]: https://flock-meetup.herokuapp.com/#/
[meetup]: https://www.meetup.com/
[homepage]: ./docs/images/flock_homepage.png "Flock home page"
[auth]: ./docs/images/auth_page.png "Flock user authentication"
[group]: ./docs/images/group_page.png "A group's page"
[event]: ./docs/images/event_page.png "An event's page"
[user]: ./docs/images/user_page.png "A user's page"
[profile]: ./docs/images/profile_page.png "The user profile page"
[category]: ./docs/images/category_page.png "Groups for a particular category"
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[future]: ./docs/future.md
[frontend]: ./docs/frontend.md
[backend]: ./docs/backend.md
