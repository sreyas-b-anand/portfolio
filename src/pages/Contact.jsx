import { useState } from "react";
import Navbar from "../Components/Navbar";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /*const [isLoading , setIsloading] =useState(false);
  const [messageSent , setMessageSent] =useState(false)*/
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="contactpage">
        <form>
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
            <button className='btn' type="button">SEND</button>
            <div className="c">
              <img src="" alt="ig" />
              <img src="" alt="x" />
              <img src="" alt="m" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Contact;
