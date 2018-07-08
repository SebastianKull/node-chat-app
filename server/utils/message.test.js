var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        //store response in variable
        //assert from match
        //assert text match
        //assert createdAt is a number
        var from = 'Jen';
        var text = 'This is a test';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});