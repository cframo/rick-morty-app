import React from "react";
import {Card, ListGroup} from "react-bootstrap";
import {DetailedCharacterProps, ICharacter} from "../../../../types";

const Character = ({character}: DetailedCharacterProps): JSX.Element =>
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
export default Character;