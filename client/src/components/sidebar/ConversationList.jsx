import useGetConversationList from "../../hooks/useGetConversationList";
import getRandomEmoji from "../../utils/emojis";
import Conversation from "./Conversation";

const ConversationList = () => {
  const { loading, conversations } = useGetConversationList();

  return (
    <div className="py-1 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        conversations.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIndex={index === conversations.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default ConversationList;
