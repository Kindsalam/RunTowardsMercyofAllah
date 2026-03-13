const targetUrl = process.argv[2] ?? "https://mercyofallah.com";

const expectedHeaders = [
  {
    key: "content-security-policy",
    mustInclude: [
      "default-src 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
    ],
    mustExclude: ["unsafe-eval"],
  },
  { key: "referrer-policy", mustInclude: ["strict-origin-when-cross-origin"] },
  { key: "permissions-policy", mustInclude: ["camera=()"] },
  { key: "x-content-type-options", mustInclude: ["nosniff"] },
  { key: "x-frame-options", mustInclude: ["DENY"] },
  { key: "strict-transport-security", mustInclude: ["max-age=63072000"] },
];

function formatMissing(message) {
  return `Missing or unexpected: ${message}`;
}

try {
  const response = await fetch(targetUrl, {
    method: "GET",
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  const failures = [];

  for (const header of expectedHeaders) {
    const value = response.headers.get(header.key);

    if (!value) {
      failures.push(formatMissing(header.key));
      continue;
    }

    for (const expectedValue of header.mustInclude ?? []) {
      if (!value.includes(expectedValue)) {
        failures.push(formatMissing(`${header.key} should include "${expectedValue}"`));
      }
    }

    for (const blockedValue of header.mustExclude ?? []) {
      if (value.includes(blockedValue)) {
        failures.push(formatMissing(`${header.key} should not include "${blockedValue}"`));
      }
    }
  }

  if (failures.length > 0) {
    console.error(`Header check failed for ${targetUrl}`);
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log(`Header check passed for ${targetUrl}`);
} catch (error) {
  const message = error instanceof Error ? error.message : "Unknown error";
  console.error(`Unable to verify security headers for ${targetUrl}: ${message}`);
  process.exit(1);
}
