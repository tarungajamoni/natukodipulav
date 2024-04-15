import React from "react";
import ChatBot from "react-simple-chatbot";
import specialsData from './specials.json';


function SimpleChatbot() {
  const steps = [
    {
      id: "Greet",
      message: "Hello, Welcome to our Restaurant",
      trigger: "Next",
    },
    {
      id: "Next",
      message: "Please enter your name!",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "Name",
    },
    {
      id: "Name",
      message:
        "Hi {previousValue}, Please select options to know more about us ",
      trigger: "info",
    },
    {
      id: "info",
      options: [
        {
          value: "Location",
          label: "Location",
          trigger: "Location",
        },
        { value: "Specials", label: "Today Specials", trigger: "Specials" },
        {
          value: "Services",
          label: "Services",
          trigger: "Services",
        },
      ],
    },
    {
      id: "Location",
      message: "Amangal, Srisailam Highway, Rangareddy-509321",
      trigger: "maps",
    },
    {
      id: "maps",
      component: (
        <div>
          View on{" "}
          <a href="https://maps.app.goo.gl/8NmPsNvqa88NpMiC7" target="_blank">
            Maps
          </a>
        </div>
      ),
      trigger: "Yes/No",
    },
    {
      id: "Specials",
      component: (
        <div style={{ textAlign: 'left' }}>
          {specialsData.map((special, index) => <div key={index}>{index + 1}.{special}<br /></div>)}
        </div>
      ),
      trigger: "Yes/No",
    },
    {
      id: "Services",
      message: "We offer a wide range of services to meet your expectations",
      trigger: "Yes/No",
    },
    {
      id: "Yes/No",
      message: "Want to know more?",
      trigger: "more info",
    },
    {
      id: "more info",
      options: [
        {
          value: "Yes",
          label: "Yes",
          trigger: "Yes",
        },
        {
          value: "No",
          label: "No",
          trigger: "No",
        },
      ],
    },
    {
      id: "Yes",
      message: "Please select what you'd like to know",
      trigger: "info",
    },
    {
      id: "No",
      message:
        "Please write us an Email if you need more information. Thank you for reaching out to me.",
      end: true,
    },
  ];

  return (
    <div style={{ textAlign: 'left', position: "fixed", bottom: "4.25rem", right: "20px", zIndex: "9999"}}>
      <ChatBot
        steps={steps}
        headerTitle="Chat with us"
        botAvatar="/assets/images/bakklassy-logo.png"
        //userAvatar="https://example.com/user-avatar.png"
      />
    </div>
  );
}

export default SimpleChatbot;
