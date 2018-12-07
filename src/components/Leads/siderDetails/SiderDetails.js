import React from 'react';
import './style.css';
import {Card, Icon, Row, Col } from 'antd';
import { Button } from 'antd/lib/radio';


class SiderDetails extends React.Component {

    render() {
<<<<<<< HEAD
=======


>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
        return (
         <Card
         className="card"
         title="DETAILS"  
         extra={[<Icon type="edit" />,<Icon type="colum-height" />,<Button size="small" >Customise fields</Button>]} 
         key="details"      
         >
<<<<<<< HEAD
        <Row>
            <Col span={24}>Nome Skype:
            </Col>
        </Row>
        <Row> 
            <Col span={24}>Origem do Lead:
            </Col>           
        </Row>
=======
         <Row>
            <Col span={8}>Nome Skype:
            </Col>
            <Col span={8}></Col>
          </Row>


          <Row> 
            <Col span={8}>Qual origem desse LEAD?
            </Col>
            <Col span={8}></Col>            
        </Row>

>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
        <Row> 
            <Col span={8}>Responsável Canal - Informação Interna

            </Col>
            <Col span={8}></Col>            
        </Row> 
        </Card>

        );
    }
}

export default  SiderDetails;