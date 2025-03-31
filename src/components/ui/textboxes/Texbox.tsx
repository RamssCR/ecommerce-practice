import { classMerger } from "@utils/classMerger";

export default function Textbox({ className, value, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            type="text"
            className={classMerger(
                'w-full p-2 bg-transparent rounded-lg focus:outline-none',
                className
            )}
            value={value}
            {...props}
        />
    )
}