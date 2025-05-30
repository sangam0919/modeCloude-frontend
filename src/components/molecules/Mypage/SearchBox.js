import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchUsers } from '../../api/user'; 

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const value = e.target.value;
    setKeyword(value);

    if (value.trim() === '') return setResults([]);

    try {
      const res = await getSearchUsers(value); 
      setResults(res.users);
    } catch (err) {
      console.error('검색 실패:', err);
    }
  };

  const handleSelect = (user) => {
    navigate(`/user/${user.uid}`);
    setKeyword(''); 
    setResults([]); 
  };

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        value={keyword}
        onChange={handleSearch}
        placeholder="닉네임 검색"
        style={{
          padding: '10px',
          borderRadius: '4px',
          width: '200px',
          border: '1px solid #ccc'
        }}
      />

      {results.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          background: 'white',
          border: '1px solid #ccc',
          width: '100%',
          zIndex: 999,
          listStyle: 'none',
          padding: 0,
          margin: 0,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {results.map((user) => (
            <li
              key={user.uid}
              onClick={() => handleSelect(user)}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #eee'
              }}
            >
              {user.nickname}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
