import React from "react";
import {Button, Modal} from "react-bootstrap";
import {DetailedCardProps} from "../../../types";
import Character from "./detailedCards/Character";
import Episode from "./detailedCards/Episode";
import Location from "./detailedCards/Location";

export default function DetailedCard({type, show, setShow, character, location, episode}: DetailedCardProps): JSX.Element {

    const CHARACTER = 'Character';
    const EPISODE = 'Episode';
    const LOCATION = 'Location';

    const renderCard = (): JSX.Element | undefined => {
        switch (type) {
            case CHARACTER:
                return <Character character={character!}/>
            case EPISODE:
                return <Episode episode={episode!}/>
            case LOCATION:
                return <Location location={location!}/>
        }
    }

    return (
        <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} centered>
            <Modal.Body>
                {renderCard()}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" className="btn-block"
                        onClick={() => setShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}