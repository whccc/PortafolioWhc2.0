import {
    DivContainerSkills,
    DivContainerDataInfo,
    DivDataInfo,
    H1DataInfo,
    PDataInfo,
    DivContainerSkill,
    DivContainerSkillFrontend,
    DivContainerFrontend,
    ImgSkill,
    H2Title
} from './styles'
const CPSkils = () => {
    return (
        <DivContainerSkills>
            <H1DataInfo>Información</H1DataInfo>
            <DivContainerDataInfo>
                <DivDataInfo>
                    <PDataInfo>Information Systems Technologist</PDataInfo>
                    <PDataInfo>Medellín-Colombia</PDataInfo>
                    <PDataInfo>wilsoncastro0710@gmail.com</PDataInfo>
                </DivDataInfo>
                <p>
                    Soy una persona responsable, creativa, con iniciativa y
                    puntualidad, asumo con agrado los retos y metas; con buen
                    manejo de relaciones interpersonales, facilidad para
                    trabajar en equipo, en condiciones de alta presión, así como
                    para resolver problemas eficientemente. Amante a la
                    programación y muy autodidacta.
                </p>
            </DivContainerDataInfo>
            <br />
            <div>
                <H1DataInfo>Habilidades</H1DataInfo>
                <DivContainerSkill>
                    <DivContainerFrontend>
                        <H2Title>Frontend</H2Title>
                        <DivContainerSkillFrontend>
                            <ImgSkill src="/images/ImgFrontendHtml.jpg" />
                            <ImgSkill src="/images/ImgFrontendJs.jpg" />
                            <ImgSkill src="/images/ImgFrontendCss.jpg" />
                            <ImgSkill src="/images/ImgFrontendReact.jpg" />
                            <ImgSkill src="/images/ImgFrontendNextJs.jpg" />
                            <ImgSkill src="/images/ImgFrontendAngular.jpg" />
                        </DivContainerSkillFrontend>
                    </DivContainerFrontend>

                    <DivContainerFrontend>
                        <H2Title>Backend</H2Title>
                        <DivContainerSkillFrontend>
                            <ImgSkill src="/images/ImgBackendNode.jpg" />
                            <ImgSkill src="/images/ImgBackendExpress.jpg" />
                            <ImgSkill src="/images/ImgBackendAdonis.jpg" />
                            <ImgSkill src="/images/Nestjs.png" />
                        </DivContainerSkillFrontend>
                    </DivContainerFrontend>

                    <DivContainerFrontend>
                        <H2Title>Database</H2Title>
                        <DivContainerSkillFrontend>
                            <ImgSkill src="/images/ImgSqlMysql.jpg" />
                            <ImgSkill src="/images/ImgSqlSqlServer.jpg" />
                            <ImgSkill src="/images/ImgSqlMongoDb.jpg" />
                            <ImgSkill src="/images/PostgreSQL.png" />
                        </DivContainerSkillFrontend>
                    </DivContainerFrontend>
                </DivContainerSkill>
            </div>
        </DivContainerSkills>
    )
}

export default CPSkils
