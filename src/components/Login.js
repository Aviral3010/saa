import React from 'react';
import '../App2.css';
import { Link } from 'react-router-dom'
export default function Login() {
    return (

        <div className="login my-3">
            <h2 className="active"> sign in </h2>


            <form method="post" action="/login">



                <input type="text" className="text" name="username" />
                <span>username</span>

                <br />

                <br />

                <input type="password" className="text" name="password" />
                <span>password</span>
                <br />




                <button className="signin" type="submit">
                    Sign In
                </button>


                <Link to="Signup" className='my-4'>Register</Link><br /><br /><br />

            </form>
            



        </div>
    );
}