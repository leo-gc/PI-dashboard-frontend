export function getHidrometerData() {
  function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  function getRandomDateInMay2024() {
    const day = Math.floor(Math.random() * 31) + 1;
    const dayString = day < 10 ? `0${day}` : `${day}`;
    return `2024-05-${dayString}`;
  }

  const data = Array.from({ length: 33 }, () => getRandomNumber(-60, 20));
  const categories = Array.from({ length: 33 }, () => getRandomDateInMay2024());

  return {
    data,
    categories
  }
}

export function getLevelsData() {
  function getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  // Gerar os dados aleatórios
  const data = Array.from({ length: 15 }, () => Math.floor(getRandomNumber(0, 100)));

  return data;
}