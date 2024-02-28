const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
})

export const toCurrency = (value: number) => formatter.format(value)