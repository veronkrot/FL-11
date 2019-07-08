const playGame = confirm('Do you want to play a game?');
const numberToGuessDiff = -1;
const prizeStep = 2;
const maxAttempts = 3;
const numberStep = 4;

if (!playGame) {
    alert('You did not become a billionaire, but can.');
} else {
    let continueGame = false;
    do {
        let maxNumberToGuess = 9;

        let randomNumber = Math.floor(Math.random() * maxNumberToGuess);
        let maxPrize = 100;
        let totalPrize = 0;
        for (let i = 0; i < maxAttempts; i++) {
            const numberOfPocketStr = prompt(`Choose a roulette pocket number from 0 to ${maxNumberToGuess + numberToGuessDiff}\n
Attempts left: ${maxAttempts - i}\n
Total prize: ${totalPrize}$\n
Possible prize on current attempt: ${maxPrize}$`);
            const numberOfPocket = parseInt(numberOfPocketStr);
            // если пользователь нажал отмена, вместо ввода числа
            if (numberOfPocketStr === null) {
                alert('You did not become a billionaire, but can.');
                break;
            }
            // если пользователь угадал число
            if (numberOfPocket === randomNumber) {
                continueGame = confirm(`Congratulation, you won!\n
Your prize is: ${totalPrize + maxPrize}$.\n
Do you want to continue?`);
                // сохраняем текущий приз
                totalPrize = totalPrize + maxPrize;

                // если пользователь захотел перейти на следующий уровень игры
                if (continueGame) {
                    // сбрасываем количество попыток
                    i = -1;
                    // сохраняем текущий приз
                    totalPrize = maxPrize;
                    // увеличиваем максимальній приз
                    maxPrize = maxPrize * prizeStep;
                    // увеличиваем промежуток для случайного числа
                    maxNumberToGuess = maxNumberToGuess + numberStep;
                    // генерируем новое случайное число для нового уровня игры
                    randomNumber = Math.floor(Math.random() * maxNumberToGuess);
                } else {
                    break;
                }
            } else if (numberOfPocket !== randomNumber) {
                // если пользователь не угадал число на данной попытке - уменьшаем приз
                maxPrize = maxPrize / prizeStep;
            }

        }
        alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
        continueGame = confirm('Do you want play again?');
    } while (continueGame)
}
