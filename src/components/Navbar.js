import 'boxicons';
import '../styles/navbar.css';
import home from '../icons/home.svg';
import Orangebox from './orangebox';


function Navbar() {
    const navLists = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
            </svg>,
            name: "Home"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                    <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                    </svg>,
            name: "My Network"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>,
            name: "Jobs"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
          </svg>,
            name: "Messaging"
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
            <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
          </svg>,
            name: "Notifications"
        },
    ]
    return (
        <div className="nav-container">
            {/* {first container } */}
            <div className="nav-container-left">
                <span className='logo-box'>
                    <box-icon type="logo" name="linkedin-square" color="#0a66c2" size="lg"></box-icon>
                </span>
                <span className="nav-search">
                    <box-icon name="search" size="16px" animation="tada"></box-icon>
                    <input type="search" placeholder="Search"/>
                </span>
            </div>

            {/* {middle container } */}

            <div className="nav-container-center">
                <nav className='navbar-items'>
                {
                   navLists.map((eachNavlist, index) => (
                        <a href="" key={index} className='navbar-items-aa'>
                            <div className='navbar-items-a'>{eachNavlist.icon}</div>
                            <div>{eachNavlist.name}</div>
                        </a>
                   ))   
                }
                <a>
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png" 
                    alt='my image' 
                    width={"24px"} 
                    height={"24px"}
                    style={{ background: "navajowhite", borderRadius: "50%" }}
                    />
                    <div style={{ justifyContent: "center" }}>Me</div>
                </a>
                </nav>
            </div>

            {/* last container */}

            <div className="nav-container-right">
                    <div className="for-business-container">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                        </svg>
                        <div className='for-business-text'>
                            For business
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" style={{ fill: "rgba(0, 0, 0, .6)",transform:";msFilter:;"}}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                        </div>
                    </div>
                    <div className='prenium'>
                        <Orangebox />
                        <span className=''>Try for NGN0: <br /> Prenium</span>
                    </div>
            </div>
        </div>
    )
};

export default Navbar;