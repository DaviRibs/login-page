import { useState } from "react"; // Importa o hook useState para gerenciar estado
import { ToastContainer, toast } from 'react-toastify'; // Biblioteca para exibir notificações
import 'react-toastify/dist/ReactToastify.css'; // Importa os estilos padrões do Toastify
import { Bounce } from 'react-toastify'; // Importa o efeito Bounce para animação dos toasts
import animada from "../public/animada.svg"

export default function App() { // Define o componente principal do aplicativo
  const [user, setUser] = useState(""); // Estado para armazenar o usuário digitado
  const [pass, setPass] = useState(""); // Estado para armazenar a senha digitada

  function clickLogin() { // Função chamada ao clicar no botão de login
    if (!user || !pass) { // Verifica se os campos estão preenchidos
      return toast.error("Preencha todos os campos"); // Exibe um toast de erro caso falte informações
    }
   
    if(user.length < 8 ||pass.length < 8 ){
      return toast.error("Usuário ou senha inválidos")
    }
    
    toast.success("🦄 Wow so easy!", { // Exibe um toast de sucesso
      position: "top-right",
      autoClose: 5000, 
      hideProgressBar: false, 
      closeOnClick: false, 
      pauseOnHover: true, 
      draggable: true, 
      progress: undefined,
      theme: "dark", 
      transition: Bounce, 
    });

    console.log(user); // Exibe o usuário digitado no console
    console.log(pass); // Exibe a senha digitada no console
  }

  return ( // Renderiza o layout do componente
    <div className="w-full h-screen flex bg-[#201B2C]"> {/* Container principal */}
      <ToastContainer position="top-right" autoClose={5000} theme="colored" /> {/* Componente responsável por exibir os toasts */}

      <div className="w-[50%] h-full flex items-center justify-center flex-col"> {/* Container da esquerda */}
        <h1 className="text-[30px] font-bold text-[#00FF88]">Entre para o nosso time</h1> {/* Título */}
        <img src="/animada.svg" alt="imagem-anima" width={500} /> {/* Imagem animada */}
      </div>

      <div className="w-[50%] h-full flex items-center justify-center"> {/* Container da direita */}
        <div className="w-[50%] h-[350px] bg-[#2F2942] rounded-xl"> {/* Card do login */}
          <div className="w-full h-[15%] flex items-center justify-center"> {/* Área do título */}
            <h1 className="text-[30px] text-[#00FF88] font-bold">LOGIN</h1>
          </div>

          <div className="w-full h-[60%] p-[20px]"> {/* Formulário de login */}
            <label htmlFor="user" className="text-white">Usuário</label> {/* Label do usuário */}
            <input
              onChange={(event) => setUser(event.target.value)} // Atualiza o estado do usuário
              type="text"
              id="user"
              className="w-full rounded-md p-[10px] bg-[#514768] text-white"
            />

            <label htmlFor="pass" className="text-white">Senha</label> {/* Label da senha */}
            <input
              onChange={(event) => setPass(event.target.value)} // Atualiza o estado da senha
              type="password"
              id="pass"
              className="w-full rounded-md p-[10px] bg-[#514768] text-white"
            />

            <div className="w-full flex items-center justify-center text-white pt-1"> {/* Link para recuperação de senha */}
              <a href="">Esqueceu sua senha?</a>
            </div>
          </div>

          <div className="w-full h-[25%] p-[20px] flex items-center"> {/* Botão de login */}
            <button
              onClick={clickLogin} // Chama a função ao clicar no botão
              className="w-full h-[50px] text-[18px] font-bold text-[#201B2C] rounded-lg bg-[#00FF88] shadow-lg shadow-[#33f79c63]">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
