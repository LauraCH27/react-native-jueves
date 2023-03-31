//tarea hacerle password, email, telefono, age, rango de edad
import { StyleSheet, Text, View} from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';


export default function App() {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullname: '',
      email: '',
      phone: '',
      password: '',
      age: ''
    }
  });
  const onsubmit=(data) =>{
    console.log(data);//objeto
    const {fullname,email,phone,
      password,age}=data;
      //desestructurar el objeto
    console.log(fullname)
    //limpiar formulario
    reset();

  }
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        rules={{
         required: true,
         maxLength:30,
         minLength: 2,
         pattern: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Nombre completo"
            mode='outlined'
            left={<TextInput.Icon icon="account-box"/>}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value} 
          />
          
        )}
        name="fullname"
      />
      {errors.fullname?.type == 'required' && <Text style={{color:'red'}}>El nombre completo es obligatorio</Text>}
      {errors.fullname?.type == 'maxLength' && <Text style={{color:'red'}}>EL nombre completo debe tener max 30 caracteres </Text>}
      {errors.fullname?.type == 'minLength' && <Text style={{color:'red'}}>EL nombre completo debe tener al menos 2 caracteres</Text>}
      {errors.fullname?.type == 'pattern' && <Text style={{color:'red'}}>EL nombre completo permite solo letras / espacios</Text>}
      <Button 
      style={{marginTop:20}}
      icon="send" 
      mode="contained"
      onPress={handleSubmit(onsubmit)}
      >
       Enviar
  </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
