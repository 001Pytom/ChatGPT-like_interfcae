import FIrstDisplay from "./FIrstDisplay";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useEffect, useRef } from "react";

function ChatWindow({ messages, isTyping }) {
  const chatRef = useRef(null);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  return (
    <div
      ref={chatRef}
      className=" w-full md:w-1/2 h-3/4 bg-white dark:bg-[#212121] p-4  rounded-lg shadow-lg overflow-y-auto "
    >
      {messages.length === 0 && <FIrstDisplay />}

      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
      {isTyping && <TypingIndicator />}
    </div>
  );
}

export default ChatWindow;
