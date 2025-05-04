import type { PostResponse } from '@localTypes/apiResponseTypes'
import Input from '@components/ui/textboxes/Input'
import { AxiosError } from 'axios'
import { useForm, type UseFormRegister } from 'react-hook-form'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useMutation } from '@tanstack/react-query'
import { subscribeToNewsletter } from '@helpers/newsletter'
import Button from '@components/ui/buttons/Button'
import Loader from '@components/ui/loaders/Loader'
import Title from '@components/ui/texts/Title'
import Message from './Message'

type NonControlledInputProps = {
    register: UseFormRegister<{ email: string }>
}

const NonControlledInput = ({ register }: NonControlledInputProps) => {
    return (
        <Input
            icon={faEnvelope}
            variant="half-rounded"
            placeholder="Enter your email address"
            {...register('email', { required: false })}
        />
    )
}

const DisplayMessage = ({ error, data }: { error: unknown, data: unknown }) => {
    if (error instanceof AxiosError) {
        return (
            <Message 
                status="error" 
                message={error?.response?.data?.message} 
            />
        )
    }

    if (error instanceof Error) {
        return (
            <Message 
                status="error" 
                message={error?.message} 
            />
        )
    }
    
    if (data) {
        return (
            <Message 
                status={(data as PostResponse)?.status} 
                message={(data as PostResponse)?.message} 
            />
        )
    }

    return null
}

export default function Newsletter() {
    const { register, handleSubmit, reset } = useForm<{ email: string }>()
    const { 
        mutateAsync: subscribeAsync, 
        data, 
        error, 
        isPending 
    } = useMutation({
        mutationFn: subscribeToNewsletter,
        onSuccess: () => reset()
    })

    return (
        <section className="w-full flex flex-col items-center text-center gap-4 md:text-left md:items-start">
            <Title as="h4" className="font-semibold">Subscribe to our Newsletter!</Title>
            <form 
                onSubmit={handleSubmit(async (data) => await subscribeAsync(data))}
                className="flex flex-col gap-4 items-center w-full md:flex-row md:gap-0 lg:w-1/2"
            >
                <NonControlledInput register={register} />
                <Button 
                    type="submit"
                    variant="color-primary" 
                    className="w-full uppercase flex justify-center items-center rounded-lg md:rounded-l-none md:rounded-r-lg text-[0.93em] py-4 hover:cursor-pointer md:w-fit"
                >
                    {isPending
                        ? <Loader className="size-[1.5em]" />
                        : 'Subscribe'
                    }
                </Button>
            </form>
            {<DisplayMessage data={data} error={error} />}
        </section>
    )
}