import React, { useState, useEffect } from "react";
import Filter from "./filters/Filter";
import Grid from "@material-ui/core/Grid";

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
    <Grid container justify="center" alignItems="flex-end" spacing={3}>
      {filterWidgets.map(widget => (
        <Grid item key={widget.name}>
          <Filter
            name={widget.name}
            type={widget.type}
            value={filterValues[widget.name]}
            onChange={value =>
              setFilterValues({ ...filterValues, [widget.name]: value })
            }
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default FiltersBar;
