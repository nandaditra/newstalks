import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from "../../components/Footer";

test('renders the "NEWS" message', () => {
  render(<Footer />);
  const newsText = screen.getByText("NEWS");
  expect(newsText).toBeInTheDocument();
});

test('renders the "TALK" message', () => {
  render(<Footer />);
  const newsText = screen.getByText("TALK");
  expect(newsText).toBeInTheDocument();
});

test('renders the "Copyright" message', () => {
    render(<Footer />);
    const newsText = screen.getByText("Copyright 2023 - Nanda Aditya Putra");
    expect(newsText).toBeInTheDocument();
});