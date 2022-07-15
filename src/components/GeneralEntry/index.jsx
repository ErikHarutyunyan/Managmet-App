import { useRef, useState } from "react";
import { ModalContentContainer } from "../EntryType/EntryType.styled";
import { generalEntryLogo, uploadFileImg } from "../Images";
import { GeneralEntryWrapper } from "./GeneralEntry.styled";
import React from "react";
import Accordion from "../../hooks/acc";

export const GeneralEntry = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(true);

  const [descSection, setDescSection] = useState(false);

  const handleUpload = (e) => {
    const result = Object.keys(e).map((key) => e[key]);
    setUploadedFiles([...uploadedFiles, ...result]);
  };

  const inputRef = useRef(null);

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    // if (e.type === "dragenter" || e.type === "dragover") {
    //   setDragActive(true);
    // } else if (e.type === "dragleave") {
    //   setDragActive(false);
    // }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    // setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUpload(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleUpload(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <ModalContentContainer>
      <GeneralEntryWrapper>
        <div className="container_box-one">
          <form action="#" className="generalEntryForm">
            <div className="generalEntryForm_login">
              <label>
                <h3>Login Title</h3>
                <span>Please fill in the Log Title</span>
                <input type="text" name="name" placeholder="Please input.." />
              </label>
            </div>
            <div className="generalEntryForm_tag">
              <label>
                <h4>Tag</h4>
                <div className="generalEntryForm_tag-items">
                  <div className="tag_item">
                    <p>Tag A</p>
                    <span>
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
                    </span>
                  </div>
                  <div className="tag_item">
                    <p>Tag B</p>
                    <span>
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
                    </span>
                  </div>
                </div>
              </label>
            </div>
            <div className="generalEntryForm_desc">
              <label>
                <Accordion>
                  <div className="accor">
                    <div
                      className="icons head noselect"
                      onClick={() => {
                        if (descSection) setDescSection(!descSection);
                        else {
                          setDescSection(!descSection);
                        }
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 15L12 9L6 15"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <h4>Description</h4>
                    <div className="generalEntryForm_desc-files body">
                      <textarea placeholder="Please fill in..."></textarea>
                      <div className="uploaded_files">
                        {uploadedFiles.map((file, i) => {
                          console.log(file, "file");
                          return (
                            <div key={i} className="upload_file">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.5 1H3C2.73478 1 2.48043 1.10536 2.29289 1.29289C2.10536 1.48043 2 1.73478 2 2V10C2 10.2652 2.10536 10.5196 2.29289 10.7071C2.48043 10.8946 2.73478 11 3 11H9C9.26522 11 9.51957 10.8946 9.70711 10.7071C9.89464 10.5196 10 10.2652 10 10V4.5L6.5 1Z"
                                  stroke="#64748B"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M6.5 1V4.5H10"
                                  stroke="#64748B"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>

                              <p>{file.name}</p>
                            </div>
                          );
                        })}
                        <div className="fileIcon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.44 11.0499L12.25 20.2399C11.1241 21.3658 9.59717 21.9983 8.00498 21.9983C6.4128 21.9983 4.88583 21.3658 3.75998 20.2399C2.63414 19.1141 2.00165 17.5871 2.00165 15.9949C2.00165 14.4027 2.63414 12.8758 3.75998 11.7499L12.95 2.55992C13.7005 1.80936 14.7185 1.3877 15.78 1.3877C16.8414 1.3877 17.8594 1.80936 18.61 2.55992C19.3605 3.31048 19.7822 4.32846 19.7822 5.38992C19.7822 6.45138 19.3605 7.46936 18.61 8.21992L9.40998 17.4099C9.0347 17.7852 8.52571 17.996 7.99498 17.996C7.46426 17.996 6.95527 17.7852 6.57998 17.4099C6.2047 17.0346 5.99387 16.5256 5.99387 15.9949C5.99387 15.4642 6.2047 14.9552 6.57998 14.5799L15.07 6.09992"
                              stroke="#64748B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion>
              </label>
            </div>
            <div className="generalEntryForm_SendTo">
              <h4>Send to</h4>
              <div className="generalEntryForm_SendTo-options">
                <div className="sendto_option">
                  <p>Public</p>
                </div>
                <div className="sendto_option">
                  <p>Soical Worker</p>
                </div>
                <div className="sendto_option">
                  <p>Nursing Care</p>
                </div>
                <div className="sendto_option">
                  <p>Instructor</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="container_box-two">
          {descSection ? null : (
            <div className="box_two-wrapper">
              <img src={generalEntryLogo} alt="selectLogo" />
              <h3>Select Data Entry Type</h3>
              <p>Please select your Data Entry Type</p>
            </div>
          )}

          {descSection ? (
            <div className="box_two-wrapper desc">
              <input
                ref={inputRef}
                type="file"
                id="input-file-upload"
                multiple={true}
                onChange={handleChange}
              />
              <label
                id="label-file-upload"
                htmlFor="input-file-upload"
                className={dragActive ? "drag-active" : ""}
              >
                <img src={uploadFileImg} alt="selectLogo" />
                <h3>Upload File(s)</h3>
                <p>Please drag the file(s) here</p>
              </label>
              {dragActive && (
                <div
                  id="drag-file-element"
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                ></div>
              )}
            </div>
          ) : null}
        </div>
      </GeneralEntryWrapper>
    </ModalContentContainer>
  );
};
