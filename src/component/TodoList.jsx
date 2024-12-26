export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat more fruits and vege',
        'Pick child from school',

    ]
  return (
    <div className="main">
        {todos.map((todo, todoIndex)=>{
            return(
                <li className="todoItem" key={todoIndex}>{todo}</li>
            )
        })}
    </div>
  )
}