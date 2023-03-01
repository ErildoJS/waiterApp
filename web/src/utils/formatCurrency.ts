export function formatCurrency(value: number) {
  return new Intl.NumberFormat('pt-ao', {style: 'currency', currency: 'KWZ'}).format(value)
}