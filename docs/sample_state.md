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
