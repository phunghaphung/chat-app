import { FiLogOut } from "react-icons/fi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
    <div className="mt-2">
      {!loading ? (
        <FiLogOut
          className="hover:cursor-pointer"
          size="1.5em"
          color="black"
          onClick={logout}
        />
      ) : (
        <span className="loading loading-spinner" />
      )}
    </div>
  );
};

export default LogoutButton;
