let input= document.querySelector('.entered-list');
let addbtn=document.querySelector('.add-list');
let tasks=document.querySelector('.tasks');

//add btn disabled

input.addEventListener('keyup', () => {
  if(input.value.trim() != '0'){
    addbtn.classList.add('active')
  }else{
    addbtn.classList.remove('active')
  }
})
//add new item to list

addbtn.addEventListener('click', () =>{
  console.log('Add button clicked!');
  if (input.value.trim() !='0') {
    let newItem = document.createElement('div')
    newItem.classList.add('item');
    newItem.innerHTML = `
   <p> ${input.value} </p>
    <div class="item-btn">
    <i class="fas fa-pen-square"></i>
    <i class="fas fa-times"></i>
      </div>`;

    tasks.appendChild(newItem);
    input.value = '';
  
  }else {
    alert('please enter a task');
  }
});

//delete item from list 

tasks.addEventListener('click',(e) =>{
  if (e.target.classList.contains('fa-times')){
    e.target.parentElement.parentElement.remove();
 }
})
 //mark items completed
 tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-pen-square')
    )
    {
         e.target.parentElement.parentElement.classList.toggle('completed');
    }
 })