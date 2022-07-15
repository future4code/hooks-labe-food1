import styled from "styled-components";
import IconButton from '@mui/material/IconButton';

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 64px;
    margin: 0 auto;
    border-bottom: 1px solid black;
    justify-content: space-around;
    align-items:center;
    /* position: relative; */
    /* h1{
        justify-self: center;
    } */
`

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