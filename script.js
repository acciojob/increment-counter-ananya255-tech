//your JS code here. If required.
let counter=0
function increment(){
 alert(counter);
    counter++;
    document.getElementById("counter").innerText = counter;
}

let mybtn=document.getElementById("incrementBtn")
mybtn.addEventListener("click",increment)
}