import { useEffect } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeleton/MessageSkeleton";
import Message from "./Message";
import { useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const MessageList = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef(null);
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading &&
        [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-800 mt-1">
          No messages yet. Start the conversation!
        </p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default MessageList;
