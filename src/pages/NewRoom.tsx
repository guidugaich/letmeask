import { Button } from '../components/Button';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Link } from 'react-router-dom';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="ilustração perguntas e respostas"
        />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas da sua audiênia em tempo real</p>
      </aside>
      <main className="main-content">
        <div>
          <img src={logoImg} alt="letmeask" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar Sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}