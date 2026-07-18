import { useRef, useState } from "react";

export default function Contact() {

  const nameRef = useRef();

  const [message,setMessage]=useState("");

  const handleSubmit=()=>{

    if(nameRef.current.value===""){

      setMessage("Please Enter Name");

      nameRef.current.focus();

      return;

    }

    setMessage("Form Submitted Successfully ✅");

    nameRef.current.value="";

  }

  return(

    <div className="container">

      <div className="glass" style={{padding:40}}>

      <h1>Contact Us</h1>

      <br/>

      <input
      type="text"
      placeholder="Enter Name"
      ref={nameRef}
      />

      <br/><br/>

      <button
      className="btn"
      onClick={handleSubmit}
      >
      Submit
      </button>

      <br/><br/>

      <h3>{message}</h3>

      </div>

    </div>

  )

}