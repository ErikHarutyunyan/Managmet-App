import styled from "styled-components";

export const GeneralEntryWrapper = styled.div`
  &.container_box-one {
    padding: 20px 20px 14px 20px;
  }
  .generalEntryForm_login {
    h3 {
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;
      /* identical to box height, or 133% */
      letter-spacing: -0.02em;
      /* Neutral/Gray 600 */
      color: #475569;
    }
    span {
      display: inline-block;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */
      letter-spacing: -0.02em;
      /* Neutral / Gray 400 */
      color: #94a3b8;
    }
    input {
      width: 100%;
      /* Shades/White */
      background: #ffffff;
      /* Neutral / Gray 300 */
      border: 1px solid #cbd5e1;
      border-radius: 4px;
      padding-left: 16px;
      padding-top: 11px;
      padding-bottom: 11px;
      margin-top: 8px;
      &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        /* Neutral / Gray 400 */
        color: #94a3b8;
      }
    }
  }
  .generalEntryForm_tag {
    margin-top: 16px;
    h4 {
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */
      letter-spacing: -0.02em;
      /* Neutral / Gray 500 */
      color: #64748b;
    }
    span {
      display: inline-block;
    }
    &-items {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 3px 16px;
      gap: 10px;
      margin-top: 8px;
      /* Shades/White */

      background: #ffffff;
      /* Neutral / Gray 300 */

      border: 1px solid #cbd5e1;
      border-radius: 4px;
      .tag_item {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 5px 16px;
        gap: 6px;

        /* Neutral / Gray 50 */

        background: #f8fafc;
        /* Neutral/Gray 50 */

        border: 1px solid #f8fafc;
        border-radius: 5px;
        p {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          /* identical to box height, or 125% */

          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: -0.02em;

          /* Neutral / Gray 500 */

          color: #64748b;
        }
        span {
          width: 16px;
          height: 16px;
          svg {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .generalEntryForm_desc {
    padding: 8px;
    gap: 4px;
    /* Neutral / Gray 50 */
    background: #f8fafc;
    /* shadow-def */
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 16px;
    h4 {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */

      letter-spacing: -0.02em;

      /* Neutral / Gray 500 */

      color: #64748b;
    }

    &-files {
      padding: 4px 8px 8px 8px;
      background: #fff;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      margin-top: 4px;
      textarea {
        width: 100%;
        height: 122px !important;
        resize: none;
        overflow: auto;
        padding-top: 8px;
        padding-left: 8px;

        &::placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 16px;
          /* identical to box height, or 100% */
          letter-spacing: -0.02em;
          /* Neutral / Gray 500 */
          color: #64748b;
        }
      }
      .uploaded_files {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        position: relative;
      }
      .fileIcon {
        position: absolute;
        right: 0;
        bottom: 0;
      }
      .upload_file {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 12px;
        gap: 4px;
        width: auto;
        /* Neutral / Gray 50 */
        background: #f8fafc;
        /* Neutral/Gray 50 */
        border: 1px solid #f8fafc;
        border-radius: 5px;
      }
    }
  }

  .generalEntryForm_SendTo {
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      /* identical to box height, or 120% */
      letter-spacing: -0.02em;
      /* Neutral / Gray 500 */
      color: #64748b;
      margin-top: 16px;
    }

    .generalEntryForm_SendTo-options {
      display: flex;
      flex-wrap: wrap;
      margin-top: 8px;
      gap: 8px;
      .sendto_option {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 16px;
        gap: 8px;
        /* Neutral/Gray 50 */
        background: #f8fafc;
        border-radius: 8px;
        p {
          font-weight: 600;
          font-size: 16px;
          line-height: 20px;
          /* identical to box height, or 125% */
          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: -0.02em;

          /* Neutral / Gray 500 */

          color: #64748b;
        }
      }
    }
  }
`;
