import React from "react";
import {DetailedEPisodeProps} from "../../../../types";
import {Card, ListGroup} from "react-bootstrap";

const Episode = ({episode}: DetailedEPisodeProps): JSX.Element =>
    <Card className="border-0">
        <h4>{episode.name}</h4>
        <ListGroup>
            <ListGroup.Item>Release date: {episode.air_date} </ListGroup.Item>
            <ListGroup.Item>Episode: {episode.episode} </ListGroup.Item>
            <ListGroup.Item>
                Characters:
                <ListGroup>
                    {episode.characters.slice(0, 5).map(character =>
                        <ListGroup.Item key={character.id}>
                            {character.name}
                            <span className="float-right">
                                <img src={character.image} width="45em" className="rounded-circle"
                                     alt={character.name}/>
                            </span>
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </ListGroup.Item>
        </ListGroup>
    </Card>
export default Episode;