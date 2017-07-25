User.destroy_all

guestUser = User.create({
  username: "guest", password: "123456",
  first_name: "Gilbert", last_name: "Guest",
  location: "Everywhere", about: "Undefined Person",
  image_url: "guest_user"
  })

obama = User.create({
  username: "obama", password: "123456",
  first_name: "Barack", last_name: "Obama",
  location: "Washington D.C.", about: "Travelling enthusiast. Family man.",
  image_url: "obama"
  })

trump = User.create({
  username: "trump", password: "123456",
  first_name: "Donald", last_name: "Trump",
  location: "Washington D.C.", about: "Currently making America great again.",
  image_url: "trump"
  })

mcdonald = User.create({
  username: "mcdonald", password: "123456",
  first_name: "Ronald", last_name: "McDonald",
  location: "PlayPlace", about: "I'm lovin' it.",
  image_url: "mcdonald"
  })

spiderman = User.create({
  username: "spiderman", password: "123456",
  first_name: "Peter", last_name: "Parker",
  location: "PlayPlace", about: "I'm lovin' it.",
  image_url: "spiderman"
  })
