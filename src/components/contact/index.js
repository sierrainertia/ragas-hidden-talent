import React from "react";
import "./contact.scss";

export const Contact = () => {
return (
<section className="contact">
          <h3>Like what you see? Let's Chat!</h3>
          <form action="submit">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Name" id="name" />
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button>Submit Message</button>
          </form>
        </section>
        
)}
