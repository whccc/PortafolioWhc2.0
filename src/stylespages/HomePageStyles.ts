import styled from 'styled-components'

export const DivContainer = styled.div``
export const DivContainerHome = styled.div`
    max-width: 1024px;
    margin: auto;
`
export const DivContainerSkills = styled.div`
    margin-bottom: 40px;
`
export const DivContainerProject = styled.div`
    margin-bottom: 40px;
`
export const DivContainerProjectsWeb = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`

export const DivContainerProjectsMovil = styled.div`
    background-color: #fff;
    margin-top: 50px;
    text-align: center;
    box-shadow: 0 10px 30px -8px rgb(0 0 0 / 10%);
    .slick-prev::before {
        color: #000;
        font-size: 40px;
    }
    .slick-next {
        &::before {
            color: #000;
            font-size: 40px;
        }
        right: 0px;
    }

    .slick-list {
        width: calc(100% - 40px);
        margin: auto;
    }
    .slick-dots {
        position: relative;
        & li {
            width: 30px;
            & button {
                width: 30px;
                height: 40px;
                position: relative;
            }
            & button::before {
                font-size: 30px;
                width: 30px;
                height: 40px;
            }
        }
    }

    @media (min-width: 1024px) {
        padding: 30px;
    }
`

export const ImgCertificate = styled.img`
    width: 50%;
`
