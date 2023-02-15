import React from "react";
import axios from "axios";
import './style.css';
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
// import { Case, CaseElse, Switch } from "react-context-switch";
const Viewblog=()=>{
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios
        .get("http://localhost/ajay/AdminPanel/getBlog.php")
        .then((response) => {
          console.log(response.data);
          setdata(response.data);
        });
       
      });       
    return(
        <>
        <Sidebar/>
        <Header/>
         <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Blogs</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Blogs</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                            <div className="col-12">
                        <div className="row">
                                <div className="card">
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-hover" width={"100%"} height={"100%"}>
                                            <thead>
                                                <tr>
                                                    <th>ID</th>
                                                    <th>TITLE</th>
                                                    <th>DESCRIPTION</th>
                                                    {/* <th>STATUS</th> */}
                                                    {/* <th>FRAME</th> */}
                                                    {/* <th colSpan={3}>EFFECTS</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* <tr>
                                                    <td colSpan={5}></td>
                                                    <td className="d-flex">
                                                        <p className="fw-bolder border p-2 m-2">
                                                            Approve
                                                            <button type="submit" className="btn btn-primary" >Submit</button>
                                                        </p>
                                                        <p className="fw-bolder border p-2 m-2">
                                                            Delete
                                                            <button type="submit" className="btn btn-primary">Submit</button>
                                                        </p>
                                                        <p className="fw-bolder border p-2 m-2">Edit</p>
                                                    </td>
                                                </tr> */}
                                                {
                                                    data.map((i, j) =>
                                                        <tr>
                                                            <td>{i.id}</td>
                                                            <td>{i.title}</td>
                                                            <td>{i.description.slice(0, 200)}</td>
                                                                {/* <td>
                                                                    <Switch value={i.status}>
                                                                        <Case when={(val) => val.includes(1)}>
                                                                            <h1 className="fs-6">Visible</h1>
                                                                        </Case>
                                                                        <CaseElse>
                                                                            <h1 className="fs-6">Unseen</h1>
                                                                        </CaseElse>
                                                                    </Switch>
                                                                </td> */}
                                                            <td>
                                                                <div className="image1">
                                                                    <img src={i.image}></img>
                                                                </div>
                                                            </td>
                                                            {/* <td className="text-center d-flex justify-content-between border h-100">
                                                                <div class="custom-control custom-switch align-self-center mx-auto">
                                                                    <input type="checkbox" class="custom-control-input" id={"customSwitches" + j + "a"} />
                                                                    <label class="custom-control-label" for={"customSwitches" + j + "a"}></label>
                                                                </div>
                                                                <div class="custom-control custom-switch align-self-center mx-auto">
                                                                    <input type="checkbox" class="custom-control-input" id={"customSwitches" + j} />
                                                                    <label class="custom-control-label" for={"customSwitches" + j}></label>
                                                                </div>
                                                                <a className=" text-decoration-none btn btn-dark align-self-center ">Link</a>
                                                            </td> */}
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </>
    )
}
export default Viewblog;