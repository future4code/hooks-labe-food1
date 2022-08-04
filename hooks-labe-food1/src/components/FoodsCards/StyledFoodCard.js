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
    position: relative;

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

export const ButtonFood = styled.button`
    width: 90px;
    height: 31px;
    border-radius: 8px 0 8px 0;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: transparent;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
`

export const ButtonQuantity = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 0 8px 0 8px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: transparent;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
`

export const Boxstyle =styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 328px;
    height: 216px;
    background-color: white;
    border: 2px solid #000;
    box-shadow: 24;
    /* p: 4; */
`