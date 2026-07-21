import { BITRIX_URL, BRANCHES, FIELD_IDS, GRADES, SOURCE_IDS } from './config.js';

const branchLabels = Object.fromEntries(BRANCHES.map(({ value, label }) => [value, label]));
const gradeLabels = Object.fromEntries(GRADES.map(({ value, label }) => [value, label]));

export function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 9);
  const parts = [
    digits.slice(0, 2),
    digits.slice(2, 5),
    digits.slice(5, 7),
    digits.slice(7, 9),
  ].filter(Boolean);

  return parts.join('-');
}

export function getUtm() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source') || 'organic';
  const campaign = params.get('utm_campaign') || '-';

  return {
    source,
    medium: params.get('utm_medium') || '-',
    campaign,
    creative: params.get('utm_creative') || campaign || 'organic',
  };
}

export function createLeadPayload({ name, branch, grade, phone }) {
  const utm = getUtm();
  const phoneRaw = phone.replace(/\D/g, '');

  return {
    'fields[TITLE]': `${name} | ${utm.source} | ${utm.creative} | ${branchLabels[branch]} | ${gradeLabels[grade]}`,
    'fields[NAME]': name,
    'fields[PHONE][0][VALUE]': `+998${phoneRaw}`,
    'fields[PHONE][0][VALUE_TYPE]': 'WORK',
    'fields[STAGE_ID]': 'IN_PROCESS',
    'fields[SOURCE_ID]': SOURCE_IDS[utm.source] || 'WEB',
    'fields[UTM_SOURCE]': utm.source,
    'fields[UTM_MEDIUM]': utm.medium,
    'fields[UTM_CAMPAIGN]': utm.campaign,
    'fields[UTM_CONTENT]': utm.creative,
    'fields[UF_CRM_1777030859057]': FIELD_IDS.filial[branch],
    'fields[UF_CRM_1777475112]': FIELD_IDS.grade[grade],
    'fields[UF_CRM_1778050483331]': FIELD_IDS.city[branch],
    'fields[COMMENTS]': `Manba: ${utm.source} | Medium: ${utm.medium} | Kampaniya: ${utm.campaign} | Kreativ: ${utm.creative}`,
  };
}

export async function sendLead(payload) {
  const body = new URLSearchParams(payload);
  const response = await fetch(BITRIX_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
  });
  const data = await response.json();

  if (typeof window.fbq !== 'undefined' && data?.result) {
    window.fbq('track', 'CompleteRegistration', {
      content_name: payload['fields[COMMENTS]'],
      status: true,
    });
  }

  return data;
}
