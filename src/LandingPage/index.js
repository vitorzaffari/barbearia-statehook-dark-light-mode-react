import './style.css';
import { useState } from 'react';


export default function LandingPage() {

    const [ temaEscuro, setTemaEscuro ] = useState(false);
    const alteraTema = () => {
        setTemaEscuro(!temaEscuro);
    }

    return (
        <div className={temaEscuro ? "modo-escuro" : "modo-claro"}>
            <header>
                <img className='logo' src='/assets/barbearia-logo.png' alt='logo' />
                <button onClick={alteraTema} className={temaEscuro ? "modo-escuro" : "modo-claro"}>
                    <img src={temaEscuro ? '/assets/sun.png' : '/assets/moon.png'} alt=' ' />  {temaEscuro ? 'Light' : 'Dark'}</button>
            </header>
            <div className='banner'></div>
            <main>
                <h1>Bem-vindo a Barber Shop</h1>
                <p><strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong></p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
                <p className='p-font'>S. Kelly</p>
            </main>
        </div>
    )
}