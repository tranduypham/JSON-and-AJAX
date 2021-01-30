// JSON stand for Javascript Oject Notation
// JSON is a way to store Object in an Array

// Using the XMLHttpRequest Object to request to an URL
// use the method named Open to do the Request

// There are 2 Argument in opent method
// First 1 decide wheter or not you want to send data (pass the "POST" in the argument) or receive data (pass the "GET" in the argument)
// Secend argument is simply the string address of the URL that you want to talk to

// After using the open method, we need to use the .onload event to treat the data that we've received from the open method
// XMLHttpRequest Variable.responeText will return the data that we receive

// Finnally, we need to use the send() method to send the request
var content = document.querySelector(".content");
var btn = document.querySelector(".btn");
var page = 1;

function crawlData() {
    var request = new XMLHttpRequest();
    var animals;

    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + page + '.json');
    page += 1;

    request.onload = function () {
        console.log("hello");
        if (request.status >= 200 && request.status <= 400) {
            animals = JSON.parse(request.responseText);
            console.log(animals);
        } else {
            console.log("We successfully connect to the URL but the URL return an error");
            return 0;
        }

    }; //Cai nay bang su kien load
    request.send();
    request.onerror = function () {
        console.log("We cannot connect to the URL");
        return 0;
    }; //Bang su kien error 
}
btn.addEventListener('click', function () {
    var request = new XMLHttpRequest();
    var animals;

    request.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + page + '.json');
    page += 1;
    if(page>3){
        btn.classList.add("hide");
    }

    request.onload = function () {
        console.log("hello");
        if (request.status >= 200 && request.status <= 400) {
            animals = JSON.parse(request.responseText);
            renderHTML(animals);
        } else {
            console.log("We successfully connect to the URL but the URL return an error");
        }

    }; //Cai nay bang su kien load
    request.send();
    request.onerror = function () {
        console.log("We cannot connect to the URL");
    }; //Bang su kien error 
});

function renderHTML(animals) {
    console.log(animals);
    animals.forEach(element => {
        str = "<p>" +element.name+" is " + element.species +"</p><hr>"
        content.insertAdjacentHTML('beforeend',str);
    });
}




// AJAX stand for Acsynchronous Javascript and XML 
// Asynchronous here mean runing in the background and no need for refreshing page