import styled from 'styled-components'
import { Card } from '@material-ui/core';

export const Textos = styled.div <{ mediaquery?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  margin: ${props => (props.mediaquery === "true" ? "0px" : "0px 37px 24px 37px")};
  width: ${props => (props.mediaquery === "true" ? "533px" : "fit-content")};
`

export const Titulo = styled.h1 <{ mediaquery?: string }>`
  margin: ${props => (props.mediaquery === "true" ? "0px 0px 16px 0px" : "64px 0px 24px 0px")};
  font-style: normal;
  font-weight: 600;
  font-size: ${props => (props.mediaquery === "true" ? "32px" : "18px")};
  line-height: ${props => (props.mediaquery === "true" ? "50px" : "22px")};
  width: 90%;
  color: #1F2933;
`
export const Texto14 = styled.h5<{ mediaquery?: string }>`
  font-size: ${props => props.mediaquery === "true" ? "20px" : "14px"};
  color: #35424F;
  font-weight: 500;
  text-align: left;
  width: 90%;
`
export const Imagem = styled.div`
  margin: 32px 0px 40px 0px;
  min-width: 264px;
  min-height: 240px;
`
export const ContainerCards = styled.div<{ mediaquery?: string }>`
  display: grid;
  grid-template-columns: ${props => (props.mediaquery === "true" ? "auto auto" : "auto")};
  width: 100%;
  justify-content: center;
  padding: ${props => (props.mediaquery === "true" ? "0px" : "0px")};
  gap: 30px;
`
export const CardStyled = styled(Card) <{ mediaquery?: string }>`
  &.MuiCard-root {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: ${props => (props.mediaquery === "true" ? "592px" : "312px")};
    min-height: ${props => (props.mediaquery === "true" ? "184px" : "136px")};
    border-radius: 8px;
    border: 1px solid rgba(13, 71, 161, 0.18);
    box-shadow: none;
    padding: ${props => (props.mediaquery === "true" ? "16px 18px 16px 16px" : "16px 12px 16px 16px")};
  }
`

export const TituloCard = styled.p <{ mediaquery?: string }>`
  font-size: ${props => (props.mediaquery === "true" ? "20px" : "14px")};
  font-weight: ${props => (props.mediaquery === "true" ? "600" : "500")};
    color: #31363C;
    font-style: normal;
    line-height: 140%;
`;

export const Descricao = styled.span<{ mediaquery?: string }>`
  font-size: ${props => (props.mediaquery === "true" ? "18px" : "12px")};
  font-weight: 500;
  font-style: normal;
  line-height: 140%;
  color: #595959;
`
export const Icon = styled.div`
  display: flex;
  flex-direction: row;
  margin: "30px 24px 0px 24px";
`
export const CardInfo = styled.div`
    margin: 0px 0px 0px 40px;
    display: flex;
    flex-direction: column;
`
export const PrimeiroConteudo = styled.div <{ mediaquery?: string }>`
  display: flex;
  flex-direction:  ${props => (props.mediaquery === "true" ? "row" : "column")};
  justify-content: center;
  align-items: center;
  padding: 76px auto 56px auto;
  background-color: #E5E5E559;
  width: 100%;
`
export const SegundoConteudo = styled.div <{ mediaquery?: string }>`
 display: flex;
  flex-direction:  column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 100%;
`
export const TituloSegundoConteudo = styled.span<{ mediaquery?: string }>`
  color: #1F2933;
  text-align: center;
  font-weight: 600;
  line-height: 140%;
  font-size: ${props => (props.mediaquery === "true" ? "24px" : "16px")};
  margin: ${props => (props.mediaquery === "true" ? "56px 0px 56px 0px" : "32px 0px 24px 0px")};
`
