document.querySelector("#btn1").addEventListener("click",check);
let a=document.getElementById("day");
let b=document.getElementById("month");
let c=document.getElementById("year");
let d=document.getElementById("height");
function check(event){
    event.preventDefault();
    console.log(a.value)
    if(a.value==="" ||b.value==="" ||c.value==="" ||d.value===""){
        alert("Please Enter All Fields");
    }else {
        window.location.href="signin3.html";
    }
}