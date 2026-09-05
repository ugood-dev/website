import type { LegalSection } from './legal-types';

export const privacySections: LegalSection[] = [
  { id: 's1', h: '1. Information We Collect', blocks: [
    { h3: 'A. Account Information', p: 'We may collect:', items: ['name,', 'username,', 'email address,', 'phone number,', 'profile image,', 'authentication credentials.'] },
    { h3: 'B. Wellness & Check-In Information', p: 'We may collect:', items: ['check-ins,', 'emotional indicators,', 'engagement interactions,', 'support activity,', 'wellness-related preferences.'] },
    { p: 'Certain information may constitute sensitive personal information under applicable law.' },
    { h3: 'C. Circle & Space Information', p: 'We may collect:', items: ['Circle relationships,', 'invitations,', 'social graph interactions,', 'Spaces created by users,', 'relationship categorization data.'] },
    { p: 'Users acknowledge that:', items: ['Spaces may be private to the creator;', 'and users may not know how another user categorizes them.'] },
    { h3: 'D. Device & Technical Information', p: 'We may collect:', items: ['IP address,', 'device identifiers,', 'operating system,', 'browser information,', 'app analytics,', 'crash data,', 'and usage metrics.'] },
    { h3: 'E. Contacts Information', p: 'With permission, we may access:', items: ['address book information,', 'contact names,', 'and phone numbers'] },
    { p: 'for invitation and connection purposes. You may revoke permissions through device settings.' },
    { h3: 'F. Location Information', p: 'If enabled, we may collect approximate location information to:', items: ['provide localized services;', 'display nearby resources;', 'or improve functionality.'] },
  ] },
  { id: 's2', h: '2. How We Use Information', blocks: [
    { p: 'We may use information to:', items: ['provide and operate the Services;', 'authenticate users;', 'deliver check-ins;', 'facilitate Circles and Spaces;', 'improve user experience;', 'prevent fraud and abuse;', 'analyze engagement trends;', 'maintain platform security;', 'comply with legal obligations;', 'and develop new features.'] },
    { p: 'We may use automated systems to:', items: ['detect abuse,', 'analyze safety risks,', 'recommend engagement,', 'or improve moderation.'] },
  ] },
  { id: 's3', h: '3. How We Share Information', blocks: [
    { p: 'We may share information:', items: ['with your consent;', 'with service providers;', 'with vendors supporting platform operations;', 'to comply with law;', 'to protect safety and security;', 'in connection with mergers or acquisitions;', 'or in aggregated or de-identified form.'] },
    { p: 'We do not sell personal information in exchange for monetary compensation.' },
  ] },
  { id: 's4', h: '4. Third-Party Services', blocks: [
    { p: 'The platform may integrate with third parties including:', items: ['DoorDash,', 'Grubhub,', 'analytics vendors,', 'payment providers,', 'cloud providers,', 'and messaging vendors.'] },
    { p: 'Those services operate under their own privacy policies.' },
  ] },
  { id: 's5', h: '5. Data Retention', blocks: [
    { p: 'We retain information:', items: ['while accounts remain active;', 'as necessary to provide Services;', 'comply with legal obligations;', 'resolve disputes;', 'enforce agreements;', 'and protect platform integrity.'] },
    { p: 'We may retain backup or archival copies for limited periods.' },
  ] },
  { id: 's6', h: '6. Your Privacy Rights', blocks: [
    { p: 'Depending on your jurisdiction, you may have rights to:', items: ['access information;', 'correct information;', 'delete information;', 'request portability;', 'limit certain processing;', 'or appeal privacy decisions.'] },
    { p: 'California residents may have rights under the California Consumer Privacy Act, as amended by the CPRA. Other state privacy rights may also apply.' },
    { p: 'Requests may be submitted at:', email: 'privacy@ugood.app' },
  ] },
  { id: 's7', h: '7. Children & Teens', blocks: [
    { p: 'The Services are not directed to children under 13.' },
    { p: 'If we learn that we collected information from a child under 13 without appropriate consent, we will delete such information.' },
    { p: 'Parents or guardians may contact us regarding teen accounts.' },
  ] },
  { id: 's8', h: '8. Security', blocks: [
    { p: 'We implement reasonable:', items: ['administrative,', 'technical,', 'and physical safeguards'] },
    { p: 'to protect information. However, no method of transmission or storage is completely secure.' },
  ] },
  { id: 's9', h: '9. International Data Transfers', blocks: [
    { p: 'Information may be processed and stored in the United States or other jurisdictions where we or our service providers operate.' },
  ] },
  { id: 's10', h: '10. Changes to This Policy', blocks: [
    { p: 'We may modify this Privacy Policy periodically.' },
    { p: 'Material changes may be communicated through:', items: ['email,', 'website postings,', 'or in-app notices.'] },
  ] },
];
