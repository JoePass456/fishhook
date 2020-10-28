import React from 'react';
import './App.css';
import { Row, Col, Button } from 'reactstrap';

function Nav(props) {
    //console.log(props.current, props.data[1].items);

    //Generate tabs
    let navBar = props.data.map(function (data, index) {
        if (index !== props.currentTab) {
            return (
                <Button
                    onClick={() => props.tabChanger(index)}
                    key={index} type="button"
                    className="btn btn-sm m-1">{data.tabName}
                </Button>
            )
        } else {
            //Generate current tab button
            return <Button
                key={index}
                type="button"
                className="btn btn-outline-danger btn-sm m-1">{data.tabName}
            </Button>
        }
    })

    return (
        <Row>
            <Col className="text-center ">
                {navBar}
            </Col>
        </Row>
    )
}

export default Nav