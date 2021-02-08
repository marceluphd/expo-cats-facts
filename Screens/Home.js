import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
} from "react-native";
import { Actions } from "react-native-router-flux";
import { ListItem } from "react-native-elements";
import { useFetch } from "../Hooks/useFetch";

const requestOptions = {
  method: "GET",
};

const Home = () => {
  const [facts, setFacts] = useState();
  const { response } = useFetch("https://cat-fact.herokuapp.com/facts");

  useEffect(() => {
    try {
      setFacts(response);
    } catch (error) {
      console.log(error);
      // setFacts({text: 'loading'})
    }
    console.log("cargo");
  }, [response]);

  const renderItem = ({ item, index }) => {
    return (
      <ListItem
        bottomDivider
        onPress={() => {
          Actions.Detail({ title: `Cat Fact #${index - 1}`, text: item.text });
        }}
      >
        <ListItem.Content>
          <ListItem.Title>{`Cat Fact #${index - 1}`}</ListItem.Title>
          <ListItem.Subtitle style={{ padding: 10 }}>
            {item.text}
          </ListItem.Subtitle>
        </ListItem.Content>

        <ListItem.Chevron />
      </ListItem>
    );
  };

  return (
    <FlatList
      data={facts}
      renderItem={(fact, i) => renderItem(fact, i)}
      keyExtractor={(item, i) => `${item.id}${i}`}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    color: "black",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
});

export default Home;
