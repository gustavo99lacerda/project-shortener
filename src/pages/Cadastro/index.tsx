import * as SG from '../../components/GlobalStyledComponent'
import * as S from './styles'
import { useHooks } from '../../hook/useHooks';
import { NavigateBefore } from '@material-ui/icons';
import ImagemCadastro from '../../assets/imagemCadastro.svg';

export function Cadastro() {

  const { mediaQuery, translation, history } = useHooks()

  return (
    <SG.Content flexdirection={mediaQuery === "true" ? "row" : "column"}>
      <SG.Content flexdirection={mediaQuery === "true" ? "row" : "column-reverse"}>
        <SG.Content
          padding={mediaQuery === "true" ? "72px 0 0px 168px" : "0px"}
          justifycontent="flex-start">
          {mediaQuery === "true" ? (
            <S.IconButtonStyled onClick={() => history.push("/")}>
              <NavigateBefore />
            </S.IconButtonStyled>) : null}
          <S.Title mediaquery={mediaQuery}>
            {translation("tela_cadastro.titulo")}
          </S.Title>
          <S.TypographyStyled mediaquery={mediaQuery} >
            {translation("tela_cadastro.ja_possui_conta")}
            <S.LinkStyled href="/publ/login">
              {translation("tela_cadastro.entre")}
            </S.LinkStyled>
          </S.TypographyStyled>
        </SG.Content>
        <SG.Content padding={mediaQuery === "true" ? "0px 167px 0px 0" : "102px 0px 0px 0px"} justifycontent="center">
          <S.Img src={ImagemCadastro} alt="Imagem ilustrativa" mediaquery={mediaQuery} />
        </SG.Content>
      </SG.Content>
    </SG.Content>
  )
}
export default Cadastro


