interface RegionPanel {
  id: "micronesia" | "melanesia" | "polynesia";
  label: string;
  description: string;
  nations: string[];
  accent: string;
  accentSoft: string;
}

const REGIONS: RegionPanel[] = [
  {
    id: "micronesia",
    label: "Micronesia",
    description:
      "North-western Pacific, spanning small island nations across vast ocean distances.",
    nations: [
      "Palau",
      "Federated States of Micronesia",
      "Republic of Marshall Islands",
      "Nauru",
      "Kiribati",
    ],
    accent: "#C9A961",
    accentSoft: "rgba(201, 169, 97, 0.12)",
  },
  {
    id: "melanesia",
    label: "Melanesia",
    description:
      "South-western Pacific, home to the largest Pacific Island populations and economies.",
    nations: [
      "Papua New Guinea",
      "Solomon Islands",
      "Vanuatu",
      "New Caledonia",
      "Fiji",
    ],
    accent: "#1A2B4A",
    accentSoft: "rgba(26, 43, 74, 0.08)",
  },
  {
    id: "polynesia",
    label: "Polynesia",
    description:
      "Central and eastern Pacific, including the most widely dispersed island groups in the region.",
    nations: [
      "Tuvalu",
      "Samoa",
      "Tonga",
      "Niue",
      "Cook Islands",
      "French Polynesia",
    ],
    accent: "#2D6A6F",
    accentSoft: "rgba(45, 106, 111, 0.12)",
  },
];

const REGIONAL_ANCHOR = {
  label: "Regional anchor",
  nation: "New Zealand",
  description:
    "A regional partner that shapes Pacific media, policy, and diaspora communications.",
};

export function PacificFootprintMap() {
  return (
    <figure
      className="w-full"
      aria-label="CRC Public Relations footprint across Pacific Island regions"
    >
      <div className="rounded-lg border border-brand-border bg-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-brand-border">
          {REGIONS.map((region) => (
            <div key={region.id} className="p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <p
                  className="font-sans font-semibold text-xs tracking-[0.18em] uppercase"
                  style={{ color: region.accent }}
                >
                  {region.label}
                </p>
                <p
                  className="font-heading font-black text-2xl leading-none"
                  style={{ color: region.accent }}
                >
                  {region.nations.length}
                </p>
              </div>

              <div
                className="mt-4 h-[3px] rounded-full"
                style={{ backgroundColor: region.accent, opacity: 0.6 }}
                aria-hidden
              />

              <p className="text-charcoal-mid text-sm leading-relaxed mt-4">
                {region.description}
              </p>

              <ul className="mt-5 space-y-2">
                {region.nations.map((nation) => (
                  <li
                    key={nation}
                    className="flex items-start gap-2 text-navy text-sm font-sans"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: region.accent }}
                      aria-hidden
                    />
                    <span>{nation}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="border-t border-brand-border px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ backgroundColor: "rgba(26, 43, 74, 0.03)" }}
        >
          <div className="flex items-center gap-3">
            <span
              className="inline-flex items-center justify-center rounded-full text-[11px] font-sans font-semibold tracking-[0.16em] uppercase px-3 py-1"
              style={{
                color: "#1A2B4A",
                backgroundColor: "rgba(26, 43, 74, 0.08)",
              }}
            >
              {REGIONAL_ANCHOR.label}
            </span>
            <p className="font-heading font-black text-navy text-base">
              {REGIONAL_ANCHOR.nation}
            </p>
          </div>
          <p className="text-charcoal-mid text-sm leading-relaxed sm:max-w-md">
            {REGIONAL_ANCHOR.description}
          </p>
        </div>
      </div>
    </figure>
  );
}
