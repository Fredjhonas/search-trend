import { render, screen } from '@testing-library/react';
import TrendGraphic from '.';

describe('TrendGraphic', () => {
  it('should render the trend graphic', () => {
    render(<TrendGraphic search="React" />);
    const iframe = screen.getByTitle('Google Trends');
    expect(iframe).toBeInTheDocument();
  });
});
