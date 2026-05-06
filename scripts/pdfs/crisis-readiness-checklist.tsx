import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import {
  BrandedDocument,
  ChecklistTable,
  SectionHeading,
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
    width: 30,
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
  callout: {
    marginTop: 18,
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
  disclaimer: {
    marginTop: 22,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: colours.border,
    fontSize: 8,
    color: colours.charcoalMid,
    lineHeight: 1.45,
    fontStyle: "italic",
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

const sections: {
  number: number;
  title: string;
  description: string;
  items: string[];
}[] = [
  {
    number: 1,
    title: "Culture and core values",
    description: "The foundation that helps protect your reputation.",
    items: ["All staff are aware of \u2013 and can quote \u2013 your values and mission."],
  },
  {
    number: 2,
    title: "Communication",
    description:
      "Ensure your stakeholders are advocates not adversaries.",
    items: [
      "Your entire staff understand the ramifications of poor communication.",
      "All major communications are vetted and proofed by at least one other person before sending.",
    ],
  },
  {
    number: 3,
    title: "Media",
    description: "You can't hide from the media. Look for opportunities.",
    items: [
      "You have a procedure to manage incoming media enquiries.",
      "All staff have a written copy of your media policy and adhere to it.",
      "Your spokespeople are trained in effective media interviews.",
    ],
  },
  {
    number: 4,
    title: "Social media",
    description: "A two-edged sword that needs to be managed.",
    items: [
      "Access to official social media accounts is limited to appointed, trained staff and a policy is in place.",
      "You have a written social media policy for all staff that covers personal social media use.",
    ],
  },
  {
    number: 5,
    title: "Online reviews",
    description:
      "What others say online is now used by AI in search results.",
    items: [
      "You regularly monitor online reviews and respond, particularly to all negative reviews.",
    ],
  },
  {
    number: 6,
    title: "Emergency management plan",
    description:
      "How you act and communicate through an event will affect your reputation.",
    items: [
      "You have an emergency management plan covering natural disasters, active shooters and other emergency situations, which has been tested and all staff are aware of their roles.",
    ],
  },
  {
    number: 7,
    title: "Crisis communications plan",
    description:
      "Often it's not how you handle a crisis that's the problem \u2013 it's how you communicate.",
    items: [
      "You have an issues and crisis communications plan separate to \u2013 but aligned with \u2013 your emergency plan, that considers all scenarios (beyond emergencies) in which you need to quickly communicate to your key stakeholders or wider through the media.",
      "You have a relationship with an external crisis specialist who you can call upon to provide communications and media support in the midst of a crisis or major issue.",
    ],
  },
  {
    number: 8,
    title: "Complaint and issues escalation",
    description:
      "If you don't resolve an issue, it is likely to end up on social or in the media.",
    items: [
      "You ensure no staff or customer grievance or complaint is ignored or unresolved, and have an escalation procedure to handle unresolved complaints which includes clear timelines.",
      "All staff know the procedure for escalation of complaints and ensure that it is strictly followed.",
    ],
  },
  {
    number: 9,
    title: "Staff policies",
    description:
      "Staff grievances are a major source of issues, and many can be avoided with the right policies.",
    items: [
      "You have written and stated workplace policies around harassment, bullying, health and safety, grievances and others that may lead to staff issues.",
      "You have a written whistleblower policy that protects staff who report misconduct, wrongdoing, or safety concerns through appropriate channels.",
      "All employment contracts for staff include clear codes of conduct, social media policies, and confidentiality obligations that protect your organisation's reputation.",
      "You have a defined investigative process for complaints against a staff member, along with a written standard operating procedure.",
      "Your policy includes ways to deal with staff under investigation, and support complainants who may be victims through the process.",
    ],
  },
  {
    number: 10,
    title: "Board",
    description: "A difficult area for leadership.",
    items: [
      "If applicable, you have a written code of conduct for board members that all directors sign upon appointment.",
      "All board members understand the difference between governance (board role) and management (executive role). A board charter articulates these responsibilities and procedures exist to address board members who cross this boundary.",
    ],
  },
  {
    number: 11,
    title: "Regulatory compliance",
    description: "Proactive compliance that prevents crises.",
    items: [
      "If applicable, you have designated persons responsible for compliance in each area with clear reporting lines, documented in position descriptions.",
    ],
  },
  {
    number: 12,
    title: "Data security",
    description: "Data breaches happen every day \u2013 and they happen to every type of organisation.",
    items: [
      "You have sought independent advice and support to ensure your systems are protected against cyber-attacks to best-practice standards.",
      "You have cyber insurance that covers not only data breaches, but communications.",
    ],
  },
  {
    number: 13,
    title: "Social engineering",
    description: "Any of your staff can be targeted.",
    items: [
      "You have sought independent advice to establish best-practice standards to minimise the risk of your staff being victims of social engineering techniques.",
      "You have strict policies and procedures around requests to change bank account details and other personal details of staff, suppliers and other stakeholders.",
      "You are engaging in ongoing education in this area \u2013 including AI generated fraud \u2013 to ensure you are always vigilant and protected.",
    ],
  },
  {
    number: 14,
    title: "Marketing",
    description: "Great marketing ideas can backfire.",
    items: [
      "Your marketing strategy process always considers possible adverse public relations implications.",
      "You seek outside perspectives before launching public marketing campaigns and messages to ensure any messaging risks are assessed.",
    ],
  },
  {
    number: 15,
    title: "Reception team",
    description: "Your front line PR people.",
    items: [
      "Your reception and anyone who may be the first point of contact with your company are trained on how to manage angry or abusive calls, and to deal with media enquiries in accordance with your media policy.",
    ],
  },
];

const responses = ["YES", "OK", "NO", "N/A"];

export function CrisisReadinessChecklistDocument() {
  return (
    <BrandedDocument
      title="The Essential Crisis Readiness Checklist"
      eyebrow="Free resource"
    >
      <View style={baseStyles.hero}>
        <Text style={baseStyles.eyebrow}>Free CRC PR resource</Text>
        <Text style={baseStyles.title}>
          The Essential Crisis Readiness Checklist
        </Text>
        <Text style={baseStyles.subtitle}>
          From CRC Public Relations \u2013 Australia&rsquo;s leading crisis
          and PR advisory firm. Help future-proof your organisation by
          identifying areas of vulnerability and risk that can lead to
          reputational damage. This is by no means an exhaustive list, but
          it&rsquo;s a great start.
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
              <View style={styles.legendItem}>
                <Text style={styles.legendKey}>N/A</Text>
                <Text style={styles.legendValue}>
                  Doesn&rsquo;t apply to my organisation
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2.</Text>
          <Text style={styles.stepBody}>
            Consider with your team how you can address the areas where you
            answered NO or OK. Remember if these are not addressed, you may
            be more vulnerable to a crisis that can damage your reputation.
          </Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>3.</Text>
          <Text style={styles.stepBody}>
            Crisis preparation and PR support is available through CRC Public
            Relations. Please contact us for assistance in any area of
            vulnerability that involves PR or communications. For areas that
            require advice from experts in other fields, we recommend you
            contact us first to discuss your reputational vulnerabilities so
            you are better informed when speaking to those specialists.
          </Text>
        </View>
      </View>

      <View style={styles.callout} wrap={false}>
        <Text style={styles.calloutTitle}>About the areas of vulnerability listed below</Text>
        <Text style={styles.calloutBody}>
          While many areas of vulnerability can lead to financial loss and
          create other challenges, this checklist is designed specifically to
          identify issues that could lead to a crisis that impacts trust,
          resulting in serious or long-term damage to your reputation. Severe
          reputation loss can be directly linked to major material impact
          including internal and external conflict, loss of focus and time,
          stress and mental health issues, and loss of revenue. While risk
          cannot be eliminated, many issues and crises can be avoided by
          reducing areas of vulnerability. Planning now saves time, stress
          and finances later.
        </Text>
      </View>

      {sections.map((section) => (
        <View key={section.number} wrap={false}>
          <SectionHeading
            number={section.number}
            title={section.title}
            description={section.description}
          />
          <ChecklistTable
            responses={responses}
            items={section.items.map((label, i) => ({
              number: i + 1,
              label,
            }))}
          />
        </View>
      ))}

      <View style={styles.contactCallout} wrap={false}>
        <Text style={styles.contactTitle}>
          Need help with any area of vulnerability?
        </Text>
        <Text style={styles.contactBody}>
          We encourage you to seek advice from appropriate specialists in the
          areas above. If you require assistance with communications, public
          relations or crisis preparedness, please contact CRC Public
          Relations: info@crcpr.com.au or 1300 182 186.
        </Text>
      </View>

      <Text style={styles.disclaimer}>
        Legal disclaimer: This checklist is provided as a general guide only
        and is not intended to constitute legal, regulatory or professional
        advice. While care has been taken in its preparation, CRC Public
        Relations makes no representations or warranties as to its
        completeness, accuracy or suitability for any particular purpose. You
        should seek your own independent legal, regulatory and professional
        advice in relation to your specific circumstances. To the extent
        permitted by law, CRC Public Relations accepts no liability for any
        loss, damage or consequences arising from reliance on, or actions
        taken as a result of, this checklist.
      </Text>
    </BrandedDocument>
  );
}
