let arrButton = [...button];

arrButton.forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.opacity = "1";

        console.log(index)

        if (index == 0) {
            body[0].style.backgroundColor = '#3a4764';
            placeholder.style.setProperty('--placeholder-color', '#fff');
            placeholder.style.setProperty('--bg-display', '#182034');
            placeholder.style.setProperty('--toggle-color', '#d03f2f');
            placeholder.style.setProperty('--bg-key', '#232c43');
            placeholder.style.setProperty('--del-button', '#3a4764');
            placeholder.style.setProperty('--reset-button', '#3a4764');
            placeholder.style.setProperty('--equals-button', '#d03f2f');
            placeholder.style.setProperty('--bg-text', '#444b5a');
            placeholder.style.setProperty('--bg-toggle', '#232c43');

            white.forEach((element) => {
                element.style.color = 'rgb(255,255,255)';
            })

            allBut.forEach((element) => {
                if (element.classList.contains('del-button') || element.classList.contains('calc-reset') || element.classList.contains('calc-equals')) {
                    console.log('success');
                } else {
                    element.style.backgroundColor = '#fff';

                }
            })

        } else if (index == 1) {
            body[0].style.backgroundColor = 'hsl(0, 0%, 90%)';
            placeholder.style.setProperty('--placeholder-color', 'rgb(0,0,0)');
            placeholder.style.setProperty('--bg-display', '#fff');
            placeholder.style.setProperty('--toggle-color', 'hsl(25, 98%, 40%)');
            placeholder.style.setProperty('--bg-key', 'hsl(0, 5%, 81%)');
            placeholder.style.setProperty('--del-button', 'hsl(185, 42%, 37%)');
            placeholder.style.setProperty('--reset-button', 'hsl(185, 42%, 37%');
            placeholder.style.setProperty('--equals-button', 'hsl(25, 98%, 40%)');
            placeholder.style.setProperty('--bg-text', 'hsl(60, 10%, 19%)');
            placeholder.style.setProperty('--bg-toggle', 'hsl(0, 5%, 81%)');

            white.forEach((element) => {
                element.style.color = 'rgb(0,0,0)';
            })

            allBut.forEach((element) => {
                if (element.classList.contains('del-button') || element.classList.contains('calc-reset') || element.classList.contains('calc-equals')) {
                    console.log('success');
                } else {
                    element.style.backgroundColor = '#fff';

                }
            })

        } else if (index == 2) {
            body[0].style.backgroundColor = 'hsl(268, 75%, 9%)';
            placeholder.style.setProperty('--placeholder-color', 'hsl(52, 100%, 62%)');
            placeholder.style.setProperty('--bg-display', 'hsl(268, 71%, 12%)');
            placeholder.style.setProperty('--toggle-color', 'hsl(176, 100%, 44%)');
            placeholder.style.setProperty('--bg-key', 'hsl(268, 71%, 12%)');
            placeholder.style.setProperty('--del-button', 'hsl(281, 89%, 26%)');
            placeholder.style.setProperty('--reset-button', 'hsl(281, 89%, 26%)');
            placeholder.style.setProperty('--equals-button', 'hsl(176, 100%, 44%)');
            placeholder.style.setProperty('--bg-text', 'hsl(52, 100%, 62%)');
            placeholder.style.setProperty('--bg-toggle', 'hsl(268, 71%, 12%)');

            white.forEach((element) => {
                element.style.color = 'hsl(52, 100%, 62%)';
            })

            allBut.forEach((element) => {

                if (element.classList.contains('del-button') || element.classList.contains('calc-reset') || element.classList.contains('calc-equals')) {
                    console.log('success');
                } else {
                    element.style.backgroundColor = 'hsl(268, 47%, 21%)';

                }
            })

        }

        arrButton.filter((item) => {
            return item != element;
        }).forEach((item) => {
            item.style.opacity = "0";
        });
    });
});


numButtons.forEach((element) => {
    element.addEventListener('click', () => {
        calc.appendDisplay(element.innerText);
        calc.updateDisplay();

    })
})
operationButtons.forEach((element) => {
    element.addEventListener('click', () => {
        calc.operator(element.innerText);
        calc.updateDisplay();

    })
})

equalsButton.addEventListener('click', element => {
    calc.calculate();
    calc.updateDisplay();
})

resetButtons.addEventListener('click', ()=>{
    calc.reset();
    calc.updateDisplay();
})

deleteButton.addEventListener('click', ()=>{
    calc.delete();
    calc.updateDisplay();
})



class Calculator {
    constructor(currentDataElems, previousDataElems) {
        this.currentDataElems = currentDataElems; //html element
        this.previousDataElems = previousDataElems; //html element
        this.reset();

    }

    appendDisplay(number) {
        if (number === '.' && this.currentData.includes('.')) {
            return
        }
        this.currentData += number;
        //this.currentData = this.currentData.toString() + number.toString();
    }

    getDisplayNumber(number){
        const stringNum = number.toString()
        const intDigit = parseFloat(stringNum.split('.')[0])
        const dicimalDigit = stringNum.split('.')[1]
        let intDisplay
        if(isNaN(intDigit)){
            intDisplay = ''
        } else {
            intDisplay = intDigit.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }
        if(dicimalDigit != null){
            return `${intDisplay}.${dicimalDigit}`
        } else {
            return intDisplay;
        }
    }

    operator(operation) {
        if (this.currentData === '') {
            return
        }
        if (this.previousData !== '') {
            this.calculate();
        }
        
        this.operation = operation;
        this.previousData = this.currentData;
        console.log(this.previousData, operation)
        this.currentData = '';


    }

    reset() {
        this.currentData = '';
        this.previousData = '';
        this.operation = undefined;
    }

    delete() {
        this.currentData = this.currentData.toString().slice(0, -1);
    }

    calculate() {
        let result = 0;
        let firstVal = parseFloat(this.currentData);
        let secondVal = parseFloat(this.previousData)

        if(isNaN(firstVal) || isNaN(secondVal)){
            return
        }
        switch(this.operation){
            case 'x': 
            result = firstVal * secondVal;
            
            break;
            case '/': 
            result = firstVal / secondVal;
            
            break;
            case '+': 
            result = firstVal + secondVal;
            
            break;
            case '-': 
            result = firstVal - secondVal;
            
            break;

            default: return;
        }

        this.currentData = result;
        this.previousData = '';
        this.operation = undefined;
    }

    updateDisplay() {
        // this.currentDataElems[0].placeholder = this.getDisplayNumber(this.currentData);
        this.currentDataElems.innerText = this.getDisplayNumber(this.currentData);
        this.previousDataElems.innerText = this.previousData;
    }

}

// const calc = new Calculator(calcOutput, previousDataElems);
const calc = new Calculator(currentDataElems, previousDataElems);

