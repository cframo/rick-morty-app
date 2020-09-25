import React, {Fragment, useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {GeneralCardLocationProps, ILocations, state} from "../../../../types";
import {emptyLocation} from "../../../../emptyObjects";
import DetailedCard from "../DetailedCard";


function Locations({locations, show, setShow}: GeneralCardLocationProps) {

    const [currentLocation, setCurrentLocation] = useState(emptyLocation);

    const handleShow = (location?: ILocations): void => {
        setCurrentLocation(location!);
        setShow(!show);
    }

    const renderModal = (): JSX.Element | null => {
        return show ? <DetailedCard type={'Location'} location={currentLocation} show={show} setShow={setShow}/> : null;
    }

    return (
        <>
            {locations.map((location: ILocations) =>
                <Fragment key={location.id}>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    {location.name}
                                    <h6 className="text-muted mt-1">{location.dimension}</h6>
                                </Card.Title>
                                <Button variant="primary" className="btn-block" onClick={() => handleShow(location)}>
                                    See details
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Fragment>
            )}
            {renderModal()}
        </>
    );
};


const mapState = (state: state) => {
    return {
        locations: state.locations.data,
    }
}

export default connect(mapState)(Locations);