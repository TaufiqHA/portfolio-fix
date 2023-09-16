import React from "react";
import Layout from "./Layout";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [folio, setFolio] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get("http://localhost:4000/portfolio");
    setFolio(res.data);
  };

  return (
    <Layout>
      <div
        className="hero mt-7 flex items-center max-[400px]:h-screen lg:mt-24"
        id="home"
      >
        <h2 className="text-[13rem] leading-[14rem] ms-5 max-[400px]:text-[4rem] max-[400px]:leading-[5rem] max-[400px]:font-bold max-[400px]:mt-[-100px] ">
          I'm a web developer
        </h2>
      </div>
      <div className="about mt-28 flex flex-col items-center ">
        <div className="about-title flex flex-col justify-center gap-2">
          <h2 className="text-[3rem] text-center font-bold max-[400px]:text-[2rem] ">
            how about me?
          </h2>
          <div className="w-48 h-0 outline outline-2 self-center "></div>
        </div>
        <div className="about-body w-1/2 mt-10 text-center max-[400px]:w-full max-[400px]:px-5 max-[400px]:text-justify ">
          <p className="font-medium text-xl">
            I am a fullstack web developer with deep expertise in react.js,
            express.js, and laravel. With this combination, I was able to create
            interactive and responsive user interfaces and build a strong and
            secure backend structure. Thus, I am ready to make outstanding
            contributions in complex and innovative web development projects
          </p>
        </div>
      </div>
      <div className="portofolio mt-28 ms-5 max-[400px]:ms-0">
        <div className="portfolio-title flex flex-col items-start gap-2 max-[400px]:ms-5">
          <h2
            className="text-[3rem] text-center font-bold max-[400px]:text-[2rem] "
            id="portfolio"
          >
            what do i make?
          </h2>
          <div className="w-48 h-0 outline outline-2 self-start "></div>
        </div>
        <div className="hidden max-[400px]:block ">
          <div className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box self-center ">
            {folio.map((post, index) => (
              <div className="carousel-item" key={post.id}>
                <img
                  src={post.url}
                  alt="gambar"
                  className="kotak w-[350px] h-56 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center mt-5 max-[400px]:hidden ">
          <div className="carousel max-w-full p-4 space-x-4 rounded-box self-center ">
            {folio.map((post, index) => (
              <div className="carousel-item" key={post.id}>
                <img
                  src={post.url}
                  alt="gambar"
                  className="w-[350px] h-56 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="contact mt-28" id="contact">
        <div className="contact-title flex flex-col items-end gap-2 max-[400px]:me-5">
          <h2 className="text-[3rem] text-center font-bold max-[400px]:text-[2rem] ">
            let's talk with me
          </h2>
          <div className="w-48 h-0 outline outline-2 self-end "></div>
        </div>
        <div className="w-full flex justify-center mt-20">
          <div className="form-control w-1/2 max-[400px]:w-full max-[400px]:mx-5">
            <label>
              <input
                type="text"
                placeholder="email"
                className="outline outline-1 outline-gray-300 p-5 w-full rounded-full"
              />
            </label>
            <label className="mt-5">
              <input
                type="text"
                placeholder="name"
                className="outline outline-1 outline-gray-300 p-5 w-full rounded-full"
              />
            </label>
            <textarea
              className="textarea textarea-bordered mt-5 rounded-2xl textarea-lg"
              placeholder="message"
            ></textarea>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
