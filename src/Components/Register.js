import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Register = () => {
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    function submit1(){
        
            axios.post('http://localhost/ajay/AdminPanel/register.php ',{email,password})
            .then(function (response) {
                console.log(response);
                // setId(response.data.id)
                // alert("ID == " + response.data.id)
        
                if (response) {
                    alert('Your data is currected...!')
                    // window.localStorage.setItem('id', response.data.id)
                    window.location.href = '/'
                }
                else {
                    alert('Please, Check your data...!')
                }
            })
            .catch(function (error) {
                console.log(error)
            })
            axios
            .get("http://localhost/ajay/AdminPanel/register.php")
            .then(function (response) {
              // handle success
              console.log(response);
            //   setdata(response.data);
            })
            .catch(function (error) {
              // handle error
              console.log(error);
            });
    }

    
  return (
    <>
      <body className="hold-transition register-page">
        <div className="register-box">
          <div className="register-logo">
            <a href="../../index2.html">
              <b>Admin</b>LTE
            </a>
          </div>

          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form method="" onsubmit={submit1}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeHolder="Full name"
                  ></input>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    // value={email}
                    onChange={(e)=>setemail(e.target.value)}
                    class="form-control"
                    placeHolder="Email"
                  ></input>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    // value={password}
                    onChange={(e)=>setpassword(e.target.value)}
                    class="form-control"
                    placeHolder="Password"
                  ></input>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    class="form-control"
                    placeHolder="Retype password"
                  ></input>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="terms"
                        value="agree"
                      ></input>
                      <label htmlFor="agreeTerms">
                        I agree to the <a href="#">terms</a>
                      </label>
                    </div>
                  </div>
                  {/* <!-- /.col --> */}
                  <div className="col-4">
                    <button type="submit" onClick={submit1} className="btn btn-primary btn-block">
                      Register
                    </button>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
              </form>

              <div className="social-auth-links text-center">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i>
                  Sign up using Google+
                </a>
              </div>

              <a href="/" className="text-center">
                I already have a membership
              </a>
            </div>
            {/* <!-- /.form-box --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
      </body>
    </>
  );
};
export default Register;
