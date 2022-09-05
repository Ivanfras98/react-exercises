import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export function AppRoute(){
    return(
        <Routes>
            <Route path="/" element={<Welcome name="Ivan" age={24}/>}></Route>
        </Routes>
    )
}