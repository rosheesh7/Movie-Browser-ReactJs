import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import "./PageButton.css";
const PageButton = ({ page, setPage }) => {
  return (
    <div className="page-buttons">
      {page > 1 && (
        <>
          <button onClick={() => setPage((p) => p - 2)}>
            <FaArrowLeft />
          </button>
          <button onClick={() => setPage((p) => p - 1)}>{page - 1}</button>
        </>
      )}
      <button className="current-page" onClick={() => setPage(page)}>
        {page}
      </button>
      <button onClick={() => setPage((p) => p + 1)}>{page + 1}</button>

      <button onClick={() => setPage((p) => p + 2)}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default PageButton;
