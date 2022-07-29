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
  border-bottom: 1px solid black;
  position: relative;
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
