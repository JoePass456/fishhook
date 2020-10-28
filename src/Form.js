import './App.css';
import React from 'react';
import { Row, Col, Form } from 'reactstrap';

function Header(props) {
    //console.log(props.tabData.items);

    let listItem = props.tabData.items.map((item, index) => {
        return <p className="table" key={index}>{item.name}</p>
    });

    let listPrice = props.tabData.items.map((item, index) => {
        return <p className="table" key={index}>${item.price}</p>
    });

    // let listInput = props.tabData.items.map((item, index) => {
    //     return <input
    //         type="text"
    //         className="table"
    //         onChange={(e) => props.adjustQty(index)}
    //         key={index}
    //         placeholder="0">
    //     </input>
    // });

    let listSubmit = props.tabData.items.map((item, index) => {
        return <Form
            key={index}
            className="table"
            onSubmit={() => props.submitQty(item.qty)}>
            <label><input
                value={item.qty}
                data-index={index}
                onChange={props.adjustQty}
                type="text"
                key={index}
                placeholder="" />
            </label>
            <input type="submit" value="Add" />
        </Form>
    });


    return (
        <Row>
            <Col className="col-3">
                {listItem}
            </Col>
            <Col className="col-3">
                {listPrice}
            </Col>
            <Col className="col-3">
                {/* {listInput} */}
            </Col>
            <Col className="col-3">
                {listSubmit}
            </Col>
        </Row>
    )
}

export default Header;