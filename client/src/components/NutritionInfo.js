import React, { useState } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import DataComponent from './DataComponent.js'
import { Tab, Nav, Row, Col, ListGroup } from 'react-bootstrap'
import '../stylesheets/NutritionInfo.css'
const data = {
	"calories": "316",
    "carbs": "49g",
    "fat": "12g",
    "protein": "3g",
    "bad": [
        {
            "amount": "316",
            "indented": false,
            "percentOfDailyNeeds": 15.84,
            "title": "Calories"
        },
        {
            "amount": "12g",
            "indented": false,
            "percentOfDailyNeeds": 18.51,
            "title": "Fat"
        },
        {
            "amount": "3g",
            "indented": true,
            "percentOfDailyNeeds": 24.88,
            "title": "Saturated Fat"
        },
        {
            "amount": "49g",
            "indented": false,
            "percentOfDailyNeeds": 16.44,
            "title": "Carbohydrates"
        },
        {
            "amount": "21g",
            "indented": true,
            "percentOfDailyNeeds": 24.42,
            "title": "Sugar"
        },
        {
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 0.63,
            "title": "Cholesterol"
        },
        {
            "amount": "279mg",
            "indented": false,
            "percentOfDailyNeeds": 12.13,
            "title": "Sodium"
        }
    ],
    "good": [
        {
            "amount": "3g",
            "indented": false,
            "percentOfDailyNeeds": 7.57,
            "title": "Protein"
        },
        {
            "amount": "19\u00b5g",
            "indented": false,
            "percentOfDailyNeeds": 18.76,
            "title": "Vitamin K"
        },
        {
            "amount": "0.37mg",
            "indented": false,
            "percentOfDailyNeeds": 18.69,
            "title": "Manganese"
        },
        {
            "amount": "0.15mg",
            "indented": false,
            "percentOfDailyNeeds": 10.02,
            "title": "Vitamin B1"
        },
        {
            "amount": "2g",
            "indented": false,
            "percentOfDailyNeeds": 9.97,
            "title": "Fiber"
        },
        {
            "amount": "37\u00b5g",
            "indented": false,
            "percentOfDailyNeeds": 9.48,
            "title": "Folate"
        },
        {
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 7.62,
            "title": "Iron"
        },
        {
            "amount": "1mg",
            "indented": false,
            "percentOfDailyNeeds": 7.48,
            "title": "Vitamin B3"
        },
        {
            "amount": "0.12mg",
            "indented": false,
            "percentOfDailyNeeds": 7.34,
            "title": "Vitamin B2"
        },
        {
            "amount": "5mg",
            "indented": false,
            "percentOfDailyNeeds": 7.26,
            "title": "Vitamin C"
        },
        {
            "amount": "4\u00b5g",
            "indented": false,
            "percentOfDailyNeeds": 6.26,
            "title": "Selenium"
        },
        {
            "amount": "182mg",
            "indented": false,
            "percentOfDailyNeeds": 5.21,
            "title": "Potassium"
        },
        {
            "amount": "43mg",
            "indented": false,
            "percentOfDailyNeeds": 4.38,
            "title": "Calcium"
        },
        {
            "amount": "42mg",
            "indented": false,
            "percentOfDailyNeeds": 4.24,
            "title": "Phosphorus"
        },
        {
            "amount": "13mg",
            "indented": false,
            "percentOfDailyNeeds": 3.43,
            "title": "Magnesium"
        },
        {
            "amount": "0.48mg",
            "indented": false,
            "percentOfDailyNeeds": 3.19,
            "title": "Vitamin E"
        },
        {
            "amount": "0.06mg",
            "indented": false,
            "percentOfDailyNeeds": 3.11,
            "title": "Copper"
        },
        {
            "amount": "0.26mg",
            "indented": false,
            "percentOfDailyNeeds": 2.56,
            "title": "Vitamin B5"
        },
        {
            "amount": "0.05mg",
            "indented": false,
            "percentOfDailyNeeds": 2.32,
            "title": "Vitamin B6"
        },
        {
            "amount": "0.29mg",
            "indented": false,
            "percentOfDailyNeeds": 1.96,
            "title": "Zinc"
        },
        {
            "amount": "76IU",
            "indented": false,
            "percentOfDailyNeeds": 1.53,
            "title": "Vitamin A"
        }
    ]    
}
const NutritionInfo = ({ data }) => {
    //data = data.replace(/onmouseover/g, "onMouseOver").replace(/onmouseout/g, "onMouseOut")
     //       .replace(/onclick/g, "onClick").replace(/onchange/g, "onChange")
    const [key, setKey] = useState('overview')
    
    return(
        <Tab.Container defaultActiveKey="overview">
            <Row className="justify-content-md-center">
                <Nav variant="pills" className="flex-row">
                    <Col sm={4}>  
                        <Nav.Item>
                            <Nav.Link eventKey="overview" title="Stats">Stats</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col sm={4}>  
                        <Nav.Item>
                            <Nav.Link eventKey="good" title="Good">The Good</Nav.Link>
                        </Nav.Item>
                    </Col>
                    <Col sm={4}>  
                        <Nav.Item>
                            <Nav.Link eventKey="bad" title="Bad">The Bad</Nav.Link>
                        </Nav.Item>
                    </Col>  
                </Nav>
            </Row>
            <Row className="justify-content-md-center">
                <Tab.Content>
                    <Tab.Pane eventKey="overview" className="d-flex justify-content-center" unmountOnExit="true">
                        <ListGroup as="span">
                            <ListGroup.Item variant="info">{`Total Calories: ${data.calories}`}</ListGroup.Item>
                            <ListGroup.Item variant="info">{`Carbs: ${data.carbs}`}</ListGroup.Item>
                            <ListGroup.Item variant="info">{`Total Fat: ${data.fat}`}</ListGroup.Item>
                            <ListGroup.Item variant="info">{`Total Protein: ${data.protein}`}</ListGroup.Item>
                        </ListGroup>
                    </Tab.Pane>
                    <Tab.Pane eventKey="good" className="d-flex justify-content-center" unmountOnExit="true">
                        <ListGroup as="span">
                            {data.good.map((item, i) => (
                                <>
                                <ListGroup.Item key={i} variant="info">{`${item.title}`}</ListGroup.Item>
                                <ListGroup.Item key={i} variant="success">{`Percent of Daily Needs: ${item.percentOfDailyNeeds}`}</ListGroup.Item>
                                </>
                            ))}
                        </ListGroup>                   
                    </Tab.Pane>
                    <Tab.Pane eventKey="bad" className="d-flex justify-content-center" unmountOnExit="true">
                        <ListGroup as="span">
                            {data.bad.map((item, i) => (
                                <>
                                <ListGroup.Item key={i} variant="info">{`${item.title}`}</ListGroup.Item>
                                <ListGroup.Item key={i} variant="warning">{`Percent of Daily Needs: ${item.percentOfDailyNeeds}`}</ListGroup.Item>
                                </>
                            ))}
                        </ListGroup>                      
                    </Tab.Pane>
                </Tab.Content>
            </Row>
        </Tab.Container>
    )
}

const NutritionCard = ({ id }) => {
    /*var requestString = "http://localhost:5000/data/nutrition/getNutritionInformation/?id=" + id 
    const NutritionDash = 
        DataComponent(
            NutritionInfo,
            requestString,
            true,
            id
        )*/
    return NutritionInfo({data})//<NutritionDash />
}

export default NutritionCard