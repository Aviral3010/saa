import React ,{useContext} from 'react'
import userContext from '../../context/user/usercontext'


function Sidebar() {
    const a=useContext(userContext)
    return (
        <div>
            <div className="left">

                <div className="containers container-fluid">
                    <div className="profile-box">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="profile-pic" alt="" />

                        <h3>
                            
                        </h3>
                        <p>Developer At HCL, Lucknow</p>

                        <div className="social-media">
                            <img width="25px" height="25px"
                                src="https://www.edigitalagency.com.au/wp-content/uploads/new-instagram-logo-png-transparent.png"
                                alt="" />
                            <img width="25px" height="25px"
                                src="https://www.vhv.rs/dpng/d/492-4925781_telegram-free-download-and-circle-twitter-logo-png.png"
                                alt="" />
                            <img width="25px" height="25px"
                                src="data:image/jpeg;base64,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"
                                alt="" />
                        </div>
                        <a href="/logeout">
                            <button type="button">Logout</button></a>
                        <div className="profile-bottom">
                            <p>Learn more About Profile</p>
                            <a href="/pro">
                                <img src="https://www.genesisuniversity.education/wp-content/uploads/2018/04/GU-Down-Arrow-Transparent-PNG.png"
                                    alt="" /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
