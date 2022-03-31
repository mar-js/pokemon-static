import { render, screen } from '@testing-library/react'

import { ISeo } from '@assets/interfaces'

import { Seo } from './'

beforeEach(() => {
  const DATA: ISeo = {
    title: 'Home',
    description: 'Begin app web',
    keywords: [
      'html',
      'css',
      'typescript',
      'nextjs',
      'nextui'
    ]
  }

  return render(<Seo { ...DATA } />)
})

describe('Seo Helpers', () => {
  it('Render', () => {
    expect(screen).toBeTruthy()
  })
})
