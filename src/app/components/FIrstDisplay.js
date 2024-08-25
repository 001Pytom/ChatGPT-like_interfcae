import { FaRobot } from "react-icons/fa";
import { MdChatBubble } from "react-icons/md";

function FIrstDisplay() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <FaRobot />
      <div className="text-black dark:text-white border border-gray-500 p-3 w-40 flex flex-col items-center">
        <MdChatBubble />
        What will you like to ask me today?
      </div>
    </div>
  );
}

export default FIrstDisplay;
