import react, { useState, useEffect } from 'react'
import { useFrappeGetDocList, useFrappeAuth } from 'frappe-react-sdk'

export function useGetAllTodos() {

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

  return data;
}