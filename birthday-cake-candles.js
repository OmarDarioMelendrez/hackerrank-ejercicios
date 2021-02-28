
const candles = [3,2,1,3];

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let tallCandlesCount = 0;
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] == max) {
            tallCandlesCount++;
        }
    }
    return tallCandlesCount;
}

birthdayCakeCandles(candles);
