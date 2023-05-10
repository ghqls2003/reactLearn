import React from 'react';

function Hello({color, name, backgroundColor, jjin}) {
  return (
    <div style={{color, backgroundColor}}>
      {jjin && <b>*</b>}
      안녕! {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름없다잉'
}

export default Hello;