const text = document.getElementById('text');
const shiftNumber = document.getElementById('number');
const encodeBtn = document.getElementById('encode-btn');
const decodeBtn = document.getElementById('decode-btn');
const result = document.getElementById('result');

const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

let codedAlphabet = [];

const generateCodedArray = () => {
    codedAlphabet = [];
    let shift = +shiftNumber.value;
    alphabet.map((symbol, index) => {
        const newIndex = (index + shift) % alphabet.length;
        codedAlphabet.push(alphabet[newIndex]);
    });
};

const encode = () => {
    if (text.value && shiftNumber.value) {
        generateCodedArray();
        result.innerHTML = text.value
            .toLowerCase()
            .split('')
            .map((symbol) => {
                if (symbol === ' ') {
                    return ' ';
                } else {
                    const index = alphabet.indexOf(symbol);
                    return codedAlphabet[index];
                }
            })
            .join('');
    } else return;
};

const decode = () => {
    if (text.value && shiftNumber.value) {
        generateCodedArray();
        result.innerHTML = text.value
            .toLowerCase()
            .split('')
            .map((symbol) => {
                if (symbol === ' ') {
                    return ' ';
                } else {
                    const index = codedAlphabet.indexOf(symbol);
                    return alphabet[index];
                }
            })
            .join('');
    } else return;
};
