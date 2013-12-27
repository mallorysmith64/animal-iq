// quiz variables - update these properties for each quiz       
var quizName = 'Polar Bear', // capitalized name of the animal featured in this quiz

correctStat = [
  'Well done. Another polar bear has appeared on the ice!',
  'Great job! The polar bear population is really growing.',
  'Excellent work. More polar bears are roaming the sea ice!',
  'Great work! Your knowledge is really helping out the polar bears!',
  'Good job. The area is protecting more polar bears!'
], // array of statements that will be displayed for correct answers

baby = 'Very good, and look -- a baby polar bear has been born!', // special response for babies
    
badges = [
{ 
  badge : 'badge-none',
  scores : [ 0 ],
  text : "So close! Bet if you try again, you'll earn your badge.",
  thanks : "Solid effort!",
  twitter : "Check+out+@World_Wildlife's+Polar+Bear+IQ+game+http://wwf.to/1b7ZOXC",
  name : "No Badge"
},
{ 
  badge : 'badge-red',
  scores : [ 1, 2 ],
  text : "You also earned the Red Polar Bear Badge!",
  thanks : " Your work has made an impact! Polar bears have started to appear on the ice!",
  twitter : "I+played+@World_Wildlife's+Polar+Bear+IQ+game+and+earned+a+Red+Badge!+http://wwf.to/1b80Gvb",
  name : "Red Polar Bear Badge"
},
{ 
  badge : 'badge-blue',
  scores : [ 3, 4 ],
  text : "You also earned the Blue Polar Bear Badge!",
  thanks : "Very good! The population of polar bears on the sea ice is starting to grow!",
  twitter : "I+played+@World_Wildlife's+Polar+Bear+IQ+game+and+earned+a+Blue+Badge!+http://wwf.to/132b51E",
  name : "Blue Polar Bear Badge"
},
{ 
  badge : 'badge-bronze',
  scores : [ 5, 6 ],
  text : "You also earned the Bronze Polar Bear Badge!",
  thanks : "Good job! The number of polar bears on the sea ice has increased!",
  twitter : "I+played+@World_Wildlife's+Polar+Bear+IQ+game+and+earned+a+Bronze+Badge!+http://wwf.to/160rM0u",
  name : "Bronze Polar Bear Badge"
},
{ 
  badge : 'badge-silver',
  scores : [ 7, 8 ],
  text : "You also earned the Silver Polar Bear Badge!",
  thanks : "Great job! The sea ice and its polar bears are really starting to thrive!",
  twitter : "I+played+@World_Wildlife's+Polar+Bear+IQ+game+and+earned+a+Silver+Badge!+http://wwf.to/1bFCwHW",
  name : "Silver Polar Bear Badge"
},
{ 
  badge : 'badge-gold',
  scores : [ 9 ],
  text : "You also earned the Gold Polar Bear Badge!",
  thanks : "Excellent! You've done an amazing job protecting the polar bear population!",
  twitter : "I+played+@World_Wildlife's+Polar+Bear+IQ+game+and+earned+a+Gold+Badge!+http://wwf.to/17y3zjs",
  name : "Gold Polar Bear Badge"
},
{ 
  badge : 'badge-platinum',
  scores : [ 10 ],
  text : "You also earned the Platinum Polar Bear Badge!",
  thanks : "Congratulations! You're an elite ranger and the sea ice is full of polar bears!",
  twitter : "I+played+@World_Wildlife's+Polar+Bear+IQ+game+and+earned+a+Platinum+Badge!+http://wwf.to/17y3H2z",
  name : "Platinum Polar Bear Badge"
}], // possible badges

btnColor = '#0032B9', // button color

// URLs for social network sharing at end of game
facebookUrl = "http://www.facebook.com/sharer.php?u=http://apps.worldwildlife.org/animal-iq/polar-bear-iq/social/",
googleUrl = "https://plus.google.com/share?url=http://apps.worldwildlife.org/animal-iq/polar-bear-iq/social/",
twitterUrl = "http://www.twitter.com/home?status=";