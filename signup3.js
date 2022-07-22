document.querySelector("form").addEventListener("submit",mydata);
let arr=JSON.parse(localStorage.getItem("data")) || [];

function mydata(event){
    event.preventDefault();
    let obj={
        name:document.querySelector("#name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,
    }
    if(obj.name===""||obj.email===""||obj.password===""){
        alert("Please Enter All Fields");
    } else{
        arr.push(obj);
        localStorage.setItem("data",JSON.stringify(arr));
        alert("Signup Successfull")
        window.location.href="home.html";
    }
    
}