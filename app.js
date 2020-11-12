/*

1.Find the current time
2.update the value in html  
3.find session and update it...

*/

//function for 0 number bug:

function updateNumber(number) {
   
         

    return (number < 10 ) ? '0'+ number : '' + number;

}


//function for each second update:

function updateTime() {
    //getting the Current Time from predefined javascript function...

    var currentTime = new Date();

    //getting the hours seconds nd minutes from predefined javascript function...
    //hour 
    //minute
    //seconds

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    //fetching html id and giving element data to it...

    var hoursElement = document.getElementById('hours');
    var minutesElement = document.getElementById('minutes');
    var secondsElement = document.getElementById('seconds');

    //session update

    var session;

    var sessionElement = document.getElementById('session');

    if (hours <= 11){
        session = "AM";
    }

    else if (hours == 12){
        session = "PM";
    }

    else{

        hours = hours - 12;
    session = "PM";
    }

sessionElement.innerText = session;

 //calling function 0 number bug
 

 hours = updateNumber(hours);
 minutes = updateNumber(minutes);
 seconds = updateNumber(seconds);
 
 

 console.log(hours,minutes,seconds,session);

 

 //inject value to html  using js....

 hoursElement.innerText = hours;
 minutesElement.innerText = minutes;
 secondsElement.innerText = seconds;



}

//updateTime();
updateTime();

//setInterval(updateTime, 1000);
setInterval(updateTime, 1000);


/*set interval syntax
setInterval(function(){
    updateTime();
},1000);


*/
