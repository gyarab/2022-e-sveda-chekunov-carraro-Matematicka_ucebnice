import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import img from '../../public/android-chrome-512x512.png'
import {useEffect, useState} from "react";
import Image from "next/image";

/**
 * NAVIGATOR
 *
 * - bar on the top of the page
 * - after clicking on one of the buttons is user redirected to the requested route
 *
 * @param currentRoute
 * @returns {JSX.Element}
 * @constructor
 */
const NavBar = ({activeRoute, imgPath}) => {
    /*
    TODO -> implement marking current route
    TODO -> redesign colors of this navbar (rewrite bootstrap variables)
     */

    const [showImg, setShowImg] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth > 330) {
            setShowImg(true)
        }
    }, [])

    return (
        <Navbar bg={"secondary"} expand={"lg"}>
            <Container>
                <Navbar.Brand href={"/homepage"} style={{display: 'flex'}} className={'align-items-center'}>
                    {
                        showImg &&
                        <>
                            <Image
                                alt={"app logo"}
                                src={imgPath}
                                width={30}
                                height={30}
                                className={"rounded"}
                            />
                        </>
                    }
                    <div className={'ms-1'}>
                        Matematická učebnice
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls={"basic-navbar-nav"}
                />
                <Navbar.Collapse id={"basic-navbar-nav"}>
                    <Nav className={"me-auto"} activeKey={activeRoute}>
                        <Nav.Link href={"/class/sixth"} eventKey={'/class/sixth'}>Šestá třída</Nav.Link>
                        <Nav.Link href={"/class/seventh"} eventKey={'/class/seventh'}>Sedmá třída</Nav.Link>
                        <Nav.Link href={"/class/eight"} eventKey={'/class/eight'}>Osmá třída</Nav.Link>
                        <Nav.Link href={"/class/ninth"} eventKey={'/class/ninth'}>Devátá třída</Nav.Link>
                        <Nav.Link href={"/user/account"} eventKey={'/class/ninth'}>Můj účet</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

    /*
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
            Another action
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider/>
        <NavDropdown.Item href="#action/3.4">
            Separated link
        </NavDropdown.Item>
    </NavDropdown>
     */
}

export default NavBar