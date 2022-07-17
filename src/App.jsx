import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Store from "./store/index"
import { validar } from "services";

document.addEventListener('onhaschange', function(){alert(window.location.pathname)}, false);
window.addEventListener('storage', (e) => {
  window.location.reload();
});
window.addEventListener('hashchange', (e) => {
  console.log(e)
});


const App  =()=>{
    const [session , setSession] = useState(false);
    const [token , setToken] = useState(localStorage.getItem("Token"));

    useEffect(async()=>{
      const res = await validar()
      if(res.status === 200){
        if(res.data.success){
          console.log(res.data)
        }else{
          localStorage.removeItem("Token")
        }
      }else{
        localStorage.removeItem("Token")
      }

      if(window.location.pathname.split("/")[1].toLocaleLowerCase() !== "auth" && !localStorage.getItem("Token")){
      window.location.href="/auth/login"
      }else{
        setSession(true)

        if((window.location.pathname.split("/")[1].toLocaleLowerCase() === "auth" && localStorage.getItem("Token"))){
          window.location.href="/admin/index"
        }
      }

    },[])
    return(
          <Provider store={Store}>
              <BrowserRouter>
                <Switch>
                <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
                <Route path="/admin" render={(props) => <AdminLayout {...props} />} /> 
                {session? <Route path="/" render={(props) => <AdminLayout {...props} /> } /> :<Route path="/" render={(props) => <AuthLayout {...props} /> } />}
                </Switch>
              </BrowserRouter>
          </Provider>

    )
}

export default App;