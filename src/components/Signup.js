import React from 'react'
import '../App2.css';
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div class="register container">
            <h2 class="active">
                Registration form
            </h2>
            <br /><br />
            <form method="post" action="/signup" id="ragistration">
                <span>name</span>
                <input type="text" name="usname" class="in" onblur="namech()" required />
                <span class="mass"></span>
                <br />
                <br />
                <span>date of birth</span>
                <input type="date" name="dob" class="in" onblur="validateDOB()" required />
                <span class="mass"></span>
                <br /><br />
                <span>email</span>
                <input type="text" name="email" class="in" required onblur="ValidateEmail()" />
                <span id="email" class="mass"></span>
                <br />
                <br />

                <span>address</span>
                <input type="text" name="address" class="in" required onblur="ValidateAddress()" />
                <span id="address" class="mass"></span>
                <br /><br />

                <span>mobile number</span>
                <input type="text" name="mobile" class="in" required onblur="ValidMobile()" />
                <span id="mobi" class="mass"></span>
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
                <span id="gen" class="mass"></span>
                <br />

                <span>create password</span>
                <input type="password" name="password" class="in" required onblur="validPas()" />
                <span id="pass" class="mass"></span>

                <br />
                <br />

                <span>confirm password</span>
                <input type="password" name="password_confirm" class="in" required onblur="validConfirmPass()" />
                <span id="passcon" class="mass"></span>
                <br /><br />

                <input type="checkbox" name="agree" id="ok" required value="ok" />
                <span>Agree to terms and conditions</span>



                <br />
                <span id="agree" class="mass"></span>
                <br />


                <button class="btn" onclick="conf()">Submit</button>
                <button type="reset" class="btn">Reset</button>







            </form>
        </div>
    )
}
