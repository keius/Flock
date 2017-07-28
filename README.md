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

[Front End][frontend]

[Back End][backend]

## Future Implementations

The features originally implemented are basic features to bring people together. Flock would benefit from additional features that are listed in the [future implementations][future] outline.

[flock]: https://flock-meetup.herokuapp.com/#/
[meetup]: https://www.meetup.com/
[homepage]: ./docs/images/flock_homepage.png "Flock home page"
[auth]: ./docs/images/flock_auth.png "Flock user authentication"
[group]: ./docs/images/group_page.png "A group's page"
[event]: ./docs/images/event_page.png "An event's page"
[user]: ./docs/images/user_page.png "A user's page"
[profile]: ./docs/images/profile_page.png "The user profile page"
[category]: ./docs/images/category.png "Groups for a particular category"
[proposal]: ./docs/README.md
[schema]: ./docs/schema.md
[future]: ./docs/future.md
[frontend]: ./docs/frontend.md
[backend]: ./docs/backend.md
