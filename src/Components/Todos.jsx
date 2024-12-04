import Todo from './Todo'

const Todos = ({todos}) => {
    return (
        <div className="mt-5">
            <h2 className="text-center">Todos</h2>
            <ul className='list-group'>
                {/* para recorrer los todos */}
                {todos.map((todo) => (
                    // <li key={todo.id}>{todo.title}</li>
                    <Todo key={todo.div} todo={todo}/>
                ))}
            </ul>
        </div>
    )
}

export default Todos;