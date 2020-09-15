import React from "react";
import {
    Button,
    ListGroup,
    Modal,
    Card
} from "react-bootstrap";
import {DetailCardLocationsProps} from "../../../../types";

export default function DetailCard({show, handleShow, location} : DetailCardLocationsProps) : JSX.Element {
    return (
        <Modal
            show={show}
            onHide={() => handleShow()}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Body>
                <Card className="border-0">
                    <h4>{location.name}</h4>
                    <ListGroup>
                        <ListGroup.Item>Type: {location.type} </ListGroup.Item>
                        <ListGroup.Item>Dimension: {location.dimension} </ListGroup.Item>
                        <ListGroup.Item>
                            Residents:
                            {location.residents.length > 0 && location.residents[0].name != null ?
                                <ListGroup>
                                    {location.residents.slice(0, 5).map( resident =>
                                        <ListGroup.Item>
                                            {resident.name}
                                            <span className="float-right">
                                                <img src={resident.image} width="45em" className="rounded-circle" alt={resident.name}/>
                                            </span>
                                        </ListGroup.Item>
                                    )}
                                </ListGroup> :
                                <span className="text-muted"> Whoops, there's no residents in {location.name} :(</span>
                            }

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