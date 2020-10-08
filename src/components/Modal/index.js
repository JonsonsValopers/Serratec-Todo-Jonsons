import React, { useState } from "react";
import {
  Alert,
  Modal,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const Modal_ = ({visivel, setVisivel}) => {

  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visivel}
        onRequestClose={() => {
        setVisivel(false)
        }}
      >
           
        <TouchableHighlight
            onPress={() => {
            setVisivel(!visivel);
            }}
        >
        <Text >teste {visivel?"true":"false"}</Text>
        </TouchableHighlight>

      </Modal>
  );
};

export default Modal_;