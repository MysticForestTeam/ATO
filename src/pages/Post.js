import React, { Component } from 'react';

import Header from '../containers/modules/Header';
import Content from '../components/Post/Post';

class Post extends Component {
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    // Api req for post with same id
  }

  render() {
    return (
      <>
        <Content
          images={['../src/img/header.png']}
          title='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec lacus
          placerat, accumsan justo quis, ultrices nibh. Nullam hendrerit tortor.'
          text={`Lorem Ipsum - це текст-"риба", що використовується в друкарстві та
        дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя,
        коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку
        зразків шрифтів. "Риба" не тільки успішно пережила п'ять століть, але й
        прижилася в електронному верстуванні, залишаючись по суті незмінною.
        Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню
        зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге -
        нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus
        Pagemaker, які використовували різні версії Lorem Ipsum.`}
          author='Rainchuk Vitaliy'
          date={Date.now()}
        />
      </>
    );
  }
}

export default Post;
