import logo from './logo.svg';
import './App.css';

function AppJSX() {
  const name = '예지';
  const list = [1, 2, 3, 4];
  return (
    <>
      <h1 className="orange">{`Hello, ${name}`}</h1>
      <h2>Hello</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img style={{ width: '200px', height: '200px' }} src={logo} alt="" />
    </>
  );
}

export default AppJSX;
