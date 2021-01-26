x = 0;
y = 0;
onQuestion = 0;

questions = [
	// Question, Agree x y, disagree x y
	["You regulary go to the tennis courts with friends.", -2.5, 0],
	["You regulary play and enjoy Valorant.", 2, 2],
	["You think AMD Ryzen is supperior to Intel.", -1, -1],
	["You stream video games.", 1, -2],
	["You regulary play Fortnite.", 1, -2],
	["You favor Corshair keyboards over any other brand.", -1.5, -1],
	["You play Rainbow Six Siege.", -1, 1],
	["You enjoy computer programming.", 1, 0],
	["You take Minecraft seriously.", -2, -1.5],
	["You politically support Joe Biden.", -2, 0],
	["You believe in guilty until proven innocent.", -1.5, -1],
	["You play War Thunder and World of War Ships.", -1, -2]
];

function start() {
	// Hide start button
	document.getElementById('start').setAttribute('hidden', '');

	// Make question HTML visible
	document.getElementById('question').removeAttribute('hidden');

	// Hide completed HTML
	document.getElementById('completed').setAttribute('hidden', '');

	// Reset results
	x = 0;
	y = 0;

	// Start at first question
	onQuestion = 0;
	displayQuestion();
}

function answer(modifier) {
	// Calculate results
	x += questions[onQuestion][1] * modifier;
	y += questions[onQuestion][2] * modifier;

	// Advance to next question
	if((onQuestion+1)==questions.length) {
		// Last question
		finish();
	}else{
		// Another question
		onQuestion++;
		displayQuestion();
	}
}

function displayQuestion() {
	// Display current question
	document.getElementById('question-name').innerHTML = questions[onQuestion][0];
	document.getElementById('question-count').innerHTML = (onQuestion+1) + '/' + questions.length;
}

function finish() {
	document.getElementById('question').setAttribute('hidden', '');
	document.getElementById('completed').removeAttribute('hidden');
	document.getElementById('coords').innerHTML = '(' + x + ', ' + y + ')';

	if(x > 10) {
		x = 10;
	}else if(x < -10) {
		x = -10;
	}
	if(y > 10) {
		y = 10;
	}else if(y < -10) {
		y = -10;
	}

	// Update circle on SVG
	document.getElementById('svg-result').setAttribute('cx', 214.28571428571428 + (21.428571428571445 * x));
	document.getElementById('svg-result').setAttribute('cy', 236.8421052631579 - (23.68421052631581 * y));
}

