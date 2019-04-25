import React from 'react';

import {
  Head,
  Info,
  Logo,
  Contacts,
  Contact,
  TextWrapper,
  Text,
  Nav,
  Link,
  About
} from './Header.styled';

const Header = () => (
  <>
    <Head>
      <Info>
        <Logo>Сади Ветеранів АТО</Logo>
        <Contacts>
          <Contact>
            <img src='../../../src/img/email.png' height='48px' />
            <TextWrapper>
              <Text main>067 289 20 58</Text>
              <Text>igor431954@gmail.com</Text>
            </TextWrapper>
          </Contact>
          <Contact>
            <img src='../../../src/img/place.png' height='48px' />
            <TextWrapper>
              <Text main>Провулок За Рудкою, 6</Text>
              <Text>м.Тернопіль, Україна, 46003</Text>
            </TextWrapper>
          </Contact>
        </Contacts>
      </Info>
    </Head>
    <Nav>
      <Link href='#/'>Головна</Link>
      <Link href='#/news'>Новини</Link>
      <Link href='#/gallery'>Галерея</Link>
      <Link href='#/contacts'>Контакти</Link>
    </Nav>
    <About>
      <p>Офіційна сторінка</p>
      <p>Обслуговуючого кооперативу</p>
      <p>«САДИ ВЕТЕРАНІВ АТО»</p>
      <button>Детальніше</button>
    </About>
  </>
);

export default Header;
