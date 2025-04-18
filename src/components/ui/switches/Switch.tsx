import { useState } from 'react'

type SwitchProps = {
    checked?: boolean
    onChange?: (checked: boolean) => void
}

/**
 * Renders a reusable Switch component.
 * Makes UX more intuitive and more enjoyable.
 * @example
 * import Switch from '@components/ui/Switch'
 * 
 * function Settings() {
 *  const [theme, setTheme] = useState('light')
 *  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
 *  
 *  return (
 *      <div className="flex items-center justify-between">
 *         <Switch checked={theme === 'dark'} onChange={toggleTheme} />
 *     </div>
 *  )
 * }
 */
export default function Switch({ checked = false, onChange }: SwitchProps) {
    const [active, setActive] = useState<boolean>(checked)

    const handleSwitch = () => {
        const toggleActive = !active
        setActive(toggleActive)
        onChange?.(toggleActive)
    }

    return (
        <label 
            className="relative inline-flex items-center cursor-pointer"
            aria-label='Switch'
        >
            <input 
                type="checkbox"
                className="sr-only peer"
                checked={active}
                onChange={handleSwitch}
                name="switch"
            />
            <div className="w-14 h-7 bg-neutral-background-highlight rounded-full peer-checked:bg-primary peer-checked:transition-all" />
            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-all peer-checked:translate-x-7" />
        </label>
    )
}