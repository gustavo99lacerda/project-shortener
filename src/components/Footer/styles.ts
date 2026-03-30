import styled from 'styled-components'

export const BoxFooter = styled.footer<{mediaquery?: string}>`
    background-color: #624DE3;
    font-size: ${props => props.mediaquery === "true" ? "16px" : "12px"};
    min-height: ${props => props.mediaquery === "true" ? "84px" : "54px"};
    text-align: center;
    width: 100%;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #fff;
    font-style: normal;
    line-height: 16px;
    margin: auto 0 0 0;
    span{
      font-size: 18px;
      margin: 0px 4px;
    }
`
