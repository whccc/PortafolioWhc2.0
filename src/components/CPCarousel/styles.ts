import styled, { keyframes } from 'styled-components'
import Carousel from 'react-bootstrap/Carousel'
import { fadeInDown } from 'react-animations'

const fadeInDownAnimation = keyframes`${fadeInDown}`

export const ContainerCarousel = styled.div`
  position: relative;
  height: 300px;

  @media (min-width: 1024px) {
    height: 600px;
  }
`
export const DivContainerCarousel = styled(Carousel)`
  position: relative;
  height: 300px;
  @media (min-width: 1024px) {
    height: 600px;
  }
`
export const DivContainerCarouselItem = styled(Carousel.Item)`
  height: 300px;
  @media (min-width: 1024px) {
    height: 600px;
  }
`

export const ImgCarouselItem = styled.img`
  width: 100%;
  height: 300px;
  @media (min-width: 1024px) {
    height: 600px;
  }
  object-fit: cover;
`
export const DivContainerOver = styled.div`
  position: absolute;
  z-index: 1;
  top: 0px;
  background: rgb(0, 0, 0, 0.5);

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivContainerOverData = styled.div`
  color: #fff;
  text-align: center;
  animation: 1s ${fadeInDownAnimation};
`
export const H1OverData = styled.h1`
  font-weight: 900;
  font-size: 25px;
  margin: 0px;
  @media (min-width: 1024px) {
    font-size: 50px;
  }
  text-shadow: 1px 1px 2px #000;
`
export const POverData = styled.p`
  margin: 0px;
  font-size: 28px;
  font-weight: 900;

  text-shadow: 1px 1px 2px #000;
`

export const ImgOverData = styled.img`
  width: 50px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 100%;
  margin: 5px;
  cursor: pointer;
  @media (min-width: 1024px) {
    width: 70px;
  }
`
