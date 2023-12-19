import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
  test('Рендринг', () => {
    render(<Button>Test</Button>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  test('Тема "plain"', () => {
    render(<Button theme={ButtonTheme.PLAIN}>Test</Button>);
    expect(screen.getByText('Test')).toHaveClass('plain');
  });
});
