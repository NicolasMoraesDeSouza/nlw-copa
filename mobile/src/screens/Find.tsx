import { Heading, Text, VStack } from "native-base";
import { Header } from "../components/Header";
import Logo from '../assets/icon.svg'
import { Input } from "../components/Input";
import { Button } from "../components/button";
export function Find () {
    return ( 
        <VStack flex={1} bgColor='gray.900'>
            <Header title="Crie seu novo bolão" showBackButton/>
            <VStack mt={8} mx={5} alignItems='center'>
                 <Logo />
                 <Heading fontFamily='heading' color='white' fontSize='xl' mb={8} textAlign='center'>
                    Crie seu próprio bolão da copa {'\n'} 
                    e compartilhe com os amigos!
                 </Heading>
                 <Input mb={2} placeholder='Qual o nome do seu bolão? '/>
                 <Button title="Criar meu bolão" />
                

                 
            </VStack>
        </VStack>
    )
}