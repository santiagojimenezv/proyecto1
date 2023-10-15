import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  Button,
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const Posts = () => {
  const [postsList, setPostsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    subtitle: '',
    description: '',
    avatar: null,
    active: false,
  });

  const handleCreatePost = () => {
    axios
      .post(`http://192.168.1.18:3000/api/v1/posts/new-post`, newPost)
      .then((response) => {
        console.log('Data', response.data);
        setModalVisible(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeletePost = (postId) => {
    const updatePosts = postsList.filter((post) => post._id !== postId);
    setPostsList(updatePosts);
    axios
      .delete(`http://192.168.1.18:3000/api/v1/posts/delete/${postId}`)
      .then((response) => console.log('Data', response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      throw Error('Camera was cancelled');
    } else {
      setNewPost({ ...newPost, avatar: result.assets[0].uri });
    }
    console.log(newPost);
  };

  const listPosts = () => {
    axios
      .get(`http://192.168.1.18:3000/api/v1/posts/`)
      .then((response) => {
        setPostsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    listPosts();
  }, []);

  return (
    <SafeAreaView style={{ marginTop: 50, flex: 1 }}>
      <FlatList
        data={postsList}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.flatListContainer}>
            {item.avatar && (
              <Image source={{ uri: item.avatar }} style={{ width: 200, height: 200 }} />
            )}

            <Text style={styles.titleText}>TITLE: {item.title}</Text>
            <Text>SUBTITLE: {item.subtitle}</Text>
            <Text>DESCRIPTION: {item.description}</Text>
            <Text>ACTIVE: {item.active ? 'Y' : 'N'}</Text>
            <Button style={{ width: 10 }} title="Delete" onPress={() => handleDeletePost(item._id)} />
          </View>
        )}
      />

      <Button style={{ marginBottom: 20 }} title="New Post" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Title</Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(title_text) => {
                setNewPost({ ...newPost, title: title_text });
              }}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Subtitle</Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(subtitle_text) => {
                setNewPost({ ...newPost, subtitle: subtitle_text });
              }}
            />
          </View>

          <Button title="Upload Image" onPress={pickImage} />
          {newPost.avatar && <Image source={{ uri: newPost.avatar }} style={{ width: 200, height: 200 }} />}

          <View style={styles.inputContainer}>
            <Text style={styles.inputTitle}>Description </Text>
            <TextInput
              style={styles.inputBox}
              onChangeText={(description_text) => {
                setNewPost({ ...newPost, description: description_text });
              }}
            />
          </View>

          <Button onPress={handleCreatePost} title="Create"></Button>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    marginBottom: 20,
    width: '80%',
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    marginBottom: 10,
  },
  flatListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
