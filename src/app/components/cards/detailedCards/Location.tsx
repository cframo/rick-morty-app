import React from "react";
import {DetailedLocationProps} from "../../../../types";
import {Card, ListGroup} from "react-bootstrap";

const Location = ({location}: DetailedLocationProps): JSX.Element =>
    <Card className="border-0">
        <h4>{location.name}</h4>
        <ListGroup>
            <ListGroup.Item>Type: {location.type} </ListGroup.Item>
            <ListGroup.Item>Dimension: {location.dimension} </ListGroup.Item>
            <ListGroup.Item>
                Residents:
                {location.residents.length > 0 && location.residents[0].name != null ?
                    <ListGroup>
                        {location.residents.slice(0, 5).map(resident =>
                            <ListGroup.Item key={resident.id}>
                                {resident.name}
                                <span className="float-right">
                                                <img src={resident.image} width="45em" className="rounded-circle"
                                                     alt={resident.name}/>
                                            </span>
                            </ListGroup.Item>
                        )}
                    </ListGroup> :
                    <span className="text-muted"> Whoops, there's no residents in {location.name} :(</span>
                }

            </ListGroup.Item>
        </ListGroup>
    </Card>
export default Location;