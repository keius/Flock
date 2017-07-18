// state on accessing /groups/7
```js
{
  session: {
    current_user: 1
    errors: []
  },

  users: {
    byId: {
      1: {
        id: 1,
        username: "greg",
        email: "party@email",
        password_digest: "party-hash",
        session_token: "party-token",
        full_name: "Greg",
        image_url: "greg.png",
        groups: [1],
        events: [1]
      }
    }
  }

  groups: {
    errors: [],
    byId: {  
      1: {
        id: 1,
        owner_id: 1,
        title: "Party Animals",
        description: "Party Animals",
        location: "Party City",
        image_url: "party.png",
        follows: [1],
        events: [1]  
      }
    }
  },

  events: {
    errors: [],
    byId: {
      1: {
        id: 1,
        group_id: 1,
        host_id: 1,
        title: "First Party",
        date: "TBD",
        location: "Party City",
        description: "Partay",
        image_url: "first-party.png",
        rsvps: [1]
      }
    }
  }
}
```
