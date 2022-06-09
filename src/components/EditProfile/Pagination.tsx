const Pagination = ({
  offset,
  setOffset,
  skillsPerPage,
  amountOfSkills,
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
        disabled={amountOfSkills < 5}
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
