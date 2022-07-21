const axios = require("axios");

const base_url ="http://localhost:5000/";

const getBaseUrl =()=>{
    return base_url;
}
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


const registrarUsuario = async(body)=>{
    const res = await axios.post(base_url + "api/auth/register",body)
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

const cargarCortes =async()=>{
    const res = await axios.get(base_url + "api/peluqueria/cortes",{ headers: { 'Content-Type': 'application/json' , "access-token" : localStorage.getItem('Token')}})
    return res
}

const getInfoUser =async()=>{
    const res = await axios.get(base_url + "api/users/user/info" ,{ headers: { 'Content-Type': 'application/json' , "access-token" : localStorage.getItem('Token')}})
    return res
}

const getCortesUser =async()=>{
    const res = await axios.get(base_url + "api/peluqueria/cortes/info" ,{ headers: { 'Content-Type': 'application/json' , "access-token" : localStorage.getItem('Token')}})
    return res
}


const deleteCorte =async(body)=>{
    const res = await axios.post(base_url + "api/peluqueria/cortes/delete", body ,{ headers: { 'Content-Type': 'application/json' , "access-token" : localStorage.getItem('Token')}})
    return res
}




const añadirCorte= async(data)=>{
    const body = new FormData();
 
    body.append("name" , data.name)
    body.append("description" , data.description)
    body.append("price" , data.price)
    body.append("mainPhoto" , data.mainPhoto)
    body.append("subPhotos" , data.subPhotos)
    
    console.log(data.mainPhoto, data.subPhotos)
    
    const res = await axios.post(base_url + "api/peluqueria/add",body,{ headers: {  "access-token" : localStorage.getItem('Token') }})
    return res
}
export  {
    loguearUsuario , registrarUsuario , validar , obtenerListaUsuarios , ActualiarInfoUsuario , cargarCortes , añadirCorte , getBaseUrl , getInfoUser , getCortesUser , deleteCorte
}