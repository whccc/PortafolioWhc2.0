import { useState } from 'react'
import {
    DivContainer,
    DivContainerImg,
    Img,
    DivContainerData,
    HTitleProject,
    ButtonViewProject,
    PDescriptionProject,
    WrapperModal
} from './styles'
const CPCardProject = ({
    Title,
    DescriptionShort,
    Imagen,
    Tecnologies,
    Description,
    ArrayLinks
}) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <>
            <DivContainer>
                <DivContainerImg>
                    <Img src={Imagen[0]} />
                </DivContainerImg>
                <DivContainerData>
                    <HTitleProject>{Title}</HTitleProject>
                    <p>{DescriptionShort}</p>
                    <PDescriptionProject>
                        <strong>Tecnologías:</strong> {Tecnologies}
                    </PDescriptionProject>
                    <ButtonViewProject onClick={() => setShowModal(true)}>
                        See more
                    </ButtonViewProject>
                </DivContainerData>
            </DivContainer>
            {showModal && (
                <WrapperModal>
                    <button onClick={() => setShowModal(false)}>X</button>

                    <div>
                        <div>
                            <h1>{Title}</h1>
                        </div>
                        <hr />
                        <div className="wrapper-modal-image">
                            {Imagen.map((image, i) => (
                                <img key={i} src={image} />
                            ))}
                        </div>
                        <hr />
                        <div>
                            <p>{Description}</p>
                            <hr />
                            <h1>Tecnologías</h1>
                            <p>{Tecnologies}</p>
                        </div>
                        <hr />
                        <div>
                            {ArrayLinks && <h1>Link(s)</h1>}
                            {ArrayLinks.map((link, i) => (
                                <span key={i}>
                                    <a
                                        style={{ display: 'block' }}
                                        href={link.Link}
                                        target="_blank"
                                    >
                                        {link.Title}
                                    </a>
                                </span>
                            ))}
                        </div>
                    </div>
                </WrapperModal>
            )}
        </>
    )
}

export default CPCardProject
