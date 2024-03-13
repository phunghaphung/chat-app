import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-sky-300 hover:bg-sky-500 text-white"
      >
        <FaSearch size="1.5em"/>
      </button>
    </form>
  );
};

export default SearchInput;
