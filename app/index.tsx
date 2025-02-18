import { Button, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World!!!</Text>
      <Button title="Press me"
        onPress={() => {
          console.log("Button pressed");
        }}
      >
      </Button>
    </View>
  );
}
