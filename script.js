//your JS code here. If required.
let counter=0
function increment(){
		counter++;
	console.log(counter)
}

let mybtn=document.getElementByID("btn")
mybtn.addEventListener("click",increment)
}