let languageSect =document.querySelector(".language") as HTMLDivElement;
let togleButton =document.querySelector("#toggle") as HTMLButtonElement;


togleButton.addEventListener("click" , ()=>{
    if( languageSect.style.display==="none"){
        languageSect.style.display="block";
    }else{
        languageSect.style.display="none";
    }
})


