const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://api.dicebear.com/7.x/lorelei/svg"
            alt="Tailwind CSS Chat Bubble Component"
          />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-300">
        Hello, how are you?
      </div>
      <div className="chat-footer opacity-50">11:38</div>
    </div>
  );
};

export default Message;
