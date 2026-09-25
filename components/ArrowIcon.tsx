type ArrowDirection = "up" | "down" | "left" | "right" | "up-right";

const rotations: Record<ArrowDirection, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: -90,
  "up-right": -45,
};

export default function ArrowIcon({
  direction = "right",
}: {
  direction?: ArrowDirection;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{ display: "inline-block", verticalAlign: "-0.125em", flexShrink: 0 }}
    >
      <path
        d="M4 12h16m-7-7 7 7-7 7"
        transform={`rotate(${rotations[direction]} 12 12)`}
      />
    </svg>
  );
}
