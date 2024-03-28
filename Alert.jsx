import { useState } from 'react';
import '../css/App4.css'
import { useNavigate } from 'react-router-dom';
export default function Alert(props){
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleOkButtonClick = () => {
        props.func()
    };
  
    return (
      <div className="App4">
        <div className='Attender'>Attendez-nous <br />votre réponse</div>
        <br />
        <div className='hr'>Il y a 24 heures pour<br />confirmer votre <br />publication</div>
        <br />
      <button type="submit" className="OK" onClick={handleOkButtonClick}>OK</button>
    
    </div>
  
    );
}