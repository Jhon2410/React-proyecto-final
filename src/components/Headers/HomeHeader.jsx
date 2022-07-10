import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Carousel from "../Carousel/Carousel";

import { connect } from "react-redux"


const HomeHeader = ({idioma , changeIdioma}) => {
  const [resource , setResource]  =useState(idioma);
  useEffect(()=>{
  },[])
  return (
    <>
      <div className=" pb-2 pt-2 pt-md-8">
      <Carousel></Carousel>
       
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
