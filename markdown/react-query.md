# React Query

React Query is a powerful data-fetching and state management library for React applications. It's also known as "TanStack Query" and provides several key benefits:

## Key Features

- **Automatic Background Updates:** Automatically keeps your data fresh
- **Caching:** Built-in caching mechanism that reduces unnecessary network requests
- **Error Handling:** Robust error handling out of the box
- **Loading States:** Easy management of loading states
- **Pagination & Infinite Scroll:** Built-in support for advanced data-fetching patterns

## Basic example
```JSX
import { useQuery } from '@tanstack/react-query';

function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await fetch('https://api.example.com/todos')
      return response.json()
    }
  });

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
```

## Why Use React Query?

1. **Simplified Data Fetching:** Reduces boilerplate compared to traditional `useState` + `useEffect` combinations
2. **Smart Caching:** Prevents unnecessary API calls
3. **Real-time Data:** Keeps data in sync across components
4. **Developer Experience:** Great DevTools and debugging capabilities
5. **TypeScript Support:** Excellent TypeScript integration

React Query is particularly useful when building applications that need to manage server state, as it provides a clear separation between client and server state management.

## Installing React Query in your application

In order to install React Query in your project, you must run the following command on your console:

```BASH
npm i @tankstack/react-query
```

Then, you create a client and wrap the main app with its provider, like so:
```JSX
import { QueryClient, QueryProvider } from '@tankstack/react-query'
import Demo from './Demo'

const client = QueryClient()

export default function App() {
    return (
        <QueryProvider client={client}>
            <Demo />
        <QueryProvider>
    )
}
```

## Mutation

Mutation in a way, helps sending mutable actions to the server, like creating a new todo,
modifying an existing one or erasing it. This, in fact, helps updating the server and UI properly.

### useMutation Hook

The `useMutation` hook helps the mutation be performed. When destructuring, you can find
two functions: `mutate` and `mutateAsync` (which already tell their differences).

A proper example of this should be when creating a new todo...

```JSX
import { useMutation, useQuery } from '@tankstack/react-query'
import { addTodo, getTodos } from '@plugins/todos'

export default function TodoContainer() {
  const [todo, setTodo] = useState('')

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos()
  })

  const { mutateAsync: addTodoMutation } = useMutation({
    mutationFn: addTodo,
    onSuccess: () => refetch()
  })

  const handleClick = async (e) => {
    try {
      await addTodoMutation({
        title: todo,
        done: false
      })
      setTodo('')
    } catch (error) {
      console.error(error)
    }
  }

  const handleInput = (e) => setTodo(e.target.value)

  return (
    <section className="w-full space-y-6">
      <section className="w-full flex flex-col items-center gap-5">
        <h2 className="text-3xl font-semibold">Add a Todo</h2>
        <input 
          type="text" 
          onInput={handleInput} 
          value={todo} 
          placeholder="Type something..." 
          className="py-3 px-5 rounded-lg border border-slate-400"
        >
        <button 
          onClick={handleClick} 
          className="py-4 px-7 rounded-lg bg-teal-500 text-white font-medium hover:cursor-pointer hover:bg-teal-400"
        >
          Create
        <button>
      </section>
      {/* Here goes your todos */}
    </section>
  )
}
```

If you want to provide a query to the request, you must let RQ know it's
going to change by providing that query as a parameter option after
defining the `queryKey`:

```JSX
const [search, setSearch] = useState('')
const { data, isLoading } = useQuery({
  queryKey: ['todos', { search }],
  queryFn: () => getTodos(search)
})
```

Since React Query's normal behaviour consists on performing a background 
request while keeping your data cached and displaying it discretely on the UI,
you can nullify this behaviour by setting the `staleTime` to `Infinity` which
means React Query should not perform such background request:

```JSX
const [search, setSearch] = useState('')
const { data, isLoading } = useQuery({
  queryKey: ['todos', { search }],
  queryFn: () => getTodos(search),
  staleTime: Infinity
})
```

You can also let React Query know it should not cache anything and keep it fresh
from the backend server by setting the `cacheTime` property to zero.

```JSX
const [search, setSearch] = useState('')
const { data, isLoading } = useQuery({
  queryKey: ['todos', { search }],
  queryFn: () => getTodos(search),
  cacheTime: 0
})
```