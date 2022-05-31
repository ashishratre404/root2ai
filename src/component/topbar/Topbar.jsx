import './topbar.css'

export default function Topbar() {
  return (
    <>
        <div className="top">
            <div className="left">
                <ul className="list">
                    <li className="listItem one"> <i className="fa-solid fa-phone"></i> +91 1234567890 / <i className="fa-brands fa-whatsapp"></i> +91 9876543210</li>
                    <li className="listItem"><i className="fa-solid fa-envelope"></i> <span>Email:</span> xyz@gamil.com / abc@gmail.com</li>
                </ul>
            </div>
            <div className="right">
                <ul className="list">
                    <li className="listItem"><i className="fa-solid fa-question mark"></i> Have any question?</li>
                    <li className="listItem"><i className="fa-brands fa-facebook-f"></i></li>
                    <li className="listItem"><i className="fa-brands fa-instagram"></i></li>
                    <li className="listItem"><i className="fa-brands fa-linkedin-in"></i></li>
                   
                </ul>
            </div>
        </div>
        <div className="center">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
        </div>
        <div className="bottom">
            <div className="menu">
                <div className="homeIcon"><i className="fa-solid fa-house-chimney"></i></div>
                <div className="homeMenu"><p>Menu</p></div>
                <div className="homeMenu1"><p>Menu 1</p></div>
                <div className="homeMenu2"><p>Menu 2</p></div>
                <div className="homeMenu3"><p>Menu 3</p></div>
                <div className="homeMenu4"><p>Menu 4</p></div>
                <div className="homeMenu5"><p>Menu 5</p></div>
                <div className="homeMenu6"><p>Menu 6</p></div>
            </div>
        </div>
    </>
  )
}
