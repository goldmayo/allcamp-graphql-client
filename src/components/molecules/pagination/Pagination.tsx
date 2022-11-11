import React, { FC } from "react";
import ListItem from "../../atoms/list_item/ListItem";
import Anchor from "../../atoms/anchor/Anchor";
import Button from "../../atoms/button/Button";
import { useRouter } from "next/router";
import Span from "../../atoms/span/Span";
import { PageInfo } from "../../../types/campType";

interface PaginationProps {
  totalCounts: number;
  pageInfo: PageInfo;
  limit?: number;
  page: number;
}

const Pagination: FC<PaginationProps> = ({ limit = 10, ...props }) => {
  const router = useRouter();
  const numberOfPages = Math.ceil(props.totalCounts / limit);

  const handlePaginateForWard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  const handlePaginateBackWard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <nav>
        <Button onClick={handlePaginateBackWard} disabled={!props.pageInfo.hasPreviousPage}>
          &lt;
        </Button>
        <Span className="">{`${props.page}/${numberOfPages}`}</Span>
        <Button onClick={handlePaginateForWard} disabled={!props.pageInfo.hasNextPage}>
          &gt;
        </Button>
      </nav>
    </>
  );
};

export default Pagination;
