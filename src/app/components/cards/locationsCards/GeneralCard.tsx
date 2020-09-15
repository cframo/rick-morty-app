import React, {
    useState,
    Fragment
} from 'react';
import {
    Button,
    Card,
    Col,
    Spinner
} from "react-bootstrap";
import {connect} from "react-redux";
import {
    GeneralCardLocationProps,
    ILocations,
    IResidents, state
} from "../../../../types";
import DetailCard from "../locationsCards/DetailCard";
import Error from "../../../pages/Error";


function GeneralCard({locations, loading, error}: GeneralCardLocationProps) {

    const [show, setShow] = useState(false);

    const emptyResidents: IResidents[] = [
        {
            name: ""
        }
    ]
    const emptyLocation: ILocations = {
        id: 1,
        name: "",
        type: "",
        dimension: "",
        residents: emptyResidents
    }
    const [currentLocation, setCurrentLocation] = useState(emptyLocation);


    //

    const handleShow = (location?: ILocations) : void =>  {
        setCurrentLocation(location!);
        setShow(!show);
    }

    const renderModal = () : JSX.Element => {
        if (!show)
            return <></>;
        return <DetailCard show={show} location={currentLocation} handleShow={handleShow}/>;
    }

    if (error)
        return <Error message={error}/>

    return (
        <>
            {loading ?
                <Col className="d-flex justify-content-center">
                    <Spinner animation="border" role="status" className="text-center ">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col>
                :
                <>
                    {locations.map( (location: ILocations) =>
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
            }
        </>
    );
};


const mapState = (state: state) => {
    return {
        locations: state.locations.data,
        loading: state.locations.fetching,
        error: state.locations.error
    }
}

export default connect(mapState)(GeneralCard);