import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";


export default function App()
{
    return (
        <>
            <Navigate to = '/characters'/>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}