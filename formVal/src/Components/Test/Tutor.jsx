import { Link, Navigate } from "react-router-dom";
const Tutor = ()=>{
    const userData=JSON.parse(localStorage.getItem("user"))
    return(
        userData.isTutor !== true || userData.isAdmin !== true ? <div className="home">
            TuTorPage
            <Link to={"/admin"} className="link">Admin</Link>
            <Link to={"/home"} className="link">Home</Link>
            <Link to={"/signin"} className="link">Logout</Link>
        </div>:<Navigate to={"/signin"} />
    
    )
}

export default Tutor;