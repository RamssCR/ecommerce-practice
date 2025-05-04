import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons'

export default function Message({ message, status }: { message?: string, status: 'error' | 'success' }) {
    return (
        <div className="-mt-2 flex items-center gap-3">
            {status === 'error' ? (
                <FontAwesomeIcon icon={faX} className="text-red-500 text-lg" />
            ) : (
                <FontAwesomeIcon icon={faCheck} className="text-green-500 text-lg" />
            )}
            <p className={`text-${status === 'error' ? 'red' : 'green'}-500 text-[0.95rem]`}>
                {message}
            </p>
        </div>
    )
}