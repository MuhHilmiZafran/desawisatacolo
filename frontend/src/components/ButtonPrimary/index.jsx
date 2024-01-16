const ButtonPrimary = ({
  type = "submit",
  className = "",
  processing,
  onClick,
  children,
}) => {
  return (
    <button
      type={type}
      className={`box-border active:bg-cyan-700 py-4 px-4 rounded-[3px] text-white text-xs transition ${className}`}
      disabled={processing}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
