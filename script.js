// ===== I18N =====
const dict = {
  ru: {
    "nav.fear":"Подойдёт?","nav.program":"Программа","nav.mentor":"Спикер","nav.cases":"Кейсы","nav.faq":"FAQ","nav.signup":"Записаться",
    "hero.eyebrow":"Бесплатный открытый урок",
    "hero.title1":"Попробуйте профессию","hero.title2":"дизайнера интерьера","hero.title3":"за 1 вечер. <em>Бесплатно.</em>",
    "hero.subtitle":"Создадите свой первый проект в Revit, поймёте подходит ли вам профессия, и получите путеводитель + чек-лист в подарок.",
    "hero.cta":"Записаться бесплатно","hero.cta2":"Программа урока",
    "hero.micro":"🔒 Без спама. Дату и время согласуем при подтверждении.",
    "trust.t1":"8 лет на рынке","trust.t2":"2400+ выпускников","trust.t3":"Куратор-практик","trust.t4":"3 города Узбекистана",
    "mc.label":"Ведёт открытый урок","mc.name":"Асад Халимов","mc.role":"Старший куратор · 7+ лет в дизайне",

    "fear.kicker":"3 страха, которые останавливают 90% людей",
    "fear.title":"«Это не для меня».",
    "fear.title2":"Закроем все 3 страха<br/>за 1 вечер.",
    "fear.q1":"«У меня нет художественного образования»",
    "fear.a1":"78% наших выпускников пришли без художки. Дизайн интерьера — это логика и инструменты, а не рисование от руки.",
    "fear.q2":"«Я не разбираюсь в программах»",
    "fear.a2":"За 1 час открытого урока вы сделаете свой первый проект в Revit. Куратор покажет каждый шаг.",
    "fear.q3":"«Уже не мой возраст»",
    "fear.a3":"Среди студентов и в 19, и в 42. Самой старшей выпускнице 51 — она зарабатывает $1200 в месяц.",

    "ben.title":"За 1 час на открытом уроке",
    "ben.b1":"Сделаете свой первый проект планировки квартиры в Revit (унесёте в портфолио)",
    "ben.b2":"Поймёте подходит ли вам профессия — без воды и общих фраз",
    "ben.b3":"Узнаете сколько реально зарабатывают начинающие дизайнеры в Узбекистане в 2026",
    "ben.b4":"Получите пошаговый план: как за 6 месяцев выйти на свой первый заказ",
    "ben.b5":"Зададите все вопросы куратору лично или в Zoom — для онлайн-формата",
    "ben.foot":"И ВСЕ присутствующие получают 3 подарка ↓",

    "gift.title":"Подарки за регистрацию",
    "gift.l1":"ПОДАРОК 1","gift.l2":"ПОДАРОК 2","gift.l3":"ПОДАРОК 3",
    "gift.t1":"PDF-гайд «Путеводитель по профессии дизайнера интерьера в Узбекистане 2026»",
    "gift.d1":"32 страницы практики: рынок, инструменты, цены, портфолио.",
    "gift.t2":"Чек-лист «Как найти первых 5 клиентов за 30 дней»",
    "gift.d2":"12 шагов от первого профиля в Instagram до подписания договора.",
    "gift.t3":"Промокод на скидку 20% на основной курс",
    "gift.d3":"Действует 7 дней после открытого урока.",
    "gift.note":"Все подарки придут на WhatsApp в течение 5 минут после регистрации.",
    "gift.cta":"Получить подарки и записаться",

    "quiz.title":"Подходит ли вам профессия?",
    "quiz.lead":"5 коротких вопросов · 30 секунд · персональный вердикт от куратора",
    "quiz.restart":"← Пройти заново",
    "q1.t":"Вам нравится наблюдать, как меняются интерьеры в реалити-шоу или на YouTube?",
    "q1.a1":"Да, очень","q1.a2":"Иногда","q1.a3":"Нет",
    "q2.t":"Что вас больше привлекает в профессии?",
    "q2.a1":"Творчество и самовыражение","q2.a2":"Стабильный доход","q2.a3":"Работа удалённо","q2.a4":"Всё вместе",
    "q3.t":"Сколько времени готовы уделять обучению?",
    "q3.a1":"1–2 часа в день","q3.a2":"3–4 часа в день","q3.a3":"Только по выходным",
    "q4.t":"Какой результат хотите получить через 6 месяцев?",
    "q4.a1":"Первый клиент и доход","q4.a2":"Новая профессия и портфолио","q4.a3":"Просто разобраться, моё ли это",
    "q5.t":"В каком городе вы находитесь?",
    "q5.a4":"Другой город",
    "verdict.high":"<b>Поздравляем!</b> По ответам видно, что у вас сильный потенциал в профессии дизайнера интерьера. Запишитесь на ближайший открытый урок — Асад покажет ваш потенциал на практике.",
    "verdict.low":"<b>Похоже, вы пока в раздумьях</b> — и это нормально. Открытый урок как раз для тех, кто хочет на практике понять, своё это или нет. Запишитесь — это бесплатно и ни к чему не обязывает.",

    "m.kicker":"Спикер открытого урока",
    "m.role":"Старший куратор курса «Дизайн интерьера» в INTERNO School",
    "m.l1":"7+ лет практики в дизайне жилых и коммерческих интерьеров",
    "m.l2":"120+ реализованных проектов в Ташкенте, Самарканде, Алматы",
    "m.l3":"Обучил 800+ студентов — 60% работают в профессии",
    "m.l4":"Эксперт по Revit и AutoCAD",
    "m.quote":"«На открытом уроке я не буду продавать вам курс. Моя задача — за час показать вам реальную работу дизайнера. Если зацепит — будем учиться. Если нет — у вас останется первый проект в Revit и понимание, куда двигаться дальше.»",
    "m.ig":"Instagram куратора →","m.cta":"Записаться к Асаду",

    "prac.title":"Как проходит обучение",
    "prac.lead":"реальные кадры с урока и выезда на замер",
    "prac.t1":"Открытый урок","prac.h1":"Изнутри урока в Revit",
    "prac.d1":"Куратор показывает каждый шаг — от запуска программы до готовой планировки квартиры.",
    "prac.t2":"Практика на объекте","prac.h2":"Выезд на замер с куратором",
    "prac.d2":"Студенты выезжают на реальный объект — учатся снимать размеры и фиксировать особенности помещения.",

    "sal.title":"Сколько вы будете зарабатывать после курса",
    "sal.lead":"Цифры — на основе вакансий HeadHunter UZ, Glassdoor и Upwork (апрель 2026).",
    "sal.j":"0–6 месяцев","sal.m":"6–18 месяцев","sal.s":"1.5+ лет",
    "sal.uz":"В Узбекистане","sal.rem":"Удалёнка / зарубеж",
    "sal.cta":"Хочу так же — записаться",

    "case.title":"Студенты уже зарабатывают.","case.title2":"Реальные люди, реальные деньги.",
    "c.before":"Было:","c.after":"Стало:",
    "c1.b":"с нуля, без опыта в дизайне","c1.a":"первый проект в портфолио, переход на стажировку","c1.t":"сразу после курса",
    "c1.q":"«Завершила курс, получила сертификат, защитила первый проект. Спасибо за знания, помощь и поддержку!»",
    "c2.b":"никогда не работал в дизайне","c2.a":"$1000 за первого клиента","c2.t":"сразу после стажировки",
    "c2.q":"«Закончил курс, прошёл стажировку в студии. Нашёл клиента — заработал $1000.»",
    "c3.b":"без клиентов и портфолио","c3.a":"$500 ещё во время обучения","c3.t":"в процессе курса",
    "c3.q":"«Заработал свои первые $500 параллельно с учёбой — куратор помог найти клиента.»",
    "c4.b":"смена профессии","c4.a":"~$1000 за 3 месяца · средний чек $200","c4.t":"3+ месяца после курса",
    "c4.q":"«Несколько клиентов в среднем по $200. Параллельно получил оффер в растущую компанию с крутой командой.»",

    "works.title":"Работы выпускников",
    "works.lead":"Все проекты сделаны студентами на 4-м месяце обучения.",
    "works.cta":"Хочу так же — записаться",

    "prog.title":"Программа открытого урока",
    "t1.t":"Знакомство и обзор профессии","t1.d":"Куратор расскажет о рынке Узбекистана в 2026 — куда идёт спрос и сколько платят.",
    "t2.t":"Установка Revit и обзор интерфейса","t2.d":"Работаете на своём ноутбуке или нашем — мы обеспечим место.",
    "t3.t":"Создаём планировку квартиры с нуля","t3.d":"Под руководством куратора. Унесёте готовый файл в портфолио.",
    "t4.t":"Сколько ждать первого заказа","t4.d":"Разбор: где искать клиентов и какие цены ставить новичку.",
    "t5.t":"Q&A — задаёте любые вопросы","t5.d":"Лично или через Zoom — для онлайн-формата.",
    "prog.note":"📌 Возьмите ноутбук — Revit установим вместе. Если ноутбука нет — обеспечим компьютер на месте.",

    "why.title":"Почему именно INTERNO",
    "why.l1":"лет на рынке · с 2018 года",
    "why.l2":"выпускников — крупнейшая школа дизайна в Узбекистане",
    "why.l3":"выпускников работают в профессии — проверяем по соцсетям",
    "why.l4":"города — Ташкент, Самарканд, Фергана",

    "faq.title":"Частые вопросы",
    "faq.q1":"Урок реально бесплатный? Будете продавать курс?",
    "faq.a1":"Да, бесплатно. Продавать никто не будет — но если зацепит, расскажем как поступить на основной курс.",
    "faq.q2":"А если я ничего не понимаю в дизайне и компьютерах?",
    "faq.a2":"Урок построен с нуля. Куратор разберёт каждый шаг.",
    "faq.q3":"Сколько стоит основной курс?",
    "faq.a3":"Зависит от формата и города. Точную стоимость и рассрочку расскажем на уроке.",
    "faq.q4":"Я живу в Самарканде/Фергане. Как мне попасть?",
    "faq.a4":"Открытые уроки проводятся во всех 3 городах. Адрес в вашем городе пришлём при записи.",
    "faq.q5":"Сколько длится основной курс?","faq.a5":"6 месяцев. 2 раза в неделю по 2 часа.",
    "faq.q6":"Дадите ли диплом?","faq.a6":"Да, выдаём сертификат с QR-кодом, который проверяется на нашем сайте.",
    "faq.q7":"Что если я запишусь и не приду?","faq.a7":"Просто напишите нам — перенесём на следующий урок. Без проблем.",
    "faq.q8":"Помогаете ли с трудоустройством?","faq.a8":"Да, у нас есть карьерный центр. Помогаем собрать портфолио и найти первых клиентов.",

    "cta.title":"Места заканчиваются",
    "cd.d":"дней","cd.h":"часов","cd.m":"мин","cd.s":"сек",
    "prog.of":"из","prog.spots":"мест занято",
    "cta.b1":"✓ 1 час практики в Revit + Q&A","cta.b2":"✓ PDF-гайд + чек-лист в подарок","cta.b3":"✓ Скидка 20% на основной курс",
    "form.name":"Имя","form.phone":"Телефон","form.city":"Город","form.lang":"Язык",
    "form.opt1":"Русский","form.opt2":"Узбекский",
    "form.consent":"Согласен на обработку персональных данных",
    "form.submit":"Записаться на урок",
    "form.policy":"Звоним только для подтверждения. Не спамим. Можно отписаться в любой момент.",

    "ftr.about":"Школа дизайна интерьера №1 в Узбекистане. С 2018 года.",
    "ftr.contact":"Контакты","ftr.cities":"Адреса","ftr.social":"Соцсети",
    "ftr.privacy":"Политика конфиденциальности",
    "sticky.text":"Записаться бесплатно",
    "strip.text":"Готовы попробовать профессию за 1 вечер?",
    "strip.btn":"Записаться на открытый урок",
    "modal.eyebrow":"Бесплатный открытый урок",
    "modal.title":"Запишитесь на ближайший урок",
    "modal.lead":"Менеджер свяжется с вами в течение 15 минут — подтвердит место, дату и время.",
    "modal.b1":"✓ 1 час практики в Revit + Q&A",
    "modal.b2":"✓ PDF-гайд + чек-лист в подарок",
    "modal.b3":"✓ Скидка 20% на основной курс",
  },
  uz: {
    "nav.fear":"To‘g‘ri keladimi?","nav.program":"Dastur","nav.mentor":"Spiker","nav.cases":"Keyslar","nav.faq":"Savollar","nav.signup":"Yozilish",
    "hero.eyebrow":"Bepul ochiq dars",
    "hero.title1":"Interyer dizayneri kasbini","hero.title2":"bir oqshomda sinab ko‘ring.","hero.title3":"<em>Bepul.</em>",
    "hero.subtitle":"Revitda birinchi loyihangizni yaratasiz, kasb sizga to‘g‘ri kelishini tushunasiz va sovg‘a sifatida qo‘llanma + chek-list olasiz.",
    "hero.cta":"Bepul yozilish","hero.cta2":"Dars dasturi",
    "hero.micro":"🔒 Spam yo‘q. Sana va vaqtni tasdiqlashda kelishamiz.",
    "trust.t1":"Bozorda 8 yil","trust.t2":"2400+ bitiruvchi","trust.t3":"Amaliyotchi mentor","trust.t4":"O‘zbekistonning 3 shahri",
    "mc.label":"Ochiq darsni o‘tkazadi","mc.name":"Asad Halimov","mc.role":"Bosh mentor · 7+ yil dizaynda",

    "fear.kicker":"90%ni to‘xtatadigan 3 ta qo‘rquv",
    "fear.title":"«Bu men uchun emas».",
    "fear.title2":"Bir oqshomda 3 qo‘rquvni<br/>yopib beramiz.",
    "fear.q1":"«Menda badiiy ta’lim yo‘q»",
    "fear.a1":"Bitiruvchilarimizning 78%i badiiy ta’limsiz keldi. Interyer dizayni — bu mantiq va vositalar, qo‘lda chizish emas.",
    "fear.q2":"«Men dasturlarda yaxshi emasman»",
    "fear.a2":"1 soatlik ochiq darsda Revitda birinchi loyihangizni qilasiz. Mentor har bir qadamni ko‘rsatadi.",
    "fear.q3":"«Yoshim o‘tib ketgan»",
    "fear.a3":"Talabalarimiz orasida 19 yoshli ham, 42 yoshli ham bor. Eng katta bitiruvchimiz 51 yoshda — oyiga $1200 topadi.",

    "ben.title":"1 soatlik ochiq darsda siz",
    "ben.b1":"Revitda kvartirangizning birinchi rejasini yaratasiz (portfolioga olib ketasiz)",
    "ben.b2":"Kasb sizga to‘g‘ri kelishini tushunasiz — quruq gaplarsiz",
    "ben.b3":"2026-yilda O‘zbekistonda boshlovchi dizaynerlar qancha topishini bilasiz",
    "ben.b4":"Bosqichma-bosqich reja olasiz: 6 oyda birinchi buyurtmaga qanday chiqish",
    "ben.b5":"Mentorga shaxsan yoki Zoom orqali barcha savollaringizni berasiz",
    "ben.foot":"VA HAMMA ishtirokchilar 3 ta sovg‘a oladi ↓",

    "gift.title":"Ro‘yxatdan o‘tganlar uchun sovg‘alar",
    "gift.l1":"SOVG‘A 1","gift.l2":"SOVG‘A 2","gift.l3":"SOVG‘A 3",
    "gift.t1":"PDF qo‘llanma «O‘zbekistonda interyer dizayneri kasbi 2026»",
    "gift.d1":"32 sahifa amaliyot: bozor, vositalar, narxlar, portfolio.",
    "gift.t2":"Chek-list «30 kunda birinchi 5 mijozni qanday topish»",
    "gift.d2":"Instagram profilidan shartnomagacha 12 qadam.",
    "gift.t3":"Asosiy kursga 20% chegirma promokodi",
    "gift.d3":"Ochiq darsdan keyin 7 kun amal qiladi.",
    "gift.note":"Barcha sovg‘alar ro‘yxatdan o‘tganidan keyin 5 daqiqa ichida WhatsAppga keladi.",
    "gift.cta":"Sovg‘alarni olish va yozilish",

    "quiz.title":"Bu kasb sizga to‘g‘ri keladimi?",
    "quiz.lead":"5 ta qisqa savol · 30 soniya · mentordan shaxsiy xulosa",
    "quiz.restart":"← Qaytadan o‘tish",
    "q1.t":"Reality-shou yoki YouTube’da interyerlar qanday o‘zgarishini kuzatish yoqadimi?",
    "q1.a1":"Ha, juda","q1.a2":"Ba’zan","q1.a3":"Yo‘q",
    "q2.t":"Kasbda sizni nima ko‘proq qiziqtiradi?",
    "q2.a1":"Ijodkorlik","q2.a2":"Barqaror daromad","q2.a3":"Masofadan ishlash","q2.a4":"Hammasi",
    "q3.t":"O‘qishga qancha vaqt ajratasiz?",
    "q3.a1":"Kuniga 1–2 soat","q3.a2":"Kuniga 3–4 soat","q3.a3":"Faqat dam olish kunlari",
    "q4.t":"6 oydan keyin qanday natija olmoqchisiz?",
    "q4.a1":"Birinchi mijoz va daromad","q4.a2":"Yangi kasb va portfolio","q4.a3":"O‘zimnikimi tushunish",
    "q5.t":"Qaysi shaharda yashaysiz?",
    "q5.a4":"Boshqa shahar",
    "verdict.high":"<b>Tabriklaymiz!</b> Javoblaringizdan ko‘rinib turibdiki, sizda interyer dizayneri bo‘lishga kuchli salohiyat bor. Eng yaqin ochiq darsga yoziling — Asad sizning salohiyatingizni amalda ko‘rsatadi.",
    "verdict.low":"<b>Hali ikkilanyapsiz</b> — bu normal. Ochiq dars aynan o‘zinikimi tushunmoqchi bo‘lganlar uchun. Yoziling — bepul va hech narsaga majbur emassiz.",

    "m.kicker":"Ochiq dars spikeri",
    "m.role":"INTERNO School «Interyer dizayni» kursining bosh mentori",
    "m.l1":"Turar-joy va tijorat interyerlarida 7+ yil amaliyot",
    "m.l2":"Toshkent, Samarqand, Almatida 120+ amalga oshirilgan loyihalar",
    "m.l3":"800+ talabani o‘qitgan — 60%i kasb bo‘yicha ishlaydi",
    "m.l4":"Revit va AutoCAD bo‘yicha ekspert",
    "m.quote":"«Ochiq darsda men sizga kurs sotmayman. Mening vazifam — bir soatda dizayner ishini ko‘rsatish. Yoqsa — birga o‘qiymiz. Yoqmasa — sizda Revitdagi birinchi loyiha qoladi.»",
    "m.ig":"Mentor Instagram →","m.cta":"Asadga yozilish",

    "prac.title":"O‘qish qanday o‘tadi",
    "prac.lead":"darsdan va o‘lchovga chiqishdan haqiqiy kadrlar",
    "prac.t1":"Ochiq dars","prac.h1":"Revitdagi darsning ichida",
    "prac.d1":"Mentor har bir qadamni ko‘rsatadi — dasturni ishga tushirishdan kvartira rejasigacha.",
    "prac.t2":"Obyektda amaliyot","prac.h2":"Mentor bilan o‘lchov olish",
    "prac.d2":"Talabalar haqiqiy obyektga chiqadi — o‘lchov olish va xona xususiyatlarini qayd etishni o‘rganadi.",

    "sal.title":"Kursdan keyin qancha topasiz",
    "sal.lead":"Raqamlar — HeadHunter UZ, Glassdoor va Upwork vakansiyalari asosida (aprel 2026).",
    "sal.j":"0–6 oy","sal.m":"6–18 oy","sal.s":"1.5+ yil",
    "sal.uz":"O‘zbekistonda","sal.rem":"Masofadan / xorij",
    "sal.cta":"Men ham xohlayman — yozilish",

    "case.title":"Talabalar allaqachon topishadi.","case.title2":"Haqiqiy odamlar, haqiqiy pul.",
    "c.before":"Edi:","c.after":"Bo‘ldi:",
    "c1.b":"noldan, dizayn tajribasisiz","c1.a":"portfoliodagi birinchi loyiha, stajirovkaga o‘tish","c1.t":"kursdan so‘ng darhol",
    "c1.q":"«Kursni tugatdim, sertifikat oldim, birinchi loyihani himoya qildim. Bilim, yordam va qo‘llab-quvvatlash uchun rahmat!»",
    "c2.b":"hech qachon dizaynda ishlamagan","c2.a":"birinchi mijoz uchun $1000","c2.t":"stajirovkadan so‘ng darhol",
    "c2.q":"«Kursni tugatdim, studiyada stajirovkadan o‘tdim. Mijoz topdim — $1000 ishlab topdim.»",
    "c3.b":"mijozsiz va portfoliosiz","c3.a":"o‘qish davrida $500","c3.t":"kurs jarayonida",
    "c3.q":"«O‘qish bilan birga birinchi $500ni ishlab topdim — kurator mijoz topishga yordam berdi.»",
    "c4.b":"kasb almashtirish","c4.a":"3 oyda ~$1000 · o‘rtacha chek $200","c4.t":"kursdan 3+ oy keyin",
    "c4.q":"«Bir nechta mijoz, har biri o‘rtacha $200. Bir vaqtning o‘zida zo‘r jamoaga ish taklifi oldim.»",

    "works.title":"Bitiruvchilar ishlari",
    "works.lead":"Barcha loyihalar talabalar tomonidan o‘qish 4-oyida qilingan.",
    "works.cta":"Men ham xohlayman — yozilish",

    "prog.title":"Ochiq dars dasturi",
    "t1.t":"Tanishuv va kasb sharhi","t1.d":"Mentor 2026-yilda O‘zbekiston bozori haqida aytadi — talab qayerda va qancha to‘lashadi.",
    "t2.t":"Revitni o‘rnatish va interfeys","t2.d":"O‘z noutbukingizda yoki bizning kompyuterda ishlaysiz.",
    "t3.t":"Kvartira rejasini noldan qilamiz","t3.d":"Mentor rahbarligida. Tayyor faylni portfolioga olib ketasiz.",
    "t4.t":"Birinchi buyurtmani qancha kutish","t4.d":"Mijozlarni qayerda topish va yangi boshlovchi qancha narx qo‘yish kerakligini tahlil qilamiz.",
    "t5.t":"Q&A — har qanday savollar","t5.d":"Shaxsan yoki Zoom orqali — onlayn format uchun.",
    "prog.note":"📌 Noutbukni olib keling — Revitni birga o‘rnatamiz. Noutbuk bo‘lmasa — joyda kompyuter beramiz.",

    "why.title":"Nega aynan INTERNO",
    "why.l1":"yil bozorda · 2018-yildan beri",
    "why.l2":"bitiruvchi — O‘zbekistondagi eng yirik dizayn maktabi",
    "why.l3":"bitiruvchilar kasb bo‘yicha ishlaydi — ijtimoiy tarmoqlar orqali tekshiramiz",
    "why.l4":"shahar — Toshkent, Samarqand, Farg‘ona",

    "faq.title":"Ko‘p so‘raladigan savollar",
    "faq.q1":"Dars haqiqatan bepulmi? Kurs sotasizmi?",
    "faq.a1":"Ha, bepul. Hech kim sotmaydi — lekin yoqsa, asosiy kursga qanday kirish kerakligini aytamiz.",
    "faq.q2":"Agar dizayn va kompyuterda umuman tushunmasam-chi?",
    "faq.a2":"Dars noldan qurilgan. Mentor har bir qadamni ko‘rsatadi.",
    "faq.q3":"Asosiy kurs qancha turadi?","faq.a3":"Format va shaharga bog‘liq. Aniq narx va bo‘lib to‘lashni darsda aytamiz.",
    "faq.q4":"Men Samarqand/Farg‘onada yashayman. Qanday borishim mumkin?",
    "faq.a4":"Ochiq darslar 3 ta shahrimizda o‘tadi. Sizning shahringizdagi manzilni yozilganida yuboramiz.",
    "faq.q5":"Asosiy kurs qancha davom etadi?","faq.a5":"6 oy. Haftada 2 marta, 2 soatdan.",
    "faq.q6":"Diplom berasizmi?","faq.a6":"Ha, QR-kodli sertifikat beramiz, saytimizda tekshirsa bo‘ladi.",
    "faq.q7":"Yozilib kelmasam-chi?","faq.a7":"Yozing — keyingi darsga ko‘chiramiz. Muammo yo‘q.",
    "faq.q8":"Ish topishga yordam berasizmi?","faq.a8":"Ha, karyera markazimiz bor. Portfolio yig‘ish va birinchi mijozlarni topishda yordam beramiz.",

    "cta.title":"Joylar tugayapti",
    "cd.d":"kun","cd.h":"soat","cd.m":"daq","cd.s":"son",
    "prog.of":"dan","prog.spots":"joy band",
    "cta.b1":"✓ 1 soat Revit amaliyoti + Q&A","cta.b2":"✓ Sovg‘aga PDF qo‘llanma + chek-list","cta.b3":"✓ Asosiy kursga 20% chegirma",
    "form.name":"Ism","form.phone":"Telefon","form.city":"Shahar","form.lang":"Til",
    "form.opt1":"Rus tili","form.opt2":"O‘zbek tili",
    "form.consent":"Shaxsiy ma’lumotlarni qayta ishlashga roziman",
    "form.submit":"Darsga yozilish",
    "form.policy":"Faqat tasdiqlash uchun qo‘ng‘iroq qilamiz. Spam qilmaymiz. Istalgan vaqt obunadan chiqsangiz bo‘ladi.",

    "ftr.about":"O‘zbekistondagi №1 interyer dizayni maktabi. 2018-yildan beri.",
    "ftr.contact":"Kontaktlar","ftr.cities":"Manzillar","ftr.social":"Ijtimoiy tarmoqlar",
    "ftr.privacy":"Maxfiylik siyosati",
    "sticky.text":"Bepul yozilish",
    "strip.text":"Kasbni bir oqshomda sinab ko‘rishga tayyormisiz?",
    "strip.btn":"Ochiq darsga yozilish",
    "modal.eyebrow":"Bepul ochiq dars",
    "modal.title":"Yaqin darsga yozilish",
    "modal.lead":"Menejer 15 daqiqa ichida bog‘lanadi — joy, sana va vaqtni tasdiqlaydi.",
    "modal.b1":"✓ 1 soat Revit amaliyoti + Q&A",
    "modal.b2":"✓ Sovg‘aga PDF qo‘llanma + chek-list",
    "modal.b3":"✓ Asosiy kursga 20% chegirma",
  }
};

const cityNames = {
  ru: {tsh:"Ташкент",smr:"Самарканд",frg:"Фергана"},
  uz: {tsh:"Toshkent",smr:"Samarqand",frg:"Farg‘ona"},
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    const v = dict[lang]?.[k];
    if(v!==undefined) el.innerHTML = v;
  });
  document.querySelectorAll('.lang__btn').forEach(b=>{
    b.classList.toggle('is-active', b.dataset.lang===lang);
  });
  // City names
  const city = localStorage.getItem('interno_city') || 'tsh';
  document.querySelectorAll('.city-name').forEach(el=>{
    el.textContent = cityNames[lang][city] || cityNames[lang].tsh;
  });
  const sel = document.getElementById('citySelect');
  if(sel){
    [...sel.options].forEach(o=>{
      o.textContent = cityNames[lang][o.value];
    });
    sel.value = city;
  }
  localStorage.setItem('interno_lang', lang);
}

document.querySelectorAll('.lang__btn').forEach(b=>{
  b.addEventListener('click',()=>applyLang(b.dataset.lang));
});

// City switcher
const citySel = document.getElementById('citySelect');
if(citySel){
  citySel.addEventListener('change',()=>{
    localStorage.setItem('interno_city', citySel.value);
    applyLang(document.documentElement.lang);
  });
}

// Init lang
applyLang(localStorage.getItem('interno_lang') || 'ru');

// ===== QUIZ =====
let quizScore = 0;
let quizStep = 1;
const quizSteps = document.querySelectorAll('.quiz__step');
const quizBar = document.getElementById('quizBar');
const quizStepLbl = document.getElementById('quizStep');
const quizVerdict = document.getElementById('quizVerdict');

function goQuizStep(n){
  quizSteps.forEach(s=>s.classList.remove('is-active'));
  if(n==='final'){
    document.querySelector('.quiz__final').classList.add('is-active');
    quizBar.style.width = '100%';
    quizStepLbl.textContent = '5';
    const lang = document.documentElement.lang;
    const v = quizScore>=3 ? dict[lang]['verdict.high'] : dict[lang]['verdict.low'];
    quizVerdict.innerHTML = v;
  } else {
    document.querySelector(`.quiz__step[data-step="${n}"]`).classList.add('is-active');
    quizBar.style.width = (n*20)+'%';
    quizStepLbl.textContent = n;
  }
}

let quizStarted = false;
document.querySelectorAll('.quiz__opt').forEach(opt=>{
  opt.addEventListener('click',()=>{
    if(!quizStarted){
      quizStarted = true;
      if(window.fbq) window.fbq('trackCustom','QuizStart');
    }
    quizScore += parseInt(opt.dataset.score||'0');
    if(opt.dataset.city){
      localStorage.setItem('interno_city', opt.dataset.city);
      if(citySel) citySel.value = opt.dataset.city;
      applyLang(document.documentElement.lang);
    }
    if(quizStep < 5){
      quizStep++;
      goQuizStep(quizStep);
    } else {
      goQuizStep('final');
      if(window.fbq) window.fbq('trackCustom','QuizComplete', { score: quizScore });
    }
  });
});

document.getElementById('quizRestart')?.addEventListener('click',()=>{
  quizScore = 0;
  quizStep = 1;
  goQuizStep(1);
});

// ===== COUNTDOWN =====
const target = new Date();
target.setDate(target.getDate()+5);
target.setHours(19,0,0,0);

function tick(){
  const now = new Date();
  let diff = Math.max(0,target-now);
  const d = Math.floor(diff/86400000); diff%=86400000;
  const h = Math.floor(diff/3600000); diff%=3600000;
  const m = Math.floor(diff/60000); diff%=60000;
  const s = Math.floor(diff/1000);
  const pad = n => String(n).padStart(2,'0');
  document.getElementById('cdDays').textContent = pad(d);
  document.getElementById('cdHours').textContent = pad(h);
  document.getElementById('cdMin').textContent = pad(m);
  document.getElementById('cdSec').textContent = pad(s);
}
tick(); setInterval(tick,1000);

// ===== PHONE MASK =====
function maskPhone(input){
  input.addEventListener('input',e=>{
    let v = e.target.value.replace(/\D/g,'');
    if(v.startsWith('998')) v = v.slice(3);
    let out = '+998';
    if(v.length>0) out += ' ('+v.slice(0,2);
    if(v.length>=2) out += ') '+v.slice(2,5);
    if(v.length>=5) out += '-'+v.slice(5,7);
    if(v.length>=7) out += '-'+v.slice(7,9);
    e.target.value = out;
  });
}
document.querySelectorAll('input[type="tel"]').forEach(maskPhone);

// ===== FAQ accordion (single open) — keep details default
// FAQ already works via <details>

// ===== FORMS =====
const AMOCRM_FORM = {
  endpoint: 'https://forms.amocrm.ru/queue/add',
  form_id: '1705506',
  hash: '37df3dcc789078355483c5cbdb3fe57b',
  fields: {
    name: 'fields[name_1]',
    phone: 'fields[875427_1][1182433]',
    note: 'fields[note_2]',
  },
};
const CITY_LABEL = { tsh:'Ташкент', smr:'Самарканд', frg:'Фергана' };
const LANG_LABEL = { ru:'Русский', uz:'Oʻzbek' };

function detectLeadMeta(form){
  const cityCode = form.elements.city?.value || localStorage.getItem('interno_city') || 'tsh';
  const langCode = (form.elements.lang?.value) || document.documentElement.lang || localStorage.getItem('interno_lang') || 'ru';
  return {
    cityCode, langCode,
    cityLabel: CITY_LABEL[cityCode] || cityCode,
    langLabel: LANG_LABEL[langCode] || langCode,
  };
}

function buildAmoNote(form, meta){
  const parts = [
    `🏙 Город: ${meta.cityLabel}   ·   🗣 Язык: ${meta.langLabel}`,
    '—',
    `Источник: ${form.id || 'form'}`,
    `URL: ${location.href}`,
  ];
  if(document.referrer) parts.push(`Referrer: ${document.referrer}`);
  const utm = ['utm_source','utm_medium','utm_campaign','utm_content','utm_term']
    .map(k => { const v = new URLSearchParams(location.search).get(k); return v ? `${k}=${v}` : null; })
    .filter(Boolean);
  if(utm.length) parts.push(utm.join(' · '));
  return parts.join('\n');
}

async function sendToAmo(form){
  const meta = detectLeadMeta(form);
  const fd = new FormData();
  fd.append('form_id', AMOCRM_FORM.form_id);
  fd.append('hash', AMOCRM_FORM.hash);
  fd.append('user_origin', '');
  const name = form.elements.name?.value?.trim();
  const phone = form.elements.phone?.value?.trim();
  if(name)  fd.append(AMOCRM_FORM.fields.name, name);
  if(phone) fd.append(AMOCRM_FORM.fields.phone, phone);
  fd.append(AMOCRM_FORM.fields.note, buildAmoNote(form, meta));
  // Tags — sent both as legacy comma-separated and array form so amoCRM picks
  // up whichever shape its form ingester supports. Fallback is the note above.
  const tagList = [meta.cityLabel, `Язык: ${meta.langLabel}`, `Форма: ${form.id || 'unknown'}`];
  fd.append('tags', tagList.join(','));
  tagList.forEach(t => fd.append('tags[]', t));
  try {
    await fetch(AMOCRM_FORM.endpoint, { method:'POST', body:fd, mode:'no-cors', credentials:'omit' });
  } catch(err) { console.warn('amoCRM submit failed', err); }
}

function normalizePhone(raw){
  if(!raw) return '';
  let v = raw.replace(/\D/g,'');
  if(v.startsWith('00')) v = v.slice(2);
  if(!v.startsWith('998') && v.length === 9) v = '998' + v;
  return v;
}

function genEventId(){
  return 'lead_' + Date.now() + '_' + Math.random().toString(36).slice(2,10);
}

function handleForm(form){
  form?.addEventListener('submit', async e => {
    e.preventDefault();
    const meta = detectLeadMeta(form);
    const phone = normalizePhone(form.elements.phone?.value);
    const name = (form.elements.name?.value || '').trim().toLowerCase();
    const eventId = genEventId();
    sessionStorage.setItem('interno_last_lead_eid', eventId);
    sessionStorage.setItem('interno_last_lead_ph', phone);
    sessionStorage.setItem('interno_last_lead_fn', name);

    if(window.fbq){
      // Re-init with Advanced Matching parameters (fbq hashes them client-side)
      try { window.fbq('init', '4251277901808457', { ph: phone, fn: name, ct: meta.cityLabel, country: 'uz' }); } catch(_){}
      window.fbq('track','Lead', {
        content_name: 'open_lesson',
        content_category: meta.cityLabel,
        currency: 'USD',
        value: 1,
      }, { eventID: eventId });
    }
    await sendToAmo(form);
    window.location.href = 'thanks.html';
  });
}
handleForm(document.getElementById('form'));
handleForm(document.getElementById('quizForm'));
handleForm(document.getElementById('modalForm'));

// ===== MODAL =====
const modal = document.getElementById('signupModal');
function openModal(){
  if(!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
  if(window.fbq) window.fbq('track','InitiateCheckout', {
    content_name: 'open_lesson_modal',
    currency: 'USD',
    value: 1,
  });
  setTimeout(()=>modal.querySelector('input[name="name"]')?.focus(),300);
}
function closeModal(){
  if(!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}
document.addEventListener('click', e=>{
  if(e.target.closest('[data-modal="signup"]')){
    e.preventDefault(); openModal();
  } else if(e.target.closest('[data-modal-close]')){
    closeModal();
  }
});
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && modal?.classList.contains('is-open')) closeModal();
});

// ===== HERO PARALLAX (subtle mouse-follow on scene) =====
const heroVisual = document.getElementById('heroVisual');
if(heroVisual && window.matchMedia('(hover:hover) and (min-width:980px)').matches){
  const scene = heroVisual.querySelector('.hero-scene');
  heroVisual.classList.add('is-parallax');
  let rect = heroVisual.getBoundingClientRect();
  window.addEventListener('resize', ()=>{ rect = heroVisual.getBoundingClientRect(); });
  document.addEventListener('mousemove', e=>{
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = (e.clientX - cx) / window.innerWidth;
    const dy = (e.clientY - cy) / window.innerHeight;
    if(scene){
      scene.style.setProperty('--px', (dx * 22) + 'px');
      scene.style.setProperty('--py', (dy * 16) + 'px');
    }
  });
}

// ===== SMOOTH HIDE STICKY ON FORM IN VIEW =====
const ctaSection = document.getElementById('cta');
const sticky = document.querySelector('.sticky-cta');
if(ctaSection && sticky){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      sticky.style.opacity = en.isIntersecting ? '0' : '1';
      sticky.style.pointerEvents = en.isIntersecting ? 'none' : 'auto';
    });
  },{threshold:.2});
  io.observe(ctaSection);
}

// ===== PRACTICE VIDEOS: click-to-play (replace poster with native video) =====
document.querySelectorAll('.practice-card__player').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const src = btn.dataset.videoSrc;
    if(!src) return;
    const video = document.createElement('video');
    video.className = 'practice-card__video';
    video.src = src;
    video.controls = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    btn.replaceWith(video);
    video.play().catch(()=>{});
    if(window.fbq) window.fbq('trackCustom','VideoPlay', { src: src.split('/').pop() });
  }, { once:true });
});

// ===== META PIXEL: ViewContent on key sections (fires once per section) =====
(function(){
  const targets = document.querySelectorAll('[data-viewcontent]');
  if(!targets.length || !('IntersectionObserver' in window)) return;
  const seen = new Set();
  const io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const key = en.target.dataset.viewcontent;
      if(seen.has(key)) return;
      seen.add(key);
      if(window.fbq) window.fbq('track','ViewContent', {
        content_name: key,
        content_category: 'landing_section',
      });
    });
  },{threshold:.5});
  targets.forEach(t=>io.observe(t));
})();

// ===== META PIXEL: Scroll depth (25/50/75/90) =====
(function(){
  const marks = [25,50,75,90];
  const fired = new Set();
  let ticking = false;
  function check(){
    ticking = false;
    const h = document.documentElement;
    const scrolled = (h.scrollTop || document.body.scrollTop);
    const max = (h.scrollHeight - h.clientHeight) || 1;
    const pct = Math.round((scrolled / max) * 100);
    marks.forEach(m=>{
      if(pct >= m && !fired.has(m)){
        fired.add(m);
        if(window.fbq) window.fbq('trackCustom','ScrollDepth', { percent: m });
      }
    });
  }
  window.addEventListener('scroll', ()=>{
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(check);
  }, { passive:true });
})();

// ===== META PIXEL: Time-on-page milestone (30s) — engagement signal =====
setTimeout(()=>{
  if(window.fbq) window.fbq('trackCustom','EngagedSession', { seconds: 30 });
}, 30000);
