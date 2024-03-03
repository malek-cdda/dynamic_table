import React from "react";
import {
  PaginationArrowButton,
  PaginationButton,
  PaginationContainer,
  PaginationText,
  PaginationWrapper,
} from "./StyledComponent";
import { returnPagination } from "./returnPagination";
import Image from "next/image";
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
        <PaginationArrowButton onClick={() => handlePageChange("next")}>
          {" "}
          <Image src="/assets/left_arrow.svg" width={24} height={24} alt="" />
        </PaginationArrowButton>
        {arr.map((item: any, index: any) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(item)}
            $isActive={index + 1 === page ? "active" : "inactive"}>
            {" "}
            {item}{" "}
          </PaginationButton>
        ))}
        <PaginationArrowButton onClick={() => handlePageChange("next")}>
          {" "}
          <Image src="/assets/arrow.svg" width={24} height={24} alt="" />
        </PaginationArrowButton>
      </PaginationContainer>
    </PaginationWrapper>
  );
};

export default Pagination;
