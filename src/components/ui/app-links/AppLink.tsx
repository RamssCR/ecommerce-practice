import { Link } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import { classMerger } from '@utils/classMerger'

/**
 * Component that renders a react-router-dom Link element.
 * All set to use and customize however you need.
 * @example
 * // Basic usage: Using it to move to the app's routes
 * <AppLink
 *  to="/checkout"
 *  className="active:text-lg"
 * >
 *  Proceed to checkout
 * </AppLink>
 * 
 * @example
 * // Basic usage: Using it to head to an external URL
 * <AppLink
 *  to="https://random-website.com"
 *  target="_blank"
 *  className="text-slate-300 hover:-mt-3"
 * >
 *  Head to this website
 * </AppLink>
 */
export default function AppLink({ to, target, children, className, ...props }: LinkProps) {
    return (
        <Link 
            to={to} 
            target={target}
            rel={target && 'noopener noreferrer'}
            className={classMerger('text-neutral-text outline-none', className)} 
            {...props}
        >
            {children}
        </Link>
    )
}