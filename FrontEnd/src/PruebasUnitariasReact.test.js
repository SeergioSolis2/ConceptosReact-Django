import { render } from '@testing-library/react';
import PruebasUnitariasReact from './PruebasUnitariasReact';

test('renders component correctly', () => {
    const { getByText } = render(<PruebasUnitariasReact />);
    const headerElement = getByText('Aprendizajes Requeridos');
    const subtitleElement = getByText('Prueba Unitarias en react');
  
    expect(headerElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
  
  test('renders correct information', () => {
    const { getByText } = render(<PruebasUnitariasReact />);
    const developmentTitleElement = getByText('Desarrollo de pruebas unitarias en React');
    const toolsTitleElement = getByText('Herramientas y bibliotecas para pruebas:');
  
    expect(developmentTitleElement).toBeInTheDocument();
    expect(toolsTitleElement).toBeInTheDocument();
  });
