import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import extractTime from "../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id;
  const messageClass = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation.profilePic;
  const bubbleColor = fromMe
    ? "bg-slate-200 text-slate-800"
    : "bg-blue-400 text-slate-50";
  const shakeClass = message.shouldShake ? "shake" : "";
  console.log(message);

  return (
    <div className={`chat ${messageClass}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <div dangerouslySetInnerHTML={{ __html: profilePic }} />
        </div>
      </div>
      <div className={`chat-bubble ${bubbleColor} ${shakeClass}`}>
        {message.message}
      </div>
      <div className="chat-footer text-slate-700 opacity-80 text-xs my-1">
        {extractTime(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;
