import React from "react";
import { TouchableOpacity, Text } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { orange, lightGreen, lightYellow } from "../../utils/colors";

const buttonTypeColors = {
  primary: orange,
  secondary: lightGreen,
  correct: "green",
  incorrect: "red"
};

function UCButton({ text, buttonType, onPress }) {
  const StyledButton = styled.TouchableOpacity`
    margin-bottom: 20px;
    padding: 15px 40px;
    border-radius: 5px;
    background-color: ${buttonType
      ? buttonTypeColors[buttonType]
      : lightYellow};
  `;

  return (
    <StyledButton onPress={onPress}>
      <Text>{text}</Text>
    </StyledButton>
  );
}

UCButton.propTypes = {
  text: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  onPress: PropTypes.func
};

export default UCButton;
