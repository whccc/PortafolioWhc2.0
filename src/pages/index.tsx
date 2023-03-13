import CPCarousel from "../components/CPCarousel";
import CPSkills from "../components/CPSkills";
import CPCardProject from "../components/CPCardProject";
import {
  DivContainer,
  DivContainerSkills,
  DivContainerProjectsWeb,
  DivContainerHome,
  DivContainerProject,
  ImgCertificate,
} from "../stylespages/HomePageStyles";
import useProjects from "../hooks/useProjects";
import useCertificates from "../hooks/useCertificates";
import { useEffect } from "react";
import { H1DataInfo } from "../components/CPSkills/styles";

const HomePage = () => {
  const {
    JsonProjectsWeb,
    JsonProjectsMovil,
    GetHookProjectsWeb,
    GetHookProjectsMovil,
  } = useProjects();
  const { JsonCertificates, GetHookCertificates } = useCertificates();

  useEffect(() => {
    DataInitial();
  }, []);
  const DataInitial = async () => {
    await GetHookProjectsWeb();
    await GetHookProjectsMovil();
    await GetHookCertificates();
  };
  return (
    <DivContainer>
      <CPCarousel />
      <DivContainerHome>
        <DivContainerSkills>
          <CPSkills />
        </DivContainerSkills>
        <hr style={{ background: "#fff" }} />
        <DivContainerProject>
          <H1DataInfo>Proyectos</H1DataInfo>
          <DivContainerProjectsWeb>
            {JsonProjectsWeb.map((DataItem) => {
              if (!DataItem.show) {
                return null;
              }
              return (
                <div>
                  <CPCardProject {...DataItem} />
                </div>
              );
            })}
          </DivContainerProjectsWeb>
          <hr style={{ background: "#fff" }} />
          <H1DataInfo>Movil - React Native</H1DataInfo>

          <DivContainerProjectsWeb>
            {JsonProjectsMovil.map((DataItem) => {
              if (!DataItem.show) {
                return null;
              }
              return (
                <div>
                  <CPCardProject {...DataItem} />
                </div>
              );
            })}
          </DivContainerProjectsWeb>
        </DivContainerProject>

        <hr style={{ background: "#fff" }} />
        <div>
          <H1DataInfo>Certificados</H1DataInfo>
          {JsonCertificates.map((DataCertificate) => {
            return <ImgCertificate src={DataCertificate.Certificate} />;
          })}
        </div>
      </DivContainerHome>
    </DivContainer>
  );
};

export default HomePage;
