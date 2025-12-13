const SkipNavigation = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-50"
    >
      Skip to main content
    </a>
  );
};

export default SkipNavigation;
