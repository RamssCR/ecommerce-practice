import AppLink from '@components/ui/app-links/AppLink'
import Icon from '@components/ui/images/Icon'
import Text from '@components/ui/texts/Text'

type CategoryItemProps = {
    name: string
    image: string
}

export default function CategoryItem({ name, image }: CategoryItemProps) {
    return (
        <AppLink
            to={name}
            className="flex flex-col items-center gap-3"
        >
            <Icon
                src={image}
                alt={name}
                title={`See ${name} category`}
                className="size-24 rounded-full p-2 bg-white shadow-md shadow-neutral-background-highlight lg:size-24 xl:size-30 lg:transition-transform lg:duration-200 lg:hover:scale-105"
            />
            <Text className="text-xl hover:text-primary">{name}</Text>
        </AppLink>
    )
}