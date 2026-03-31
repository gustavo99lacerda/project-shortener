import { ImagemDesktop } from '../../assets/ImagemDesktop';
import { ImagemMobile } from '../../assets/imagemMobile';
import Footer from '../../components/Footer';
import * as SG from '../../components/GlobalStyledComponent'
import { useHooks } from '../../hook/useHooks';
import * as S from './styles'


export function PaginaInicial() {
    const { mediaQuery, translation, history } = useHooks()

    const informacaoCard = [
        {
            texto: translation("tela_inicial.titulo1_card"),
            texto2: translation("tela_inicial.conteudo1_card"),
        },
        {
            texto: translation("tela_inicial.titulo2_card"),
            texto2: translation("tela_inicial.conteudo2_card"),
        },
        {
            texto: translation("tela_inicial.titulo3_card"),
            texto2: translation("tela_inicial.conteudo3_card"),
        },
        {
            texto: translation("tela_inicial.titulo4_card"),
            texto2: translation("tela_inicial.conteudo4_card"),
        }
    ]

    return (
        <SG.Content
            overflow="auto"
            flexdirection="column">
            <S.PrimeiroConteudo mediaquery={mediaQuery}>
                <S.Textos mediaquery={mediaQuery}>
                    <S.Titulo mediaquery={mediaQuery}>
                        {translation("tela_inicial.titulo_encurtar_links")}
                    </S.Titulo>
                    <S.Texto14 mediaquery={mediaQuery}>
                        {translation("tela_inicial.deixar_link_curto")}
                    </S.Texto14>
                    <SG.StyledButton
                        width={mediaQuery ==="true" ? "219px" : "193px"}
                        backgroundcolor='#624DE3'
                        margin={mediaQuery === "true" ? "36px 0px 0px 0px" : "30px auto 28px auto"}
                        onClick={() => { history.push("/publ/cadastro") }}>
                        {translation("tela_inicial.btn_criar_conta")}
                    </SG.StyledButton>
                </S.Textos>
                <S.Imagem>
                    {mediaQuery === "true" ? <ImagemDesktop /> : <ImagemMobile />}
                </S.Imagem>
            </S.PrimeiroConteudo>
            <S.SegundoConteudo>
                <S.TituloSegundoConteudo mediaquery={mediaQuery}>
                    {translation("tela_inicial.titulo_criar_conta")}
                </S.TituloSegundoConteudo>
                <S.ContainerCards mediaquery={mediaQuery}>
                    {informacaoCard.map((item, index) => (
                        <S.CardStyled mediaquery={mediaQuery} key={index} >
                            <S.CardInfo>
                                <S.TituloCard mediaquery={mediaQuery}>
                                    {item.texto}
                                </S.TituloCard>
                                <S.Descricao mediaquery={mediaQuery} >
                                    {item.texto2}
                                </S.Descricao>
                            </S.CardInfo>
                        </S.CardStyled>
                    ))}
                </S.ContainerCards>
                <SG.StyledButton
                    type="submit"
                    width='193px'
                    margin={mediaQuery === "true" ? "80px 0px 80px 0px" : "40px 0px 36px 0px"}
                    backgroundcolor='#624DE3'
                    onClick={() => { history.push("/publ/cadastro") }}>
                    {translation("tela_inicial.btn_criar_conta")}
                </SG.StyledButton>
            </S.SegundoConteudo>
            <Footer />
        </SG.Content >
    )
}

export default PaginaInicial
