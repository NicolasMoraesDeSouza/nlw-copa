import { Button as ButtonNativeBase, Text, IButtonProps, Icon } from 'native-base'
import GoogleLogo from '../assets/GoogleLogo.svg'
import { Fontisto } from '@expo/vector-icons'
interface ButtonProps extends IButtonProps {
    text: string,
    type: 'PRIMARY' | 'SECONDARY';
}

export function Button({ text, type = 'PRIMARY', ...rest }: ButtonProps) {
    return (
        <ButtonNativeBase leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
            rounded={4}
            _pressed={{
                bg: type === 'SECONDARY'? 'red.400' : 'yellow.600'
            }}
            width={320}
            height={52}
            textTransform='uppercase'
            bg={type === 'SECONDARY' ? 'red.500' : 'yellow .600'}
            {...rest}
        >

            <Text
            fontSize='sm'
            fontFamily='heading'
            color={type === 'SECONDARY' ? '#FFFF' : 'black'}
            >
                {text}
            </Text>
        </ButtonNativeBase>
    )
};
