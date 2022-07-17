import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { obtenerListaUsuarios } from "services";
import Swal from 'sweetalert2'

const Usuarios = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await obtenerListaUsuarios();
      console.log(res.data);
      if (res.status === 200) {
        setListaUsuarios(res.data.msg);
      }
    })();
  }, []);

  const editar = async(usuario) => {
    

    

    const { value: formValues } = await Swal.fire({
        title: `<p>   ${usuario.name ? usuario.name : ''}  -  ${usuario._id}</p>` ,
        html:`
        <form class="d-grid">
        <p>${usuario.mail}</p>
        <p>Nombre : <input type="text" id="name" class="form-control" placeholder="${usuario.name}" /></p>
        <p>Estado : <select id="estado" class="form-control">
        <option value="desactivado">Deshabilitar</option>
        <option value="acivado">Habilitar</option>
        </select> </p>
        <p> Rol : <select id="rol" class="form-control">
        <option value="Admin">Admin</option>
        <option value="Usuario">Usuario</option>
        <option value="Peluquero">Peluquero</option>
        </select> </p>

        </form>
        `,
        showCloseButton: true,
        showConfirmButton: true,
        confirmButtonText : 'Actualizar',
        confirmButtonClass : "btn btn-primary w-100 d-grid form-control",
        confirmButtonColor : "primary",
        preConfirm: () => {
          return [
            document.getElementById('name').value,
            document.getElementById('estado').value,
            document.getElementById('rol').value
          ]
        }
       
      })

      if (formValues) {
        const new_usuario = {
          ...usuario, 
          name: formValues[0]!=="" ? formValues[0] : usuario.name,
          estado: formValues[1]!=="" ? formValues[1] : usuario.estado,
          rol: formValues[2]!=="" ? formValues[2] : usuario.rol,
        }

        console.log(new_usuario)
        
      }
  };
  const listar = listaUsuarios.map((item, idx) => {
    return (
      <tr key={item.id}>
        <td>
          <div className="d-flex align-items-center">
            <img
              src="https://mdbootstrap.com/img/new/avatars/8.jpg"
              alt=""
              style={{ width: "45px", height: "45px" }}
              className="rounded-circle"
            />
            <div className="ms-3">
              <p className="fw-bold mb-1">{item.name}</p>
              <p className="text-muted mb-0">{item.mail}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fw-normal mb-1">Id</p>
          <p className="text-muted mb-0">{item._id}</p>
        </td>
        <td>
          <span className="badge badge-success rounded-pill d-inline">
            Active
          </span>
        </td>
        <td>Senior</td>
        <td>
          <button type="button" onClick={()=>{ editar(listaUsuarios[idx]) }} className="btn btn-link btn-sm btn-rounded" data-toggle="modal" data-target="#exampleModalCenter">
            Edit
          </button>
        </td>
      </tr>
    );
  });
  return (
    <Container className="mx--auto bg-gradient-info" fluid>
    
      <div className="text-dark pt-3 mb-3">
    
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "75px", paddingTop: "45px" }}
        >
          <thead className="bg-light">
            <tr>
              <th>Name</th>
              <th>Identification</th>
              <th>Status</th>
              <th>Position</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{listar}</tbody>
        </table>
      </div>
    </Container>
  );
};

export default Usuarios;
