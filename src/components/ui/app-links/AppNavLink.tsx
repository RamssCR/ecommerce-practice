import { NavLink } from 'react-router-dom'
import type { NavLinkProps } from 'react-router-dom'
import { classMerger } from '@utils/classMerger'

/**
 * Component that renders a react-router-dom NavLink.
 * All set to use and customize however you need.
 * @example
 * <AppNavLink
 *  to="/contact"
 *  className="border-b pb-2 px-4 w-fit"
 * >
 *  Contact
 * </AppNavLink>
 */
export default function AppNavLink({ to, children, className, ...props }: NavLinkProps) {
    return (
        <NavLink 
            to={to}
            className={classMerger('text-neutral-text font-medium', className)}
            {...props}
        >
            {children}
        </NavLink>
    )
}