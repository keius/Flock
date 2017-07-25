User.destroy_all

# USERS
guest = User.create({
  username: "guest", password: "123456",
  first_name: "Gilbert", last_name: "Guest",
  location: "Everywhere", about: "Undefined Person",
  image_url: "guest"
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
  location: "New York City", about: "With great power comes great food.",
  image_url: "spiderman"
  })

ironman = User.create({
  username: "ironman", password: "123456",
  first_name: "Tony", last_name: "Stark",
  location: "New York City", about: "Kicking ass and taking names.",
  image_url: "ironman"
  })

mickey = User.create({
  username: "mickey", password: "123456",
  first_name: "Mickey", last_name: "Mouse",
  location: "Disney Castle", about: "Oh boy!",
  image_url: "mickey"
  })

hermione = User.create({
  username: "hermione", password: "123456",
  first_name: "Hermione", last_name: "Granger",
  location: "Hogwarts", about: "Books! And cleverness! There are more important things! — Friendship! And Food.",
  image_url: "hermione"
  })

frodo = User.create({
  username: "frodo", password: "123456",
  first_name: "Frodo", last_name: "Baggins",
  location: "The Shire", about: "Big where it counts. Hiking enthusiast.",
  image_url: "frodo"
  })

buzz = User.create({
  username: "buzz", password: "123456",
  first_name: "Buzz", last_name: "Lightyear",
  location: "Sector 4", about: "To infinite scrolling and beyond!",
  image_url: "buzz"
  })

groot = User.create({
  username: "groot", password: "123456",
  first_name: "Groot", last_name: "",
  location: "Planet X", about: "I am groot.",
  image_url: "groot"
  })

katniss = User.create({
  username: "katniss", password: "123456",
  first_name: "Katniss", last_name: "Everdeen",
  location: "District 12", about: "Hunting enthusiast.",
  image_url: "katniss"
  })

gandalf = User.create({
  username: "gandalf", password: "123456",
  first_name: "Gandalf", last_name: "the White",
  location: "Valinor", about: "Older than you think.",
  image_url: "gandalf"
  })

darthvader = User.create({
  username: "darthvader", password: "123456",
  first_name: "Darth", last_name: "Vader",
  location: "Imperial City", about: "I am NOT your father.",
  image_url: "darthvader"
  })

rachel = User.create({
  username: "rachel", password: "123456",
  first_name: "Rachel", last_name: "Green",
  location: "Grenwich Village", about: "Being alone sucks.",
  image_url: "rachel"
  })

daenerys = User.create({
  username: "daenerys", password: "123456",
  first_name: "Daenerys", last_name: "Targaryen",
  location: "Dragonstone", about: "Dragon enthusiast.",
  image_url: "daenerys"
  })

tyrion = User.create({
  username: "tyrion", password: "123456",
  first_name: "Tyrion", last_name: "Lannister",
  location: "King's Landing", about: "Everything is better with wine in the belly.",
  image_url: "tyrion"
  })

leia = User.create({
  username: "leia", password: "123456",
  first_name: "Leia", last_name: "Organa",
  location: "Alderaan", about: "May the coffee be with you",
  image_url: "leia"
  })

spongebob = User.create({
  username: "spongebob", password: "123456",
  first_name: "Spongebob", last_name: "Squarepants",
  location: "Alderaan", about: "I'm ready!",
  image_url: "spongebob"
  })





# GROUPS
Group.destroy_all

# TECH
hogwarts_js = Group.create({
  owner_id: hermione.id, category: "tech", title: "Hogwarts Javascript Meetup",
  description: "Come join us as we explore the magic of Javascript",
  location: "Hogwarts main hall", image_url: "hogwarts_js"
  })

kings_bitcoin = Group.create({
  owner_id: tyrion.id, category: "tech", title: "Hogwarts Javascript Meetup",
  description: "Farming money for drinks",
  location: "King's Landing", image_url: "kings_bitcoin"
  })

women_who_code = Group.create({
  owner_id: hermione.id, category: "tech", title: "Women Who Code",
  description: "We can code too!",
  location: "Hogwarts library", image_url: "women_who_code"
  })

grandpas_who_code = Group.create({
  owner_id: gandalf.id, category: "tech", title: "Grandpas Who Code",
  description: "We still got it.",
  location: "My horse", image_url: "grandpas_who_code"
  })

ruby_rails = Group.create({
  owner_id: ironman.id, category: "tech", title: "Ruby on Rails with Tony Stark",
  description: "It only took me an hour.",
  location: "My house", image_url: "ruby_rails"
  })

death_star_dev = Group.create({
  owner_id: darthvader.id, category: "tech", title: "Death Star Developers Group",
  description: "Open source project.",
  location: "Imperial City", image_url: "death_star_dev"
  })

# ADVENTURE
scubadiving_bb = Group.create({
  owner_id: spongebob.id, category: "adventure", title: "Scubadiving in Bikini Bottom",
  description: "Day-long trip to Bikini Bottom. Bring a helmet.",
  location: "Bikini Bottom", image_url: "scubadiving_bb"
  })

hikers_mordor = Group.create({
  owner_id: frodo.id, category: "adventure", title: "Hikers of Mordor",
  description: "Day-long trip to Sauron. Bring a Sam.",
  location: "Mordor", image_url: "hikers_mordor"
  })

nyc_cyclers = Group.create({
  owner_id: spiderman.id, category: "adventure", title: "NYC Bikers",
  description: "Get fit. Save the world.",
  location: "NYC", image_url: "nyc_cyclers"
  })

hot_rides = Group.create({
  owner_id: ironman.id, category: "adventure", title: "Hot Rides",
  description: "Ready for a ride?.",
  location: "NYC", image_url: "hot_rides"
  })

young_active = Group.create({
  owner_id: rachel.id, category: "adventure", title: "Young and Active",
  description: "While we are still young and sexy.",
  location: "NYC", image_url: "young_active"
  })

# MUSIC
christmas_hogsmeade = Group.create({
  owner_id: hermione.id, category: "music", title: "Christmas Caroling in Hogsmeade",
  description: "No singing experience required. Proceeds go to charity.",
  location: "Hogsmeade", image_url: "christmas_hogsmeade"
  })

instrument_jam = Group.create({
  owner_id: mickey.id, category: "music", title: "All Instrument Jam",
  description: "Only requirement is a high-pitched voice.",
  location: "Disney Castle music room", image_url: "instrument_jam"
  })

blues_lovers = Group.create({
  owner_id: obama.id, category: "music", title: "Blues Lovers",
  description: "A jolly time with some classics",
  location: "DC", image_url: "blues_lovers"
  })

acoustic_jam = Group.create({
  owner_id: groot.id, category: "music", title: "Acoustic_Jam",
  description: "I am groot.",
  location: "GROOT", image_url: "acoustic_jam"
  })

open_mic_yoda = Group.create({
  owner_id: leia.id, category: "music", title: "Open Mic at Yoda's",
  description: "Through music, things you will see.",
  location: "Yoda's house", image_url: "open_mic_yoda"
  })

# FAMILY
creative_dads = Group.create({
  owner_id: gandalf.id, category: "family", title: "Creative Dads of Canterbury",
  description: "No magical ability required.",
  location: "Gandalf's house", image_url: "creative_dads"
  })

midwives_women = Group.create({
  owner_id: leia.id, category: "family", title: "Midwives for Women",
  description: "Together in solidarity",
  location: "Alderaan", image_url: "midwives_women"
  })

stay_home_dads = Group.create({
  owner_id: darthvader.id, category: "family", title: "Stay at Home Dads",
  description: "Lightsabers will be provided.",
  location: "My crib", image_url: "stay_home_dads"
  })

intergalactic_homeschoolers = Group.create({
  owner_id: buzz.id, category: "family", title: "Intergalactic Homeschoolers",
  description: "To higher education and beyond!",
  location: "My crib", image_url: "intergalactic_homeschoolers"
  })

# ART
drop_clay_studio = Group.create({
  owner_id: groot.id, category: "art", title: "Drop-In Clay Studio",
  description: "I am Groot.",
  location: "GROOT", image_url: "drop_clay_studio"
  })

rock_carvers = Group.create({
  owner_id: tyrion.id, category: "art", title: "Rock-carvers of Casterly Rock",
  description: "The finest rock-carving. Bring wine.",
  location: "Casterly Rock", image_url: "rock_carvers"
  })

fine_arts = Group.create({
  owner_id: mickey.id, category: "art", title: "Appreciation of Fine Arts",
  description: "free stickers!",
  location: "Disney Museum", image_url: "fine_arts"
  })

figure_drawing = Group.create({
  owner_id: mcdonald.id, category: "art", title: "Figure Drawing Lessons",
  description: "Facepainting may be involved",
  location: "Ronald McDonald House", image_url: "figure_drawing"
  })

doodle_mickey = Group.create({
  owner_id: mickey.id, category: "art", title: "Doodling Meditation with Mickey",
  description: "Learn how to draw me and cope with your problems",
  location: "Disney Studio", image_url: "doodle_mickey"
  })

# BUSINESS
best_business = Group.create({
  owner_id: ironman.id, category: "business", title: "Best Business Referral Network",
  description: "Get to shake my hand.",
  location: "My house. Figure it out.", image_url: "best_business"
  })

mentor_project = Group.create({
  owner_id: darthvader.id, category: "business", title: "The Mentor Project",
  description: "How to be, and beat, your master.",
  location: "Imperial City", image_url: "mentor_project"
  })

ultimate_wealth_builders = Group.create({
  owner_id: trump.id, category: "business", title: "Ultimate Wealth Builders",
  description: "Rich parent required.",
  location: "Trump Tower", image_url: "ultimate_wealth_builders"
  })

# SPORTS
hogwarts_quidditch = Group.create({
  owner_id: hermione.id, category: "sports", title: "Hogwarts Quidditch Club",
  description: "For the quidditch novice.",
  location: "Hogwarts Quidditch Fields", image_url: "hogwarts_quidditch"
  })

nine_hole = Group.create({
  owner_id: trump.id, category: "sports", title: "9-Hole Golfers",
  description: "With the best, on the greatest of gold courses.",
  location: "Best country on Earth", image_url: "nine_hole"
  })

occasional_ball = Group.create({
  owner_id: obama.id, category: "sports", title: "Occasional Ball",
  description: "Barack o-balla",
  location: "My backyard", image_url: "occasional_ball"
  })

run_groot = Group.create({
  owner_id: groot.id, category: "sports", title: "Run with Groot",
  description: "I am groot",
  location: "GROOT", image_url: "run_groot"
  })

fitness_friends = Group.create({
  owner_id: spiderman.id, category: "sports", title: "Fitness with Friends",
  description: "Parcour experience recommended",
  location: "NYC", image_url: "fitness_friends"
  })

# BELIEFS
dragons_real = Group.create({
  owner_id: daenerys.id, category: "beliefs", title: "Are Dragons Real?",
  description: "Come see for yourself",
  location: "NYC", image_url: "dragons_real"
  })

meditation_gandalf = Group.create({
  owner_id: gandalf.id, category: "beliefs", title: "Meditation with Gandalf",
  description: "Magical abilities recommended",
  location: "My horse", image_url: "meditation_gandalf"
  })

healing_hypnosis = Group.create({
  owner_id: katniss.id, category: "beliefs", title: "Healing through Hypnosis",
  description: "let all your troubles wash away. Not shady I promise.",
  location: "A friend's place", image_url: "healing_hypnosis"
  })

# FOOD
omg_food = Group.create({
  owner_id: rachel.id, category: "food", title: "OMG I Love Food!",
  description: "Do you love food? Let's chat!",
  location: "My apartment", image_url: "omg_food"
  })

vegetarian_society = Group.create({
  owner_id: katniss.id, category: "food", title: "District 12 Vegetarian Society",
  description: "Local flora expertise",
  location: "The wild", image_url: "vegetarian_society"
  })

letdobrunch = Group.create({
  owner_id: obama.id, category: "food", title: "Let's Do Brunch",
  description: "Some brunch, some tea, some politics",
  location: "My garden", image_url: "letdobrunch"
  })

italian_hagrid = Group.create({
  owner_id: hermione.id, category: "food", title: "Italian Cooking with Hagrid",
  description: "A masterclass from the biggest guy",
  location: "Hagrid's cabin", image_url: "italian_hagrid"
  })





# MEMBERSHIPS
Membership.destroy_all

[ruby_rails, christmas_hogsmeade, hikers_mordor, stay_home_dads, ultimate_wealth_builders, omg_food].each do |group|
  Membership.create({user_id: guest.id, group_id: group.id})
end

Group.all.each do |group|
  num_members = rand(9) + 3
  User.all.shuffle[0..num_members].each do |new_member|
    Membership.create({user_id: new_member.id, group_id: group.id})
  end
  Membership.create({user_id: group.owner_id, group_id: group.id})
end
