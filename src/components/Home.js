import React from 'react'
import { Nav, Navbar, Container, Card, CardGroup } from 'react-bootstrap';
import logo from '../images/apwu.png';
import hero from '../images/american-flag.jpg';
import profile from '../images/profile-pic.png'
import labor from '../images/laborleader-cert.jpg';
import service from '../images/service-cert.jpg';
import training from '../images/training-cert.jpg';
import proclamation from '../images/proclomation.JPG';
import fred from '../images/fred.JPG';
import ian from '../images/ian.jpg';
import arbitration from '../images/arbitration.jpeg';

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
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#about">ABOUT FRED</Nav.Link>
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#vp">ABOUT IAN</Nav.Link>
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#arbitration">GHIRALDI SETTLEMENT</Nav.Link>
                            {/* <NavDropdown className='navb2' style={{color:"#3a5796"}} title={
                                        <span className="my-auto" style={{color:"#3a5796"}}></span>
                                        } id="collasible-nav-dropdown">
                                <NavDropdown.Item style={{color:"#3a5796"}} href="#action/3.2">Ian</NavDropdown.Item>
                            </NavDropdown> */}
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#details">MORE DETAILS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div class="contain">
                <img className="hero-image" src={hero}></img>
                <div className='centered'>
                    <p>"As we come to the close of 2021, it is more important than ever that our Local Union requires
                    experienced leadership that is both dedicated and committed to all our members and crafts.
                    As I have served the Local as shop steward, clerk craft director, and Local President since 2004,
                    I believe now is the time to not only tell the members who has betrayed them, but for the first
                    time, I am going to provide the <u><b>proof</b></u> to you that you deserve.
                    At the close of my 2 terms in 2009, the Local Union had many grievances still in the system
                    pending arbitration, for all crafts, clerks, maintenance and motor vehicle services. Most notable
                    was a non-compliance grievance in the VMF which had to do with staffing, towing and
                    monetary compensation for the VMF. Gerry Ghiraldi traded all these grievances for personal
                    gain. I am providing the settlement he signed as well as the arbitration that went on in 2011.
                    On January 12, 2010, then-President Gerry Ghiraldi signed a settlement for grievance ending in
                    6097 for no money. Why you ask? For his personal gain." -Fred Fischer
                    </p>
                </div>
            </div>

            
            <div id='about'>
                <h3 className='title'>FRED FISCHER, PRESIDENT (LOCAL 231)</h3>
                {/* <img className='profile' src={profile}></img> */}
                <hr class="solid2"></hr>
                <img className='fred' src={fred} alt='Fred C Fischer'></img>
                <br></br><br></br>
                <p>
                    Fred has exceptional leadership experience within the American Postal Workers Union. <br></br><br></br>
                    During his presidency from 2004-2006, Fred had accomplished: 
                    <ul className='bullets'>
                        <li>Negotiated the RI-399 agreement and Staten Island General Principles in 2004, in which the APWU continues to retain the lions share of work on Staten Island.</li>
                        <li>Received APWU training for OWCP, FMLA, Article 12 excessing issues, Function 4 impact, Advanced stewards training, RI-399, NP (National Reasessment Program), Secretary-Treasurer, Labor Law, Parliamentary procedure, Leadership, JCIM, Craft specific training for all crafts as well as Arbitration- which are all necessary to run a Local Union.</li>
                        <li>Eliminated past "stations as needed" on all bids and the "Islandwide Overtime List", as well as drivers working automation.</li>
                        <li>An Arbitration settlement was paid to the MVS Craft in 2006 totaling $27,000, and Fred had negotiated the NLRB settlement against the USPS for $85,000, which was paid in 2006.</li>
                    </ul>
                    During his presidency from 2007-2009, Fred had accomplished:
                    <ul className='bullets'>
                        <li>Re-Signing of our Local Memorandum ofUnderstanding (LMOU).</li>
                        <li>Served on the National Presidents Conference election committee in 2007.</li>
                        <li>Met with your elected officials in Washington D.C. to discuss our concerns in 2007 and 2009.</li>
                        <li>Attended the All-Craft conference in 2007 and 2009 while receiving the <b>Presidents Award</b> in 2007.</li>
                        <li>Served on the New York State Constitution Committee in 2006 and 2008 during the New York State Conventions.</li>
                        <li>In April, 2008 our Local Union became affiliated with the largest State Federation in the Country, the New York State AFL-CIO, having our Local fully affiliated at the Local, State and Federal levels of the AFL-CIO.</li>
                        <li>Represented the members at three consecutive National APWU Conventions, which is the highest ranking body of the APWU.</li>
                        <li>In July 2008, assisted in negotiating a settlement agreement for the VMF to include an upgrade for mechanics, posting two additional mechanics positions and payment of over $25,000</li>
                        <li>Took part in the MS-47 settlement- which awarded all custodians lump sum payments of $2,700 each which totaled over $37,000 for Staten Island custodians.</li>
                        <li>Met the Local's COPA goals in 2006, 2007 and 2008.</li>
                        <li>In October 2008, an Arbitration decision that awarded over $5,000 to Main Office Window clerks.</li>
                        <li>In June 2009, an Arbitration decision that awarded an Electronic Technician over 3 years out of schedule pay.</li>
                        <li>An 8-month audit conducted by the Department of Labor assured our Local's finances were in order.</li>
                        <li>Received the 2008 <b>Presidents Award.</b></li>
                        <li>On April 30th, 2009, Fred was honored by the North Shore Democratic Club and received the 2009 <b>Labor Leader of the Year Award</b>.</li>
                        <li>Fred is a Certified National APWU Arbitration Advocate.</li>
                    </ul>
                </p>
            </div>
            
            <div className='container'>
                <CardGroup>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={training} alt="training certificate" className='award' />
                        <Card.Body>
                            <Card.Title className='title'>Basic Arbitration Training Certificate</Card.Title>
                            <Card.Text>
                            Fred Fischer - 2009<br />
                            American Postal Workers Union, AFL-CIO<br /> <br />
                            <i>"Research and Education Department is proud to present this certificate to 
                                Fred Fischer for successfully completing BASIC ARBITRARY TRAINING 2009".</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
               
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={labor} alt="labor leader certificate" className='award' />
                        <Card.Body>
                            <Card.Title className='title'>Certificate of Recognition</Card.Title>
                            <Card.Text>
                            Fred Fischer - April 30, 2009<br />
                            Bob Parker Labor Leader Award Recipient<br /> <br />
                            <i>"In recognition of your outstanding service to our great city and state, and for your great
                            contributions to our community. A great state is only as great as those individuals who 
                            perform exemplary service on behalf of their community and contribute positively to that
                            environment. On this day, April 30. 2009 on the occasion of the North Shore Democratic Club's 
                            48th Annual Dinner, being held at LiGreci's Staaten, Staten Island."</i>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={service} alt="service certificate" className='award' />
                        <Card.Body>
                            <Card.Title className='title'>Special Congressional Recognition</Card.Title>
                            <Card.Text>
                                Fred Fischer - April 30, 2009<br />
                                Member of Congress <br /><br />
                            <i>"Presented to Fred Fischer in recognition of outstanding and invaluable service to the community." </i>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </CardGroup>
            </div>
            

            <div class="proclamation">
                        <img src={proclamation} alt="Avatar" class="image" />
                        <div class="middle">
                            <div class="text">Fred's Proclamation - Awarded April 30, 2009</div>
                        </div>
            </div>

            <hr class="solid"></hr>

            <div id='vp'>
                <h3 className='title'>IAN FISHER, VICE PRESIDENT (LOCAL 231)</h3>
                        <div>
                            <hr class="solid2"></hr>
                            <img className='ian' src={ian} alt='Ian Fisher'></img>
                            <br /><br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed pretium dui. Etiam sed mauris laoreet, tincidunt dui at, viverra tortor. Etiam lacinia, nisl quis sollicitudin euismod, erat lacus rhoncus risus, ut consectetur ipsum mauris sed lorem. Fusce pharetra ornare velit sit amet aliquet. Duis in placerat mauris, sit amet blandit metus. Aliquam volutpat neque ac nunc posuere dictum. Curabitur porta efficitur mauris, quis mollis tellus malesuada vitae. Suspendisse nec dolor non odio ultricies aliquet luctus id quam. Curabitur imperdiet pulvinar nibh. Proin nec felis finibus, cursus justo nec, bibendum ex. Vivamus risus erat, finibus ac viverra in, consectetur et massa. Mauris augue diam, tempus eget dolor et, aliquet cursus nisi. Ut condimentum cursus dictum. Praesent dictum condimentum tempor. In luctus interdum est ut interdum. Curabitur enim justo, sagittis ac hendrerit sed, condimentum in arcu. Etiam vel vehicula quam. Nunc nec eleifend orci. Vivamus et odio hendrerit, egestas magna molestie, luctus tellus. Aenean placerat luctus mi sit amet vulputate. Cras malesuada bibendum neque, sed interdum purus faucibus nec. Maecenas venenatis leo at nisi malesuada tempus. Duis fermentum tortor erat, eget lacinia elit gravida eu. Nullam sagittis nibh lacus, quis ullamcorper urna auctor bibendum.</p>
                        </div>
            </div>


            

            <hr class="solid"></hr>

            <div id='arbitration'>
                <h3 className='title'>GHIRALDI SETTLEMENT</h3>
                <hr class="solid2"></hr>
                <p>On January 12, 2070, then-President Gerry Ghiraldi signed a settlement for grievance 
                    ending in 6097 for <b>no money</b>.</p>
                <br />
                <p className='left'>
                    January 12, 2010
                    <br />
                    Gerald Ghiraldi
                    <br />
                    President
                    <br />
                    APWU
                    <br />
                    550 Manor Road
                    <br />
                    Staten Island, NY 10314-
                </p>
                <br />
                <p className='right'>Re: B00V-4B-C 06256097
                    <br />
                    CLASS ACTION 06NA14
                    <br />
                    STATEN ISLAND, NY 10314-9998
                </p>
                <p className='numbers'><i>"This is in reference to our discussion held on Wednesday, December 18, 2009 on the above-captioned
                    grievance resulting in the following mutually agreed upon remedy, which, it is understood, is without 
                    precedent and shall not be cited in any other appeal forum or arbitration hearing other than enforcement of
                    its terms subject to the consistency with the National Agreement.</i></p>
                <p className='numbers'><i>1. The service agrees to increase the current staffing at Staten Island VMF by adding one LDC 32 position; 
                    this will increase the current staffing to twelve (12) LDC 32 positions.</i></p>
                <p className='numbers'><i>2. In-Service Agreement is currently posted and closes on February 9, 2010.</i></p>
                <p className='numbers'><i>3. The union agrees to withdraw their most recent grievance #____-___-________ dated 
                    December 2009, in view of the fact that the non-compliance issue has been resolved.</i></p>
                <p className='numbers'><i>4. By signature of your representative, the above settlement is accepted. "</i></p>
                <p>Signed Gerald Ghiraldi - 1/12/10</p>
                <img className='arbitration' src={arbitration} alt='Grievance Settlement'></img>
                <br /><br />
                <p className='numbers'><b>The settlement that Gerald Ghiraldi willingly signed for grievance ending in 6097 was for personal gain. 
                    With this settlement, it is clear that Gerald Ghiraldi does not hesitate to betray the membeers of our Union
                    for his own self-interest. </b>
                </p>

                <br />
                <hr class="solid2"></hr>
                <br />

                <div className='numbers'>
                    On top of the selfish settlement Gerald Ghiraldi signed, 
                </div>
            </div>

       

           



    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
    )
}

export default Home
