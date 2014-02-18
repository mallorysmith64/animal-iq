// quiz variables - update these properties for each quiz       
var quizName = 'Rhino', // capitalized name of the animal featured in this quiz

correctStat = [
  'Awesome! Another rhino has joined your reserve!',
  'Great job! Your rhino population is really growing!',
  'Excellent! Look how fast your rhino population is growing!',
  'Great work! Your knowledge is really making a difference on the reserve!',
  'Good job! Another rhino has been spotted!'
], // array of statements that will be displayed for correct answers

baby = 'Very good! And look -- a baby rhino has been born on your reserve!', // special response for babies
    
badges = [
{ 
  badge : 'badge-none',
  scores : [ 0 ],
  text : "Sorry, you did not earn a badge. But I bet you'll help the reserve even more and earn a badge if you play again.",
  thanks : "Solid effort!",
  twitter : "Check+out+@World_Wildlife's+Rhino+IQ+game+http://wwf.to/16taOHk",
  name : "No Badge"
},
{ 
  badge : 'badge-red',
  scores : [ 1, 2 ],
  text : "You also earned the Red Rhino Badge!",
  thanks : "Pretty good! The rhino population is starting to grow!",
  twitter : "I+played+@World_Wildlife's+Rhino+IQ+game+and+earned+a+Red+Badge!+http://wwf.to/17fvPIP",
  name : "Red Rhino Badge"
},
{ 
  badge : 'badge-blue',
  scores : [ 3, 4 ],
  text : "You also earned the Blue Rhino Badge!",
  thanks : "Very good! You've helped secure a better future for the reserve!",
  twitter : "I+played+@World_Wildlife's+Rhino+IQ+game+and+earned+a+Blue+Badge!+http://wwf.to/10zFpRs",
  name : "Blue Rhino Badge"
},
{ 
  badge : 'badge-bronze',
  scores : [ 5, 6 ],
  text : "You also earned the Bronze Rhino Badge!",
  thanks : "Good job! The reserve is starting to thrive!",
  twitter : "I+played+@World_Wildlife's+Rhino+IQ+game+and+earned+a+Bronze+Badge!+http://wwf.to/16takRm",
  name : "Bronze Rhino Badge"
},
{ 
  badge : 'badge-silver',
  scores : [ 7, 8 ],
  text : "You also earned the Silver Rhino Badge!",
  thanks : "Great job! The reserve now has a healthy number of rhinos!",
  twitter : "I+played+@World_Wildlife's+Rhino+IQ+game+and+earned+a+Silver+Badge!+http://wwf.to/10f9yqK",
  name : "Silver Rhino Badge"
},
{ 
  badge : 'badge-gold',
  scores : [ 9 ],
  text : "You also earned the Gold Rhino Badge!",
  thanks : "Excellent work! You make a great ranger!",
  twitter : "I+played+@World_Wildlife's+Rhino+IQ+game+and+earned+a+Gold+Badge!+http://wwf.to/16taDff",
  name : "Gold Rhino Badge"
},
{ 
  badge : 'badge-platinum',
  scores : [ 10 ],
  text : "You also earned the Platinum Rhino Badge!",
  thanks : "Congratulations! You are a top-notch ranger!",
  twitter : "I+played+@World_Wildlife's+Rhino+IQ+game+and+earned+a+Platinum+Badge!+http://wwf.to/14R1uRr",
  name : "Platinum Rhino Badge"
}], // possible badges

// URLs for social network sharing at end of game
facebookUrl = "http://www.facebook.com/sharer.php?u=http://content.worldwildlife.org/animal-iq/rhino-iq/social/",
googleUrl = "https://plus.google.com/share?url=http://content.worldwildlife.org/animal-iq/rhino-iq/social/",
twitterUrl = "http://www.twitter.com/home?status=";

// button color as workaround for strange mobile issue where buttons show up in different colors
btnColor = '#CC7919';