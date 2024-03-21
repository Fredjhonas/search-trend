import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '.';

describe('SearchBar', () => {
  it('should render the search bar', () => {
    const onSearchChange = jest.fn();
    render(<SearchBar search="" onSearchChange={onSearchChange} />);
    const input = screen.getByPlaceholderText('Search for a topic');
    expect(input).toBeInTheDocument();
  });

  it('should call onSearchChange when the input changes', () => {
    const onSearchChange = jest.fn();
    render(<SearchBar search="" onSearchChange={onSearchChange} />);
    const input = screen.getByPlaceholderText('Search for a topic');
    userEvent.type(input, 'React');
    expect(onSearchChange).toHaveBeenCalledWith('R');
  });
});
