/* global describe, it, expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Counter from '../components/Counter'

describe('counter component suite', () => {
  it('should match the snapshot', () => {
    const wrapper = renderer.create(<Counter
      count={0}
      onPlusClick={jest.fn()}
      onMinusClick={jest.fn()}
    />)

    expect(wrapper.toJSON()).toMatchSnapshot()
  })
})
