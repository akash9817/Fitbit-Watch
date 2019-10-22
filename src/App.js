import React, {Component} from 'react';
import './App.css';
import Left from './Left'
import Right from './Right'

class App extends Component {
  state ={
    pos:0,
    btn:0,
    featureList:"Time",
    imageUrl:"https://imgur.com/iOeUBV7.png"
  }

  watch = (item,pos) => {
    this.setState({pos,imageUrl:item.imageUrl});
  }
  toggle = (item,pos) => {
    this.setState({featureList:item,btn:pos})
  }
  render(){
    var date = new Date();
    date = `${date.getHours()}:${date.getMinutes()}` ;
  return (
    <div className="App">
      <div className="Container">
        <Left src={this.state.imageUrl} featureList={this.state.featureList}/>
        <Right pos={this.state.pos} btn={this.state.btn}  toggle={this.toggle} watch={this.watch}/>
      </div>
    </div>
  );
}
}
export default App;
