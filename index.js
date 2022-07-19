const equalBtn = document.getElementById('equal');
const clear = document.getElementById('clear');
let val = document.getElementById("input").value;
let btn = document.getElementsByClassName("btn");

console.log(btn);
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


btn.forEach((button) => {
    button.addEventListener('click', ()=>{
        let btnInput = button.value;
        document.getElementById("input").value += btnInput;
    })
});

