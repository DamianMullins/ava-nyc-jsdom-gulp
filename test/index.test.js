import test from 'ava';
import { func } from '../src/module';


test('dom', assert => {
    document.body.innerHTML = '<p>test</p>';

    assert.is(document.querySelector('p').innerHTML, 'test');
});

test('func true', assert => {
    // Arrange
    const input = true;

    // Act
    const result = func(input);

    // Assert
    assert.is(result, 'true');
});

test('func false', assert => {
    // Arrange
    const input = false;

    // Act
    const result = func(input);

    // Assert
    assert.is(result, 'false');
});
