let keys = document.getElementsByClassName("button");
let display = document.getElementById("display");

for(let i=0; i<keys.length; i++){
    keys[i].addEventListener("click", (e)=>{
        try{
            if(keys[i].value == "AC"){
            display.value ="";
            }
            else{
                if(keys[i].value == "="){
                    if(display.value == ""){
                        display.value = "0";
                    }
                    else{
                        display.value = eval(display.value);
                    }
                }
                else if(keys[i].value == "DEL"){
                    let v = display.value;
                    v = v.slice(0, -1)
                    display.value = v;
                }
                else{
                    display.value += keys[i].value;
                }
            }
        }
        catch{
            alert("Error");
            display.value = "";
        }
    })
}