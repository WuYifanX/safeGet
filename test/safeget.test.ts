import safeGet from '../src/safeget'

describe('safeGet', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('safeGet to get nested data', () => {
    const a = {
      b: {
        c: 'c'
      }
    }
    const result = safeGet(a, it => it.b.c)
    expect(result).toEqual('c')
  })

  it('safeGet to get undefined data when result is undefined and default value is undefined', () => {
    const a: any = {
      b: {
        c: 'c'
      }
    }
    const result = safeGet(a, it => it.b.c.f)
    expect(result).toEqual(undefined)
  })

  it('safeGet to get default data when result is undefined and given default data', () => {
    const a: any = {
      b: {
        c: 'c'
      }
    }
    const result = safeGet(a, it => it.b.c.f, 'default')
    expect(result).toEqual('default')
  })
})
