const screen=document.getElementById("display");
const btn=document.getElementById("buttons");

btn.addEventListener("click",(event)=>{
    let Target=event.target;
    // console.log(Target);
    // console.log(Target.classList);
    // console.log(Target.innerHTML);

if(Target.classList.contains("clear")){
    screen.value="";
    // console.log("nk");
    
}
else if(Target.classList.contains("number")){
    screen.value+=Target.innerHTML;
    // console.log(Target.innerHTML);
}
else if(Target.classList.contains("operator")){
    console.log(screen.value);
    let last=screen.value[screen.value.length-1];
    console.log(last);
    console.log(screen.value.length);
    console.log(screen.value);
    if(last==="+" || last==="-" || last==="x" || last==="/"){
        screen.value=screen.value.slice(0,-1)+Target.innerHTML;
    }
    else{
    screen.value += Target.innerHTML;
    // console.log(Target.innerHTML);
    }
}
else if(Target.innerHTML==="="){
    if(screen.value.length!=0){
        try{
            screen.value=eval(screen.value)
        }
        catch(error){
            screen.value="Error";
        }
    }
    else{
        screen.value="";
    }
}


});