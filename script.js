/*--------------------
--------TASK 1--------
--------------------*/

var number = parseInt(prompt('Please, input number'));

function numberToObject(number) {
	if (isNan(number)|| number < 0 || number > 999) {
		return{};
	}

	var number = number + '000';
	number = number.split('').reverse();

	var obj = {};
	obj['сотни'] = number[0];
	obj['десятки'] = number[1];
	obj['единицы'] = number[2];

	return obj;
	
}

console.log(numberToObject(number));

/*--------------------
--------TASK 2--------
--------------------*/

var questionText = [];
var answerFirst = [];
var answerSecond = [];
var answerThird = [];
var answerFourth = [];
var rightAnswer = [];
var moneyWon = [];
var toBreak = false;
var moneyCheckpoint = "0$"

questionText[0] = '';
answerFirst [0] = '';
answerSecond [0] = '';
answerThird [0] = '';
answerFourth [0] = '';
rightAnswer [0] = '';
moneyWon [0] = '';

questionText[1] = '';
answerFirst [1] = '';
answerSecond [1] = '';
answerThird [1] = '';
answerFourth [1] = '';
rightAnswer [1] = '';
moneyWon [1] = '';

questionText[2] = '';
answerFirst [2] = '';
answerSecond [2] = '';
answerThird [2] = '';
answerFourth [2] = '';
rightAnswer [2] = '';
moneyWon [2] = '';

questionText[3] = '';
answerFirst [3]3 = '';
answerSecond [3] = '';
answerThird [3] = '';
answerFourth [3] = '';
rightAnswer [3] = '';
moneyWon [3] = '';

questionText[4] = '';
answerFirst [4] = '';
answerSecond [4] = '';
answerThird [4] = '';
answerFourth [4] = '';
rightAnswer [4] = '';
moneyWon [4] = '';

function userQuestion(i) {
        userAnswer = prompt("Вопрос: " + questionText[i] + "\n" + "Ответы: " + "\n" + answerFirst[i] + "\n" + answerSecond[i] + "\n" + answerThird[i] + "\n" + answerFourth[i]) 
        if (i == 2|| i == 3) {
 
        }
        if (userAnswer.toLowerCase() == rightAnswer[i]) {
            if (i == 4) {
                alert("Congratulation! You win!")
            } else {
                var toContinue = confirm("This is right answer! So you want to continue?")
                if (!toContinue) {
                    alert("In that case you won " + moneyWon[i])
                    toBreak = true;
                    return 0;
                } else {
                    alert("Well, next question is: ")
                }
            }
        } else {
            alert('That is wrong answer. You won:  ' + moneyCheckpoint + "\n" + "Correct answer is: " + rightAnswer[i]);
            toBreak = true
        }
    }
        for (var i = 0; i < 5; i++) {
            userQuestion(i)
            if (i == 2 || i == 3) {
                moneyCheckpoint = moneyWon[i]
            }
            if (toBreak) {
                break;
            }
}