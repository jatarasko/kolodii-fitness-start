import type { Metadata } from "next";
import { siteConfig } from "../site-config";

export const metadata: Metadata = {
  title: "Обери свій формат | Kolodii Fitness",
  description: "Самостійні матеріали, короткі курси або персональний онлайн-супровід Тараса Колодія.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

function ExternalLink({ href, children, eventName, secondary = false }: { href: string; children: React.ReactNode; eventName: string; secondary?: boolean }) {
  return <a className={`start-button${secondary ? " start-button-secondary" : ""}`} href={href} target="_blank" rel="noreferrer" data-meta-event={eventName}>{children}<Arrow /></a>;
}

export default function StartPage() {
  const { routes } = siteConfig;

  return (
    <main className="start-page" id="top">
      <section className="start-hero start-shell">
        <div className="start-hero-copy"><p className="start-kicker">З чого почати</p><h1>Обери підтримку, яка потрібна тобі зараз</h1><p>Готові матеріали, короткий курс або персональна робота — без жорстких дієт і зайвого ускладнення.</p></div>
        <figure className="start-hero-photo"><img src="/photos/taras-plate.jpg" alt="Тарас Колодій тримає модель збалансованої тарілки" /></figure>
        <nav className="start-routes" id="formats" aria-label="Обрати рівень підтримки">
          <a href={routes.starterBundle} target="_blank" rel="noreferrer" data-meta-event="starter_bundle_click"><small>01 · самостійно</small><strong>Потрібен готовий комплект</strong><span>Книга рецептів + PDF-трекер ↗</span></a>
          <a href="#courses"><small>02 · 5 днів</small><strong>Хочу розібратися в основах</strong><span>Курси про їжу та рух →</span></a>
          <a href={routes.supportPage} target="_blank" rel="noreferrer" data-meta-event="support_page_click"><small>03 · персонально</small><strong>Потрібен план і підтримка</strong><span>Онлайн-супровід ↗</span></a>
        </nav>
      </section>

      <section className="start-section start-shell" id="self"><article className="start-route-card">
        <div className="start-route-heading"><span>01</span><div><p className="start-kicker">Мінімум підтримки</p><h2>Почати самостійно</h2></div></div>
        <p className="start-route-lead">Якщо потрібні готові збалансовані страви та простий спосіб контролювати харчування, кроки й звички самостійно.</p>
        <div className="start-bundle-summary">
          <div><strong>Книга рецептів</strong><span>45 збалансованих страв: по 15 сніданків, обідів і вечерь за методом здорової тарілки.</span></div>
          <span className="start-plus" aria-hidden="true">+</span>
          <div><strong>Трекер у PDF</strong><span>Роздруковуєш і щотижня відмічаєш прийоми їжі, кроки та власні звички.</span></div>
        </div>
        <p className="start-bundle-note">Книга відповідає на питання «що приготувати», а трекер допомагає бачити, як ці рішення стають системою.</p>
        <p className="start-price">290 грн</p>
        <ExternalLink href={routes.starterBundle} eventName="starter_bundle_click">Переглянути комплект</ExternalLink>
      </article></section>

      <section className="start-section start-section-warm" id="courses"><article className="start-route-card start-shell">
        <div className="start-route-heading"><span>02</span><div><p className="start-kicker">Коротка система</p><h2>Пройти 5-денний курс</h2></div></div>
        <p className="start-route-lead">Якщо хочеш самостійно розібратися в одній темі та одразу застосувати її на практиці.</p>
        <div className="start-options">
          <div><strong>«Здорова тарілка»</strong><span>Як збирати прийоми їжі без дієтичного меню.</span><b className="start-price">490 грн</b><ExternalLink href={routes.healthyPlate} eventName="healthy_plate_click">Перейти до курсу</ExternalLink></div>
          <div><strong>«Більше руху»</strong><span>Як додати активність без спортзалу й героїчних планів.</span><b className="start-price">490 грн</b><ExternalLink href={routes.movementCourse} eventName="movement_course_click">Перейти до курсу</ExternalLink></div>
        </div>
      </article></section>

      <section className="start-section start-shell" id="support"><article className="start-route-card start-route-featured">
        <div className="start-route-heading"><span>03</span><div><p className="start-kicker">Персональна робота</p><h2>Онлайн-супровід</h2></div></div>
        <p className="start-route-lead">Якщо вага повертається, є зриви або потрібен план, адаптований до твого реального життя.</p>
        <div className="start-support-summary"><span>5 днів аудиту · персональний план · чат · щотижневі дзвінки</span></div>
        <div className="start-actions"><ExternalLink href={routes.supportPage} eventName="support_page_click">Як проходить супровід</ExternalLink><ExternalLink href={routes.supportBot} eventName="support_application_click" secondary>Залишити заявку</ExternalLink></div>
      </article></section>

      <section className="start-trust start-shell">
        <img src="/photos/taras-dumbbells.jpg" loading="lazy" alt="Тарас Колодій у спортзалі" />
        <div><p className="start-kicker">Коротко про мене</p><h2>20+ років у фітнесі</h2><p>Я — Тарас Колодій, фітнес-тренер і майстер спорту України з кікбоксингу. Допомагаю поєднати харчування, рух і звички так, щоб вони працювали у звичайному житті.</p><a href={routes.instagram} target="_blank" rel="noreferrer">Instagram @kolodii_fitness ↗</a></div>
      </section>

      <section className="start-faq start-shell"><p className="start-kicker">Коротко про головне</p><h2>Що обрати?</h2><div>
        <details><summary>Матеріали чи курс?<span>+</span></summary><p>Матеріали дають готовий інструмент. Курс пояснює систему в одній темі та проводить через 5 днів практики.</p></details>
        <details><summary>Коли потрібен супровід?<span>+</span></summary><p>Коли проблема повторюється, потрібна персональна адаптація, контроль і регулярний зворотний зв’язок.</p></details>
        <details><summary>Чи потрібні підрахунок калорій і спортзал?<span>+</span></summary><p>Не обов’язково. Формат харчування й руху добирається під продукт і твою ситуацію.</p></details>
      </div></section>

      <section className="start-final"><div className="start-shell"><p className="start-kicker">Наступний крок</p><h2>Не треба починати ідеально. Обери формат, який реально підходить зараз.</h2><a className="start-button" href="#formats">Обрати свій формат <span aria-hidden="true">↑</span></a></div></section>
      <footer className="start-footer start-shell"><img src="/brand/kolodii-fitness.png" alt="Kolodii Fitness" /><span>Здоров’я без фанатизму.</span></footer>
    </main>
  );
}
