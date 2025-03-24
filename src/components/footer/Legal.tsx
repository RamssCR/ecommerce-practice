import AppLink from "@components/ui/app-links/AppLink"
import Text from "@components/ui/texts/Text"
import { currentYear } from "@utils/currentYear"

/**
 * Renders a component that displays the footer's end.
 * Displays copyright and developer information.
 * @example
 * <Legal />
 */
export default function Legal() {
    return (
        <section className="w-full flex flex-col items-center gap-2 md:flex-row md:justify-between">
            <Text className="text-[0.75rem] text-center text-neutral-text-highlight">
                Copyright {currentYear()} MusioShore. All rights reserved.
            </Text>
            <Text className="text-[0.75rem] text-center text-neutral-text-highlight">
                Developed by{' '}
                <AppLink 
                    to="https://github.com/RamssCR" 
                    className="text-primary"
                    target="_blank"
                >
                    RamssDev
                </AppLink>
            </Text>
        </section>
    )
}