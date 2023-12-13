var todoItems = [];
var Todo = /** @class */ (function () {
    function Todo(id, title, done) {
        this.id = id;
        this.title = title;
        this.done = done;
    }
    return Todo;
}());
// api
function fetchTodoItems() {
    var todos = [
        { id: 1, title: '안녕', done: false },
        { id: 2, title: '타입', done: false },
        { id: 3, title: '스크립트', done: false },
    ];
    return todos;
}
// crud methods
function fetchTodos() {
    var todos = fetchTodoItems();
    return todos;
}
function addTodo(todo) {
    todoItems.push(todo);
}
function deleteTodo(index) {
    todoItems.splice(index, 1);
}
function completeTodo(index, todo) {
    todo.done = true;
    todoItems.splice(index, 1, todo);
}
// business logic
function logFirstTodo() {
    return todoItems[0];
}
function showCompleted() {
    return todoItems.filter(function (item) { return item.done; });
}
// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
    // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
    addTodo(new Todo(4, '내 이름은', false));
    addTodo(new Todo(5, '너의 이름은', false));
}
// NOTE: 유틸 함수
function log() {
    console.log(todoItems);
}
todoItems = fetchTodoItems();
addTwoTodoItems();
log();
