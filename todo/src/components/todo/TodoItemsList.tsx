import React from 'react'
import { TodoItem } from './TodoItem.tsx'
import { useFrappeGetDocList, useFrappeAuth } from 'frappe-react-sdk'

export const TodoItemsList = () => {
  {/* Component styling */}
  const styles = {
    wrapper: 'w-full',
    sectionTitle: 'font-bold text-accent',
  }

  {/* Get current user and fetch their ToDo items */}
  const { currentUser } = useFrappeAuth()

  const {data, isLoading, error} = useFrappeGetDocList(
    'ToDo',
    {
      fields: ['name', 'description', 'status'],
      filters: [['allocated_to', '=', currentUser]],
      orderBy: {
        field: 'creation',
        order: 'desc',
      },
    },
  )

    if (isLoading) {
      return <>Loading</>;
    }
    if (error) {
      return <>An error occured</>;
    }
    if (data) {
      return (
        <div className={styles.wrapper}>

          {/* Open Tasks Section */}
            <div className={styles.sectionTitle}>
              {/* Open status todo items */}
              <p>Tasks to do - {data.filter((item) => item.status == 'Open').length}</p>
            </div>

            {data.map((item, i) => (
              item.status == 'Open' ? <TodoItem name={item.name} description={item.description} status={item.status} key={i} /> : null
            ))}

          {/* Closed Tasks Section */}
            <div className={styles.sectionTitle + ' mt-10'}>
              {/* Closed todo items */}
              <p>Done - {data.filter((item) => item.status == 'Closed').length}</p>
            </div>

            {data.map((item, i) => (
              item.status == 'Closed' ? <TodoItem description={item.description} status={item.status} key={i} /> : null
            ))}

        </div>
      )
    }
}