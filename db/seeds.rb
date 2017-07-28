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
  location: "Bikini Bottom", about: "I'm ready!",
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
  owner_id: tyrion.id, category: "tech", title: "King's Landing BitCoin Meetup",
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

Group.all.each do |group|
  num_members = rand(5) + 3
  User.all.shuffle[0...num_members].each do |new_member|
    Membership.create({user_id: new_member.id, group_id: group.id})
  end
  Membership.create({user_id: group.owner_id, group_id: group.id})
end





#EVENTS
Event.destroy_all

js_tutorial = Event.create({
  group_id: hogwarts_js.id, title: "Javascript Tutorial", host_id: hogwarts_js.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "For beginners", image_url: "js_tutorial"
})

frameworks_workshop = Event.create({
  group_id: hogwarts_js.id, title: "Frameworks Workshop", host_id: hogwarts_js.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "Node.js among other things", image_url: "frameworks_workshop"
})

intro_bitcoin = Event.create({
  group_id: kings_bitcoin.id, title: "An Introduction to BitCoin", host_id: kings_bitcoin.owner.id,
  location: "Dubrovnik, Croatia", description: "The magical world of virtual money", image_url: "intro_bitcoin"
})

calling_bitcoin = Event.create({
  group_id: kings_bitcoin.id, title: "Calling All BitCoiners", host_id: kings_bitcoin.owner.id,
  location: "Dubrovnik, Croatia", description: "Share your experience!", image_url: "calling_bitcoin"
})

women_first = Event.create({
  group_id: women_who_code.id, title: "First Meeting", host_id: women_who_code.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "Join us!", image_url: "women_first"
})

women_networking = Event.create({
  group_id: women_who_code.id, title: "Networking with Women in Business", host_id: women_who_code.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "Meet powerful women", image_url: "women_networking"
})

meetup = Event.create({
  group_id: grandpas_who_code.id, title: "meetup", host_id: grandpas_who_code.owner.id,
  location: "Glenorchy, New Zealand", description: "hello_world", image_url: "meetup"
})

open_house = Event.create({
  group_id: ruby_rails.id, title: "Open House", host_id: ruby_rails.owner.id,
  location: "New York City", description: "An invitation to my humble abode", image_url: "open_house"
})

rails_tutorial = Event.create({
  group_id: ruby_rails.id, title: "Rails Tutorial with Jarvis", host_id: ruby_rails.owner.id,
  location: "New York City", description: "Jarvis is actually a much better teacher than me.", image_url: "rails_tutorial"
})

structural_integrity = Event.create({
  group_id: death_star_dev.id, title: "Important Structural Integrity Test", host_id: death_star_dev.owner.id,
  location: "Mount Etna, Italy", description: "Free chipotle after the test if it passes", image_url: "structural_integrity"
})

recalculation = Event.create({
  group_id: death_star_dev.id, title: "Variable Recalculation", host_id: death_star_dev.owner.id,
  location: "Mount Etna, Italy", description: "Clearly we need some work", image_url: "recalculation"
})

structural_integrity2 = Event.create({
  group_id: death_star_dev.id, title: "Crucial Structural Integrity Test", host_id: death_star_dev.owner.id,
  location: "Mount Etna, Italy", description: "Free chipotle after the test if it passes", image_url: "structural_integrity2"
})

intro_diving = Event.create({
  group_id: scubadiving_bb.id, title: "Intro to Diving", host_id: scubadiving_bb.owner.id,
  location: "Bikini Atoll, Marshall Islands", description: "Bring your gear", image_url: "intro_diving"
})

talk_marine = Event.create({
  group_id: scubadiving_bb.id, title: "A Talk on Marine Preservation", host_id: scubadiving_bb.owner.id,
  location: "Bikini Atoll, Marshall Islands", description: "How to not scare away the pretty fish, and how to not look pretty to the scary fish", image_url: "talk_marine"
})

easy_hike = Event.create({
  group_id: hikers_mordor.id, title: "Easy Hike Attempt", host_id: hikers_mordor.owner.id,
  location: "Mount Ngauruhoe, New Zealand", description: "For noobs", image_url: "easy_hike"
})

medium_hike = Event.create({
  group_id: hikers_mordor.id, title: "Medium Hike Attempt", host_id: hikers_mordor.owner.id,
  location: "Mount Ngauruhoe, New Zealand", description: "For intermediates", image_url: "medium_hike"
})

hard_hike = Event.create({
  group_id: hikers_mordor.id, title: "Hard Hike Attempt", host_id: hikers_mordor.owner.id,
  location: "Mount Ngauruhoe, New Zealand", description: "For experts", image_url: "hard_hike"
})

times_square = Event.create({
  group_id: nyc_cyclers.id, title: "First Ride through Times Square", host_id: nyc_cyclers.owner.id,
  location: "New York City", description: "Come join us for our first ride through the city!", image_url: "times_square"
})

fundamentals_racing = Event.create({
  group_id: hot_rides.id, title: "The Fundamentals of Racing", host_id: hot_rides.owner.id,
  location: "New York City", description: "Come if you don't want to flip over in your first race", image_url: "fundamentals_racing"
})

first_race = Event.create({
  group_id: hot_rides.id, title: "First Race!", host_id: hot_rides.owner.id,
  location: "New York City", description: "Leggo", image_url: "first_race"
})

yoga_night = Event.create({
  group_id: young_active.id, title: "Yoga Night!", host_id: young_active.owner.id,
  location: "New York City", description: "Time to loosen your joints! And your life!", image_url: "yoga_night"
})

half_marathon = Event.create({
  group_id: young_active.id, title: "Half Marathon", host_id: young_active.owner.id,
  location: "New York City", description: "Join us in this popular event! Beginners especially welcome!", image_url: "half_marathon"
})

charity_walk = Event.create({
  group_id: young_active.id, title: "Charity Walk", host_id: young_active.owner.id,
  location: "New York City", description: "Proceeds go to the children's hospital", image_url: "charity_walk"
})

silent_night = Event.create({
  group_id: christmas_hogsmeade.id, title: "Silent Night Rehearsal", host_id: christmas_hogsmeade.owner.id,
  location: "Goathland, North Yorkshire, England", description: "PLEASE BRING WANDS", image_url: "silent_night"
})

on_composition = Event.create({
  group_id: instrument_jam.id, title: "On Composition - Minnie Mouse", host_id: instrument_jam.owner.id,
  location: "Anaheim CA", description: "A guest appearance by the master musician Minnie", image_url: "on_composition"
})

night_of_blues = Event.create({
  group_id: blues_lovers.id, title: "A Night of Blues", host_id: blues_lovers.owner.id,
  location: "Washington DC", description: "A collection of history's greatest hits", image_url: "night_of_blues"
})

first_jam = Event.create({
  group_id: blues_lovers.id, title: "First Jam Session", host_id: blues_lovers.owner.id,
  location: "Washington DC", description: "Let's play some blues!", image_url: "first_jam"
})

bring_instruments = Event.create({
  group_id: acoustic_jam.id, title: "Bring All Instruments", host_id: acoustic_jam.owner.id,
  location: "Cartersville, Georgia", description: "I AM GROOT", image_url: "bring_instruments"
})

lets_play = Event.create({
  group_id: acoustic_jam.id, title: "Let's Play", host_id: acoustic_jam.owner.id,
  location: "Cartersville, Georgia", description: "I AM GROOT", image_url: "lets_play"
})

first_concert = Event.create({
  group_id: open_mic_yoda.id, title: "First Concert", host_id: open_mic_yoda.owner.id,
  location: "Death Valley, NV", description: "The greatest musicians in the universe", image_url: "first_concert"
})

intro_delivery = Event.create({
  group_id: midwives_women.id, title: "Intro to Delivery", host_id: midwives_women.owner.id,
  location: "Grindelwald, Switzerland", description: "The ins and outs of midwiving", image_url: "intro_delivery"
})

bring_kids = Event.create({
  group_id: creative_dads.id, title: "Bring Your Kids!", host_id: creative_dads.owner.id,
  location: "Mount Etna, Italy", description: "Bring your children, and share your experience! Free Food.", image_url: "bring_kids"
})

stop_crying = Event.create({
  group_id: creative_dads.id, title: "How to Stop Crying Babies", host_id: creative_dads.owner.id,
  location: "Mount Etna, Italy", description: "What does it take to stop a crying child?", image_url: "stop_crying"
})

bedtime_stories = Event.create({
  group_id: creative_dads.id, title: "Best Bedtime Stories", host_id: creative_dads.owner.id,
  location: "Mount Etna, Italy", description: "Discussion on which bedtime stories are most beneficial for development", image_url: "bedtime_stories"
})

textbook_talk = Event.create({
  group_id: intergalactic_homeschoolers.id, title: "Textbook Talk", host_id: intergalactic_homeschoolers.owner.id,
  location: "Emeryville, California", description: "A talk on the best available resources for young homeschooled children", image_url: "textbook_talk"
})

math_important = Event.create({
  group_id: intergalactic_homeschoolers.id, title: "How Important is Math?", host_id: intergalactic_homeschoolers.owner.id,
  location: "Emeryville, California", description: "Let's discuss math. Why do we need it?", image_url: "math_important"
})

art_fundamentals = Event.create({
  group_id: drop_clay_studio.id, title: "Mastering the Fundamentals", host_id: drop_clay_studio.owner.id,
  location: "Cartersville, Georgia", description: "I AM GROOT", image_url: "art_fundamentals"
})

first_dig = Event.create({
  group_id: rock_carvers.id, title: "First Dig!", host_id: rock_carvers.owner.id,
  location: "Ballintoy, Northern Ireland", description: "Join us for our first dig for our materials!", image_url: "first_dig"
})

field_trip = Event.create({
  group_id: fine_arts.id, title: "Field Trip to the Museum!", host_id: fine_arts.owner.id,
  location: "Anaheim, CA", description: "Join us as we appreciate some fine art", image_url: "field_trip"
})

first_drawing = Event.create({
  group_id: figure_drawing.id, title: "First Drawing", host_id: figure_drawing.owner.id,
  location: "San Francisco, CA", description: "Materials will be provided", image_url: "first_drawing"
})

second_drawing = Event.create({
  group_id: figure_drawing.id, title: "Second Drawing", host_id: figure_drawing.owner.id,
  location: "San Francisco, CA", description: "Materials will be provided", image_url: "second_drawing"
})

mind_meditation = Event.create({
  group_id: doodle_mickey.id, title: "A Mind in Meditation", host_id: doodle_mickey.owner.id,
  location: "Anaheim, CA", description: "A discussion on how art can meditative. A short session afterwards.", image_url: "mind_meditation"
})

shake_hand = Event.create({
  group_id: best_business.id, title: "Shake My Hand", host_id: best_business.owner.id,
  location: "New York City", description: "You get to actually shake my hand.", image_url: "shake_hand"
})

reverse_psychology = Event.create({
  group_id: mentor_project.id, title: "Reverse Psychology", host_id: mentor_project.owner.id,
  location: "Mount Etna, Italy", description: "How to use reverse psychology to become the best", image_url: "reverse_psychology"
})

good_cop = Event.create({
  group_id: mentor_project.id, title: "Good Cop, Bad Cop", host_id: mentor_project.owner.id,
  location: "Mount Etna, Italy", description: "The art of motivating your pupils", image_url: "good_cop"
})

networking_session = Event.create({
  group_id: ultimate_wealth_builders.id, title: "Networking Session", host_id: ultimate_wealth_builders.owner.id,
  location: "New York City", description: "Talk to me. For free.", image_url: "networking_session"
})

have_money = Event.create({
  group_id: ultimate_wealth_builders.id, title: "How to Have Money", host_id: ultimate_wealth_builders.owner.id,
  location: "New York City", description: "It's really simple actually.", image_url: "have_money"
})

first_practice = Event.create({
  group_id: hogwarts_quidditch.id, title: "First Practice", host_id: hogwarts_quidditch.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "Bring all your gear. It's gonna be rough.", image_url: "first_practice"
})

second_practice = Event.create({
  group_id: hogwarts_quidditch.id, title: "Second Practice", host_id: hogwarts_quidditch.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "Bring all your gear. It's gonna be rough.", image_url: "second_practice"
})

pizza_party = Event.create({
  group_id: hogwarts_quidditch.id, title: "Pizza Party", host_id: hogwarts_quidditch.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "A celebration for the season!", image_url: "pizza_party"
})

what_golf = Event.create({
  group_id: nine_hole.id, title: "What is golf?", host_id: nine_hole.owner.id,
  location: "New York City", description: "Lemme tell you something about golf", image_url: "what_golf"
})

talk_pro = Event.create({
  group_id: nine_hole.id, title: "Talk with a pro", host_id: nine_hole.owner.id,
  location: "New York City", description: "We are getting the best of pros to come see us.", image_url: "talk_pro"
})

lets_ball = Event.create({
  group_id: occasional_ball.id, title: "Let's Ball", host_id: occasional_ball.owner.id,
  location: "New York City", description: "A quick pickup game?", image_url: "lets_ball"
})

first_run = Event.create({
  group_id: run_groot.id, title: "First Run", host_id: run_groot.owner.id,
  location: "Cartersville, Georgia", description: "I AM GROOT", image_url: "first_run"
})

rehabilitation = Event.create({
  group_id: run_groot.id, title: "Rehabilitation", host_id: run_groot.owner.id,
  location: "Cartersville, Georgia", description: "I AM GROOT", image_url: "rehabilitation"
})

note_diet = Event.create({
  group_id: fitness_friends.id, title: "A Note on Diet", host_id: fitness_friends.owner.id,
  location: "New York City", description: "Let's talk diet", image_url: "note_diet"
})

weigh_in = Event.create({
  group_id: fitness_friends.id, title: "Weigh-In!", host_id: fitness_friends.owner.id,
  location: "New York City", description: "Don't be afraid. We have to start somewhere.", image_url: "weigh_in"
})

history_dragons = Event.create({
  group_id: dragons_real.id, title: "The History of Dragons", host_id: dragons_real.owner.id,
  location: "Reyjkavik, Iceland", description: "We have a PhD joining us.", image_url: "history_dragons"
})

playing_fire = Event.create({
  group_id: dragons_real.id, title: "Playing with Fire", host_id: dragons_real.owner.id,
  location: "Reyjkavik, Iceland", description: "This is the best way to get acclimated to dragons", image_url: "playing_fire"
})

mindful_mediation = Event.create({
  group_id: meditation_gandalf.id, title: "Mindful Meditation", host_id: meditation_gandalf.owner.id,
  location: "Glenorchy, New Zealand", description: "Peace. In your mind.", image_url: "mindful_mediation"
})

white_light = Event.create({
  group_id: meditation_gandalf.id, title: "White Light Healing", host_id: meditation_gandalf.owner.id,
  location: "Glenorchy, New Zealand", description: "New discovery", image_url: "white_light"
})

naptime = Event.create({
  group_id: healing_hypnosis.id, title: "Naptime", host_id: healing_hypnosis.owner.id,
  location: "Asheville, North Carolina", description: "You know what time it is", image_url: "naptime"
})

art_hypnosis = Event.create({
  group_id: healing_hypnosis.id, title: "The Art of Hypnosis", host_id: healing_hypnosis.owner.id,
  location: "Asheville, North Carolina", description: "It's better than what you imagine", image_url: "art_hypnosis"
})

taste_test = Event.create({
  group_id: omg_food.id, title: "Taste Test", host_id: omg_food.owner.id,
  location: "New York City", description: "The battle of the cuisines!", image_url: "taste_test"
})

food_truck = Event.create({
  group_id: omg_food.id, title: "Food Truck Field Trip", host_id: omg_food.owner.id,
  location: "New York City", description: "The best field trip ever.", image_url: "food_truck"
})

green_eating = Event.create({
  group_id: vegetarian_society.id, title: "A Talk on Green Eating", host_id: vegetarian_society.owner.id,
  location: "New York City", description: "Join us as we discuss the environmental implications of our diet", image_url: "green_eating"
})

first_brunch = Event.create({
  group_id: letsdobrunch.id, title: "First Brunch", host_id: letsdobrunch.owner.id,
  location: "Hyde Park, Chicago", description: "This is the best brunch place", image_url: "first_brunch"
})

pasta_fundamentals = Event.create({
  group_id: italian_hagrid.id, title: "The Fundamentals of Pasta", host_id: italian_hagrid.owner.id,
  location: "Alnwick Castle, Northumberland, England", description: "It's all about the noodles", image_url: "pasta_fundamentals"
})




Event.all.each do |event|
  num = rand(30)
  random_datetime = num.day.from_now.beginning_of_hour.localtime + num.hour
  event.datetime = random_datetime
  event.save
end





#RSVPS
Rsvp.destroy_all

Event.all.each do |event|
  num_rsvps = rand(5) + 3
  User.all.shuffle[0...num_rsvps].each do |new_rsvp|
    Rsvp.create({user_id: new_rsvp.id, event_id: event.id})
  end
  Rsvp.create({user_id: event.host_id, event_id: event.id})
end
