import React from "react";
import "./style.scss"
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import Qrcode from "qrcode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide} from 'react-toastify';

const Home = () => {
  const [text, setText] = useState("");
  const [img, setImageUrl] = useState();

  const generateQrCode = async () => {
    try {
      const response = await Qrcode.toDataURL(text);
      setImageUrl(response);
    } catch (error) {
      notify();
    }
  };
  const notify = () =>
    toast.info("The field is not filled", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <>
      <header>
        <div className="container"> 
          <div className="header">
            <h2 className="title">QR Code Generate & Scanner with React js</h2>
            <div className="generate__label">
              <div className="generate_text">
                <div className="generate">
                  <TextField
                    label="Enter text"
                    onChange={(e) => setText(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => generateQrCode()}
                  >
                    Generate
                  </Button>
                  <ToastContainer 
                  transition={Slide}/>
                </div>
                <div>
                  {img ? (
                    <a href={img} download>
                      <img className="img" src={img} alt="img" />
                    </a>
                  ) : (
                    <span className="skeleton-box"></span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Home;
