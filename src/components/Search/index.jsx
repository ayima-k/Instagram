import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './Search.scss'

const Search = () => {
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef(null)
  
  const onClickClear = () => {
    setValue('')
    inputRef.current?.focus()
  }

  return (
    <div className='search_dropdown'>
      <div className='search_block'>
        <div className='search_logo'>
          <h2>Search</h2>
        </div>
        <div className='search_input'>
          <div>
            <BsSearch/>
            <input 
              type="text" 
              placeholder='Search' 
              onChange={(e) => setValue(e.target.value)} 
              ref={inputRef}
              value={value}
            />
          </div>
          {value && <svg onClick={onClickClear} className='clearIcon' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>}
        </div>
      </div>
      <div className='hr'>

      </div>
    </div>
  )
}

export default Search