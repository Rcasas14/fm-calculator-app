const radio = document.getElementById('radio-toggle');
let button = document.getElementsByClassName("button");
const body = document.getElementsByTagName('body');
const calcOutput = document.getElementsByName('calc-output')
const placeholder = document.querySelector(':root')
const allBut = document.querySelectorAll('.calc-button')
const white = document.querySelectorAll('.color-white')

const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const resetButtons = document.querySelector('[data-reset]')

const currentDataElems = document.querySelector('[data-current]')
const previousDataElems = document.querySelector('[data-previous]')