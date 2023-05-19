import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="my-container">
      <div className="w-full mb-12">
        <div className="title-body">
          <h1 className="title">Blogs</h1>
        </div>
        <table className="w-full">
          <thead>
            <tr>
              <th className="w-1/3 border p-3 text-xl">Question</th>
              <th className="border p-3 text-xl">Answer</th>
            </tr>
          </thead>
          <tbody className="text-justify">
            <tr>
              <td className="w-1/3 border p-3 text-lg font-semibold">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </td>
              <td className=" border p-3 font-medium">
                An access token is a credential given to a client (application
                or user) after successful authentication. It proves
                authorization to access specific resources on a server and is
                included in requests to protected APIs or resources. On the
                other hand, a refresh token is a long-lived credential issued
                alongside the access token. It is securely stored on the
                client-side and used to obtain a new access token when the
                current one expires. Access tokens should be stored securely on
                the client-side, such as in HTTP-only cookies or browser storage
                mechanisms, while refresh tokens should be stored even more
                securely in locations like secure cookies or operating
                system/browser-provided secure storage. This separation of
                tokens helps maintain security by minimizing the exposure of
                sensitive credentials and reducing the risk of unauthorized
                access if an access token is compromised.
              </td>
            </tr>
            <tr>
              <td className="w-1/3 border p-3 text-lg font-semibold">
                Compare SQL and NoSQL databases?
              </td>
              <td className=" border p-3 font-medium">
                SQL (Structured Query Language) databases follow a relational
                data model, organizing data into tables with predefined schemas
                and supporting complex relationships between entities. They are
                suitable for structured and consistent data, ensuring data
                integrity through ACID transactions. SQL databases excel in
                complex querying and are vertically scalable, requiring hardware
                upgrades for increased workload.
                <br />
                <br />
                NoSQL (Not Only SQL) databases embrace various data models like
                key-value pairs, documents, columns, or graphs. They prioritize
                scalability and performance, distributing data across multiple
                servers for horizontal scaling. NoSQL databases offer
                flexibility in handling unstructured or semi-structured data and
                have dynamic schemas. However, they may sacrifice some ACID
                properties and have varying approaches to managing data
                relationships.
              </td>
            </tr>
            <tr>
              <td className="w-1/3 border p-3 text-lg font-semibold">
                What is express js? What is Nest JS?
              </td>
              <td className=" border p-3 font-medium">
                Express.js is a minimalistic and flexible web application
                framework for Node.js. It provides a set of features and tools
                to build web applications and APIs. Express.js simplifies the
                process of handling HTTP requests, routing, and middleware
                management. It allows developers to create robust and scalable
                web applications quickly. With its lightweight nature,
                Express.js provides a simple and intuitive interface for
                building server-side applications in JavaScript.
                <br />
                <br />
                NestJS, on the other hand, is a progressive and opinionated
                framework for building efficient and scalable server-side
                applications using TypeScript. NestJS is built on top of
                Express.js, leveraging its features while adding additional
                structure and functionality. It follows the modular architecture
                pattern, making it easy to develop complex applications by
                organizing code into modules. NestJS embraces TypeScript's
                benefits, including strong typing, decorators, and dependency
                injection, to enhance developer productivity and code
                maintainability. It also provides built-in support for various
                features like authentication, database integration, and caching,
                making it a comprehensive framework for building
                enterprise-grade applications. In summary, Express.js is a
                lightweight web application framework for Node.js, while NestJS
                is a more opinionated framework built on top of Express.js,
                providing additional structure and functionality for building
                efficient and scalable server-side applications with TypeScript.
              </td>
            </tr>
            <tr>
              <td className="w-1/3 border p-3 text-lg font-semibold">
                What is MongoDB aggregate and how does it work?
              </td>
              <td className=" border p-3 font-medium">
                MongoDB's aggregate method is a powerful tool for performing
                advanced data processing and analysis within the database. It
                allows for the construction of pipelines consisting of stages
                that transform and manipulate data. Each stage performs specific
                operations, such as filtering, grouping, sorting, or calculating
                aggregate values, and the output is passed to the next stage.
                This enables developers to efficiently perform complex data
                transformations and analytics directly within MongoDB, reducing
                the need for external processing and enabling concise and
                powerful data aggregation.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
