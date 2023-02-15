import React, { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar';
import { useState } from 'react';
import axios from 'axios';

function FormGeneral() {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [name,setname]=useState('');


    function submit1(){
        
        axios.post('http://localhost/ajay/AdminPanel/admin_data.php',{name,email,password})
        .then(function (response) {
            console.log(response);
            // setId(response.data.id)
            // alert("ID == " + response.data.id)
        })
        .catch(function (error) {
            console.log(error)
        }) 
}


    return (
        <>
            <div className="hold-transition sidebar-mini">
                <div className="wrapper">
                    {/* Navbar */}
                    <Header />
                    {/* /.navbar */}
                    {/* Main Sidebar Container */}
                    <Sidebar />
                    {/* Content Wrapper. Contains page content */}
                    <div className="content-wrapper">
                        {/* Content Header (Page header) */}
                        <section className="content-header">
                            <div className="container-fluid">
                                <div className="row mb-2">
                                    <div className="col-sm-6">
                                        <h1>General Form</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">General Form</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    {/* left column */}
                                    <div className="col-md-6">
                                        {/* general form elements */}
                                        <div className="card card-primary">
                                            <div className="card-header">
                                                <h3 className="card-title">Quick Example</h3>
                                            </div>
                                            {/* /.card-header */}
                                            {/* form start */}
                                            <form onSubmit={submit1}>
                                                <div className="card-body">
                                                <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Full Name</label>
                                                        <input type="text" className="form-control" onChange={(e)=>setname(e.target.value)} id="exampleInputEmail1" placeholder="Enter Name" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" onChange={(e)=>setemail(e.target.value)} id="exampleInputEmail1" placeholder="Enter email" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputPassword1">Password</label>
                                                        <input type="password" className="form-control" onChange={(e)=>setpassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputFile">File input</label>
                                                        <div className="input-group">
                                                                <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                                                            <div className="custom-file">
                                                                <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                            </div>
                                                            <div className="input-group-append">
                                                                <span className="input-group-text">Upload</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* /.content-wrapper */}
                    <Footer />
                    {/* Control Sidebar */}
                    <aside className="control-sidebar control-sidebar-dark">
                        {/* Control sidebar content goes here */}
                    </aside>
                    {/* /.control-sidebar */}
                </div>
            </div>
        </>
    )
}

export default FormGeneral
