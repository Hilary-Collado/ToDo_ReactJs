const Todo = ({ todo, deleteTodo, updateTodo }) => {
    const { title, descripcion, state, priority, id } = todo

    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between align-items-start">
                <div className="">
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${state && 'text-decoration-line-through'}`}>{descripcion}</p>
                    {/* gap es una separacion entre elementos y solo se puede usar con flex o grid */}
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(id)}>Eliminar</button>
                        <button className="btn btn-sm btn-warning" onClick={() => updateTodo(id)}>Actualizar</button>
                    </div>
                </div>
                {/* <span className="badge text-bg-primary">{priority && "Prioritario"}</span> */}
                <span className="badge bg-primary rounden-pill">
        {priority && "Prioridad"}
      </span>
            </div>
        </li>)
}

export default Todo;