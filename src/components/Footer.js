import styled from "styled-components";
import React from "react";

const FooterBlock = styled.footer`
  border-top: 1px solid #efefef;
  height: 400px;
  width: 100%;
  color: #171717;
  font-size: 14px;
  display: flex;
  padding-top: 40px;
`;
const FooterContainer = styled.div``;

const ContentsFooter = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Contents = styled.div``;

const TitleFooter = styled.div`
  font-weight: 700;
`;

function Footer() {
  return (
    <FooterBlock>
      <FooterContainer>
        <ContentsFooter>
          <TitleFooter>Creator </TitleFooter>
          <Contents>박진아 박찬진 전혜지 정서영</Contents>
        </ContentsFooter>
        <ContentsFooter>
          <TitleFooter>Describe</TitleFooter>
          <Contents>velog project forfsfs react study</Contents>
        </ContentsFooter>
      </FooterContainer>
    </FooterBlock>
  );
}

export default Footer;
