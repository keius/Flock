# Frontend

As a single-page application, Flock utilizes the React.js framework and follows the Redux architecture to deliver the frontend.

## State Structure

Because of the nature of single-page application, careful planning went into structuring the state. Each main component (Session, User, Group, Event) has its own slice of state, that are all contained inside the store of the application. In order to retrieve information such as associations without overloading or redundancy, manual data fetch requests were created and implemented in order to extract only the relevant parts from the backend, and keeping main components separated (i.e. On looking at the group detail page, each group can have events, but the groups slice of state would contain just that group. Furthermore, the events will be fetched on page load with a request to the backend to just the associated events for the group. This allows a constant state structure that makes it easy to debug as well as providing the flexibility needed to implement future features.

![Sample State][sample state]


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

[sample state]: ./docs/sample_state.md "Sample State"
