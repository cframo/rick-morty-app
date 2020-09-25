import React from "react";
import {ButtonsBarProps, state} from "../../../types";
import {Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setLocationAction} from "../../redux/appDuck";

const ButtonsBar = ({
                        style, type, searchByWords, keySearch, validadteString, location, setLocationAction, searchByType,
                        clear, leftButtons
                    }: ButtonsBarProps) => {

    const CHARACTERS = 'Characters';
    const LOCATIONS = 'Locations';
    const EPISODES = 'Episodes';

    const NavigationsButtons = () =>
        <>
            <Link to="/" className="text-light">
                <Button variant="secondary" onClick={() => setLocationAction!(CHARACTERS)}
                        className={location === CHARACTERS ? "active" : ""}>
                    Characters
                </Button>
            </Link>
            <Link to="/locations" className="text-light">
                <Button variant="secondary" onClick={() => setLocationAction!(LOCATIONS)}
                        className={location === LOCATIONS ? "active" : ""}>
                    Locations
                </Button>
            </Link>
            <Link to="/episodes" className="text-light">
                <Button variant="secondary" onClick={() => setLocationAction!(EPISODES)}
                        className={location === EPISODES ? "active" : ""}>
                    Episodes
                </Button>
            </Link>
        </>;

    const typeFilter = (): JSX.Element => {
        switch (location) {
            case "Episodes":
                return (<>
                    <Button variant="secondary" disabled={!validadteString(keySearch)} active={!type}
                            onClick={() => searchByType(false)}>Name</Button>{' '}
                    <Button variant="secondary" disabled={!validadteString(keySearch)} active={type}
                            onClick={() => searchByType(true)}>Episode</Button>{' '}
                </>);
            default:
                return (<>
                    <Button variant="secondary" disabled={!validadteString(keySearch)} active={!type}
                            onClick={() => searchByType(false)}>Name</Button>{' '}
                    <Button variant="secondary" disabled={!validadteString(keySearch)} active={type}
                            onClick={() => searchByType(true)}>Type</Button>{' '}
                </>);
        }

    }

    const renderLeftButtons = (): JSX.Element | undefined => {
        return leftButtons ?
            <span className=" d-none d-xl-block">
                    <ButtonGroup className="mr-2">
                        {NavigationsButtons()}
                    </ButtonGroup>
                </span> :
            undefined
    }


    return (
        <ButtonToolbar className={style.buttonGroupHead}>
            {renderLeftButtons()}
            <Form.Control style={{width: style.formControlWidth}} onChange={searchByWords} value={keySearch}/>
            <ButtonGroup className={"ml-2"} size={style.size}>
                <DropdownButton variant={style.dropdownVariant} size={style.size} as={ButtonGroup} title="Filters"
                                className={style.classnameDrop}
                                id="bg-nested-dropdown">
                    <div className="dropdown-item">
                        <ButtonGroup className="mr-2" aria-label="First group">
                            {NavigationsButtons()}
                        </ButtonGroup>
                    </div>
                    <Dropdown.Item eventKey="2">
                        {typeFilter()}
                    </Dropdown.Item>
                </DropdownButton>
                <ButtonGroup className={style.ButtonGroupFoot}>
                    {typeFilter()}
                </ButtonGroup>
                <Button variant="danger" disabled={keySearch.length < 2} onClick={clear}>Clear</Button>{' '}
            </ButtonGroup>
        </ButtonToolbar>
    )
}

const mapState = (state: state) => {
    return {
        location: state.app.current
    }
}
export default connect(mapState, {
    setLocationAction,
})(ButtonsBar);
