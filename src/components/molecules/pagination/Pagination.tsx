import React, { FC } from "react";
import ListItem from "../../atoms/listItem/ListItem";
import Anchor from "../../atoms/anchor/Anchor";

interface PaginationProps {
  length: number;
}

const Pagination: FC<PaginationProps> = () => {
  return (
    <ul className="inline-flex items-center -space-x-px">
      <ListItem className={""}>
        <Anchor
          href="#"
          className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Previous
        </Anchor>
      </ListItem>
      <ListItem className={""}>
        <Anchor
          href="#"
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          1
        </Anchor>
      </ListItem>
      <ListItem className={""}>
        <Anchor
          href="#"
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          2
        </Anchor>
      </ListItem>
      <ListItem className={""}>
        <Anchor
          href="#"
          aria-current="page"
          className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
        >
          3
        </Anchor>
      </ListItem>
      <ListItem className={""}>
        <Anchor
          href="#"
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          4
        </Anchor>
      </ListItem>
      <ListItem className={""}>
        <Anchor
          href="#"
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          5
        </Anchor>
      </ListItem>
      <ListItem className={""}>
        <Anchor
          href="#"
          className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
        </Anchor>
      </ListItem>
    </ul>
  );
};

export default Pagination;
