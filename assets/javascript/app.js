//object of all questions answers and their truthiness.
var anthropology = {
	questionRef: ["Interests", "Fields", "Egypt", "Lucy", "Habitus"],
	Selectors: {
		Interests: {
			Question: "Which of the following is not of interest to anthropologists?",
			AnswersOne: ["Ancient Fecal Matter", "Mitochondrial DNA", "Miley Cyrus", "All of the above are of interest."],
			//AnswersTwo: ["Ancient Fecal Matter", "Mitochondrial DNA", "Miley Cyrus", "All of the above are of interest."],
			AnswerValue: 3,
			Picture: "assets/images/look-morty.png",
			selection:{
				0: { 
					truthfulness: false,
				},
				1: {
					truthfulness: false,
				},
				2: {
					truthfulness: false,
				},
				3: {
					truthfulness: true,
				},
			},
		},
		Fields: {
			Question: "Which of the following is not one of the four main fields of anthropology?",
			AnswersOne: ["Physical", "Cultural", "Linguology", "Archaeology"],
			//AnswersTwo: ["Ancient Fecal Matter", "Mitochondrial DNA", "Miley Cyrus", "All of the above are of interest."],
			AnswerValue: 2,
			Picture: "assets/images/four-dis-crop.jpg",
			selection:{
				0: { 
					truthfulness: false,
				},
				1: {
					truthfulness: false,
				},
				2: {
					truthfulness: true,
				},
				3: {
					truthfulness: false,
				},
			},
		},
		Egypt: {
			Question: "Does archaeology done with respect to ancient Egypt have a special name, if so which of the following is it?",
			AnswersOne: ["Pyramid Hunting", "Xenoarchaeology", "Egyptology", "None, that would be very egotistical of them."],
			//AnswersTwo: ["Ancient Fecal Matter", "Mitochondrial DNA", "Miley Cyrus", "All of the above are of interest."],
			AnswerValue: 2,
			Picture: "assets/images/weighing_of_the_heart3.jpg",
			selection:{
				0: { 
					truthfulness: false,
				},
				1: {
					truthfulness: false,
				},
				2: {
					truthfulness: true,
				},
				3: {
					truthfulness: false,
				},
			},
		},
		Lucy: {
			Question: "This picture is a little revealing, but who is this lovely lady?",
			AnswersOne: ["Lucy", "Stacy's Mom", "Miley Cyrus", "Ötzi."],
			//AnswersTwo: ["Ancient Fecal Matter", "Mitochondrial DNA", "Miley Cyrus", "All of the above are of interest."],
			AnswerValue: 0,
			Picture: "assets/images/skel-lucy.jpg",
			selection:{
				0: { 
					truthfulness: true,
				},
				1: {
					truthfulness: false,
				},
				2: {
					truthfulness: false,
				},
				3: {
					truthfulness: false,
				},
			},
		},
		Habitus: {
			Question: "This idea was first postulated by Aristotal, but it was revitalized by Marcel Mauss. It is a term that refers to a persons predisposition of viewing the world and what happens.",
			AnswersOne: ["Position", "Habitus", "Perspective", "Standpoint Theory"],
			//AnswersTwo: ["Ancient Fecal Matter", "Mitochondrial DNA", "Miley Cyrus", "All of the above are of interest."],
			AnswerValue: 1,
			Picture: "assets/images/habits.jpg",
			selection:{
				0: { 
					truthfulness: false,
				},
				1: {
					truthfulness: true,
				},
				2: {
					truthfulness: false,
				},
				3: {
					truthfulness: false,
				},
			},
		},
	},
	FinishedQuest:[],
}

//assigned values for asortment
var answerAValue = 0;
var answerBValue = 0;
var answerCValue = 0;
var answerDValue = 0;

//true values of each answer button
var answerATrueValue = 0;
var answerBTrueValue = 0;
var answerCTruealue = 0;
var answerDTrueValue = 0;

// fill in checks
var aFilled = false;
var bFilled = false;
var cFilled = false;
var dFilled = false;

//fillings
var answerInA = "";
var answerInB = "";
var answerInC = "";
var answerInD = "";


//starters
var started = false;
var nextReady = false;
var canGiveUp = false;
var curtainCall = false;

//var for referencing the question objects
 var qGrab;
 var qIndexSnatch = "";
 var keyWord = "";


 //index number reference
 var chosenNumber = -1;

 //var for referencing the questions interior
 var quedOb = "";

//answering
var guessed = false;
var answeredValue = 0;
var ticking;
//score storage
var correct = 0;
var incorrect = 0;
function hastefulPeriod(){
				ticking = setTimeout(function(){
        				incorrect +=1;
						canGiveUp = false;
						guessed = true;
						nextReady = true;
						$('#display').append("<br><br>Sorry, you are out of time. The answer is " + quedOb.AnswersOne[quedOb.AnswerValue]);
						clearTimeout(ticking);
						updateData();
     			}, 40000);
}

updateData();


//lose andtrue

//start button click event
$("#start").on("click", function(){
	if (started === false) {
		started = true
		nextReady = true
		curtainCall = false
		score = 0;
		chosenNumber = -1;
		correct = 0;
		incorrect = 0;
		$("#display").html("Press 'next' to receive your next question. <br> If you want to give up on a question press 'Skip'. <br> There will be a photo to help you to the left of this display.<br>You will have 40 seconds to answer each question. <br>Click on the the answer you think is correct.");
	}
});
$("#next").on("click", function(){
	drumbRoll();
	if (nextReady === true && curtainCall === false) {	
			canGiveUp = true;
			nextReady = false;
			guessed = false;
			qGrab = anthropology.questionRef
			console.log(qGrab);
		
			chosenNumber += 1;
			console.log(chosenNumber);

			console.log("qGrab", qGrab[chosenNumber])
			keyWord = qGrab[chosenNumber]
			console.log(keyWord);
			//console.log(qIndexSnatch);
			quedOb = anthropology.Selectors[keyWord];

			console.log(quedOb);
			console.log(quedOb.Question);
				console.log(quedOb.Picture);
				$('#display').html(quedOb.Question);
				$('#a').html(quedOb.AnswersOne[0]);
				$('#b').html(quedOb.AnswersOne[1]);
				$('#c').html(quedOb.AnswersOne[2]);
				$('#d').html(quedOb.AnswersOne[3]);
				$(".picture-hints").attr("src", quedOb.Picture);
				
				var aFilled = true;
				var bFilled = true;
				var cFilled = true;
				var dFilled = true;

				hastefulPeriod();

	};
});
$('#a').on('click', function(){
	if (guessed === false && canGiveUp === true) {
	answeredValue = 0;
	console.log(answeredValue);
		if (answeredValue === quedOb.AnswerValue) {
			correct +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>You are correct");
			clearTimeout(ticking);
			updateData();
		} else{
			incorrect +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>Sorry that is incorrect. The answer is " + quedOb.AnswersOne[quedOb.AnswerValue]);
			clearTimeout(ticking);
			updateData();
		}
	}
});
$('#b').on('click', function(){
	if (guessed === false && canGiveUp === true) {
	answeredValue = 1;
	console.log(answeredValue);
		if (answeredValue === quedOb.AnswerValue) {
			correct +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>You are correct");
			clearTimeout(ticking);
			updateData();
		} else{
			incorrect +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>Sorry that is incorrect. The answer is " + quedOb.AnswersOne[quedOb.AnswerValue]);
			clearTimeout(ticking);
			updateData();
		}
	}
});
$('#c').on('click', function(){
	if (guessed === false && canGiveUp === true) {
	answeredValue = 2;
	console.log(answeredValue);
		if (answeredValue === quedOb.AnswerValue) {
			correct +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>You are correct");
			clearTimeout(ticking);
			updateData();
		} else{
			incorrect +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>Sorry that is incorrect. The answer is " + quedOb.AnswersOne[quedOb.AnswerValue]);
			clearTimeout(ticking);
			updateData();
		}
	}
});
$('#d').on('click', function(){
	if (guessed === false && canGiveUp === true) {
	answeredValue = 3;
	console.log(answeredValue);
		if (answeredValue === quedOb.AnswerValue) {
			correct +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>You are correct");
			clearTimeout(ticking);
			updateData();
		} else{
			incorrect +=1;
			canGiveUp = false;
			guessed = true;
			nextReady = true;
			$('#display').append("<br><br>Sorry that is incorrect. The answer is " + quedOb.AnswersOne[quedOb.AnswerValue]);
			clearTimeout(ticking);
			updateData();
		}
	}
});



 function updateData() {
 		var score = correct - incorrect;
        $('#score').html("Your score: " + score);
        console.log(score);
    };
function drumbRoll(){
	if (chosenNumber === 4) {
		curtainCall = true;
		$('#display').html("Thank you for playing. <br>Press the start button if you would like to try again.")
		
		started = false;

	}
}