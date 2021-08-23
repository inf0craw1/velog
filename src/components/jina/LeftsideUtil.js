import { CopyToClipboard } from "react-copy-to-clipboard";
import React, { useState, useEffect, useRef } from "react";
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
  const url = window.location.href;
  const toastMessageBox = useRef();
  const [linkCopy, setLinkCopy] = useState(false);
  const onClick = () => {
    setLinkCopy(!linkCopy);
  };
  useEffect(() => {
    if (linkCopy) {
      toastMessageBox.current.style.display = "flex";
      setTimeout(() => {
        toastMessageBox.current.style.display = "none";
      }, 3000);
    }
  }, [linkCopy]);

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
          <CopyToClipboard text={url}>
            <ButtonWrapper onClick={onClick}>
              <div className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  viewBox="0 0 107.75 123.143"
                >
                  <path
                    id="Icon_awesome-paperclip"
                    data-name="Icon awesome-paperclip"
                    d="M10.4,112.113c-14.053-14.5-13.791-37.883.333-52.331l50.45-51.6a26.915,26.915,0,0,1,38.643,0,28,28,0,0,1,0,39.029L55.85,92.147a17.945,17.945,0,0,1-25.971-.24,18.64,18.64,0,0,1,.349-25.724L64.8,30.868a3.848,3.848,0,0,1,5.442-.058l5.5,5.382a3.848,3.848,0,0,1,.058,5.442L41.23,76.947a3.253,3.253,0,0,0-.156,4.4,2.564,2.564,0,0,0,3.773.04l43.978-44.94a12.6,12.6,0,0,0,0-17.509,11.535,11.535,0,0,0-16.632,0l-50.45,51.6a22.274,22.274,0,0,0-.286,30.861,20.512,20.512,0,0,0,29.6.069l41.383-42.33a3.848,3.848,0,0,1,5.442-.062l5.5,5.379a3.848,3.848,0,0,1,.062,5.442L62.056,112.23a35.887,35.887,0,0,1-51.655-.117Z"
                    transform="translate(0 0)"
                  />
                </svg>
              </div>
            </ButtonWrapper>
          </CopyToClipboard>
          <ButtonWrapper>
            <div className="facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </div>
          </ButtonWrapper>
          <ButtonWrapper>
            <div className="twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
          </ButtonWrapper>
        </ShareButtonWrapper>
      )}
      <ToastmessageWrapper ref={toastMessageBox}>
        링크가 복사되었습니다.
      </ToastmessageWrapper>
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

  .link {
    fill: ${colors.gray};
    :hover {
      fill: ${colors.dark_gray};
    }
  }
  .twitter {
    fill: ${colors.gray};
    :hover {
      fill: ${colors.dark_gray};
    }
  }
  .facebook {
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
  display: none;

  position: fixed;
  z-index: 999;
  background-color: ${colors.green};
  width: 200px;
  height: 60px;
  color: white;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  right: 40px;
  margin-top: -160px;
  /* animation: MoveUpDown 1s linear;
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
  } */
`;
export default LeftsideUtil;
