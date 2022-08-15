import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';



test('renders header component', () => {
    const { container } = render(<Header />);
    const appElement = container.getElementsByTagName("nav");
    expect(appElement.length).toBe(1);
});


test('renders search input field', () => {
    render(<Header />);
    const inputElement = screen.getByRole("searchbox");
    expect(inputElement).toBeInTheDocument();
});

test('search input should be empty', () => {
    render(<Header />);
    const inputElement = screen.getByRole("searchbox");
    expect(inputElement.value).toBe("");
});

test('search input should be samsung', () => {
    render(<Header />);
    const inputElement = screen.getByRole("searchbox");
    const value = "samsung";
    fireEvent.change(inputElement, {target : {value: value}});
    expect(inputElement.value).toBe(value);
});