import SectionTitle from "./SectionTitle";

const Section = ({titulo, descripcion, children}) => {

    return (
        <>
            <SectionTitle titulo={titulo}></SectionTitle>
            <p>{descripcion}</p>
            {children}
        </>
    )
}

export default Section;