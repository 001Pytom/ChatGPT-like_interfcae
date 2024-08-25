import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import NavBar from "./NavBar";
import InputCon from "./InputCon";

function ChatCom() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages));
      } catch (error) {
        console.error("Failed to parse messages", error);
        setMessages([]);
      }
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chatMessages", JSON.stringify(messages));
    }
  }, [messages]);

  const addMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: "user", text: message },
    ]);

    setIsTyping(true);
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: "system", text: "This is a mock response." },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="w-screen min-h-screen flex">
      <Sidebar />
      <div className="bg-white dark:bg-[#212121] dark:text-white w-full flex flex-col gap-4 lg:justify-around items-center flex-grow">
        <NavBar />
        <ChatWindow messages={messages} isTyping={isTyping} />
        <InputCon onSend={addMessage} />
      </div>
    </div>
  );
}

export default ChatCom;
