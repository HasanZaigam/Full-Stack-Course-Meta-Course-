import Heading from './heading';
import './App.css';

function  Header(){

  const randomNumber = () => Math.floor(Math.random() *10) + 1 ;
  let name = "Ram";
  return (
    <>
    <div>
      <Heading firstName={name === 'bob'? "this is bob" : "i didn't know him/her"} />
      <Heading firstName="Give any other name expect bob" />
      

      <h1> Here is a random Number {randomNumber()}</h1>

    </div>
    </>
  );
}
function App() {
  return (
   <Header />
  );
}

export default App;
