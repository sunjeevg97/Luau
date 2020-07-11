import React, { useState } from "react";
import Calendar from 'react-calendar';
import styled from 'styled-components';
import bgImg from './assets/bgImg.jpg';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Layout } from './components/Layout';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Navigation } from './components/Navigation';
import InputGroup  from 'react-bootstrap/InputGroup';
import DropdownButton  from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { TimePicker } from './components/TimePicker'
import $ from 'jquery';

var wH = $(window).height();
const Background  = styled.img`
    height: 100%;
    width: 100%;
    background: 'linear-gradient(to right, #430089, #82ffa1)';
`;

const Styles = styled.div`
    .jumbotron{
        position: absolute;
        top:0;
        margin-top:10%;
        margin-left:10%;
        background:none;
        border-style: solid;
        border-color:#EEF3DB;
    }

    .h1{
        width:auto;
    }

`;
const Header = styled.div`
    .jumbotron{
        position: absolute;
        top:0;
        margin-top:5%;
        margin-left:60%;
        background:none;
    }
    .h1{
        background-color:#000;
    }
`;
const BgStyles = styled.div`

        z-index: 0;
        height: 100%;
        width: 100%;
        position: fixed;
        overflow: auto;
        top: 0px;
        left: 0px;
        background: rgba(0, 0, 0, 0.7); /*can be anything, of course*/

`;

 export const Landing = () => {

    const[date, setDate] = useState(new Date());
    const onChange = date => {
        setDate(date);
        console.log(date);
    };

    const getTime = (time) => {
        console.log(time);
    }

    function handleSubmit(event) {
        getTime();
        console.log('submit');
        event.preventDefault()
    }



return(
    <React.Fragment>
        <Background src={ bgImg } />
        <BgStyles/>
        <Styles>
            <Jumbotron>
                <Container fluid='lg'>
                        <h1 className="text-secondary display-5">Book company events</h1>
                        <h1 className="text-secondary display-5">in minutes on <span className="font-weight-bold">Luau</span></h1>
                            
                                <Form onSubmit={handleSubmit}>
                                    <Row>
                                        <Col className="col-6">
                                    <Form.Group controlId="formLocation">
                                        <Form.Label className="text-secondary font-weight-bold">Where are you?</Form.Label>
                                        <Form.Control placeholder="Location" />
                                    </Form.Group>
                                        </Col>
                                        <Col>
                                        <Form.Group controlId="formNumAttendes">
                                        <Form.Label className="text-secondary font-weight-bold">How many are going?</Form.Label>
                                        <Form.Control placeholder="Number of People" />
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xs={5}>
                                        <Form.Group controlId="formDate">
                                        <Form.Label className="text-secondary font-weight-bold">Date?</Form.Label>
                                        <InputGroup className="lg" >
                                        <FormControl
                                                placeholder="mm/dd/yyyy"
                                                aria-label="date"
                                                aria-describedby="basic-addon2"
                                                value={date.toLocaleDateString()}/>

                                        <DropdownButton
                                            as={InputGroup.Append}
                                            variant="outline-secondary"
                                            className = "dropup sm"
                                            title= {<FontAwesomeIcon icon={faCalendarAlt}/>}
                                            id="date-dropdown">
                                            <Calendar 
                                                onChange={onChange} 
                                                value={date}/>
                                    
                                            </DropdownButton>

                                        

                                         </InputGroup>
                                     
                                    </Form.Group>
                                    </Col>
                                    <Col></Col>
                                    <Col xs={5}>
                                    
                                        <Form.Group controlId="formTime">
                                        <Form.Label className="text-secondary font-weight-bold">Time?</Form.Label>
                                        <InputGroup className="sm float right" >
                                            <TimePicker landingCallback={getTime}/>
                                         </InputGroup>
                                     
                                    </Form.Group>
                                    </Col>
                                    <Col>
                                    </Col>
                                    </Row>

                                        <Button variant="primary btn-lg font-weight-bold text-light" type="submit" value="Submit">
                                            Lets Luau!
                                        </Button>
                                    </Form>
                            </Container>
        
                    </Jumbotron>
            </Styles>
        </React.Fragment>
    )

};
