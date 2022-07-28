import styled from 'styled-components'

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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 43px 16px 21px 16px;
    h1{
        margin-bottom: 31px;
    }
`

export const ButtonCart =styled.button`
    border: none;
    color: #4a90e2;
    text-align: right;
    align-self: flex-end;
    background-color: transparent;
    margin: 7px 16px 16px;
`