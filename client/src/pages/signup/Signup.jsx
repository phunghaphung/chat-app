import { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500"> ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Daisy Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-700">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="daisydoe"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-gray-700">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <label className="label">
            <span className="text-base label-text text-gray-700">
              Confirm Password
            </span>
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full input input-bordered h-10"
            value={inputs.confirmPassword}
            onChange={(e) =>
              setInputs({ ...inputs, confirmPassword: e.target.value })
            }
          />

          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-4 inline-block"
          >
            Already have an account?
          </Link>

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner" />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
