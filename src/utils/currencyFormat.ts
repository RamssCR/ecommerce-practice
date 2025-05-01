/**
 * Returns a formatted currency string based on the provided value, currency, and locale.
 * It uses the Intl.NumberFormat API to format the number as a currency string.
 * The default currency is USD and the default locale is en-US.
 * @example
 * currencyFormat(1234.56) // "$1,234.56"
 * currencyFormat(1234.56, 'EUR') // "€1,234.56"
 * currencyFormat(1234.56, 'JPY', 'ja-JP') // "¥1,235"
 */
export const currencyFormat = (value: number, currency: string = 'USD', locale: string = 'en-US') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value)
}