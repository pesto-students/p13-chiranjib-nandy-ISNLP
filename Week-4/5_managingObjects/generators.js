function* stringToSymbolIterator(arrayOfStrings) {
    for (const str of arrayOfStrings) {
        yield Symbol(str);
    }
}

const strings = ['hello', 'world', 'test'];

// Create an iterator
const symbolIterator = stringToSymbolIterator(strings);

// Iterate and log the symbols
for (const symbol of symbolIterator) {
    console.log(`Symbol(${Symbol.keyFor(symbol) || symbol.toString()})`);
}
