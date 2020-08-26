import React from "react";
import {connect} from "react-redux";
import { Pagination } from "react-bootstrap";
import {pageAction} from "../../redux/appDuck";

function Pages(props: any) : JSX.Element {

    const {
        selected,
        pages,
        next,
        pageAction
    } = props;
    let active = next-1;

    let items = [];

    const prevNumbers = () => {
        if(next<5)
            return next-(next-1);
        return next-4;
    }
    const lastItem = () =>{

        if(active===(pages-1)){
            return prevNumbers()+2;
        }else if(next>=(pages-4)){
            return next+1;
        }else{
            return next+2;
        }

    }

    for(let i: number = prevNumbers(); i <= lastItem(); i++ ){
        items.push(
            <Pagination.Item key={i} active={i === active} onClick={() => pageAction(selected, i)}>
                {i}
            </Pagination.Item>
        )
    }


    return (
        <>
            <div className="bg-transparent border p-3" >
                    <Pagination className="justify-content-center">
                        <Pagination.First onClick={() => pageAction(selected, 1)}/>
                        <Pagination.Prev onClick={() => pageAction(selected, next-2)}/>
                        {items}
                        <Pagination.Next onClick={() => pageAction(selected, next)}/>
                    </Pagination>
            </div>
        </>
    )
}

const mapState = (state: any) => {
    return{
        selected: state.app.current.toLowerCase(),
        pages: state[state.app.current.toLowerCase()].pages,
        next: state[state.app.current.toLowerCase()].nextPage
    }
}

export default connect(mapState, {pageAction})(Pages);