import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe('SearchBar', () => {
  it('should render SearchBar corretly', () => {

    render(<SearchBar value={'Val'} onSearchHandle={() => {}} />)
    const searchBar = screen.getByTestId('search-bar')

    expect(searchBar).toBeInTheDocument()
  })

  it('should render call onChange when typing', async () => {
    const onChange = jest.fn()
    const inputValue = 'JavaScript'

    render(<SearchBar value={inputValue} onSearchHandle={onChange} />)
    const searchBar = screen.getByTestId('search-bar')

    fireEvent.change(searchBar, {target: {value: 'Typescript'}})

    expect(onChange).toBeCalledTimes(1)
  })
})
