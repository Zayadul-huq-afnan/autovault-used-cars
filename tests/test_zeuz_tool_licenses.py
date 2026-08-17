"""Smoke test: ZeuZ tool licenses product page."""

from playwright.sync_api import Page, expect


def test_zeuz_tool_licenses(page: Page) -> None:
    page.goto("https://zeuz.ai/products/license", wait_until="domcontentloaded")

    expect(page).to_have_title("Software Licensing | Flexible ZeuZ Tool Licenses", timeout=15000)
    expect(page.locator("body")).to_contain_text("licensing", timeout=15000)
