import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const emperors: Array<string> = [
  'Nurhaci',
  'Hongtaiji',
  'Shunzhi',
  'Kangxi',
  'Yongzheng',
  'Qianlong',
  'Jiaqing',
  'Daoguang',
  'Xianfeng'
];

const consorts: Array<string> = ['Yang Guifei', 'Sisi', 'Da Qiao'];

const App: React.FC = () => {
  return (
    <Router>
      <Route
        path='/ministers'
        component={() => (
          <ul>
            {emperors.map(min => (
              <li>{min}</li>
            ))}
          </ul>
        )}
      />
      <Route
        path='/consorts'
        component={() => (
          <ul>
            {consorts.map(cs => (
              <li>{cs}</li>
            ))}
          </ul>
        )}
      />
      <Route
        path='/'
        exact
        component={() => (
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='App-logo' alt='logo' />
              <h1>Forbidden Palace</h1>
            </header>
          </div>
        )}
      />
    </Router>
  );
};

export default App;
