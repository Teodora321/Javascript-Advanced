function solve() {

  let firstSection = document.getElementsByTagName('section')[0];
  let answers = Array.from(document.getElementsByClassName('answer-text'));
  let secondSection = document.getElementsByTagName('section')[1];
  let thirdSection = document.getElementsByTagName('section')[2];
  let rightAnswers = 0;

  answers.slice(0, 2).forEach(a => a.addEventListener('click', click1));

  function click1() {
    if (this.textContent === 'onclick') {
      rightAnswers++;
    }
    firstSection.style.display = 'none'
    secondSection.style.display = 'block';
  }

  answers.slice(2, 4).forEach(b => b.addEventListener('click', click2));

  function click2() {
    if (this.textContent === 'JSON.stringify()') {
      rightAnswers++;
    }
    secondSection.style.display = 'none';
    thirdSection.style.display = 'block'
  }

  answers.slice(4, 6).forEach(c => c.addEventListener('click', click3));

  function click3() {
    if (this.textContent === 'A programming API for HTML and XML documents') {
      rightAnswers++;
    }
    thirdSection.style.display = 'none';
    let h1 = document.querySelector('#results li h1');
    let div = document.createElement('div');
    h1.appendChild(div);

    if (rightAnswers === 3) {

      div.textContent = 'You are recognized as top JavaScript fan!'
    } else {
      div.textContent = `You have ${rightAnswers} right answers`
    }
    let result = document.getElementById('results');
    result.style.display = 'block';
  }

}
