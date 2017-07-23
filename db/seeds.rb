User.destroy_all

guestUser = User.create({username: "guest", password: "123456"});

user1 = User.create({username: "user1", password: "123456"})
user2 = User.create({username: "user2", password: "123456"})
user3 = User.create({username: "user3", password: "123456"})
user4 = User.create({username: "user4", password: "123456"})
user5 = User.create({username: "user5", password: "123456"})

group1 = Group.create({owner_id: 1, title: "group1", description: "first", location: "SF"})
group2 = Group.create({owner_id: 2, title: "group2", description: "second", location: "CHI"})
group3 = Group.create({owner_id: 3, title: "group3", description: "third", location: "NY"})
