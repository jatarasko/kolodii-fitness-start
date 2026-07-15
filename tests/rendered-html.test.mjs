import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/start") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`https://kolodii-fitness.test${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the Kolodii Fitness navigator at /start", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Обери підтримку, яка потрібна тобі зараз/);
  assert.match(html, /Почати самостійно/);
  assert.match(html, /Пройти 5-денний курс/);
  assert.match(html, /Онлайн-супровід/);
  assert.match(html, /Книга рецептів/);
  assert.match(html, /490 грн/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("contains only configured commercial routes and no placeholders", async () => {
  const html = await (await render()).text();
  assert.match(html, /https:\/\/t\.me\/Kolo_Dii_bot\?start=course_healthy_plate/);
  assert.match(html, /https:\/\/t\.me\/Kolo_Dii_bot\?start=course_active/);
  assert.match(html, /https:\/\/t\.me\/Kolo_Dii_bot\?start=book_tracker/);
  assert.match(html, /href="https:\/\/t\.me\/Kolo_Dii_bot\?start=book_tracker"[^>]*><small>01 · самостійно/);
  assert.match(html, /https:\/\/t\.me\/kolodiifitness_bot\?start=notion_top/);
  assert.doesNotMatch(html, /https:\/\/t\.me\/kolo_tarilky_bot/);
  assert.doesNotMatch(html, /https:\/\/t\.me\/kolo_ruhu_bot/);
  assert.match(html, /https:\/\/kolodii-fitness-coaching\.jatarasko\.chatgpt\.site/);
  assert.match(html, /href="https:\/\/kolodii-fitness-coaching\.jatarasko\.chatgpt\.site"[^>]*><small>03 · персонально/);
  assert.doesNotMatch(html, /href="#self"|href="#support"/);
  assert.doesNotMatch(html, /MENU_BOOK_URL|TRACKER_URL|STARTER_BUNDLE_URL|HEALTHY_PLATE_URL|MOVEMENT_COURSE_URL|SUPPORT_PAGE_URL|SUPPORT_BOT_URL/);
  assert.doesNotMatch(html, /\[УТОЧНИТИ|\[ДОДАТИ|href=""|href="#"/);
});

test("keeps root and /start available", async () => {
  const root = await render("/");
  const start = await render("/start");
  assert.equal(root.status, 200);
  assert.equal(start.status, 200);
});
