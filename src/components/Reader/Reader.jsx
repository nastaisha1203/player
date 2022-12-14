import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_Key = 'key_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  // --------------- 1 спосіб------------

  //   onPrev = () => {
  //     this.setState(prevState => ({ index: prevState.index - 1 }));
  //   };
  //   onNext = () => {
  //     this.setState(prevState => ({ index: prevState.index + 1 }));
  //   };

  // ------------------ 2 спосіб ---------------
  onChange = value => {
    this.setState(prevState => ({ index: prevState.index + value }));
  };

  componentDidMount() {
    const savedIndex = localStorage.getItem(LS_Key);
    if (savedIndex) {
      this.setState({ index: Number(savedIndex) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_Key, this.state.index);
    }
  }
  render() {
    const { items } = this.props;
    const { index } = this.state;
    const currentItem = items[index];
    return (
      <div>
        <Controls
          current={index + 1}
          total={items.length}
          onChange={this.onChange}
        />
        <Progress current={index + 1} total={items.length} />
        <Publication item={currentItem} />
      </div>
    );
  }
}
