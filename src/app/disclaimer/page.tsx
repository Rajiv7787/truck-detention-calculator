export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for ToolName.",
};

export default function DisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold">Disclaimer</h1>

      <div className="mt-8 space-y-8 leading-7 text-gray-600">
        <p>
          The information and tools provided on ToolName are intended for
          general informational and practical purposes only.
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            No Professional Advice
          </h2>

          <p className="mt-3">
            The results provided by our tools should not be considered
            professional, financial, legal, medical, tax, or other specialized
            advice. Where appropriate, consult a qualified professional.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Accuracy
          </h2>

          <p className="mt-3">
            We make reasonable efforts to keep our tools and information
            useful and accurate. However, we do not guarantee that results will
            always be error-free, complete, or suitable for your specific
            situation.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            External Links
          </h2>

          <p className="mt-3">
            Our website may contain links to third-party websites. We are not
            responsible for the content, availability, privacy practices, or
            policies of external websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Advertising
          </h2>

          <p className="mt-3">
            This website may display advertisements from third-party
            advertising providers. The presence of an advertisement does not
            necessarily constitute an endorsement of the advertised product or
            service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Use at Your Own Risk
          </h2>

          <p className="mt-3">
            You use the website and its tools at your own discretion and risk.
            Always verify important results independently before making
            decisions based on them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900">
            Contact
          </h2>

          <p className="mt-3">
            If you have questions about this disclaimer, please contact us
            through our Contact page.
          </p>
        </section>
      </div>
    </main>
  );
}