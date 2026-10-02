export const toolConfig = {
  name: "Truck Detention Pay Calculator",
  shortName: "Detention Calculator",

  description:
    "Estimate truck detention time and potential detention pay using arrival, appointment, release, free-time and rate details.",

  url: "https://example.com",

  category: "Trucking & Logistics",

  contactEmail: "Rajivsharmabba@gmail.com",

  seo: {
    title: "Truck Detention Pay Calculator - Calculate Detention",
    description:
      "Calculate truck detention time and estimate detention pay using arrival, appointment, release, free time, and hourly detention rate.",
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
      "Use this free truck detention pay calculator to calculate detention time and estimate detention pay for a pickup or delivery. Enter the driver's arrival time, appointment time, release time, free time, and hourly detention rate to determine the billable detention time and estimated amount.",

    howToUse: [
      "Choose when the detention clock should start: driver arrival, appointment time, or the later of the two.",
      "Enter the driver's arrival time and appointment time when required.",
      "Enter the release or departure time when the driver was released from the pickup or delivery facility.",
      "Enter the free-time allowance and hourly detention rate stated in the applicable load or carrier agreement.",
      "Choose the billing increment and rounding method that match the applicable detention terms.",
      "Click Calculate Detention Pay to see total facility time, billable detention, billable hours, and estimated detention pay.",
    ],

    formula:
      "Billable detention time = Total facility time − Free time. Estimated detention pay = Billable detention hours × Detention rate.",

    example:
      "Example: if a driver spends 5 hours 30 minutes at a facility and the agreed free time is 2 hours, the billable detention is 3 hours 30 minutes. At a detention rate of $50 per hour, the estimated detention pay is $175.",

    benefits: [
      "Estimate truck detention pay quickly",
      "Calculate billable detention time",
      "Use arrival and appointment timing",
      "Apply custom free-time allowances",
      "Calculate detention using hourly rates",
      "Support 15, 30, and 60-minute billing increments",
      "Choose rounding rules based on load terms",
      "Works on desktop and mobile devices",
    ],
  },

  features: [
    "Free online detention calculator",
    "Arrival and appointment timing options",
    "Custom free-time allowance",
    "Custom hourly detention rate",
    "15, 30 and 60-minute billing increments",
    "Round up, round down or use exact time",
    "Overnight detention calculation",
    "Copyable detention calculation results",
    "Mobile-friendly design",
  ],

  about: {
    title: "About Truck Detention Pay Calculator",
    description:
      "This free truck detention pay calculator helps carriers, owner-operators, dispatchers, freight brokers and logistics professionals estimate detention time and potential detention pay at pickup and delivery facilities. Enter the applicable timing, free-time allowance and hourly detention rate to calculate billable detention based on the terms of your load or carrier agreement.",
  },

  faqs: [
    {
      question: "What is truck detention?",
      answer:
        "Truck detention is the time a driver spends waiting at a pickup or delivery facility beyond the applicable free-time period. Detention terms can vary by broker, carrier, facility, load and rate confirmation.",
    },
    {
      question: "How is truck detention pay calculated?",
      answer:
        "A common calculation is billable detention hours multiplied by the agreed hourly detention rate. Billable detention is generally the total facility time minus the applicable free-time allowance, subject to the terms of the load or carrier agreement.",
    },
    {
      question: "When does the detention clock start?",
      answer:
        "The detention start time depends on the applicable load terms. This calculator lets you use the driver's arrival time, appointment time, or the later of arrival and appointment time.",
    },
    {
      question: "What is free time in truck detention?",
      answer:
        "Free time is the amount of time allowed at a pickup or delivery facility before detention may become billable. Enter the free-time allowance stated in your rate confirmation or other applicable load terms.",
    },
    {
      question: "What detention rate should I use?",
      answer:
        "Enter the hourly detention rate stated in the applicable rate confirmation, broker agreement, carrier agreement or other load terms. There is no single universal detention rate.",
    },
    {
      question: "What does rounding mean in detention billing?",
      answer:
        "Rounding adjusts billable detention to the selected billing increment. For example, 3 hours 25 minutes rounded down to a 30-minute increment becomes 3 hours, while rounding up becomes 3 hours 30 minutes. Use the rule specified by the applicable load terms.",
    },
    {
      question: "Can I calculate overnight detention?",
      answer:
        "Yes. If the release time is earlier than the detention start time, the calculator treats the release as occurring on the following day. Multi-day detention should be checked against the applicable load terms.",
    },
    {
      question: "Can I use this calculator for pickup and delivery detention?",
      answer:
        "Yes. You can use it for either pickup or delivery detention as long as you enter the applicable arrival, appointment, release, free-time and detention-rate information.",
    },
  ],
};