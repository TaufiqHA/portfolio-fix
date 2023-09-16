import React from "react";
import DashLayout from "../pages/DashLayout";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePortfolio } from "../features/portfolioSlice";

const PortfolioEdit = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`http://localhost:4000/portfolio/${id}`);
    setTitle(res.data.name);
    setData(res.data);
  };

  const loadFile = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const update = () => {
    dispatch(updatePortfolio({ title, file, id }));
    navigate("/dashboard");
  };

  return (
    <DashLayout>
      <div className="flex justify-center ">
        <div className="form-control w-full max-w-xs ">
          <label className="label">
            <span className="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <img src={data.url} alt="gambar" className=" w-[400px] mt-5 " />
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs mt-5"
            onChange={loadFile}
          />
          {preview ? (
            <img src={preview} alt="gambar" className=" mt-5 w-[400px] " />
          ) : (
            ""
          )}
          <a className="btn glass mt-5" onClick={update}>
            Ubah
          </a>
        </div>
      </div>
    </DashLayout>
  );
};

export default PortfolioEdit;
