import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import path from "node:path";

export const colours = {
  navy: "#0A1628",
  navyMid: "#15233D",
  charcoal: "#22324A",
  charcoalMid: "#5A6779",
  border: "#D8DCE3",
  offWhite: "#F4F5F7",
  warmWhite: "#FAFAF7",
  teal: "#1F7A8C",
  linkTeal: "#155E6E",
  gold: "#C9A961",
  goldLight: "#E8DDC0",
  red: "#C5404C",
  amber: "#D69E2E",
  emerald: "#2F855A",
  white: "#FFFFFF",
};

const repoRoot = process.cwd();
export const logoPath = path.join(repoRoot, "public", "images", "crc-logo.png");

export const baseStyles = StyleSheet.create({
  page: {
    paddingTop: 48,
    paddingBottom: 64,
    paddingHorizontal: 48,
    fontFamily: "Helvetica",
    fontSize: 10,
    color: colours.charcoal,
    backgroundColor: colours.white,
  },
  headerBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colours.border,
    paddingBottom: 12,
    marginBottom: 24,
  },
  headerLogo: {
    height: 28,
    objectFit: "contain",
  },
  headerEyebrow: {
    fontSize: 8,
    color: colours.teal,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    fontFamily: "Helvetica-Bold",
  },
  footer: {
    position: "absolute",
    bottom: 24,
    left: 48,
    right: 48,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colours.border,
    paddingTop: 10,
    fontSize: 8,
    color: colours.charcoalMid,
  },
  footerBrand: {
    color: colours.navy,
    fontFamily: "Helvetica-Bold",
  },
  hero: {
    marginBottom: 18,
  },
  eyebrow: {
    fontSize: 9,
    color: colours.teal,
    letterSpacing: 1.4,
    textTransform: "uppercase",
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  title: {
    fontSize: 24,
    color: colours.navy,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.15,
  },
  subtitle: {
    marginTop: 10,
    fontSize: 11,
    color: colours.charcoalMid,
    lineHeight: 1.5,
  },
  paragraph: {
    fontSize: 10,
    color: colours.charcoal,
    lineHeight: 1.55,
    marginBottom: 8,
  },
  sectionHeading: {
    fontSize: 12,
    color: colours.navy,
    fontFamily: "Helvetica-Bold",
    marginTop: 18,
    marginBottom: 6,
  },
  sectionSubheading: {
    fontSize: 9,
    color: colours.charcoalMid,
    fontStyle: "italic",
    marginBottom: 10,
  },
  callout: {
    marginTop: 14,
    padding: 14,
    backgroundColor: colours.offWhite,
    borderLeftWidth: 3,
    borderLeftColor: colours.gold,
    borderRadius: 2,
  },
  calloutTitle: {
    fontSize: 10,
    color: colours.navy,
    fontFamily: "Helvetica-Bold",
    marginBottom: 4,
  },
  calloutBody: {
    fontSize: 9.5,
    color: colours.charcoal,
    lineHeight: 1.5,
  },
});

export interface PageShellProps {
  children: React.ReactNode;
  eyebrow?: string;
}

export function PageShell({ children, eyebrow }: PageShellProps) {
  return (
    <Page size="A4" style={baseStyles.page} wrap>
      <View style={baseStyles.headerBar} fixed>
        <Image src={logoPath} style={baseStyles.headerLogo} />
        {eyebrow ? (
          <Text style={baseStyles.headerEyebrow}>{eyebrow}</Text>
        ) : null}
      </View>

      {children}

      <View style={baseStyles.footer} fixed>
        <Text>
          <Text style={baseStyles.footerBrand}>CRC Public Relations</Text>
          {"  |  info@crcpr.com.au  |  1300 182 186  |  crcpr.com.au"}
        </Text>
        <Text
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </View>
    </Page>
  );
}

export interface BrandedDocumentProps {
  title: string;
  children: React.ReactNode;
  eyebrow?: string;
}

export function BrandedDocument({
  title,
  children,
  eyebrow,
}: BrandedDocumentProps) {
  return (
    <Document
      title={title}
      author="CRC Public Relations"
      creator="CRC Public Relations"
      producer="CRC Public Relations"
    >
      <PageShell eyebrow={eyebrow}>{children}</PageShell>
    </Document>
  );
}

const checklistStyles = StyleSheet.create({
  table: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: colours.border,
    borderRadius: 3,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: colours.navy,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  headerCellLabel: {
    flex: 1,
    fontSize: 9,
    color: colours.white,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  headerCellResponse: {
    width: 30,
    fontSize: 8,
    color: colours.white,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderTopColor: colours.border,
    alignItems: "flex-start",
  },
  rowAlt: {
    backgroundColor: colours.offWhite,
  },
  rowNumber: {
    width: 18,
    fontSize: 9.5,
    color: colours.teal,
    fontFamily: "Helvetica-Bold",
  },
  rowLabel: {
    flex: 1,
    fontSize: 9.5,
    color: colours.charcoal,
    lineHeight: 1.45,
    paddingRight: 8,
  },
  responseCell: {
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  responseBox: {
    width: 14,
    height: 14,
    borderWidth: 1,
    borderColor: colours.charcoalMid,
    borderRadius: 2,
  },
  sectionHeading: {
    fontSize: 11.5,
    color: colours.white,
    backgroundColor: colours.navyMid,
    fontFamily: "Helvetica-Bold",
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginTop: 18,
  },
  sectionDescription: {
    fontSize: 9,
    color: colours.charcoalMid,
    fontStyle: "italic",
    marginTop: 6,
    marginBottom: 4,
  },
});

export interface ChecklistTableProps {
  responses: string[];
  items: { number: number | string; label: string }[];
}

export function ChecklistTable({ responses, items }: ChecklistTableProps) {
  return (
    <View style={checklistStyles.table}>
      <View style={checklistStyles.headerRow}>
        <Text style={checklistStyles.headerCellLabel}>Item</Text>
        {responses.map((label) => (
          <Text key={label} style={checklistStyles.headerCellResponse}>
            {label}
          </Text>
        ))}
      </View>
      {items.map((item, idx) => (
        <View
          key={`${item.number}-${idx}`}
          style={[
            checklistStyles.row,
            idx % 2 === 1 ? checklistStyles.rowAlt : {},
          ]}
        >
          <Text style={checklistStyles.rowNumber}>{item.number}</Text>
          <Text style={checklistStyles.rowLabel}>{item.label}</Text>
          {responses.map((label) => (
            <View key={label} style={checklistStyles.responseCell}>
              <View style={checklistStyles.responseBox} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

export const checklistRowStyles = checklistStyles;

export interface SectionHeadingProps {
  number: number | string;
  title: string;
  description?: string;
}

export function SectionHeading({
  number,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <View>
      <Text style={checklistStyles.sectionHeading}>
        {number}. {title}
      </Text>
      {description ? (
        <Text style={checklistStyles.sectionDescription}>{description}</Text>
      ) : null}
    </View>
  );
}
