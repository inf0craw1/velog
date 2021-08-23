import styled from "styled-components";
import colors from "../styles/colors";
import GlobalStyle from "../styles/GlobalStyle";

function Search() {
    return (
        <StyledSearchWrapper>
            <GlobalStyle />
            <StyledSearchBar placeholder="검색어를 입력하세요"></StyledSearchBar>
        </StyledSearchWrapper>
    );
}

const StyledSearchWrapper = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;

`;

const StyledSearchBar = styled.input`
    width: 80%;
    height: 60px;
    border: 1px solid ${colors.gray};
    font-size: 20px;

    margin-top: 80px;
    padding: 12px;

`;

export default Search;