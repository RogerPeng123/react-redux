import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { add } from './redux/action/user'

const App: React.FC = () => {

  //获取 redux 中的数据
  const num: number = useSelector((state: any) => state.user.number)

  //发送 数据变更的方法
  const distpath = useDispatch();

  useEffect(() => {
    console.log('count: ', num)
  })
  return (
    <>
      <div>{num}</div>

      <button onClick={() => { distpath(add(num)) }}>13212</button>
    </>
  );
}

export default App;
