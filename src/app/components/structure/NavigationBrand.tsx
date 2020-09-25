import React from "react";
import {Navbar} from "react-bootstrap";
import logo from "../../images/rm.png";
import text from "../../images/text.png";
import {NavigationBrandProp as prop} from "../../../types";

const NavigationBrand = ({classname}: prop): JSX.Element =>
    <Navbar.Brand className={classname}>
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
export default NavigationBrand;