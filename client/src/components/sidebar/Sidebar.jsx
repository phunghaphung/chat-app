import ConversationList from "./ConversationList";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-5 flex flex-col">
      <SearchInput />
      <div className="divider h-0" />
      <ConversationList />
      <LogoutButton className=""/>
    </div>
  );
};

export default Sidebar;
