import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import AccountList from './components/AccountList';
import { BrowserRouter, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element={<AccountList />}></Route>
        {/* http://localhost:3000/employees */}
        <Route path='/accounts' element={<AccountList />}></Route>
      </Routes>
      <AccountList />
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;