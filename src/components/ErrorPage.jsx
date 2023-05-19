import { Link, useRouteError } from "react-router-dom";
import { FaSadCry } from "react-icons/fa";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 bg-gray-100 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <FaSadCry className="w-40 h-40 text-fuchsia-800 animate-bounce" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-fuchsia-700">
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
