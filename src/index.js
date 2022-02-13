const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = expr.split('')
    let newTable = {}
    let newKeys = []
    let temp = []
    let symCount = expr.length/10
    let keys = Object.keys(MORSE_TABLE)
    let letters = Object.values(MORSE_TABLE)
    keys = keys.map((item)=>{
        for (let i = 0; i < item.length;i++) {
            if (item[i] === '.') temp.push(10)
            else if (item[i] === '-') temp.push(11)
        }
        newKeys.push(temp.join('').padStart(10,'0'))
        temp = []
    })
    for (let i = 0; i < keys.length; i++) {
        newTable[newKeys[i]] = letters[i]
    }
    for (let i = 0; i < symCount; i++){
        temp.push(expr.splice(0,10).join(''))
    }
    expr = Object.values(temp)
    temp = []
    expr.forEach((item)=>{
        if (item === '**********') temp.push(' ')
        else  temp.push(newTable[item])
    })
    return temp.join('')
}

module.exports = {
    decode
}