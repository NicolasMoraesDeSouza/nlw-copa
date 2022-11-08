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
            bg={type === 'SECONDARY' ? '#DB4437' : '#FDE34D'}
            _pressed={{
                bg: type === 'SECONDARY'? 'red.400' : 'yellow.600'
            }}
            width={320}
            height={52}
            textTransform='uppercase'
            _loading={{
                _spinner: { color: 'black'}
            }}
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
