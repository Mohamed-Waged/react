import React, { useState } from 'react';
import "./Mentor.css";
import {  Card, Container, Navbar } from 'react-bootstrap';
import { FaExpeditedssl, FaSearch, FaStar, FaUserCircle } from 'react-icons/fa';
import users from '../../users';

const Mentor = () => {
    const [filter , setFilter] = useState(users);
    const filterProduct = (cat ) =>{
        const updateList = users.filter((user)=>user.rate === cat );
        setFilter(updateList);
    };
    const ShowProducts = ()=>{
        return(
            <>
                {filter.map((e)=>{
                    return(
                        <>
                            <div className="col-md-6 col-lg-4" key={e.id}>
                                <Card className='border-0 m-auto' style={{ width: '18rem' }}>
                                    <div className='position-relative'>
                                        <Card.Img variant="top" src={e.image} />
                                        <div className='star position-absolute left-0 bottom-0 ms-2 mb-2 rounded bg-light p-1' >
                                            <FaStar />
                                            <span className='mx-1'>{e.rate}</span>
                                            <span>( {e.count} views )</span>
                                        </div>
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{e.name}</Card.Title>
                                        <Card.Text>{e.title}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </>
                    )
                    })}
            </>
        )
    };
    return (
        <>
            <div className='head row justify-content-center py-5'>
                <div className="col-12 col-md-3 my-sm-2 my-md-0 ">
                    <p className="p-3 p-md-0"><FaSearch className='me-2'/><input type="text" placeholder='Ui Ux desgin' /></p>
                </div>
                <div className="col-12 col-md-3 my-sm-2 my-md-0">
                <p className="p-3 p-md-0"><FaUserCircle className='me-2'/><input type="text" placeholder='Mentor' /></p>
                </div>
                <div className="col-12 col-md-3 my-sm-2 my-md-0">
                <p className="p-3 p-md-0"><FaExpeditedssl className='me-2'/><input type="text" placeholder='Experience' /></p>
                </div>
            </div>
            <div className='container-fluid row d-flex my-5'>
                <div className="col-lg-3 ">
                    <Navbar className='py-3 shadow-sm' bg="light" expand="lg">
                        <Container>
                            <h2 className=" navbar-brand d-md-block d-lg-none text-black " id="fil1">filters</h2>
                            <Navbar.Toggle className='border-0' aria-controls="basic-navbar-nav">
                                <span className="navbar-toggler-icon">
                                    <div className="parent5  d-md-block d-sm-block"id="parent5">
                                    <div className="child1"></div>
                                    <div className="child2"></div>
                                    <div className="child3"></div>
                                    </div>
                                </span>
                            </Navbar.Toggle>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <div className="row px-3">
                                    <div className="d-flex justify-content-between">
                                        <h2 className="text-black d-none d-lg-block d-md-none " id="fil">filters</h2>
                                        <p className="mt-2 d-none d-lg-block" id="cle">Clear All</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="ava text-start fw-bold mt-lg-5">Rating</p>
                                    </div> 
                                    <div className="d-flex justify-content-between">
                                        <span className="ava text-start">Five Stars</span>
                                        <input type="checkbox" className="me-4 fs-h3" id="che" onChange={()=>filterProduct(5)} />
                                    </div> 
                                    <div className="d-flex justify-content-between">
                                        <span className="ava text-start">Four Stars</span>
                                        <input type="checkbox" className="me-4 fs-h3" id="che" onChange={()=>filterProduct(4)} />
                                    </div> 
                                    <div className="d-flex justify-content-between">
                                        <span className="ava text-start">Three Stars</span>
                                        <input type="checkbox" className="me-4 fs-h3" id="che" onChange={()=>filterProduct(3)}/>
                                    </div> 
                                    <div className="d-flex justify-content-between">
                                        <span className="ava text-start">Two Stars</span>
                                        <input type="checkbox" className="me-4 fs-h3" id="che" onChange={()=>filterProduct(2)}/>
                                    </div> 
                                    <div className="d-flex justify-content-between">
                                        <span className="ava text-start">One Stars</span>
                                        <input type="checkbox" className="me-4 fs-h3" id="che" onChange={()=>filterProduct(1)}/>
                                    </div> 
                                    <div className="d-flex justify-content-between">
                                        <span className="ava text-start">All</span>
                                        <input type="checkbox" className="me-4 fs-h3" id="che" onChange={()=>setFilter(users)}/>
                                    </div> 
                                    <h3 className="text-black mt-lg-5" id="loc" >Location</h3>
                                    <select className="form-select bg-primary-subtle border-warning-subtle" id="sel" aria-label="Default select example" onChange={(e)=>filterProduct(e.target.value)}>
                                        <option value="none" selected disabled hidden>Select Location </option>
                                        <option value ="cairo">Cairo</option>
                                        <option value="alex">Alex</option>
                                    </select>
                                </div>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <div className="container row d-flex my-3 col-lg-9 bg-transparent">
                    {<ShowProducts />}
                </div>
            </div>
        </>
    )
}

export default Mentor;