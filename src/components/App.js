import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

  constructor() {
    super();
    // getinitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish = (fish) => {
    const newFishes = {...this.state.fishes}; // make a copy of fishes state
    const timestamp = Date.now();
    newFishes[`fish-${timestamp}`] = fish;    // timestamp new fish asign to copy fishes
    this.setState({ fishes: newFishes });     // over
  }

  loadSamples = () => {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    const unOrderedFishes = Object.keys(this.state.fishes) //obj to arr
    const fishesInOrder = unOrderedFishes.sort()
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {fishesInOrder.map((key) => <Fish key={key} details={this.state.fishes[key]} />)}
          </ul>
        </div>
        <Order />
        <Inventory 
          addFish={this.addFish} 
          loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App;
