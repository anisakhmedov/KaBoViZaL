const SUPPORTED_LANGUAGES = ["ru", "uz", "en"];
const DEFAULT_LANGUAGE = "ru";

const translations = {
  ru: {
    "meta.title": "Платформа бронирования услуг | Pitch Day",
    "meta.description": "Платформа бронирования услуг: проблема, решение, команда, дорожная карта и план реализации.",
    "nav.problem": "Проблема → Решение",
    "nav.team": "Команда",
    "nav.why": "Почему мы",
    "nav.implementation": "Реализация",
    "hero.eyebrow": "Pitch Day · 1 этап",
    "hero.title": "Платформа бронирования услуг",
    "hero.lead": "Единая цифровая экосистема для записи клиентов, управления расписанием и масштабирования локального сервиса в онлайн.",
    "hero.demo": "Смотреть демо",
    "hero.plan": "План реализации",
    "problem.h2": "1. Проблема → Решение",
    "problem.p1.h3": "Проблема 1: хаос в записи и потеря клиентов",
    "problem.p1.p": "До 40% потенциальных клиентов теряются на этапе попытки записи: занято, не ответили, забыли перезвонить.",
    "problem.p1.s": "Решение: 24/7 онлайн-запись в 2 клика + автоподтверждения и напоминания.",
    "problem.p2.h3": "Проблема 2: высокий порог входа",
    "problem.p2.p": "62% самозанятых и малых команд не используют цифровые инструменты из-за сложности запуска и настройки.",
    "problem.p2.s": "Решение: готовая карточка бизнеса за 10 минут без сложной интеграции.",
    "problem.p3.h3": "Проблема 3: нет единой экосистемы",
    "problem.p3.p": "Разрозненные мессенджеры, таблицы и звонки не дают контроля над загрузкой, качеством сервиса и ростом.",
    "problem.p3.s": "Решение: трехмодульная платформа: клиент, бизнес, модерация.",
    "problem.p4.h3": "Ключевая ценность",
    "problem.p4.p": "Платформа снижает потери заявок, ускоряет запуск малого сервиса и дает прозрачную аналитику для управленческих решений.",
    "problem.p4.s": "Результат: больше записей, меньше ручной рутины, предсказуемый рост.",
    "team.h2": "2. Команда",
    "team.pm.p1": "Управление продуктом, синхронизация команды, roadmap.",
    "team.pm.p2": "<strong>Навыки:</strong> Jira, Notion, продуктовая аналитика.",
    "team.fe.p1": "UX/UI, клиентская логика, SSR/SPA-оптимизация.",
    "team.fe.p2": "<strong>Стек:</strong> Nuxt.js, Vue.js, TypeScript.",
    "team.be.p1": "API, бизнес-логика, безопасность и интеграции.",
    "team.be.p2": "<strong>Стек:</strong> Node.js, Express.js, PostgreSQL.",
    "team.ops.p1": "Дизайн-система, тестирование, CI/CD и мониторинг.",
    "team.ops.p2": "<strong>Инструменты:</strong> Figma, Playwright, Docker, Cloud.",
    "why.h2": "3. Почему наша команда решит эту проблему",
    "why.l1": "Релевантный опыт в биллинге, кабинетах клиентов и высоконагруженных системах.",
    "why.l2": "Понимание домена: интервью с 15 владельцами малого сервисного бизнеса.",
    "why.l3": "Технологическая готовность: проработанная архитектура и заготовки ключевых модулей.",
    "why.l4": "Сильная связка продукт + инженерия + дизайн + операционная дисциплина.",
    "roadmap.h2": "4. Дорожная карта",
    "roadmap.i.h3": "Завершено",
    "roadmap.i.p": "Валидировали боль рынка, определили ценностное предложение, сформировали архитектурный контур.",
    "roadmap.p.h3": "Демо ядра сервиса",
    "roadmap.p.p": "Регистрация бизнеса, расписание, онлайн-запись клиента и базовые уведомления.",
    "roadmap.m.h3": "Боевой минимальный продукт",
    "roadmap.m.p": "Платежи, роли и права, аналитика загрузки, модуль модерации и личные кабинеты.",
    "roadmap.l.h3": "Публичный запуск",
    "roadmap.l.p": "Пилоты с реальными бизнесами, SLA/мониторинг, маркетинговый запуск и сбор метрик retention.",
    "impl.h2": "5. Как мы реализуем решение",
    "impl.stages.h3": "Этапы разработки",
    "impl.stages.l1": "Discovery: детализация user flow, приоритизация функционала.",
    "impl.stages.l2": "Architecture: проектирование API, БД, очередей и модулей платформы.",
    "impl.stages.l3": "Development: параллельная фронтенд- и бэкенд-разработка.",
    "impl.stages.l4": "Testing: e2e, нагрузочные тесты, security checks.",
    "impl.stages.l5": "Launch: деплой, мониторинг, итерации по обратной связи.",
    "impl.tech.h3": "Технологии",
    "impl.tech.l1": "Frontend: Nuxt.js, Vue.js, TypeScript.",
    "impl.tech.l2": "Backend: Node.js, Express.js, REST API.",
    "impl.tech.l3": "Data: PostgreSQL, Redis.",
    "impl.tech.l4": "Infrastructure: Docker, CI/CD, AWS или Yandex Cloud.",
    "impl.ai.h3": "AI-инструменты и решения",
    "impl.ai.l1": "GitHub Copilot: ускорение разработки и рефакторинга.",
    "impl.ai.l2": "ChatGPT API: генерация описаний услуг и подсказок для бизнеса.",
    "impl.ai.l3": "AI-аналитика: прогноз пиковой нагрузки и рекомендации по слотам.",
    "impl.ai.l4": "AI-ассистент: FAQ и поддержка операторов первой линии.",
    "impl.extra.h3": "Дополнительно",
    "impl.extra.p": "На сайте добавлены optional-блоки: AI-чатбот с готовыми вопросами и секция API Access для интеграций.",
    "impl.extra.btn": "Перейти к разделу /demo",
    "extras.h2": "Optional: AI Chatbot + API Access",
    "extras.chat.h3": "AI-чатбот (FAQ-режим)",
    "chat.init.q": "<strong>Q:</strong> Как быстро подключить бизнес?",
    "chat.init.a": "<strong>A:</strong> Регистрация, настройка расписания и публикация карточки занимают около 10 минут.",
    "chat.q.price": "Сколько стоит старт?",
    "chat.q.whatsapp": "Есть ли интеграция с WhatsApp?",
    "extras.api.p1": "Планируем открыть API для партнеров и внешних продуктов.",
    "extras.api.p2": "Сценарии: виджеты записи, CRM-интеграции, аналитические дашборды.",
    "footer.p": "Pitch Day · Платформа бронирования услуг · 2026",
    "footer.demo": "Открыть страницу /demo",
    "demo.meta.title": "Демо | Платформа бронирования услуг",
    "demo.meta.description": "Демо-видео и рабочий прототип платформы бронирования услуг.",
    "demo.nav.problem": "Проблема",
    "demo.nav.implementation": "Реализация",
    "demo.hero.eyebrow": "Раздел /demo",
    "demo.hero.title": "Демо решения",
    "demo.hero.lead": "Ниже размещены демонстрационное видео, его описание и ссылка на рабочий прототип.",
    "demo.video.h2": "6.1 Демо-видео (1-5 минут)",
    "demo.video.iframeTitle": "Демо-видео платформы",
    "demo.video.note": "Замените ссылку в iframe на ваше финальное демо-видео длительностью 1-5 минут.",
    "demo.desc.h2": "6.2 Описание демо-видео",
    "demo.desc.p": "В видео показан ключевой пользовательский сценарий: клиент выбирает услугу, видит свободные слоты, бронирует время и получает подтверждение. Затем демонстрируется кабинет бизнеса: управление расписанием, обработка заявок, уведомления и аналитика загрузки.",
    "demo.desc.l1": "00:00-01:00: ценность решения и целевая аудитория.",
    "demo.desc.l2": "01:00-02:30: клиентский путь бронирования.",
    "demo.desc.l3": "02:30-03:30: кабинет бизнеса и управление услугами.",
    "demo.desc.l4": "03:30-04:30: аналитика и AI-подсказки.",
    "demo.proto.h2": "6.3 Ссылка на рабочий прототип",
    "demo.proto.p1": "Прототип доступен по ссылке: <a href=\"https://example.com/prototype\" target=\"_blank\" rel=\"noreferrer\">https://example.com/prototype</a>",
    "demo.footer.p": "Платформа бронирования услуг · Demo Page",
    "demo.footer.back": "Вернуться на главную",
    "chat.label.q": "Q",
    "chat.label.a": "A",
    "chat.fallback": "Спасибо за вопрос. Мы добавим ответ в ближайшем обновлении."
  },
  uz: {
    "meta.title": "Xizmatlarni band qilish platformasi | Pitch Day",
    "meta.description": "Xizmatlarni band qilish platformasi: muammo, yechim, jamoa, yo'l xaritasi va amalga oshirish rejasi.",
    "nav.problem": "Muammo → Yechim",
    "nav.team": "Jamoa",
    "nav.why": "Nega biz",
    "nav.implementation": "Amalga oshirish",
    "hero.eyebrow": "Pitch Day · 1-bosqich",
    "hero.title": "Xizmatlarni band qilish platformasi",
    "hero.lead": "Mijoz yozuvlari, jadval boshqaruvi va mahalliy servisni onlayn kengaytirish uchun yagona raqamli ekotizim.",
    "hero.demo": "Demo ko'rish",
    "hero.plan": "Amalga oshirish rejasi",
    "problem.h2": "1. Muammo → Yechim",
    "problem.p1.h3": "Muammo 1: yozuvdagi tartibsizlik va mijoz yo'qotish",
    "problem.p1.p": "Potensial mijozlarning 40% gacha qismi yozilish jarayonida yo'qoladi: band, javob yo'q, qayta qo'ng'iroq unutildi.",
    "problem.p1.s": "Yechim: 24/7 rejimda 2 bosqichli onlayn yozuv + avtomatik tasdiqlash va eslatmalar.",
    "problem.p2.h3": "Muammo 2: yuqori kirish to'sig'i",
    "problem.p2.p": "O'zini o'zi band qilganlar va kichik jamoalarning 62% murakkab ishga tushirish sababli raqamli vositalardan foydalanmaydi.",
    "problem.p2.s": "Yechim: biznes kartasi 10 daqiqada, murakkab integratsiyasiz yaratiladi.",
    "problem.p3.h3": "Muammo 3: yagona ekotizim yo'q",
    "problem.p3.p": "Tarqoq messenjerlar, jadvallar va qo'ng'iroqlar yuklama, sifat va o'sishni boshqarishga imkon bermaydi.",
    "problem.p3.s": "Yechim: 3 moduldan iborat platforma (mijoz, biznes, moderatsiya).",
    "problem.p4.h3": "Asosiy qiymat",
    "problem.p4.p": "Platforma yo'qolgan so'rovlarni kamaytiradi, kichik servisni tez ishga tushiradi va shaffof analitikani beradi.",
    "problem.p4.s": "Natija: ko'proq yozuv, kamroq qo'lda ish, barqaror o'sish.",
    "team.h2": "2. Jamoa",
    "team.pm.p1": "Mahsulot boshqaruvi, jamoa sinxronizatsiyasi, roadmap.",
    "team.pm.p2": "<strong>Ko'nikmalar:</strong> Jira, Notion, mahsulot analitikasi.",
    "team.fe.p1": "UX/UI, mijoz tomoni logikasi, SSR/SPA optimizatsiyasi.",
    "team.fe.p2": "<strong>Stek:</strong> Nuxt.js, Vue.js, TypeScript.",
    "team.be.p1": "API, biznes logika, xavfsizlik va integratsiyalar.",
    "team.be.p2": "<strong>Stek:</strong> Node.js, Express.js, PostgreSQL.",
    "team.ops.p1": "Dizayn tizimi, testlash, CI/CD va monitoring.",
    "team.ops.p2": "<strong>Vositalar:</strong> Figma, Playwright, Docker, Cloud.",
    "why.h2": "3. Nega biz bu muammoni hal qilamiz",
    "why.l1": "Billing, mijoz kabinetlari va yuqori yuklamali tizimlarda tajriba bor.",
    "why.l2": "Domen tushunchasi: 15 ta kichik biznes egasi bilan intervyu o'tkazilgan.",
    "why.l3": "Texnologik tayyorgarlik: arxitektura va asosiy modullar bo'yicha tayyor yechimlar bor.",
    "why.l4": "Mahsulot + injiniring + dizayn + operatsion intizom kuchli kombinatsiyasi.",
    "roadmap.h2": "4. Yo'l xaritasi",
    "roadmap.i.h3": "Yakunlangan",
    "roadmap.i.p": "Bozor og'rig'i tasdiqlandi, qiymat taklifi va arxitektura konturi aniqlandi.",
    "roadmap.p.h3": "Yadro servis demosi",
    "roadmap.p.p": "Biznes ro'yxatdan o'tishi, jadval, onlayn yozuv va bazaviy bildirishnomalar.",
    "roadmap.m.h3": "Ishchi minimal mahsulot",
    "roadmap.m.p": "To'lovlar, rollar va ruxsatlar, yuklama analitikasi, moderatsiya va shaxsiy kabinetlar.",
    "roadmap.l.h3": "Ochiq ishga tushirish",
    "roadmap.l.p": "Haqiqiy bizneslar bilan pilot, SLA/monitoring, marketing starti va retention metrikalari.",
    "impl.h2": "5. Yechimni qanday amalga oshiramiz",
    "impl.stages.h3": "Rivojlantirish bosqichlari",
    "impl.stages.l1": "Discovery: user flowlarni aniqlashtirish va funksiyalarni ustuvorlashtirish.",
    "impl.stages.l2": "Architecture: API, DB, navbatlar va platforma modullarini loyihalash.",
    "impl.stages.l3": "Development: frontend va backendni parallel ishlab chiqish.",
    "impl.stages.l4": "Testing: e2e, yuklama testlari, security checks.",
    "impl.stages.l5": "Launch: deploy, monitoring va feedback asosida iteratsiyalar.",
    "impl.tech.h3": "Texnologiyalar",
    "impl.tech.l1": "Frontend: Nuxt.js, Vue.js, TypeScript.",
    "impl.tech.l2": "Backend: Node.js, Express.js, REST API.",
    "impl.tech.l3": "Data: PostgreSQL, Redis.",
    "impl.tech.l4": "Infrastructure: Docker, CI/CD, AWS yoki Yandex Cloud.",
    "impl.ai.h3": "AI vositalari va yechimlar",
    "impl.ai.l1": "GitHub Copilot: rivojlantirish va refaktorni tezlashtirish.",
    "impl.ai.l2": "ChatGPT API: xizmat tavsiflari va biznes uchun maslahatlar yaratish.",
    "impl.ai.l3": "AI-analitika: yuklama pikini prognozlash va slot tavsiyalari.",
    "impl.ai.l4": "AI-assistent: FAQ va birinchi liniya operatorlari yordami.",
    "impl.extra.h3": "Qo'shimcha",
    "impl.extra.p": "Saytga optional bo'limlar qo'shildi: tayyor savol-javobli AI-chatbot va API Access bo'limi.",
    "impl.extra.btn": "/demo bo'limiga o'tish",
    "extras.h2": "Optional: AI Chatbot + API Access",
    "extras.chat.h3": "AI-chatbot (FAQ rejimi)",
    "chat.init.q": "<strong>Q:</strong> Biznesni qanchalik tez ulash mumkin?",
    "chat.init.a": "<strong>A:</strong> Ro'yxatdan o'tish, jadvalni sozlash va biznes kartasini nashr qilish taxminan 10 daqiqa oladi.",
    "chat.q.price": "Boshlash narxi qancha?",
    "chat.q.whatsapp": "WhatsApp integratsiyasi bormi?",
    "extras.api.p1": "Hamkorlar va tashqi mahsulotlar uchun API ochishni rejalashtiryapmiz.",
    "extras.api.p2": "Ssenariylar: yozuv vidjetlari, CRM integratsiyalari, analitik dashboardlar.",
    "footer.p": "Pitch Day · Xizmatlarni band qilish platformasi · 2026",
    "footer.demo": "/demo sahifasini ochish",
    "demo.meta.title": "Demo | Xizmatlarni band qilish platformasi",
    "demo.meta.description": "Xizmatlarni band qilish platformasining demo videosi va ishlaydigan prototipi.",
    "demo.nav.problem": "Muammo",
    "demo.nav.implementation": "Amalga oshirish",
    "demo.hero.eyebrow": "/demo bo'limi",
    "demo.hero.title": "Yechim demosi",
    "demo.hero.lead": "Quyida demo video, uning tavsifi va ishlaydigan prototip havolasi joylashtirilgan.",
    "demo.video.h2": "6.1 Demo-video (1-5 daqiqa)",
    "demo.video.iframeTitle": "Platforma demo-videosi",
    "demo.video.note": "iframe havolasini 1-5 daqiqalik yakuniy demo-videongizga almashtiring.",
    "demo.desc.h2": "6.2 Demo-video tavsifi",
    "demo.desc.p": "Videoda asosiy foydalanuvchi ssenariysi ko'rsatilgan: mijoz xizmatni tanlaydi, bo'sh slotlarni ko'radi, vaqtni band qiladi va tasdiq oladi. Keyin biznes kabineti: jadval boshqaruvi, so'rovlarni qayta ishlash, bildirishnomalar va yuklama analitikasi ko'rsatiladi.",
    "demo.desc.l1": "00:00-01:00: yechim qiymati va maqsadli auditoriya.",
    "demo.desc.l2": "01:00-02:30: mijozning band qilish yo'li.",
    "demo.desc.l3": "02:30-03:30: biznes kabineti va xizmatlarni boshqarish.",
    "demo.desc.l4": "03:30-04:30: analitika va AI maslahatlar.",
    "demo.proto.h2": "6.3 Ishlaydigan prototip havolasi",
    "demo.proto.p1": "Prototip havolasi: <a href=\"https://example.com/prototype\" target=\"_blank\" rel=\"noreferrer\">https://example.com/prototype</a>",
    "demo.footer.p": "Xizmatlarni band qilish platformasi · Demo sahifa",
    "demo.footer.back": "Bosh sahifaga qaytish",
    "chat.label.q": "Q",
    "chat.label.a": "A",
    "chat.fallback": "Savolingiz uchun rahmat. Javobni yaqin yangilanishda qo'shamiz."
  },
  en: {
    "meta.title": "Service Booking Platform | Pitch Day",
    "meta.description": "Service booking platform: problem, solution, team, roadmap, and implementation plan.",
    "nav.problem": "Problem → Solution",
    "nav.team": "Team",
    "nav.why": "Why Us",
    "nav.implementation": "Implementation",
    "hero.eyebrow": "Pitch Day · Stage 1",
    "hero.title": "Service Booking Platform",
    "hero.lead": "A unified digital ecosystem for client booking, schedule management, and scaling local services online.",
    "hero.demo": "Watch Demo",
    "hero.plan": "Implementation Plan",
    "problem.h2": "1. Problem → Solution",
    "problem.p1.h3": "Problem 1: booking chaos and client loss",
    "problem.p1.p": "Up to 40% of potential clients are lost during booking attempts: busy line, no reply, forgotten callback.",
    "problem.p1.s": "Solution: 24/7 online booking in 2 clicks with auto confirmations and reminders.",
    "problem.p2.h3": "Problem 2: high barrier to entry",
    "problem.p2.p": "62% of freelancers and small teams do not use digital tools due to complex setup.",
    "problem.p2.s": "Solution: ready business profile in 10 minutes, no complex integration needed.",
    "problem.p3.h3": "Problem 3: no unified ecosystem",
    "problem.p3.p": "Scattered messengers, spreadsheets, and calls do not provide control over workload, quality, and growth.",
    "problem.p3.s": "Solution: a 3-module platform (client, business, moderation).",
    "problem.p4.h3": "Core Value",
    "problem.p4.p": "The platform reduces lead loss, accelerates launch for small services, and provides transparent analytics.",
    "problem.p4.s": "Result: more bookings, less manual routine, predictable growth.",
    "team.h2": "2. Team",
    "team.pm.p1": "Product management, team sync, roadmap.",
    "team.pm.p2": "<strong>Skills:</strong> Jira, Notion, product analytics.",
    "team.fe.p1": "UX/UI, client-side logic, SSR/SPA optimization.",
    "team.fe.p2": "<strong>Stack:</strong> Nuxt.js, Vue.js, TypeScript.",
    "team.be.p1": "API, business logic, security, and integrations.",
    "team.be.p2": "<strong>Stack:</strong> Node.js, Express.js, PostgreSQL.",
    "team.ops.p1": "Design system, testing, CI/CD, and monitoring.",
    "team.ops.p2": "<strong>Tools:</strong> Figma, Playwright, Docker, Cloud.",
    "why.h2": "3. Why our team can solve this problem",
    "why.l1": "Relevant experience in billing, client cabinets, and high-load systems.",
    "why.l2": "Domain understanding: interviews with 15 small service business owners.",
    "why.l3": "Technology readiness: architecture and key module blueprints are prepared.",
    "why.l4": "Strong combination of product, engineering, design, and operational discipline.",
    "roadmap.h2": "4. Roadmap",
    "roadmap.i.h3": "Completed",
    "roadmap.i.p": "Validated market pain, defined value proposition, and formed architecture outline.",
    "roadmap.p.h3": "Core service demo",
    "roadmap.p.p": "Business onboarding, schedule setup, online client booking, and basic notifications.",
    "roadmap.m.h3": "Production-ready MVP",
    "roadmap.m.p": "Payments, roles and permissions, workload analytics, moderation module, and personal dashboards.",
    "roadmap.l.h3": "Public launch",
    "roadmap.l.p": "Pilots with real businesses, SLA/monitoring, marketing launch, and retention metrics.",
    "impl.h2": "5. How we will implement the solution",
    "impl.stages.h3": "Development stages",
    "impl.stages.l1": "Discovery: detail user flows and prioritize features.",
    "impl.stages.l2": "Architecture: design API, DB, queues, and platform modules.",
    "impl.stages.l3": "Development: parallel frontend and backend implementation.",
    "impl.stages.l4": "Testing: e2e, load testing, and security checks.",
    "impl.stages.l5": "Launch: deploy, monitor, and iterate from feedback.",
    "impl.tech.h3": "Technologies",
    "impl.tech.l1": "Frontend: Nuxt.js, Vue.js, TypeScript.",
    "impl.tech.l2": "Backend: Node.js, Express.js, REST API.",
    "impl.tech.l3": "Data: PostgreSQL, Redis.",
    "impl.tech.l4": "Infrastructure: Docker, CI/CD, AWS or Yandex Cloud.",
    "impl.ai.h3": "AI tools and solutions",
    "impl.ai.l1": "GitHub Copilot: faster implementation and refactoring.",
    "impl.ai.l2": "ChatGPT API: generation of service descriptions and business prompts.",
    "impl.ai.l3": "AI analytics: peak-load forecasting and slot recommendations.",
    "impl.ai.l4": "AI assistant: FAQ and first-line operator support.",
    "impl.extra.h3": "Additional",
    "impl.extra.p": "The site includes optional blocks: AI chatbot with ready Q&A and an API Access section.",
    "impl.extra.btn": "Go to /demo section",
    "extras.h2": "Optional: AI Chatbot + API Access",
    "extras.chat.h3": "AI chatbot (FAQ mode)",
    "chat.init.q": "<strong>Q:</strong> How quickly can I connect a business?",
    "chat.init.a": "<strong>A:</strong> Registration, schedule setup, and publishing a business profile takes about 10 minutes.",
    "chat.q.price": "What is the starting cost?",
    "chat.q.whatsapp": "Is WhatsApp integration available?",
    "extras.api.p1": "We plan to provide API access for partners and external products.",
    "extras.api.p2": "Scenarios: booking widgets, CRM integrations, and analytics dashboards.",
    "footer.p": "Pitch Day · Service Booking Platform · 2026",
    "footer.demo": "Open /demo page",
    "demo.meta.title": "Demo | Service Booking Platform",
    "demo.meta.description": "Demo video and working prototype of the service booking platform.",
    "demo.nav.problem": "Problem",
    "demo.nav.implementation": "Implementation",
    "demo.hero.eyebrow": "/demo page",
    "demo.hero.title": "Solution Demo",
    "demo.hero.lead": "Below you can find the demo video, its description, and a link to the working prototype.",
    "demo.video.h2": "6.1 Demo video (1-5 minutes)",
    "demo.video.iframeTitle": "Platform demo video",
    "demo.video.note": "Replace the iframe link with your final 1-5 minute demo video.",
    "demo.desc.h2": "6.2 Demo video description",
    "demo.desc.p": "The video shows the key user journey: a client chooses a service, sees available slots, books a time, and receives confirmation. Then it demonstrates the business dashboard: schedule management, request handling, notifications, and workload analytics.",
    "demo.desc.l1": "00:00-01:00: solution value and target audience.",
    "demo.desc.l2": "01:00-02:30: client booking flow.",
    "demo.desc.l3": "02:30-03:30: business dashboard and service management.",
    "demo.desc.l4": "03:30-04:30: analytics and AI suggestions.",
    "demo.proto.h2": "6.3 Link to working prototype",
    "demo.proto.p1": "Prototype link: <a href=\"https://example.com/prototype\" target=\"_blank\" rel=\"noreferrer\">https://example.com/prototype</a>",
    "demo.footer.p": "Service Booking Platform · Demo Page",
    "demo.footer.back": "Back to main page",
    "chat.label.q": "Q",
    "chat.label.a": "A",
    "chat.fallback": "Thanks for your question. We will add an answer in the next update."
  }
};

const chatAnswers = {
  ru: {
    "chat.q.price": "Базовый запуск: бесплатный trial для первых бизнесов, затем подписка по количеству активных мастеров.",
    "chat.q.whatsapp": "Да, интеграция планируется в MVP через webhook-слой и шаблоны автоматических уведомлений."
  },
  uz: {
    "chat.q.price": "Bazaviy start: ilk bizneslar uchun bepul trial, keyin faol ustalar soniga qarab obuna.",
    "chat.q.whatsapp": "Ha, integratsiya MVP bosqichida webhook qatlam va avtomatik bildirishnoma shablonlari orqali rejalashtirilgan."
  },
  en: {
    "chat.q.price": "Base launch: free trial for first businesses, then subscription based on active specialists.",
    "chat.q.whatsapp": "Yes, integration is planned in MVP via a webhook layer and automated notification templates."
  }
};

const chatBox = document.getElementById("chat-box");
const questionButtons = document.querySelectorAll("[data-question-key]");
const languageButtons = document.querySelectorAll(".lang-btn[data-lang]");
let activeQuestionKey = null;

function translate(lang, key) {
  return translations[lang]?.[key] ?? translations[DEFAULT_LANGUAGE]?.[key] ?? "";
}

function normalizeLanguage(value) {
  return SUPPORTED_LANGUAGES.includes(value) ? value : DEFAULT_LANGUAGE;
}

function setActiveLanguageButton(lang) {
  languageButtons.forEach((button) => {
    const isActive = button.getAttribute("data-lang") === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderChat(lang, questionKey) {
  if (!chatBox || !questionKey) {
    return;
  }

  const question = translate(lang, questionKey);
  const answer =
    chatAnswers[lang]?.[questionKey] ?? chatAnswers[DEFAULT_LANGUAGE]?.[questionKey] ?? translate(lang, "chat.fallback");

  chatBox.innerHTML = `<p><strong>${translate(lang, "chat.label.q")}:</strong> ${question}</p><p><strong>${translate(lang, "chat.label.a")}:</strong> ${answer}</p>`;
}

function applyLanguage(language) {
  const lang = normalizeLanguage(language);
  document.documentElement.lang = lang;
  window.localStorage.setItem("site-language", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translate(lang, key);
    if (value) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const key = element.getAttribute("data-i18n-content");
    const value = translate(lang, key);
    if (value) {
      element.setAttribute("content", value);
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    const key = element.getAttribute("data-i18n-title");
    const value = translate(lang, key);
    if (value) {
      element.setAttribute("title", value);
    }
  });

  setActiveLanguageButton(lang);

  if (activeQuestionKey) {
    renderChat(lang, activeQuestionKey);
  }
}

questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeQuestionKey = button.getAttribute("data-question-key");
    renderChat(normalizeLanguage(document.documentElement.lang), activeQuestionKey);
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.getAttribute("data-lang"));
  });
});

const initialLanguage = normalizeLanguage(window.localStorage.getItem("site-language") || document.documentElement.lang);
applyLanguage(initialLanguage);
