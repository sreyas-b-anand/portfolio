import { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";
import X from "../assets/X.jpg";
import instagram from "../assets/instagram.jpg";
import mail from "../assets/mail.jpg";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /*const [isLoading , setIsloading] =useState(false);
  const [messageSent , setMessageSent] =useState(false)*/

  const handleClick = (e) =>{
    e.preventDefault();
    setName("")
    setMessage("")
    setEmail("")
  }

  return (
    <>
      
        <Navbar />
      
      <div className="contactpage">
        <form >
          <div className="contact">
            <label className="message">MESSAGE ME</label>
            <label className="nameIn">
              <input  className="nameIn"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label >
              <input className="mailIn"
                type="text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="MessIn">
              <textarea className="MessIn"
                type="text"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button className='btn' type="button" onClick={handleClick}>SEND</button>
            <div className="c">
              <a className="contimg" href="https://www.instagram.com/sre___y___a___s/"><img src="https://i.pinimg.com/564x/7d/36/9f/7d369fb78ad668867000c0d987a1b70d.jpg"alt="ig" /></a>
              <a href="https://twitter.com/sre___y___as___/" className="contimgx"><img src={X} alt="x" /></a>
              <a href="http://mailto:sreyas1045@gmail.com" className="contimg"><img src={mail} alt="m" /></a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
