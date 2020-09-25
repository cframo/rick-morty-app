import React, {useState} from "react";
import {ButtonGroup, Navbar} from "react-bootstrap";
import {connect} from "react-redux";
import {searchCharacterAction} from "../../redux/charactersDuck";
import {searchLocationAction} from "../../redux/locationsDuck";
import {searchEpisodeAction} from "../../redux/episodesDuck";
import NavigationBrand from "./NavigationBrand";
import ButtonsBar from "./ButtonsBar";
import {Style} from "../../../types";


function Anavbar(props: any): JSX.Element {

    const {
        location,
        searchCharacterAction,
        searchLocationAction,
        searchEpisodeAction,
    } = props;

    const rgxLettersAndSpacesBeetWords = /^[a-zA-Z][a-zA-Z0-9]*(?: [a-zA-Z0-9]+)?$/;
    const rgxEmpty = /^$/;

    const [keySearch, setKeySearch] = useState<string>("");
    const [type, setType] = useState<boolean>(false);

    const searchByWords = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setKeySearch(target.value);
        searchType(target.value);
        clearIfEmpty(target.value);
    }

    const searchType = (keyToSearch: string): void => {
        if (validadteString(keyToSearch)) {
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
    }

    const validadteString = (value: string): boolean =>
        value.length >= 3 && rgxLettersAndSpacesBeetWords.test(value);

    const clearIfEmpty = (keyToSearch: string): void => {
        if (rgxEmpty.test(keyToSearch) && keySearch.length === 1) {
            clear();
        }
    }

    const searchByType = (type: boolean): void => {
        setType(type);
        searchType(keySearch);
    }

    const clear = (): void => {
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

    const styleLg: Style = {
        ButtonGroupFoot: 'd-md-none d-xl-flex',
        classnameDrop: 'd-xl-none',
        dropdownVariant: 'secondary',
        size: undefined,
        formControlWidth: '18em',
        buttonGroupHead: 'mb-3'
    }

    const styleMdSm: Style = {
        ButtonGroupFoot: 'd-none',
        classnameDrop: '',
        dropdownVariant: 'info',
        size: 'sm',
        formControlWidth: '14em',
        buttonGroupHead: 'align-content-center'
    }

    return (
        <>
            <Navbar bg={"dark"}>
                <div className='d-none d-lg-block d-xl-block mr-4'>
                    <NavigationBrand classname={'d-none d-lg-block d-xl-block mr-4'}/>
                </div>
                <div className='navbar-nav mx-auto mr-4 d-none d-sm-block d-sm-block d-lg-none d-xl-none'>
                    <NavigationBrand
                        classname={'navbar-nav mx-auto mr-4 d-none d-sm-block d-sm-block d-lg-none d-xl-none'}/>
                </div>
                <div className="ml-5 mt-3 d-none d-lg-block d-xl-block">

                    <ButtonsBar style={styleLg} type={type} keySearch={keySearch} clear={clear}
                                searchByType={searchByType} searchByWords={searchByWords}
                                validadteString={validadteString} leftButtons={true}/>

                </div>
                <section className="navbar-nav mx-auto d-block d-sm-none">
                    <NavigationBrand classname={''}/>
                </section>
            </Navbar>

            <section className="p-2 bg-secondary d-block d-lg-none d-xl-none">
                <div className="d-flex justify-content-center  ">
                    <ButtonsBar style={styleMdSm} type={type} keySearch={keySearch} clear={clear}
                                searchByType={searchByType} searchByWords={searchByWords}
                                validadteString={validadteString} leftButtons={false}/>
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
    searchCharacterAction,
    searchLocationAction,
    searchEpisodeAction,
})(Anavbar);
