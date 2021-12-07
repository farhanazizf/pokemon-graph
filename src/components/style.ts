import { ChevronLeftOutlined } from "@mui/icons-material";
import styled from "@emotion/styled";
// import styled from "styled-components";
import { mqGreater } from "../utils/media";

const Styled = {
  MainContainer: styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `,
  MainWrapper: styled.div`
    // background: ${(props) => props.theme.colors["bg-pokemon-bug"]};
    width: 100%;
    padding-bottom: 56px;

    ${mqGreater["sm"]} {
      max-width: 34rem;
      position: relative;
      margin: 0 auto;
    }

    ${mqGreater["md"]} {
      max-width: 35rem;
      position: relative;
      margin: 0 auto;
    }
  `,
  IconChevron: styled(ChevronLeftOutlined)`
    &&& {
      z-index: 1;
      cursor: pointer;
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 32px;
      color: white;
    }
  `,
};

export default Styled;
