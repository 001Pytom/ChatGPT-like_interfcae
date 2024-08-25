import { useState } from "react";

export default function InputCon({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="w-full max-w-[60%] p-4 flex items-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-2 border rounded-lg dark:bg-gray-700 dark:text-white"
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <button
        onClick={handleSend}
        className="ml-2 px-4 py-2 bg-gray-300   text-black rounded-lg hover:bg-gray-400  dark:bg-gray-400"
      >
        Send
      </button>
    </div>
  );
}
