var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) {
	return document.getElementById(id);
};

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
};

function displayResults() {
	var average = 0;
	var maxNumber = scores[0];
	var name = names[0];

	for (var i = 0; i < scores.length; i++) {
		average = (average * (i) + scores[i]) / (i + 1);
	}

	for (var i = 1; i < scores.length; i++) {
		if (scores[i] > maxNumber) {
			maxNumber = scores[i];
			name = names[i];
		}
	}

	document.getElementById("results").innerHTML = "<h2> Results </h2><br /> Average score = " + average + "<br \> High score = " + name + " with a score of " + maxNumber;
}

function displayScores() {
	const tableBody = document.getElementById("scores_table");

	tableBody.innerHTML = "<h2> Scores </h2><br /> <tr><td><b>Name</b></td><td><b>Score</b></td></tr>";

	for (let i = 0; i < names.length; i++) {

		const row = document.createElement("tr");

		const nameCell = document.createElement("td");
		nameCell.textContent = names[i];
		row.appendChild(nameCell);

		const scoreCell = document.createElement("td");
		scoreCell.textContent = scores[i];
		row.appendChild(scoreCell);

		tableBody.appendChild(row);
	}
}

function addScore() {
	const nameInput = document.getElementById("name");
	const scoreInput = document.getElementById("score");

	const name = nameInput.value.trim();
	const score = Number(scoreInput.value);

	if (name === "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");
		return;
	}

	names.push(name);
	scores.push(score);

	nameInput.value = "";
	scoreInput.value = "";

	nameInput.focus();
}