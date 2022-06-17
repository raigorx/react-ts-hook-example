import type {filterState} from './types';
import { SearchBar } from "../SearchBar"
import { ProductTable } from "../ProductTable"
import { useState } from "react"



export function FilterableProductTable() {
  const [filterText, setFilterText ] : filterState<string> = useState("")
  const [inStockOnly, setInStockOnly]: filterState<boolean> = useState(false)
  return (
    <>
      <div className="filterable-product-table">
        <SearchBar
          filterText={filterText}
          setFilterText={setFilterText}
          inStockOnly={inStockOnly}
          setInStockOnly={setInStockOnly}
        />
        <ProductTable filterText={filterText} inStockOnly={inStockOnly} />
      </div>
    </>
  )
}
