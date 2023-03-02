export default function countPrimeNumbers(maxNumber) {
  
  if (maxNumber < 2) {
    return 0;
  }

  const isPrimeNumber = (number) => {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }

  const primeNumbers = [];
  for (let number = 2; number < maxNumber; number++) {
    if (isPrimeNumber(number)) {
      primeNumbers.push(number);
    }
  }
  
  return primeNumbers.length;

}