import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from '../tag'

describe('Tag', () => {
  it('should render tag', () => {
    const tagName = 'JavaScript'

    render(<Tag tagName={tagName} />)
    const tag = screen.getByTestId('tag-name')

    expect(tag).toBeInTheDocument()
    expect(tag).toHaveTextContent(tagName)
  })
})
