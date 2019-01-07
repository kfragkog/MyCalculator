// declare vars
let allItems = document.getElementsByClassName("items");
let resultString = document.getElementById("result").innerText;
let resultValue = 0;
let calculationItems = [];
let calculation = "";


for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].classList.contains("num")) {
        allItems[i].onclick = function(e) {
        setValue(allItems[i]);
        } 
    }
    else if (allItems[i].classList.contains("operators") && allItems[i].id != "equalSymbol") {
        allItems[i].onclick = function(e) {
            calculate();
            calculation = document.getElementById(allItems[i].id).innerText;
            resultString = "";
            resultValue = 0;
            console.log("b", calculation, calculationItems, resultValue)    
        }
    }
    else if (allItems[i].id == "equalSymbol") {
        allItems[i].onclick = function(e) {
            calculate();   
            calculation = ""; //NEEDS FIXING
            console.log(calculation, calculationItems, resultValue)
        }
    }    
    else if (allItems[i].classList.contains("delete")) {
        allItems[i].onclick = function(e) {
        document.getElementById("result").innerText = "0";
        calculationItems = [];
        resultString = "";
        resultValue = 0;    
        }    
    }   
    else {
        allItems[i].onclick = function(e) {
            if (resultString == "") document.getElementById("result").innerText = "0";
            document.getElementById("result").innerText += allItems[i].innerText;
            resultString += allItems[i].innerText;
            resultValue = parseFloat(resultString);
        }        
    }
}

function setValue(item) {
    if (document.getElementById("result").innerText == "0") {
        document.getElementById("result").innerText = ""
    }

    if (resultString == "") document.getElementById("result").innerText = "";

    document.getElementById("result").innerText += item.innerText;
    resultString += item.innerText;
    resultValue = parseFloat(resultString);
    console.log(resultValue)
}

function calculate(item) {
    calculationItems.push(resultValue);
    
    if (calculationItems.length == 2) {
        if (calculation == "+") {
            resultValue = calculationItems[0] + calculationItems[1];
        }
        else if (calculation == "-") {
            resultValue = calculationItems[0] - calculationItems[1];
        } 
        else if (calculation == "×") {
            resultValue = calculationItems[0] * calculationItems[1];
        } 
        else if (calculation == "÷"){
            resultValue = calculationItems[0] / calculationItems[1];
        }
        
        calculationItems = [];
        calculationItems.push(resultValue);
        document.getElementById("result").innerText = resultValue;
    }

    // calculation = document.getElementById(item.id).innerText;
    // resultString = "";
    // resultValue = 0;
}

// function equalCal() {
//     calculationItems.push(resultValue);
    
//     if (calculationItems.length == 2) {
//         if (calculation == "+") {
//             resultValue = calculationItems[0] + calculationItems[1];
//         }
//         else if (calculation == "-") {
//             resultValue = calculationItems[0] - calculationItems[1];
//         } 
//         else if (calculation == "×") {
//             resultValue = calculationItems[0] * calculationItems[1];
//         } 
//         else {
//             resultValue = calculationItems[0] / calculationItems[1];
//         }
        
//         calculationItems = [];
//         calculationItems.push(resultValue);
//         document.getElementById("result").innerText = resultValue;
//     }

//     resultString = "";
//     resultValue = 0;
// }
