import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

class QuizFinished extends Component {
  render() {
    const { correct, questions } = this.props;
    return (
      <View>
        <Text>Quiz Finished!</Text>
        <Text>Your score: {Math.round(correct / questions.length * 100)}%</Text>
        <Text>
          You got {correct} out of {questions.length} questions correct.
        </Text>
      </View>
    );
  }
}

QuizFinished.propTypes = {
  correct: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  const { correct, questions } = state.quiz;
  return { correct, questions };
}

export default connect(mapStateToProps)(QuizFinished);
