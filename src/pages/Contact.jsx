import { useState } from "react";
import Navbar from "../Components/Navbar";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /*const [isLoading , setIsloading] =useState(false);
  const [messageSent , setMessageSent] =useState(false)*/

 
  

  return (
    <>
    <div className="navbar"><Navbar/></div>
      <form  >
        <div className="contact">
          <label>message me</label>
          <label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <textarea
              type="text"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
         
        </div>
        <div>{name}</div>
      
      </form>
    </>
  );
}
export default Contact;
