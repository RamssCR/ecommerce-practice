import { use } from 'react'
import { ThemeContext, ThemeContextType } from '@context/ThemeContext'

/**
 * Returns a set of values and functions
 * from the Theme Provider.
 * @example
 * const { theme, toggleTheme } = useThemeProvider()
 * 
 * return (
 *      <button
 *          onClick={toggleTheme}
 *      />
 *          {theme} mode
 *      </button>
 * )
 */
export const useThemeProvider = () => use(ThemeContext) as ThemeContextType