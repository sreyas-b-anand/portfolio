import { useState } from "react";
import Navbar from "../Components/Navbar";


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading , setIsloading] =useState(false);
  const [messageSent , setMessageSent] =useState(false)

  const  handleClick = () => {
    
    setIsloading(true);
    const messages = { name, email, message };

    fetch("http://localhost:8001/message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(messages),
    })
    .then(() => {
        
        setIsloading(false);
        setMessageSent(true)
    })
    .catch(() => {
      console.log('failed to sent');
    })
  };

  return (
    <>
    <div className="navbar"><Navbar/></div>
      <form  onSubmit={handleClick}>
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
       { !isLoading && <div><button type="submit">send</button></div>}
       { isLoading && <div><button type="submit">loading</button></div>}
       { messageSent && <nav>Message succesfully sent</nav>}
      </form>
    </>
  );
}
export default Contact;
