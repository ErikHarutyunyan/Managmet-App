import { useState } from "react";
import { ModalContentContainer } from "../EntryType/EntryType.styled";
import { generalEntryLogo } from "../Images";

export const GeneralEntry = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleUpload = (e) => {
    console.log(typeof e.target.files);
    const files = e.target.files[0];
    setUploadedFiles([...uploadedFiles, files]);
    console.log(files);
  };

  return (
    <ModalContentContainer>
      <div className="container_box-one">
        <form action="#" className="generalEntryForm">
          <div className="generalEntryForm_login">
            <label>
              <h3>Login Title</h3>
              <span>Please fill in the Log Title</span>
              <input type="text" name="name" />
            </label>
          </div>
          <div className="generalEntryForm_tag">
            <label>
              <h4>Tag</h4>
              <input type="text" />
            </label>
          </div>
          <div className="generalEntryForm_desc">
            <label>
              <h4>Description</h4>
              <textarea placeholder="Please fill in..."></textarea>
              {uploadedFiles.map((photo, i) => (
                <p key={i}>{photo.name}</p>
              ))}
            </label>
            <input
              type="file"
              onChange={handleUpload}
              name="testPhotos"
              accept="image/png, image/jpeg"
              multiple
            />
          </div>
          <div className="generalEntryForm_SendTo">
             <h3>Send to</h3>

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
        <div className="box_two-wrapper">
          <img src={generalEntryLogo} alt="selectLogo" />
          <h3>Select Data Entry Type</h3>
          <p>Please select your Data Entry Type</p>
        </div>
      </div>
    </ModalContentContainer>
  );
};
