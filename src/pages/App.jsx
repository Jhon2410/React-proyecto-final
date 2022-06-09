import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from "../store";
import Home from "./Home/Home";
export default function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={ <Home></Home>} />
                    </Routes>
            </BrowserRouter>
        </Provider>
       
    )
}