import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../features/authSlice";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
  });

  const auth = async (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    navigate("/dashboard");
  };

  return (
    <>
      {isError && (
        <div className="alert alert-error fixed w-1/3 left-1/3 top-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{message}</span>
        </div>
      )}

      <div className=" h-screen flex items-center justify-center">
        <div className="card w-96 bg-slate-300 shadow-xl rounded-3xl">
          <div className="card-body">
            <h2 className="text-center font-semibold text-xl">Login</h2>
            <div className="form-control">
              <label className="input-group input-group-vertical mt-5">
                <span className=" bg-transparent ">Email</span>
                <input
                  type="text"
                  placeholder="info@site.com"
                  className="input bg-transparent"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="input-group input-group-vertical mt-5">
                <span className=" bg-transparent ">Password</span>
                <input
                  type="password"
                  placeholder="password"
                  className="input bg-transparent"
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            </div>
            <div className="card-actions justify-center">
              <button
                type="submit"
                className="btn mt-7 w-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "
                onClick={auth}
              >
                {isLoading ? (
                  <span className="loading loading-dots loading-md"></span>
                ) : (
                  "login"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
