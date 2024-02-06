import React from "react";
import {
  ContainerPagination,
  ButtonPagination,
  ButtonPaginationSet,
} from "./styles";

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
  // Determina o início e o fim do intervalo de páginas a serem exibidas
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, startPage + 4);

  // Gera um array de números de página no intervalo determinado
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <ContainerPagination className="pagination">
      {/* Botão para retroceder o intervalo de páginas */}
      {currentPage > 1 && (
        <ButtonPaginationSet
          onClick={() => onPageChange(Math.max(1, currentPage - 5))}
        >
          {"<<"}
        </ButtonPaginationSet>
      )}

      {/* Números de página */}
      {pages.map((page) => (
        <ButtonPagination
          key={page}
          onClick={() => onPageChange(page)}
          active={currentPage === page ? "true" : undefined}
        >
          {page}
        </ButtonPagination>
      ))}

      {/* Botão para avançar o intervalo de páginas */}
      {currentPage < totalPages && (
        <ButtonPaginationSet
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 5))}
        >
          {">>"}
        </ButtonPaginationSet>
      )}
    </ContainerPagination>
  );
};

export default Pagination;
