import { useState } from 'react';

function App() {
  const [val, setVal] = useState('');
  const stringToNum = (str) => {
    const wordToNumber = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
      thirty: 30,
      forty: 40,
      fifty: 50,
      sixty: 60,
      seventy: 70,
      eighty: 80,
      ninety: 90,
      hundred: 100,
      thousand: 1000,
      million: 100000,
    };

    try {
      if (str === 'zero') return 0;
      let temp = str.trim().split(' ');

      // Check if value exists in map
      const errorHandler = (i) => {
        if (i === 'error' || !wordToNumber[i]) {
          throw new Error();
        }
        return i;
      };

      // Reduce & uniqueness check
      const reducer = (arr) => {
        if (arr.length !== new Set(arr).size) errorHandler('error');
        return arr.reduce((prev, curr) => prev + curr, 0);
      };

      // Let's split them xxx xxx xxx
      const millions = temp
        .splice(0, temp.indexOf('million') + 1)
        .filter((p) => p !== 'million')
        .map((i) => errorHandler(i));
      const thousands = temp
        .splice(0, temp.indexOf('thousand') + 1)
        .filter((p) => p !== 'thousand')
        .map((i) => errorHandler(i));
      const rest = temp.filter((p) => p !== 'and').map((i) => errorHandler(i));

      // Universal calculate for each part
      const numberizer = (val) => {
        const hundreds = val
          .splice(0, val.indexOf('hundred') + 1)
          .filter((p) => p !== 'hundred')
          .map((i) => wordToNumber[i]);
        const res = val.map((i) => wordToNumber[i]);

        return reducer(hundreds) * 100 + reducer(res);
      };

      return numberizer(millions) * 1000000 + numberizer(thousands) * 1000 + numberizer(rest);
    } catch (e) {
      return 'incorrect';
    }
  };

  return (
    <div>
      <input type="text" data-testid="input" value={val} onChange={(e) => setVal(e.target.value)} />
      <div>
        <p data-testid="output">Output: {stringToNum(val)}</p>
      </div>
    </div>
  );
}

export default App;
