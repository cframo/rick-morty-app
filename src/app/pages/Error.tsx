import React from "react";
import {Button, Col} from "react-bootstrap";

export default function Error(props: any) : JSX.Element{

    const {
        message
    } = props;

    const reload= (): any => {
        window.location.reload(false);
    }

    const errorMessage = () => {
        console.log(message)
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

