import React from 'react';
import './Mentoring.css';
import logo from '../../asset/favicon-3.png'
import {  Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaPlusSquare, FaStamp , FaLocationArrow, FaGlassWhiskey, FaDollarSign, FaRegClock} from 'react-icons/fa';

const Mentoring = () => {
    const obj = {
        name : "Belal Shwani" ,
        desc :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur molestias, voluptatibus eos eveniet mollitia omnis. Odit aliquid sit quo ad voluptas sum dolorsit amet consectetur adipisicing elit. Consequuntur molestias,voluptatibus eos eveniet mollitia omnis. Odit aliquid sit quo ad voluptas quasi quasi reprehenderit sequi. Nisi ex culpa minus qui labore",
        cer :"Awarded",
        location : "Remote",
        hire : "yes",
        paid : "200sdg/ H",
        duration : "3 month ",
        firstresponce : "Write software application and programs for backend/frontendpurposes.",
        secresponse : "Analyse programs and apps to improve thier futures and functionalities.",
        thirresponse : "Test & debug programs and any reported bugs.",
        forresponse : "Collaborate with thr tech team to improve the performance, efficiency, andscalability of our tools.",
        firrequire : "knowledge of APIs and webservices." ,
        secrequire : "knowledge of relational Databases (MySQL, PostgreSQL, SQL server ....) and SQL language." ,
        thirrequire : "knowledge of NoSQL databases is a plus." ,
        firexpected : "An opportunity to work with remarkably talented colleagues.",
        secexpected : "vast growth potential in every aspect.",
        thirexpected : "15% target bonus with further upside.",
        forxpected : "Employee share scheme participation.",
        fivexpected : "International relation support.",
        sixexpected : "Opportunity to be embedded within a commercial team for those strong with strong commercial interset.",
        about : "About Belal Shwani " ,
        job : "Software Engineer",
        company : "EiT",
        phonenumber : "099547312",
        email : "Balqeessabir@gmail.com",
        ex1 : "Software Engineering",
        ex2 : "Front End Developer",
        ex3 : "UI/UX Design",
        person : "Nora Ali",
        personDesc : "dolor in reprehenderit in voluptate velit esse cillum dolre eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat",
    };
    return (
        <>
            <Navbar className='d-md-none px-3' expand="lg">
                    <NavLink className='navbar-brand fs-4 fw-bold' to="/"><img src={logo} alt="Logo" /></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto fs-5">
                    <ul class="navbar-nav">
                        <li className="nav-item p-1 fw-bold">Edit Mentoring opportunity</li>  
                        <li className="nav-item p-1 fw-bold">Setting</li> 
                        <li className="nav-item p-1 fw-bold">Term and privacy</li>
                        <li className="nav-item p-1 fw-bold">Post a new opportunity <FaPlusSquare /> </li>                    
                    </ul>
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
            <div className='container-fluid row d-flex bg-transparent '>
                <div class="list mt-5 d-none d-lg-block col-lg-3" >
                    <ul className='navbar-nav mt-5 ms-5'>
                        <li className="nav-item p-1 fw-bold">Edit Mentoring opportunity</li>  
                        <li className="nav-item p-1 fw-bold">Setting</li> 
                        <li className="nav-item p-1 fw-bold">Term and privacy</li>
                        <li className="nav-item p-1 fw-bold mt-3">Post a new opportunity <FaPlusSquare /> </li>                    
                    </ul>
                </div>
                <div className="container my-3 col-lg-9">
                    <div className="row">
                        <h4 className="title p-2 col-sm-12 col-md-6 col-lg-5 ms-auto me-md-1 text-center text-md-end bg-danger text-light" id="p1">
                            Closed Mentoring opportunity
                        </h4>
                    </div>
                    <div className="row p-3 sec-row">
                        <h4>Website UI design implementation</h4>
                        <h4 >Get mentored by :  <span id="belal" className='fw-bold' >{obj.name}</span> </h4> 
                        <p className="desc my-3">{obj.desc}</p>
                    </div>
                    <div className="row d-flex gap-2">
                        <div id="div1" className=" col-lg-3 col-5 d-flex align-items-center my-md-2">
                            <div><FaStamp className='fs-4 me-2'/></div>
                            <div className="align-self-center"><span>Certificate :<span id="cetificate"> {obj.cer} </span></span></div>
                        </div>
                        <div id="div1" className=" col-lg-3 col-5 d-flex align-items-center my-md-2 ">
                            <div ><FaLocationArrow className='fs-4 me-2'/></div>
                            <div className="align-self-center"><span>Location :<span id="location"> {obj.location}</span></span></div>
                        </div>
                        <div id="div1" className=" col-lg-3 col-5 d-flex align-items-center my-md-2 ">
                            <div ><FaGlassWhiskey className='fs-4 me-2'/></div>
                            <div className="align-self-center"><span>Might get hired : <span id="hired"> {obj.hire} </span></span></div>
                        </div>
                        <div id="div1" className=" col-lg-3 col-5 d-flex align-items-center my-md-2 ">
                            <div><FaDollarSign className='fs-4 me-2'/></div>
                            <div className="align-self-center"><span>Paid :<span id="paid">{obj.paid}</span></span></div>
                        </div>
                        <div id="div1" className=" col-lg-3 col-5 d-flex align-items-center my-md-2 ">
                            <div><FaRegClock className='fs-4 me-2'/></div>
                            <div className="align-self-center"><span>Duration :<span id="duration"> {obj.duration}</span></span></div>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <h3 className="tit p-3">Responsibilities</h3>
                        <div className="list-1">
                            <ul>
                                <li id="firstresponce"> {obj.firstresponce}</li>
                                <li id="secresponse"> {obj.secresponse}</li>
                                <li id="thirresponse"> {obj.thirresponse}</li>
                                <li id="forresponse"> {obj.forresponse}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <h3 className="tit p-3">Requirments</h3>
                        <div className="list-1">
                            <ul>
                                <li id="firrequire"> {obj.firrequire}</li>
                                <li id="secrequire"> {obj.secrequire}</li>
                                <li id="thirrequire"> {obj.thirrequire}</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row my-3'>
                        <h3 className="tit p-3">Expected outcome</h3>
                        <div className="list-1">
                            <ul>
                                <li id="firexpected"> {obj.firexpected}</li>
                                <li id="secexpected"> {obj.secexpected}</li>
                                <li id="thirexpected"> {obj.thirexpected}</li>
                                <li id="forxpected"> {obj.forxpected}</li>
                                <li id="fivexpected"> {obj.fivexpected}</li>
                                <li id="sixexpected"> {obj.secexpected}</li>
                            </ul>
                        </div>
                    </div>     
                    <div id="ABOUTPERSON">
                        <h3 className="p-3 tit d-none d-md-block" id="about">{obj.about}</h3>
                    </div>
                    <div className="profile container p-3 bg-white" >
                        <div className='row'>
                            <div id="name" className='col-md-4'>
                                <p className="parag para-namee">Name </p><p  id="nam"> {obj.name}</p> 
                                <p className="parag">Job title </p><p id="job"> {obj.job}</p>
                                <p className="parag">Company </p><p id="company"> {obj.company}</p>  
                            </div>
                            <div id="phonenom" className='col-md-4'>
                                <p className="parag">Phone number </p><p id="phonenumber">{obj.phonenumber}</p>
                                <p className="parag">Email </p><p id="email">{obj.email}</p>
                            </div>
                            <div id="expertise" className='col-md-4'>
                                <p className="parag">expertise </p>
                                <ul>
                                    <li id="firexpertise">{obj.ex1}</li>
                                    <li className='my-1' id="secexpertise">{obj.ex2}</li>
                                    <li id="thirexpertise">{obj.ex3}</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="info d-md-flex flex-md-row-reverse align-items-center">
                                <div id="img" className='col-md-4 col-12 d-flex flex-column justify-content-center align-items-center '>
                                        <div id="profileimg"></div>
                                        <div id="viewprofile"><button >View profile</button></div>
                                </div >
                                <div id="ABOUTPER">
                                    <h3 className="abuotYou tit d-md-none" id="abuotyou" >About Belal Shwani</h3>
                                </div>
                                <div id="aboutPara" className='col-md-8 col-12'>
                                    <p id="descprofile" className="loremm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate soluta, ullam tempore error quidem sit mollitia,vero ratione corporis in ipsum atque, harum laboriosam veritatis sapiente ab nihil debitis.</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="part-two container p-5 my-5">
                        <div className="person-1 d-lg-flex">
                            <p id="iconPersonOne" className='me-2 col-sm-12 col-md-2'></p>
                            <div className='col-sm-12 col-md-10'>
                                <h3 id="perone">{obj.person}</h3>
                                <p id="descforperone">{obj.personDesc}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="person-1 d-lg-flex ms-5">
                            <p id="iconPersonOne" className='me-2 col-sm-12 col-md-2'></p>
                            <div className='col-sm-12 col-md-10'>
                                <h3 id="perone">{obj.person}</h3>
                                <p id="descforperone">{obj.personDesc}</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="person-1 d-lg-flex">
                            <p id="iconPersonOne" className='me-2 col-sm-12 col-md-2'></p>
                            <div className='col-sm-12 col-md-10'>
                                <h3 id="perone">{obj.person}</h3>
                                <p id="descforperone">{obj.personDesc}</p>
                            </div>
                        </div>
                    </div> 
                    <form>
                        <div className="form-group">
                            <input class="form-control p-4"  type="text" placeholder="Leave your comment here" />
                        </div>
                        <div className="row my-3 pb-3">
                            <button type='submit' className="butn col-sm-12 col-md-2 col-lg-1 ms-auto me-lg-4">send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Mentoring;