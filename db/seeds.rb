User.destroy_all

guestUser = User.create({username: "guest", password: "123456"});
