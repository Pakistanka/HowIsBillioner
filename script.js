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
--------TASK 3--------
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

questionText[0] = 'Сколько лап у змеи?';
answerFirst [0] = 'а) 1';
answerSecond [0] = 'б) 2';
answerThird [0] = 'в) 0';
answerFourth [0] = 'г) 3';
rightAnswer [0] = 'в';
moneyWon [0] = '100$';

questionText[1] = 'Как называется столица Республики Камерун?';
answerFirst [1] = 'а) Котону';
answerSecond [1] = 'б) Яунду';
answerThird [1] = 'в) Дуала';
answerFourth [1] = 'г) Касабланка';
rightAnswer [1] = 'б';
moneyWon [1] = '200$';

questionText[2] = 'Где находится Мексика?';
answerFirst [2] = 'а) Азия';
answerSecond [2] = 'б) Африка';
answerThird [2] = 'в) Южная Америка';
answerFourth [2] = 'г) Северная Америка';
rightAnswer [2] = 'г';
moneyWon [2] = '300$';

questionText[3] = 'Где находится Самарканд?';
answerFirst [3] = 'а) в Узбекистане';
answerSecond [3] = 'б) в Киргизии';
answerThird [3] = 'в) в Афганистане';
answerFourth [3] = 'г) в Иране';
rightAnswer [3] = 'а';
moneyWon [3] = '400$';

questionText[4] = 'Какое название носил Стамбул до 1492 года?';
answerFirst [4] = 'а) Бурса';
answerSecond [4] = 'б) Константинополь';
answerThird [4] = 'в) Восточная Империя';
answerFourth [4] = 'г) Третий Рим';
rightAnswer [4] = 'б';
moneyWon [4] = '500$';

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