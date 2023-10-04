import React from 'react';

class App2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className='box'>
          <div className="title">{this.props.title}</div>
          <div className="text">{this.props.text}</div>
          <div className="children">{this.props.children}</div>
        </div>
      </>
    );
  }
}

export default App2;