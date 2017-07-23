User.destroy_all

guestUser = User.create({username: "guest", password: "123456", full_name: "guest"});

user1 = User.create({username: "user1", password: "123456", full_name: "user1"})
user2 = User.create({username: "user2", password: "123456", full_name: "user2"})
user3 = User.create({username: "user3", password: "123456", full_name: "user3"})
user4 = User.create({username: "user4", password: "123456", full_name: "user4"})
user5 = User.create({username: "user5", password: "123456", full_name: "user5"})

group1 = Group.create({owner_id: 1, title: "group1", description: "first", location: "SF"})
group2 = Group.create({owner_id: 2, title: "group2", description: "second", location: "CHI"})
group3 = Group.create({owner_id: 3, title: "group3", description: "third", location: "NY"})

membership1 = Membership.create({user_id: user1.id, group_id: group1.id})
membership2 = Membership.create({user_id: user2.id, group_id: group1.id})
membership3 = Membership.create({user_id: user3.id, group_id: group1.id})
membership4 = Membership.create({user_id: user4.id, group_id: group2.id})
membership5 = Membership.create({user_id: user5.id, group_id: group2.id})
