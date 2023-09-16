import React from "react";
import DashLayout from "./DashLayout";
import PortfolioList from "../components/PortfolioList";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortfolio } from "../features/portfolioSlice";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, message } = useSelector((state) => state.auth);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, []);

  const loadFile = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const create = async (e) => {
    e.preventDefault();
    dispatch(createPortfolio({ title, file }));
    navigate("/dashboard");
  };

  return (
    <>
      <DashLayout>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn rounded-xl bg-slate-400"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Tambah Portfolio
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Tambah Portfolio</h3>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">What is your portfolio name?</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Pick a Picture</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                onChange={loadFile}
              />
            </div>
            {preview ? (
              <img
                src={preview}
                alt="gambar preview"
                className="w-[200px] mt-5 "
              />
            ) : (
              ""
            )}
            <a className="btn glass mt-5" onClick={create}>
              Tambah
            </a>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        <PortfolioList />
      </DashLayout>
    </>
  );
};

export default Dashboard;
