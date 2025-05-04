import AppLink from "@components/ui/app-links/AppLink"
import Container from "@components/ui/containers/Container"
import Title from "@components/ui/texts/Title"
import Text from "@components/ui/texts/Text"
import CategoryItem from './CategoryItem'
import categories from '@data/categories.json'

export default function Categories() {
    return (
        <section className="w-full py-10 md:py-16 lg:py-24">
            <Container className="grid grid-cols-1 gap-y-14 lg:grid-cols-4 lg:gap-x-4 lg:place-items-center">
                <section className="w-full flex flex-col items-center gap-4 text-center xl:text-left xl:items-start">
                    <Text className="text-primary text-[0.9em]">Favorite items</Text>
                    <Title as="h3" className="text-xl font-normal lg:px-3 lg:text-2xl xl:px-0">Check the most popular categories here!</Title>
                    <AppLink 
                        to="/products" 
                        className="mt-3 w-fit px-9 py-3 rounded-lg bg-primary text-white font-bold text-lg xl:mt-6" 
                    >
                        View All
                    </AppLink>
                </section>
                <section className="w-full col-span-3 grid grid-cols-2 gap-y-10 md:grid-cols-4 lg:gap-x-5">
                    {categories.map(category => (
                        <CategoryItem key={category.id} {...category} />
                    ))}
                </section>
            </Container>
        </section>
    )
}