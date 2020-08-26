import React from "react";
import {
    Card,
    Row,
    Container
} from "react-bootstrap";
import {
    Switch,
    Route,
} from 'react-router-dom'
import {connect} from "react-redux";

import Anavbar from "./components/structure/Anavbar";
import CharactersPage from "./components/cards/charactersCards/GeneralCard";
import LocationsPage from "./components/cards/locationsCards/GeneralCard";
import EpisodesPage from "./components/cards/episodesCards/GeneralCard";
import Pages from "./components/structure/Pages";

function Main(props: any) {

    const {location} = props;
    const date = new Date().getDate() + '/'+ new Date().getMonth() +'/' + new Date().getFullYear();

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <header>
                    <Anavbar/>
                </header>

                <main className="">

                    <Card className="border-bottom-0" >
                        <Card.Header>
                            <h4 className="font-weight-bold">{location}</h4>
                        </Card.Header>
                        <Card.Body className="d-inline-flex mt-5 overflow-auto" >
                            <Container>
                                <Row>
                                    <Switch>
                                        <Route exact path="/" component={CharactersPage}/>
                                        <Route exact path="/locations" component={LocationsPage}/>
                                        <Route exact path="/episodes" component={EpisodesPage}/>
                                    </Switch>

                                </Row>
                            </Container>

                        </Card.Body>

                    </Card>
                </main>

                <section className="mt-auto">
                    <Pages/>
                    <footer className="footer p-2 bg-dark">
                        <section className="d-flex">
                            <div className="ml-2 mt-2">
                                <h5 className="text-light font-weight-light">Franklin Moreno</h5>
                            </div>
                            <div className="flex-fill mr-2 mt-2">
                                <h5 className="float-right text-light">{date}</h5>
                            </div>
                        </section>
                    </footer>
                </section>

            </div>

        </>
    )
}

const mapToState = (state:any) => {
    return{
        location: state.app.current
    }
}

export default connect(mapToState, null)(Main);
