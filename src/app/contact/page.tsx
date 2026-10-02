import { toolConfig } from "@/lib/tool-config";

export const metadata = {
  title: "Contact Us",
  description: `Contact the ${toolConfig.name} team for questions, feedback, or support.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Contact Us</h1>

      <div className="mt-8 space-y-6 leading-7 text-gray-600">
        <p>
          Have a question, suggestion, or found an issue with our tool?
          We would love to hear from you.
        </p>

        <h2 className="text-2xl font-bold text-gray-900">
          Get in Touch
        </h2>

        <p>
          For general questions, feedback, business inquiries, or technical
          issues, please contact us by email.
        </p>

        <div className="rounded-xl border bg-gray-50 p-6">
          <p className="font-semibold text-gray-900">Email</p>

          <a
            href={`mailto:${toolConfig.contactEmail}`}
            className="mt-2 inline-block text-blue-600 hover:underline"
          >
            {toolConfig.contactEmail}
          </a>
        </div>

        <p className="text-sm">
          We aim to respond to legitimate inquiries as soon as reasonably
          possible.
        </p>
      </div>
    </main>
  );
}