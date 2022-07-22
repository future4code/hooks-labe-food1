import styled from "styled-components"

export const DivContainer = styled.div`
    width: 328px;
    height: fit-content;
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
`

export const DivCategory = styled.div`
    width: 328px;
    height: 26px;
    border-bottom: 1px solid black;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: flex-start;
`

export const DivRender = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    overflow-y: scroll;
`