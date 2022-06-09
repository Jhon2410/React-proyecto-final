import { useEffect } from "react";
import { connect } from "react-redux";
import {get_data }from "../../services/index.js"


function Home({score,add}){
    useEffect(() => {
       (async()=>{
           const res = await get_data();
            console.log(res)
       })()
    }, []);
    return(
        <div>
        {score}
        <button onClick={()=>add()}>Add</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    score: state.puntos,
    respuestas: state.respuestas,
    question: state.question,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    reset() {
      dispatch({
        type: "reset_notify",
      });
    },
    add(){
        dispatch({
            type: "add"
        })
    }
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);