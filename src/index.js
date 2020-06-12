let list;
let Arr = [];
let b = localStorage.getItem("len");
for(let m = 0;m<b;m++){
    Arr[m] = localStorage.getItem(m);
   } 
let a = 0;
let el = document.createElement('li');
let div = document.getElementById('container');
let input1 = document.createElement('input');
let button1 = document.createElement('button');

button1.addEventListener('click',OnClick);
button1.addEventListener('',OnClick);
document.addEventListener('keypress', (event) => {
    if(event.key === "Enter"){
    OnClick();
    }
})

button1.innerHTML = "Добавить елемент"
div.appendChild(button1);
div.appendChild(input1);
function OnClick(){
    
if(input1.value != '' && input1.value != ' ' && input1.value != '  ' && input1.value != '   ' ){
    if(a != 0){
        div.removeChild(list);
    }
   list = document.createElement('ul');
   Arr.push(input1.value);
   Arr.sort();
   div.appendChild(list)
   for(let i = 0;i<Arr.length;i++){
    el =  document.createElement('li');
    el.innerHTML = Arr[i]
    list.appendChild(el);
    a++;
   }
   input1.value = null;
   let d = Arr.length;
   localStorage.setItem("len",d);
   for(let g = 0;g<Arr.length;g++){
    localStorage.setItem(g,Arr[g]);
    b++;
   }
}
}
list = document.createElement('ul');
Arr.sort();
div.appendChild(list)
for(let i = 0;i<Arr.length;i++){
 el =  document.createElement('li');
 el.innerHTML = Arr[i]
 list.appendChild(el);
 a++;
}