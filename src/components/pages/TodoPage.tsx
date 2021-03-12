import React ,  {useState, useEffect}from 'react'
import { TodoForm } from '../../components/TodoForm';
import { TodoList } from '../../components/TodoList';


import { iTodo } from '../../interfaces';

export const TodoPage: React.FC = () => {
    const [todo, setTodo] = useState<iTodo[]>([])

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('todo') || '[]') as iTodo[]
  
      setTodo(saved)
    }, [])
  
    useEffect(( )=> {
      localStorage.setItem('todo', JSON.stringify(todo))
    },[todo])
  
    const addHandler = (title: string) => {
      const newTodo: iTodo = {
        title : title,
        id: Date.now(),
        completed: false
  
      }
      // setTodo([newTodo, ...todo])
      setTodo(prev => [newTodo, ...prev])
    }
  
  
    const toggleHandler = (id: number) => {
      setTodo(prev =>
        prev.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      }))
    }
  
    const removeHandler = (id: number) => {
      const conRemove = window.confirm('Are you sure?')
      if(conRemove) {
        setTodo( prev => prev.filter(todo => todo.id !== id))
      }
    }
  

    return (
        <>
            
                <h1 className="title-container">Do not forget</h1>
                <TodoForm onAdd={addHandler} />
                <TodoList todos={todo} onRemove={removeHandler} onToggle={toggleHandler} />
            
        </>
    )
}
