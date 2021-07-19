import React from "react";
import styled from "styled-components";

function LikeButton() {
  return (
    <>
      <ButtonWrapper>👍</ButtonWrapper>
    </>
  );
}

function ShareButton() {
  return (
    <>
      <ButtonWrapper>🔗</ButtonWrapper>
    </>
  );
}

function LeftsideUtil() {
  return (
    <>
      <LeftsideUtilWrapper>
        <div>
          <LikeButton />
          <ShareButton />
        </div>
      </LeftsideUtilWrapper>
    </>
  );
}

const LeftsideUtilWrapper = styled.div`
  background-color: #f8f9fa;
  width: 70px;
  align-items: center;
  padding: 20px 0;
  border-radius: 50px;
  height: 150px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.div`
  cursor: point;
  border: 1px solid black;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-size: 2em;
  cursor: pointer;
  width: 45px;
  height: 45px;
`;

const ShareButtonWrapper = styled.div``;
export default LeftsideUtil;
