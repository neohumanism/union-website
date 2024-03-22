import React from 'react';

//we use mui grid instead of absoluting?
//we will use mui grid. make a component for each possible grid item
//all positions are centered, and mapped out in a 16x9 grid or smth

 const MyTable = () => {
  const gridX = 16;
  const gridY = 6;
  const w = 80;
  const h = 60;
  const data = [
    { text: 'item1', position: [2, 3] },
    { text: 'item2 item2 it2 ', position: [4, 4] },
    { text: 'item3', position: [1, 2] },
  ];

  const generateTable = () => {
    const tableRows = [];
    for (let col = 1; col <= gridY; col++) {
      const tableCells = [];
      for (let row = 1; row <= gridX; row++) {
        const isBlank = !data.some(({ position }) => position[0] === row && position[1] === col);
        tableCells.push(
          <td key={`${col}-${row}`} style={{ border: '1px solid #ddd', width: `${w}px`, height: `${h}px` }}>
            {isBlank ? null : (
              <div style={{ backgroundColor: 'lightblue', padding: '8px', boxSizing: 'border-box', width: `${w}px`, height: `${h}px`, overflow: 'hidden' }}>
                {data.find(({ position }) => position[0] === row && position[1] === col)?.text}
              </div>
            )}
          </td>
        );
      }
      tableRows.push(<tr key={col}>{tableCells}</tr>);
    }
    return tableRows;
  };

  return (
    <table style={{ borderCollapse: 'collapse'}}>
      <tbody>{generateTable()}</tbody>
    </table>
  );
};

export default MyTable;
