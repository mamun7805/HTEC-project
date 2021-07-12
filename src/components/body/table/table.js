
import React, { useMemo } from 'react'
import  {useTable, useGlobalFilter} from 'react-table';
import DATA from './data.json';

import GlobalFilter from './globalFilter';

const COLUMNS = [
	{
		Header: "id",
		accessor : "id",
		Footer : "id"
	},
	{
		Header : "First Name",
		accessor : "first_name",
		Footer : "First Name"
	},
	{
		Header : "Last Name",
		accessor : "last_name",
		Footer : "Last Name"
	},
	{
		Header : "Date of Birth",
		accessor : "date_of_birth",
		Footer : "Date of Birth",
		
	},
	{
		Header : "Country",
		accessor : "country",
		Footer : "Country"
	},
	{
		Header : "Phone",
		accessor : "phone",
		Footer : "Phone"
	}
]





function Table(){


	const columns = useMemo(()=> COLUMNS, []);
	const data = useMemo(()=> DATA, []);

	const tableInstance = useTable({
		columns,
		data
	},useGlobalFilter )
    

	const  {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state,
		setGlobalFilter
	} = tableInstance;

   
	const {globalFilter} = state;


	return(
		<>

				<GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />
		      <table className = "table table-striped table-bordered " {...getTableProps()}>
				  <thead className = "bg-primary" >
					  {
						  headerGroups.map(headerGroup =>(
							  <tr {...headerGroup.getHeaderGroupProps()}>
								  {
									  headerGroup.headers.map(column=> (
										  <th {...column.getHeaderProps()}>
											  {column.render('Header')}
											 
										  </th>
									  ))
								  }

							  </tr>
						  ))
					  }
				  </thead>
				  <tbody {...getTableBodyProps()}>
					  {
						  rows.map(row=> {
							  prepareRow(row)
							  return(
								  <tr{...row.getRowProps()}>
									{row.cells.map(cell => {
										return(
											<td {...cell.getCellProps()}>
												{cell.render('Cell')}
											</td>
										)
									})}
								  </tr>	
							  )
						  })
					  }
					


				  </tbody>

			  </table>

		</>

	)
}
export default Table;