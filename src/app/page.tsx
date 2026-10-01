import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolLayout from "@/components/ToolLayout";
import FAQ from "@/components/FAQ";
import DetentionCalculator from "@/components/DetentionCalculator";
import StructuredData from "@/components/StructuredData";
import { toolConfig } from "@/lib/tool-config";

export default function Home() {
  return (
    <>
      <StructuredData />

      <Header />

      <ToolLayout
        toolName={toolConfig.name}
        description={toolConfig.description}
      >
        <div
          id="tool"
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                {toolConfig.tool.name}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {toolConfig.tool.description}
              </p>
            </div>

            <span className="hidden rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 sm:block">
              Free
            </span>
          </div>

          <DetentionCalculator />
        </div>
      </ToolLayout>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900">
            {toolConfig.name}
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            {toolConfig.content.intro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              How to Use
            </h3>

            <ol className="mt-5 space-y-4">
              {toolConfig.content.howToUse.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-bold text-blue-600">
                    {index + 1}
                  </span>

                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="text-lg font-bold text-slate-900">
              How Detention Pay Is Calculated
            </h3>

            <div className="mt-5 rounded-xl bg-slate-50 p-4">
              <code className="text-sm font-semibold text-slate-700">
                {toolConfig.content.formula}
              </code>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-600">
              {toolConfig.content.example}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Why Use This Tool?
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {toolConfig.content.benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
              >
                <span className="text-blue-600">✓</span>

                <span className="text-sm font-medium text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-4xl px-6 pb-16"
      >
        <h2 className="text-2xl font-bold text-slate-900">
          {toolConfig.about.title}
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          {toolConfig.about.description}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {toolConfig.features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-sm text-blue-600">
                  ✓
                </span>

                <span className="text-sm font-semibold text-slate-800">
                  {feature}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-4xl px-6 pb-16"
      >
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <FAQ items={toolConfig.faqs} />
      </section>

      <Footer />
    </>
  );
}