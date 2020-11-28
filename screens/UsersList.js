import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Button } from "react-native";
import firebase from "../database/firebase";
import { ListItem, Avatar } from "react-native-elements";

const UsersList = props => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    firebase.db.collection("users").onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.docs.forEach(doc => {
        const { name, email, phone } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone
        });
      });

      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Agregar Usuario"
        onPress={() => props.navigation.navigate("CreateUserScreen")}
      />
      {users.map(user => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              redondeado
              source={{
                uri:
                  "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:scenic:/international/nick.co.uk/shows/avatar/show-cover-avatar.jpg?quality=0.75&height=0&width=480&matte=true&crop=false"
              }}
              rounded
            />

            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UsersList;
