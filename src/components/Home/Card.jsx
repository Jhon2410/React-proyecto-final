import { connect } from 'react-redux'

const Card = ()=>{
    return(
                <div className="card m-3" style={{"width": "14rem"}}>
                <img src="https://i.pinimg.com/236x/4c/38/29/4c382994ca56ffb1f652aa3adc76ff28.jpg" className="card-img-top" width="14rem" height="250px"alt="..." />
                <div className="card-body">
                    <p className="card-text" style={{height :"75px" , overflow : "hidden"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">Ver mas</button>
                </div>
                </div>
    )
}

const mapStateToProps =()=>({

})

const mapDispatchToProps =()=>({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)