import styled from "styled-components";

export const ModalWrapper = styled.div`
  .btn-modal {
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
    position: absolute;
  }

  .modal,
  .overlay {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  }

  .overlay {
    background: #0f172a;
    opacity: 0.1;
    
  }
  .modal-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #fff;
    border-radius: 3px;
    max-width: 1024px;
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }

  .close-modal {
    position: absolute;
    top: 16px;
    right: 20px;
    background: none;
  }

  .modal_content-header {
    width: 100%;
    background: #f1f5f9;
    position: relative;
    border-radius: 16px 16px 0px 0px;
  }
  .content_header-info {
    position: relative;
    display: flex;
    padding: 16px 20px;
    column-gap: 16px;
  }
  .header_info-logo {
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
  .header_info-text {
    h3 {
      font-weight: 600;
      font-size: 28px;
      line-height: 40px;
      /* identical to box height, or 143% */
      letter-spacing: -0.04em;
      /* Neutral/Gray 600 */
      color: #475569;
      /* Inside auto layout */
    }
    p {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      /* identical to box height, or 133% */
      letter-spacing: -0.02em;
      /* Neutral / Gray 400 */
      color: #94a3b8;
    }
  }
  .container_box-two {
    border: 16px solid #f8fafc;
    border-radius: 16px;
    max-width: 442px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    .box_two-wrapper {
      img {
        max-width: 120px;
        width: 100%;
        max-height: 120px;
        height: 100%;
      }
      h3 {
        margin-top: 27px;
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        /* identical to box height, or 133% */

        letter-spacing: -0.02em;

        /* Neutral/Gray 600 */

        color: #475569;
      }
      p {
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        /* identical to box height, or 120% */

        letter-spacing: -0.02em;

        /* Neutral / Gray 400 */

        color: #94a3b8;
      }
    }
  }
  .modal_content-container {
    display: flex;
    justify-content: center;
    padding: 16px 0;
  }
  .container_box-one {
    max-width: 442px;
    width: 100%;
    padding: 16px;
  }
  .box_one-img {
    width: 100%;
    height: 216px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
  }
  .box_one-option {
    border-radius: 8px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    .option_item {
      background: #f8fafc;
      display: flex;
      padding: 0 16px;
      align-items: center;
      justify-content: space-between;
      .option_item-logo {
      }
      .option_item-info {
        padding-top: 8px;
        padding-bottom: 8px;
        h3 {
          font-weight: 600;
          font-size: 20px;
          line-height: 32px;
          /* identical to box height, or 160% */

          letter-spacing: -0.02em;

          /* Neutral/Gray 600 */

          color: #475569;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */

          letter-spacing: -0.02em;

          /* Neutral / Gray 400 */

          color: #94a3b8;
        }
      }
      .option_item-btn {
      }
    }
  }
`;
