import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const RepositorySelector = ({
  initialOwner,
  initialRepository,
  onRepositorySelected
}) => {
  const [owner, setOwner] = useState(initialOwner);
  const [repository, setRepository] = useState(initialRepository);

  return (
    <Grid container justify="center" alignItems="flex-end" spacing={3}>
      <Grid item>
        <TextField
          label="Owner"
          name="owner"
          value={owner}
          onChange={e => setOwner(e.target.value)}
          InputProps={{
            endAdornment: <InputAdornment position="end">/</InputAdornment>
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          label="Repository"
          name="repository"
          value={repository}
          onChange={e => setRepository(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onRepositorySelected({ owner, repository })}
        >
          Load issues
        </Button>
      </Grid>
    </Grid>
  );
};

export default RepositorySelector;
