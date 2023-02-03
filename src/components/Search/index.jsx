import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getSearch } from '../../config/api';
import './Search.scss';

const Search = () => {
  const [value, setValue] = React.useState('');
  const [data, setData] = React.useState(null);
  const inputRef = React.useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const [toggle, setToggle] = React.useState(true);

  const onClickClear = () => {
    setValue('');
    inputRef.current?.focus();
  };

  const handleSearch = (value) => {
    getSearch(value)
      .then((r) => {
        setData(r.data);
      })
      .finally(() => setToggle(true));
  };

  return (
    toggle && (
      <div className="search_dropdown">
        <div className="search_block">
          <div className="search_logo">
            <h2>Search</h2>
          </div>
          <div className="search_input">
            <div>
              <BsSearch />
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => {
                  setValue(e.target.value);
                  handleSearch(value);
                }}
                ref={inputRef}
                value={value}
              />
            </div>
            {value && (
              <svg
                onClick={onClickClear}
                className="clearIcon"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            )}
          </div>
        </div>
        <div className="hr"></div>
        <div className="searched">
          {value.length >= 1 &&
            data?.map((item) => (
              <div
                key={item.id}
                className="searched_block"
                onClick={() => {
                  navigate(user?.id == item.id ? '/profile' : `users/${item.id}`);
                  setToggle(false);
                }}>
                <img
                  src={
                    item.avatarka
                      ? ''
                      : 'https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg'
                  }
                  alt=""
                />
                <h2>{item.username}</h2>
              </div>
            ))}
        </div>
      </div>
    )
  );
};

export default Search;
