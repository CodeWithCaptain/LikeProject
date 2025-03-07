let Input=document.getElementById("Input-Text");
let btn=document.getElementById("btn");
let Task=document.getElementById("Task");

//create a array
let todoStorage=[];

//get a element in local storage 
window.onload=()=>{
    todoStorage=JSON.parse(localStorage.getItem('todoS')) || [] //or empty
    todoStorage.forEach(todo=> {
        ToDo(todo);
    });
}

btn.addEventListener('click',()=>{
 
   todoStorage.push(Input.value); //insert a value
   localStorage.setItem('todoS',JSON.stringify(todoStorage)); //add in local storage 
   
   ToDo(Input.value);
   Input.value=" ";

});

//Print a element in display
function ToDo(Input){
    let li=document.createElement('li');
    li.textContent=Input;
    Task.appendChild(li);
   
    li.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
        remove(Input);
    });
    
    li.addEventListener("dblclick",()=>{
        Task.removeChild(li);
        remove(Input);
    });
    console.log(todoStorage);// console view
}

//remove a input from array
function remove(inputs){
  let index= todoStorage.indexOf(inputs);
  if(index > -1){
    todoStorage.splice(index,1)
  }
  localStorage.setItem('todoS',JSON.stringify(todoStorage));
}