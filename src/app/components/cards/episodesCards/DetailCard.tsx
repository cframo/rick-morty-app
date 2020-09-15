import React from "react";
import {
    Button,
    ListGroup,
    Modal,
    Card
} from "react-bootstrap";
import {DetaildCardEpisodesProps} from "../../../../types";

export default function DetailCard({show, handleShow, episode} : DetaildCardEpisodesProps) : JSX.Element {
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
                    <h4>{episode.name}</h4>
                    <ListGroup>
                        <ListGroup.Item>Release date: {episode.air_date} </ListGroup.Item>
                        <ListGroup.Item>Episode: {episode.episode} </ListGroup.Item>
                        <ListGroup.Item>
                            Characters:
                                <ListGroup>
                                    {episode.characters.slice(0, 5).map( character =>
                                        <ListGroup.Item>
                                            {character.name}
                                            <span className="float-right">
                                                <img src={character.image} width="45em" className="rounded-circle" alt={character.name}/>
                                            </span>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="btn-block" onClick={() => handleShow()}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}