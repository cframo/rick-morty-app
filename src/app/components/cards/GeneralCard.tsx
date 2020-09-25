import React, {useState,} from "react";
import {connect} from "react-redux";
import {Col, Spinner} from "react-bootstrap";
import {GeneralCardProps, state} from "../../../types";
import Error from "../../pages/Error";
import Characters from "./generalCards/Characters";
import Episodes from "./generalCards/Episodes";
import Locations from "./generalCards/Locations";


function GeneralCard({type, characters, locations, episodes}: GeneralCardProps) {

    const [show, setShow] = useState(false);

    const renderCard = (): JSX.Element | undefined => {
        switch (type) {
            case 'Characters':
                return <Characters show={show} setShow={setShow}/>
            case 'Episodes':
                return <Episodes show={show} setShow={setShow}/>
            case 'Locations':
                return <Locations show={show} setShow={setShow}/>
        }
    }

    const spinner =
        <Col className="d-flex justify-content-center">
            <Spinner animation="border" role="status" className="text-center ">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </Col>;

    const loading = (): JSX.Element | undefined => {
        switch (type) {
            case 'Characters':
                return characters.loading ? spinner : undefined;
            case 'Episodes':
                return episodes.loading ? spinner : undefined;
            case 'Locations':
                return locations.loading ? spinner : undefined;
        }
    }

    const errors = () : JSX.Element | undefined => {
        switch (type) {
            case 'Characters':
                return characters.error ? <Error message={characters.error}/> : undefined;
            case 'Episodes':
                return episodes.error ? <Error message={episodes.error}/> : undefined;
            case 'Locations':
                return locations.error ? <Error message={locations.error}/> : undefined;
        }
    }



    return (
        <>
            {loading() ? loading() : errors() ? errors() : renderCard() }
        </>
    );
}

const mapToState = (state: state) => {
    return {
        characters: {
            loading: state.characters.fetching,
            error: state.characters.error,
        },
        episodes: {
            loading: state.episodes.fetching,
            error: state.episodes.error,
        },
        locations: {
            loading: state.locations.fetching,
            error: state.locations.error,
        }
    }
}

export default connect(mapToState)(GeneralCard);