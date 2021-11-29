export const getRandomItems = length => array =>
    array
        .sort(() => Math.round(Math.random() * -1))
        .slice(0, length ?? array.length);
