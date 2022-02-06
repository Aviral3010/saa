import React from 'react'
import '../../index.css';


export default function Signup() {

    function namech() { }
    function validateDOB() { }
    function ValidateEmail() { }
    function ValidateAddress() { }
    function ValidMobile() { }
    function validPas() { }
    function validConfirmPass() { }
    function conf() { }
    return (


        <div className="register ">
            <h2 className="active">
                Registration form
            </h2>
            <form method="post" action="/signup" id="ragistration">
                <span>name</span>
                <input type="text" name="usname" className="in" onBlur={namech} required />
                <span className="mass"></span>
                <br />
                <br />
                <span>date of birth</span>
                <input type="date" name="dob" className="in" onBlur={validateDOB} required />
                <span className="mass"></span>
                <br /><br />
                <span>email</span>
                <input type="text" name="email" className="in" required onBlur={ValidateEmail} />
                <span id="email" className="mass"></span>
                <br />
                <br />

                <span>address</span>
                <input type="text" name="address" className="in" required onBlur={ValidateAddress} />
                <span id="address" className="mass"></span>
                <br /><br />

                <span>mobile number</span>
                <input type="text" name="mobile" className="in" required onBlur={ValidMobile} />
                <span id="mobi" className="mass"></span>
                <br /><br />

                <span>gender</span>
                <br />
                <input type="radio" name="gender" id="gender" value="male" />
                <span>male</span>
                <br />
                <input type="radio" name="gender" id="gender" value="female" />
                <span>female</span>
                <br />
                <input type="radio" name="gender" id="gender" value="other" checked />
                <span>other</span>
                <br />
                <span id="gen" className="mass"></span>
                <br />

                <span>create password</span>
                <input type="password" name="password" className="in" required onBlur={validPas} />
                <span id="pass" className="mass"></span>

                <br />
                <br />

                <span>confirm password</span>
                <input type="password" name="password_confirm" className="in" required onBlur={validConfirmPass} />
                <span id="passcon" className="mass"></span>
                <br /><br />

                <input type="checkbox" name="agree" id="ok" required value="ok" />
                <span>Agree to terms and conditions</span>



                <br />
                <span id="agree" className="mass"></span>
                <br />


                <button className="btn" onclick={conf}>Submit</button>
                <button type="reset" className="btn">Reset</button>







            </form>
        </div>

    )
}
