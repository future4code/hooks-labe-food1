import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 360px;
  height: 64px;
  margin: 0 auto 16px;
  border-bottom: 1px solid black;
  justify-content:space-between;
  align-items: center;
  /* position: relative; */
  /* h1{
        justify-self: center;
    } */
`;

export const StyledButtonHeader = styled(IconButton)`
  /* width: 328px; */
  /* height: 42px; */
  /* padding: 12px 16px; */
  /* border-radius: 2px; */
  /* margin: 8px 16px 16px; */
  /* position: absolute;
    left: 16px;
    bottom: 10px; */
`;

export const ContainerDiv = styled.div`
  width: 358px;
  height: 64px;
  margin: 0 0 16px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
export const TextDiv = styled.div`
  width: 175px;
  height: 44px;
  margin: 20px 92px 0 93px;
  padding: 13px 53.5px 12px;
`;
