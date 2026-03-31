import { Button } from '@material-ui/core'
import styled from 'styled-components'

export const Content = styled.div<{
  overflow?: string,
  flexdirection?: string,
  padding?: string,
  justifycontent?: string
}>`
  display: flex;
  flex-direction: ${props => props.flexdirection || 'column'};
  align-items: center;
  width: 100%;
  min-height: 100%; 
  background: #FFFFFF;
  overflow: ${props => props.overflow};
  padding: ${props => props.padding};
  justify-content: ${props => props.justifycontent};
`
export const StyledButton = styled(Button) <{
  textcolor?: string,
  bordercolor?: string,
  padding?: string,
  height?: string,
  width?: string,
  margin?: string,
  backgroundcolor?: string
}>`
  &.MuiButtonBase-root {
    color: ${props => props.textcolor || '#FFFFFF'};
    background-color: ${props => props.backgroundcolor || "#624DE3"};
    border: 1px solid ${props => props.bordercolor || "#624DE3"};
    text-transform: none;
    padding: ${props => props.padding || "16px 24px"};
    height: ${props => props.height || "40px"};
    width: ${props => props.width || "224px"};
    margin: ${props => props.margin};
    border-radius: 4px;
    justify-content: center;

    &.Mui-disabled {
    background-color: ${props => props.backgroundcolor || "#7361e9"};
    border: none;
    }
  }
`

