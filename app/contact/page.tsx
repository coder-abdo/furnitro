import { Address } from "@/components/contactUs/address";
import { ContactForm } from "@/components/contactUs/form";
import { Jumbotron } from "@/components/contactUs/jumbotron";
import { FooterBanner } from "@/components/footerBanner";
import { PageBanner } from "@/components/pageBanner";
import React from "react";

const ContactPage = () => {
  return (
    <div className="py-6">
      <PageBanner pageName="Contact" />
      <Jumbotron />
      <div className="container flex flex-col md:flex-row gap-6 pb-8">
        <Address />
        <ContactForm />
      </div>
      <FooterBanner />
    </div>
  );
};

export default ContactPage;
