import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslations } from 'shared/helpers';

describe('Sidebar', () => {
  test('Рендринг', () => {
    renderWithTranslations(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Сворачивание', () => {
    renderWithTranslations(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar-toggle-button');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
