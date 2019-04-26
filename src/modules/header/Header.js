import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  Head,
  Info,
  Logo,
  Contacts,
  Contact,
  TextWrapper,
  Text,
  Nav,
  Link
} from './Header.styled'

const Header = (props) => {
  const { onSwitchOnCarousel, onSwitchOffCarousel } = props

  console.log(props)

  return(
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
        <NavLink 
          to='/'>
          <Link>Головна</Link>
        </NavLink>
        <NavLink
          onClick={() => onSwitchOffCarousel()} 
          to='/news'>
          <Link>Новини</Link>
        </NavLink>
        <NavLink 
          onClick={onSwitchOffCarousel} 
          to='/gallery'>
          <Link>Галерея</Link>
        </NavLink>
        <NavLink 
          onClick={onSwitchOffCarousel} 
          to='/contacts'>
          <Link>Контакти</Link>
        </NavLink>
      </Nav>
    </>
  )
}

Header.propTypes = {
  onSwitchOnCarousel: PropTypes.func.isRequired,
  onSwitchOffCarousel: PropTypes.func.isRequired
}

export default Header
