function websocket_test() {
  var ws = new WebSocket('ws://localhost:8080/ws');
  ws.onopen = function () {
    console.log('Connected');
    ws.send('Hello, world');
  };
  ws.onmessage = function (evt) {
    console.log('Received: ' + evt.data);
  };
  ws.onclose = function () {
    console.log('Disconnected');
  };
}

function binarySearch_test() {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var index = binarySearch(arr, 5);
  console.log(index);
}

function createArray_test() {
  var arr = createArray(10);
  console.log(arr);
}

function calculateTheFirstDayOfYear_test() {
  var date = new Date(2017, 0, 1);
  var firstDayOfYear = calculateTheFirstDayOfYear(date);
  console.log(firstDayOfYear);
}

function login_test() {
  var user = {
    name: 'test',
    password: 'test',
  };
  login(user);
}

function getAllUsers_test() {
  getAllUsers();
}

function artificialIntelligence_test() {
  var user = {
    name: 'test',
    password: 'test',
  };
  artificialIntelligence(user);
}

function sumTwoNumberAndSubtractOne_test() {
  var result = sumTwoNumberAndSubtractOne(2, 3);
  console.log(result);
}

function getNumberOfAge(date) {}
