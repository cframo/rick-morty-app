import React, {Fragment, useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";
import {connect} from "react-redux";
import {GeneralCardEpisodesProps, IEpisodes, state} from "../../../../types";
import {emptyEpisode} from "../../../../emptyObjects";
import DetailedCard from "../DetailedCard";

function Episodes({episodes, show, setShow}: GeneralCardEpisodesProps) {

    const [currentEpisode, setCurrentEpisode] = useState(emptyEpisode);

    const handleShow = (episode?: IEpisodes): void => {
        setCurrentEpisode(episode!);
        setShow(!show);
    }

    const renderModal = (): JSX.Element | null => {
        return show ? <DetailedCard type={'Episode'} episode={currentEpisode} show={show} setShow={setShow}/> : null;
    }

    return (
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
    );
}

const mapState = (state: state) => {
    return {
        episodes: state.episodes.data
    }
}

export default connect(mapState)(Episodes);