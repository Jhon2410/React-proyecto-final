import axios from "axios";

const base_url = "http://localhost:5000/";

const get_data = async()=>{
    const res = await axios.get(base_url)
    console.log(res)
    return res.data;

}


export {
    get_data
} 