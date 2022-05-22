import logo from './logo.svg';
import './App.css';
import{button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <header>
            <div class="header">
                <div class="city">
                     <a href="#">City</a>
                </div>
                <div class="empty">

                </div>
                  <div clss="document">
                    <a href='#'>Document</a>
                 </div>
                 <div class="contakt">
                    <a href="#">Contakt</a>
                 </div>
                  <div class="download">
                    <a href="#">Download</a>
                  </div>
                
            </div>    
        </header>   
  );
}

export default App;

