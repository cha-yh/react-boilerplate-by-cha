import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSomethingAsync, getExample } from 'store/modules/example';
import image from 'images/exampleImg/window.png';

import classnames from 'classnames/bind';
import styles from './ExampleContainer.module.scss';
import './ExampleContainer.scss';

import ExampleComponent from './ExampleComponent';

const cx = classnames.bind(styles);

class TestContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      loading: false
    }
    this.changeInput = this.changeInput.bind(this);
    this.prev = this.prev.bind(this);
    this.next = this.next.bind(this);
  }

  componentDidMount() {
    this.props.getExample(this.state.index);
  }

  loadingWrapper = async (func) => {
    this.setState({
      loading: true
    });
    await func;
    this.setState({
      loading: false
    });

  }


  changeInput(e) {
    this.props.setSomethingAsync(e.target.value)
  }

  prev = async () => {
    let index = this.state.index;
    this.loadingWrapper(this.props.getExample(index-1))
    this.setState({
      index: index - 1
    });
  }

  next = async () => {
    let index = this.state.index;
    this.loadingWrapper(this.props.getExample(index + 1));
    this.setState({
      index: this.state.index + 1,
    });
  }

  render() {
    console.log('this.props.pender :', this.props.pender);
    const { something, data } = this.props;
    const {loading} = this.state;
    return (

        <div className={cx('container')}>
          <ExampleComponent />
          <div className={cx('async_test')}>
            <h3>Async input</h3>
            <input type="text" onChange={this.changeInput} />
            <p>Async text : {something}</p>
          </div>

          <div className={cx('dummy_text_loader', {loading})}>
            <h1>{data && data.title}</h1>
            <div className={cx('row')}>
              <button className={cx('next-btn')} onClick={this.prev}>prev</button>
              <p>{this.state.index}</p>
              <button className='next-btn' onClick={this.next}>next</button>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="test">
            <p>test</p>
          </div>
        </div>
    );
  }
}

const mapStateToProps = ({ example, pender }) => ({
  something: example.something,
  data: example.data,
  pender
});

const mapDispatchToProps = { setSomethingAsync, getExample };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);