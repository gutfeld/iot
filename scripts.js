var apiLogin = "5e99586c2564325c7bf94be0";
var password = "c67f888a300313e72df4c79836869ef8";
var myDeviceId = "1D88C8";
var getMessagesURL1 = "https://api.sigfox.com/v2/devices/";
var getMessagesURL2 = "/messages";

var authorizationBasic = window.btoa(apiLogin + ':' + password);

var request = new XMLHttpRequest();
request.open('Get', getMessagesURL1 + myDeviceId + getMessagesURL2 , true, apiLogin, password);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.setRequestHeader('Authorization', 'Basic ' + authorizationBasic);
request.setRequestHeader('Accept', 'application/json');
request.send(null);

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
       var jsonContentText = request.responseText;
       document.getElementById("paraJContent").innerHTML = jsonContentText;
       var jsonDataParsed = JSON.parse(jsonContentText);
       var seqNumber1 = jsonDataParsed.data.seqNumber[0];
       document.getElementById("paraJContentParsed").innerHTML = seqNumber1;
    }
};
