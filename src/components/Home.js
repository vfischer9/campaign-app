import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../images/apwu.png';
import hero from '../images/american-flag.jpg';
import profile from '../images/profile-pic.png'

function Home() {
    return (
        <div id='home'>
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navb'>
                <Container>
                    <Navbar.Brand href="#home">Campaign Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <img className='logo center' src = {logo} alt='logo'></img>
                        <Nav>
                            <Nav.Link eventKey={2} href="#media">Media</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Navbar collapseOnSelect expand="lg" className='mt-4'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#about">ABOUT</Nav.Link>
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#issues">ISSUES</Nav.Link>
                            <NavDropdown className='navb2' style={{color:"#3a5796"}} title={
                                        <span className="my-auto" style={{color:"#3a5796"}}>CANDIDATES</span>
                                        } id="collasible-nav-dropdown">
                                <NavDropdown.Item style={{color:"#3a5796"}} href="#action/3.1">Fred</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{color:"#3a5796"}} href="#action/3.2">Ian</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{color:"#3a5796"}} href="#action/3.3">Mark</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item style={{color:"#3a5796"}} href="#action/3.3">Jeanette</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#details">MORE DETAILS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div >
                <img className="hero-image" src={hero}></img>
            </div>

            <div id='about'>
                <h3 className='title'>ABOUT US</h3>
                <hr class="solid2"></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
            </div>

            <hr class="solid"></hr>

            <div id='issues'>
                <h3 className='title'>ISSUES WE CARE ABOUT</h3>
                <hr class="solid2"></hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
            </div>

            <hr class="solid"></hr>

            <div id='candidates'>
                <h3 className='title'>MEET OUR CANDIDATES</h3>
                    <hr class="solid2"></hr>
                        <div className='mt-2'>
                            <h3 id='action/3.1' className='title'>Fred</h3>
                            <img className='profile' src={profile}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
                        </div>

                        <hr class="solid"></hr>

                        <div className='candidate'>
                            <h3 id='action/3.2' className='title'>Ian</h3>
                            <img className='profile' src={profile}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
                        </div>

                        <hr class="solid"></hr>

                        <div className='candidate'>
                            <h3 id='action/3.3' className='title'>Mark</h3>
                            <img className='profile' src={profile}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
                        </div>

                        <hr class="solid"></hr>

                        <div className='candidate'>
                            <h3 id='action/3.4' className='title'>Jeanette</h3>
                            <img className='profile' src={profile}></img>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
                        </div>
            </div>




        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
    )
}

export default Home
