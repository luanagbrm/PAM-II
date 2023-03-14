import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Text, Image, TextInput, View, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import estilo from './src/style.js';
import { Feather } from '@expo/vector-icons';

export default function App() {
  return (
    <View style = {estilo.container}>
      <LinearGradient
          colors = {['#D70270','#734F96', "#0038A8"]}
          style = {estilo.gradientBackground}>

              <Image source = {{ uri: 'https://images.vexels.com/media/users/3/135535/isolated/lists/b79e409078ebfbc02e8615b2ed5938c6-icone-de-borboleta.png'}} style = {estilo.imagem} />

          </LinearGradient>
          <View style = {estilo.box}>
              <Text style = {estilo.titulo}>Carteirinha</Text>
              <View style = {estilo.viewIcon}>
                  <Feather name="user" size={24} color="black" />
                  <TextInput style = {estilo.input} placeholder='E-mail (ex: contato@email.com)' />
              </View>
              <View style = {estilo.viewIcon}>
                  <Feather name="key" size={24} color="black" />
                  <TextInput style = {estilo.input} secureTextEntry={true} placeholder='Senha' />
              </View>
          
              <TouchableOpacity style = {estilo.button}>
              <Text style = {estilo.btnText}>ENTRAR</Text>

              </TouchableOpacity>
          
          </View>

         

    </View>
  );
}


