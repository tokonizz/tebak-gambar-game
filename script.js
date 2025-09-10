const scoreElement = document.getElementById('score');
let score = 0;

async function fetchImageData() {
  try {
    const response = await fetch('https://tebak-gambar-api.vercel.app/api/random');
    const data = await response.json();

    const imageElement = document.getElementById('image');
    imageElement.src = data.imageUrl;

    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';
    data.answers.forEach(answer => {
      const button = document.createElement('button');
      button.textContent = answer;
      button.onclick = () => checkAnswer(answer, data.correctAnswer);
      answersElement.appendChild(button);
    });
  } catch (error) {
    console.error('Error fetching image data:', error);
  }
}

function checkAnswer(selectedAnswer, correctAnswer) {
  if (selectedAnswer === correctAnswer) {
    alert('Jawaban Benar!');
    score++;
  } else {
    alert('Jawaban Salah!');
  }
  scoreElement.textContent = `Score: ${score}`;
  fetchImageData();
}

fetchImageData();
