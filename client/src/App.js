import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Service } from './components/service';
import { Signup } from './components/signup';
import { Login } from './components/login';
import NavBar from './components/NavBar';
import { AuthenticationProvider } from './components/utils/Authentication';
import RequiredAuth from './components/utils/RequiredAuth';
import { Profile } from './components/profile';
import { Home } from './components/home';
import { Booking } from './components/booking';
import { Explore } from './components/explore';
import { Contact } from './components/contact';
import { Locate } from './components/locate';
import { Nearbyhotel } from './components/nearbyhotel';
import { Cards } from './components/card';
import { Calender } from './components/calender';
function App() {
  return (
    <div className="App">
      <AuthenticationProvider>
      <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/locate" element={<Locate/>}></Route>
      <Route path="/explore" element={<Explore/>}></Route>
      <Route path="/hotel" element={<Cards/>}></Route>
      <Route path="/contactus" element={<RequiredAuth><Contact/></RequiredAuth>}></Route>
      <Route path="/booking" element={<RequiredAuth><Booking/></RequiredAuth>}></Route>
      </Routes>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
