import RatingCard from "@components/rating-card/RatingCard"
import Image from "@components/ui/images/Image"
import Text from "@components/ui/texts/Text"
import Title from "@components/ui/texts/Title"

export default function TestimonialCard() {
    return (
        <article className="w-full grid grid-cols-1 place-items-center gap-y-5 lg:place-items-start xl:grid-cols-4 xl:gap-x-7">
            <Image
                src="/mock-images/avatars/male-avatar.webp"
                alt="Mark Grayson"
                title="Mark Grayson"
                className="rounded-full size-18 shadow-lg"
            />
            <section className="w-full col-span-3 flex flex-col items-center lg:items-start lg:pt-1 gap-2">
                <Title as="h3" className="text-2xl">Mark Grayson</Title>
                <RatingCard rating={4} />
                <Text className="text-[0.85rem] mt-4 px-6 lg:px-0 text-center lg:text-left">
                    The AirPods I received exceeded my expectations in every way. The attention to detail, from the build quality to the materials used, is remarkable. The comfort level is outstanding, making them perfect for both casual use and intense activities.
                </Text>
            </section>
        </article>
    )
}