import { createStore } from "redux";

if(!localStorage.getItem("idioma")){
    localStorage.setItem("idioma","es-CO")
  }

const initialState = {
    "usuario"  : { "name" : "jhon"},
    "idioma" : require("../languages/" + localStorage.getItem("idioma")+ ".json")
}

const reducer = (state=initialState, action) =>{
    console.log(action)
    switch(action.type){
        case "ChangeIdioma" : return  {...state , "idioma" :  require("../languages/" + action.idioma + ".json")  } ; break;
        default :return state
    }

}

export default createStore(reducer)