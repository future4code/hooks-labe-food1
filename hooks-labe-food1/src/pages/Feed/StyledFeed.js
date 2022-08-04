import styled from "styled-components"

export const DivCategory = styled.div`
    width: 100%;
    height: 42px;
    padding: 12px 0 12px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;

    button{
        margin: 0 8px;
        background-color: transparent;
        border: none;


    &:focus{
        color: rgb(232, 110, 90);
    }
        /* h1:focus{
            color: rgb(232, 110, 90);
            background-color: pink;
        } */
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
    display: none;
    }

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media screen and (min-device-width: 1200px){ //deixar scroollbar aparente para computador
    overflow-x: scroll;
  }

`