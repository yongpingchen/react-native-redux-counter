import React from 'react';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {count, actions} = this.props;
    return (
      <View style={styles.container}>
      <Text>{count}</Text>
        <Button
          onPress={actions.increment}
          title='+'
        />
        <Button
          onPress={actions.decrement}
          title='-'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CounterComponent