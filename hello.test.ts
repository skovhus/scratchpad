import { describe, expect, it, vi } from 'vitest'

function func() {
  return 'x'
}

describe('func', () => {
  it('return x', async () => {
    expect(func()).toEqual('x')
  })
})
