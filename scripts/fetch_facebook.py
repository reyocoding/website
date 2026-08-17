#!/usr/bin/env python3
"""
Extract text content from Ayoub's Facebook posts using a real (Playwright) browser
with a logged-in session.

Facebook hard-blocks anonymous access, so you must export your own cookies:

  1. Install the "Get cookies.txt LOCALLY" extension in your browser
     (Chrome/Edge/Firefox): https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlhkcc
  2. Log in to facebook.com in that browser.
  3. Click the extension icon on any facebook.com page -> "Export" ->
     save as cookies.txt in this repo root.
  4. Run:  python3 scripts/fetch_facebook.py
  5. The post texts are saved to fb_posts.json - paste them to the assistant
     to weave them into the roadmap entries.

Requires:  pip install playwright && python3 -m playwright install chromium
"""

import json
import re
import time
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
COOKIE_FILE = ROOT / "cookies.txt"
OUT_FILE = ROOT / "fb_posts.json"

POSTS = {
    "outside_trip": ("809049375055254", "100078505957589"),
    "hackathon_1": ("790245964154551", "100095074632230"),
    "hackathon_2": ("791212467391234", "100095074632230"),
    "pitching_1": ("842646048914542", "100095074632230"),
    "pitching_2": ("839042579279738", "100095220097398"),
}


def load_cookies():
    if not COOKIE_FILE.exists():
        raise SystemExit(
            f"cookies.txt not found at {COOKIE_FILE}.\n"
            "Export it with the 'Get cookies.txt LOCALLY' extension while logged "
            "into facebook.com, then re-run."
        )
    cookies = []
    for line in COOKIE_FILE.read_text().splitlines():
        if line.startswith("#") or not line.strip():
            continue
        parts = line.split("\t")
        if len(parts) < 7:
            continue
        domain, _, path, secure, expires, name, value = parts[:7]
        cookies.append(
            {
                "name": name,
                "value": value,
                "domain": domain,
                "path": path,
                "secure": secure.lower() == "true",
                "expires": float(expires) if expires else -1,
            }
        )
    return cookies


def clean(text: str) -> str:
    return "\n".join(ln.strip() for ln in text.splitlines() if ln.strip())


def main():
    cookies = load_cookies()
    out = {}
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/126.0.0.0 Safari/537.36"
            ),
            viewport={"width": 1280, "height": 900},
            locale="en-US",
        )
        ctx.add_cookies(cookies)

        for label, (fbid, uid) in POSTS.items():
            page = ctx.new_page()
            try:
                page.goto(
                    f"https://www.facebook.com/story.php?story_fbid={fbid}&id={uid}",
                    wait_until="domcontentloaded",
                    timeout=30000,
                )
                time.sleep(4)
                body = page.locator("body").inner_text(timeout=15000)
                out[label] = {"url": page.url, "text": clean(body)}
                print(f"[{label}] {len(out[label]['text'])} chars")
            except Exception as e:
                out[label] = {"error": str(e)}
                print(f"[{label}] ERROR {e}")
            page.close()

        ctx.close()
        browser.close()

    OUT_FILE.write_text(json.dumps(out, indent=2, ensure_ascii=False))
    print(f"saved -> {OUT_FILE}")


if __name__ == "__main__":
    main()