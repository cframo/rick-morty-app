import React, {Fragment, useState} from "react";
import {connect} from "react-redux";
import {GeneralCardCharactersProps, ICharacter, state} from "../../../../types";
import {Button, Card, Col} from "react-bootstrap";
import {emptyCharacter} from "../../../../emptyObjects";
import DetailedCard from "../DetailedCard";


function Characters({show, setShow, characters}: GeneralCardCharactersProps): JSX.Element {

    const [currentCharacter, setCurrentCharacter] = useState(emptyCharacter);

    const renderModal = (): JSX.Element | null => {
        return show ?
            <DetailedCard type={'Character'} character={currentCharacter} show={show} setShow={setShow}/> : null;
    }

    const handleShow = (character?: ICharacter): void => {
        setCurrentCharacter(character!);
        setShow(!show);
    }

    return (
        <>
            {characters.map((character: ICharacter) =>
                <Fragment key={character.id}>
                    <Col xs={12} md={6} lg={4} xl={3} className="mb-4">
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
            )}
            {renderModal()}
        </>
    )
}

const mapToState = (state: state) => {
    return {
        characters: state.characters.data,
    }
}

export default connect(mapToState)(Characters);