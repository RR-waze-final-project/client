import React from 'react'
import { useParams } from 'react-router-dom';
import { Maps } from './maps';
import { AutoComplete } from './autoComplete';

export const SystemHome = () => {
  const { systemUrl } = useParams();

  return (
    <div>
      <header>Welcome to {systemUrl}</header>

      <AutoComplete />
      <Maps />
    </div>
  )
}

