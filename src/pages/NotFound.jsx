const NotFound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl font-bold mb-4">404</h1>
      <h1 className="text-3xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="text-lg text-gray-700 mb-8">
        The requested page could not be found.
      </p>
    </div>
  );
}

export default NotFound