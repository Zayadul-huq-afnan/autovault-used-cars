"""Smoke test: search for MacBook on Daraz Bangladesh."""

from playwright.sync_api import Page, expect


def test_daraz_macbook_search(page: Page) -> None:
    page.goto(
        "https://www.daraz.com.bd/catalog/?q=MacBook&from=search_context",
        wait_until="domcontentloaded",
    )

    expect(page).to_have_title("Buy MacBook Online at Best Price in Bangladesh - Daraz.com.bd", timeout=15000)
    expect(page.locator("body")).to_contain_text("MacBook", timeout=15000)
