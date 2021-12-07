import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import {  View, Image, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';


WebBrowser.maybeCompleteAuthSession();

export default function Login2({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '1043422122777-lcm35vu42ddq94m8hq9rfcr3bukfklkq.apps.googleusercontent.com'
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log(response);
      navigation.navigate("Home", {auth: response.authentication})
      }
  }, [response]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../perfil.png')}/>
      <Button
        disabled={!request}
        title="Continuar con Google"
        buttonStyle={{backgroundColor:"#DB4437"}}
        icon={<Icon style={{marginRight:15}} name="logo-google" type="ionicon" size={30} color="white" />}
        
        onPress={() => {
          promptAsync();
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  tinyLogo: {
    marginTop: 100,
    marginBottom: 20,
    width: 200,
    height: 200,
    borderRadius: 150/1
  },
});
