import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
          <SectionTitle text="Languages"/>
        <div className="languages-info">
          <p>🇺🇸 EN - Fluente</p>
          <p>🇧🇷 PT-BR - Nativo</p>
        </div>
      </div>
    )
}