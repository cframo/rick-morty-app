import React from "react";
import {Button, Col} from "react-bootstrap";
import {ErrorProps} from "../../types";

export default function Error({message}: ErrorProps) : JSX.Element{

    const reload = (): void => {
        window.location.reload(false);
    }

    const errorMessage = () => {
        if (message === 'Failed to fetch')
            return "Whoops, check your internet connection.";
        return "Whoops, looks like no coincidences.";
    }

    return (
        <Col>
            <div className="text-center text-muted">
                <h5 className="font-weight-lighter">
                    {errorMessage()}
                </h5>
                <h6>:(</h6>
                <hr/>
                <Button variant={"outline-info"} onClick={() => reload()}>
                    Try again!
                </Button>
            </div>
        </Col>
    )
}

