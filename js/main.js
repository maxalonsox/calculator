const equal = document.getElementById('equal')
const dat = document.getElementById('.')
const zero = document.getElementById('0')
const addition = document.getElementById('addition')
const three = document.getElementById('3')
const two = document.getElementById('2')
const one = document.getElementById('1')
const substract = document.getElementById('substract')
const six = document.getElementById('6')
const five = document.getElementById('5')
const four = document.getElementById('4')
const multiplication = document.getElementById('multiplication')
const nine = document.getElementById('9')
const eight = document.getElementById('8')
const seven = document.getElementById('7')
const del = document.getElementById('delete')
const division = document.getElementById('division')
const percentage = document.getElementById('percentage')
const deleteAll = document.getElementById('delete-all')
const factorial = document.getElementById('factorial')
const exponent = document.getElementById('exponent')
const pi = document.getElementById('pi')
const square = document.getElementById('square')
const result = document.getElementById('result')
const operation = document.getElementById('operation')


dat.addEventListener('click', (e) => {
    if (datAvailable()) {
        result.innerHTML = result.innerHTML + e.target.innerHTML
    }
})

function datAvailable() {
    for(let i = result.innerHTML.length-1; i >= 0; i--) {
        if (result.innerHTML[i] == '.') return false
        if (operators.includes(result.innerHTML[i])) return true
    }
    return true
}

addNumber(zero)
addNumber(one)
addNumber(two)
addNumber(three)
addNumber(four)
addNumber(five)
addNumber(six)
addNumber(seven)
addNumber(eight)
addNumber(nine)
addNumber(pi)
addOperator(addition)
addOperator(substract)
addOperator(multiplication)
addOperator(division)
addOperator(percentage)
const operators = ['+','-','/','*','%']

function addNumber(number) {
    number.addEventListener('click', (e) => {
        if (result.innerHTML == '0') {
            result.innerHTML = e.target.innerHTML
        } else {
            result.innerHTML = result.innerHTML + e.target.innerHTML
        }
    })
}

function addOperator(operator) {
    operator.addEventListener('click', (e) => {
        if ((result.innerHTML != "0")) {
            if (operators.includes(result.innerHTML[result.innerHTML.length-1])) {
                result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length-1)
            }
            result.innerHTML = result.innerHTML + e.target.innerHTML
        } else if (operator.innerHTML == '-') {
            result.innerHTML = e.target.innerHTML
        }
    })
}

del.addEventListener('click', (e) => {
    if (result.innerHTML != '0') {
        result.innerHTML = result.innerHTML.slice(0, result.innerHTML.length-1)
    }
})

deleteAll.addEventListener('click', (e) => {
    result.innerHTML = "0"
})

equal.addEventListener('click', (e) => {
    operation.innerHTML = result.innerHTML
    if ((result.innerHTML != '0') && (result.innerHTML != '')) {
        result.innerHTML = result.innerHTML.replace('π', Math.PI.toFixed(3))
        let res = eval(result.innerHTML).toFixed(3)
        result.innerHTML = res
    }
})




