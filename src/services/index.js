const axios = require("axios");

const base_url ="http://localhost:5000/";

const validar=async()=>{
    const res = await axios.get(base_url,{ headers: { 'Content-Type': 'application/json' , "access-token" : localStorage.getItem('Token')}})
    return res
}
const loguearUsuario = async(data)=>{
    const res = await axios.post(base_url + "api/auth/login",{
        usuario : data
    })
    console.log(res.data);
    return res;
}


const registrarUsuario = async(data)=>{
    const res = await axios.post(base_url + "api/auth/register",{
        usuario : data
    })
    console.log(res.data);
    return res;
}


const obtenerListaUsuarios=async()=>{
    const res = await axios.get(base_url + "api/users/list",{ headers: { 'Content-Type': 'application/json' , "access-token" : localStorage.getItem('Token')}})
    return res
}


const ActualiarInfoUsuario=async({data})=>{
    const res = await axios.post(base_url + "api/users/update",{
        usuario : data
    })
    console.log(res.data);
    return res;
}

export  {
    loguearUsuario , registrarUsuario , validar , obtenerListaUsuarios , ActualiarInfoUsuario
}