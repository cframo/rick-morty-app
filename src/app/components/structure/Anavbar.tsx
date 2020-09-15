import React, {useState} from "react";
import {Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Form, Navbar} from "react-bootstrap";
import logo from "../../images/rm.png";
import text from "../../images/text.png";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setLocationAction} from "../../redux/appDuck";
import {searchCharacterAction } from "../../redux/charactersDuck";
import {searchLocationAction} from "../../redux/locationsDuck";
import {searchEpisodeAction} from "../../redux/episodesDuck";


function Anavbar(props: any): JSX.Element {

    const {
        setLocationAction,
        location,
        searchCharacterAction,
        searchLocationAction,
        searchEpisodeAction,
    } = props;
    const [keySearch, setKeySearch] = useState<string>("");
    const [type, setType] = useState<boolean>(false);

    const search = (key: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = key.target;
        setKeySearch(value)
        if(value.length >= 3){
            switch (location) {
                case "Characters":
                    searchCharacterAction(keySearch, type);
                    break;
                case "Locations":
                    searchLocationAction(keySearch, type)
                    break;
                case "Episodes":
                    searchEpisodeAction(keySearch, type)
                    break;
            }
        }
        if (value === '' && keySearch.length === 1){
            clear();
        }
    }

    const searchType = (type: boolean): void => {
        setType(type);
        switch (location) {
            case "Characters":
                searchCharacterAction(keySearch, type);
                break;
            case "Locations":
                searchLocationAction(keySearch, type);
                break;
            case "Episodes":
                searchEpisodeAction(keySearch, type);
                break;
        }
    }

    const typeFilter = (): JSX.Element => {
        switch (location) {
            case "Episodes":
                return (<>
                    <Button variant="secondary" disabled={keySearch.length < 3} active={!type} onClick={() => searchType(false)}>Name</Button>{' '}
                    <Button variant="secondary" disabled={keySearch.length < 3} active={type} onClick={() => searchType(true)}>Episode</Button>{' '}
                </>);
            default:
                return (<>
                    <Button variant="secondary" disabled={keySearch.length < 3} active={!type} onClick={() => searchType(false)}>Name</Button>{' '}
                    <Button variant="secondary" disabled={keySearch.length < 3} active={type} onClick={() => searchType(true)}>Type</Button>{' '}
                </>);
        }

    }

    const clear = () : void =>{
        setKeySearch('');
        switch (location) {
            case "Characters":
                window.location.reload();
                break;
            case "Locations":
                window.location.reload();
                break;
            case "Episodes":
                window.location.reload();
                break;
        }
    }


    return(
        <>

            <Navbar bg={"dark"}>
                <Navbar.Brand className="d-none d-lg-block d-xl-block mr-4">
                            <span className="text-light">
                                <img src={logo} width={"60"} height={"60"} alt="LOGO"/>
                                <span className="ml-2">
                                    <img src={text} width={"180"} height={"60"} className="mb-1" alt="LOGO"/>
                                </span>
                                <span className=" ml-1 mr-1 " style={{fontSize: '35px'}}>
                                    |
                                </span>
                                <span style={{fontSize: '20px'}}>
                                    Wiki
                                </span>
                            </span>
                </Navbar.Brand>
                <Navbar.Brand className="navbar-nav mx-auto mr-4 d-none d-sm-block
                            d-sm-block d-lg-none d-xl-none">
                            <span className="text-light">
                                <img src={logo} width={"60"} height={"60"} alt="LOGO"/>
                                <span className="ml-2">
                                    <img src={text} width={"180"} height={"60"} className="mb-1" alt="LOGO"/>
                                </span>
                                <span className=" ml-1 mr-1 " style={{fontSize: '35px'}}>
                                    |
                                </span>
                                <span style={{fontSize: '20px'}}>
                                    Wiki
                                </span>
                            </span>
                </Navbar.Brand>

                <div className="ml-5 mt-3 d-none d-lg-block d-xl-block">
                    <ButtonToolbar className="mb-3">
                                <span className=" d-none d-xl-block">
                                    <ButtonGroup className="mr-2" >
                                        <Link to="/" className="text-light">
                                            <Button variant="secondary" onClick={() => setLocationAction('Characters')}
                                                    className={location === "Characters" ? "active": ""}>
                                                Characters
                                            </Button>
                                        </Link>
                                        <Link to="/locations" className="text-light">
                                            <Button variant="secondary"  onClick={() => setLocationAction('Locations')}
                                                    className={location === "Locations" ? "active": ""}>
                                                    Locations
                                            </Button>
                                        </Link>
                                        <Link to="/episodes" className="text-light">
                                            <Button variant="secondary"  onClick={() => setLocationAction('Episodes')}
                                                    className={location === "Episodes" ? "active": ""}>
                                                    Episodes
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </span>
                        <Form.Control style={{width: "18em"}} onChange={search} value={keySearch}/>
                        <ButtonGroup className={"ml-2"}>
                            <DropdownButton variant="secondary" as={ButtonGroup} title="Filters"
                                            className="d-xl-none"
                                            id="bg-nested-dropdown">
                                <div className="dropdown-item" >
                                    <ButtonGroup className="mr-2" aria-label="First group" >
                                        <Link to="/" className="text-light">
                                            <Button variant="secondary" onClick={() => setLocationAction('Characters')}
                                                    className={location === "Characters" ? "active": ""}>
                                                Characters
                                            </Button>
                                        </Link>
                                        <Link to="/locations" className="text-light">
                                            <Button variant="secondary"  onClick={() => setLocationAction('Locations')}
                                                    className={location === "Locations" ? "active": ""}>
                                                Locations
                                            </Button>
                                        </Link>
                                        <Link to="/episodes" className="text-light">
                                            <Button variant="secondary"  onClick={() => setLocationAction('Episodes')}
                                                    className={location === "Episodes" ? "active": ""}>
                                                Episodes
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </div>
                                <Dropdown.Item eventKey="2">
                                    {typeFilter()}
                                </Dropdown.Item>
                            </DropdownButton>
                            <ButtonGroup className="d-md-none d-xl-flex">
                                {typeFilter()}
                            </ButtonGroup>
                            <Button variant="danger" disabled={keySearch.length < 2} onClick={clear}>Clear</Button>{' '}
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <section className="navbar-nav mx-auto d-block d-sm-none">
                    <Navbar.Brand>
                                <span className="text-light">
                                    <img src={logo} width={"60"} height={"60"} alt="LOGO"/>
                                    <span className="ml-2">
                                        <img src={text} width={"180"} height={"60"} alt="LOGO"/>
                                    </span>
                                    <span className=" ml-1 mr-1 " style={{fontSize: '35px'}}>
                                        |
                                    </span>
                                    <span style={{fontSize: '20px'}}>
                                        Wiki
                                    </span>
                                </span>
                    </Navbar.Brand>
                </section>
            </Navbar>

            <section className="p-2 bg-secondary d-block d-lg-none d-xl-none">
                <div className="d-flex justify-content-center  ">
                    <ButtonToolbar className="align-content-center">
                        <Form.Control size="sm" style={{width: "14em"}} onChange={search} value={keySearch}/>
                        <ButtonGroup className={"ml-2"} size="sm">
                            <DropdownButton variant="info" as={ButtonGroup} size="sm" title="Filters">
                                <div className="dropdown-item">
                                    <ButtonGroup>
                                        <Link to="/" className="text-light">
                                            <Button variant="secondary" onClick={() => setLocationAction('Characters')}
                                                    className={location === "Characters" ? "active": ""}>
                                                Characters
                                            </Button>
                                        </Link>
                                        <Link to="/locations" className="text-light">
                                            <Button variant="secondary"  onClick={() => setLocationAction('Locations')}
                                                    className={location === "Locations" ? "active": ""}>
                                                Locations
                                            </Button>
                                        </Link>
                                        <Link to="/episodes" className="text-light">
                                            <Button variant="secondary"  onClick={() => setLocationAction('Episodes')}
                                                    className={location === "Episodes" ? "active": ""}>
                                                Episodes
                                            </Button>
                                        </Link>
                                    </ButtonGroup>
                                </div>
                                <Dropdown.Item eventKey="2" >
                                    <ButtonGroup>
                                        {typeFilter()}
                                    </ButtonGroup>
                                </Dropdown.Item>
                            </DropdownButton>

                            <Button variant="danger"  disabled={keySearch.length < 2} onClick={clear}>Clear</Button>{' '}
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </section>
        </>

    )

}

const mapState = (state: any) => {
    return {
        location: state.app.current
    }
}
export default connect(mapState, {
    setLocationAction,
    searchCharacterAction,
    searchLocationAction,
    searchEpisodeAction,
})(Anavbar);
