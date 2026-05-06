import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import {
  BrandedDocument,
  ChecklistTable,
  baseStyles,
  colours,
} from "./brand";

const styles = StyleSheet.create({
  steps: {
    marginTop: 14,
    marginBottom: 6,
  },
  step: {
    flexDirection: "row",
    marginBottom: 8,
  },
  stepNumber: {
    width: 18,
    color: colours.teal,
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
  },
  stepBody: {
    flex: 1,
    fontSize: 10,
    color: colours.charcoal,
    lineHeight: 1.5,
  },
  legendList: {
    marginTop: 6,
    marginLeft: 22,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
  },
  legendKey: {
    width: 28,
    fontFamily: "Helvetica-Bold",
    color: colours.navy,
    fontSize: 9.5,
  },
  legendValue: {
    flex: 1,
    fontSize: 9.5,
    color: colours.charcoal,
    lineHeight: 1.45,
  },
  contactCallout: {
    marginTop: 22,
    padding: 14,
    backgroundColor: colours.navy,
    borderRadius: 3,
  },
  contactTitle: {
    color: colours.white,
    fontFamily: "Helvetica-Bold",
    fontSize: 11,
    marginBottom: 4,
  },
  contactBody: {
    color: colours.white,
    opacity: 0.85,
    fontSize: 9.5,
    lineHeight: 1.5,
  },
});

const items = [
  "We communicate strategically and regularly with all key stakeholders directly and through social and digital media.",
  "Effective communication is an organisation-wide priority and all employees understand the ramifications of poor communication.",
  "Before our staff communicate in writing, they actively consider the reactions of the reader to avoid unintended negative responses.",
  "We have a proactive media communications strategy that positions us as a trusted public voice for our industry.",
  "We are regularly featured in the media for our expertise and use this coverage across our marketing to emphasise our credibility and authority.",
  "At the core of all communication by our organisations is an intention to build trust.",
  "Our social media accounts serve a strategic purpose that aligns with our objectives, and receive regular, active and positive engagement from stakeholders.",
  "We regularly highlight our positive actions that benefit stakeholders, to build ongoing trust.",
  "When issues arise, we prioritise communications across our channels and platforms so staff and other stakeholders are kept informed.",
  "Before major decisions or changes are announced that affect staff or other stakeholders, we ensure we have developed a comprehensive communication strategy.",
];

export function CorporateCommsChecklistDocument() {
  return (
    <BrandedDocument
      title="10 Point Corporate Communications Checklist"
      eyebrow="Free resource"
    >
      <View style={baseStyles.hero}>
        <Text style={baseStyles.eyebrow}>Free CRC PR resource</Text>
        <Text style={baseStyles.title}>
          The 10 Point Corporate Communications Checklist
        </Text>
        <Text style={baseStyles.subtitle}>
          Is your organisation&rsquo;s communications strategy ready for
          scrutiny? This checklist sets out 10 key areas that, together,
          ensure your communication isn&rsquo;t random, but is strategically
          planned with the aim of building ongoing trust with your
          stakeholders. Applies to companies, non-profits, governments,
          professional services firms, schools and associations.
        </Text>
      </View>

      <Text style={baseStyles.sectionHeading}>Steps to use this checklist</Text>
      <View style={styles.steps}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>1.</Text>
          <View style={styles.stepBody}>
            <Text>Answer each item honestly as:</Text>
            <View style={styles.legendList}>
              <View style={styles.legendItem}>
                <Text style={styles.legendKey}>YES</Text>
                <Text style={styles.legendValue}>
                  Totally complete and functioning
                </Text>
              </View>
              <View style={styles.legendItem}>
                <Text style={styles.legendKey}>OK</Text>
                <Text style={styles.legendValue}>
                  Somewhat but needs improvement
                </Text>
              </View>
              <View style={styles.legendItem}>
                <Text style={styles.legendKey}>NO</Text>
                <Text style={styles.legendValue}>
                  Not at all or not working
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2.</Text>
          <Text style={styles.stepBody}>
            Consider with your team how you can address the areas where you
            answered NO or OK. Remember, if these are not addressed your
            communication strategy will not maximise trust with your
            stakeholders, and you will be more vulnerable to issues that can
            damage your reputation.
          </Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>3.</Text>
          <Text style={styles.stepBody}>
            If you require assistance to create more effective communications
            or media strategy, please contact CRC Public Relations.
          </Text>
        </View>
      </View>

      <Text style={baseStyles.sectionHeading}>The checklist</Text>
      <ChecklistTable
        responses={["YES", "OK", "NO"]}
        items={items.map((label, i) => ({ number: i + 1, label }))}
      />

      <View style={styles.contactCallout} wrap={false}>
        <Text style={styles.contactTitle}>Need help working through this?</Text>
        <Text style={styles.contactBody}>
          CRC Public Relations works directly with CEOs, boards, and
          communications leaders to build communication strategies that build
          trust and protect reputation. Call 1300 182 186 or email
          info@crcpr.com.au to start a confidential conversation.
        </Text>
      </View>
    </BrandedDocument>
  );
}
