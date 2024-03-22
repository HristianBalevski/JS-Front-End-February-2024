function solve() {
  const text = document.getElementById('text').value.split(' ');
  const convention = document.getElementById('naming-convention').value;
  const resultSpan = document.getElementById('result')

  let isError = false;

  if (convention === 'Camel Case') {
    for (let i = 0; i < text.length; i++) {
      let currentWord = text[i]

      if (i === 0) {
        text[i] = currentWord.toLowerCase();
      } else {
        text[i] = currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
      }

    }
  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < text.length; i++) {
      let currentWord = text[i]

      text[i] = currentWord[0].toUpperCase() + currentWord.slice(1).toLowerCase();
    }


  } else {
    isError = true;
    resultSpan.textContent = 'Error!';
  }

  if (!isError) {
    resultSpan.textContent = text.join('');
  }

}

