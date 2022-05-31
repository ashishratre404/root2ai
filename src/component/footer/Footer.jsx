import "./footer.css";

export default function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footerTop">
                <div className="mail">
                  <p><span><i className="fa-solid fa-envelope"></i></span> xyz@gamil.com / abc@gmail.com</p>
                </div>
                <div className="call">
                  <p><span><i className="fa-solid fa-phone"></i></span> +91 1234567890 / <span> <i className="fa-brands fa-whatsapp"></i></span> +91 9876543210</p>
                </div>
                <div className="socials">
                  <p>
                    <i className="fa-brands fa-facebook-f socialsIcon"></i>
                    <i className="fa-brands fa-instagram socialsIcon"></i>
                    <i className="fa-brands fa-linkedin-in socialsIcon"></i>
                  </p>
                </div>
            </div>
            <div className="footerBottom">
              <p>Copyright 2022 Ashish Ratre</p>
            </div>
        </div>
    </>
  )
}
