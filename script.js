
const { start } = require('prompt');
const prompt = require('prompt');
const model = require('./model.js');

const bookArray = [];

console.log('Benvenuto in book manager');

startMenu();

function startMenu() {

    console.log('Sono disponibili tre opzioni');
    console.log('1)  Aggiungi una pubblicazione');
    console.log('2)  Lista dei libri');
    console.log('3)  Esci');

    prompt.start();

const schema = {
    properties: {
      selection: {
        description: 'Seleziona una delle opzioni',
      }
    }
  };

  prompt.get(schema, startMenuManager);

}


  function startMenuManager(err, result) {
      if (result.selection === '1') {
        addPublication();
      } else if (result.selection === '2') {
          printBooks(bookArray);
      } else if (result.selection === '3') {
        console.log('Grazie e a presto!')
        process.exit();
      } else {
          console.log('Selezione non disponibile');
          startMenu();
      }
  }

  function addPublication() {

    console.log('Sono disponibili tre opzioni');
    console.log('1)  Aggiungi una rivista');
    console.log('2)  Aggiungi un libro');
    console.log('3)  Esci');

    prompt.start();

const schema = {
    properties: {
      selection: {
        description: 'Seleziona una delle opzioni',
      }
    }
  };

  prompt.get(schema, startAddPublication);

}

function startAddPublication(err, result) {
    if (result.selection === '1') {
        insertMagazine();
    } else if (result.selection === '2') {
        insertBook();
    } else if (result.selection === '3') {
        startMenuManager();
    } else {
        console.log('Selezione non disponibile');
        addPublication();
    }
}



  function insertBook() {
    const schema = {
        properties: {
          title: {
            description: 'Inserisci il titolo',
          },
          author: {
            description: 'Inserisci l\'autore',
          },
          publisher: {
            description: 'Inserisci la casa editrice',
          }
        }};
    
      prompt.get(schema, insertBookManager);
  }

  function insertBookManager(err, result) {
      const book = new model.Book(result.title, result.author, result.publisher);
      bookArray.push(book);
      startMenu();
  }

  function insertMagazine() {
    const schema = {
        properties: {
          title: {
            description: 'Inserisci il titolo',
          },
          publisher: {
            description: 'Inserisci la casa editrice',
          },
          realease: {
            description: 'Inserisci il data di pubblicazione',
          },
          periodicy: {
            description: 'Inserisci il frequenza di uscita',
          },
          type: {
            description: 'Inserisci il tipologia',
          },
          price: {
            description: 'Inserisci la prezzo',
          },
        }};
    
      prompt.get(schema, insertMagazineManager);
  }

  function insertMagazineManager(err, result) {
      const book = new model.Book(result.title, result.publisher, result.realease, result.periodicy, result.type, result.price);
      bookArray.push(book);
      startMenu();
  }


function printBooks(bookArray) {
    for (const book of bookArray) {
        console.log(book.toString())
    }
}