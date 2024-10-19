
function convertLength() {
    const length = parseFloat(document.getElementById('length').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    
    let convertedLength;
    
    if (fromUnit === 'm' && toUnit === 'km') {
        convertedLength = length / 1000;
    } else if (fromUnit === 'm' && toUnit === 'cm') {
        convertedLength = length * 100;
    } else if (fromUnit === 'km' && toUnit === 'm') {
        convertedLength = length * 1000;
    } else if (fromUnit === 'km' && toUnit === 'cm') {
        convertedLength = length * 100000;
    } else if (fromUnit === 'cm' && toUnit === 'm') {
        convertedLength = length / 100;
    } else if (fromUnit === 'cm' && toUnit === 'km') {
        convertedLength = length / 100000;
    } else {
        convertedLength = length;
    }
    
    document.getElementById('result').innerHTML = 'Converted length: ' + convertedLength + ' ' + toUnit;
}