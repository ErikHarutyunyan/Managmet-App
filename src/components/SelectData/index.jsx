import { useState } from "react";
import { selectDat, selectLogo, selectMain } from "../Images";
import { ModalWrapper } from "./SelectData.styled";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal"
        style={{
          position: "absolute",
          background: "none",
          bottom: "0",
          right: "0",
        }}
      >
        <img src={selectDat} alt="selectDat" />
      </button>

      {modal && (
        <ModalWrapper className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal_content-header">
              <div className="content_header-info">
                <div className="header_info-logo">
                  <img src={selectLogo} alt="selectLogo" />
                </div>
                <div className="header_info-text">
                  <h3>Select Data Entry Type</h3>
                  <p>Please select your Data Entry Type</p>
                </div>
              </div>
              <button className="close-modal" onClick={toggleModal}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#64748B"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="modal_content-container">
              <div className="container_box-one">
                <div className="box_one-img">
                  <img  src={selectMain} alt="selectMain" />
                </div>
                <div className="box_one-option">
                  <div className="option_item">
                    <div className="option_item-logo">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 5.33333V8H18.6667V5.33333H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 16V18.6667H14.6667V16H5.33333Z"
                          fill="#64748B"
                        />
                      </svg>
                    </div>
                    <div className="option_item-info">
                      <h3>General</h3>
                      <p>General use for text and attached files</p>
                    </div>
                    <div className="option_item-btn">
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L7 7L1 1"
                          stroke="#64748B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="option_item">
                    <div className="option_item-logo">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 5.33333V8H18.6667V5.33333H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 16V18.6667H14.6667V16H5.33333Z"
                          fill="#64748B"
                        />
                      </svg>
                    </div>
                    <div className="option_item-info">
                      <h3>General</h3>
                      <p>General use for text and attached files</p>
                    </div>
                    <div className="option_item-btn">
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L7 7L1 1"
                          stroke="#64748B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="option_item">
                    <div className="option_item-logo">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.66667 0C1.18667 0 0 1.18667 0 2.66667V21.3333C0 22.8133 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8133 24 21.3333V2.66667C24 1.18667 22.8133 0 21.3333 0H2.66667ZM2.66667 2.66667H21.3333V21.3333H2.66667V2.66667ZM5.33333 5.33333V8H18.6667V5.33333H5.33333ZM5.33333 10.6667V13.3333H18.6667V10.6667H5.33333ZM5.33333 16V18.6667H14.6667V16H5.33333Z"
                          fill="#64748B"
                        />
                      </svg>
                    </div>
                    <div className="option_item-info">
                      <h3>General</h3>
                      <p>General use for text and attached files</p>
                    </div>
                    <div className="option_item-btn">
                      <svg
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L7 7L1 1"
                          stroke="#64748B"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container_box-two">
                <div className="box_two-wrapper">
                    <img src={selectLogo} alt="selectLogo" />
                    <h3>Select Data Entry Type</h3>
                    <p>Please select your Data Entry Type</p>
                </div>
              </div>
            </div>
            <div className="modal_content-footer">
                <div className="content_footer-container">
                    
                </div>
            </div>
          </div>
        </ModalWrapper>
      )}
    </>
  );
}
