//your JS code here. If required.
let counter=0
function increment(){
		counter++;
	doucment.getElementById("counter").innerText=counter
	alert(counter)
}

let mybtn=document.getElementById("incrementBtn")
mybtn.addEventListener("click",increment)
}