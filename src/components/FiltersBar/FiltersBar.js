import React, { useState, useEffect } from "react";
import Filter from "./filters/Filter";

const FiltersBar = ({
  filterWidgets,
  initialFilterValues,
  onFiltersChanged
}) => {
  const [filterValues, setFilterValues] = useState(initialFilterValues);

  // Notify upstream whenever filterValues change
  useEffect(() => {
    onFiltersChanged(filterValues);
  }, [filterValues, onFiltersChanged]);

  return (
    <div>
      {filterWidgets.map(widget => (
        <Filter
          name={widget.name}
          key={widget.name}
          type={widget.type}
          value={filterValues[widget.name]}
          onChange={value =>
            setFilterValues({ ...filterValues, [widget.name]: value })
          }
        />
      ))}
    </div>
  );
};

export default FiltersBar;
