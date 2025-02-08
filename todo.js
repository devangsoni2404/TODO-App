let todoList = [
    {item:'Goto college',duedate:'2025-03-02'},
    {item:'Goto gym',duedate:'2025-01-20'}
];
displayTodo();
function addTodo() {
    let inputElement = document.querySelector('#todo-data');
    let inputdate = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = inputdate.value;
    todoList.push({item : todoItem,duedate:todoDate});
    inputElement.value = '';
    inputdate.value = '';
     displayTodo();
}

function displayTodo() {
    let container = document.querySelector('.todo-container');
    let newHtml = '';
    for(let i = 0;i<todoList.length;i++) {
        let item = todoList[i].item;
        let date = todoList[i].duedate;
        newHtml+= `
        <span>${item}</span>
         <span>${date}</span>
         <button id="todo-delete" onclick = "todoList.splice(${i},1);displayTodo()">Delete</button>

         `;
    }
      container.innerHTML = newHtml;
}