import React, {Component} from 'react';

class Hello extends Component {
  static defaultProps = {
    name: '이름없음'
  };
  
  render() {  // class Component에는 무조건 render() 메소드가 있어야 한다.
    const {color, name, isSpecial} = this.props;
    return (
      <div style={{color}}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

// 위의 static으로도 사용할 수 있음.
// Hello.defaultProps = {
//   name: '이름없음'
// };

export default Hello;

// import React from 'react';

// function Hello({color, name, backgroundColor, jjin}) {
//   return (
//     <div style={{color, backgroundColor}}>
//       {jjin && <b>*</b>}
//       안녕! {name}
//     </div>
//   );
// }

// Hello.defaultProps = {
//   name: '이름없다잉'
// }

// export default Hello;