import React from "react";
import {connect} from "react-redux";
import {Pagination} from "react-bootstrap";
import {pageAction} from "../../redux/appDuck";

function Pages(props: any): JSX.Element {

    const {
        selected,
        pages,
        next,
        pageAction
    } = props;

    const CURRENT = next - 1;
    const NEXT_ELEMENTS = next+5;

    const pagination = (): (JSX.Element | null)[] => {
        let ArrayPages = Array.from(Array(pages).keys());
        return ArrayPages.slice(CURRENT, NEXT_ELEMENTS).map((item) => {
            if(item === 0)
                return null;
            return (
                <Pagination.Item key={item} active={item === CURRENT} onClick={() => pageAction(selected, item)}>
                    {item}
                </Pagination.Item>
            );
        })
    }

    return (
        <>
            <div className="bg-transparent border p-3">
                <Pagination className="justify-content-center">
                    <Pagination.First onClick={() => pageAction(selected, 1)}/>
                    <Pagination.Prev onClick={() => pageAction(selected, next - 2)}/>
                    {pagination()}
                    <Pagination.Next onClick={() => pageAction(selected, next)}/>
                </Pagination>
            </div>
        </>
    )
}

const mapState = (state: any) => {
    return {
        selected: state.app.current.toLowerCase(),
        pages: state[state.app.current.toLowerCase()].pages,
        next: state[state.app.current.toLowerCase()].nextPage
    }
}

export default connect(mapState, {pageAction})(Pages);