export default function shuffleArray(dataArray) {
    let currentIndex = dataArray.length;
    let arrayCopy = [...dataArray];

    // while there remain elements to shuffle
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap it with current element
        [arrayCopy[currentIndex], arrayCopy[randomIndex]] = [
            arrayCopy[randomIndex], arrayCopy[currentIndex]]
    }

    return arrayCopy;
}