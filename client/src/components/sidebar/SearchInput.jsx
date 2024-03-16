import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../store/useConversation";
import useGetConversationList from "../../hooks/useGetConversationList";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversationList();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;

    if (search.length < 3) {
      return toast.error("Search query must be at least 3 characters long");
    }

    const conversation = conversations.find((conv) =>
      conv.fullname.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
    } else {
      toast.error("No user found");
    }
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-300 hover:bg-sky-500 text-white"
      >
        <FaSearch size="1.5em" />
      </button>
    </form>
  );
};

export default SearchInput;
