import React, { Component } from 'react';
import 'antd/dist/antd.css';
<<<<<<< HEAD
import inbound from './assets/funil-inbound.png';
import contas from './assets/funil-de-contas.png';
import vendas from './assets/funil-vendas.png';
import { Select } from 'antd';

const Option = Select.Option;



class Fluxo extends Component {
  state = {img: inbound};
  handleChange = (value) => {
    if(value === 'inbound') {
      this.setState({img: inbound});
    } else if (value === 'contas') {
      this.setState({img: contas});
    } else {
      this.setState({img: vendas});     
    }      
  }
  render() {
    return (
      <div>
        <Select defaultValue="inbound" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="inbound">Funil Inbound</Option>
          <Option value="contas">Funil Contas</Option>
          <Option value="vendas">Funil Vendas</Option>
        </Select>
        <div>
        <img style={{width:'80%', height: 'auto'}} src={this.state.img} alt=""/>
        </div>
      </div>
=======
import fluxo from './assets/funil-de-contas.png';
// import Flux from './components/Flux/';

class Fluxo extends Component {
  render() {
    return (
      <img src={fluxo} alt=""/>
      // <Flux />
>>>>>>> 15eab82d42fc7de4cb5a3f2f29002c97d1fa2765
    );
  }
}

export default Fluxo;
