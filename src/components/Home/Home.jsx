import Header from 'components/Headers/HomeHeader'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'
import Carousel from "../Carousel/Carousel"
import Card from "./Card"
const Home = ()=>{
    return(
        <>
      <Container className=" mx--auto bg-gradient-info" fluid>
      <div className="">
      <Header className="my-1"></Header>
            <div className="d-flex d-wrap mx-auto my-5" style={{ flexWrap : "wrap", alignItems : "center" , textAlign : "center", contentAlign : "center"}}>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
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