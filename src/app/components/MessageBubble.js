export default function MessageBubble({ message }) {
  const isUser = message.type === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
        } dark:${isUser ? "bg-blue-700" : "bg-gray-600"}`}
      >
        {message.text}
      </div>
    </div>
  );
}
