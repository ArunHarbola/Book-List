const list = document.querySelector("#unorderedList");
const addForm = document.forms['addItem'];
//deleting element 
list.addEventListener('click',(e)=>{
    if(e.target.className = 'delete'){
        const li = e.target.parentElement ;
        list.removeChild(li);
    }
});
//adding element 

addForm.addEventListener('click',(e)=>{
    if(e.target.id == 'addButton'){
        e.preventDefault();
    const value = addForm.querySelector('input[type = "text"]').value;

    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const btn = document.createElement('button');
    btn.classList.add('delete'); 
    h4.textContent = value ; 
    btn.textContent = "Delete"; 
    li.appendChild(h4);
    li.appendChild(btn);
    list.appendChild(li);   
    //window.alert(value.toUpperCase()+" added to the list");
    }
});
//searching
// const searchBar = forms['search'].querySelector('input');
// searchBar.addEventListener('keyup', (e) => {
//   const term = e.target.value.toLowerCase();
//   const books = list.getElementsByTagName('li');
//   Array.from(books).forEach((book) => {
//     const title = book.getElementsByTagName('h4').textContent;
//     if(title.toLowerCase().indexOf(e.target.value) != -1){
//       book.style.display = 'block';
//     } else {
//       book.style.display = 'none';
//     }
//     window.alert("Fuck");
//   });
// });
