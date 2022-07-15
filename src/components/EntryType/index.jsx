import { useState } from "react";
import { GeneralEntry } from "../GeneralEntry";
import { generalEntryLogo, selectDat, selectLogo, selectMain } from "../Images";
import { SelectDataType } from "../SelectDataType";
import {
  ModalButton,
  ModalContent,
  ModalContentFooter,
  ModalContentHeader,
  ModalWrapper,
} from "./EntryType.styled";

export default function Modal() {
  const [modal, setModal] = useState(false);

  // State for Modal
  // const [selectData, setSelectData] = useState(true);
  const [general, setGeneral] = useState(false);
  const [member, setMember] = useState(false);
  const [schedule, setSchedule] = useState(false);

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
      <ModalButton onClick={toggleModal}>
        <img src={selectDat} alt="selectDat" />
      </ModalButton>

      {modal && (
        <ModalWrapper>
          <div onClick={toggleModal} className="overlay"></div>
          <ModalContent>
            <ModalContentHeader>
              <div className="content_header-info">
                <div className="header_info-logo">
                  <img
                    src={general ? generalEntryLogo : selectLogo}
                    alt="selectLogo"
                  />
                </div>
                <div className="header_info-text">
                  <h3>{general ? "Data Entry" : "Select Data Entry Type"}</h3>
                  <p>
                    {general
                      ? "Please input the information"
                      : "Please select your Data Entry Type"}
                  </p>
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
            </ModalContentHeader>
            {general ? (
              <GeneralEntry />
            ) : member ? (
              "member"
            ) : schedule ? (
              "schedule"
            ) : (
              <SelectDataType
                general={general}
                setGeneral={setGeneral}
                member={member}
                setMember={setMember}
                schedule={schedule}
                setSchedule={setSchedule}
              />
            )}
            <ModalContentFooter>
              <div className="content_footer-container">
                <div className="footer_container-option">
                  <div
                    className={`option_type option_type-entry ${
                      general || schedule || member ? "" : "active"
                    }`}
                  >
                    <span className="type_logo">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.33335 19.6667H26.6667C27.5872 19.6667 28.3334 20.4129 28.3334 21.3334V26.6667C28.3334 27.5872 27.5872 28.3334 26.6667 28.3334H5.33335C4.41288 28.3334 3.66669 27.5872 3.66669 26.6667V21.3334C3.66669 20.4129 4.41288 19.6667 5.33335 19.6667Z"
                          stroke="#64748B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 24H8.01333"
                          stroke="#64748B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5.33335 3.66675H26.6667C27.5872 3.66675 28.3334 4.41294 28.3334 5.33341V10.6667C28.3334 11.5872 27.5872 12.3334 26.6667 12.3334H5.33335C4.41288 12.3334 3.66669 11.5872 3.66669 10.6667V5.33341C3.66669 4.41294 4.41288 3.66675 5.33335 3.66675Z"
                          stroke="#64748B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 8H8.01333"
                          stroke="#64748B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>Entry Type</p>
                  </div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1270_140059)">
                      <path
                        d="M17.51 12H23.46"
                        stroke="#E2E8F0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.55005 12H7.50005"
                        stroke="#E2E8F0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 16C14.7091 16 16.5 14.2091 16.5 12C16.5 9.79086 14.7091 8 12.5 8C10.2909 8 8.5 9.79086 8.5 12C8.5 14.2091 10.2909 16 12.5 16Z"
                        stroke="#E2E8F0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1270_140059">
                        <path
                          d="M0.5 12C0.5 5.37258 5.87258 0 12.5 0V0C19.1274 0 24.5 5.37258 24.5 12V12C24.5 18.6274 19.1274 24 12.5 24V24C5.87258 24 0.5 18.6274 0.5 12V12Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div
                    className={`option_type option_type-dataEntry ${
                      general || schedule || member ? "active" : ""
                    }`}
                  >
                    <span className="type_logo">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.83325 2.66675H3.16659C2.81296 2.66675 2.47382 2.80722 2.22378 3.05727C1.97373 3.30732 1.83325 3.64646 1.83325 4.00008V13.3334C1.83325 13.687 1.97373 14.0262 2.22378 14.2762C2.47382 14.5263 2.81296 14.6667 3.16659 14.6667H12.4999C12.8535 14.6667 13.1927 14.5263 13.4427 14.2762C13.6928 14.0262 13.8333 13.687 13.8333 13.3334V8.66675"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.8333 1.66665C13.0985 1.40144 13.4582 1.25244 13.8333 1.25244C14.2083 1.25244 14.568 1.40144 14.8333 1.66665C15.0985 1.93187 15.2475 2.29158 15.2475 2.66665C15.2475 3.04173 15.0985 3.40144 14.8333 3.66665L8.49992 9.99999L5.83325 10.6667L6.49992 7.99999L12.8333 1.66665Z"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>Data Entry</p>
                  </div>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1270_140059)">
                      <path
                        d="M17.51 12H23.46"
                        stroke="#E2E8F0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.55005 12H7.50005"
                        stroke="#E2E8F0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 16C14.7091 16 16.5 14.2091 16.5 12C16.5 9.79086 14.7091 8 12.5 8C10.2909 8 8.5 9.79086 8.5 12C8.5 14.2091 10.2909 16 12.5 16Z"
                        stroke="#E2E8F0"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1270_140059">
                        <path
                          d="M0.5 12C0.5 5.37258 5.87258 0 12.5 0V0C19.1274 0 24.5 5.37258 24.5 12V12C24.5 18.6274 19.1274 24 12.5 24V24C5.87258 24 0.5 18.6274 0.5 12V12Z"
                          fill="white"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  <div
                    className={`option_type option_type-dataPrev ${
                      general && schedule && member ? "active" : ""
                    }`}
                  >
                    <span className="type_logo">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83341 1.33325H4.50008C4.14646 1.33325 3.80732 1.47373 3.55727 1.72378C3.30722 1.97382 3.16675 2.31296 3.16675 2.66659V13.3333C3.16675 13.6869 3.30722 14.026 3.55727 14.2761C3.80732 14.5261 4.14646 14.6666 4.50008 14.6666H12.5001C12.8537 14.6666 13.1928 14.5261 13.4429 14.2761C13.6929 14.026 13.8334 13.6869 13.8334 13.3333V5.33325L9.83341 1.33325Z"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.1666 11.3333H5.83325"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.1666 8.66675H5.83325"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.16658 6H6.49992H5.83325"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.83325 1.33325V5.33325H13.8333"
                          stroke="#64748B"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <p>Data Preview</p>
                  </div>
                </div>
              </div>
            </ModalContentFooter>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
}
