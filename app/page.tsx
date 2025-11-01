"use client"

import { useState, lazy, Suspense, memo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import { useLanguage } from "@/components/language-provider"

// Lazy load heavy components
const Footer = lazy(() => import("@/components/footer"))
const VideoBackground = lazy(() => import("@/components/video-background"))

const languageFlags = {
  pl: "🇵🇱",
  uk: "🇺🇦",
  en: "🇬🇧",
  by: "🇧🇾",
}

const translations = {
  pl: {
    nav: {
      home: "Główna",
      directions: "Kierunki sportu",
      educationalCenter: "Centrum Edukacyjne",
      schedule: "Grafik",
      trainers: "Trenerzy",
      pricing: "Cennik i systemy opłat",
      news: "Aktualności",
      contacts: "Kontakt",
    },
    hero: {
      scrollDown: "Zobacz nasze dyscypliny",
    },
    activities: {
      title: "Nasze Dyscypliny",
      description: "Wybierz swoją ścieżkę w świecie sztuk walki i sportu",
      learnMore: "Dowiedz się więcej",
      expandedDescription:
        "Szczegółowy opis {activity}. Tutaj znajdziesz informacje o technice, zaletach i specyfice tego sportu.",
      bookNow: "Zapisz się",
      viewDetails: "Zobacz szczegóły",
      viewSchedule: "Zobacz grafik",
      viewTrainers: "Zobacz trenerów",
    },
  },
  uk: {
    nav: {
      home: "Головна",
      pricesSchedule: "Ціни та Розклад",
      sportsClub: "Спортивний Клуб",
      trainers: "Тренери",
      news: "Новини",
      contacts: "Контакти",
    },
    hero: {
      scrollDown: "Подивіться наші дисципліни",
    },
    activities: {
      title: "Наші Дисципліни",
      description: "Оберіть свій шлях у світі бойових мистецтв та спорту",
      learnMore: "Дізнатися більше",
      expandedDescription:
        "Детальний опис {activity}. Тут ви знайдете інформацію про техніку, переваги та особливості цього виду спорту.",
      bookNow: "✨ Записатися",
      viewDetails: "Детальніше",
      viewSchedule: "📅 Подивитися розклад",
      viewTrainers: "👤 Подивитися тренерів",
    },
  },
  en: {
    nav: {
      home: "Home",
      pricesSchedule: "Prices & Schedule",
      sportsClub: "Sports Club",
      trainers: "Trainers",
      news: "News",
      contacts: "Contacts",
    },
    hero: {
      scrollDown: "See our disciplines",
    },
    activities: {
      title: "Our Disciplines",
      description: "Choose your path in the world of martial arts and sports",
      learnMore: "Learn more",
      expandedDescription:
        "Detailed description of {activity}. Here you will find information about technique, benefits and specifics of this sport.",
      bookNow: "✨ Book now",
      viewDetails: "More details",
      viewSchedule: "📅 View schedule",
      viewTrainers: "👤 View trainers",
    },
  },
  by: {
    nav: {
      home: "Галоўная",
      pricesSchedule: "Цэны і Расклад",
      sportsClub: "Спартыўны Клуб",
      trainers: "Трэнеры",
      news: "Навіны",
      contacts: "Кантакты",
    },
    hero: {
      scrollDown: "Паглядзець нашы дысцыпліны",
    },
    activities: {
      title: "Нашы Дысцыпліны",
      description: "Абярыце свой шлях у свеце баявых мастацтваў і спорту",
      learnMore: "Даведацца больш",
      expandedDescription:
        "Падрабязны апіс {activity}. Тут вы знойдзеце інфармацыю пра тэхніку, перавагі і асаблівасці гэтага віду спорту.",
      bookNow: "✨ Запісацца",
      viewDetails: "Падрабязна",
      viewSchedule: "📅 Паглядзець расклад",
      viewTrainers: "👤 Паглядзець трэнераў",
    },
  },
}

const activities = {
  pl: [
    { 
      name: "Karate WKF", 
      description: "Sztuki walki", 
      slug: "karate-wkf", 
      trainer: "Vital Rak, Volha Yefimenka", 
      trainerId: "vital-rak",
      detailedDescription: "Karate WKF to tradycyjna sztuka walki pochodząca z Japonii, która łączy techniki uderzeń, kopnięć i bloków. Trening rozwija siłę, szybkość, koordynację, dyscyplinę i koncentrację. Prowadzimy zajęcia dla dzieci od 7 lat z Volha Yefimenka, młodzieży i dorosłych z Vital Rak. Klub jest członkiem Polskiej Unii Karate i Mazowieckiego Związku Karate, co zapewnia profesjonalny poziom nauczania."
    },
    { 
      name: "Muay Thai / Kickboxing", 
      description: "Sztuki walki", 
      slug: "muaythai", 
      trainer: "Mikoła Taczylin", 
      trainerId: "mikola-taczylin",
      detailedDescription: "Muay Thai / Kickboxing to tajski boks i kickboxing, jedna z najskuteczniejszych sztuk walki na świecie. Charakteryzuje się użyciem uderzeń pięściami, łokciami, kolanami i kopnięciami. Trening jest bardzo intensywny i rozwija wytrzymałość, siłę, szybkość i refleks. Prowadzimy zajęcia dla różnych grup wiekowych, od dzieci po dorosłych, dostosowując program do poziomu zaawansowania uczestników."
    },
    { 
      name: "Judo", 
      description: "Sztuki walki", 
      slug: "judo", 
      trainer: "Daria Koba", 
      trainerId: "daria-koba",
      detailedDescription: "Judo to japońska sztuka walki olimpijska, która uczy rzutów, trzymań i dźwigni. Trening rozwija siłę, elastyczność, koordynację i równowagę. Prowadzimy zajęcia dla dzieci w wieku 6-12 lat, dostosowując program do możliwości młodych uczestników. Prowadzi Daria Koba - certyfikowana instruktorka judo z wieloletnim doświadczeniem, która zapewnia bezpieczne i efektywne nauczanie."
    },
    { 
      name: "MMA", 
      description: "Sztuki walki", 
      slug: "mma", 
      trainer: "Paweł Szymkowicz", 
      trainerId: "pawel-szymkowicz",
      detailedDescription: "MMA (Mixed Martial Arts) to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie. MMA łączy techniki boksu, zapasów, judo, brazylijskiego jiu-jitsu, kickboxingu i innych sztuk walki. Prowadzimy zajęcia dla młodzieży od 15 lat i dorosłych z różnym poziomem zaawansowania. Prowadzi Paweł Szymkowicz."
    },
    { 
      name: "VolatMove! KIDS. Trening Motoryczny", 
      description: "Trening motoryczny dla dzieci 5-7 lat", 
      slug: "volatmove-kids", 
      trainer: "Volha Yefimenka, Daria Koba", 
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! KIDS to ogólne przygotowanie motoryczne dla przedszkolaków, rozwój koordynacji i motoryki dużej. Program specjalnie zaprojektowany dla najmłodszych dzieci w wieku 5-7 lat, skupiający się na podstawowych umiejętnościach ruchowych i równowadze. Zajęcia prowadzą Volha Yefimenka i Daria Koba, które dostosowują program do możliwości każdego dziecka. Treningi odbywają się w przyjaznej atmosferze, zachęcając do aktywności fizycznej."
    },
    { 
      name: "VolatMove! JUNIOR. Trening Motoryczny", 
      description: "Trening motoryczny dla dzieci 8-15 lat", 
      slug: "volatmove-junior", 
      trainer: "Volha Yefimenka", 
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! JUNIOR to trening motoryczny dla dzieci 8-15 lat, skupiający się na korekcji problemów w ruchomości stawów i kształtowaniu prawidłowej postawy. Program obejmuje wzmocnienie stóp, poprawę elastyczności i rozwój siły mięśniowej. Zajęcia specjalnie zaprojektowane dla starszych dzieci i młodzieży, dostosowane do ich potrzeb rozwojowych. Prowadzi Volha Yefimenka z wieloletnim doświadczeniem w pracy z młodymi sportowcami."
    },
    { 
      name: "Trening Funkcjonalny", 
      description: "Trening funkcjonalny i motoryczny", 
      slug: "functional-training", 
      trainer: "Vital Rak", 
      trainerId: "vital-rak",
      detailedDescription: "Trening funkcjonalny i motoryczny dla młodzieży od 15 lat i dorosłych. Rozwój siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji, korekcja nadwagi. Program kompleksowy, skupiający się na ruchach naturalnych dla człowieka. Prowadzi Vital Rak."
    },
    { 
      name: "Szachy", 
      description: "Gra strategiczna", 
      slug: "chess", 
      trainer: "Wiktor Murończyk", 
      trainerId: "wiktor-muronczyk",
      detailedDescription: "Szachy to gra strategiczna, która rozwija logiczne myślenie, koncentrację i umiejętności planowania. Trening szachowy poprawia pamięć, cierpliwość i umiejętności analityczne. Idealne dla osób w każdym wieku. Prowadzi Wiktor Murończyk - międzynarodowy mistrz szachowy."
    },
  ],
  uk: [
    { 
      name: "Карате WKF", 
      description: "Бойові мистецтва", 
      slug: "karate-wkf",
      trainer: "Vital Rak, Volha Yefimenka",
      trainerId: "vital-rak",
      detailedDescription: "Карате WKF - це традиційне бойове мистецтво з Японії, яке поєднує техніки ударів, ударів ногами та блокувань. Тренування розвиває силу, швидкість, координацію, дисципліну та концентрацію. Ми проводимо заняття для дітей від 7 років з Volha Yefimenka, молоді та дорослих з Vital Rak. Клуб є членом Польської Спілки Карате та Мазовецької Спілки Карате, що забезпечує професійний рівень навчання."
    },
    { 
      name: "Муай Тай / Кікбоксинг", 
      description: "Бойові мистецтва", 
      slug: "muaythai",
      trainer: "Mikoła Taczylin",
      trainerId: "mikola-taczylin",
      detailedDescription: "Муай Тай / Кікбоксинг - це тайський бокс і кікбоксинг, один з найефективніших видів бойових мистецтв у світі. Характеризується використанням ударів кулаками, ліктями, колінами та ногами. Тренування дуже інтенсивне і розвиває витривалість, силу, швидкість та рефлекси. Ми проводимо заняття для різних вікових груп, від дітей до дорослих, адаптуючи програму до рівня підготовки учасників."
    },
    { 
      name: "Дзюдо", 
      description: "Бойові мистецтва", 
      slug: "judo",
      trainer: "Daria Koba",
      trainerId: "daria-koba",
      detailedDescription: "Дзюдо - це японське олімпійське бойове мистецтво, яке навчає кидків, утримань та заломів. Тренування розвиває силу, гнучкість, координацію та рівновагу. Ми проводимо заняття для дітей віком 6-12 років, адаптуючи програму до можливостей молодих учасників. Проводить Daria Koba - сертифікований інструктор дзюдо з багаторічним досвідом, який забезпечує безпечне та ефективне навчання."
    },
    { 
      name: "ММА", 
      description: "Бойові мистецтва", 
      slug: "mma",
      trainer: "Paweł Szymkowicz",
      trainerId: "pawel-szymkowicz",
      detailedDescription: "ММА (Mixed Martial Arts) - це змішані бойові мистецтва, які поєднують техніки з різних дисциплін. Тренування включає боротьбу у стійці та партері, удари, удари ногами, кидки та заломи. ММА поєднує техніки боксу, боротьби, дзюдо, бразильського дзю-дзюцу, кікбоксингу та інших бойових мистецтв. Ми проводимо заняття для молоді від 15 років та дорослих з різним рівнем підготовки. Проводить Paweł Szymkowicz."
    },
    { 
      name: "VolatMove! KIDS. Моторичний тренінг", 
      description: "Моторичний тренінг для дітей 5-7 років", 
      slug: "volatmove-kids",
      trainer: "Volha Yefimenka, Daria Koba",
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! KIDS - це загальна моторична підготовка для дошкільнят, розвиток координації та великої моторики. Програма спеціально розроблена для наймолодших дітей віком 5-7 років, зосереджуючись на основних рухових навичках та рівновазі. Заняття проводять Volha Yefimenka та Daria Koba, які адаптують програму до можливостей кожної дитини. Тренування проходять у дружній атмосфері, заохочуючи до фізичної активності."
    },
    { 
      name: "VolatMove! JUNIOR. Моторичний тренінг", 
      description: "Моторичний тренінг для дітей 8-15 років", 
      slug: "volatmove-junior",
      trainer: "Volha Yefimenka",
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! JUNIOR - це моторичний тренінг для дітей 8-15 років, зосереджений на корекції проблем рухливості суглобів та формуванні правильної постави. Програма включає зміцнення стоп, покращення гнучкості та розвиток м'язової сили. Заняття спеціально розроблені для старших дітей та молоді, адаптовані до їхніх розвиткових потреб. Проводить Volha Yefimenka з багаторічним досвідом роботи з молодими спортсменами."
    },
    { 
      name: "Функціональний тренінг", 
      description: "Функціональний та моторичний тренінг", 
      slug: "functional-training",
      trainer: "Vital Rak",
      trainerId: "vital-rak",
      detailedDescription: "Функціональний та моторичний тренінг для молоді від 15 років та дорослих. Розвиток м'язової сили, швидкості реакції, витривалості, гнучкості та координації, корекція надмірної ваги. Комплексна програма, зосереджена на природних рухах людини. Проводить Vital Rak."
    },
    { 
      name: "Шахи", 
      description: "Стратегічна гра", 
      slug: "chess",
      trainer: "Wiktor Murończyk",
      trainerId: "wiktor-muronczyk",
      detailedDescription: "Шахи - це стратегічна гра, яка розвиває логічне мислення, концентрацію та навички планування. Шаховий тренінг покращує пам'ять, терпіння та аналітичні навички. Ідеально підходить для людей будь-якого віку. Проводить Wiktor Murończyk - міжнародний шаховий майстер."
    },
  ],
  en: [
    { 
      name: "Karate WKF", 
      description: "Martial arts", 
      slug: "karate-wkf",
      trainer: "Vital Rak, Volha Yefimenka",
      trainerId: "vital-rak",
      detailedDescription: "Karate WKF is a traditional martial art from Japan that combines striking, kicking, and blocking techniques. Training develops strength, speed, coordination, discipline, and concentration. We conduct classes for children from 7 years old with Volha Yefimenka, youth and adults with Vital Rak. The club is a member of the Polish Karate Union and the Mazovian Karate Association, ensuring a professional level of instruction."
    },
    { 
      name: "Muay Thai / Kickboxing", 
      description: "Martial arts", 
      slug: "muaythai",
      trainer: "Mikoła Taczylin",
      trainerId: "mikola-taczylin",
      detailedDescription: "Muay Thai / Kickboxing is Thai boxing and kickboxing, one of the most effective martial arts in the world. It is characterized by the use of punches, elbows, knees, and kicks. Training is very intense and develops endurance, strength, speed, and reflexes. We conduct classes for various age groups, from children to adults, adapting the program to the participants' skill level."
    },
    { 
      name: "Judo", 
      description: "Martial arts", 
      slug: "judo",
      trainer: "Daria Koba",
      trainerId: "daria-koba",
      detailedDescription: "Judo is an Olympic Japanese martial art that teaches throws, holds, and locks. Training develops strength, flexibility, coordination, and balance. We conduct classes for children aged 6-12, adapting the program to young participants' capabilities. Led by Daria Koba - a certified judo instructor with years of experience who ensures safe and effective teaching."
    },
    { 
      name: "MMA", 
      description: "Martial arts", 
      slug: "mma",
      trainer: "Paweł Szymkowicz",
      trainerId: "pawel-szymkowicz",
      detailedDescription: "MMA (Mixed Martial Arts) is mixed martial arts that combines techniques from various disciplines. Training includes stand-up and ground fighting, strikes, kicks, throws, and locks. MMA combines techniques from boxing, wrestling, judo, Brazilian jiu-jitsu, kickboxing, and other martial arts. We conduct classes for youth from 15 years old and adults with various skill levels. Led by Paweł Szymkowicz."
    },
    { 
      name: "VolatMove! KIDS. Motor Training", 
      description: "Motor training for children 5-7 years", 
      slug: "volatmove-kids",
      trainer: "Volha Yefimenka, Daria Koba",
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! KIDS is general motor preparation for preschoolers, development of coordination and gross motor skills. The program is specially designed for the youngest children aged 5-7, focusing on basic movement skills and balance. Classes are conducted by Volha Yefimenka and Daria Koba, who adapt the program to each child's capabilities. Training takes place in a friendly atmosphere, encouraging physical activity."
    },
    { 
      name: "VolatMove! JUNIOR. Motor Training", 
      description: "Motor training for children 8-15 years", 
      slug: "volatmove-junior",
      trainer: "Volha Yefimenka",
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! JUNIOR is motor training for children 8-15 years, focusing on correcting joint mobility issues and forming proper posture. The program includes strengthening the feet, improving flexibility, and developing muscle strength. Classes are specially designed for older children and youth, adapted to their developmental needs. Led by Volha Yefimenka with years of experience working with young athletes."
    },
    { 
      name: "Functional Training", 
      description: "Functional and motor training", 
      slug: "functional-training",
      trainer: "Vital Rak",
      trainerId: "vital-rak",
      detailedDescription: "Functional and motor training for youth from 15 years old and adults. Development of muscle strength, reaction speed, endurance, flexibility, and coordination, correction of excess weight. A comprehensive program focused on natural human movements. Led by Vital Rak."
    },
    { 
      name: "Chess", 
      description: "Strategic game", 
      slug: "chess",
      trainer: "Wiktor Murończyk",
      trainerId: "wiktor-muronczyk",
      detailedDescription: "Chess is a strategic game that develops logical thinking, concentration, and planning skills. Chess training improves memory, patience, and analytical skills. Perfect for people of all ages. Led by Wiktor Murończyk - an international chess master."
    },
  ],
  by: [
    { 
      name: "Каратэ WKF", 
      description: "Баявыя мастацтвы", 
      slug: "karate-wkf",
      trainer: "Vital Rak, Volha Yefimenka",
      trainerId: "vital-rak",
      detailedDescription: "Каратэ WKF - гэта традыцыйнае баявое мастацтва з Японіі, якое аб'ядноўвае тэхнікі удараў, удараў нагамі і блакаванняў. Трэніроўка развівае сілу, хуткасць, каардынацыю, дысцыпліну і канцэнтрацыю. Мы праводзім заняткі для дзяцей ад 7 гадоў з Volha Yefimenka, моладзі і дарослых з Vital Rak. Клуб з'яўляецца членам Польскай Асацыяцыі Каратэ і Мазавецкай Асацыяцыі Каратэ, што забяспечвае прафесійны ўзровень навучання."
    },
    { 
      name: "Муай Тай / Кікбоксінг", 
      description: "Баявыя мастацтвы", 
      slug: "muaythai",
      trainer: "Mikoła Taczylin",
      trainerId: "mikola-taczylin",
      detailedDescription: "Муай Тай / Кікбоксінг - гэта тайскі бокс і кікбоксінг, адзін з самых эфектыўных відаў баявых мастацтваў у свеце. Характарызуецца выкарыстаннем удараў кулакамі, локцямі, каленямі і нагамі. Трэніроўка вельмі інтэнсіўная і развівае вынослівасць, сілу, хуткасць і рэфлексы. Мы праводзім заняткі для розных узроставых груп, ад дзяцей да дарослых, адаптуючы праграму да ўзроўню падрыхтоўкі ўдзельнікаў."
    },
    { 
      name: "Дзюдо", 
      description: "Баявыя мастацтвы", 
      slug: "judo",
      trainer: "Daria Koba",
      trainerId: "daria-koba",
      detailedDescription: "Дзюдо - гэта японскае алімпійскае баявое мастацтва, якое навучае кідкоў, трыманняў і заломаў. Трэніроўка развівае сілу, гнуткасць, каардынацыю і раўнавагу. Мы праводзім заняткі для дзяцей ва ўзросце 6-12 гадоў, адаптуючы праграму да магчымасцей маладых удзельнікаў. Праводзіць Daria Koba - сертыфікаваны інструктар дзюдо з шматгадовым досведам, які забяспечвае бяспечнае і эфектыўнае навучанне."
    },
    { 
      name: "ММА", 
      description: "Баявыя мастацтвы", 
      slug: "mma",
      trainer: "Paweł Szymkowicz",
      trainerId: "pawel-szymkowicz",
      detailedDescription: "ММА (Mixed Martial Arts) - гэта змешаныя баявыя мастацтвы, якія аб'ядноўваюць тэхнікі з розных дысцыплін. Трэніроўка ўключае барацьбу ў стаянцы і партэры, удары, удары нагамі, кідкі і заломы. ММА аб'ядноўвае тэхнікі боксу, барацьбы, дзюдо, бразільскага дзю-дзюцу, кікбоксінгу і іншых баявых мастацтваў. Мы праводзім заняткі для моладзі ад 15 гадоў і дарослых з розным узроўнем падрыхтоўкі. Праводзіць Paweł Szymkowicz."
    },
    { 
      name: "VolatMove! KIDS. Маторныя трэніроўкі", 
      description: "Маторныя трэніроўкі для дзяцей 5-7 гадоў", 
      slug: "volatmove-kids",
      trainer: "Volha Yefimenka, Daria Koba",
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! KIDS - гэта агульная маторная падрыхтоўка для дашкольнікаў, развіццё каардынацыі і буйной маторыкі. Праграма спецыяльна распрацавана для самых маладых дзяцей ва ўзросце 5-7 гадоў, засяроджваючыся на асноўных рухавых навыках і раўнавазе. Заняткі праводзяць Volha Yefimenka і Daria Koba, якія адаптуюць праграму да магчымасцей кожнага дзіцяці. Трэніроўкі праходзяць у сяброўскай атмасферы, заахвочваючы да фізічнай актыўнасці."
    },
    { 
      name: "VolatMove! JUNIOR. Маторныя трэніроўкі", 
      description: "Маторныя трэніроўкі для дзяцей 8-15 гадоў", 
      slug: "volatmove-junior",
      trainer: "Volha Yefimenka",
      trainerId: "volha-yefimenka",
      detailedDescription: "VolatMove! JUNIOR - гэта маторныя трэніроўкі для дзяцей 8-15 гадоў, засяроджаныя на карэкцыі праблем рухомасці суставаў і фарміраванні правільнай паставы. Праграма ўключае ўмацаванне стоп, паляпшэнне гнуткасці і развіццё цягліцавай сілы. Заняткі спецыяльна распрацаваны для старэйшых дзяцей і моладзі, адаптаваныя да іх развіццёвых патрэб. Праводзіць Volha Yefimenka з шматгадовым досведам працы з маладымі спартсменамі."
    },
    { 
      name: "Функцыянальныя трэніроўкі", 
      description: "Функцыянальныя і маторныя трэніроўкі", 
      slug: "functional-training",
      trainer: "Vital Rak",
      trainerId: "vital-rak",
      detailedDescription: "Функцыянальныя і маторныя трэніроўкі для моладзі ад 15 гадоў і дарослых. Развіццё цягліцавай сілы, хуткасці рэакцыі, вынослівасці, гнуткасці і каардынацыі, карэкцыя лішняй вагі. Камплексная праграма, засяроджаная на натуральных рухах чалавека. Праводзіць Vital Rak."
    },
    { 
      name: "Шахматы", 
      description: "Стратэгічная гульня", 
      slug: "chess",
      trainer: "Wiktor Murończyk",
      trainerId: "wiktor-muronczyk",
      detailedDescription: "Шахматы - гэта стратэгічная гульня, якая развівае лагічнае мысленне, канцэнтрацыю і навыкі планавання. Шахматная трэніроўка паляпшае памяць, цярпенне і аналітычныя навыкі. Ідэальна падыходзіць для людзей любога ўзросту. Праводзіць Wiktor Murończyk - міжнародны шахматны майстар."
    },
  ],
}

function HomePage() {
  const { currentLang } = useLanguage()
  const router = useRouter()
  const [expandedActivities, setExpandedActivities] = useState<Set<number>>(new Set())

  const t = translations[currentLang] || translations.pl

  const toggleActivity = (index: number) => {
    const newExpanded = new Set(expandedActivities)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedActivities(newExpanded)
  }

  const scrollToActivities = () => {
    if (typeof window === 'undefined') return
    const activitiesSection = document.getElementById("activities")
    if (activitiesSection) {
      activitiesSection.scrollIntoView({ 
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      })
    }
  }

  return (
    <div className="min-h-screen relative bg-black">
      <div className="relative h-screen overflow-hidden">
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <VideoBackground
            desktopToken="GaKXZ3b0Vmk"
            mobileToken="WblQx6xivHQ"
            overlayOpacity={0.15}
          />
        </Suspense>

        <main className="relative z-50 h-full">
          <div className="h-full flex flex-col items-center justify-center relative">
            <div className="text-center text-white mb-8">{/* Content can be added here */}</div>
          </div>
        </main>

        {/* Scroll Arrow - Outside main to ensure proper z-index */}
        <button
          onClick={scrollToActivities}
          className="scroll-button fixed bottom-8 left-1/2 transform -translate-x-1/2 group transition-colors duration-200 ease-out"
          style={{ zIndex: 999999 }}
        >
          <div className="flex flex-col items-center space-y-2 sm:space-y-3 text-white font-bold transition-colors duration-200 ease-out bg-transparent backdrop-blur-xl border-2 border-white/50 rounded-2xl px-6 py-4 sm:px-8 sm:py-5 hover:bg-white/10 hover:border-white/70 shadow-2xl relative z-[999999]">
            <span className="text-sm sm:text-base font-bold font-accent drop-shadow-lg">{t.hero.scrollDown}</span>
            <svg className="w-6 h-6 sm:w-7 sm:h-7 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </button>
      </div>

      <section id="activities" className="relative z-30 bg-gradient-to-br from-black via-gray-900 to-black min-h-screen py-12 sm:py-20 transition-all duration-700 ease-out">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-8 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
              VOLAT. {currentLang === "uk" ? "Центр Спорту та Освіти" : currentLang === "en" ? "Sports and Education Center" : currentLang === "by" ? "Цэнтр Спорту і Адукацыі" : "Centrum Sportu i Edukacji"}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed px-4">{t.activities.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {(activities[currentLang] || activities.pl || []).slice(0, 8).map((activity, index) => {
              // Находим соответствующий элемент из pl массива для получения полной информации
              const plActivity = activities.pl?.find(a => a.slug === activity.slug) || activity
              const currentActivity = {
                ...plActivity,
                name: activity.name,
                description: activity.description,
                slug: activity.slug,
                detailedDescription: activity.detailedDescription || plActivity.detailedDescription,
                trainer: activity.trainer || plActivity.trainer,
                trainerId: activity.trainerId || plActivity.trainerId
              }
              return (
              <div
                key={index}
                className="group bg-transparent backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-red-500/10 flex flex-col h-full"
              >
                {/* Header Section - Fixed Height */}
                <div className="p-6 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 break-words leading-tight min-h-[60px]">
                        {currentActivity.name}
                      </h3>
                      <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300 font-primary min-h-[40px]">
                        {currentActivity.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        onClick={() => toggleActivity(index)}
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        {expandedActivities.has(index) ? (
                          <ChevronUpIcon className="w-6 h-6 text-white/70 group-hover:text-red-400 transition-colors duration-300" />
                        ) : (
                          <ChevronDownIcon className="w-6 h-6 text-white/70 group-hover:text-red-400 transition-colors duration-300" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedActivities.has(index) ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 pt-4 pb-6 border-t border-white/20">
                    <div className="pt-4 space-y-4 flex flex-col">
                      <div className="text-white/80 text-sm">
                        <p>{currentActivity.detailedDescription || t.activities.expandedDescription.replace("{activity}", currentActivity.name.toLowerCase())}</p>
                      </div>

                      {/* Информация о тренере */}
                      {currentActivity.trainer && (
                        <div 
                          className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group/trainer"
                          onClick={() => {
                            const trainerId = currentActivity.trainerId;
                            if (trainerId) {
                              router.push(`/coaches#${trainerId}`);
                            }
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                            <span className="text-red-400 text-xs font-accent font-semibold group-hover/trainer:text-red-300 transition-colors">
                              {currentLang === "uk" ? "Тренер" : currentLang === "en" ? "Trainer" : currentLang === "by" ? "Трэнер" : "Trener"}
                            </span>
                          </div>
                          <p className="text-white text-sm font-primary group-hover/trainer:text-red-100 transition-colors">{currentActivity.trainer}</p>
                        </div>
                      )}

                      {/* Buttons - Only visible when expanded */}
                      <div className="px-0 pt-2 flex flex-col gap-3">
                        <Link
                          href={`/disciplines/${currentActivity.slug}`}
                          className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl text-center shadow-lg block min-h-[48px] flex items-center justify-center"
                          onClick={(e) => {
                            e.stopPropagation()
                          }}
                        >
                          {t.activities.viewDetails}
                        </Link>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSdDvBi8fQgmTj10i6GPoU19q3RanUSyJLCZS3QACu5sS9aoMA/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-accent font-medium rounded-xl text-center shadow-lg border border-gray-200 block min-h-[48px] flex items-center justify-center"
                        >
                          {t.activities.bookNow}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
            })}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        <Footer currentLang={currentLang} />
      </Suspense>
    </div>
  )
}

// Memoize to prevent unnecessary re-renders
const MemoizedHomePage = memo(HomePage)
export default MemoizedHomePage
