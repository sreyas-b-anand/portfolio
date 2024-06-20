import { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";
import X from "../assets/X.png";
import instagram from "../assets/instagram.png";
import mail from "../assets/mail.png";

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
              <a className="contimg" href="http://"><img src={instagram} alt="ig" /></a>
              <a href="http://" className="contimg"><img src={X} alt="x" /></a>
              <a href="http://" className="contimg"><img src={mail} alt="m" /></a>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
