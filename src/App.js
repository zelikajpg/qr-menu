import QrCode from "../src/QrCode";
import "./App.css";
import Navbar from './NavBar';
import Footer from './Footer';
import menu1 from '../src/img/menu1.jpg'


export default function App() {
    return (
        <div>
            {/*<QrCode/>*/}
            {/*<Navbar /> /!* Navbar bileşeni *!/*/}
            <div className="section container">
                <img src={menu1} alt="Menu" />
                <img src={menu1} alt="Menu" />
                <img src={menu1} alt="Menu" />
            </div>
            {/*<Footer /> /!* Footer bileşeni *!/*/}
        </div>
    );
}