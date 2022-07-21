import HorizontalLinearStepper from "components/Stepper/Steeper";
import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { getBaseUrl } from "services";
import { cargarCortes } from "services";
import { getCortesUser } from "services";
import { obtenerListaUsuarios } from "services";
import Swal from 'sweetalert2'

const initialState ={
  name : "",
  description : "",
  price : 0, 
  subPhotos: [],
  mainPhoto: "", 
}
const Cortes = () => {
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const [add, setAdd] = useState(false);
  const [newCorte, setNewCorte] = useState(initialState)
  const [enviar, setEnviar] = useState(false)

  useEffect(()=> {
    setNewCorte(initialState)
  },[add])


  const [cortes, setCortes] = useState([])
  useEffect(()=>{
      (async()=>{
          const res = await getCortesUser()
          if(res.status === 200) {
              console.log(res.data)
              setCortes(res.data.msg)
          }
      })()
  },[])

  useEffect(() => {
    (async () => {
      const res = await obtenerListaUsuarios();
      console.log(res.data);
      if (res.status === 200) {
        setListaUsuarios(res.data.msg);
      }
    })();
  }, []);

  const eliminar = async(usuario) => {
    Swal.fire({
      title : "Alert",
      text : "Are you sure you wanna delete this item?",
      icon : "warning",
      showDenyButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
    }).then(res=>{
      if(res.isConfirmed){
        Swal.fire("Delete" , "Eliminado", "success");
      }
    })
  };
  const listar = cortes.map((item, idx) => {
    return (
      <tr key={item._id}>
        <td key={item._id}>
          <div className="d-flex align-items-center">
            <img
              src={ getBaseUrl()+  "img/" + item.mainPhoto}
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
          {item.idPeluquero}
        </td>
        <td>
          <button type="button" onClick={()=>{ eliminar(listaUsuarios[idx]) }} className="btn btn-danger btn-sm btn-rounded" data-toggle="modal" data-target="#exampleModalCenter">
            Delete
          </button>
        </td>
      </tr>
    );
  });
  return (
    <Container className="mx--auto bg-gradient-info" fluid>
    
      <div className="text-dark pt-3 mb-3" style={{minHeight : "100vh" }}>
      {add ? <HorizontalLinearStepper props={[setAdd, newCorte, setNewCorte]}></HorizontalLinearStepper> : <button className="btn btn-primary mx-auto  " style={{ width : "100px", borderRadius : "15px",marginTop : "100px" ,padding: "15px"}} onClick={()=>setAdd(true)}>Add</button>}
        <table
          className="table align-middle mb-0 bg-white"
          style={{ marginTop: "55px", paddingTop: "45px" }}
        >
          <thead className="bg-light">
            <tr>
              <th>Name Product</th>
              <th>Identification</th>
              <th>Id peluquero</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{listar}</tbody>
        </table>
      </div>
    </Container>
  );
};

export default Cortes;
