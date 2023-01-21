import styled from 'styled-components'

export const DivContainer = styled.div`
    border: 1px solid #ddd;
    color: #fff;
    border-radius: 10px;
    overflow: hidden;
`

export const DivContainerImg = styled.div`
    overflow: hidden;
    height: 130px;
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const DivContainerData = styled.div`
    padding: 20px;
`

export const HTitleProject = styled.h4`
    border-bottom: 1px solid #ddd;
    display: -webkit-box;
    height: 40px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`
export const PDescriptionProject = styled.p`
    display: -webkit-box;
    height: 40px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
`

export const ButtonViewProject = styled.button`
    width: 100%;
    background-color: #000;
    color: #fff;
    border: none;
    padding: 10px;
`

export const WrapperModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    z-index: 1;
    & h1 {
        font-size: 30px;
    }
    & div.wrapper-modal-image {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        & img {
            width: 100%;
        }
    }
    & > div:nth-child(2) {
        overflow: auto;
        height: 95vh;
        background-color: #fff;
        border-radius: 20px;
        width: 90%;
        margin: auto;
        position: relative;
        top: 10px;

        padding: 20px;
    }

    & button {
        border-radius: 19px;
        background-color: #000;
        color: #fff;
        margin-right: 0px;
        font-size: 30px;
        position: absolute;
        top: 10px;
        right: 20px;
    }
`
