import { ModalContentContainer } from "../EntryType/EntryType.styled";
import { selectLogo, selectMain } from "../Images";

export const SelectDataType = ({
  general,
  member,
  schedule,
  setGeneral,
  setMember,
  setSchedule,
}) => {
  return (
    <ModalContentContainer>
      <div className="container_box-one">
        <div className="box_one-img">
          <img src={selectMain} alt="selectMain" />
        </div>
        <div className="box_one-option">
          <div
            className="option_item"
            onClick={() => {
              setGeneral(!general);
            }}
          >
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
          <div
            className="option_item"
            onClick={() => {
              setMember(!member);
            }}
          >
            <div className="option_item-logo">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1238_117428)">
                  <path
                    d="M21.3333 28V25.3333C21.3333 23.9188 20.7713 22.5623 19.7712 21.5621C18.771 20.5619 17.4144 20 15.9999 20H6.66659C5.2521 20 3.89554 20.5619 2.89535 21.5621C1.89516 22.5623 1.33325 23.9188 1.33325 25.3333V28"
                    stroke="#64748B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22.6667 14.6667L25.3334 17.3333L30.6667 12"
                    stroke="#64748B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.3333 14.6667C14.2789 14.6667 16.6667 12.2789 16.6667 9.33333C16.6667 6.38781 14.2789 4 11.3333 4C8.38781 4 6 6.38781 6 9.33333C6 12.2789 8.38781 14.6667 11.3333 14.6667Z"
                    stroke="#64748B"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1238_117428">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="option_item-info">
              <h3>Member Status</h3>
              <p>Various types of Member Status</p>
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
          <div
            className="option_item"
            onClick={() => {
              setSchedule(!schedule);
            }}
          >
            <div className="option_item-logo">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5 5.33341V5.83341H24H25.3333C25.908 5.83341 26.4591 6.06169 26.8654 6.46802C27.2717 6.87435 27.5 7.42545 27.5 8.00008V26.6667C27.5 27.2414 27.2717 27.7925 26.8654 28.1988C26.4591 28.6051 25.908 28.8334 25.3333 28.8334H6.66667C6.09203 28.8334 5.54093 28.6051 5.1346 28.1988C4.72827 27.7925 4.5 27.2414 4.5 26.6667V8.00008C4.5 7.42545 4.72827 6.87435 5.1346 6.46802C5.54093 6.06169 6.09203 5.83341 6.66667 5.83341H8H8.5V5.33341V3.16675H10.1667V5.33341V5.83341H10.6667H21.3333H21.8333V5.33341V3.16675H23.5V5.33341ZM25.3333 27.1667H25.8333V26.6667V13.3334V12.8334H25.3333H6.66667H6.16667V13.3334V26.6667V27.1667H6.66667H25.3333ZM6.16667 10.6667V11.1667H6.66667H25.3333H25.8333V10.6667V8.00008V7.50008H25.3333H6.66667H6.16667V8.00008V10.6667ZM9.83333 16.5001H22.1667V18.1667H9.83333V16.5001ZM9.83333 21.8334H18.1667V23.5001H9.83333V21.8334Z"
                  fill="#64748B"
                  stroke="#64748B"
                />
              </svg>
            </div>
            <div className="option_item-info">
              <h3>Schedule</h3>
              <p>Schedule an event</p>
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
    </ModalContentContainer>
  );
};
