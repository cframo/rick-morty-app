import React from "react";
import {
    Button,
    ListGroup,
    Modal,
    Card
} from "react-bootstrap";
import {DetailCardCharacterProps} from "../../../../types";

export default function DetailCard({show, handleShow, character} : DetailCardCharacterProps) : JSX.Element {
    return (
        <Modal
            show={show}
            onHide={() => handleShow}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Body>
                <Card className="border-0">
                    <Card.Img src={character.image}/>
                    <ListGroup>
                        <ListGroup.Item>Type: {character.type === "" ?
                            <span className="text-muted">Whoops, this {character.species} isn't special :( </span>
                            : character.type
                        }</ListGroup.Item>
                        <ListGroup.Item>Genre: {character.gender}</ListGroup.Item>
                        <ListGroup.Item>Species: {character.species}</ListGroup.Item>
                    </ListGroup>
                </Card>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="btn-block" onClick={() => handleShow()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}