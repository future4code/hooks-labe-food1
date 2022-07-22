import styled from "styled-components"

export const DivCard = styled.div`
    width: 328px;
    height: 112px;
    margin-top: 8px;
    border: 1px solid #b8b8b8;
    border-radius: 9px;
    object-fit: cover;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;

    img{
        width: 97px;
        height: 112px;
        margin-right: 16px;
        border-radius: 8px 0 0 8px;
    }
`

export const DivInfo = styled.div`
    width: 231px;
    height: 112px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h2{
        height: 18px;
        margin-bottom: 6px;
    }
    h4{
        font-size: 14px;
    }
    h1{
        height: 18px;
        margin-top: 6px;
    }
`