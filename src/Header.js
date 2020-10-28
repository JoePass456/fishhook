import React from 'react';
import { Row, Col } from 'reactstrap';

function Header(props) {
    return (
        <Row>
            <Col className="col-12 border text-center">
                <h1 key="1">{props.title}</h1>
            </Col>
        </Row>
    )
}

export default Header;