const defaultProps = {
  className: "",
};
function SvgBook({ className }: typeof defaultProps) {
  return (
    <svg
      className={className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.5 6L13.5 10.5M13.5 30L5.3295 25.914C5.08038 25.7895 4.87083 25.5981 4.72433 25.3613C4.57782 25.1244 4.50015 24.8515 4.5 24.573V8.427C4.50014 8.17141 4.56558 7.9201 4.69012 7.69691C4.81465 7.47372 4.99416 7.28605 5.21159 7.15171C5.42903 7.01737 5.67718 6.94082 5.93251 6.92932C6.18784 6.91782 6.44187 6.97175 6.6705 7.086L13.5 10.5V30ZM13.5 30L22.5 25.5L13.5 30ZM13.5 30V10.5V30ZM22.5 25.5L29.3295 28.914C29.5581 29.0282 29.8122 29.0822 30.0675 29.0707C30.3228 29.0592 30.571 28.9826 30.7884 28.8483C31.0058 28.714 31.1853 28.5263 31.3099 28.3031C31.4344 28.0799 31.4999 27.8286 31.5 27.573V11.427C31.4999 11.1485 31.4222 10.8756 31.2757 10.6387C31.1292 10.4019 30.9196 10.2105 30.6705 10.086L22.5 6V25.5ZM22.5 25.5V6V25.5Z"
        stroke="#7B7B7B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
SvgBook.defaultProps = defaultProps;

export default SvgBook;