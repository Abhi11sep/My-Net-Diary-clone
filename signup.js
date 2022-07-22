document.querySelector("#rates").addEventListener("change",calc);
let oldone=document.getElementById("oldwt");
var newone=document.getElementById("newwt");
let a=document.getElementById("a");
let b=document.getElementById("b");
let c=document.getElementById("c");

function calc(event){
    
    event.preventDefault();
    let r=0;
    // if(a.checked==false || b.checked==false || c.checked==false){
    //     alert("Please Select Traget Plan")
    // } else {    
        if(a.checked==true){
        r=+(a.value);
        console.log(r);
    }else if(b.checked==true){
        r=Number(b.value);
    }else if(c.checked==true){
        r=Number(c.value);
    }
// }
    let final=document.createElement("p");
    if(newone.value==="" || oldone.value===""){
        alert("Please Enter Values")
    }else {if(newone.value>oldone.value){
    final.innerText= "GAIN OF "+(newone.value - oldone.value)+" KG in "+((newone.value - oldone.value)/r)+" weeks";
    // console.log( final);
    }else{
        final.innerText= "LOSS OF "+(oldone.value - newone.value)+" KG in "+((oldone.value - newone.value)/r)+" weeks" ;
        // console.log(final);
    }
}
 
 display(final);
}

 function display(final){
   
    document.getElementById("show").append(final);
 }