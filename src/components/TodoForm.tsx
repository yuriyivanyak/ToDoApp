import React, { useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}


export const TodoForm: React.FC <TodoFormProps>= (props) => {
    // const [title, setTitle] = useState<string>('');

    const ref = useRef<HTMLInputElement>(null);

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.target.value)
    // }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if ( e.key === 'Enter') {
            // console.log(title)
            // setTitle('')
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        } 
    }

    return (
        <div className="input-field">
            <input 
                // value={title} 
                // onChange={handleChange} 
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text" 
                id="title" 
                placeholder="Enter field"/>
            <label htmlFor="title" className="active">Enter field</label>
        </div>
    )
}
