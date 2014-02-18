$(document).ready(function() {     
  // global variables
  var score = 0, // the running score
      species = [
        'animal1',
        'animal2',
        'mother',
        'baby'
      ], // possible image species classes for species in progress bar
      tone = [
        'light',
        'medium',
        'dark'
      ], // possible tone classes for species in progress bar
      questionNum = 1, // question number to display
      qtn = [], // questions
      totalQtn = 0,
      currQtn = 0, // current question in array
      mobile = 0, // flag for mobile devices to reduce load times
      totalSpecies = species.length,
      randomSpecies = selectSpecies(), // generate a random species
      lastSpecies = randomSpecies, // last species image assigned
      randomTone = Math.floor(Math.random()*(tone.length)), // generate a random tone                        
      lastTone = randomTone, // last tone assigned to species
      time = 900, // store timings for animations in base variable
      yourBadge = 0, // the badge the person has earned
      nextBadge = 0, // the next badge the person could earn
      quiz = $('#quiz'); // the quiz element
      quizHeight = quiz.height(), // height of the quiz
      gaCat = quizName + ' IQ Show'; // GA category for event tracking
	
  /*** called onload to set up the game ***/
  // can't start with a baby
  while (species[randomSpecies] == 'baby') {
    randomSpecies = selectSpecies();
    lastSpecies = randomSpecies;
  }    	
  
  // show questions when play button is clicked
  $('#play').on('click', function() {
	$('#intro').hide();
	$('#quizContainer').show();
  });
       
  // reset any disabled buttons from previous plays
  $('button').removeAttr('disabled');
		
	// set flag if it's a mobile device
	if ($(window).width() < 800) mobile = 1;
       
	   
   // check for overrides in URL
  var thisURL = window.location,
	fast = /fast/g,
	badge = /badge/g;
  if (fast.exec(thisURL)) time = 100;
  if (badge.exec(thisURL)) {
	totalQtn = 10;
	var findScore = thisURL.toString().split('=');
	score = parseInt(findScore[1]);
	$('.questionNum, .explanation').hide();
    showScore();
    setTimeout(showAction, time*8);
  } else {
	// get the quiz xml data
	$.ajax({
	  type: "GET",
	  url: "quiz.xml",
	  dataType: "xml",
	  cache: false,
	  async: false, 
	  success: parseXml
	}); // end AJAX call
  }
  		
  // parse quiz question text, photo and answers
  function parseXml(xml) {  
    $(xml).find("screen").each(function() {
      var $this = $(this),
          choices = [],
          questions = [];
                                   
      // create each question and add to questions array
      $this.find("choice").each(function() {
        var thisChoice = $(this);
        choices.push ({
          'choice': thisChoice.text(),
          'correct': thisChoice.attr("correct") 
        });
      });
                            
      qtn.push({
        'question': $this.find("question").text(),
        'explanation': $this.find("explanation").text(),
        'photo': $this.find("picture").text(),
        'choices': choices 
      });
    });
              
    totalQtn = qtn.length;
    showQuestion();
  }; // end parseXml
 
  /*** core functions for quiz ***/

  // generate the next question
  function showQuestion() {
    $('#qNum').text(questionNum);
    $('#qTotal').text(totalQtn);
    $('.question').text(qtn[currQtn].question);
              
    // randomize the choices
    var ranChoices = qtn[currQtn].choices.sort(function() {return 0.5 - Math.random()});

    for (var j = 0; j < ranChoices.length; j++) {                     
      if (ranChoices[j].correct == 'yes')
        id = 'ct';
      else
        id = '';
                     
      var btn = $('<button></button>', 
      {
        'text': ranChoices[j].choice,
        'class': 'answer',
        'id': id
      });
					 
      //if (mobile) btn.css('background', btnColor); // fix weird button color issue on mobile
      btn.appendTo('#choices');
      $('.questionNum, .question, #choices').fadeIn(time);
    }                     
  }  
       
  // add an animal to the reserve
  function addSpecies() {
    var zIndex = totalQtn - score;
                     
    // keep the tone random so there is variety
    randomTone = Math.floor(Math.random()*(tone.length));
    while (randomTone == lastTone) {
      randomTone = Math.floor(Math.random()*(tone.length));
    }
	  

    // come back to this code - seems inefficient
    // no baby without a mother
    if (score < 2 || species[lastSpecies] != "mother")
      randomSpecies = Math.floor(Math.random()*(species.length-1));
    else
      randomSpecies = selectSpecies();
                     
    if (species[randomSpecies] == 'baby') zIndex = zIndex + 1;
                     
    lastSpecies = randomSpecies;
    lastTone = randomTone;
                        
    speciesImg = species[randomSpecies] + ' ' + tone[randomTone];
    $('<li></li>', {
        'class': speciesImg,
        'text': score,
    }).css('z-index', zIndex).appendTo('.numbers');
  }
       
  // animate the buttons and indicate whether answer is correct
  function displayAnswer(btn, correct) {
    btn.hide()
    var verify = '#verify-incorrect';
    if (correct) {
      verify = '#verify-correct';
      $(verify).text(score == 1 ? correctStat[correctStat.length -1] : correctStat[Math.floor(Math.random()*(correctStat.length))]);
      if (species[randomSpecies] == 'baby') correctText = baby;    
        
      // change correct answer to new color
      btn.addClass('correct');
    } else {                    
      // change incorrect answer to new color
      btn.addClass('incorrect')
    }                    
    btn.fadeIn(time);
              
    $('.answer:not(.clicked)').hide();
              
    $(verify)
      .hide()
      .slideDown(time);
	  
	quizHeight = quiz.height();		        
    if (correct) quiz.animate({ height: '250px' }, time);
	
	$('.answer, .verify-text').delay(time*2).fadeOut(time);
	$('.question').delay(time*3).fadeOut(time);
  }
  
  // display the explanation for the the answer         
  function displayExplain() {
    quiz
      .delay(time*2)
      .animate({ height: quizHeight }, time);
	
    var correct = 0,
        thisQtn = qtn[currQtn],
        answers = thisQtn.choices,
        photo = 'url(' + thisQtn.photo + ')';

    for (i = 0; i < answers.length; i++) 
      if (answers[i].correct == 'yes') correct = i; 

    $('#ctAnswer').text(answers[correct].choice);
    $('#details').text(thisQtn.explanation);  
               
    if (!(mobile)) $('.explanation').css('backgroundImage', photo);
	       
    $('.explanation')
      .delay(time*4)
      .fadeIn(time);
    $('.next').hide();

    if (questionNum < totalQtn) 
      $('.next').delay(time*5).fadeIn(time);
    else
      $('.finish').delay(time*5).fadeIn(time);
  }
  
  // display the score
  function showScore() {

    // find the right badge and display associated text
    $.each(badges, function(badgeNum, badge) {
      if ($.inArray(score, badge.scores) > -1) {
        yourBadge = badge;
        if (score < 10) nextBadge = badges[badgeNum+1];
      }
    });

    $('#totalScore').text(score);
    $('#totalQtn').text(totalQtn);
    $('.score h2').text(yourBadge.thanks);
    $('.badgeText').text(yourBadge.text);
	
	if (score < 1) {
	  badgeImg = 'url(../global-images/' + yourBadge.badge + '.png)';
	}else if (score < totalQtn) {
      badgeImg = 'url(images/' + yourBadge.badge + '.png)';
    } else {
      badgeImg = 'url(images/' + yourBadge.badge + '.gif)';
      $('.playAgain').hide();
    } 
	
    $('.badge').css('backgroundImage', badgeImg); 
	
    $('.score')
      .addClass(yourBadge.badge)
      .fadeIn(time);
	}

  // show the action players can take on the final screen
  function showAction() {
		$('.score').hide();
			
		if (score > 0) {
		  var facebook = facebookUrl + yourBadge.badge + ".html",
			  twitter = twitterUrl + yourBadge.twitter,
			  google = googleUrl + yourBadge.badge + "-g.html";
		  $('.badge h4').text(yourBadge.name);
		  $('.no-win').hide();
		  $('.win').show();
		  $('#facebook').attr("href", facebook);
		  $('#twitter').attr("href", twitter);
		  $('#google').attr("href", google);
		}
		
		// have the person play again		
		if (nextBadge) {
			$('#nextBadge').text(nextBadge.name);
			$('.playAgain').css('backgroundImage', 'url(images/' + nextBadge.badge + '-sm.png)');
		}

		$('.callToAction').fadeIn(time);
	
		// Easter Egg
    if (!(mobile)) {
    $('.pulley').on('click', function() {
      if (quiz.height() == '250' && score < 10) {
        quiz.animate({ height: quizHeight }, time, function() {
          $('.playAgain').show();
        });
      } else if (quiz.height() == '250' && score == 10) {
        quiz.animate({ height: quizHeight }, time);
      } else {
        $('.playAgain').hide();
        quiz.animate({ height: '250px' }, time);
      }
    });
  }
	}

  // generate a random species
  function selectSpecies() {
    return Math.floor(Math.random() * totalSpecies);
  }

  /*** event listeners for game components ***/

  // choice buttons
  $('#choices').on('click', 'button', function() {
    var $this = $(this);
    $('#choices button').attr('disabled', 'disabled'); // prevent buttons from being clicked
    $this.addClass('clicked');
    
    if ($this.attr('id') == 'ct') { // correct answer
      var ans = 'Correct';
      score++; // increase the score
      addSpecies(); // add species to the reserve
      displayAnswer($this, true); // animate the buttons and indicate the answer is correct
    } else {
      var ans = 'Incorrect';
      displayAnswer($this, false); // animate the buttons and indicate the answer is incorrect
    }
  
    displayExplain();
  });
  
  // next question button
  $('.next').on('click', function() {
    $('.next').attr('disabled', 'disabled'); 
                       
    // up the flags for tracking which question we are on
    questionNum++;
    currQtn++;
              
    // clear out the last question
    $('.questionNum, .explanation').fadeOut(time/2);
    setTimeout(function() {
      $('#choices').empty();
      showQuestion();
      $('.next').removeAttr('disabled');
    }, time/2)
  });
    
  // finish/show my score button
  $('.finish').on('click', function() {
        
    // clear out the last question
    $('.questionNum, .explanation').hide();
              
    showScore();
    setTimeout(showAction, time*8);
  });     
});