import React, {Component} from 'react';
import './App.css';
import PlayingArea from "../components/PlayingArea/PlayingArea";
import Cell from "../components/Cell/Cell";
import ResetButton from "../components/ResetButton/ResetButton";
import NumberAttempts from "../components/NumberAttempts/NumberAttempts";

class App extends Component {
  state = {
      cells: [],
  };
  componentDidMount() {
    window.addEventListener('load', this.resetGame);
  }
  _generateCells = () => {
    const cells = [];
    for (let i = 0; i < 36; i++) {
      cells.push({clicked: 0, id: i});
    }
    this.setState({cells});
  };
  resetGame = () => {
      this._generateCells();
      this._generateRing();
  };
  _generateRing = () => {
      const cells =
          [...this.state.cells];
      let index = this._getRandomIntInclusive(0, 36);
      for (let i = 0; i < 36; i++) {
          cells[i].ring = (i === index)? "1": "0";
      }
      this.setState({cells});
  };
    _getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    openCell = (id) => {
        const cells =
            [...this.state.cells];
        cells[id].clicked = 1;
        console.log(cells);

        // this.setState({cells});
    };
    render() {
        return (
            <div className="App">
              <PlayingArea
                  key={this.state.cells.id}
                  clicked={this.state.cells.clicked}
              >
                {
                  this.state.cells.map((item) => {
                    return (
                        <Cell
                            key={item.id}
                            clicked={item.clicked}
                            click={this.openCell(item.id)}
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