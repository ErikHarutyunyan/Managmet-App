import React from "react";
import { LdsSpinner } from "./Spinner.styled";

export const Spinner = () => {
  return (
    <LdsSpinner>
      <div class="ispinner">
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
        <div class="ispinner-blade"></div>
      </div>
    </LdsSpinner>
  );
};
