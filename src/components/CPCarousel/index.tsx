import {
  ContainerCarousel,
  DivContainerOver,
  DivContainerCarousel,
  DivContainerCarouselItem,
  ImgCarouselItem,
  DivContainerOverData,
  POverData,
  H1OverData,
  ImgOverData,
} from "./styles";
const CPCarousel = () => {
  const onGithubLink = () => {
    window.open("https://github.com/whccc", "_blank");
  };

  const onLinkedin = () => {
    window.open(
      " https://www.linkedin.com/in/wilson-herney-castro-cabrera-73560a19a/",
      "_blank"
    );
  };

  return (
    <ContainerCarousel>
      <DivContainerCarousel controls={false} indicators={false}>
        <DivContainerCarouselItem>
          <ImgCarouselItem src="/images/landing.jpg" alt="First slide" />
        </DivContainerCarouselItem>
      </DivContainerCarousel>
      <DivContainerOver>
        <DivContainerOverData className="animate__animated animate__bounce">
          <H1OverData>Wilson Herney Castro Cabrera</H1OverData>
          <POverData>Full Stack Node.js</POverData>

          <POverData>
            <ImgOverData src="/images/github.png" onClick={onGithubLink} />

            <ImgOverData src="/images/linkedin.png" onClick={onLinkedin} />
          </POverData>
        </DivContainerOverData>
      </DivContainerOver>
    </ContainerCarousel>
  );
};

export default CPCarousel;
