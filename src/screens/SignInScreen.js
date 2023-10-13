import { View, Text } from "react-native";
import { Button } from "~/components";

export default function SignInScreen({ promtAsync }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SignInScreen</Text>
      <Button label="Sign In" onPress={() => promtAsync()} hideIcon />
    </View>
  );
}
