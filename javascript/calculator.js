let calculation;
let answer;

class Calculator {
    static addCharacterToCalculation(character) {
        if (calculation == undefined) {
            answer = character.toString();
            calculation = answer;
            write(answer);
            return;
        }
        answer = calculation + character.toString();
        calculation = answer;
        write(answer);
    }
    static calculate() {
        let calculatedAnswer = eval(calculation);
        calculation = calculatedAnswer;
        write(calculatedAnswer);
    }
    static clear() {
        calculation = undefined;
        write(calculation);
    }
}
