import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import logo from './../../assets/logo/d828c433fd694ae1bf51e4d6637d0bae.png'



const Navbars = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <NavLink className="nav-link text-primary fs-3 me-4" aria-current="page" to="/">
                <span><img style={{height: "60px"}}  src={logo} alt="" /></span>
                    BabyBo <span className='text-info'>Toys</span>
                    </NavLink>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        <NavLink className="nav-link" to="/alltoys">All Toy</NavLink>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes" >

                            {user ?

                                <div className='d-flex'>
                                    <Nav className="ms-auto">
                                        <NavLink className="nav-link" aria-current="page" to="/mytoys">My Toy</NavLink>
                                        <NavLink className="nav-link" to="/addtoy">Added Toy</NavLink>
                                    </Nav>

                                    <img style={{ width: '40px', height: '40px' }} src={user.photoURL} alt="" className='rounded-circle me-4'  />
                                    <Button onClick={handelLogOut} className='bg-info' variant="secondary">Logout</Button>
                                </div>
                                :
                                <Link to='/login'>
                                    <Button className='bg-info' variant="secondary">Login</Button>
                                </Link>
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navbars;