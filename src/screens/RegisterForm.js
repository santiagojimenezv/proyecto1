import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [lastname, setLastname] = useState("");
  const [documentType, setDocumentType] = useState("Cédula de ciudadanía");
  const [documentNumber, setDocumentNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log("Información del usuario", {
      userName,
      lastname,
      documentType,
      documentNumber,
      email,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Formulario de registro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre(s)"
        value={userName}
        onChangeText={setUserName}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido(s)"
        value={lastname}
        onChangeText={setLastname}
      />
      <Picker
        selectedValue={documentType}
        onValueChange={(itemSelected) => setDocumentType(itemSelected)}
      >
        <Picker.Item
          label="Cédula de ciudadanía"
          value="Cédula de ciudadanía"
        />
        <Picker.Item label="Cédula extranjera" value="Cédula extranjera" />
        <Picker.Item label="Pasaporte" value="Pasaporte" />
      </Picker>
      <TextInput
        style={styles.input}
        placeholder="Número de documento"
        value={documentNumber}
        onChangeText={setDocumentNumber}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Registrarse" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,

  },
  input: {
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
  },
});

export default RegisterForm;