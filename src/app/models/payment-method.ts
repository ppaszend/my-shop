export interface PaymentMethod {
  name: string,
  label: string,
  icons: string[],
  type: 'credit-card-form'|'redirect'
}
