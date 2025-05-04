import RatingCard from "@components/rating-card/RatingCard"
import Image from "@components/ui/images/Image"
import Text from "@components/ui/texts/Text"
import Title from "@components/ui/texts/Title"

type TestimonialCardProps = {
    name: string
    avatar: string
    rating: number
    message: string
}

export default function TestimonialCard({ name, avatar, rating, message }: TestimonialCardProps) {
    return (
        <article className="w-full grid grid-cols-1 place-items-center gap-y-5 lg:place-items-start xl:grid-cols-4 xl:gap-x-7">
            <Image
                src={avatar}
                alt={name}
                title={name}
                className="rounded-full size-18 shadow-lg"
            />
            <section className="w-full col-span-3 flex flex-col items-center lg:items-start lg:pt-1 gap-2">
                <Title as="h3" className="text-2xl">{name}</Title>
                <RatingCard rating={rating} />
                <Text className="text-[0.85rem] mt-4 px-6 lg:px-0 text-center lg:text-left">
                    {message}
                </Text>
            </section>
        </article>
    )
}