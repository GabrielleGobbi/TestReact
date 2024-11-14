import './App.css';
import Button from './components/Button';
import Greeting from './components/Greeting';
import Title from './components/Title';
import Card from './components/Card'

function App() {
  return (
    <div className="App">
          
      <Title Text='Pagina inicial' />
      <Title Text='Sobre Nos'/>
      <Title Text='contatos'/>
      <Button label={"enviar"}/>
      <Button label={"cancelar"}/>
      <Button label={"Voltar"}/>
     
      <Card>
        <h1>Card de Bem-vindo</h1>  
        <p>Este é o contuido de um card de boas vindas</p>
      </Card>
     
      <Greeting name={"Géssica"}/>
      <Greeting name={"Dani"}/>
      <Greeting name={"Yoko"}/>
      <Greeting name={"Mary"}/>
      <Greeting name={"Andreia"}/>
      <Greeting name={"Guilherme"}/>
      <Greeting name={"Jesus"}/>
      <Greeting name={"Marco"}/>
      <Greeting name={"Erick"}/>

         
      
        
       
    </div>
  )
}

export default App;
