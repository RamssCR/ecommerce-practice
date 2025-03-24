import { useState, useEffect, ReactNode } from 'react'
import { ThemeContext } from '@context/ThemeContext'
import colorPallete from '@data/colorPallete.json'

type Theme = 'light' | 'dark'

/**
 * Returns a set of values and functionalities
 * to manage the theme of the application.
 * @example
 * <ThemeProvider>
 *  <App />
 * </ThemeProvider>
 * 
 * @example
 * const { theme, toggleTheme } = useContext(ThemeContext)
 * 
 * return (
 *      <button
 *          onClick={toggleTheme}
 *      />
 *          {theme} mode
 *      </button>
 * )
 */
export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>(() => localStorage.getItem('theme') as Theme ?? 'light')
    const { neutral } = colorPallete

    const setCSSAttribute = (attribute: string, value: string) => {
        document.body.style.setProperty(attribute, value)
    }

    useEffect(() => {
        localStorage.setItem('theme', theme)

        for (const color in neutral[theme]) {
            if (Object.prototype.hasOwnProperty.call(neutral[theme], color)) {
                const typedColor = color as keyof typeof neutral[Theme]
                setCSSAttribute(`--color-${color}`, neutral[theme][typedColor])
            }
        }
    }, [theme])

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light')

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}