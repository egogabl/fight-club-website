"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
import Footer from "@/components/footer"
import VideoBackground from "@/components/video-background"
import { useLanguage } from "@/components/language-provider"

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
    { name: "Карате (WKF)", description: "Бойові мистецтва", slug: "karate-wkf" },
    { name: "Шахи", description: "Стратегічна гра", slug: "chess" },
    { name: "Муай Тай", description: "Тайський бокс", slug: "muaythai" },
    { name: "Дзюдо", description: "Японське бойове мистецтво", slug: "judo" },
    { name: "ММА", description: "Змішані бойові мистецтва", slug: "mma" },
    { name: "Бокс", description: "Класичний бокс", slug: "boxing" },
    { name: "Бразильське Дзю-Дзюцу", description: "Боротьба в партері", slug: "bjj" },
    { name: "Кікбоксинг", description: "Бокс з ударами ногами", slug: "kickboxing" },
    {
      name: "Функціональне та мотиваційне тренування",
      description: "Комплексне кондиційне тренування",
      slug: "functional-motivational-training",
    },
    { name: "Моторні навички (діти 5–7)", description: "Розвиток моторики у наймолодших", slug: "motor-skills-5-7" },
    {
      name: "Моторно-корекційне тренування (молодь 8–15)",
      description: "Корекція постави та розвиток моторики",
      slug: "motor-corrective-8-15",
    },
    {
      name: "Туристичний клуб",
      description: "Походи, орієнтування, виживання, навігація, табори",
      slug: "tourist-club",
    },
    {
      name: "Спортивно-освітні табори",
      description: "Комплексні табори для дітей та молоді",
      slug: "sports-educational-camps",
    },
    { name: "Спортивно-шахова ліга / турніри", description: "Змагання та турніри", slug: "sports-chess-league" },
  ],
  en: [
    { name: "Karate (WKF)", description: "Martial arts", slug: "karate-wkf" },
    { name: "Chess", description: "Strategic game", slug: "chess" },
    { name: "Muay Thai", description: "Thai boxing", slug: "muaythai" },
    { name: "Judo", description: "Japanese martial art", slug: "judo" },
    { name: "MMA", description: "Mixed martial arts", slug: "mma" },
    { name: "Boxing", description: "Classical boxing", slug: "boxing" },
    { name: "Brazilian Jiu-Jitsu", description: "Ground fighting", slug: "bjj" },
    { name: "Kickboxing", description: "Boxing with kicks", slug: "kickboxing" },
    {
      name: "Functional & motivational training",
      description: "Comprehensive conditioning training",
      slug: "functional-motivational-training",
    },
    { name: "Motor skills (children 5–7)", description: "Motor development for youngest", slug: "motor-skills-5-7" },
    {
      name: "Motor & corrective training (youth 8–15)",
      description: "Posture correction and motor development",
      slug: "motor-corrective-8-15",
    },
    { name: "Tourist club", description: "Hiking, orientation, survival, navigation, camps", slug: "tourist-club" },
    {
      name: "Sports & educational camps",
      description: "Comprehensive camps for children and youth",
      slug: "sports-educational-camps",
    },
    {
      name: "Sports & chess league / tournaments",
      description: "Competitions and tournaments",
      slug: "sports-chess-league",
    },
  ],
  by: [
    { name: "Каратэ (WKF)", description: "Баявыя мастацтвы", slug: "karate-wkf" },
    { name: "Шахматы", description: "Стратэгічная гульня", slug: "chess" },
    { name: "Муай Тай", description: "Тайскі бокс", slug: "muaythai" },
    { name: "Дзюдо", description: "Японскае баявое мастацтва", slug: "judo" },
    { name: "ММА", description: "Змешаныя баявыя мастацтвы", slug: "mma" },
    { name: "Бокс", description: "Класічны бокс", slug: "boxing" },
    { name: "Бразільскае Дзю-Дзюцу", description: "Барацьба ў партэры", slug: "bjj" },
    { name: "Кікбоксінг", description: "Бокс з ударамі нагамі", slug: "kickboxing" },
    {
      name: "Функцыянальная і матывацыйная трэніроўка",
      description: "Комплекснае кандыцыйнае трэніроўка",
      slug: "functional-motivational-training",
    },
    { name: "Маторныя навыкі (дзеці 5–7)", description: "Развіццё маторыкі ў najмалодшых", slug: "motor-skills-5-7" },
    {
      name: "Маторна-карэкцыйная трэніроўка (моладзь 8–15)",
      description: "Карэкцыя паставы і развіццё маторыкі",
      slug: "motor-corrective-8-15",
    },
    { name: "Турысцкі клуб", description: "Паходы, арыентацыя, выжыванне, навігацыя, лагеры", slug: "tourist-club" },
    {
      name: "Спартыўна-адукацыйныя лагеры",
      description: "Комплексныя лагеры для дзяцей і моладзі",
      slug: "sports-educational-camps",
    },
    { name: "Спартыўна-шахматная ліга / турніры", description: "Спаборніцтвы і турніры", slug: "sports-chess-league" },
  ],
}

export default function HomePage() {
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
        <VideoBackground
          desktopToken="GaKXZ3b0Vmk"
          mobileToken="WblQx6xivHQ"
          overlayOpacity={0.15}
        />

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
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-8 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">VOLAT. Centrum Sportu i Edukacji</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed px-4">{t.activities.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {(activities.pl || []).slice(0, 8).map((activity, index) => (
              <div
                key={index}
                className="group bg-transparent backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-200 ease-out hover:shadow-2xl hover:shadow-red-500/10 flex flex-col h-full"
              >
                {/* Header Section - Fixed Height */}
                <div className="p-6 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300 break-words leading-tight min-h-[60px]">
                        {activity.name}
                      </h3>
                      <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300 font-primary min-h-[40px]">
                        {activity.description}
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

                {/* Buttons - Always Visible */}
                <div className="px-6 pb-4 flex flex-col space-y-3">
                  <Link
                    href={`/disciplines/${activity.slug}`}
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl text-center shadow-lg block"
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
                    className="w-full px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-accent font-medium rounded-xl text-center shadow-lg border border-gray-200 block"
                  >
                    {t.activities.bookNow}
                  </a>
                </div>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedActivities.has(index) ? "max-h-96 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 pt-4 pb-6 border-t border-white/20">
                    <div className="pt-4 space-y-4 flex flex-col">
                      <div className="text-white/80 text-sm">
                        <p>{(activity as any).detailedDescription || t.activities.expandedDescription.replace("{activity}", activity.name.toLowerCase())}</p>
                      </div>

                      {/* Информация о тренере */}
                      {(activity as any).trainer && (
                        <div 
                          className="bg-white/5 rounded-lg p-3 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group/trainer"
                          onClick={() => {
                            const trainerId = (activity as any).trainerId;
                            if (trainerId) {
                              router.push(`/coaches#${trainerId}`);
                            }
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></div>
                            <span className="text-red-400 text-xs font-accent font-semibold group-hover/trainer:text-red-300 transition-colors">Trener</span>
                          </div>
                          <p className="text-white text-sm font-primary group-hover/trainer:text-red-100 transition-colors">{(activity as any).trainer}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer currentLang={currentLang} />
    </div>
  )
}
