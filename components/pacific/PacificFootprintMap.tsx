interface RegionPanel {
  id: "micronesia" | "melanesia" | "polynesia";
  label: string;
  description: string;
  nations: string[];
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
  },
];

const REGIONAL_ANCHOR = {
  label: "Regional anchor",
  nation: "New Zealand",
  description:
    "A regional partner that shapes Pacific media, policy, and diaspora communications.",
};

/** Chambers footprint: three hairline columns by region, then the regional anchor row. */
export function PacificFootprintMap() {
  return (
    <figure
      className="w-full"
      aria-label="CRC Public Relations footprint across Pacific Island regions"
    >
      <div className="kit-r overflow-hidden border border-line bg-[var(--bg)]">
        <div className="grid grid-cols-1 divide-y divide-[var(--line)] md:grid-cols-3 md:divide-x md:divide-y-0">
          {REGIONS.map((region) => (
            <div key={region.id} className="p-6 md:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {region.label}
                </p>
                <p className="kit-display text-4xl leading-none text-accent">
                  {region.nations.length}
                </p>
              </div>

              <div
                className="mt-4 h-[3px] w-full bg-[var(--k-blue)]"
                aria-hidden
              />

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {region.description}
              </p>

              <ul className="mt-5 divide-y divide-[var(--line)] border-y border-line">
                {region.nations.map((nation) => (
                  <li key={nation} className="py-2.5 text-sm font-semibold">
                    {nation}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-line px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              {REGIONAL_ANCHOR.label}
            </span>
            <p className="kit-display text-lg uppercase">
              {REGIONAL_ANCHOR.nation}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted sm:max-w-md">
            {REGIONAL_ANCHOR.description}
          </p>
        </div>
      </div>
    </figure>
  );
}
