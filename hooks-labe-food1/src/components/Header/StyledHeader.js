import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 360px;
  min-height: 64px;
  margin: 0 auto 16px;
  /* padding: 16px; */
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
  position: relative;
  h1 {
    /* width: 175px;
    height: 44px; */
    margin: 20px 92px 0 93px;
    padding: 13px 63.5px 12px;
    letter-spacing: -0.39px;
  }
`;

export const StyledButtonHeader = styled(IconButton)`
  /* width: 328px; */
  /* height: 42px; */
  /* padding: 12px 16px; */
  /* border-radius: 2px; */
  /* margin: 8px 16px 16px; */
  /* position: absolute;
    left: 0;
    bottom: 0; */
`;

export const ButtontDiv = styled.div`
  position: absolute;
  left: 15px;
  top: 12px;
`;
