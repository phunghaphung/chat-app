import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

const useGetConversationList = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const getConversationList = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversationList();

    return () => abortController.abort();
  }, []);

  return { loading, conversations };
};

export default useGetConversationList;
