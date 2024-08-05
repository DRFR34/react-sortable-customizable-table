import React, { useState } from 'react';
import './ReactSortableTable.scss';
import UpDownIcon from './IconsComponents/UpDownIcon';
import UpIcon from './IconsComponents/UpIcon';
import DownIcon from './IconsComponents/DownIcon';

export default function ReactSortableTable({
  tableData,
  columns,
  headerBgColor = '#fff',
  headerHoverBgColor = '#f0f0f0',
  headerTextColor = '#000',
  headerHoverTextColor = '#333',
  headerActiveBgColor = '#ccc',
  headerActiveTextColor = '#000',
  rowEvenBgColor = '#f9f9f9',
  rowOddBgColor = '#bdc3c7',
  rowHoverBgColor = '#eaeaea',
  bodyTextColor = '#000',
  sortable = true,
  dateFormat = 'yyyy-MM-dd'
}) {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const [hoveredHeader, setHoveredHeader] = useState(null);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  /**
   * Formats a date string according to the specified date format.
   * @param {string} dateString - The date string to format.
   * @returns {string} - The formatted date string.
   */
  const formatDate = (dateString) => {
    if (!dateString) return '';

    const date = new Date(dateString);
    if (isNaN(date)) {
      console.log("Invalid date:", dateString);
      return dateString; // Return original string if date parsing fails
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    switch (dateFormat) {
      case 'yy/MM/dd':
        return `${String(year).slice(-2)}/${month}/${day}`;
      case 'MM/dd/yy':
        return `${month}/${day}/${String(year).slice(-2)}`;
      case 'dd/MM/yy':
        return `${day}/${month}/${String(year).slice(-2)}`;
      case 'MM/dd/yyyy':
        return `${month}/${day}/${year}`;
      case 'dd/MM/yyyy':
        return `${day}/${month}/${year}`;
      case 'yyyy-MM-dd':
      default:
        return `${year}-${month}-${day}`;
    }
  };

  /**
   * Handles sorting logic when a column header is clicked.
   * @param {string} column - The accessor of the column to sort by.
   */
  const handleSort = (column) => {
    if (!sortable) return;
    const direction = column === sortColumn && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(direction);
  };

  /**
   * Sorts the data based on the current sort column and direction.
   * @returns {Object[]} - The sorted data.
   */
  const sortedData = () => {
    let sorted = [...tableData];
    if (sortable && sortColumn) {
      sorted = sorted.sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        if (typeof valueA === 'string' && typeof valueB === 'string') {
          return sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        } else {
          return sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        }
      });
    }
    return sorted;
  };

  return (
    <div className="tableContainer">
      <table className="table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.accessor}
                onClick={() => handleSort(column.accessor)}
                onMouseEnter={() => setHoveredHeader(column.accessor)}
                onMouseLeave={() => setHoveredHeader(null)}
                style={{ 
                  backgroundColor: sortColumn === column.accessor
                    ? headerActiveBgColor
                    : hoveredHeader === column.accessor
                    ? headerHoverBgColor
                    : headerBgColor,
                  color: sortColumn === column.accessor
                    ? headerActiveTextColor
                    : hoveredHeader === column.accessor
                    ? headerHoverTextColor
                    : headerTextColor,
                  cursor: sortable ? 'pointer' : 'default' 
                }}
              >
                <div className='thContent'>
                  {column.label}
                  {sortable && (sortColumn === column.accessor 
                  ? (
                    sortDirection === 'asc' 
                    ? <UpIcon 
                    className='thContent__upDownIcon'
                    /> 
                    : <DownIcon  
                    className='thContent__downIcon'
                    />
                  ) : <UpDownIcon
                  className='thContent__upIcon inactive'/>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData().map((data, index) => (
            <tr
              key={data.id || index}
              onMouseEnter={() => setHoveredRowIndex(index)}
              onMouseLeave={() => setHoveredRowIndex(null)}
              style={{
                backgroundColor: hoveredRowIndex === index ? rowHoverBgColor : (index % 2 === 0 ? rowEvenBgColor : rowOddBgColor),
                color: bodyTextColor,
              }}
              className="tbodyRaw"
            >
              {columns.map((column) => {
                let content = data[column.accessor];
                if (column.accessor.includes('Date') && content) {
                  content = formatDate(content);
                }
                return (
                  <td
                    key={`${data.id || index}-${column.accessor}`}
                  >
                    {content}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
