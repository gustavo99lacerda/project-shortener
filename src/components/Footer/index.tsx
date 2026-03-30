import { useHooks } from "../../hook/useHooks";
import { BoxFooter } from "./styles";

export function Footer() {

  const { translation, mediaQuery } = useHooks()

  return (
    <BoxFooter mediaquery={mediaQuery}>
      {translation("footer.disclaimer")}
    </BoxFooter>
  )
}
export default Footer;
