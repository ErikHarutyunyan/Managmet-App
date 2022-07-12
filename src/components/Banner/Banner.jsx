import React, { useState } from "react";
import Button from "../Button";
import { pendIcon, nursIcon } from "../Images";
import { BannerWrapper } from "./Banner.styled";

const Banner = () => {
  const [spaceBanner, setSpaceBanner] = useState(false);

  return (
    <BannerWrapper spaceBanner={spaceBanner}>
      <div className="banner_container">
        <div className="">
          <h2>Handover Management</h2>
        </div>
        <div className="">
          <h3>Co-work ‧ Latest Status ‧ Tracking</h3>
        </div>
        <span className="search_icon">
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.53 14.59C11.8986 15.9486 9.80615 16.626 7.688 16.4813C5.56985 16.3365 3.58905 15.3808 2.15762 13.8128C0.72619 12.2449 -0.04566 10.1854 0.0026244 8.06287C0.0509088 5.94033 0.915611 3.91811 2.41686 2.41686C3.91811 0.915611 5.94033 0.0509088 8.06287 0.0026244C10.1854 -0.04566 12.2449 0.72619 13.8128 2.15762C15.3808 3.58905 16.3365 5.56985 16.4813 7.688C16.626 9.80615 15.9486 11.8986 14.59 13.53L20.28 19.22C20.3537 19.2887 20.4128 19.3715 20.4538 19.4635C20.4948 19.5555 20.5168 19.6548 20.5186 19.7555C20.5204 19.8562 20.5018 19.9562 20.4641 20.0496C20.4264 20.143 20.3703 20.2278 20.299 20.299C20.2278 20.3703 20.143 20.4264 20.0496 20.4641C19.9562 20.5018 19.8562 20.5204 19.7555 20.5186C19.6548 20.5168 19.5555 20.4948 19.4635 20.4538C19.3715 20.4128 19.2887 20.3537 19.22 20.28L13.53 14.59ZM1.5 8.25C1.50022 7.15331 1.76767 6.07319 2.27918 5.10309C2.79069 4.133 3.53087 3.30215 4.43568 2.68243C5.34048 2.06271 6.38266 1.67278 7.47204 1.54638C8.56143 1.41999 9.6652 1.56093 10.6879 1.95702C11.7105 2.35311 12.6213 2.99241 13.3413 3.81961C14.0614 4.64681 14.569 5.637 14.8204 6.7045C15.0717 7.772 15.0591 8.88467 14.7838 9.94622C14.5084 11.0078 13.9785 11.9863 13.24 12.797C13.1386 12.8342 13.0464 12.893 12.9699 12.9693C12.8934 13.0456 12.8344 13.1376 12.797 13.239C11.83 14.1204 10.6276 14.7018 9.3362 14.9123C8.04481 15.1229 6.72005 14.9535 5.52312 14.425C4.3262 13.8964 3.3087 13.0313 2.59444 11.935C1.88018 10.8387 1.49994 9.55844 1.5 8.25Z"
              fill="#F8FAFC"
            />
          </svg>
        </span>
        <div className="btn_wrapper">
          <Button
            nameClass="btn_banner"
            name={"Pending Doc."}
            imgSrc={pendIcon}
          />
          <Button nameClass="btn_banner" name={"Report"} imgSrc={nursIcon} />
        </div>
        <div className="btn_space">
          <button onClick={() => setSpaceBanner(!spaceBanner)} type="button">
            {spaceBanner ? (
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
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.66675 9L12.6667 15L18.6667 9"
                  stroke="#64748B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
