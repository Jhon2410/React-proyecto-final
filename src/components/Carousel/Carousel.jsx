import { getBaseUrl } from "services";
import img1 from "../../assets/img/brand/argon-react-white.png"

const Carousel = ({cortes})=>{ 

  const renderImages = cortes.slice(0, 3).map((img ,idx)=>{
    if(idx===0){
      return (
        <div className="carousel-item active " key={img._id}  style={{height : "270px"}}>
          <img src={  cortes.length !== 0? getBaseUrl()+"img/" + img.mainPhoto : "" } className="" alt="..." />
        </div>
        )
    }else{
      return (
        <div className="carousel-item "  key={img._id}  style={{height : "270px"}}>
          <img src={  cortes.length !== 0? getBaseUrl()+"img/" + img.mainPhoto : "" } className="" alt="..." />
        </div>
        )
    }
 
  }) 

  
    return (
       <>
         <div id="carouselExampleIndicators" className="carousel slide  p-3 m-1 bg-dark" data-bs-ride="true">
        <div className="carousel-indicators ">
          <button type="button" data-bs-target="#carouselExampleIndicators"   data-bs-slide-to="0" className="active bg-primary" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="1" className="bg-primary" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators"  data-bs-slide-to="2" className="bg-primary" aria-label="Slide 3"></button>
        </div>
          <div className="carousel-inner"  style={{height : "320px"}} >
            {renderImages}
          </div>
          </div>
       </>
    )
}

export default Carousel;