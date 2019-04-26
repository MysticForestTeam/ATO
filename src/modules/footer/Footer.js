import React from 'react'

import { 
    Wrapper,
    Info,
    Text
} from './Footer.styled'

const Footer = () => (
    <Wrapper>
        <Info src='../../img/place.png'>
            <Text header>
                Головний офіс
            </Text>
            <Text>Сакраменто вул. 15 квітня</Text>
        </Info>
        <Info src='../../img/email.png'>
            <Text header>
                Напишіть нам
            </Text>
            <Text>warriors@gmail.com</Text>
        </Info>
        <Info src='../../img/3.png'>
            <Text header>
                Подзвоніть нам
            </Text>
            <Text>+380768547834</Text>
        </Info>
    </Wrapper>
)

export default Footer