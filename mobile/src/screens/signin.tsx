import Logo  from '../assets/logo.svg'
import { Center, Icon, Image, Text } from "native-base";
import { Button } from '../components/button';
import { useAuth } from '../hooks/useAuth';



export function SignIn() {

  const { signIn, user } = useAuth();

  console.log('Dados do usuario: ' + user)
  
    return (
       
        <Center flex={1} bgColor="gray.900" p={7}>    
          <Logo fill="#FFFF" width={212} height={40} />
          <Button text='ENTRAR COM GOOGLE' type='SECONDARY' marginTop={48} onPress={signIn} />
          <Text color='white' textAlign='center' marginTop={4}> 
          Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
          </Text>
            
        </Center>
        
    )
}