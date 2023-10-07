import React from "react";
import usePxToRem from "./hooks/usePxToRem";

export default function CustomHook() {
  return (
    <div>
      <div style={{ fontSize: "16px" }}>16px 은 ?</div>
      <div style={{ fontSize: `${usePxToRem(16)}rem` }}>
        {usePxToRem(16)}rem 입니다.
      </div>

      <br />
      <div style={{ fontSize: "32px" }}>32px 은 ?</div>
      <div style={{ fontSize: `${usePxToRem(32)}rem` }}>
        {usePxToRem(32)}rem 입니다.
      </div>

      <br />
      <div style={{ fontSize: "40px" }}>40px 은 ?</div>
      <div style={{ fontSize: `${usePxToRem(40)}rem` }}>
        {usePxToRem(40)}rem 입니다.
      </div>
    </div>
  );
}
