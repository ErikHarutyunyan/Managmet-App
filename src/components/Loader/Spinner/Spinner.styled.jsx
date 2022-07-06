import styled from "styled-components";

export const LdsSpinner = styled.div`
  width: 36px;
  height: 36px;
  margin: 0 auto;
  background: #d1fae5;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  .ispinner {
    position: relative;
    width: 20px;
    height: 20px;
  }
  .ispinner .ispinner-blade {
    position: absolute;
    top: 6.5px;
    left: 8.5px;
    width: 2.5px;
    height: 6.5px;
    background-color: #64748b;
    border-radius: 1.25px;
    animation: iSpinnerBlade 1s linear infinite;
    will-change: opacity;
  }
  .ispinner .ispinner-blade:nth-child(1) {
    transform: rotate(45deg) translateY(-6.5px);
    animation-delay: -1.625s;
  }
  .ispinner .ispinner-blade:nth-child(2) {
    transform: rotate(90deg) translateY(-6.5px);
    animation-delay: -1.5s;
  }
  .ispinner .ispinner-blade:nth-child(3) {
    transform: rotate(135deg) translateY(-6.5px);
    animation-delay: -1.375s;
  }
  .ispinner .ispinner-blade:nth-child(4) {
    transform: rotate(180deg) translateY(-6.5px);
    animation-delay: -1.25s;
  }
  .ispinner .ispinner-blade:nth-child(5) {
    transform: rotate(225deg) translateY(-6.5px);
    animation-delay: -1.125s;
  }
  .ispinner .ispinner-blade:nth-child(6) {
    transform: rotate(270deg) translateY(-6.5px);
    animation-delay: -1s;
  }
  .ispinner .ispinner-blade:nth-child(7) {
    transform: rotate(315deg) translateY(-6.5px);
    animation-delay: -0.875s;
  }
  .ispinner .ispinner-blade:nth-child(8) {
    transform: rotate(360deg) translateY(-6.5px);
    animation-delay: -0.75s;
  }
  .ispinner.ispinner-large {
    width: 35px;
    height: 35px;
  }
  .ispinner.ispinner-large .ispinner-blade {
    top: 11.5px;
    left: 15px;
    width: 5px;
    height: 12px;
    border-radius: 2.5px;
  }

  @keyframes iSpinnerBlade {
    0% {
      /* opacity: 0.85; */
      background-color: #10b981;
    }
    50% {
      /* opacity: 0.25; */
    }
    100% {
      /* opacity: 0.25; */
    }
  }
`;
