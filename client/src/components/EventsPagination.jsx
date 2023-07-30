import React from "react";

export default function EventsPagination({ setPage, pageCount, page }) {
  const handlePrevious = () => {
    setPage((p) => {
      if (p === 1) return p;
      return p - 1;
    });
  };
  const handleNext = () => {
    setPage((p) => {
      if (p === pageCount) return p;
      return p + 1;
    });
  };
  return (
    <footer className="space-x-5">
      <button
        disabled={page === 1}
        onClick={handlePrevious}
        className="px-3 py-2 rounded bg-black text-white"
      >
        Previous
      </button>
      <button
        disabled={page === pageCount}
        onClick={handleNext}
        className="px-3 py-2 rounded bg-black text-white"
      >
        next
      </button>
    </footer>
    // <nav aria-label="Page navigation example">
    //   <ul className="list-style-none flex">
    //     <li>
    //       <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-500 transition-all duration-300 dark:text-neutral-400">
    //         Previous
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="relative block rounded bg-transparent px-3 py-1.5 text-lg text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
    //         href="#!"
    //       >
    //         1
    //       </a>
    //     </li>
    //     <li aria-current="page">
    //       <a
    //         className="relative block rounded bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
    //         href="#!"
    //       >
    //         2
    //         <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
    //           (current)
    //         </span>
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
    //         href="#!"
    //       >
    //         3
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
    //         href="#!"
    //       >
    //         Next
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}
