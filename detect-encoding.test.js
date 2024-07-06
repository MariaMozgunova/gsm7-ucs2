const fs = require('fs');
const path = require('path');
const detectEncoding = require('./detect-encoding');

test('can detect encoding for input from file', () => {
    // Read test data from file
    const testDataPath = path.resolve(__dirname, 'test-messages.json');
    const rawData = fs.readFileSync(testDataPath);
    const testCases = JSON.parse(rawData);
  
    for (message in testCases) {
        const expected = testCases[message];

        expect(detectEncoding(message)).toEqual(expected);
    }
});