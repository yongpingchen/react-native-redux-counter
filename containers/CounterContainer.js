import React from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import CounterComponent from '../components/CounterComponent'

function increment() {
    return {
      type: "INCREMENT"
    }
  }

  function decrement() {
    return {
      type: "DECREMENT"
    }
  }

  function mapStateToProps(state) {
    return { count: state.count}
  }

  function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({increment:increment, decrement:decrement}, dispatch) }
  }


  export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
