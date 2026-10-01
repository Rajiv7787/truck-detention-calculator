export const toolConfig = {
  name: "Truck Detention Pay Calculator",
  shortName: "Detention Calculator",

  description:
    "Estimate truck detention time and potential detention pay using arrival, appointment, release, free-time and rate details.",

  url: "https://example.com",

  category: "Trucking & Logistics",

  contactEmail: "hello@example.com",

  seo: {
    title: "Truck Detention Pay Calculator - Free Detention Calculator",
    description:
      "Calculate truck detention time and estimate detention pay using arrival, appointment, release, free time and hourly detention rate.",
    keywords: [
      "truck detention calculator",
      "detention pay calculator",
      "truck detention pay calculator",
      "detention time calculator",
      "trucking detention calculator",
      "carrier detention calculator",
      "freight detention calculator",
    ],
  },

  tool: {
    name: "Truck Detention Pay Calculator",
    description:
      "Calculate billable detention time and estimate detention pay from your facility timing and load terms.",
    buttonText: "Calculate Detention Pay",
  },

  content: {
    intro:
      "Use this free truck detention pay calculator to estimate billable detention time and potential detention pay. Enter the driver's arrival time, appointment time, release time, free time and detention rate to calculate the result.",

    howToUse: [
      "Select how the detention clock should start: arrival, appointment, or the later of the two.",
      "Enter the driver's arrival time and appointment time when applicable.",
      "Enter the release or departure time from the facility.",
      "Enter the free time and detention rate specified by your load or carrier agreement.",
      "Choose the billing increment and rounding method.",
      "Click Calculate Detention Pay to see the estimated billable detention and pay.",
    ],

    formula:
      "Estimated detention pay = Billable detention hours × Detention rate",

    example:
      "Example: if 3.5 hours are billable and the agreed detention rate is $50 per hour, the estimated detention pay is $175.",

    benefits: [
      "Estimate detention pay quickly",
      "Calculate billable detention time",
      "Compare different detention rates",
      "Useful for carriers and dispatchers",
      "Works directly in your browser",
      "No installation required",
    ],
  },

  features: [
    "Free to use",
    "Arrival and appointment timing",
    "Custom free-time allowance",
    "Custom detention rate",
    "15, 30 and 60-minute billing increments",
    "Multiple rounding options",
    "Mobile friendly",
  ],

  about: {
    title: "About Truck Detention Pay Calculator",
    description:
      "This truck detention pay calculator helps carriers, owner-operators, dispatchers and logistics professionals estimate facility detention time and potential detention pay from the timing and rate information they provide.",
  },

  faqs: [
    {
      question: "What is truck detention?",
      answer:
        "Truck detention generally refers to time a driver spends waiting at a pickup or delivery facility beyond the applicable free-time period. The actual terms can vary by load, broker, carrier agreement and facility.",
    },
    {
      question: "How is detention pay calculated?",
      answer:
        "A common calculation is billable detention hours multiplied by the applicable detention rate. Your actual agreement may use different rules for when the clock starts, free time, rounding or billing increments.",
    },
    {
      question: "What should I use as the detention start time?",
      answer:
        "This calculator lets you choose arrival time, appointment time, or the later of arrival and appointment. Use the option that matches the terms applicable to your load.",
    },
    {
      question: "What is free time in detention?",
      answer:
        "Free time is the amount of time allowed at a facility before detention may become billable. Enter the free-time allowance specified by the applicable load or carrier terms.",
    },
    {
      question: "What detention rate should I enter?",
      answer:
        "Enter the hourly detention rate stated in the applicable rate confirmation, broker agreement or other load terms. Do not assume a universal detention rate.",
    },
    {
  question: "Can I use this calculator for overnight detention?",
  answer:
    "Yes. The calculator can handle an overnight period when the release time is earlier than the detention start time, treating the release as occurring on the following day. Multi-day detention should be verified against the applicable load terms.",
},
  ],
};