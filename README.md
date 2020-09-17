# Animal IQ

'Out-of-the-box', the game should be easy to translate and reuse for multiple games with little coding knowledge. Customization for other animals are not developed yet and may require design work.

Code has been tested on Internet Explorer 8 and up, Firefox, Google Chrome, Safari, iPhone, iPad, Android devices. It should work locally in Firefox; all other browsers typically require that it is on a server to access the XML file.

## Summary

The game is composed of several major pieces:

* Cheats - you know you want them :)
* XML
* Images
* HTML
* Stylesheets
* JavaScript
* Social

## Getting Started

Step 1: Fork repository <br>

Step 2: Clone repository <br>
git clone https://github.com/WWF-International/animal-iq.git <br>

Step 3: Use npm to install serve <br>
npm i serve <br>
or <br>
npm i -g serve <br>

Note: serve is used for static sites, SPAs, and static files <br>

Step 4: Make sure package.json has start script
```
"scripts" {
	"start": "serve"
}
```

Step 4: Run npm start and go to localhost

## Cheats
A few hacks have been added to make the game easier to test as you develop and refine it.

To speed up the game, you can add 'fast' as a parameter at the end of the URL:
../rhino-iq/index.html?fast

You can also jump to the badge of your choice by adding a badge=[score] parameter like:
../rhino-iq/index.html?badge=5

(Please note that the screen may be a little longer than it would normally be if you played the game all the way through. But it's just for testing so no worries.)

## XML

quiz.xml contains the text and image references for each question in the quiz. It is called by quiz.js which loads in the file for the game. Questions are shown in the order they are entered into the XML.

You can have any number of questions - the JavaScript will adjust the game automatically. (WWF-US selected 10 as a reasonable number). Quiz questions should include facts, threats to the species, information about WWF's work, and ways people can help; when placed in that order, it can help tell a story about the species and how people can help by supporting WWF's work. 

* screen : entire contents of the question

* question : the text for the question

* choices : contains all the available responses to the question

* choice : text for the response; also indicate if it is the correct answer to the question using the attribute correct="yes" or correct="no"

* explanation : displayed after the question is answered to provide additional information

* picture : reference to the photo that will appear with the explanation after the question is answered

* attribution : photo credit

* source : information on where the answer to the question can be found (used for reference; is 
not displayed in the quiz)

## Images

Images in the game are a combination of vector-style shapes and photos. For images that received treatment in Photoshop, the original source files are available in the Image Sources directory.

* Logo : The logo is used to help brand the game as a series.
	- Additional Notes : 
		+ The WWF font is used for the text in the logo
		+ A shape of the animal's head is traced using the pen tool
		+ Shape should have a white stroke of around 30px so it is still visible when scaled down 
	- Filename : Desktop - logo-iq.png; Mobile - logo-iq-sm.png
	- Dimensions : Desktop - anything x 66px (may give or take a few pixels depending on the shape); Mobile - anything x 60px (may give or take a few pixels depending on the shape) 
	- PSD : iq-logo.psd (example using rhino IQ logo)

* Introduction photo : An endearing vertical photo of the species works best. 
	- Additional Notes : Use a PNG with a transparent background.
	- Filename : description-of-photo.png
	- Dimensions : 265 x 461px (approximate - you can give or take a few pixels and work it into the space)
	- PSD : There is no PSD since each one will be a different photo

* Animal Progress Line : A new animal is added to the progress line as players answer questions correctly.
	- Additional Notes : 
		+ Shapes are traced using photos of the animal in different poses
		+ Side profile photos work best
		+ There should be at least 4 shapes created to give diversity, including one baby animal
		+ Each shape should have three color tones created (a light, medium, and dark)
		+ Use a white stroke around 6px so the animal is visually distinguished from the others
		+ All should be placed on a sprite sheet to cut down on load time for the game
	- Filename : animal-sprites.png 
	- Dimensions : each shape should fit within a space of 150 x 75px
	- PSD : No PSD since these will be different for each animal. Examples of rhino shapes have been added as a guide: black-rhino.psd, rhino-with-baby.psd, rhino-eating.psd, rhino-forward.psd
	
* Photos displayed with explanations : These appear after a question is answered.
	- Additional Notes : Select variety in the photos - try to choose photos that support the particular question/explanation.
	- Filename : description-of-photo.jpg
	- Dimensions : 525 x 450px
	- PSD : large-image.psd (copy or move the mask off an existing layer)

* Badges : Displayed at the end of the game. 
	- Additional Notes : 
		+ There are seven badges, each corresponding to a different score level: Platinum, Gold, Silver, Bronze, Blue, Red, and None (Mystery Badge)
		+ Platinum Badge is the only animated badge
		+ Small versions should also be created for the teaser text that invites the person to play again for a better badge
	- Filename : badge-color.png (except for the platinum badge which is badge-platinum.gif)
	- Dimensions : Large Badge - 175 x 182px; Small badge - 26 x 27px
	- PSD : badge.psd

* Photos displayed with score : At the end of the game, a photo of the species is shown on the score page.
	- Additional Notes : Try to select photos that seem representative of the number of animals that would be on the reserve for the score (for example, a perfect score may show a herd of the animal).
	- Filename : final-badgecolor.jpg
	- Dimensions : 525 x 450px
	- PSD : large-image.psd

* Grass/Habitat Foreground : To give the game some dimension, grass or some other indication of habitat is overlaid on the feet of the animals in the progress bar.
	- Additional Notes : 
		+ Should be an image that repeats seamlessly
		+ The image should not be so busy that it distracts from the species.
	- Filename : habitat-back.png
	- Dimensions : anything x 100px (height is important for it to map correctly to the screen)
	- PSD : No PSD as it will be different for each species

* Grass/Habitat Background : To give the game some dimension, grass or some other indication of habitat is placed behind the animals in the progress bar.
	- Additional Notes : 
		+ Should be semi-transparent to give the impression of distance
		+ Should be an image that repeats seamlessly
		+ The image should not be so busy that it distracts from the species
	- Filename : habitat-back.png
	- Dimensions : anything x 100px (height is important for it to map correctly to the screen)
	- PSD : No PSD as it will be different for each species

* Action : Displayed at the end of the quiz for desktop browsers
	- Filename : action.jpg
	- Dimensions : 160 x 150px
	- PSD : No PSD as it will be different for each game
	
* Other images that do not need to be customized for different species : 
	- bark.png, bark2.png : borders for the window
	- logo.png, logo-sm.png :  WWF tabbed logo for desktop and mobile
	- pulley.png : used at bottom of window shade
	- social.png : sprites for social sharing icons at the end of the game
	- table.png : background layer for the introduction screen
	- texture.png : used for the window shade

## HTML

Much of the text for the quiz is stored in the HTML file. 

* index.html - introduction screen and the game
  - Title, meta description, #iq-logo - update to the correct animal name
  - .introText - update the h1 and p to reflect the correct animal
  - .badge - update the social media links to the correct redirect
  - .help - update with the call-to-action for this quiz

## Stylesheets

Located in css within the game directory, you can adjust the core elements to differentiate the games: 
* css-variables.css - primarily, you will need to adjust the dimensions for the IQ logo and the background-position and left margin for the animal sprites in the progress bar. You also have the option of adjusting the colors for some elements.
* ie.css - these styles are specific for IE8 and below. You may need to adjust a few image names in this file.

CSS that should not be edited unless creating a highly customized game:

* style.css - core CSS file for the game; located in global-css in the root directory
* ie.css - IE8-specific styles; located in global-css in the root directory
* css-images.css - points to background images that will change based on the game. Since the images should always have the same name, there is no need to edit this file. Located in css folder within game directory. 

## JavaScript

The only JavaScript file that will need editing for new quizzes is quiz-variables.js (located in the js folder for a game). A description of each variable you can set in this file follows:
       
* quizName : capitalized name of the animal featured in this quiz

* correctStat : array of statements that will be displayed for correct answers

* baby : special text displayed for correct answers that add a baby to the reserve

* badges : the seven available badges
	- badge : image name for the badge (do not change)
	- scores : array of the scores that the badge is applied to
	- text : text that appears on the score screen 
	- thanks : large text that appears on the score screen
	- twitter : custom Twitter text for the Twitter share link for the badge; must follow Twitter's format of using '+' as spaces for the share link
	- name : name of the badge

* btnColor : the color for the buttons in the game; this is used to correct a bug in iOS devices that seems to show the buttons with different colors unless it is specifically set
	
Included Libraries : These should not be edited unless you are adding functionality or highly customizing the game. All libraries are stored in the global-js folder at root level

* quiz.js - core JS behind the game
* jquery-1.7.min.js - jQuery library
* modernizr.js - custom build of modernizr that only includes the HTML5shiv

## Social

For each possible badge and social network, you will need to create special links that will be used on the quiz results screen to allow easy sharing.

* Twitter
	- For each badge, you'll need to create bit.ly link

* Facebook
	- In the social folder within the game - [badge]-name.html
	- Title, meta description, og-image, og-description should all be updated to the correct animal
	- Under linkURL - update the utm_campaign parameter to [animal]-iq
	- Body - update the link tag's utm-campaign parameter to [animal]-iq
	- Repeat for each badge

* Google+
	- In the social folder within the game - [badge]-name-g.html
	- Title, meta description, og-image, og-description should all be updated to the correct animal
	- Under linkURL - update the utm_campaign parameter to [animal]-iq
	- Body - update the link tag's utm-campaign parameter to [animal]-iq
	- Repeat for each badge
