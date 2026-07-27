const toggle=document.getElementById("theme-toggle");

toggle.onclick=()=>{

document.body.classList.toggle("light");

const icon=toggle.querySelector("i");

if(document.body.classList.contains("light")){

icon.className="fas fa-sun";

}else{

icon.className="fas fa-moon";

}

}