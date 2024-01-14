import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const Table1 = ({ data }) => {
  return (
    <TableContainer component={Paper} sx={{backgroundColor:"black"}}>
      <Table>
        <TableHead>
          <TableRow>
            {data.headers.map((text, index) => (
              <TableCell sx={{color:"white"}} key={index}>{text}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {data.rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex} sx={{color:"white"}}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table1;
