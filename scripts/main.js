/////////Atmosphere pressure level
document.getElementsByTagName('a2')[0].onclick = function() {
    document.getElementsByTagName('a2')[0].innerHTML = '34978 Pa PRESSURE LEVEL DOWN';
    document.getElementsByTagName('a2')[0].className = 'highlight';
    alert('PRESSURE LEVEL CRITICAL !');
};

///////// FUEL ADDITION
var initialFuel = document.getElementById('.initialFuel')
initialFuel = 0
alert('THE SHIP IS OUT OF FUEL !');


document.getElementById('add').onclick = function() {

    var inputVar = document.getElementById('fuelAmount').value;
    console.log('inputVar', inputVar)
    console.log(initialFuel)
    initialFuel = parseInt(initialFuel) + parseInt(inputVar)
    var result = parseInt(initialFuel)
    if (result <= 12000) {
        document.getElementById('result').innerHTML = result;
    } else {
        alert('FUEL TANK CAPACITY OVERLOAD :)')
        result = 12000
        document.getElementById('result').innerHTML = result;
    }
}

//////////Mars gravity converter
document.getElementById('convertNumber').onclick = function() {

    var inputWeight = parseInt(document.getElementById('inputWeight').value);
    var MarsWeight = (inputWeight * 0.38)
    document.getElementById('convertedWeight').innerHTML = MarsWeight
    console.log(inputWeight)
    console.log(MarsWeight)
}

//////timer
const time_text = document.getElementById('time_text')
const timeCount = document.getElementById('timer_days')
let timeValue = 210
let counter;
const startTimer = function(time) {

    counter = setInterval(timer, 5000);
    const timer = function() {
        timeCount.textContent = time;
        time--;
    }
    console.log(time)
    for (i = time; i >= 0; i--) {
        result = result - 5;

    }
}