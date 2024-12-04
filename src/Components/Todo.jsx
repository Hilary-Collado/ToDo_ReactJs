const Todo = ({ todo }) => {
    const { title, descripcion, state, priority, id } = todo

    return (
        <li className="list-group-item">
            <div className="">
                <div className="">
                    <h5>{title}</h5>
                    <p>{descripcion}</p>
                    {/* gap es una separacion entre elementos y solo se puede usar con flex o grid */}
                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-danger">Eliminar</button>
                        <button className="btn btn-sm btn-warning">Actualizar</button>
                    </div>
                </div>
                <span className="badge text-bg-primary">{priority && "Prioritario"}</span>
            </div>
        </li>)
}

export default Todo;