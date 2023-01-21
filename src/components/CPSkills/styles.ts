import styled from 'styled-components'

export const DivContainerSkills = styled.div`
    margin-top: 10px;
`

export const DivContainerDataInfo = styled.div`
    padding: 10px;
    text-align: center;
    color: #fff;
    border-radius: 10px;
`

export const DivDataInfo = styled.div`
    text-align: center !important;
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
        margin: 5px;
        border-bottom: 1px solid #ddd;

        & p:nth-child(2) {
            &::before {
                content: '|';
                margin-right: 10px;
                height: 20px;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
            }
            &::after {
                content: '|';
                margin-left: 10px;
                height: 20px;
                overflow: hidden;
                display: inline-block;
                vertical-align: middle;
            }
        }
    }
`

export const H1DataInfo = styled.h2`
    text-align: center;
    color: #fff;
    font-weight: 900;
`

export const PDataInfo = styled.p`
    margin: 0px;
    line-height: 18px;
    @media (min-width: 1024px) {
        margin-right: 10px;
        font-size: 20px;
    }
`

export const DivContainerSkill = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-gap: 10px;
`

export const DivContainerSkillFrontend = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 10px;
`
export const DivContainerFrontend = styled.div`
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;

    background-color: #000;
`
export const H2Title = styled.h3`
    background-color: #000;
    color: #fff;
    padding: 10px;
    border-bottom: 1px solid #000;
    text-align: center;
`
export const ImgSkill = styled.img`
    width: 100%;
    height: 100%;
    background-color: #fff;
`
