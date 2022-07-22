document.querySelector("#in").addEventListener("click",check);
let arr=JSON.parse(localStorage.getItem("data")) || [];

function check(event){
    event.preventDefault();
    if(arr===""){
        alert("no user sign up yet");
        return;
    }
    let obj={
        email:document.getElementById("name").value,
        password:document.getElementById("password").value,
    }
    let  flag=true;
    arr.forEach(function(ele){
        if((ele.email===obj.email || ele.name === obj.email) && ele.password===obj.password ){
            flag=false;
            localStorage.setItem("signin",JSON.stringify(ele));
            alert("Signin Successfull");
            window.location.href="home.html";
        }
    })
    if(flag===true){
        alert("First Create Account");
        window.location.href="signup.html";
        }
}