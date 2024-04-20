import React from "react";
import { InputWithLabel } from "./formItem";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  return (
    <form className="flex-1 w-full">
      <InputWithLabel
        inputId="name"
        inputType="text"
        inputPlaceholder="Abc"
        labelName="Your name"
      />

      <InputWithLabel
        inputId="email"
        inputType="email"
        inputPlaceholder="Abc@def.com"
        labelName="Email address"
      />

      <InputWithLabel
        inputId="subject"
        inputType="text"
        inputPlaceholder="This is an optional"
        labelName="Subject"
      />
      <div className="grid w-full gap-1.5 mt-4">
        <Label htmlFor="message" className="text-base">
          Message
        </Label>
        <Textarea
          placeholder="Hi! i’d like to ask about"
          id="message"
          className="border-gray-400 rounded-md"
          rows={10}
        />
      </div>
      <Button type="submit" size="lg" className="bg-main mt-4 hover:bg-main">
        Submit
      </Button>
    </form>
  );
};
