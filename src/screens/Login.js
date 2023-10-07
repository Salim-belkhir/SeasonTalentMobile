import { View } from "react-native";
import { LoginLayout } from "~/components";

const Login = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <LoginLayout navigation={navigation}/>
    </View>
  );
};

export default Login;
