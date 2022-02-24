import React from 'react'
import { render, screen } from '@testing-library/react'
import Tag from '../tag'

describe('Tag', () => {
  it('should render tag', () => {
    const tagName = 'JavaScript'

    render(<Tag name={tagName} count={3} />)
    const tag = screen.getByTestId('tag-name')

    expect(tag).toBeInTheDocument()
    expect(tag).toHaveTextContent(tagName)
  })
})
