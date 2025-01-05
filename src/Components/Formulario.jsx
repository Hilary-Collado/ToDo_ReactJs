import { useState } from "react";
import Swal from "sweetalert2";
import Todos from "./Todos";

const Formulario = ({addTodo}) => {
    const [todo, setTodo] = useState({
        title: "ToDo #1",
        descripcion: "ToDo #1",
        state: true,
        state: "pendiente",
        priority: true,
    });

    // desestructurando
    const { title, descripcion, state, priority } = todo

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !descripcion.trim()) {
            // validando y creando alerta con sweetalert2
            return Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Titulo y descripcion obligatorios"
            });
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === "completado"
        })

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
    }

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        setTodo({
            ...todo,
            [name]: type === "checkbox" ? checked : value,
        });
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text"
                placeholder="ingrese todo"
                className="form-control mb-2"
                name="title"
                value={title}
                onChange={handleChange}

            />

            <textarea className="form-control mb-2"
                placeholder="Ingrese descripcion"
                name="descripcion" 
                id=""
                value={descripcion}
                onChange={handleChange}
            />

            <div className="form-check mb-2">
                <input
                    type="checkbox"
                    name="priority"
                    className="form-check-input"
                    id="inputCheck"
                    checked={priority}
                    onChange={handleChange}
                />

                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <select className="form-select mb-2" 
            name="state" 
            value={state}
                onChange={handleChange}>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>


            <button type="submit"  
            className="btn btn-primary">Agregar todo</button>
        </form>
    )
}

export default Formulario 

