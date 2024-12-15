import React, { useState } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { fetchMovies } from '../redux/moviesSlice';
import { TextField, Button, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('Pokemon');
  const [type, setType] = useState('movie');
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    dispatch(fetchMovies({ query, type }));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
       <TextField
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a movie..."
        InputProps={{
          style: { backgroundColor: '#ECEBDE' },
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <div style={{ display: 'flex', gap: '5px' }}>
        <Button
          variant={type === 'movie' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setType('movie')}
        >
          Movies
        </Button>
        <Button
          variant={type === 'series' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setType('series')}
        >
          TV Series
        </Button>
        <Button
          variant={type === 'episode' ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => setType('episode')}
        >
          Episodes
        </Button>
      </div>

      <Button variant="contained" color="secondary" onClick={handleSearch}>
        Apply Filters
      </Button>
    </div>
  );
};

export default SearchBar;
