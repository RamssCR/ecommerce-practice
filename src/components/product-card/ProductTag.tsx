export default function ProductTag({ tag }: { tag: string }) {
    return (
        <span className="px-3 py-1 text-[0.75em] font-medium text-primary bg-primary-light rounded-full">
            {tag}
        </span>
    )
}