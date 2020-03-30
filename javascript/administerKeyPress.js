function administerKeyPress(key) {
    if(key == '=') {
        Calculator.calculate();
        return;
    }
    Calculator.addCharacterToCalculation(key);
}