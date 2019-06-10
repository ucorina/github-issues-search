import React, { useState } from "react";

const RepositorySelector = ({
  initialOwner,
  initialRepository,
  onRepositorySelected
}) => {
  const [owner, setOwner] = useState(initialOwner);
  const [repository, setRepository] = useState(initialRepository);

  return (
    <div>
      <input
        type="text"
        name="owner"
        value={owner}
        onChange={e => setOwner(e.target.value)}
      />
      /
      <input
        type="text"
        name="repository"
        value={repository}
        onChange={e => setRepository(e.target.value)}
      />
      <button onClick={() => onRepositorySelected({ owner, repository })}>
        Load issues
      </button>
    </div>
  );
};

export default RepositorySelector;
