import React from "react";
import {
  PaginationButton,
  PaginationContainer,
  PaginationText,
  PaginationWrapper,
} from "./StyledComponent";
import { returnPagination } from "./returnPagination";
interface PaginationProps {
  totalPage: number;
  page: number | string;
  limits: number;
  siblings: any;
  handlePageChange: (page: number | string) => void;
}
const Pagination = ({
  totalPage,
  page,
  limits,
  siblings,
  handlePageChange,
}: PaginationProps) => {
  const arr = returnPagination(totalPage, page, limits, siblings);
  return (
    <PaginationWrapper>
      <PaginationText>Pages 1 to 10</PaginationText>
      <PaginationContainer>
        {arr.map((item: any, index: any) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            isActive={index + 1 === page ? "active" : "inactive"}>
            {" "}
            {item}{" "}
          </PaginationButton>
        ))}
      </PaginationContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
