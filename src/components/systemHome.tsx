import React from 'react'
import { useParams } from 'react-router-dom';

export const SystemHome = () => {
    const { systemUrl } = useParams();

  return (
    <div>Welcome to {systemUrl}</div>
  )
}

