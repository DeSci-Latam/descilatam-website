---
import HeaderLink from "./HeaderLink.astro";
import LangLink from "./LangLink.astro";
import { Button} from "@/components/ui/button"
const { lang2 } = Astro.props; 
import { getLangFromUrl, useTranslations } from "../i18n/utils";
 const lang = getLangFromUrl(Astro.url); 

const t = useTranslations(lang);
---

export function LangSelect() {
  return (
    <div>
    <Button variant="outline" size="icon">
    <LangLink language="en" isActive={lang2 == "en"} />
      
    </Button>
    <Button variant="outline" size="icon">
    <LangLink language="es" isActive={lang2 == "es"} />
    
    </Button>
    <Button variant="outline" size="icon">
    <LangLink language="pt" isActive={lang2 == "pt"} />
    </Button>
    </div>
  )
}


