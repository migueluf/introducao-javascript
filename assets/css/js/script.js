var curenceNumberWrapper = document.getElementById('currentNumber');
var curenceNumber = 0;

function increment(){
    curenceNumber = curenceNumber + 1;
    curenceNumberWrapper.innerHTML = curenceNumber;
}

function decrement(){
    curenceNumber = curenceNumber - 1;
    curenceNumberWrapper.innerHTML = curenceNumber;
}