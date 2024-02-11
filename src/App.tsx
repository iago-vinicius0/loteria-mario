import { useEffect, useState } from 'react';
import './App.css';
import TabLoteria from './components/tabLoteria';

export default function App() {
  const numberOptions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24, 25
  ];

  const length = [1, 2, 3, 4, 5];
  const [gerado, setGerado] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState<any>([]);
  const [selectedNumbers2, setSelectedNumbers2] = useState<any>([]);
  const [selectedNumbers3, setSelectedNumbers3] = useState<any>([]);
  const [selectedNumbers4, setSelectedNumbers4] = useState<any>([]);
  const [selectedNumbers5, setSelectedNumbers5] = useState<any>([]);


  function gerar() {
    setGerado(true);
    const totalRandomNumbers = 15; // Limite máximo de 15 números por conjunto
  
    // Números selecionados
    const selectedNumbersSet = new Set(selectedNumbers.slice(0, 5)); // Garante que não haja duplicatas
    const selectedNumbersArray = Array.from(selectedNumbersSet); // Converte para array
  
    // Preenche os conjuntos com os números selecionados
    let tempNumbers1 = [...selectedNumbersArray];
    while (tempNumbers1.length < 15) {
      const randomNumber = getRandomNumber();
      if (!tempNumbers1.includes(randomNumber)) {
        tempNumbers1.push(randomNumber);
      }
    }
    setSelectedNumbers(tempNumbers1); // Atualiza o estado para o primeiro conjunto de números aleatórios
    console.log("JOGO PRINCIPAL", tempNumbers1);
  
    // Repete o processo para os outros conjuntos de números selecionados (tempNumbers2, tempNumbers3, ...)
    let tempNumbers2 = [...selectedNumbersArray];
    while (tempNumbers2.length < 15) {
      const randomNumber = getRandomNumber();
      if (!tempNumbers2.includes(randomNumber)) {
        tempNumbers2.push(randomNumber);
      }
    }
    setSelectedNumbers2(tempNumbers2);
    console.log("JOGO 1", tempNumbers2);
  
    let tempNumbers3 = [...selectedNumbersArray];
    while (tempNumbers3.length < 15) {
      const randomNumber = getRandomNumber();
      if (!tempNumbers3.includes(randomNumber)) {
        tempNumbers3.push(randomNumber);
      }
    }
    setSelectedNumbers3(tempNumbers3);
    console.log("JOGO 2", tempNumbers3);
  
    let tempNumbers4 = [...selectedNumbersArray];
    while (tempNumbers4.length < 15) {
      const randomNumber = getRandomNumber();
      if (!tempNumbers4.includes(randomNumber)) {
        tempNumbers4.push(randomNumber);
      }
    }
    setSelectedNumbers4(tempNumbers4);
    console.log("JOGO 3", tempNumbers4);
  
    let tempNumbers5 = [...selectedNumbersArray];
    while (tempNumbers5.length < 15) {
      const randomNumber = getRandomNumber();
      if (!tempNumbers5.includes(randomNumber)) {
        tempNumbers5.push(randomNumber);
      }
    }
    setSelectedNumbers5(tempNumbers5);
    console.log("JOGO 4", tempNumbers5);
  }

  function reload() {
    setSelectedNumbers([]);
    setSelectedNumbers2([]);
    setSelectedNumbers3([]);
    setSelectedNumbers4([]);
    setSelectedNumbers5([]);
    setGerado(false);
    
    // Define um indicador no localStorage para recarregar a página
    localStorage.setItem('reloadPage', 'true');
  
    // Recarrega a página
    window.location.reload();
  }

  useEffect(() => {
    // Verifica se há um indicador para recarregar a página
    const reloadPageIndicator = localStorage.getItem('reloadPage');
    if (reloadPageIndicator === 'true') {
      // Limpa o indicador
      localStorage.removeItem('reloadPage');
      
      // Reinicia os estados
      setSelectedNumbers([]);
      setSelectedNumbers2([]);
      setSelectedNumbers3([]);
      setSelectedNumbers4([]);
      setSelectedNumbers5([]);
      setGerado(false);
    }
  }, []);

  function setNumber(number: number) {
    if (selectedNumbers.length <= 4 && !selectedNumbers.includes(number)) {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  }

  function handleNumberClick(number: number) {
    setNumber(number);
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * 25) + 1;
  }

  return (
    <div className="container">
      {gerado && <button onClick={reload}>Reiniciar</button>}

      <div className='central-numbers'>
        {numberOptions.map((number, idx) => (
          <p
            key={idx}
            className={`number ${selectedNumbers.includes(number) ? 'selected' : ''}`}
            onClick={() => handleNumberClick(number)}
          >
            {number <= 9 ? `0${number}` : number}
          </p>
        ))}
      </div>

      {!gerado && <button onClick={gerar}>Gerar</button>}

      {gerado && (
        <div className='container-tabs'>
          <TabLoteria arrayNumbers={selectedNumbers2}/>
          <TabLoteria arrayNumbers={selectedNumbers3}/>
          <TabLoteria arrayNumbers={selectedNumbers4}/>
          <TabLoteria arrayNumbers={selectedNumbers5}/>
        </div>
      )}
    </div>
  );
}
