const equalBtn = document.getElementById('equal');
const clear = document.getElementById('clear');
let val = document.getElementById("input").value;
var btn = document.getElementsByClassName("btn");

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