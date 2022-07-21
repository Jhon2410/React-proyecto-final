import { connect } from 'react-redux'
import { getBaseUrl } from 'services'

const Card = ({cortes})=>{
    return(
                <div className="card m-3" style={{"width": "14rem"}}>
              
                <img src={getBaseUrl() + "img/" + cortes.mainPhoto} className="card-img-top" width="14rem" style={{height: "250px"}}  />

                <div className="card-body">
                     <h3 className="card-title" style={{ overflow : "hidden"}}>{cortes.name}</h3>
                     <p className="card-text" style={{height :"75px" , overflow : "hidden"}}>{cortes.description}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary" onClick={()=>window.location.href="./info/" + cortes.peluquero[0].id }>Contactar</button>
                </div>
                </div>
    )
}

const mapStateToProps =()=>({

})

const mapDispatchToProps =()=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)