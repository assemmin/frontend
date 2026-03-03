import { Link, Outlet} from "react-router-dom";

const Layout: React.FC = () => {
    return(
        <>
        <nav style={navStyle}>
            <Link to="/">HOME</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/about">About</Link>
        </nav>
        <main style={{ padding: "20px"}}>
           <Outlet/>
        </main>
        <footer style={footerStyle}>
            Student Portal 
        </footer>
        </>
    );
};
const navStyle: React.CSSProperties = {
    display: "flex", 
    gap: "20px",
    padding: "10px",
    backgroundColor: "#f2f2f2",
};
const footerStyle: React.CSSProperties = {
    marginTop: "40px", 
    padding: "10px",
    textAlign: "center", 
    backgroundColor: "#f2f2f2",
};
export default Layout;