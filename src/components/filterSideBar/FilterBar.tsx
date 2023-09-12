import React from "react";
import { FilterSideBarStyle } from "theme";

type FilterBarProps = {
    active: boolean,
    children: React.ReactNode,
}

export const FilterBar:React.FC<FilterBarProps> = ({active,children}) => {
    return(
      <>
        <FilterSideBarStyle active={active}>
            {children}
        </FilterSideBarStyle>
      </>
    )
}