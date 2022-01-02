export const LoadingImage = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex animate-pulse flex-row items-center h-full rounded-md justify-center space-x-5 bg-gray-300 ${className}`}
    ></div>
  );
};
