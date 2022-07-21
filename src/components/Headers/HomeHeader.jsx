import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Carousel from "../Carousel/Carousel";

import { connect } from "react-redux"
import { cargarCortes } from "services";


const HomeHeader = ({idioma , changeIdioma}) => {
  const [resource , setResource]  =useState(idioma);

  const [cortes, setCortes] = useState([])
    useEffect(()=>{
        (async()=>{
            const res = await cargarCortes()
            if(res.status === 200) {
                setCortes(res.data.msg)
            }
        })()
    },[])

  return (
    <>
      <div className=" pb-2 pt-2 pt-md-8">
        {cortes.length !== 0  ?  
      <Carousel cortes={cortes}></Carousel>
      :
      <h2 className="text-center text-white">No hay cortes <a className="btn btn-primary" href="./Cortes">Add</a></h2>
        }       
      </div>
    </>
  );
};


const mapStateToProps=(state)=>({
  idioma : state.idioma
})

const mapDispatchToProps=(dispatch)=>({
  changeIdioma(){
    dispatch({
      type : "changeIdioma",
      idioma : localStorage.getItem("idioma")
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
