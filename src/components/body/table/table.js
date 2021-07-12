import React, { useMemo } from 'react'
import  {useTable, useGlobalFilter, usePagination} from 'react-table';
import DATA from './data.json';
import "../body.css";
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
		data,
		initialState : {pageIndex : 0}
	},useGlobalFilter,usePagination );
    
	const  {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		rows,
		prepareRow,
		state,
		setGlobalFilter,
		nextPage,
		previousPage,
		canNextPage,
		canPreviousPage,
		pageOptions,
		gotoPage,
		pageCount,
		setPageSize
	} = tableInstance;

	const {globalFilter, pageIndex, pageSize} = state;

	return(
		<>
			<GlobalFilter filter = {globalFilter} setFilter = {setGlobalFilter} />
		    <table className = "table table-striped table-bordered table-hover " {...getTableProps()}>
				<thead className = "table-header" >
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
						page.map(row=> {
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
			<hr/>
			<div className = "pagination-bar">
				  <span>
					  Page {' '}
					  <strong>
						  {pageIndex + 1} of {pageOptions.length}
					  </strong>
				  </span>
				  <span>
					  Go to page : {" "}
					  <input className = "pagination-box" type = "number" defaultValue = {pageIndex +1} onChange = {e => {
						  const pageNumber = e.target.value ? Number(e.target.value) -1 : 0
						  gotoPage(pageNumber)
					  }} />
				  </span>
				  <select className = "pagination-box" value = {pageSize} onChange = {e=> setPageSize(Number(e.target.value))}>
					  {
						  [10,25,50].map(pageSize => (
							  <option key ={pageSize} value = {pageSize}>
								  Show {pageSize}
							  </option>
						  ))
					  }
				  </select>
				  <button className ="btn btn-sm bg-dark text-white p-2 m-1 "  onClick = {()=> gotoPage(0)} disabled = {!canPreviousPage}  > {"First page" }</button>
				  <button className ="btn btn-sm bg-dark text-white p-2 m-1"  onClick = {()=> previousPage()} disabled = {!canPreviousPage}  >Prev</button>
				  <button className ="btn btn-sm bg-dark text-white p-2 m-1" onClick = {()=> nextPage()} disabled = {!canNextPage} >Next</button>
				  <button className ="btn btn-sm bg-dark text-white p-2 m-1"  onClick = {()=> gotoPage(pageCount - 1) } disabled = {!canNextPage} > {"Last page"} </button>
			  </div>

		</>
	)
}

export default Table;