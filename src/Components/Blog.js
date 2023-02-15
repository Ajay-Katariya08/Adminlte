import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Blog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [comment, setcomment] = useState("");


  function btn(i) {
    i.preventDefault();
    axios
      .post("http://localhost/ajay/AdminPanel/getBlog.php", {
        title: title,
        description: description,
        image: image,
      })
      .then(function (response) {
        console.log(response);
        setTitle(response);
        setDescription(response);
        setImage(response);
        if (title === "") {
          alert("Enter title Correctly");
          window.location.reload();
        } else if (description === "") {
          alert("Enter your description correctly");
          window.location.reload();
        } else if (image === "") {
          alert("Enter your image correctly");
          window.location.reload();
        } else if (title !== "" && description !== "" && image !== "") {
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <div className="wrapper">
        <Header />
        <Sidebar />
        {/* <table border="1">
                    <tr>
                        <td>name</td>
                    </tr>
                </table> */}
        <div className="content-wrapper">
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Add Blog</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <Link to="/Dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item active">Add Blog</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                {/* left column */}
                <div className="col-md-6">
                  {/* general form elements */}
                  <div className="card card-primary">
                    {/* /.card-header */}
                    {/* form start */}
                    <form method="post">
                      <div className="card-body">
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Blog Title"
                            onChange={(i) => setTitle(i.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Description
                          </label>
                          <textarea
                            rows={3}
                            cols={4}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Blog Description"
                            onChange={(i) => setDescription(i.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputFile">Image</label>
                          <div className="input-group">
                            <div className="custom-file">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="URL"
                                onChange={(i) => setImage(i.target.value)}
                                // type="text"
                                // className="custom-file-input"
                                // id="exampleInputFile"
                                // onChange={handleChange}
                              />
                              {/* <label
                                className="custom-file-label"
                                htmlFor="exampleInputFile"
                              >
                                Choose file
                              </label> */}
                            </div>
                            {/* <div className="input-group-append">
                              <span className="input-group-text">Upload</span>
                            </div> */}
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Comments
                          </label>
                          <textarea
                            rows={3}
                            cols={4}
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Write Comments"
                            onChange={(i) => setcomment(i.target.value)}
                          />
                        </div>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                          >
                            Check me out
                          </label>
                        </div>
                      </div>
                      {/* /.card-body */}
                      <div className="card-footer">
                        <button
                          type="submit"
                          onClick={btn}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* /.card */}
                  {/* general form elements */}

                  {/* /.card */}
                  {/* Input addon */}

                  {/* /.card */}
                  {/* /.card */}
                </div>
                {/*/.col (left) */}
                {/* right column */}
                <div className="col-md-6">
                  {/* Form Element sizes */}

                  {/* /.card */}
                  {/* /.card */}
                  {/* general form elements disabled */}

                  {/* /.card */}
                  {/* general form elements disabled */}

                  {/* /.card */}
                </div>
                {/*/.col (right) */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Blog;
