import { classNames } from './classNames';

describe('Хелпер классов', () => {
  test('Простой класс', () => {
    expect(classNames('class1')).toBe('class1');
  });

  test('Дополнительные классы', () => {
    expect(classNames('class1', {}, ['class2', 'class3'])).toBe('class1 class2 class3');
  });

  test('Модификаторы', () => {
    expect(classNames('class1', { class2: true, class3: true }, [])).toBe('class1 class2 class3');
  });

  test('Модификаторы (false)', () => {
    expect(classNames('class1', { class2: false, class3: true }, [])).toBe('class1 class3');
  });

  test('Модификаторы (undefined)', () => {
    expect(classNames('class1', { class2: undefined, class3: true }, [])).toBe('class1 class3');
  });

  test('Модификаторы (null)', () => {
    expect(classNames('class1', { class2: null, class3: true }, [])).toBe('class1 class3');
  });

  test('Дополнительные классы + модификаторы', () => {
    expect(classNames('class1', { class2: true, class3: true }, ['class4', 'class5'])).toBe(
      'class1 class4 class5 class2 class3'
    );
  });
});
