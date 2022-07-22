import styled from "styled-components"

export const DivHeader = styled.div`
    width: 328px;
    height: 230px;
    margin-bottom: 8px;
    object-fit: contain;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    img{
        width: 100%;
        height: 120px;
        border-radius: 8px 8px 0 0;
    }
    h2 {
        width: 296px;
        height: 18px;
        margin-top: 12px;
    }
    h4{
        height: 18px;
        margin-top: 8px;
    }
    h4:nth-child(4){ //pega o 4º h4 dentro da DivHeader
        height: 18px;
        margin-top: 10px;
    }
`

export const TextDiv = styled.div`
   width: 100%;
   height: 18px;
   display: flex;
   justify-content: space-between;
   align-items: center;
`