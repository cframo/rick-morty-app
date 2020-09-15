import React, {
    useState,
    Fragment
} from 'react';
import {Button, Card, Col, Spinner} from "react-bootstrap";
import {connect} from "react-redux";
import {GeneralCardEpisodesProps, IEpisodes, IResidents, state} from "../../../../types";
import DetailCard from "../episodesCards/DetailCard";
import Error from "../../../pages/Error";

function GeneralCard({episodes, loading, error}: GeneralCardEpisodesProps) {

    const [show, setShow] = useState(false);
    const emptyCharacter: IResidents[] = [
        {
            name: "",
            image: ""
        }
    ]
    const emptyEpisode: IEpisodes = {
        id: 1,
        name: "",
        air_date: "",
        episode: "",
        characters: emptyCharacter
    }
    const [currentEpisode, setCurrentEpisode] = useState(emptyEpisode);

    //

    const handleShow = (episode?: IEpisodes) : void =>  {
        setCurrentEpisode(episode!);
        setShow(!show);
    }

    const renderModal = () : JSX.Element | null => {
        if (!show)
            return null;
        return <DetailCard show={show} episode={currentEpisode} handleShow={handleShow}/>;
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
                    {episodes.map((episode: IEpisodes) =>
                            <Fragment key={episode.id}>
                                <Col xs={12} sm={6} md={6} lg={4} xl={3} className="mb-4">
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="text-center">
                                                {episode.name}
                                                <h6 className="text-muted mt-1">{episode.air_date}</h6>
                                            </Card.Title>

                                            <Button variant="primary" className="btn-block"
                                                    onClick={() => handleShow(episode)}>
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
        episodes: state.episodes.data,
        loading: state.episodes.fetching,
        error: state.episodes.error
    }
}

export default connect(mapState, null)(GeneralCard);