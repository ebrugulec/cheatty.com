import React from 'react'
import { render, screen } from '@testing-library/react'
import Tags from '../pages/tags'
import { TagProps } from '../components/tag/tag';

const markdownTags: TagProps[] = [
  {
    "name": "javascript",
    "count": 3
  },
  {
    "name": "es6",
    "count": 1
  },
  {
    "name": "react",
    "count": 1
  },
  {
    "name": "jsx",
    "count": 1
  }
]

jest.mock('../../data/tags.json', () => (markdownTags));

describe('Tag', () => {
  it('should component render corretly', () => {
    render(<Tags />)
    const tags = screen.getByTestId('tags')

    expect(tags).toBeInTheDocument()
  })

  it('should render all tag', () => {
    render(<Tags />)
    const tags = screen.getByTestId('tags')

    expect(tags.getElementsByClassName('tag').length).toBe(4)
    expect(tags.getElementsByClassName('tag')[0]).toHaveTextContent(markdownTags[0].name)
  })
})
