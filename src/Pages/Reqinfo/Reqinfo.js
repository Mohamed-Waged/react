import React from 'react';
import './Reqinfo.css';

const Reqinfo = () => {
    return ( 
        <div className='d-flex'>
            <div className='d-flex container-flued'>
                <div className='p-5 d-none d-lg-block'>
                    <div className='d-flex justify-content-between align-items-center mb-4'>
                        <h2>Filters</h2>
                        <h6 className='mt-2'>Clear All</h6>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <label className="form-check-label">Paid</label>
                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"  />
                    </div>
                    <div className="d-flex justify-content-between">
                        <label className="form-check-label">looking for a job</label>
                        <input className="form-check-input" type="checkbox" id="check1" name="option1" value="something"  />
                    </div>
                    <h6 className="mt-4 fw-bold mb-2">Location</h6>
                    <select className="form-select">
                        <option selected>Cairo</option>
                        <option value="1">Benha</option>
                        <option value="2">Tanta</option>
                        <option value="3">Alex</option>
                    </select>
                    <h6 className="mt-5 fw-bold">Duration</h6>
                    <p className='para d-inline-block mt-4 text-center rounded fs-6 p-1'>Weak</p>
                    <p className='para d-inline-block mt-4 text-center ms-5 rounded fs-6 p-1'>Month</p>
                    <div className="middle mt-2 position-relative">
                        <div className="multi-range-slider">
                            <input type="range" id="input-left" min="0" max="100" value="25" />
                            <input type="range" id="input-right" min="0" max="100" value="75" />
                            <div className="slider">
                            <div className="track"></div>
                            <div className="range"></div>
                            <div className="thumb left"></div>
                            <div className="thumb right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inside'>
                <div className="row">
                    <div className="fullsection4">
                        <div className="section4">
                            <div className="row">
                                <div className="col-md-4">
                                        <h5 className="green">Front end development</h5>
                                        <p className="hidden mb-3"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                        <p className="opposite"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                </div>
                                <div className="col-md-8">
                                    <button type="button" className="yellowbtn yellowbtn1">Mentor</button>
                                    <button type="button" className="yellowbtn yellowbtn2 hidden">View</button>
                                    <button type="button" className="yellowbtn yellowbtn2 opposite2">View details</button>
                            </div>
                            </div>
                            <div className="row">
                                <p>i'm a recent computer science graduate from khartoum university, interested in front end<br/> development and UI/UX <br/>looking for a mentor to guide me through becoming a proficional front end developer</p> <br/>
                                <span className="read">...Read more</span>
                            </div>
                            <div className="row d-flex ">
                                <div className="duration d-flex " style={{fontSize: "14 px" ,marginBottom: "-15 px"}}>
                                    <p className='me-5'><span style={{fontWeight: "600"}} className="green">Duration :</span>  2 month </p>
                                    <p><span style={{fontWeight: "600" , marginLeft: "35 px"}} className="green"> Paid :</span> yes</p>
                                </div>
                            </div>
                            <div className="job d-flex" style={{fontSize: "14 px"}}>
                                <p className='me-5'><span style={{fontWeight: "600"}} className="green">Looking for a job :</span> yes</p>
                                <p><span style={{fontWeight: "600" , marginLeft: "15 px"}} className="green">Experince :</span> none</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="fullsection4">
                        <div className="section4">
                            <div className="row">
                                <div className="col-md-4">
                                        <h5 className="green">Front end development</h5>
                                        <p style={{marginBottom: "6 px"}} className="hidden"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                        <p className="opposite"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                </div>
                                <div className="col-md-8">
                                    <button type="button" className=" yellowbtn yellowbtn1">Mentor</button>
                                    <button type="button" className=" yellowbtn yellowbtn2 hidden">View</button>
                                    <button type="button" className=" yellowbtn yellowbtn2 opposite2">View details</button>
                            </div>
                            </div>
                            <div className="row">
                                <p>i'm a recent computer science graduate from khartoum university, interested in front end<br/> development and UI/UX <br/>looking for a mentor to guide me through becoming a proficional front end developer</p> <br/>
                                <span className="read">...Read more</span>
                            </div>
                            <div className="row d-flex ">
                                <div className="duration d-flex " style={{fontSize: "14 px" ,marginBottom: "-15 px"}}>
                                    <p className='me-5'><span style={{fontWeight: "600"}} className="green">Duration :</span>  2 month </p>
                                    <p><span style={{fontWeight: "600" , marginLeft: "35 px"}} className="green"> Paid :</span> yes</p>
                                </div>
                            </div>
                            <div className="job d-flex" style={{fontSize: "14 px"}}>
                                <p className='me-5'><span style={{fontWeight: "600"}} className="green">Looking for a job :</span> yes</p>
                                <p><span style={{fontWeight: "600" , marginLeft: "15 px"}} className="green">Experince :</span> none</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="fullsection4">
                        <div className="section4">
                            <div className="row">
                                <div className="col-md-4">
                                        <h5 className="green">Front end development</h5>
                                        <p style={{marginBottom: "6 px"}} className="hidden"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                        <p className="opposite"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                </div>
                                <div className="col-md-8">
                                    <button type="button" className=" yellowbtn yellowbtn1">Mentor</button>
                                    <button type="button" className=" yellowbtn yellowbtn2 hidden">View</button>
                                    <button type="button" className=" yellowbtn yellowbtn2 opposite2">View details</button>
                            </div>
                            </div>
                            <div className="row">
                                <p>i'm a recent computer science graduate from khartoum university, interested in front end<br/> development and UI/UX <br/>looking for a mentor to guide me through becoming a proficional front end developer</p> <br/>
                                <span className="read">...Read more</span>
                            </div>
                            <div className="row d-flex ">
                                <div className="duration d-flex " style={{fontSize: "14 px" ,marginBottom: "-15 px"}}>
                                    <p className='me-5'><span style={{fontWeight: "600"}} className="green">Duration :</span>  2 month </p>
                                    <p><span style={{fontWeight: "600" , marginLeft: "35 px"}} className="green"> Paid :</span> yes</p>
                                </div>
                            </div>
                            <div className="job d-flex" style={{fontSize: "14 px"}}>
                                <p className='me-5'><span style={{fontWeight: "600"}} className="green">Looking for a job :</span> yes</p>
                                <p><span style={{fontWeight: "600" , marginLeft: "15 px"}} className="green">Experince :</span> none</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="fullsection4">
                        <div className="section4">
                            <div className="row">
                                <div className="col-md-4">
                                        <h5 className="green">Front end development</h5>
                                        <p style={{marginBottom: "6 px"}} className="hidden"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                        <p className="opposite"><span className='fw-bold'>Khadija Saif </span><span className="green">is looking for a mentor</span></p>
                                </div>
                                <div className="col-md-8">
                                    <button type="button" className=" yellowbtn yellowbtn1">Mentor</button>
                                    <button type="button" className=" yellowbtn yellowbtn2 hidden">View</button>
                                    <button type="button" className=" yellowbtn yellowbtn2 opposite2">View details</button>
                            </div>
                            </div>
                            <div className="row">
                                <p>i'm a recent computer science graduate from khartoum university, interested in front end<br/> development and UI/UX <br/>looking for a mentor to guide me through becoming a proficional front end developer</p> <br/>
                                <span className="read">...Read more</span>
                            </div>
                            <div className="row d-flex ">
                                <div className="duration d-flex " style={{fontSize: "14 px" ,marginBottom: "-15 px"}}>
                                    <p className='me-5'><span style={{fontWeight: "600"}} className="green">Duration :</span>  2 month </p>
                                    <p><span style={{fontWeight: "600" , marginLeft: "35 px"}} className="green"> Paid :</span> yes</p>
                                </div>
                            </div>
                            <div className="job d-flex" style={{fontSize: "14 px"}}>
                                <p className='me-5'><span style={{fontWeight: "600"}} className="green">Looking for a job :</span> yes</p>
                                <p><span style={{fontWeight: "600" , marginLeft: "15 px"}} className="green">Experince :</span> none</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reqinfo