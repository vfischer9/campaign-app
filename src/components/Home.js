import React, { useEffect, useState } from 'react'
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
import {Link} from "react-router-dom";
import campaignGif from '../images/campaign.gif';
import 'animate.css';
import up from '../images/up.png'


function Home() {

    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

    return (
        <div id='home' onload="$('.iframe-loading').css('background-image', 'none');" >
            
            <Navbar collapseOnSelect expand="lg" variant="dark" className='navb'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <img className='logo center' src = {logo} alt='logo'></img>
                        {/* <Nav>
                            <Nav.Link eventKey={2} href="#media">Media</Nav.Link>
                        </Nav> */}
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
                            <Nav.Link className='navb2' style={{color:"#3a5796"}} href="#panel">ARBITRATION PANEL</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="scroll-to-top">
                {isVisible && (
                    <div onClick={scrollToTop}>
                    <img className='upImg' src={up} alt='Up Arrow'></img>
                    </div>
                )}
                </div>

            <div class="contain">
                <img className="hero-image" src={hero}></img>
                <div className='centered topText'>
                    <p>
                    "As we come to the close of 2021, it is more important than ever that our Local Union requires
                    experienced leadership that is both dedicated and committed to all our members and crafts.
                    As I have served the Local as shop steward, clerk craft director, and Local President since 2004,
                    I believe now is the time to not only tell the members who has betrayed them, but for the first
                    time, I am going to provide the <u><b>proof</b></u> to you that you deserve. At the close of my 2 terms in 2009, the Local Union had many grievances still in the system
                    pending arbitration, for all crafts, clerks, maintenance and motor vehicle services. Most notable
                    was a non-compliance grievance in the VMF which had to do with staffing, towing and
                    monetary compensation for the VMF. Gerry Ghiraldi traded all these grievances. Why you ask? For his own personal gain. I am providing the settlement he signed as well as the arbitration that went on in 2011.
                    " -Fred Fischer
                    </p>
                </div>
            </div>

            
            <div id='about'>
                <h3 className='title'>FRED FISCHER, PRESIDENT (LOCAL 231)</h3>
                {/* <img className='profile' src={profile}></img> */}
                <hr class="solid2"></hr>
                <img className='fred' src={fred} alt='Fred C Fischer'></img>
                <br></br><br></br>
                <div className='body'>
                <p>
                    <p><i>
                    "I am running for Local President along with Ian Fisher for Executive Vice President. I have almost
                    20 years experience as Union rep for our local, most of those years as the Local President. Here is just
                    a small list of my many accomplishments, from 12 years ago, and I've served an additional 2 terms as President
                    since then." - Fred Fischer 
                    </i></p>

                    <p className='bullets'>Eileen George and Gerald Ghiraldi are running together- zero experience and unethical deals are
                        not in your best interest. Eileen George currently struggles at the base shop steward level, and has limited
                        experience outside of the basic step 1 grievance. Fred, however, has 20 years union experience, most of which as Local
                        President. With 2022 quickly approaching, we will face more challenges as our contract is expired, our local agreement 
                        will need to be negotiated if management chooses. We have a new Postmaster. We have new officers on our executive
                        board. As a Local President, there is no substitute for experience. There is training available for stewards, treasurers,
                        craft specific training, but there is nothing to prepare someone for the position of president and leadership. 
                        <br /> <br />
                        "I believe sometimes change is needed, but I also recognize that it should be change for the better if someone is not doing 
                        a good job. It should never be for personal reasons, which is a south shore annex rerun over and over again." 
                        </p>
                        <p className='bullets'>
                        Eileen has zero experience, and Gerry has squashed grievances for his own personal gain, which is <i>highly </i> unethical.
                        If memory serves correct, John Braccia was elected President, not Gerry. Yet he still settled grievances which were pending arbitration 
                        and signed the settlement as Local President. 
                        <br /><br />
                        "Your grievances, under my leadership, are always considered important, safe, and never
                        used as a bargaining chip to make my personal life better. As always, I would like to thank you for your support. It has been an honor
                        to serve you. I look forward to the future, and with the right people in office, our future is indeed bright." -Fred Fischer
                        </p>

                        <hr className='solid2'></hr>


                    During Fred's presidency from 2004-2006, he has accomplished: 
                    <ul className='bullets'>
                        <li>Negotiated the RI-399 agreement and Staten Island General Principles in 2004, in which the APWU continues to retain the lions share of work on Staten Island.</li>
                        <li>Received APWU training for OWCP, FMLA, Article 12 excessing issues, Function 4 impact, Advanced stewards training, RI-399, NP (National Reasessment Program), Secretary-Treasurer, Labor Law, Parliamentary procedure, Leadership, JCIM, Craft specific training for all crafts as well as Arbitration- which are all necessary to run a Local Union.</li>
                        <li>Eliminated past "stations as needed" on all bids and the "Islandwide Overtime List", as well as drivers working automation.</li>
                        <li>An Arbitration settlement was paid to the MVS Craft in 2006 totaling $27,000, and Fred had negotiated the NLRB settlement against the USPS for $85,000, which was paid in 2006.</li>
                    </ul>
                    During Fred's presidency from 2007-2009, he has accomplished:
                    <ul className='bullets'>
                        <li>Re-Signing of our Local Memorandum of Understanding (LMOU).</li>
                        <li>Served on the National Presidents Conference election committee in 2007.</li>
                        <li>Met with your elected officials in Washington D.C. to discuss our concerns in 2007 and 2009.</li>
                        <li>Attended the All-Craft conference in 2007 and 2009 while receiving the <b>Presidents Award</b> in 2007.</li>
                        <li>Served on the New York State Constitution Committee in 2006 and 2008 during the New York State Conventions.</li>
                        <li>In April, 2008 our Local Union became affiliated with the largest State Federation in the Country, the New York State AFL-CIO, having our Local fully affiliated at the Local, State and Federal levels of the AFL-CIO.</li>
                        <li>Represented the members at three consecutive National APWU Conventions, which is the highest ranking body of the APWU.</li>
                        <li>In July 2008, assisted in negotiating a settlement agreement for the VMF to include an upgrade for mechanics, posting two additional mechanics positions and payment of over $25,000.</li>
                        <li>Took part in the MS-47 settlement- which awarded all custodians lump sum payments of $2,700 each which totaled over $37,000 for Staten Island custodians.</li>
                        <li>Met the Local's COPA goals in 2006, 2007 and 2008.</li>
                        <li>In October 2008, an Arbitration decision that awarded over $5,000 to Main Office Window clerks.</li>
                        <li>In June 2009, an Arbitration decision that awarded an Electronic Technician over 3 years out of schedule pay.</li>
                        <li>An 8-month audit conducted by the Department of Labor assured our Local's finances were in order.</li>
                        <li>Received the 2008 <b>Presidents Award.</b></li>
                        <li>On April 30th, 2009, Fred was honored by the North Shore Democratic Club and received the 2009 <b>Labor Leader of the Year Award</b>.</li>
                        <li>Fred is a Certified National APWU Arbitration Advocate.</li>
                    </ul>
                    On top of these accomplishments, Fred has continued to serve as Local President for <b>two additional terms.</b>
                </p>
                </div>
            </div>

            <hr class="solid"></hr>
            
            <div className='container'>
                <div className='card-group'>
                <div style={{ width: '18rem' }} className='card'>
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
                    </div>
               
                    <div style={{ width: '18rem' }} className='card'>
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
                    </div>

                    <div style={{ width: '18rem' }} className='card'>
                        <Card.Img variant="top" src={service} alt="service certificate" className='award' />
                        <Card.Body>
                            <Card.Title className='title'>Special Congressional Recognition</Card.Title>
                            <Card.Text>
                                Fred Fischer - April 30, 2009<br />
                                Member of Congress <br /><br />
                            <i>"Presented to Fred Fischer in recognition of outstanding and invaluable service to the community." </i>
                            </Card.Text>
                        </Card.Body>
                    </div>
                    </div>
            </div>
            

            <div className="proclamation">
                        <img src={proclamation} alt="Avatar" className="image" />
                        <div class="middle">
                            <div class="text">Fred's Proclamation - Awarded April 30, 2009</div>
                        </div>
            </div>

            <div className='endorsement'>
            "With the Postal Service being attacked on all fronts, from Washington to the local level, the 
            Staten Island APWU Local needs someone that shows the leadership, knowledge and experience to 
            handle the challenges facing the membership ahead. I know Fred Fischer is the person for such 
            job. That is why I endorse Fred Fischer to continue his role as President of local 231. As a 
            former clerk steward and Maintenance Craft Director of 18 years, I served under Fred Fischer 
            for 12 years and can attest that Fred Fischer has the knowledge, experience and leadership 
            the other candidate lacks to continue as President of Local 231. Vote for Fred Fischer in 
            this election year"
            -Bruce Marshall

            </div>

            <hr class="solid"></hr>

            <div id='vp'>
                <h3 className='title'>IAN FISHER, VICE PRESIDENT (LOCAL 231)</h3>
                        <div>
                            <hr class="solid2"></hr>
                            <img className='ian' src={ian} alt='Ian Fisher'></img>
                            <br /><br />
                            <div className='body'>
                            <p>
                                "I have been with the postal service for several years. I've found that you can make a difference in the
                                way you're viewed by customers and co-workers. Hard works is nothing new to postal workers, and as the Union Vice President, 
                                I would first listen to what my co-worker's problems are and make the very best effort to correct and solve
                                the problem permanently the first time. 
                                <b> There are no big I's or little you's</b>. We are all postal workers equally important. 
                                Given the opportunity, I will fight for postal workers and the rights that they deserve and work so hard for.
                                <p>Thank you for your vote and consideration." -Ian Fisher</p>
                                
                            </p>

                            <p className='bullets'>
                                Ian Fisher has shown a genuine interest in the union and has attended most meetings for years now. His opponent, Gerry
                                Ghiraldi, has been to maybe <i>one</i> meeting in the last <i>six</i> years. 
                                <br />
                                <br />
                                Gerry clearly has no interest.
                                Ian Fisher is slowly but surely moving his way up the clerk seniority list, however, he still many years until
                                he retires from the USPS. His opponent, Gerry Ghiraldi, has told most of us he will be retiring in 9 or 10 months. There terms
                                of office are for 3 years! Sure, he will tell you he will stick around and pay his full dues as a retiree to be an officer. Do you
                                know of <i>any</i> retiree, board member or not, who still pays full dues? Gerry will tell you he will be the exception.
                            </p>
                            </div>
                        </div>
            </div>


            

            <hr class="solid"></hr>

            <div id='arbitration'>
                <h3 className='title'>GHIRALDI SETTLEMENT</h3>
                <hr class="solid2"></hr>
                <div className='body'>
                <p>On January 12, 2010, then-President Gerry Ghiraldi signed a settlement for grievance 
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
                </div>
                <img className='arbitration' src={arbitration} alt='Grievance Settlement'></img>
                <br /><br />
                <p className='body'><b>The settlement that Gerald Ghiraldi willingly signed for grievance ending in 6097 was for personal gain. 
                    With this settlement, it is clear that Gerald Ghiraldi does not hesitate to betray members of our Union
                    for his own self-interest. </b>
                    On top of the selfish settlement Gerald Ghiraldi signed, proof of the arbitration that went on in 2011 is provided below.
                    <br />
                    <b>Click <Link style={{color: 'white'}} to="/pdf" target='_blank'>here</Link> for the full documentation.</b>
                </p>
                
                <br />
                <div id='panel'>
                    <h3 className='title'>ARBITRATION PANEL</h3>
                    <hr class="solid2"></hr>
                    <div className='panelPoints'>
                        <p>Some of the most notable points to take away from the Arbitration Panel include but are not limited to:</p>
                        <p className='numbers'>1. Page 6 of arbitration decision ending in 6097, line 7, the advocate for USPS states that the
                        newly elected Local President (Gerald) signed the settlement and that it is what it is.</p>
                        <p className='numbers'>2. Page 7 line 12, The USPS advocate further notes that the newly elected President (Gerald)
                        secured other settlements and the USPS advocate testified that is was the Local Union
                        President (Gerald) who approached her <b>to get his friend back to work who has been removed.</b></p>
                        <p className='numbers'>3. Page 7, line 18, The USPS advocate states the APWU advocate says these grievances are worth
                        a lot of money and the newly elected <b>President (Gerald) did not have the authority</b> to resolve
                        this grievance</p>
                        <p className='numbers'>4. Page 8 line 1, The USPS advocate notes at least 1, possibly 2 employees were bought back
                        from removals by the settlement.</p>
                        <p className='numbers'>5. Page 9, line 9, the APWU advocate states an <b>improper and unauthorized</b> settlement was
                        entered into by the newly elected President (Gerald)</p>
                        <p className='numbers'>6. Page 16, line 12, The witness (Gerald) noted that paragraph 3 of the January 12 2010 settlement
                        that he entered into provided that the union would agree to withdraw their most recent
                        grievance ending in 9473 Dated December 2009 in view of the fact the non-compliance issue
                        has been resolved.</p>
                        <p className='numbers'>7. Page 17, line 9, The USPS advocate approached him (Gerald) and said they had 40 to 50 more
                        grievances to get rid of.</p>
                        <p className='numbers'>8. Page 17, line 14, The witness (Gerald) testified they agreed to meet on January 12, 2010 and on
                        that date everything on the settlement was negotiated typed and signed.</p>
                        <p className='numbers'>9. Page 19, line 1, He (Gerald) testified that Maintenance Craft National Business Agent Rick Logan
                        called him and was <b>not pleased with what he did</b>. The witness (Gerald) testified that the
                        Postmaster gave him an employee back who had been removed.</p>
                        <p className='numbers'>10. Page 19, line 13, The witness (Gerald) testified that on January 12, 2010 the USPS advocate
                        asked what he wanted and raised the issue of Brescia who was removed.</p>
                        <p className='numbers'>11. Page 23, line 1, The USPS witness testified that Former President Fischer had put in a non-
                        compliance and that paragraph 3 of Gerry's January 12 settlement resolved the non-compliance grievance.</p>
                        <p className='numbers'>12. Page 23, line 18, the USPS advocate testified that the new Local President (Gerald) told her that
                        MVS business agent LaCapria yelled at him (Gerald) for an hour and LaCapria said he (Gerald)
                        got bamboozled.</p>
                        <p className='numbers'>13. Page 31, line 8, the newly elected <b>President (Gerald) was clearly over his head and out of
                        his league.</b></p>
                        <p className='numbers'>14. Page 33, line 5 The Arbitrator refers to Gerald as a "schlep".</p>
                        <p className='numbers'>15. Page 35, line 5, The Arbitrator notes that at the hearing before him, the union additionally
                        sought forty (40) hours of pay for each position provided pursuant to the April 16, 2008 pre-arb settlement. This monetary remedy sought by the union, conspicuously left out of the January
                        12, 2010 imposed settlement, is rejected herein.</p>
                        <Link to="/pdf" target='_blank'><button> View the entire Arbitration Panel</button></Link>
                    </div>
                    
                </div>

            </div>

            <img src={campaignGif} className='gif' alt='campaign gif'></img>


    
    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

        </div>
    )
}

export default Home
