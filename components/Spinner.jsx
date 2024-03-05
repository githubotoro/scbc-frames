export const Spinner = () => {
  return (
    <div
      className="inline-block border-[3.5px] rounded-full animate-spin border-t-transparent drop-shadow-sm"
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
