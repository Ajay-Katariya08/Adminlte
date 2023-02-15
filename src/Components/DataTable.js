import React from 'react'
import  { useEffect } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import { useState } from 'react';
import axios from 'axios';

function DataTable() {
    const [data,setdata]=useState([]);

    useEffect((e)=>{
        axios
        .get("http://localhost/ajay/AdminPanel/admin_data.php")
        .then(function (response) {
          // handle success
          console.log(response.data);
          setdata(response.data);
        })
        .catch(function (error) {
            console.log(error)
        }) 
    },[])
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
                                        <h1>DataTables</h1>
                                    </div>
                                    <div className="col-sm-6">
                                        <ol className="breadcrumb float-sm-right">
                                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                                            <li className="breadcrumb-item active">DataTables</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>{/* /.container-fluid */}
                        </section>
                        {/* Main content */}
                        <section className="content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">DataTable with minimal features &amp; hover style</h3>
                                            </div>
                                            {/* /.card-header */}
                                            <div className="card-body">
                                                <table id="example2" className="table table-bordered table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Password</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </thead>
                                                 
                                                    {
                                                        data.map((i)=>{
                                                            return(
                                                                <tbody>
                                                                <tr>
                                                                    <td>{i.name}</td>
                                                                    <td>{i.email}
                                                                    </td>
                                                                    <td>{i.password}</td>
                                                                    <td> 4</td>
                                                                    <td>X</td>
                                                                </tr>
                                                            </tbody>
                                                            )
                                                        })
                                                    }
                                                    <tfoot>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>Email</th>
                                                            <th>Password</th>
                                                            <th>Engine version</th>
                                                            <th>CSS grade</th>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                        {/* /.card */}
                                    </div>
                                    {/* /.col */}
                                </div>
                                {/* /.row */}
                            </div>
                            {/* /.container-fluid */}
                        </section>
                        {/* /.content */}
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

export default DataTable;
