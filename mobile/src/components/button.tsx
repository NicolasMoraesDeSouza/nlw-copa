import { Button as ButtonNativeBase, Text, IButtonProps, Icon } from 'native-base'
import GoogleLogo from '../assets/GoogleLogo.svg'
import { Fontisto } from '@expo/vector-icons'
interface ButtonProps extends IButtonProps  {
    bgColor: string,
    text: string
}

export function Button(props: ButtonProps) {
    return (
        <ButtonNativeBase leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />} rounded={4} bgColor={props.bgColor} width={320} height={52}>
            
            <Text>
                {props.text}
            </Text>
        </ButtonNativeBase>
    )
};
