import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import env from "react-dotenv";

const PortfolioList = () => {
  const [data, setData] = useState([]);
  const [single, setSingle] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get(`http://${env.HOST}:4000/portfolio`);
    setData(res.data);
  };

  const modal = async (data) => {
    const res = await axios.get(`http://${env.HOST}:4000/portfolio/${data}`);
    setSingle(res.data);
  };

  const destroy = async (id) => {
    await axios.delete(`http://${process.env.host}:4000/portfolio/${id}`);
    getData();
  };

  return (
    <div className="overflow-x-auto">
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box flex flex-col items-center">
          <h3 className="font-bold text-lg self-start"> {single.name} </h3>
          <img
            src={single.url}
            alt="gambar"
            className=" w-2/3 rounded-xl mt-7 "
          />
          <div className="flex flex-row mt-5 gap-5">
            <Link
              to={`/edit/${single.uuid}`}
              className="btn bg-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full"
            >
              Edit
            </Link>
            <a
              className="btn bg-error btn-xs sm:btn-sm md:btn-md lg:btn-lg rounded-full"
              onClick={() => destroy(single.uuid)}
            >
              Delete
            </a>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      <div className="w-full h-96 overflow-x-auto">
        <table className="table table-pin-rows">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((list, index) => (
              <tr
                key={index}
                onClick={() => {
                  document.getElementById("my_modal_2").showModal();
                  modal(list.uuid);
                }}
              >
                <th> {index + 1} </th>
                <td> {list.name} </td>
                <td>
                  {" "}
                  <img
                    src={list.url}
                    alt="gambar"
                    className=" w-[70px] h-[70px] "
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioList;