import React, { PureComponent } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchField from './SearchField';
import Display from './Display';
import filterEmoji from './filterEmoji';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filterEmojiVal: filterEmoji("", 20)
    }
  }

  handleIputValues = e => {
    this.setState({
      filterEmojiVal: filterEmoji(e.target.value, 20)
    })
  }

  render() {
    return (
      <div className="App">
        <SearchField inputChange={this.handleIputValues} />
        <Display emojiVal={this.state.filterEmojiVal} />
      </div>
    )
  }
}

