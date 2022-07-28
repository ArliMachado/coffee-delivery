const formatValueToCurrency = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

const formatValue = (value: number): string =>
  value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })

export { formatValueToCurrency, formatValue }
