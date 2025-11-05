"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Dumbbell, Users, Target, Heart, Trophy, MapPin, BookOpen, TreePine, GraduationCap } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { lazy, Suspense } from "react"

const Footer = lazy(() => import("@/components/footer"))

const translations = {
  pl: {
    title: "O VOLAT",
    subtitle: "VOLAT to centrum sportu i edukacji, które łączy tradycję z nowoczesnością. Oferujemy kompleksowe szkolenia w różnych dyscyplinach sportowych oraz programy edukacyjne dla wszystkich grup wiekowych.",
    mission: "Nasza misja to rozwijanie potencjału każdego uczestnika poprzez sport, edukację i budowanie charakteru.",
    history: "Historia Klubu",
    historyDescription: "Klub \"Volat\" został założony w 2012 roku w Mińsku i szybko stał się jednym z czołowych ośrodków sportów walki na Białorusi. Przez lata działalności przygotował ponad 20 mistrzów i zwycięzców mistrzostw Białorusi, 5 mistrzów sportu, medalistę Mistrzostw Świata 2017 w karate oraz wielu zwycięzców międzynarodowych i krajowych turniejów w karate, wushu sanda, pankrationie i walce wręcz.",
    history2022: "W 2022 roku klub został zlikwidowany przez reżim łukaszenki, ale to nie powstrzymało naszej misji.",
    history2023: "Już w 2023 roku \"Volat\" wznowił działalność w Warszawie i rozwinął się w sportowo-edukacyjne centrum.",
    today: "Centrum multidyscyplinarne",
    todayDescription: "Ponad 500 aktywnych uczestników",
    values: "Nasze Wartości",
    community: "Społeczność",
    communityDesc: "Budujemy silną społeczność opartą na wzajemnym szacunku i wsparciu",
    excellence: "Doskonałość",
    excellenceDesc: "Dążymy do najwyższych standardów w każdym aspekcie naszej działalności",
    passion: "Pasja",
    passionDesc: "Nasza pasja do sportu i edukacji jest motorem naszego działania",
    missionTitle: "Nasza Misja",
    missionText: "W VOLAT wierzymy, że sport to nie tylko aktywność fizyczna, ale także narzędzie do budowania charakteru, dyscypliny i pewności siebie. Naszym celem jest stworzenie przestrzeni, gdzie każdy może rozwijać swój potencjał w przyjaznej i profesjonalnej atmosferze.",
    forChildren: "Dla Dzieci i Młodzieży",
    forChildrenDesc: "Rozwijamy umiejętności społeczne, budujemy pewność siebie i uczymy szacunku poprzez sport",
    forAdults: "Dla Dorosłych",
    forAdultsDesc: "Oferujemy przestrzeń do rozwoju osobistego, poprawy kondycji i nauki nowych umiejętności",
    achievements: "Nasze osiągnięcia 2024/2025",
    achievementsSubtitle: "Karate, Szachy, Obozy Sportowe",
    achievement1: "Udział w 13 międzynarodowych i ogólnopolskich turniejach karate, zdobywając: 🥇 złoto – 6, 🥈 srebro – 6, 🥉 brąz – 11",
    achievement2: "Organizacja 5 wewnątrzklubowych turniejów karate",
    achievement3: "Przeprowadzenie 5 etapów testów sprawności fizycznej dla dzieci i dorosłych",
    achievement4: "Organizacja 10 turnusów obozów sportowych (zimowych i letnich, miejskich i wyjazdowych), w tym tygodniowy camp karate",
    achievement5: "Przeprowadzenie 12 etapów własnej ligi \"Szachowy Volat\"",
    achievement6: "Ponad 10 wydarzeń integracyjnych i sportowych – również poza klubem, we współpracy z dzielnicą Mokotów, szkołą nr 127 na Pradze Północ i innymi partnerami",
    achievement7: "Członkostwo w: Polskim Związku Szachowym, Polskim Związku Karate oraz Mazowieckim Związku Karate",
    achievement8: "Najlepsi zawodnicy klubu otrzymują miesięczne stypendia sportowe",
    achievement9: "Uczniowie szkoły szachowej zdobywają kolejne kategorie szachowe i biorą udział w turniejach",
    memberships: "Jesteśmy członkami",
    membershipsSubtitle: "Polskiej Unii Karate, Mazowieckiego Związku Karate oraz Polskiego Związku Szachowego",
    additionalActivity: "Inna działalność",
    additionalActivityDesc: "Oprócz treningów organizujemy obozy miejskie i wyjazdowe, łączące sport, aktywny wypoczynek i edukację. Tworzymy również możliwości rywalizacji dla naszych szachistów - prowadzimy ligę szachową \"Szachowy Volat\", która cieszy się rosnącą liczbą uczestników.",
    touristClub: "Klub Turystyczny",
    touristClubDesc: "Dla wszystkich miłośników podróży w naszym klubie działa Klub Turystyczny, który łączy dzieci, młodzież i dorosłych. Organizujemy ciekawe wyprawy, wycieczki, spacery oraz sportowo-edukacyjne wydarzenia na świeżym powietrzu.",
    branches: "Nasze oddziały w Warszawie",
    mokotow: "Malawskiego, 6 (Mokotów)",
    praga: "Kowieńska, 12/20 (Praga Północ)",
    motto: "\"Volat\" to nie tylko klub - to społeczność silnych ludzi, którzy wybierają rozwój, dyscyplinę i zwycięstwo!",
    founded: "Założenie w Mińsku",
    foundedDesc: "Pierwsze kroki w świecie sztuk walki",
    warsaw: "Otwarcie w Warszawie",
    warsawDesc: "Ekspansja na polski rynek",
  },
  uk: {
    title: "Про VOLAT",
    subtitle: "VOLAT - це центр спорту та освіти, який поєднує традиції з сучасністю. Ми пропонуємо комплексне навчання з різних спортивних дисциплін та освітні програми для всіх вікових груп.",
    mission: "Наша місія - розвиток потенціалу кожного учасника через спорт, освіту та формування характеру.",
    history: "Історія клубу",
    historyDescription: "Клуб \"Волят\" було засновано в 2012 році в Мінську і він швидко став одним з провідних центрів бойових мистецтв у Білорусі. За роки діяльності клуб підготував понад 20 чемпіонів та переможців чемпіонатів Білорусі, 5 майстрів спорту, медаліста Чемпіонату світу 2017 року з карате та багатьох переможців міжнародних та країнських турнірів з карате, вушу-санда, панкратіону та рукопашного бою.",
    history2022: "У 2022 році клуб було ліквідовано режимом Лукашенка, але це не зупинило нашу місію.",
    history2023: "Вже в 2023 році \"Волят\" відновив діяльність у Варшаві і розвинувся в спортивно-освітній центр.",
    today: "Мультидисциплінарний центр",
    todayDescription: "Понад 500 активних учасників",
    values: "Наші цінності",
    community: "Спільнота",
    communityDesc: "Ми створюємо міцну спільноту, засновану на взаємній повазі та підтримці",
    excellence: "Досконалість",
    excellenceDesc: "Ми прагнемо до найвищих стандартів у кожному аспекті нашої діяльності",
    passion: "Пристрасть",
    passionDesc: "Наша пристрасть до спорту та освіти є рушійною силою нашої діяльності",
    missionTitle: "Наша місія",
    missionText: "У VOLAT ми віримо, що спорт - це не лише фізична активність, але й інструмент для формування характеру, дисципліни та впевненості в собі. Наша мета - створити простір, де кожен може розвивати свій потенціал у дружній та професійній атмосфері.",
    forChildren: "Для дітей та молоді",
    forChildrenDesc: "Ми розвиваємо соціальні навички, формуємо впевненість у собі та вчимо поваги через спорт",
    forAdults: "Для дорослих",
    forAdultsDesc: "Ми пропонуємо простір для особистісного розвитку, покращення фізичної форми та навчання нових навичок",
    achievements: "Наші досягнення 2024/2025",
    achievementsSubtitle: "Карате, Шахи, Спортивні табори",
    achievement1: "Участь у 13 міжнародних та загальнодержавних турнірах з карате, завоювавши: 🥇 золото – 6, 🥈 срібло – 6, 🥉 бронза – 11",
    achievement2: "Організація 5 внутрішньоклубних турнірів з карате",
    achievement3: "Проведення 5 етапів тестів фізичної підготовки для дітей та дорослих",
    achievement4: "Організація 10 змін спортивних таборів (зимових та літніх, міських та виїзних), включаючи тижневий камп з карате",
    achievement5: "Проведення 12 етапів власної ліги \"Шаховий Волят\"",
    achievement6: "Понад 10 інтеграційних та спортивних подій - також поза клубом, у співпраці з районом Мокотув, школою №127 на Празі Північній та іншими партнерами",
    achievement7: "Членство в: Польському шаховому союзі, Польському союзі карате та Мазовецькому союзі карате",
    achievement8: "Найкращі спортсмени клубу отримують щомісячні спортивні стипендії",
    achievement9: "Учні шахової школи отримують нові шахові категорії та беруть участь у турнірах",
    memberships: "Ми є членами",
    membershipsSubtitle: "Польської спілки карате, Мазовецького союзу карате та Польського шахового союзу",
    additionalActivity: "Інша діяльність",
    additionalActivityDesc: "Окрім тренувань, ми організуємо міські та виїзні табори, що поєднують спорт, активний відпочинок та освіту. Ми також створюємо можливості для змагань наших шахістів - ведемо шахову лігу \"Шаховий Волят\", яка набирає все більше учасників.",
    touristClub: "Туристичний клуб",
    touristClubDesc: "Для всіх любителів подорожей у нашому клубі працює Туристичний клуб, який об'єднує дітей, молодь та дорослих. Ми організуємо цікаві походи, екскурсії, прогулянки та спортивно-освітні події на свіжому повітрі.",
    branches: "Наші філії у Варшаві",
    mokotow: "Малавського, 6 (Мокотув)",
    praga: "Ковенська, 12/20 (Прага Північна)",
    motto: "\"Волят\" - це не лише клуб - це спільнота сильних людей, які обирають розвиток, дисципліну та перемогу!",
    founded: "Заснування в Мінську",
    foundedDesc: "Перші кроки у світі бойових мистецтв",
    warsaw: "Відкриття у Варшаві",
    warsawDesc: "Експансія на польський ринок",
  },
  en: {
    title: "About VOLAT",
    subtitle: "VOLAT is a sports and education center that combines tradition with modernity. We offer comprehensive training in various sports disciplines and educational programs for all age groups.",
    mission: "Our mission is to develop the potential of each participant through sport, education and character building.",
    history: "Club History",
    historyDescription: "The Volat club was founded in 2012 in Minsk and quickly became one of the leading martial arts centers in Belarus. Over the years, it has trained over 20 champions and winners of Belarusian championships, 5 masters of sports, a medalist of the 2017 World Karate Championships, and many winners of international and national tournaments in karate, wushu sanda, pankration and hand-to-hand combat.",
    history2022: "In 2022, the club was liquidated by the Lukashenko regime, but this did not stop our mission.",
    history2023: "Already in 2023, Volat resumed operations in Warsaw and developed into a sports and education center.",
    today: "Multidisciplinary center",
    todayDescription: "Over 500 active participants",
    values: "Our Values",
    community: "Community",
    communityDesc: "We build a strong community based on mutual respect and support",
    excellence: "Excellence",
    excellenceDesc: "We strive for the highest standards in every aspect of our activities",
    passion: "Passion",
    passionDesc: "Our passion for sports and education is the driving force of our activities",
    missionTitle: "Our Mission",
    missionText: "At VOLAT, we believe that sport is not only physical activity, but also a tool for building character, discipline and self-confidence. Our goal is to create a space where everyone can develop their potential in a friendly and professional atmosphere.",
    forChildren: "For Children and Youth",
    forChildrenDesc: "We develop social skills, build self-confidence and teach respect through sport",
    forAdults: "For Adults",
    forAdultsDesc: "We offer a space for personal development, fitness improvement and learning new skills",
    achievements: "Our Achievements 2024/2025",
    achievementsSubtitle: "Karate, Chess, Sports Camps",
    achievement1: "Participation in 13 international and national karate tournaments, winning: 🥇 gold – 6, 🥈 silver – 6, 🥉 bronze – 11",
    achievement2: "Organization of 5 intra-club karate tournaments",
    achievement3: "Conducting 5 stages of physical fitness tests for children and adults",
    achievement4: "Organization of 10 sessions of sports camps (winter and summer, urban and away), including a week-long karate camp",
    achievement5: "Conducting 12 stages of our own 'Chess Volat' league",
    achievement6: "Over 10 integration and sports events - also outside the club, in cooperation with the Mokotów district, school No. 127 in Praga Północ and other partners",
    achievement7: "Membership in: Polish Chess Union, Polish Karate Union and Mazovian Karate Union",
    achievement8: "The best club athletes receive monthly sports scholarships",
    achievement9: "Chess school students earn new chess categories and participate in tournaments",
    memberships: "We are members of",
    membershipsSubtitle: "Polish Karate Union, Mazovian Karate Union and Polish Chess Union",
    additionalActivity: "Other Activities",
    additionalActivityDesc: "In addition to training, we organize urban and away camps that combine sport, active recreation and education. We also create competition opportunities for our chess players - we run the 'Chess Volat' league, which is gaining more and more participants.",
    touristClub: "Tourist Club",
    touristClubDesc: "For all travel lovers in our club, there is a Tourist Club that brings together children, youth and adults. We organize interesting trips, excursions, walks and sports and educational events in the fresh air.",
    branches: "Our branches in Warsaw",
    mokotow: "Malawskiego, 6 (Mokotów)",
    praga: "Kowieńska, 12/20 (Praga Północ)",
    motto: "\"Volat\" is not just a club - it is a community of strong people who choose development, discipline and victory!",
    founded: "Founded in Minsk",
    foundedDesc: "First steps in the world of martial arts",
    warsaw: "Opening in Warsaw",
    warsawDesc: "Expansion to the Polish market",
  },
  by: {
    title: "Пра VOLAT",
    subtitle: "VOLAT - гэта цэнтр спорту і адукацыі, які аб'ядноўвае традыцыі з сучаснасцю. Мы прапануем комплекснае навучанне па розных спартыўных дысцыплінах і адукацыйныя праграмы для ўсіх узроставых груп.",
    mission: "Наша місія - развіццё патэнцыялу кожнага ўдзельніка праз спорт, адукацыю і фарміраванне характару.",
    history: "Гісторыя клуба",
    historyDescription: "Клуб \"Волят\" быў заснаваны ў 2012 годзе ў Мінску і хутка стаў адным з вядучых цэнтраў баявых мастацтваў у Беларусі. За гады дзейнасці клуб падрыхтаваў больш за 20 чэмпіёнаў і пераможцаў чэмпіянатаў Беларусі, 5 майстроў спорту, медаліста Чэмпіянату свету 2017 года па каратэ і шматлікіх пераможцаў міжнародных і краёвых турніраў па каратэ, вушу-санда, панкратыёне і рукапашнаму бою.",
    history2022: "У 2022 годзе клуб быў ліквідаваны рэжымам Лукашэнкі, але гэта не спыніла нашу місію.",
    history2023: "Ужо ў 2023 годзе \"Волят\" аднавіў дзейнасць у Варшаве і развіўся ў спартыўна-адукацыйны цэнтр.",
    today: "Мультыдысцыплінарны цэнтр",
    todayDescription: "Больш за 500 актыўных удзельнікаў",
    values: "Нашы каштоўнасці",
    community: "Супольнасць",
    communityDesc: "Мы ствараем моцную супольнасць, заснаваную на ўзаемнай павазе і падтрымцы",
    excellence: "Дасканаласць",
    excellenceDesc: "Мы імкнемся да найвышэйшых стандартаў у кожным аспекце нашай дзейнасці",
    passion: "Запал",
    passionDesc: "Наш запал да спорту і адукацыі з'яўляецца рухаючай сілай нашай дзейнасці",
    missionTitle: "Наша місія",
    missionText: "У VOLAT мы верым, што спорт - гэта не толькі фізічная актыўнасць, але і інструмент для фарміравання характару, дысцыпліны і ўпэўненасці ў сабе. Наша мэта - стварыць прастору, дзе кожны можа развіваць свой патэнцыял у сяброўскай і прафесійнай атмасферы.",
    forChildren: "Для дзяцей і моладзі",
    forChildrenDesc: "Мы развіваем сацыяльныя навыкі, фарміруем упэўненасць у сабе і вучым павагі праз спорт",
    forAdults: "Для дарослых",
    forAdultsDesc: "Мы прапануем прастору для асабістага развіцця, паляпшэння фізічнай формы і навучання новых навыкаў",
    achievements: "Нашы дасягненні 2024/2025",
    achievementsSubtitle: "Каратэ, Шахматы, Спартыўныя лагеры",
    achievement1: "Удзел у 13 міжнародных і агульнадзяржаўных турнірах па каратэ, заваяваўшы: 🥇 золата – 6, 🥈 срэбра – 6, 🥉 бронза – 11",
    achievement2: "Арганізацыя 5 унутраклубных турніраў па каратэ",
    achievement3: "Правядзенне 5 этапаў тэстаў фізічнай падрыхтоўкі для дзяцей і дарослых",
    achievement4: "Арганізацыя 10 змен спартыўных лагераў (зімовых і летніх, гарадскіх і выезных), уключаючы тыднёвы камп па каратэ",
    achievement5: "Правядзенне 12 этапаў уласнай лігі \"Шахматы Волят\"",
    achievement6: "Больш за 10 інтэграцыйных і спартыўных мерапрыемстваў - таксама па-за клубам, у супрацоўніцтве з раёнам Мокотув, школай №127 на Празе Паўночнай і іншымі партнёрамі",
    achievement7: "Членства ў: Польскім шахматным саюзе, Польскім саюзе каратэ і Мазавецкім саюзе каратэ",
    achievement8: "Найлепшыя спартсмены клуба атрымліваюць штомесячныя спартыўныя стыпендыі",
    achievement9: "Вучні шахматнай школы атрымліваюць новыя шахматныя катэгорыі і ўдзельнічаюць у турнірах",
    memberships: "Мы з'яўляемся членамі",
    membershipsSubtitle: "Польскага саюза каратэ, Мазавецкага саюза каратэ і Польскага шахматнага саюза",
    additionalActivity: "Іншая дзейнасць",
    additionalActivityDesc: "Акрамя трэніровак, мы арганізуем гарадскія і выезныя лагеры, якія аб'ядноўваюць спорт, актыўны адпачынак і адукацыю. Мы таксама ствараем магчымасці для спаборніцтваў нашых шахматыстаў - вядзем шахматную лігу \"Шахматы Волят\", якая набірае ўсё больш удзельнікаў.",
    touristClub: "Турыстычны клуб",
    touristClubDesc: "Для ўсіх аматараў падарожжаў у нашым клубе працуе Турыстычны клуб, які аб'ядноўвае дзяцей, моладзь і дарослых. Мы арганізуем цікавыя паходы, экскурсіі, прагулкі і спартыўна-адукацыйныя мерапрыемствы на свежым паветры.",
    branches: "Нашы філіялы ў Варшаве",
    mokotow: "Малавскага, 6 (Мокотув)",
    praga: "Кавенска, 12/20 (Прага Паўночная)",
    motto: "\"Волят\" - гэта не толькі клуб - гэта супольнасць моцных людзей, якія выбіраюць развіццё, дысцыпліну і перамогу!",
    founded: "Заснаванне ў Мінску",
    foundedDesc: "Першыя крокі ў свеце баявых мастацтваў",
    warsaw: "Адкрыццё ў Варшаве",
    warsawDesc: "Экспансія на польскі рынак",
  },
}

export default function AboutPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight">
              {t.title}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-300 font-serif leading-relaxed px-4 font-light mb-8">
                {t.subtitle}
              </p>
              <p className="text-lg text-gray-400 font-serif leading-relaxed px-4 font-light">
                {t.mission}
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto mb-20">
            <Card className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group backdrop-blur-md">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-2xl">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <CardTitle className="font-sans text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent font-bold">
                  2012
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-gray-300 text-lg sm:text-xl font-light mb-2">{t.founded}</p>
                <p className="font-serif text-gray-400 text-sm font-light">{t.foundedDesc}</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group backdrop-blur-md">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-black to-gray-800 border-3 border-red-400 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-2xl">
                  <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-red-400" />
                </div>
                <CardTitle className="font-sans text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent font-bold">
                  2023
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-gray-300 text-lg sm:text-xl font-light mb-2">{t.warsaw}</p>
                <p className="font-serif text-gray-400 text-sm font-light">{t.warsawDesc}</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-300 group backdrop-blur-md">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-2xl">
                  <Dumbbell className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <CardTitle className="font-sans text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent font-bold">
                  {currentLang === 'pl' ? 'Dziś' : currentLang === 'uk' ? 'Сьогодні' : currentLang === 'en' ? 'Today' : 'Сёння'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-gray-300 text-lg sm:text-xl font-light mb-2">
                  {t.today}
                </p>
                <p className="font-serif text-gray-400 text-sm font-light">{t.todayDescription}</p>
              </CardContent>
            </Card>
          </div>

          {/* History Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent text-center mb-8">
              {t.history}
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-lg border border-white/10">
              <p className="text-lg sm:text-xl text-gray-300 font-serif leading-relaxed mb-6">
                {t.historyDescription}
              </p>
              <p className="text-lg sm:text-xl text-red-400 font-serif leading-relaxed mb-4 font-semibold">
                {t.history2022}
              </p>
              <p className="text-lg sm:text-xl text-gray-300 font-serif leading-relaxed">
                {t.history2023}
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent text-center mb-16">
              {t.values}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4">{t.community}</h3>
                <p className="text-gray-400 font-serif leading-relaxed">
                  {t.communityDesc}
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4">{t.excellence}</h3>
                <p className="text-gray-400 font-serif leading-relaxed">
                  {t.excellenceDesc}
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4">{t.passion}</h3>
                <p className="text-gray-400 font-serif leading-relaxed">
                  {t.passionDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent text-center mb-4">
              {t.achievements}
            </h2>
            <p className="text-xl text-gray-400 text-center mb-12 font-serif">
              {t.achievementsSubtitle}
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement1}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement2}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement3}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement4}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement5}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement6}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement7}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement8}</p>
                </div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 md:col-span-2">
                <div className="flex items-start space-x-4">
                  <Trophy className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 font-serif leading-relaxed">{t.achievement9}</p>
                </div>
              </div>
            </div>

            {/* Memberships */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-red-400/20 mb-12">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white text-center mb-4">
                {t.memberships}
              </h3>
              <p className="text-lg text-gray-300 text-center font-serif">
                {t.membershipsSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-8">{t.missionTitle}</h2>
            <p className="text-xl text-gray-300 font-serif leading-relaxed mb-8">
              {t.missionText}
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-sans font-bold text-white mb-4">{t.forChildren}</h3>
                <p className="text-gray-300 font-serif leading-relaxed">
                  {t.forChildrenDesc}
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-sans font-bold text-white mb-4">{t.forAdults}</h3>
                <p className="text-gray-300 font-serif leading-relaxed">
                  {t.forAdultsDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Activities Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent text-center mb-8">
              {t.additionalActivity}
            </h2>
            <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10 mb-8">
              <p className="text-lg text-gray-300 font-serif leading-relaxed mb-6">
                {t.additionalActivityDesc}
              </p>
              <div className="flex items-start space-x-4 mt-6">
                <TreePine className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-sans font-bold text-white mb-2">{t.touristClub}</h3>
                  <p className="text-gray-300 font-serif leading-relaxed">
                    {t.touristClubDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Branches */}
            <div className="bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-red-400/20">
              <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white text-center mb-6">
                {t.branches}
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4 bg-gray-900/50 p-6 rounded-xl">
                  <MapPin className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-gray-300 font-serif">{t.mokotow}</p>
                </div>
                <div className="flex items-center space-x-4 bg-gray-900/50 p-6 rounded-xl">
                  <MapPin className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <p className="text-gray-300 font-serif">{t.praga}</p>
                </div>
              </div>
              <p className="text-xl text-red-400 text-center mt-8 font-serif font-semibold">
                {t.motto}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Suspense fallback={<div className="h-64 bg-black" />}>
        <Footer />
      </Suspense>
    </div>
  )
}
