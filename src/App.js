import React from "react";
import "./App.css";
import AsciiTable from "ascii-data-table";
// import formPhrase from 'font-ascii';


function App() {

  // установка ширины таблицы
  const [widthTables, setWidthTables] = React.useState(35)

  const data = [
    ["title", "description"],
    [
      "A Few Good Men",
      "In the heart of the nation's capital, in a courthouse of the U.S. government, one man will stop at nothing to keep his honor, and one will stop at nothing to find the truth.",
    ],
    [
      "Oskars made up movie",
      "This movie is here\n\nto show\n\nl\ni\nn\ne\nbreaks",
    ],
    [
      "Charlie Wilson's War",
      "A stiff drink. A little mascara. A lot of nerve. Who said they couldn't bring down the Soviet empire.",
    ],
    [
      "Sleepless in Seattle",
      "What if someone you never met, someone you never saw, someone you never knew was the only someone for you?",
    ],
  ];

  // отлавливаем изменение ползунка
  function saveInput(e) {
    setWidthTables((widthTables) => {
      return e.target.value;
    });
  }



  return (
    <>
      <h1>Ascii Data Tables пример вывода</h1>
        
      <pre id="table">{AsciiTable.table(data, widthTables)}</pre>

      <div id="slider-group">
        Изменить ширину таблицы: 
        <input type="range" max={AsciiTable.maxColumnWidth(data)} min="4" value={widthTables} onInput={saveInput} />
        : <code>{widthTables}</code>
      </div>

      {/* <p>{formPhrase('TEST')}</p> */}

      
    </>
  );
}

export default App;
