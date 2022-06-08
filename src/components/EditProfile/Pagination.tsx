import React from "react";

const Pagination = ({
  offset,
  setOffset,
  skillsPerPage,
  amountOfProducts,
}: any) => {
  return (
    <div>
      <button
        style={{ color: "yellow", background: "red" }}
        onClick={() => setOffset(offset - skillsPerPage)}
        disabled={offset === 0}
      >
        previous page
      </button>

      <button
        style={{ color: "red", background: "yellow" }}
        onClick={() => setOffset(offset + skillsPerPage)}
        disabled={amountOfProducts < 5}
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
