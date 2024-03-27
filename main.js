function displayText(nam){
    var text=document.getElementById(nam);
    if (text.style.display == "none"){
        text.style.display="block";
    }
    else{
        text.style.display="none";
    }
}