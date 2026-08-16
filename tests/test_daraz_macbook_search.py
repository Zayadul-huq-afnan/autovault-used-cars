"""Smoke test: search for MacBook on Daraz Bangladesh."""

from playwright.sync_api import Page, expect


def test_daraz_macbook_search(page: Page) -> None:
    page.goto("https://www.daraz.com.bd/", wait_until="domcontentloaded")

    search_input = page.locator("input[type='search'], input[name='q'], #q").first
    expect(search_input).to_be_visible(timeout=15000)

    search_input.fill("MacBook")
    search_input.press("Enter")

    page.wait_for_load_state("domcontentloaded")
    expect(page.locator("body")).to_contain_text("MacBook", timeout=15000)
