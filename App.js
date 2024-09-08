import {  Text } from "react-native";
import { styles } from "./style.js";
import Button from "./src/components/button/button.jsx";

export default function App() {
  return (
    <>
      <Text style={styles.texto}>Fala Pantera</Text>
      <Button texto="Acessar" />
    </>
  );
}
