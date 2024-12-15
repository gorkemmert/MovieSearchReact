/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';
import { Link } from 'react-router-dom';

const MovieTable: React.FC<{ movies: any[] }> = ({ movies }) => {
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(10); 

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const displayedMovies = movies.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', color: '#1976d2' }}>Name</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: '#1976d2' }}>Release Year</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: '#1976d2' }}>IMDb ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedMovies.map((movie) => (
            <TableRow key={movie.imdbID}>
              <TableCell>
                <Link className="text-blue-600 underline font-medium hover:text-blue-800 transition-colors duration-200" to={`/movies/${movie.imdbID}`}>{movie.Title}</Link>
              </TableCell>
              <TableCell>{movie.Year}</TableCell>
              <TableCell>{movie.imdbID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* Sayfalama */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} 
        component="div"
        count={movies.length} 
        rowsPerPage={rowsPerPage} 
        page={page} 
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default MovieTable;