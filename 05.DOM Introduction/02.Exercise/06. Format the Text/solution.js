function solve() {
  const input = document.getElementById('input').value;
  const output = document.getElementById('output');

  let container = [];
  let finalResult = [];

  const arrayOfSentences = input.split('.').filter(sentence => sentence.trim() !== '');

  for (let i = 0; i < arrayOfSentences.length; i++) {
    container.push(arrayOfSentences[i]);

    if (container.length === 3 || i === arrayOfSentences.length - 1) {
      const text = container.join('. ') + '.';
      finalResult.push(`<p>${text}</p>`);
      container = [];
    }
  }

  output.innerHTML = finalResult.join('');
}
