// quiz variables - update these properties for each quiz       
var quizName = 'Tiger', // capitalized name of the animal featured in this quiz

correctStat = [
  'Well done. Another tiger has appeared on the horizon!',
  'Great job! The tiger population is really growing.',
  'Excellent work. More tigers are joining the reserve!',
  'Great work! Your knowledge is really helping out the reserve!',
  'Good job. The reserve is protecting more tigers!'
], // array of statements that will be displayed for correct answers

baby = 'Very good, and look -- a baby tiger has been born on the reserve!', // special response for babies
    
badges = [
{
  badge : 'badge-none',
  scores : [ 0 ],
  text : "So close! Bet if you try again, you'll earn your badge.",
  thanks : "Solid effort!",
  twitter : "Check+out+@World_Wildlife's+Tiger+IQ+game+http://wwf.to/1ljMgx9",
  name : "No Badge"
},
{
  badge : 'badge-red',
  scores : [ 1, 2 ],
  text : "You also earned the Red Tiger Badge!",
  thanks : " Your work has made an impact! Tigers have started to appear on the reserve!",
  twitter : "I+played+@World_Wildlife's+Tiger+IQ+game+and+earned+a+Red+Badge!+http://wwf.to/1f8PwEg",
  name : "Red Tiger Badge"
},
{ 
  badge : 'badge-blue',
  scores : [ 3, 4 ],
  text : "You also earned the Blue Tiger Badge!",
  thanks : "Very good! The population of tigers on the reserve is starting to grow!",
  twitter : "I+played+@World_Wildlife's+Tiger+IQ+game+and+earned+a+Blue+Badge!+http://wwf.to/1iGFdwH",
  name : "Blue Tiger Badge"
},
{ 
  badge : 'badge-bronze',
  scores : [ 5, 6 ],
  text : "You also earned the Bronze Tiger Badge!",
  thanks : "Good job! The number of tigers on the reserve has increased!",
  twitter : "I+played+@World_Wildlife's+Tiger+IQ+game+and+earned+a+Bronze+Badge!+http://wwf.to/1b0yWaa",
  name : "Bronze Tiger Badge"
},
{ 
  badge : 'badge-silver',
  scores : [ 7, 8 ],
  text : "You also earned the Silver Tiger Badge!",
  thanks : "Great job! The reserve and its tigers are really starting to thrive!",
  twitter : "I+played+@World_Wildlife's+Tiger+IQ+game+and+earned+a+Silver+Badge!+http://wwf.to/1f8PAUi",
  name : "Silver Tiger Badge"
},
{ 
  badge : 'badge-gold',
  scores : [ 9 ],
  text : "You also earned the Gold Tiger Badge!",
  thanks : "Excellent! The reserve has done an amazing job protecting the tiger population!",
  twitter : "I+played+@World_Wildlife's+Tiger+IQ+game+and+earned+a+Gold+Badge!+http://wwf.to/1gmF4OE",
  name : "Gold Tiger Badge"
},
{ 
  badge : 'badge-platinum',
  scores : [ 10 ],
  text : "You also earned the Platinum Tiger Badge!",
  thanks : "Congratulations! You're an elite ranger and the reserve is full of tigers!",
  twitter : "I+played+@World_Wildlife's+Tiger+IQ+game+and+earned+a+Platinum+Badge!+http://wwf.to/1ft9wBK",
  name : "Platinum Tiger Badge"
}], // possible badges

btnColor = '#CC7919', // button color

// URLs for social network sharing at end of game
facebookUrl = "http://www.facebook.com/sharer.php?u=http://content.worldwildlife.org/animal-iq/tiger-iq/social/",
googleUrl = "https://plus.google.com/share?url=http://content.worldwildlife.org/animal-iq/tiger-iq/social/",
twitterUrl = "http://www.twitter.com/home?status=";