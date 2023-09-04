const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full border-t-4 border-b-4 border-indigo-500 h-32 w-32"></div>
    </div>
  );
};

export default LoadingSpinner;
