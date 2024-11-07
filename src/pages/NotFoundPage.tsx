import { Link } from "react-router-dom"
import Header from "../components/header"

export default function NotFoundPage()
{
    return (
        <main>
            <Header/>
            <div>404 Not Found</div>
            <Link to="/">Home</Link>
        </main>
    )
}