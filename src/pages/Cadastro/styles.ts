import styled from 'styled-components'
import { Link, IconButton } from '@material-ui/core'

export const Title = styled.h2 <{mediaquery?: string}>`
  font-weight: 500;
  line-height: 22px;
  font-size: ${(props) => props.mediaquery === "true" ? "24px" : "18px"};
  text-align: center;
  color: #31363C;
  margin: ${(props) => props.mediaquery === "true" ? "59px 0px 31px 0px" : "32px 0px 24px 0px"};
`
export const Img = styled.img <{mediaquery?: string}> `
  height: ${props => props.mediaquery === "true" ? "375px" : "217px"};
  width: ${props => props.mediaquery === "true" ? "548px" : "290px"};
  height: ${props => props.mediaquery === "true" ? "absolute" : undefined};
`

export const TypographyStyled = styled.p <{mediaquery?: string}>`
  margin: ${(props) => props.mediaquery === "true" ? '16px' : "16px 0px 0px 0px"};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: #1F2933;
`

export const LinkStyled = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 125%;
  text-transform: none;
  color: #624DE3;
    &:hover{
      cursor: pointer;
      text-decoration: none;
    }
`

export const IconButtonStyled = styled(IconButton)`
  &.MuiIconButton-root{
    margin: 0 auto 120px 0;
    color: #545454;
    width: 24px;
    height: 24px;
  }

  p{
    font-size: 16px;
  }
`

