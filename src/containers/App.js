import React, {Component} from 'react';
import './App.css';
import PlayingArea from "../components/PlayingArea/PlayingArea";
import Cell from "../components/Cell/Cell";
import ResetButton from "../components/ResetButton/ResetButton";
import NumberAttempts from "../components/NumberAttempts/NumberAttempts";

class App extends Component {
  state = {cells: []};
  componentDidMount() {
    window.addEventListener('load', this._generateCells);
  }
  _generateCells = () => {
    let cells = [];
    for (let i = 0; i < 36; i++) {
      cells.push({id: i});
    }
    this.setState({cells});
    console.log(this.state.cells);
  };
  resetGame = () => {

  };
    render() {
        return (
            <div className="App">
              <PlayingArea
                  key={this.state.cells.id}
                  id={this.state.cells.id}
              >
                {
                  this.state.cells.map((item) => {
                    return (
                        <Cell
                            key={item.id}
                            id={item.id}
                        />
                    )
                  })
                }
              </PlayingArea>
                <NumberAttempts
                    number={0}
                >
                </NumberAttempts>
                <ResetButton
                    reset={this.resetGame}
                >
                </ResetButton>
            </div>
        );
    }
}

export default App;