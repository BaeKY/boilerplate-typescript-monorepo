describe('sample unit test', () => {
  it('add', () => {
    const [num1, num2] = [1, 2]
    const func = (n1: number, n2: number) => n1 + n2
    expect(func(num1, num2)).toEqual(3)
  })
})
