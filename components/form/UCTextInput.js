import React from "react";
import { View, Text, TextInput } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";
import { lightYellow } from "../../utils/colors";

const StyledView = styled.View`
  padding: 30px;
  width: 100%;
`;
const StyledLabel = styled.Text`
  margin-bottom: 30px;
  font-size: 30px;
  text-align: center;
`;
const StyledTextField = styled.TextInput`
  border-radius: 5px;
  padding: 10px;
  background-color: ${lightYellow};
`;

function UCTextInput({ label, placeholder, onChangeText }) {
  return (
    <StyledView>
      <StyledLabel>{label}</StyledLabel>
      <StyledTextField placeholder={placeholder} onChangeText={onChangeText} />
    </StyledView>
  );
}

UCTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default UCTextInput;
