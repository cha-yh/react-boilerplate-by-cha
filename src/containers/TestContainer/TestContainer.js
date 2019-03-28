import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSomethingAsync, axiosTest } from '../../store/modules/counter';
let i = 1;
class TestContainer extends Component {
  constructor(props) {
    super(props);
    this.changeInput = this.changeInput.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.props.axiosTest(i);
  }
  
  
  changeInput(e) {
    this.props.setSomethingAsync  (e.target.value)
  }

  prev() {
    this.props.axiosTest(i--)
  }

  next() {
    this.props.axiosTest(i++)
  }

  render() {
    console.log('this.props.pender :', this.props.pender);
    const { something, data } = this.props;
    return (
      <div>
        <div>{something}</div>
        <input type="text" onChange={this.changeInput}/>

        <h1>{data&&data.title}</h1>
        <button onClick={this.prev}>prev</button>
        <button onClick={this.next}>next</button>
      </div>
    );
  }
}

const mapStateToProps = ({ counter, pender }) => ({
  something: counter.something,
  data: counter.data,
  pender
});

const mapDispatchToProps = { setSomethingAsync, axiosTest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);