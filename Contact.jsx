import { useState } from "react";
import '../css/App3.css'
import { Link } from "react-router-dom";
export default function Contact(props) {
    const [telephone1, setTelephone1] = useState('');
    const [titre, settitre] = useState('');
    const [description, setDescription] = useState('');
    const [choose, setchoose] = useState([]);
    const [Info, setInfo] = useState({
        telephone1: '',
        description: "",
        titre: "",
        choose: []

    })

    const handleBackButtonClick = () => { };
    const handleNextButtonClick = () => { };
    const handleAjouterButtonClick = () => {
        document.querySelector('#file').click();
    };
    const Handelchoose = (e) => {
        const name = e.target.getAttribute("name");
        const isSelected = Info.choose.includes(name);
        if (!isSelected) {
            setInfo({ ...Info, choose: [...choose, name] });

        } else {
            setInfo({ ...Info, choose: [...choose.filter(item => item !== name)] });
        }
    };


    return (
        <>
            <div className="App3">
                <div className=''>
                    <p className='para'>Caractéristique</p>
                    <p className='para'>Générale</p>
                    <div className='imagess1'>
                        <div className='img-4' onClick={Handelchoose} name='Jardin' id="Jardin" style={{ backgroundColor: choose.includes('Jardin') ? 'aqua' : 'transparent' }}> <img src="images/Jardin.jpeg" alt="not found" /><br />
                            <p>Jardin</p></div>
                        <div className='img-4' onClick={Handelchoose} name='Terras' id="Terras" style={{ backgroundColor: choose.includes('Terras') ? 'aqua' : 'transparent' }}>  <img src="images/Terras.jpeg" alt="not found" /><br />
                            <p>Terras</p></div>
                        <div className='img-4' onClick={Handelchoose} name='Concierge' style={{ backgroundColor: choose.includes('Concierge') ? 'aqua' : 'transparent' }}>  <img src="images/Concierge.jpeg" alt="not found" /><br />
                            <p>Concierge</p></div>
                        <div className='img-4' onClick={Handelchoose} name='Acenseur' style={{ backgroundColor: choose.includes('Acenseur') ? 'aqua' : 'transparent' }}>  <img src="images/Acenseur.jpeg" alt="not found" /><br />
                            <p>Acenseur</p></div>
                        <div className='img-4' onClick={Handelchoose} name='Piscine ' style={{ backgroundColor: choose.includes('Piscine') ? 'aqua' : 'transparent' }}>  <img src="images/Piscine.jpeg" alt="not found" /><br />
                            <p>Piscine</p></div>
                        <div className='img-4' onClick={Handelchoose} name='carage' style={{ backgroundColor: choose.includes('carage') ? 'aqua' : 'transparent' }}>  <img src="images/carage.jpeg" alt="not found" /><br />
                            <p>carage</p></div>
                    </div>
                    <p className='para'>Intérieur</p>
                    <div className='imagess1'>
                        <div className='img-3' onClick={Handelchoose} name='Connecte' style={{ backgroundColor: choose.includes('Connecte') ? 'aqua' : 'transparent' }}> <img src="images/Connecte.jpeg" alt="not found" /><br />
                            <p>Connecte</p></div>
                        <div className='img-3' onClick={Handelchoose} name='Sécurité' style={{ backgroundColor: choose.includes('Sécurité') ? 'aqua' : 'transparent' }}>  <img src="images/Sécurité.jpeg" alt="not found" /><br />
                            <p>Sécurité</p></div>
                        <div className='img-3' onClick={Handelchoose} name='Cheminé' style={{ backgroundColor: choose.includes('Cheminé') ? 'aqua' : 'transparent' }}>  <img src="images/Cheminé.jpeg" alt="not found" /><br />
                            <p>Cheminé</p></div>
                        <div className='img-3' onClick={Handelchoose} name='Porte' style={{ backgroundColor: choose.includes('Porte') ? 'aqua' : 'transparent' }}>  <img src="images/Porte.jpeg" alt="not found" /><br />
                            <p>Porte Blindé</p></div>
                        <div className='img-3' onClick={Handelchoose} name='Climatisé' style={{ backgroundColor: choose.includes('Climatisé') ? 'aqua' : 'transparent' }}>  <img src="images/Climatisé.jpeg" alt="not found" /><br />
                            <p>Climatisé</p></div>
                        <div className='img-3' onClick={Handelchoose} name='Meuble' style={{ backgroundColor: choose.includes('Meuble') ? 'aqua' : 'transparent' }}>  <img src="images/Meuble.jpeg" alt="not found" /><br />
                            <p>Meuble</p></div>
                    </div>
                    <p>Télécharger Des Photos</p>
                    <div className='textera'>
                        <div type="file" className='b-Ajouter' onClick={handleAjouterButtonClick}>
                            <input type="file" hidden id="file" />
                            + <br />Ajouter</div>
                    </div>
                    <p className='para'>Informatique De La Puplique</p>
                    <div className='pld-0635'>
                        <div>
                            <p className='para'>Téléphone</p>
                            <input type="text" placeholder='0635066827' value={Info.telephone1} onChange={(e) => setInfo({ ...Info, Telephone1: e.target.value })} />
                        </div>
                        <div>
                            <p className='para'>Titre</p>
                            <input type="text" placeholder='Titre' className='in2' value={Info.titre} onChange={(e) => setInfo({ ...Info, titre: e.target.value })} />
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='para'>Description</p>
                            <textarea type="text" className='Description' value={Info.description} onChange={(e) => setInfo({ ...Info, description: e.target.value })} />
                        </div>

                        <button type="button" className="Next-botton3" onClick={() => props.func1()}>
                            <img src="images/ico2.jpeg" className='Next-botton3-imgs' />Retour</button>


                        <button type="button" className="Next-botton4" onClick={() => { props.func(Info) }}>Next</button>
                    </div>

                </div>
            </div>
        </>
    );

}