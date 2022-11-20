import React, { FC, useState } from "react";
import Button from "@/components/atoms/button/Button";
import Span from "@/components/atoms/span/Span";
import { PageInfo } from "@/types/campType";

interface PaginationProps {
  totalCounts: number;
  pageInfo: PageInfo;
  limit?: number;
  onLoadMore: (direction: "foward" | "backward", cursor: string, limit: number) => void;
}

const Pagination: FC<PaginationProps> = ({ onLoadMore, limit = 10, ...props }) => {
  const [pageNumber, setPageNunmber] = useState<number>(1);
  const numberOfPages = Math.ceil(props.totalCounts / limit);

  const handlePaginateForWard = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (pageNumber === numberOfPages - 1) {
      onLoadMore(
        "foward",
        props.pageInfo.endCursor as string,
        props.totalCounts % limit === 0 ? limit : props.totalCounts % limit
      );
    } else {
      onLoadMore("foward", props.pageInfo.endCursor as string, limit);
    }
    setPageNunmber((prev) => prev + 1);
  };
  const handlePaginateBackWard = (e: React.MouseEvent<HTMLButtonElement>) => {
    onLoadMore("backward", props.pageInfo.startCursor as string, limit);
    setPageNunmber((prev) => prev - 1);
  };
  return (
    <>
      <nav className="flex flex-row items-center justify-between w-full pb-4">
        <Button
          type="button"
          size="sm"
          className="btn-primary disabled:opacity-50"
          onClick={handlePaginateBackWard}
          disabled={pageNumber === 1 || !props.pageInfo.hasPreviousPage}
        >
          이전 페이지로
        </Button>
        <Span className="font-semibold text-body1">{`${pageNumber}/${numberOfPages}`}</Span>
        <Button
          type="button"
          size="sm"
          className="btn-primary disabled:opacity-50"
          onClick={handlePaginateForWard}
          disabled={pageNumber === numberOfPages || !props.pageInfo.hasNextPage}
        >
          다음 페이지로
        </Button>
      </nav>
    </>
  );
};

export default Pagination;
