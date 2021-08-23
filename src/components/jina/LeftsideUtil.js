import React, { useState } from "react";
import styled, { css } from "styled-components";
import colors from "../../styles/colors";

function LikeButton({ active }) {
  let className = "heart";
  if (active) {
    className = "heart-active";
  }
  return (
    <>
      <ButtonWrapper active={active}>
        <div className={className}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            viewBox="0 0 247.119 216.229"
          >
            <path
              id="Icon_awesome-heart"
              data-name="Icon awesome-heart"
              d="M223.132,17.033C196.683-5.507,157.348-1.453,133.071,23.6l-9.508,9.8-9.508-9.8C89.825-1.453,50.442-5.507,23.993,17.033c-30.31,25.87-31.9,72.3-4.778,100.342l93.392,96.433a15.131,15.131,0,0,0,21.864,0l93.392-96.433c27.173-28.042,25.58-74.472-4.73-100.342Z"
              transform="translate(0.001 -2.248)"
            />
          </svg>
        </div>
      </ButtonWrapper>
    </>
  );
}
function ShareButton({ active }) {
  const [linkCopy, setLinkCopy] = useState(false);

  return (
    <>
      <ButtonWrapper>
        <div className="share">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            viewBox="0 0 194.142 221.877"
          >
            <path
              id="Icon_awesome-share-alt"
              data-name="Icon awesome-share-alt"
              d="M152.54,138.673a41.422,41.422,0,0,0-25.91,9.055L82.217,119.97a41.84,41.84,0,0,0,0-18.063L126.63,74.148a41.527,41.527,0,1,0-14.705-23.515L67.512,78.391a41.6,41.6,0,1,0,0,65.094l44.413,27.758a41.605,41.605,0,1,0,40.616-32.57Z"
            />
          </svg>
        </div>
      </ButtonWrapper>
      {active && (
        <ShareButtonWrapper>
          <ButtonWrapper onClick={() => console.log("hi")}>
            링크복사
          </ButtonWrapper>
          <ButtonWrapper>페이스북 공유</ButtonWrapper>
          <ButtonWrapper>트위터 공유</ButtonWrapper>
        </ShareButtonWrapper>
      )}
      <ToastmessageWrapper>링크가 복사되었습니다.</ToastmessageWrapper>
    </>
  );
}

function LeftsideUtil() {
  const [like, setLike] = useState(false);
  const onClick = () => {
    console.log("click");
    setLike(!like);
  };
  const [share, setShare] = useState(false);
  const onShare = () => {
    setShare(!share);
  };

  return (
    <>
      <LeftsideUtilWrapper>
        <div>
          <div onClick={onClick}>
            <LikeButton active={like} />
          </div>
          <div onClick={onShare}>
            <ShareButton active={share} />
          </div>
        </div>
      </LeftsideUtilWrapper>
    </>
  );
}

//hover에서 버튼 보더랑 하트랑 공유 색 따로 놀음
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
  font-size: 3px;

  :hover {
    border: 1px solid ${colors.dark_gray};
  }
  cursor: point;
  border: 1px solid ${colors.gray};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  ${(props) =>
    props.active &&
    css`
      background-color: ${colors.green};
    `}

  .heart {
    fill: ${colors.gray};
    &-active {
      fill: white;
    }
    :hover {
      fill: ${colors.dark_gray};
    }
  }

  .share {
    fill: ${colors.gray};
    :hover {
      fill: ${colors.dark_gray};
    }
  }
`;

const ShareButtonWrapper = styled.div`
  position: absolute;
  left: 80px;
  top: 20px;
`;

const ToastmessageWrapper = styled.div`
  position: fixed;
  z-index: 999;
  background-color: ${colors.green};
  width: 200px;
  height: 60px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 40px;
  margin-top: -160px;
`;
export default LeftsideUtil;
