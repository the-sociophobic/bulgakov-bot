import React from 'react'


const useTitle = ( title?: string ) => {
  const res = 'Лихорадка: ' + (title || '')

  React.useEffect(() => {
    document.title = res
  }, [title])

  return res
}


export default useTitle
