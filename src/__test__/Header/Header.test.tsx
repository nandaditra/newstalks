import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import renderer from 'react-test-renderer';
import Header from '../../layout/Header';

test('renders the "NEWS" message', () => {
  render(<Header />);
  const newsText = screen.getByText("NEWS");
  expect(newsText).toBeInTheDocument();
});

test('renders the "TALK" message', () => {
  render(<Header />);
  const newsText = screen.getByText("TALK");
  expect(newsText).toBeInTheDocument();
});

it('performs snapshot testing', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
});