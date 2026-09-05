import type { LegalSection } from './legal-types';

export const termsSections: LegalSection[] = [
  { id: 's1', h: '1. Important Wellness Disclaimer', blocks: [
    { p: 'U;Good? is a social wellness and relationship engagement platform intended to encourage meaningful interpersonal connection and wellness check-ins.' },
    { p: 'U;Good?:', items: ['is not a healthcare provider;', 'is not a mental health provider;', 'is not a crisis-response service;', 'does not provide medical advice, diagnosis, or treatment;', 'does not monitor users continuously or in real-time;', 'and is not a substitute for professional medical care, therapy, counseling, or emergency services.'] },
    { p: 'If you believe you or another person may be in immediate danger, experiencing a medical emergency, suicidal, or in crisis, call 911, contact local emergency services, or contact the 988 Suicide & Crisis Lifeline immediately.' },
    { p: 'U;Good? does not guarantee that:', items: ['any user will respond to a Check-In;', 'any Circle member will provide support;', 'any wellness issue will be detected, escalated, or resolved.'] },
  ] },
  { id: 's2', h: '2. Eligibility', blocks: [
    { p: 'You may use the Services only if:', items: ['you are at least thirteen (13) years old;', 'you have the legal capacity to enter into these Terms;', 'your use complies with all applicable laws.'] },
    { p: 'If you are between 13 and 17 years old, you represent that your parent or legal guardian has reviewed and agreed to these Terms.' },
    { p: 'We may restrict certain features based on age or jurisdiction.' },
  ] },
  { id: 's3', h: '3. Accounts', blocks: [
    { p: 'You must create an account to use certain Services.' },
    { p: 'You agree to:', items: ['provide accurate and current information;', 'maintain the confidentiality of your credentials;', 'and accept responsibility for activities occurring under your account.'] },
    { p: 'You may not:', items: ['impersonate another person;', 'create fraudulent accounts;', 'use automated account creation tools;', 'or transfer your account without our consent.'] },
    { p: 'We reserve the right to suspend or terminate accounts that violate these Terms.' },
  ] },
  { id: 's4', h: '4. Invite-Only Access', blocks: [
    { p: 'At launch, access to the Services may be limited to invited users. Users may receive a limited number of invitations to share with others.' },
    { p: 'You agree not to:', items: ['sell invitations;', 'spam invitation links;', 'artificially manipulate growth metrics;', 'create fake referral accounts;', 'or use automated systems to distribute invitations.'] },
    { p: 'We reserve the right to:', items: ['revoke invitations;', 'limit referral access;', 'suspend referral privileges;', 'or terminate accounts engaging in abuse.'] },
    { p: 'At a future date, we may remove invite-only restrictions.' },
  ] },
  { id: 's5', h: '5. Circles and Spaces', blocks: [
    { h3: 'Circles', p: 'Your "Circle" consists of users connected to you through invitations, accepted relationships, or platform interactions.' },
    { h3: 'Spaces', p: '"Spaces" are private organizational categories created by users to manage relationships and interactions. Examples may include:', items: ['Family,', 'Gym Crew,', 'Church Group,', 'Run Club,', 'Classmates,', 'Coworkers,', 'or similar groupings.'] },
    { p: 'Users acknowledge and agree that:', items: ['other users may categorize them into private Spaces,', 'spaces are generally visible only to the user who created them,', 'users may not know how they are categorized by others,', 'and Spaces are intended solely as personal organizational tools.'] },
    { p: 'Users may not use Spaces for:', items: ['harassment,', 'discrimination,', 'stalking,', 'profiling,', 'exploitation,', 'or unlawful targeting.'] },
  ] },
  { id: 's6', h: '6. Check-Ins', blocks: [
    { p: 'The Services allow users to:', items: ['send wellness check-ins;', 'communicate emotional status indicators;', 'engage in wellness interactions;', 'and respond through engagement tools and third-party integrations.'] },
    { p: 'We may impose limits on:', items: ['frequency of check-ins;', 'number of daily interactions;', 'invitations;', 'or messaging activity.'] },
    { p: 'You understand that:', items: ['emotional status indicators are self-reported;', 'U;Good? does not verify the accuracy of user check-ins;', 'and reliance on user-submitted wellness information is at your own risk.'] },
  ] },
  { id: 's7', h: '7. Third-Party Services', blocks: [
    { p: 'The Services may integrate with third-party providers, including:', items: ['food delivery platforms;', 'payment processors;', 'communication vendors;', 'analytics services;', 'cloud hosting providers;', 'and social or mapping services.'] },
    { p: 'These providers may include DoorDash, Grubhub, Stripe, and other third-party vendors. Your use of third-party services may be governed by separate terms and privacy policies.' },
    { p: 'Poundo, Inc. is not responsible for:', items: ['third-party outages;', 'delivery failures;', 'transaction disputes;', 'or third-party conduct.'] },
  ] },
  { id: 's8', h: '8. User Content', blocks: [
    { p: 'Users may submit:', items: ['profile information,', 'messages,', 'photos,', 'comments,', 'check-ins,', 'and other content ("User Content").'] },
    { p: 'You retain ownership of your User Content. However, by submitting User Content, you grant Poundo, Inc. a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to host, use, display, reproduce, modify, distribute, and operate such content solely for purposes of providing and improving the Services.' },
    { p: 'You represent that:', items: ['you own or have rights to your content;', 'and your content does not violate applicable law or third-party rights.'] },
  ] },
  { id: 's9', h: '9. Prohibited Conduct', blocks: [
    { p: 'You agree not to:', items: ['harass or threaten others;', 'engage in hate speech or discrimination;', 'impersonate another person;', 'exploit vulnerable individuals;', 'encourage self-harm;', 'stalk or surveil users;', 'scrape or harvest data;', 'reverse engineer the platform;', 'distribute malware;', 'use bots or automation;', 'or violate applicable law.'] },
    { p: 'We reserve the right to investigate and remove content or accounts violating these Terms.' },
  ] },
  { id: 's10', h: '10. Content Moderation', blocks: [
    { p: 'We may:', items: ['review reports;', 'remove content;', 'restrict features;', 'suspend users;', 'or terminate accounts.'] },
    { p: 'We may also cooperate with law enforcement, regulators, or legal process where required. We are not obligated to monitor all content or interactions.' },
  ] },
  { id: 's11', h: '11. Privacy', blocks: [
    { p: 'Your use of the Services is governed by our Privacy Policy. By using the Services, you consent to the collection, use, and disclosure of information as described therein.', privacyLink: true },
  ] },
  { id: 's12', h: '12. Intellectual Property', blocks: [
    { p: 'All platform technology, software, trademarks, branding, designs, and related intellectual property are owned by Poundo, Inc. or its licensors.' },
    { p: 'You may not:', items: ['copy,', 'distribute,', 'modify,', 'reverse engineer,', 'or commercially exploit the Services without authorization.'] },
    { p: '"U;Good?" and associated branding are protected intellectual property.' },
  ] },
  { id: 's13', h: '13. Termination', blocks: [
    { p: 'You may stop using the Services at any time.' },
    { p: 'We may suspend or terminate your access if:', items: ['you violate these Terms;', 'create safety risks;', 'engage in fraud or abuse;', 'or create legal or reputational risk.'] },
    { p: 'Termination may occur without prior notice.' },
  ] },
  { id: 's14', h: '14. Disclaimer of Warranties', blocks: [
    { p: 'THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE."' },
    { p: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, POUNDO, INC. DISCLAIMS ALL WARRANTIES, INCLUDING:', items: ['MERCHANTABILITY,', 'FITNESS FOR A PARTICULAR PURPOSE,', 'NON-INFRINGEMENT,', 'ACCURACY,', 'RELIABILITY,', 'AND AVAILABILITY.'] },
    { p: 'WE DO NOT GUARANTEE:', items: ['uninterrupted operation;', 'wellness outcomes;', 'emotional support responses;', 'or error-free functionality.'] },
  ] },
  { id: 's15', h: '15. Limitation of Liability', blocks: [
    { p: 'TO THE MAXIMUM EXTENT PERMITTED BY LAW, POUNDO, INC. SHALL NOT BE LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING:', items: ['emotional distress,', 'personal injury,', 'loss of data,', 'loss of relationships,', 'lost profits,', 'reputational harm,', 'or third-party conduct.'] },
    { p: 'OUR TOTAL LIABILITY SHALL NOT EXCEED THE GREATER OF ONE HUNDRED DOLLARS ($100), OR THE AMOUNT YOU PAID TO US IN THE PRECEDING TWELVE MONTHS.' },
  ] },
  { id: 's16', h: '16. Indemnification', blocks: [
    { p: 'You agree to indemnify and hold harmless Poundo, Inc. and its officers, directors, employees, contractors, affiliates, and agents from claims arising out of:', items: ['your use of the Services;', 'your User Content;', 'your violation of these Terms;', 'or your violation of applicable law or third-party rights.'] },
  ] },
  { id: 's17', h: '17. Dispute Resolution', blocks: [
    { p: 'These Terms shall be governed by the laws of the State of Delaware.' },
    { p: 'Any dispute arising out of these Terms shall be resolved through binding arbitration on an individual basis.' },
    { p: 'You waive:', items: ['jury trial rights;', 'and participation in class actions or representative proceedings.'] },
    { p: 'You may opt out of arbitration within thirty (30) days of account creation by written notice.' },
  ] },
  { id: 's18', h: '18. Changes to These Terms', blocks: [
    { p: 'We may modify these Terms from time to time.' },
    { p: 'Material changes may be communicated through:', items: ['email,', 'in-app notices,', 'or website postings.'] },
    { p: 'Continued use after updates constitutes acceptance.' },
  ] },
];
