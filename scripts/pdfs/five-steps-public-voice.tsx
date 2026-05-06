import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { BrandedDocument, baseStyles, colours } from "./brand";

const styles = StyleSheet.create({
  step: {
    marginTop: 16,
    flexDirection: "row",
    gap: 14,
  },
  stepNumber: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colours.gold,
    color: colours.navy,
    fontFamily: "Helvetica-Bold",
    fontSize: 15,
    textAlign: "center",
    paddingTop: 8,
  },
  stepBody: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 12,
    color: colours.navy,
    fontFamily: "Helvetica-Bold",
    marginBottom: 6,
  },
  stepParagraph: {
    fontSize: 10,
    color: colours.charcoal,
    lineHeight: 1.55,
    marginBottom: 6,
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

const steps: { title: string; body: string[] }[] = [
  {
    title:
      "Understand the difference between PR / media coverage and marketing",
    body: [
      "Don't expect free marketing or advertising. What you have to say or what you are doing must be newsworthy, because it's the news. Have a realistic expectation of the story and the way you'll be portrayed, and present your pitch to the journalist as 'public interest'.",
      "If you want to promote a new product, service or expansion, make sure it has news value. A new product may meet a community need, be a technological breakthrough, or help the environment. All of these have public interest value when presented the right way.",
    ],
  },
  {
    title: "Consider your authority to speak about a subject",
    body: [
      "Most news stories carry comments from a variety of different people because the journalist wants to present a story from several angles and give the reader, listener or viewer a complete picture.",
      "Journalists often aren't experts on the subjects they are covering, so they look for people who are. Be willing to share your knowledge and advice about your area of expertise. When you are included in a story, it doesn't just provide credibility with clients and potential clients, it gives you great content for your marketing and social media.",
    ],
  },
  {
    title: "Ask 'What value can I add to a current story or commentary?'",
    body: [
      "When a story breaks, there are almost always many follow-up stories, each with different themes and featuring different people. Media outlets want to keep covering the issue because there is high public interest, but they need different angles.",
      "When you see something covered in the media that relates to your area of expertise or your business, ask yourself if there is anything of interest you can add. Don't undervalue yourself or your potential input. Your knowledge or opinion could be exactly what is needed.",
    ],
  },
  {
    title: "Monitor the media for stories that relate to your expertise",
    body: [
      "Anyone can keep an eye on what media stories are appearing across digital media (and most stories are online) by creating a Google Alert with the key words you want. It's free, and easy to set up.",
      "This way you can find out what is being said about your industry and react quickly, applying the steps above.",
    ],
  },
  {
    title: "Contact the journalist or media outlet",
    body: [
      "You are now aware that you possess specific knowledge and expertise, or you have a product or perspective that could be of public interest. But how do you let the journalist know?",
      "You may not know how to write a media release, but you can send a brief email (a thesis won't be read) or message them via social media. Introduce yourself and make a 'pitch' \u2013 tell them what you have to say and how it adds to the story or is of news interest. Most stories include the name of the journalist; if contact details aren't published, look them up on social media or call the outlet to ask.",
      "Don't be shy and don't worry if they aren't interested. Not every pitch will work but if you keep trying you will get a breakthrough. Good luck.",
    ],
  },
];

export function FiveStepsPublicVoiceDocument() {
  return (
    <BrandedDocument
      title="5 Steps to Becoming a Trusted Public Voice"
      eyebrow="Free resource"
    >
      <View style={baseStyles.hero}>
        <Text style={baseStyles.eyebrow}>Free CRC PR resource</Text>
        <Text style={baseStyles.title}>
          5 Steps to Becoming a Trusted Public Voice
        </Text>
        <Text style={baseStyles.subtitle}>
          Are you ready to raise your public profile and be the trusted voice
          of authority for your area of expertise? We live in an age of 24/7
          news, where journalists and media outlets need newsworthy content
          continually. The good news is that you can be a source of this
          content, and unlike advertising, media exposure is free. You may
          not have the expertise of a PR firm, but if you understand a few
          principles and follow these five steps, you can make a great start.
        </Text>
      </View>

      {steps.map((step, idx) => (
        <View key={step.title} style={styles.step} wrap={false}>
          <Text style={styles.stepNumber}>{idx + 1}</Text>
          <View style={styles.stepBody}>
            <Text style={styles.stepTitle}>{step.title}</Text>
            {step.body.map((para, pIdx) => (
              <Text key={pIdx} style={styles.stepParagraph}>
                {para}
              </Text>
            ))}
          </View>
        </View>
      ))}

      <View style={styles.contactCallout} wrap={false}>
        <Text style={styles.contactTitle}>
          Want to drive new clients and staff through credibility?
        </Text>
        <Text style={styles.contactBody}>
          CRC Public Relations builds media strategies that position leaders
          as the trusted voice for their sector. Applies to companies,
          non-profits, governments, professional services firms, schools and
          associations. Call 1300 182 186 or email info@crcpr.com.au.
        </Text>
      </View>
    </BrandedDocument>
  );
}
