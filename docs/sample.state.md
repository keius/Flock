```js
{
  currentUser: {
    id: 1,
    username: "Greg"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createEvent: {errors: ["body can't be blank"]}
    createGroup: {errors: ["body can't be blank"]}
  },
  event: {
    1: {
      group_id: 1
      host_id: 1,
      title: "Party",
      date: "TBD",
      location: "TBD",
      description: "Fun Party",
    }
  },
  user: {
    1: {
      username: "greg",
      about: "text",
      image_link: "url"
      full_name: "Greg"
      events:  {
        1: {
          event_id: 1
        }
      }
      groups: {
        1: {
          group_id: 1
        }
      }
    }
  }
  group: {
    1: {
      owner_id: 1,
      title: "Party Animals",
      category: "party",
      location: "TBD",
      description: "cool people only",
      events: {
        1: {
          event_id: 1
        }
      },
      members: {
        1: {
          member_id: 1
        }
      }
    }
  }
}
```
