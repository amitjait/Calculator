const equalBtn = document.getElementById('equal');
const clear = document.getElementById('clear');
let val = document.getElementById("input").value;
var btn = document.getElementsByClassName("btn");
const back = document.getElementById("back");

console.log(btn.length);
// function myClick(){
//     document.getElementById("input").value = "Enter";
// }

document.getElementById("input").focus();

equalBtn.addEventListener('click', ()=> {
    document.getElementById("input").value = eval(document.getElementById("input").value);
    
});

clear.addEventListener('click', ()=>{
    document.getElementById("input").value = "";
});

console.log(btn[1].value);
for(var i=0; i<btn.length; i++){
    let btnVal = btn[i].value;
    btn[i].addEventListener('click', () => {
        document.getElementById("input").value += btnVal;
    });
}

back.addEventListener('click', ()=>{
    let backSpace = document.getElementById("input").value;
    if(backSpace.length != 0){
        document.getElementById("input").value = backSpace.substring(0, backSpace.length-1);
    }
});
