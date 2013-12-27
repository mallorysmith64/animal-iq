// quiz variables - update these properties for each quiz       
var quizName = 'Elephant', // capitalized name of the animal featured in this quiz

correctStat = [
  'Well done. Another elephant has appeared on the horizon!',
  'Great job! The elephant population is really growing.',
  'Excellent work. More elephants are joining the reserve!',
  'Great work! Your knowledge is really helping out the reserve!',
  'Good job. The reserve is protecting more elephants!'
], // array of statements that will be displayed for correct answers

baby = 'Very good, and look -- a baby elephant has been born on the reserve!', // special response for babies
    
badges = [
{ 
  badge : 'badge-none',
  scores : [ 0 ],
  text : "So close! Bet if you try again, you'll earn your badge.",
  thanks : "Solid effort!",
  twitter : "Check+out+@World_Wildlife's+Elephant+IQ+game+http://wwf.to/Z7ZJxC",
  name : "No Badge"
},
{ 
  badge : 'badge-red',
  scores : [ 1, 2 ],
  text : "You also earned the Red Elephant Badge!",
  thanks : " Your work has made an impact! Elephants have started to appear on the reserve!",
  twitter : "I+played+@World_Wildlife's+Elephant+IQ+game+and+earned+a+Red+Badge!+http://wwf.to/18YGhVL",
  name : "Red Elephant Badge"
},
{ 
  badge : 'badge-blue',
  scores : [ 3, 4 ],
  text : "You also earned the Blue Elephant Badge!",
  thanks : "Very good! The population of elephants on the reserve is starting to grow!",
  twitter : "I+played+@World_Wildlife's+Elephant+IQ+game+and+earned+a+Blue+Badge!+http://wwf.to/10I2RKN",
  name : "Blue Elephant Badge"
},
{ 
  badge : 'badge-bronze',
  scores : [ 5, 6 ],
  text : "You also earned the Bronze Elephant Badge!",
  thanks : "Good job! The number of elephants on the reserve has increased!",
  twitter : "I+played+@World_Wildlife's+Elephant+IQ+game+and+earned+a+Bronze+Badge!+http://wwf.to/18YGrwx",
  name : "Bronze Elephant Badge"
},
{ 
  badge : 'badge-silver',
  scores : [ 7, 8 ],
  text : "You also earned the Silver Elephant Badge!",
  thanks : "Great job! The reserve and its elephants are really starting to thrive!",
  twitter : "I+played+@World_Wildlife's+Elephant+IQ+game+and+earned+a+Silver+Badge!+http://wwf.to/10Q4hnB",
  name : "Silver Elephant Badge"
},
{ 
  badge : 'badge-gold',
  scores : [ 9 ],
  text : "You also earned the Gold Elephant Badge!",
  thanks : "Excellent! The reserve has done an amazing job protecting the elephant population!",
  twitter : "I+played+@World_Wildlife's+Elephant+IQ+game+and+earned+a+Gold+Badge!+http://wwf.to/116P9B4",
  name : "Gold Elephant Badge"
},
{ 
  badge : 'badge-platinum',
  scores : [ 10 ],
  text : "You also earned the Platinum Elephant Badge!",
  thanks : "Congratulations! You're an elite ranger and the reserve is full of elephants!",
  twitter : "I+played+@World_Wildlife's+Elephant+IQ+game+and+earned+a+Platinum+Badge!+http://wwf.to/12p3GL5",
  name : "Platinum Elephant Badge"
}], // possible badges

// URLs for social network sharing at end of game
facebookUrl = "http://www.facebook.com/sharer.php?u=http://apps.worldwildlife.org/animal-iq/elephant-iq/social/",
googleUrl = "https://plus.google.com/share?url=http://apps.worldwildlife.org/animal-iq/elephant-iq/social/",
twitterUrl = "http://www.twitter.com/home?status=";