import React, { useRef , useState} from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef  = useRef();
  const [done, setdone] = useState(false)
  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_3dl9dxt', 'template_q2gbf5r', formRef.current,'user_0OuMkqZqQp4wXDJFkT7gG')
    .then((result) => {
        console.log(result.text);
        setdone(true)
    }, (error) => {
        console.log(error.text);
    });
  }
  return (
    <div className='c'>
        <div className="left">
          <h1>Lets Diccuss Your Project.</h1>
          <h3>Email.....</h3>
          <h3>Contact</h3>
          <h3>Phone Number...</h3>
        </div>
        <div className="right">
          <p className='c-desc'>
            <b>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</b> Corporis ex iste reprehenderit officia, esse dolores enim earum reiciendis ipsam qui a at quo consectetur vel labore officiis aliquam mollitia consequuntur?</p>
       <form ref={formRef}>
         <input className='x' type="text" placeholder='Name' name='user-name' />
         <input className='y' type="text" placeholder='subject' name='user-subject' />
         <input className='z' type="text" placeholder='email' name='user-email' />

         <textarea rows="5" placeholder='Message' name='message'/>

         <div className="btn btn-primary" onClick={handleSubmit}>Submit</div>
         <br></br>
         <div className="r">
         {done && "Thanks For Contacting.I will Surely Reply You."}
         </div>
       </form>
       
        </div>
    </div>
  )
}

export default Contact