import React from "react";
import ContactBlurb from "../PageComponents/Contact/ContactBlurb"
import Picture from "../PageComponents/Contact/Picture"
import ContactDetails from "../PageComponents/Contact/ContactDetails"

export default function Contact() {
    return (
        <div>
            <h2>I would love to hear from you</h2>
            <ContactBlurb/>
            <ContactDetails/>
            <Picture/>
        </div>


    );
}