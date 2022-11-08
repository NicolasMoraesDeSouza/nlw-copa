import Logo  from '../assets/logo.svg'
import { Center, Icon, Image, Text } from "native-base";
import { Button } from '../components/button';



export function SignIn() {

    return (
       
        <Center flex={1} bgColor="gray.900">    
          <Logo fill="#FFFF" width={212} height={40} />
          <Button text='ENTRAR COM GOOGLE' type='SECONDARY' marginTop={48} />
          <Text color='white' textAlign='center' marginTop={16}> 
          Não utilizamos nenhuma informação além do seu e-mail para criação de sua conta.
          </Text>
            
        </Center>
        
    )
}