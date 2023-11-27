import React from "react";
import { ContainerPagination, ButtonPagination } from "./styles";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ContainerPagination className="pagination">
      {pages.map((page) => (
        <ButtonPagination
          key={page}
          onClick={() => onPageChange(page)}
          active={currentPage === page ? "true" : undefined}
        >
          {page}
        </ButtonPagination>
      ))}
    </ContainerPagination>
  );
};

export default Pagination;
