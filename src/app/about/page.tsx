export const metadata = {
  title: "About Us",
  description: "Learn more about ToolName and our free online tools.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">About Us</h1>

      <div className="mt-8 space-y-6 leading-7 text-gray-600">
        <p>
          Welcome to ToolName, a collection of simple and useful online tools
          designed to make everyday tasks easier.
        </p>

        <p>
          Our goal is to provide fast, easy-to-use tools that work directly
          in your web browser without unnecessary software or complicated
          setup.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Our Mission
        </h2>

        <p>
          We focus on creating practical online utilities that are accessible
          to everyone and easy to use on both desktop and mobile devices.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Why We Built This Website
        </h2>

        <p>
          Many everyday tasks can be completed quickly with the right online
          tool. We aim to make those tools simple, reliable and accessible
          from any modern web browser.
        </p>
      </div>
    </main>
  );
}