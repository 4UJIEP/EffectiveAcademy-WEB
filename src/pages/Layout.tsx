import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Layout()
{
    return (
        <>
            <Header/>
            <ToastContainer/>
            <Outlet/>
            <Footer/>
        </>
    );
}