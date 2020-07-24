
var total = 0.00;
var diceTotal = 0.00;
var pennyTotal = 0;
var nickelTotal = 0;
var dimeTotal = 0;
var quarterTotal = 0;
var halfDollarTotal = 0;
var dollarTotal = 0;

var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

function printNumber(number, diceName) {
    var placeholder = document.getElementById(diceName);
    placeholder.innerHTML = number;
}

// var button = document.getElementById('rollDice');

function diceRoll() {
    var result1 = dice.roll();
    printNumber(result1, 'dice1');
    var result2 = dice.roll();
    printNumber(result2, 'dice2');
    showDice(result1, result2);
    diceTotal = diceTotal + ((result1 + result2)/100);
    document.getElementById("diceTotal").innerHTML = '$'+diceTotal.toFixed(2);
    document.getElementById('message').innerHTML = '';
};

function initialize() {
    document.getElementById("moneyTotal").innerHTML = '$'+total+'.00';
    document.getElementById("diceTotal").innerHTML = '$'+diceTotal+'.00';
}

function showDice(result1, result2) {
    var parent = document.getElementById('dice');
    parent.innerHTML = '';
    var image1 = document.createElement('IMG');
    image1.setAttribute('src', './images/dice_'+result1+'.jpg');
    image1.setAttribute('style', 'width:30px; border: 1px solid black; margin:5px;');
    var image2 = document.createElement('IMG');
    image2.setAttribute('src', './images/dice_'+result2+'.jpg');
    image2.setAttribute('style', 'width:30px; border: 1px solid black; margin:5px;');
    parent.appendChild(image1);
    parent.appendChild(image2);
}

function addImage(coinName) {
    var path_to_img = '';
    var parent_element_id = '';
    switch(coinName) {
        case 'penny':
            path_to_img = './images/penny-back.jpg';
            parent_element_id = 'pennyList';
            break;
        case 'nickel':
            path_to_img = './images/nickel-head.jpg';
            parent_element_id = 'nickelList';
            break;
        case 'dime':
            path_to_img = './images/dime-head.png';
            parent_element_id = 'dimeList';
            break;
        case 'quarter':
            path_to_img = './images/quarter-head.png';
            parent_element_id = 'quarterList';
            break;
        case 'halfDollar':
            path_to_img = './images/half-dollar.jpg';
            parent_element_id = 'halfDollarList';
            break;
        default:
            path_to_img = './images/dollar-front.jpg';
            parent_element_id = 'dollarList';
            break;
    }
    var parent = document.getElementById(parent_element_id);
    var image = document.createElement('IMG');
    image.setAttribute('src', path_to_img);
    if (coinName == 'dollar') {
        image.setAttribute('style', 'width:50px;');
    } else {
        image.setAttribute('style', 'width:30px;');
    }
    parent.appendChild(image);
}

function removeImage(coinName) {
    var parent_element_id = '';
    switch(coinName) {
        case 'penny':
            parent_element_id = 'pennyList';
            break;
        case 'nickel':
            parent_element_id = 'nickelList';
            break;
        case 'dime':
            parent_element_id = 'dimeList';
            break;
        case 'quarter':
            parent_element_id = 'quarterList';
            break;
        case 'halfDollar':
            parent_element_id = 'halfDollarList';
            break;
        default:
            parent_element_id = 'dollarList';
            break;
    }
    var parent = document.getElementById(parent_element_id);
    parent.removeChild(parent.lastElementChild);
}

function add(coin) {
    switch(coin) {
        case 'penny':
            pennyTotal++;
            document.getElementById("pennyTotal").innerHTML = pennyTotal;
            addImage(coin);
            break;
        case 'nickel':
            nickelTotal++;
            document.getElementById("nickelTotal").innerHTML = nickelTotal;
            addImage(coin);
            break;
        case 'dime':
            dimeTotal++;
            document.getElementById("dimeTotal").innerHTML = dimeTotal;
            addImage(coin);
            break;
        case 'quarter':
            quarterTotal++;
            document.getElementById("quarterTotal").innerHTML = quarterTotal;
            addImage(coin);
            break;
        case 'halfDollar':
            halfDollarTotal++;
            document.getElementById("halfDollarTotal").innerHTML = halfDollarTotal;
            addImage(coin);
            break;
        default:
            dollarTotal++;
            document.getElementById("dollarTotal").innerHTML = dollarTotal;
            addImage(coin);
            break;
    }

}

function remove(coin) {
    switch(coin) {
        case 'penny':
            pennyTotal--;
            if (pennyTotal >= 0) 
                document.getElementById("pennyTotal").innerHTML = pennyTotal;
            else 
                pennyTotal = 0;
            removeImage(coin);
            break;
        case 'nickel':
            nickelTotal--;
            if (nickelTotal >= 0) 
                document.getElementById("nickelTotal").innerHTML = nickelTotal;
            else
                nickelTotal = 0;
            removeImage(coin);
            break;
        case 'dime':
            dimeTotal--;
            if (dimeTotal >= 0) 
                document.getElementById("dimeTotal").innerHTML = dimeTotal;
            else 
                dimeTotal = 0;
            removeImage(coin);
            break;
        case 'quarter':
            quarterTotal--;
            if (quarterTotal >= 0) 
                document.getElementById("quarterTotal").innerHTML = quarterTotal;
            else
                quarterTotal = 0;
            removeImage(coin);
            break;
        case 'halfDollarTotal':
            halfDollarTotal--;
            if (halfDollarTotal >= 0) 
                document.getElementById("halfDollarTotal").innerHTML = halfDollarTotal;
            else
                halfDollarTotal = 0;
            removeImage(coin);
            break;
        default:
            dollarTotal--;
            if (dollarTotal >= 0) 
                document.getElementById("dollarTotal").innerHTML = dollarTotal;
            else
                dollarTotal = 0;
            removeImage(coin);
            break;
    }
}

function calculate() {
    total = ((pennyTotal * 0.01) + (nickelTotal * 0.05) + (dimeTotal * 0.10) + (quarterTotal * 0.25) + (halfDollarTotal * 0.50) + (dollarTotal * 1));
    document.getElementById("moneyTotal").innerHTML = '$'+total.toFixed(2);
    if (total.toFixed(2) != diceTotal.toFixed(2)) {
        document.getElementById('message').innerHTML = "Check again please! The value of coins in the board should match the total";
        document.getElementById('message').setAttribute('style','color: red;text-align: center;');
    } else {
        document.getElementById('message').innerHTML = "Great Job! Smart Girl!";
        document.getElementById('message').setAttribute('style','color: green;text-align: center;');
    }
}