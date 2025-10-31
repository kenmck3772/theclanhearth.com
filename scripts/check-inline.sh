#!/usr/bin/env bash
# Fail fast
set -euo pipefail

ROOT=$(git rev-parse --show-toplevel 2>/dev/null || pwd)
echo "Checking repository for forbidden inline handlers and CDN usage..."

BAD=0

# Patterns to reject
echo -n "Searching for HTML-style inline event attributes (onerror/onload/onclick) ... "
# only match attribute style e.g. onclick="..." or onclick='...'
# exclude Markdown files so documentation/code snippets don't trigger the guard
if git grep -n --line-number -I -E "on(error|click|load)\s*=\s*[\"']" -- ':!dist' ':!node_modules' ':!assets' ':!*.md' ':!.githooks' ':!scripts' >/dev/null 2>&1; then
  echo "FOUND"
  git grep -n --line-number -I -E "on(error|click|load)\s*=\s*[\"']" -- ':!dist' ':!node_modules' ':!assets' || true
  BAD=1
else
  echo "OK"
fi

echo -n "Searching for Tailwind CDN usage (cdn.tailwindcss.com) in code (excluding README.md) ... "
if git grep -n --line-number -I -E "cdn\.tailwindcss\.com" -- ':!dist' ':!node_modules' ':!assets' ':!*.md' ':!.githooks' ':!scripts' >/dev/null 2>&1; then
  echo "FOUND"
  git grep -n --line-number -I -E "cdn\.tailwindcss\.com" -- ':!dist' ':!node_modules' ':!assets' ':!*.md' ':!.githooks' ':!scripts' || true
  BAD=1
else
  echo "OK"
fi

if [ "$BAD" -ne 0 ]; then
  echo "\nERROR: Forbidden inline handlers or CDN references found. Please remove them before merging." >&2
  exit 2
fi

echo "Check passed. No forbidden patterns found."
exit 0
