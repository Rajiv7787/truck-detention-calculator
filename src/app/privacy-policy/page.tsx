export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for ToolName.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Privacy Policy</h1>

      <div className="mt-8 space-y-8 leading-7 text-gray-600">
        <p>
          Your privacy is important to us. This Privacy Policy explains how
          ToolName handles information when you use our website and online
          tools.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Information We Collect
          </h2>

          <p className="mt-3">
            We do not intentionally collect personal information unless you
            choose to provide it, such as when contacting us by email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            How Our Tools Work
          </h2>

          <p className="mt-3">
            Some tools may process files or information directly in your
            browser. When processing happens locally, your files do not need
            to be uploaded to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Cookies
          </h2>

          <p className="mt-3">
            We may use cookies or similar technologies for website
            functionality, analytics, advertising, and improving the user
            experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Advertising
          </h2>

          <p className="mt-3">
            We may display advertisements from third-party advertising
            providers. These providers may use cookies or similar technologies
            to provide and measure advertisements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Third-Party Services
          </h2>

          <p className="mt-3">
            Our website may use third-party services such as analytics,
            advertising, hosting, or other services necessary to operate and
            improve the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Changes to This Policy
          </h2>

          <p className="mt-3">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Contact
          </h2>

          <p className="mt-3">
            If you have questions about this Privacy Policy, please contact us
            through our Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}