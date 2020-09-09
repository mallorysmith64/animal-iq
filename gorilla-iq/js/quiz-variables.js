// quiz variables - update these properties for each quiz       
var quizName = 'Gorilla', // capitalized name of the animal featured in this quiz

correctStat = [
  'Well done. Another gorilla has appeared on the horizon!',
  'Great job! The gorilla population is really growing.',
  'Excellent work. More gorillas are joining the reserve!',
  'Great work! Your knowledge is really helping out the reserve!',
  'Good job. The reserve is protecting more gorillas!'
], // array of statements that will be displayed for correct answers

baby = 'Very good, and look -- a baby gorilla has been born on the reserve!', // special response for babies
    
badges = [
{ 
  badge : 'badge-none',
  scores : [ 0 ],
  text : "So close! Bet if you try again, you'll earn your badge.",
  thanks : "Solid effort!",
  twitter : "Check+out+@World_Wildlife's+Gorilla+IQ+game+http://wwf.to/Z7ZJxC",
  name : "No Badge"
},
{ 
  badge : 'badge-red',
  scores : [ 1, 2 ],
  text : "You also earned the Red Gorilla Badge!",
  thanks : " Your work has made an impact! Gorillas have started to appear on the reserve!",
  twitter : "I+played+@World_Wildlife's+Gorilla+IQ+game+and+earned+a+Red+Badge!+http://wwf.to/18YGhVL",
  name : "Red Gorilla Badge"
},
{ 
  badge : 'badge-blue',
  scores : [ 3, 4 ],
  text : "You also earned the Blue Gorilla Badge!",
  thanks : "Very good! The population of gorillas on the reserve is starting to grow!",
  twitter : "I+played+@World_Wildlife's+Gorilla+IQ+game+and+earned+a+Blue+Badge!+http://wwf.to/10I2RKN",
  name : "Blue Gorilla Badge"
},
{ 
  badge : 'badge-bronze',
  scores : [ 5, 6 ],
  text : "You also earned the Bronze Gorilla Badge!",
  thanks : "Good job! The number of gorillas on the reserve has increased!",
  twitter : "I+played+@World_Wildlife's+Gorilla+IQ+game+and+earned+a+Bronze+Badge!+http://wwf.to/18YGrwx",
  name : "Bronze Gorilla Badge"
},
{ 
  badge : 'badge-silver',
  scores : [ 7, 8 ],
  text : "You also earned the Silver Gorilla Badge!",
  thanks : "Great job! The reserve and its gorillas are really starting to thrive!",
  twitter : "I+played+@World_Wildlife's+Gorilla+IQ+game+and+earned+a+Silver+Badge!+http://wwf.to/10Q4hnB",
  name : "Silver Gorilla Badge"
},
{ 
  badge : 'badge-gold',
  scores : [ 9 ],
  text : "You also earned the Gold Gorilla Badge!",
  thanks : "Excellent! The reserve has done an amazing job protecting the gorilla population!",
  twitter : "I+played+@World_Wildlife's+Gorilla+IQ+game+and+earned+a+Gold+Badge!+http://wwf.to/116P9B4",
  name : "Gold Gorilla Badge"
},
{ 
  badge : 'badge-platinum',
  scores : [ 10 ],
  text : "You also earned the Platinum Gorilla Badge!",
  thanks : "Congratulations! You're an elite ranger and the reserve is full of gorillas!",
  twitter : "I+played+@World_Wildlife's+Gorilla+IQ+game+and+earned+a+Platinum+Badge!+http://wwf.to/12p3GL5",
  name : "Platinum Gorilla Badge"
}], // possible badges

btnColor = '#CC7919', // button color

// URLs for social network sharing at end of game
facebookUrl = "http://www.facebook.com/sharer.php?u=http://content.worldwildlife.org/animal-iq/gorilla-iq/social/",
googleUrl = "https://plus.google.com/share?url=http://content.worldwildlife.org/animal-iq/gorilla-iq/social/",
twitterUrl = "http://www.twitter.com/home?status=";