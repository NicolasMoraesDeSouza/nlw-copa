import Logo  from '../assets/logo.svg'
import { Center, Icon, Image, Text } from "native-base";
import { Button } from '../components/button';



export function SignIn() {

    return (
       
        <Center flex={1} bgColor="gray.900">    
          <Logo fill="#FFFF" width={212} height={40} />
          <Button text='ENTRAR COM GOOGLE' bgColor='#DB4437'/>
            
        </Center>
        
    )
}