// declare vars
let allItems = document.getElementsByClassName("items");
let resultString = document.getElementById("result").innerText;
let resultValue = 0;
let calculationItems = [];
let calculation = null;


for (let i = 0; i < allItems.length; i++) {
    if (allItems[i].classList.contains("num")) {
        allItems[i].onclick = function(e) {
        setValue(allItems[i]);
        } 
    }
    else if (allItems[i].classList.contains("operators") && allItems[i].id != "equalSymbol") {
        allItems[i].onclick = function(e) {
            storeValAndCal(allItems[i]);
            console.log("b", calculation, calculationItems)    
        }
    }
    else if (allItems[i].id == "equalSymbol") {
        allItems[i].onclick = function(e) {
            console.log("=")    
        }
    }    
    else if (allItems[i].classList.contains("delete")) {
        allItems[i].onclick = function(e) {
        document.getElementById("result").innerText = "0";
        calculationItems = [];
        console.log(calculationItems) 
        }    
    }   
    else {
        allItems[i].onclick = function(e) {
        console.log(".")
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
    resultValue = parseInt(resultString, 10);
    console.log(resultValue)
}

function storeValAndCal(item) {
    calculationItems.push(resultValue);
    calculation = document.getElementById(item.id).innerText;
    
    resultString = "";
    resultValue = 0;

    // if (calculationItems.length = 2) {
    //     resultValue = calculationItems[0] + calculation + calculationItems[1];
    // }
}





// document.getElementsByClassName("num")[0].onclick = function(e) {
//     console.log(e.target)
//     let childIndex = getChildIndex(e.target);
//     let resultValue = document.getElementById("result").innerText;
//     // resultValue = 
// }

// var getChildIndex = function(child) {
//     var parent = child.parentElement;
//     var children = parent.children;
//     var i = children.length - 1;
//     for (; i >= 0; i--){
//         if (child == children[i]){
//             break;
//         }
//     }
//     return i;
// }