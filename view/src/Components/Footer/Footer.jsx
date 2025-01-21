import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import '../Footer/footer.css'
function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer1">
          <div className="about">
            <h3 >About Podca</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi temporibus dicta cupiditate ipsum repudiandae exercitationem, eius ullam saepe quia in quaerat sed nam harum incidunt beatae molestiae tenetur sit dignissimos!</p>
          </div>
          <div className="footer-podcast">
            <div className="podcast">
              <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="podcast">
              <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="podcast">
              <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        <div className="footer2">
          <div className="footer-links">
            <h3>
              Quick Menu
            </h3>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
              <li><a href="">Contact</a></li>
              <li><a href="">Blogs</a></li>
              <li><a href="">Hakuna</a></li>
              <li><a href="">Matara</a></li>
              <li><a href="">Portofolio</a></li>
            </ul>
          </div>
          <div className="follow-us">
            <h3>Follow Us</h3>
            <FaInstagram className="footer-icon" />
            <FaFacebook  className="footer-icon"  />
            <FaTwitter className="footer-icon"  />
            <FaLinkedin className="footer-icon"  />
          </div>
        </div>
        <div className="footer3">
          <div className="video">
            <h3>Watch Video</h3>
            <video controls src="https://preview.colorlib.com/theme/podca/images/img_1.jpg">
            <img src="https://preview.colorlib.com/theme/podca/images/img_1.jpg" contentEditable alt="" /> 
        </video>
          </div>
          <div className="enter-email">
            <div className="mail">

              <input type="email" placeholder='Enter Email' />
              <a href="">SEND</a>
            </div>
          </div>
        </div>
      </div>

    <p style={{textAlign:'center',backgroundColor:'#333333'}}> Copyright ©2025 All rights reserved | This template is made with  by Colorlib</p>
    </>
  )
}

export default Footer