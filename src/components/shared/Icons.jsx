// Small inline icons shared by the extracted cards (verbatim createIcon markup from the reference DOM).
// All use currentColor.

// "arrow-right" (15×15, stroke)
export function ArrowRightIcon() {
  return (
    <span data-icon="true" className="flex h-[15px] w-[15px]">
      <svg data-icon="arrow-right" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true">
        <g strokeWidth="1">
          <path d="M13.5 7.5H1M13.5 7.5L9.5 3.5L13.5 7.5ZM13.5 7.5L9.5 11.5L13.5 7.5Z" stroke="currentColor" />
        </g>
      </svg>
    </span>
  )
}

// "arrow-top-right" (15×15): compare cards (product §4.1 #5, solutions §4.5.1)
export function ArrowTopRightIcon() {
  return (
    <span data-icon="true" className="flex h-[15px] w-[15px]">
      <svg data-icon="arrow-top-right" height="15" viewBox="0 0 15 15" width="15" aria-hidden="true">
        <g strokeWidth="1">
          <path
            d="M11.4986 3.49866L11.9992 3.49866L11.9985 2.99873L11.4986 2.99803L11.4986 3.49866ZM10.9979 3.49866L10.9972 9L11.9985 9L11.9992 3.49866L10.9979 3.49866ZM11.4986 2.99803L5.99941 2.99888V4.00014L11.4986 3.99929L11.4986 2.99803ZM11.145 3.14511L2.30618 11.9839L3.01328 12.691L11.8521 3.85221L11.145 3.14511Z"
            fill="currentColor"
          />
        </g>
      </svg>
    </span>
  )
}
