import animada from "../public/animada.svg"
export default function App() {   // ela só pode retornar uma função
  return (                          // container pai primeiro, depois esquerda e direita
    <div className="w-full h-screen flex bg-[#201B2C]">       
      <div className="w-[50%] h-full flex items-center justify-center flex-col">
      <h1 className="text-[30px] font-bold text-[#00FF88]">Entre para o nosso time</h1>
      <img src={animada} alt="imagem-anima" width={500}/>                    
      </div>
      <div className="w-[50%] h-full flex items-center justify-center">
      <div className="w-[50%] h-[350px] bg-[#2F2942] rounded-xl">
      <div className="w-full h-[15%] flex items-center justify-center">
        <h1 className="text-[30px] text-[#00FF88] font-bold">LOGIN</h1>
      </div>
      <div className="w-full h-[70%] p-[20px]">
        <label htmlFor="user" className="text-white">Usuário</label>
        <input type="text" id="user" className="w-full rounded-md p-[10px] bg-[#514768] text-white"/>
        <label htmlFor="pass" className="text-white">Senha</label>
        <input type="password" id="pass" className="w-full rounded-md p-[10px] bg-[#514768] text-white"/>
      </div>
      <div className="w-full h-[15%]"></div>
      </div>
      </div>
      </div>
  )
}