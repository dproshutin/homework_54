import React, {Component} from 'react';
import './App.css';
import PlayingArea from "../components/PlayingArea/PlayingArea";

class App extends Component {
    render() {
        return (
            <div className="App">
              <PlayingArea></PlayingArea>
            </div>
        );
    }
}

export default App;