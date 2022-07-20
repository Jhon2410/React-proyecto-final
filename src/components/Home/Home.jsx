import Header from 'components/Headers/HomeHeader'
import { useEffect } from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import { cargarCortes } from 'services'
import Carousel from "../Carousel/Carousel"
import Card from "./Card"
const Home = ()=>{

    const [cortes, setCortes] = useState([])
    useEffect(()=>{
        (async()=>{
            const res = await cargarCortes()
            if(res.status === 200) {
                console.log(res.data)
                setCortes(res.data.msg)
            }
        })()
    },[])
    const cargarCortesR = cortes.map(c=>{
        return(
            <Card cortes={c}></Card>
        )
    })
    return(
        <>
      <Container className=" mx--auto bg-gradient-info" fluid>
      <div className="">
      <Header className="my-1"></Header>
            <div className="d-flex d-wrap mx-auto my-5" style={{ flexWrap : "wrap", alignItems : "center" , textAlign : "center", contentAlign : "center"}}>
            {cargarCortesR}
            </div>
      </div>

</Container>
    
               

        </>
    )
}

const mapStateToProps =()=>({

})

const mapDispatchToProps =()=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)