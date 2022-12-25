var switchOnOff = document.getElementById("switch");
var bulb = document.querySelector(".light");
var first = document.getElementsByClassName("first");
var second = document.getElementsByClassName("second");

var flag = true;

console.log(first);
console.log(second);

function light() {
    bulb.classList.remove("light");
    bulb.classList.add("red-light");
}

function switched( btn ) {
    if( flag ) {
        switchOnOff.style.color = "green";

        for (var i=0; i<first.length; i+=1){
            first[i].style.display = 'block';
        }

        setTimeout( function() {
            light();
        }, 1000);

        setTimeout( function() {
            for (var i=0; i<second.length; i+=1){
                second[i].style.display = 'block';
            }
        }, 2000);

        flag = false;
    }
    else {
        switchOnOff.style.color = "red";

        for (var i=0; i<second.length; i+=1){
            second[i].style.display = 'none';
        }

        for (var i=0; i<first.length; i+=1){
            first[i].style.display = 'none';
        }

        bulb.classList.remove("red-light");
        bulb.classList.add("light");
        flag = true;
    }
}