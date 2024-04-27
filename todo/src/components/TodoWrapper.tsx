import React from 'react'
import { TodoInputForm } from './TodoInputForm.tsx'
import { TodoItemsList} from './TodoItemsList.tsx'

export const TodoWrapper = () => {
  {/* Component styling */}
  const styles = {
      wrapper:  'flex w-[90vw] lg:w-[33vw] max-h-3/4 bg-primary rounded-[20px] px-4 md:px-20 py-14 flex-col flex-wrap overflow-y-clip',
  }

  return (
    <div className={styles.wrapper}>
      {/* Component containing the input field and the submit button */}
        <TodoInputForm />
        {/* Component containing the list of the Todo items */}
        <TodoItemsList />
    </div>
  )
}