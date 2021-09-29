const defaultProps = {
  className: "",
};
function SvgDown({ className }: typeof defaultProps) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9L12 16L5 9"
        stroke="#7B7B7B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
SvgDown.defaultProps = defaultProps;

export default SvgDown;
