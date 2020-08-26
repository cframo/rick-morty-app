import React, {
    useState,
    Fragment
} from "react";
import {connect} from "react-redux";
import {
    Button,
    Card,
    Col,
    Spinner
} from "react-bootstrap";
import {ICharacter} from "../../../../types";
import DetailCard from "./DetailCard";
import Error from "../../../pages/Error";

function GeneralCard(props:any) {

    const {
        characters,
        loading,
        error
    } = props;
    const [show, setShow] = useState(false);
    const emptyCharacter : ICharacter = {
        id: 1,
        name: "",
        type: "",
        species: "",
        gender: "",
        image: "",
    }
    const [currentCharacter, setCurrentCharacter] = useState(emptyCharacter);

    const handleShow = (character?: any) : void =>  {
        setCurrentCharacter(character!);
        setShow(!show);
    }

    const renderModal = () : JSX.Element => {
        if (!show)
            return <></>;
        return <DetailCard show={show} character={currentCharacter} handleShow={handleShow}/>;
    }
    if (error)
        return <Error message={error}/>
    return(
        <>
            {loading ?
                <Col className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" className="text-center ">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col>
                :
                <>
                    {characters.map((character: any) => {
                        return (
                            <Fragment key={character.id}>
                                <Col xs={12}  md={6} lg={4} xl={3} className="mb-4" >
                                    <Card>
                                        <Card.Img variant="top" src={character.image}/>
                                        <Card.Body>
                                            <Card.Title className="text-center">
                                                {character.name}
                                            </Card.Title>
                                            <Button variant="primary" className="btn-block"
                                                    onClick={() => handleShow(character)}>
                                                See details
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Fragment>
                        )
                    })}
                    {renderModal()}
                </>
            }
        </>
    );
}


const mapToState = (state:any) => {
    return{
        characters: state.characters.data,
        loading: state.characters.fetching,
        error: state.characters.error,
    }
}

export default connect(mapToState, null)(GeneralCard);