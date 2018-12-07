import React from 'react';
import './style.css';
<<<<<<< HEAD
import { Timeline , Icon, Switch, Card, Avatar, DatePicker } from 'antd';
import moment from 'moment';

const { Meta } = Card;
const myCard = (title, nome, description) => {
  return  (<Card
            style={{ width: '80%', margin: '0 0 0 16px'}}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
          >
            <Meta
              avatar={<Avatar icon="user" />}
              title={ <div>{title + ' - ' + nome + ' '}
                <DatePicker defaultValue={moment('2018-07-12', 'YYYY-MM-DD')} /></div> }
              description={description}
            />
          </Card>);
}
class StepsContents extends React.Component {
  render() {
    return (
      <Timeline style={{background:'#FFF', margin: '10px 10px 0 0', padding: '80px 0 0 80px'}}>
        <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '24px', color: 'green', margin:'0 auto'}} />}>
        {myCard('Ligar', 'Pablo Picasso')}
        </Timeline.Item>
        <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '24px' }} />}>
        {myCard('Ligar', 'Pablo Picasso')}
        </Timeline.Item>
        <Timeline.Item dot={<Icon type="calendar" style={{ fontSize: '24px' }} />}>
        {myCard('Reunião', 'Pablo Picasso')}
        </Timeline.Item>
        <Timeline.Item dot={<Icon type="phone" style={{ fontSize: '24px' }} />}>
        {myCard('Ligar', 'Pablo Picasso')}
        </Timeline.Item>
=======
import { Timeline , Icon } from 'antd';

class StepsContents extends React.Component {

  render() {
    return (
      <Timeline style={{background:'#FFF', margin: '10px 10px 0 0', padding: 10}}>
        <Timeline.Item>Ligar 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
      </Timeline>
    );
  }
}

<<<<<<< HEAD
export default StepsContents;
=======
export default StepsContents;
>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
