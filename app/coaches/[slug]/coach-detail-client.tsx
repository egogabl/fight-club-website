"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, GraduationCap, Trophy } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { useState, useMemo } from "react"
import FAQAccordion from "@/components/faq-accordion"

interface Coach {
  name: string
  specialty: string
  experience: string
  description: string
  education: string
  achievements: string[]
  image: string
}

interface CoachDetailClientProps {
  coach: Coach | null
  slug: string
}

const coachTranslations: Record<string, Record<string, {
  specialty: string
  experience: string
  description: string
  education: string
  achievements: string[]
}>> = {
  "vital-rak": {
    pl: {
      specialty: "Główny trener klubu. Trener karate i treningu funkcjonalnego",
      experience: "30 lat w sporcie, 23 lata doświadczenia trenerskiego",
      description: "Główny trener klubu VOLAT. Mistrz Republiki Białorusi w karate WKF w 2015 roku. Wielokrotny laureat mistrzostw i pucharów Republiki Białorusi w karate WKF. Brązowy laureat Pucharu Europy w Karate Shotokan wersji NSKF 2012 roku w wadze absolutnej. Mistrz miasta Mińsk w karate WKF 2014 i 2015 roku. Przygotował ponad 25 mistrzów i zwycięzców mistrzostwa Białorusi, 5 mistrzów sportu, medalistę Mistrzostw Świata 2017 roku w karate oraz wielu zwycięzców międzynarodowych i krajowych turniejów w karate, wushu sanda, pankrationie i walce wręcz.",
      education: "Białoruski Pedagogiczny Uniwersytet Państwowy im. Maksyma Tanka (2006), specjalność \"Biologia i waleologia\", dyplom z wyróżnieniem; Białoruski Uniwersytet Kultury Fizycznej i Sportu (2009), specjalizacja trener karate, dyplom z wyróżnieniem",
      achievements: [
        "Mistrz Republiki Białorusi w karate WKF w 2015 roku",
        "Mistrz miasta Mińsk w karate WKF 2014 i 2015 roku",
        "Brązowy laureat Pucharu Europy w Karate Shotokan wersji NSKF 2012 roku w wadze absolutnej",
        "Wielokrotny laureat mistrzostw i pucharów Republiki Białorusi w karate WKF",
        "Przygotował ponad 25 mistrzów i zwycięzców mistrzostwa Białorusi",
        "Przygotował 5 mistrzów sportu",
        "Przygotował medalistę Mistrzostw Świata 2017 roku w karate",
        "Przygotował wielu zwycięzców międzynarodowych i krajowych turniejów w karate, wushu sanda, pankrationie i walce wręcz"
      ]
    },
    uk: {
      specialty: "Головний тренер клубу. Тренер карате та функціонального тренінгу",
      experience: "30 років у спорті, 23 роки тренерського досвіду",
      description: "Головний тренер клубу VOLAT. Чемпіон Республіки Білорусь з карате WKF у 2015 році. Багаторазовий лауреат чемпіонатів і кубків Республіки Білорусь з карате WKF. Бронзовий лауреат Кубка Європи з карате Сьотокан версії NSKF 2012 року в абсолютній вазі. Чемпіон міста Мінськ з карате WKF 2014 і 2015 року. Підготував понад 25 чемпіонів і переможців чемпіонату Білорусі, 5 майстрів спорту, медаліста Чемпіонату світу 2017 року з карате та багатьох переможців міжнародних і національних турнірів з карате, вушу санда, панкратіону та рукопашного бою.",
      education: "Білоруський Педагогічний Державний Університет ім. Максима Танка (2006), спеціальність \"Біологія і валіологія\", диплом з відзнакою; Білоруський Університет Фізичної Культури і Спорту (2009), спеціалізація тренер карате, диплом з відзнакою",
      achievements: [
        "Чемпіон Республіки Білорусь з карате WKF у 2015 році",
        "Чемпіон міста Мінськ з карате WKF 2014 і 2015 року",
        "Бронзовий лауреат Кубка Європи з карате Сьотокан версії NSKF 2012 року в абсолютній вазі",
        "Багаторазовий лауреат чемпіонатів і кубків Республіки Білорусь з карате WKF",
        "Підготував понад 25 чемпіонів і переможців чемпіонату Білорусі",
        "Підготував 5 майстрів спорту",
        "Підготував медаліста Чемпіонату світу 2017 року з карате",
        "Підготував багатьох переможців міжнародних і національних турнірів з карате, вушу санда, панкратіону та рукопашного бою"
      ]
    },
    en: {
      specialty: "Head coach of the club. Karate and functional training coach",
      experience: "30 years in sports, 23 years of coaching experience",
      description: "Head coach of VOLAT club. Champion of the Republic of Belarus in WKF karate in 2015. Multiple winner of championships and cups of the Republic of Belarus in WKF karate. Bronze winner of the European Cup in Shotokan Karate NSKF version 2012 in absolute weight. Champion of Minsk city in WKF karate 2014 and 2015. Prepared over 25 champions and winners of the Belarus championship, 5 masters of sports, medalist of the 2017 World Championship in karate, and many winners of international and national tournaments in karate, wushu sanda, pankration and hand-to-hand combat.",
      education: "Maxim Tank Belarusian State Pedagogical University (2006), specialty \"Biology and Valeology\", diploma with honors; Belarusian University of Physical Culture and Sports (2009), specialization karate coach, diploma with honors",
      achievements: [
        "Champion of the Republic of Belarus in WKF karate in 2015",
        "Champion of Minsk city in WKF karate 2014 and 2015",
        "Bronze winner of the European Cup in Shotokan Karate NSKF version 2012 in absolute weight",
        "Multiple winner of championships and cups of the Republic of Belarus in WKF karate",
        "Prepared over 25 champions and winners of the Belarus championship",
        "Prepared 5 masters of sports",
        "Prepared medalist of the 2017 World Championship in karate",
        "Prepared many winners of international and national tournaments in karate, wushu sanda, pankration and hand-to-hand combat"
      ]
    },
    by: {
      specialty: "Галоўны трэнер клуба. Трэнер каратэ і функцыянальных трэніровак",
      experience: "30 гадоў у спорце, 23 гады трэнерскага вопыту",
      description: "Галоўны трэнер клуба VOLAT. Чэмпіён Рэспублікі Беларусь па каратэ WKF у 2015 годзе. Шматразовы лаўрэат чэмпіянатаў і кубкаў Рэспублікі Беларусь па каратэ WKF. Бронзавы лаўрэат Кубка Еўропы па каратэ Сётакан версіі NSKF 2012 года ў абсалютнай вазе. Чэмпіён горада Мінск па каратэ WKF 2014 і 2015 года. Падрыхтаваў больш за 25 чэмпіёнаў і пераможцаў чэмпіянату Беларусі, 5 майстроў спорту, медаліста Чэмпіянату свету 2017 года па каратэ, а таксама многіх пераможцаў міжнародных і нацыянальных турніраў па каратэ, вушу санда, панкратыёне і рукапашным баі.",
      education: "Беларускі Педагагічны Дзяржаўны Універсітэт ім. Максіма Танка (2006), спецыяльнасць \"Біялогія і валеалогія\", дыплом з адзнакай; Беларускі Універсітэт Фізічнай Культуры і Спорту (2009), спецыялізацыя трэнер каратэ, дыплом з адзнакай",
      achievements: [
        "Чэмпіён Рэспублікі Беларусь па каратэ WKF у 2015 годзе",
        "Чэмпіён горада Мінск па каратэ WKF 2014 і 2015 года",
        "Бронзавы лаўрэат Кубка Еўропы па каратэ Сётакан версіі NSKF 2012 года ў абсалютнай вазе",
        "Шматразовы лаўрэат чэмпіянатаў і кубкаў Рэспублікі Беларусь па каратэ WKF",
        "Падрыхтаваў больш за 25 чэмпіёнаў і пераможцаў чэмпіянату Беларусі",
        "Падрыхтаваў 5 майстроў спорту",
        "Падрыхтаваў медаліста Чэмпіянату свету 2017 года па каратэ",
        "Падрыхтаваў многіх пераможцаў міжнародных і нацыянальных турніраў па каратэ, вушу санда, панкратыёне і рукапашным баі"
      ]
    }
  },
  "volha-yefimenka": {
    pl: {
      specialty: "Trenerka karate, treningu motorycznego dla przedszkolaków oraz dzieci 8–15 lat",
      experience: "Pracuje jako trener od 2007 roku",
      description: "Mistrz sportu karate (kumite, WKF) Republiki Białorusi. Przygotowała jednego mistrza sportu Republiki Białorusi. Przygotowała medalistę młodzieżowych mistrzostw Europy (2021, Finlandia). Przeszła szkolenie w zakresie ogólnego treningu fizycznego dla dzieci 4–6, 6–8, 8–9, 10–12 lat oraz szkolenie korekcyjne dla dzieci i młodzieży z problemami stóp, postawy i ruchomości stawów. Prowadzi treningi w filiach Volat Mokotów oraz Volat Praga.",
      education: "Wyższe wykształcenie (specjalizacja \"trener karate\")",
      achievements: [
        "Mistrz sportu karate (kumite, WKF) Republiki Białorusi",
        "Przygotowała jednego mistrza sportu Republiki Białorusi",
        "Przygotowała medalistę młodzieżowych mistrzostw Europy (2021, Finlandia)",
        "Szkolenie w zakresie ogólnego treningu fizycznego dla dzieci 4–6, 6–8, 8–9, 10–12 lat",
        "Szkolenie korekcyjne dla dzieci i młodzieży z problemami stóp, postawy i ruchomości stawów"
      ]
    },
    uk: {
      specialty: "Тренерка карате, моторичного тренінгу для дошкільнят та дітей 8–15 років",
      experience: "Працює як тренер з 2007 року",
      description: "Майстер спорту з карате (куміте, WKF) Республіки Білорусь. Підготувала одного майстра спорту Республіки Білорусь. Підготувала медаліста молодіжних чемпіонатів Європи (2021, Фінляндія). Пройшла навчання в галузі загального фізичного тренінгу для дітей 4–6, 6–8, 8–9, 10–12 років та корекційне навчання для дітей та молоді з проблемами стоп, постави та рухливості суглобів. Проводить тренування у філіях Volat Мокотув та Volat Прага.",
      education: "Вища освіта (спеціалізація \"тренер карате\")",
      achievements: [
        "Майстер спорту з карате (куміте, WKF) Республіки Білорусь",
        "Підготувала одного майстра спорту Республіки Білорусь",
        "Підготувала медаліста молодіжних чемпіонатів Європи (2021, Фінляндія)",
        "Навчання в галузі загального фізичного тренінгу для дітей 4–6, 6–8, 8–9, 10–12 років",
        "Корекційне навчання для дітей та молоді з проблемами стоп, постави та рухливості суглобів"
      ]
    },
    en: {
      specialty: "Karate coach, motor training for preschoolers and children 8–15 years old",
      experience: "Working as a coach since 2007",
      description: "Master of Sports in karate (kumite, WKF) of the Republic of Belarus. Prepared one master of sports of the Republic of Belarus. Prepared medalist of youth European championships (2021, Finland). Completed training in general physical training for children 4–6, 6–8, 8–9, 10–12 years old and corrective training for children and youth with foot, posture and joint mobility problems. Conducts training at Volat Mokotów and Volat Praga branches.",
      education: "Higher education (specialization \"karate coach\")",
      achievements: [
        "Master of Sports in karate (kumite, WKF) of the Republic of Belarus",
        "Prepared one master of sports of the Republic of Belarus",
        "Prepared medalist of youth European championships (2021, Finland)",
        "Training in general physical training for children 4–6, 6–8, 8–9, 10–12 years old",
        "Corrective training for children and youth with foot, posture and joint mobility problems"
      ]
    },
    by: {
      specialty: "Трэнерка каратэ, маторных трэніровак для дашкольнікаў і дзяцей 8–15 гадоў",
      experience: "Працуе як трэнер з 2007 года",
      description: "Майстар спорту па каратэ (кумітэ, WKF) Рэспублікі Беларусь. Падрыхтавала аднаго майстра спорту Рэспублікі Беларусь. Падрыхтавала медаліста моладзевых чэмпіянатаў Еўропы (2021, Фінляндыя). Прайшла навучанне ў галіне агульнай фізічнай падрыхтоўкі для дзяцей 4–6, 6–8, 8–9, 10–12 гадоў і карэкцыйнае навучанне для дзяцей і моладзі з праблемамі ступняў, паставы і рухомасці суставаў. Праводзіць трэніроўкі ў філіялах Volat Макотув і Volat Прага.",
      education: "Вышэйшая адукацыя (спецыялізацыя \"трэнер каратэ\")",
      achievements: [
        "Майстар спорту па каратэ (кумітэ, WKF) Рэспублікі Беларусь",
        "Падрыхтавала аднаго майстра спорту Рэспублікі Беларусь",
        "Падрыхтавала медаліста моладзевых чэмпіянатаў Еўропы (2021, Фінляндыя)",
        "Навучанне ў галіне агульнай фізічнай падрыхтоўкі для дзяцей 4–6, 6–8, 8–9, 10–12 гадоў",
        "Карэкцыйнае навучанне для дзяцей і моладзі з праблемамі ступняў, паставы і рухомасці суставаў"
      ]
    }
  },
  "daria-koba": {
    pl: {
      specialty: "Trenerka judo, treningu motorycznego dla przedszkolaków",
      experience: "Doświadczenie w pracy z dziećmi w wieku od 3 do 13 lat",
      description: "Instruktorka judo z bogatą historią sportową. Od 5. do 16. roku życia trenowała sambo pod okiem swojego ojca na Ukrainie, równocześnie startując w zawodach judo. Wielokrotna medalistka mistrzostw Ukrainy w sambo, 5. miejsce na Mistrzostwach Europy Kadetów, medalistka ogólnoukraińskich turniejów w judo.",
      education: "AWF w Warszawie, kierunek: wychowanie fizyczne, specjalizacja: judo (studia licencjackie)",
      achievements: [
        "Wielokrotna medalistka mistrzostw Ukrainy w sambo",
        "5. miejsce na Mistrzostwach Europy Kadetów w sambo",
        "Uczestniczka zgrupowań kadry narodowej",
        "Medalistka ogólnoukraińskich turniejów w judo",
        "Posiadaczka brązowego pasa w judo",
        "Doświadczenie w zapasach w stylu wolnym oraz brazylijskim jiu-jitsu"
      ]
    },
    uk: {
      specialty: "Тренерка дзюдо, моторичного тренінгу для дошкільнят",
      experience: "Досвід роботи з дітьми віком від 3 до 13 років",
      description: "Інструкторка дзюдо з багатою спортивною історією. Від 5 до 16 років тренувала самбо під керівництвом свого батька в Україні, одночасно виступаючи в змаганнях з дзюдо. Багаторазова медалістка чемпіонатів України з самбо, 5 місце на Чемпіонаті Європи серед кадетів, медалістка загальноукраїнських турнірів з дзюдо.",
      education: "AWF у Варшаві, напрямок: фізичне виховання, спеціалізація: дзюдо (бакалаврат)",
      achievements: [
        "Багаторазова медалістка чемпіонатів України з самбо",
        "5 місце на Чемпіонаті Європи серед кадетів з самбо",
        "Учасниця зборів національної збірної",
        "Медалістка загальноукраїнських турнірів з дзюдо",
        "Володарка бронзового поясу з дзюдо",
        "Досвід у вільній боротьбі та бразильському джіу-джитсу"
      ]
    },
    en: {
      specialty: "Judo coach, motor training for preschoolers",
      experience: "Experience working with children aged 3 to 13 years",
      description: "Judo instructor with a rich sports history. From 5 to 16 years old, trained sambo under her father's guidance in Ukraine, while competing in judo competitions. Multiple medalist of Ukrainian sambo championships, 5th place at the European Cadet Championships, medalist of all-Ukrainian judo tournaments.",
      education: "AWF in Warsaw, field: physical education, specialization: judo (bachelor's degree)",
      achievements: [
        "Multiple medalist of Ukrainian sambo championships",
        "5th place at the European Cadet Championships in sambo",
        "Participant in national team training camps",
        "Medalist of all-Ukrainian judo tournaments",
        "Holder of brown belt in judo",
        "Experience in freestyle wrestling and Brazilian jiu-jitsu"
      ]
    },
    by: {
      specialty: "Трэнерка дзюдо, маторных трэніровак для дашкольнікаў",
      experience: "Вопыт працы з дзецьмі ва ўзросце ад 3 да 13 гадоў",
      description: "Інструктарка дзюдо з багатай спартыўнай гісторыяй. Ад 5 да 16 гадоў трэніравала самба пад кіраўніцтвам свайго бацькі ва Украіне, адначасова выступаючы ў спаборніцтвах па дзюдо. Шматразовая медалістка чэмпіянатаў Украіны па самба, 5 месца на Чэмпіянаце Еўропы сярод кадэтаў, медалістка агульнаўкраінскіх турніраў па дзюдо.",
      education: "AWF у Варшаве, напрамак: фізічнае выхаванне, спецыялізацыя: дзюдо (бакалаўрыят)",
      achievements: [
        "Шматразовая медалістка чэмпіянатаў Украіны па самба",
        "5 месца на Чэмпіянаце Еўропы сярод кадэтаў па самба",
        "Удзельніца збораў нацыянальнай зборнай",
        "Медалістка агульнаўкраінскіх турніраў па дзюдо",
        "Уладальніца бронзавага пояса па дзюдо",
        "Вопыт у вольнай барацьбе і бразільскім джыу-джыцу"
      ]
    }
  },
  "mikola-taczylin": {
    pl: {
      specialty: "Trener Muay Thai dla dzieci, młodzieży i dorosłych",
      experience: "Ponad 15 lat praktyki trenerskiej",
      description: "Doświadczony trener kickboxingu i Muay Thai (boksu tajskiego). Przez wiele lat prowadził zajęcia w klubie „Patriot\" w Barysawie (Białoruś). Specjalizuje się w treningach w formule K1 oraz boksie tajskim (Muay Thai). Wychował wielu zawodników, którzy zdobywali tytuły mistrzów Białorusi, Europy i świata.",
      education: "Doświadczony trener z wieloletnią praktyką",
      achievements: [
        "Wieloletnia praktyka trenerska w klubie „Patriot\" w Barysawie",
        "Wychował wielu mistrzów Białorusi, Europy i świata",
        "Specjalizacja w formule K1 oraz boksie tajskim (Muay Thai)",
        "Wychował Dzmitry Filonchyk - wielokrotnego mistrza Białorusi, członka kadry narodowej",
        "Wychował Aliaksiej Wawreniuk - wielokrotnego mistrza Białorusi, zwycięzcę międzynarodowych zawodów"
      ]
    },
    uk: {
      specialty: "Тренер Муай Тай для дітей, молоді та дорослих",
      experience: "Понад 15 років тренерської практики",
      description: "Досвідчений тренер кікбоксингу та Муай Тай (тайського боксу). Багато років проводив заняття в клубі „Патріот\" в Борисові (Білорусь). Спеціалізується на тренуваннях у форматі K1 та тайському боксі (Муай Тай). Виховав багатьох спортсменів, які завойовували титули чемпіонів Білорусі, Європи та світу.",
      education: "Досвідчений тренер з багаторічною практикою",
      achievements: [
        "Багаторічна тренерська практика в клубі „Патріот\" в Борисові",
        "Виховав багатьох чемпіонів Білорусі, Європи та світу",
        "Спеціалізація у форматі K1 та тайському боксі (Муай Тай)",
        "Виховав Дзмітры Філончык - багаторазового чемпіона Білорусі, члена національної збірної",
        "Виховав Аляксей Ваўренюк - багаторазового чемпіона Білорусі, переможця міжнародних змагань"
      ]
    },
    en: {
      specialty: "Muay Thai coach for children, youth and adults",
      experience: "Over 15 years of coaching practice",
      description: "Experienced kickboxing and Muay Thai (Thai boxing) coach. For many years conducted classes at the \"Patriot\" club in Barysaw (Belarus). Specializes in K1 format training and Thai boxing (Muay Thai). Raised many athletes who won titles of champions of Belarus, Europe and the world.",
      education: "Experienced coach with years of practice",
      achievements: [
        "Years of coaching practice at the \"Patriot\" club in Barysaw",
        "Raised many champions of Belarus, Europe and the world",
        "Specialization in K1 format and Thai boxing (Muay Thai)",
        "Raised Dzmitry Filonchyk - multiple champion of Belarus, member of the national team",
        "Raised Aliaksiej Wawreniuk - multiple champion of Belarus, winner of international competitions"
      ]
    },
    by: {
      specialty: "Трэнер Муай Тай для дзяцей, моладзі і дарослых",
      experience: "Больш за 15 гадоў трэнерскай практыкі",
      description: "Вопытны трэнер кікбоксінгу і Муай Тай (тайскага боксу). Шмат гадоў праводзіў заняткі ў клубе „Патрыёт\" у Барысаве (Беларусь). Спецыялізуецца на трэніроўках у фармаце K1 і тайскім боксе (Муай Тай). Выхаваў многіх спартсменаў, якія заваёўвалі тытулы чэмпіёнаў Беларусі, Еўропы і свету.",
      education: "Вопытны трэнер з шматгадовай практыкай",
      achievements: [
        "Шматгадовая трэнерская практыка ў клубе „Патрыёт\" у Барысаве",
        "Выхаваў многіх чэмпіёнаў Беларусі, Еўропы і свету",
        "Спецыялізацыя ў фармаце K1 і тайскім боксе (Муай Тай)",
        "Выхаваў Дзмітры Філончык - шматразовага чэмпіёна Беларусі, члена нацыянальнай зборнай",
        "Выхаваў Аляксей Ваўренюк - шматразовага чэмпіёна Беларусі, пераможцу міжнародных спаборніцтваў"
      ]
    }
  },
  "pawel-szymkowicz": {
    pl: {
      specialty: "Trener MMA dla dzieci od 6 lat, młodzieży i dorosłych",
      experience: "Wieloletnie doświadczenie sportowe i kilkuletnia praktyka trenerska",
      description: "Absolwent Białoruskiego Państwowego Uniwersytetu Kultury Fizycznej, specjalizacja – działalność trenerska w zakresie sambo. Trener samoobrony i treningu funkcjonalnego. Na treningach łączy wiedzę akademicką z praktyką sportową, oferując skuteczne i bezpieczne metody pracy.",
      education: "Białoruski Państwowy Uniwersytet Kultury Fizycznej, specjalizacja – działalność trenerska w zakresie sambo",
      achievements: [
        "Absolwent Białoruskiego Państwowego Uniwersytetu Kultury Fizycznej",
        "Trener samoobrony i treningu funkcjonalnego",
        "Specjalizacja w zakresie sambo",
        "Indywidualne podejście do każdego zawodnika",
        "Rozwój sprawności i budowanie pewności siebie"
      ]
    },
    uk: {
      specialty: "Тренер ММА для дітей від 6 років, молоді та дорослих",
      experience: "Багаторічний спортивний досвід і кількарічна тренерська практика",
      description: "Випускник Білоруського Державного Університету Фізичної Культури, спеціалізація – тренерська діяльність у сфері самбо. Тренер самооборони та функціонального тренінгу. На тренуваннях поєднує академічні знання зі спортивною практикою, пропонуючи ефективні та безпечні методи роботи.",
      education: "Білоруський Державний Університет Фізичної Культури, спеціалізація – тренерська діяльність у сфері самбо",
      achievements: [
        "Випускник Білоруського Державного Університету Фізичної Культури",
        "Тренер самооборони та функціонального тренінгу",
        "Спеціалізація у сфері самбо",
        "Індивідуальний підхід до кожного спортсмена",
        "Розвиток спритності та впевненості в собі"
      ]
    },
    en: {
      specialty: "MMA coach for children from 6 years old, youth and adults",
      experience: "Years of sports experience and several years of coaching practice",
      description: "Graduate of the Belarusian State University of Physical Culture, specialization – coaching activities in sambo. Self-defense and functional training coach. In training, combines academic knowledge with sports practice, offering effective and safe working methods.",
      education: "Belarusian State University of Physical Culture, specialization – coaching activities in sambo",
      achievements: [
        "Graduate of the Belarusian State University of Physical Culture",
        "Self-defense and functional training coach",
        "Specialization in sambo",
        "Individual approach to each athlete",
        "Development of agility and building self-confidence"
      ]
    },
    by: {
      specialty: "Трэнер ММА для дзяцей ад 6 гадоў, моладзі і дарослых",
      experience: "Шматгадовы спартыўны вопыт і некалькігадовая трэнерская практыка",
      description: "Выпускнік Беларускага Дзяржаўнага Універсітэта Фізічнай Культуры, спецыялізацыя – трэнерская дзейнасць у сферы самба. Трэнер самаабароны і функцыянальных трэніровак. На трэніроўках аб'ядноўвае акадэмічныя веды са спартыўнай практыкай, прапаноўваючы эфектыўныя і бяспечныя метады працы.",
      education: "Беларускі Дзяржаўны Універсітэт Фізічнай Культуры, спецыялізацыя – трэнерская дзейнасць у сферы самба",
      achievements: [
        "Выпускнік Беларускага Дзяржаўнага Універсітэта Фізічнай Культуры",
        "Трэнер самаабароны і функцыянальных трэніровак",
        "Спецыялізацыя ў сферы самба",
        "Індывідуальны падыход да кожнага спартсмена",
        "Развіццё спрытнасці і будаванне ўпэўненасці ў сабе"
      ]
    }
  },
  "wiktor-muronczyk": {
    pl: {
      specialty: "Trener szkoły szachowej",
      experience: "2 lata doświadczenia w nauczaniu",
      description: "Młody trener szachowy z dużym doświadczeniem turniejowym. Wielokrotny zwycięzca w turniejach rapidu, blitza oraz szachów klasycznych. Uczeń Mistrza Międzynarodowego i wielokrotnego mistrza Polski. Swobodnie mówi w języku polskim oraz rosyjskim.",
      education: "Uczeń Mistrza Międzynarodowego i wielokrotnego mistrza Polski",
      achievements: [
        "Duże doświadczenie turniejowe w turniejach klasy międzynarodowej",
        "Wielokrotny zwycięzca w turniejach rapidu",
        "Wielokrotny zwycięzca w turniejach blitza",
        "Wielokrotny zwycięzca w turniejach szachów klasycznych",
        "Uczeń Mistrza Międzynarodowego i wielokrotnego mistrza Polski"
      ]
    },
    uk: {
      specialty: "Тренер шахової школи",
      experience: "2 роки досвіду в навчанні",
      description: "Молодий шаховий тренер з великим турнірним досвідом. Багаторазовий переможець у турнірах рапіду, бліцу та класичних шахів. Учень Міжнародного Майстра та багаторазового чемпіона Польщі. Вільно розмовляє польською та російською мовами.",
      education: "Учень Міжнародного Майстра та багаторазового чемпіона Польщі",
      achievements: [
        "Великий турнірний досвід у турнірах міжнародного класу",
        "Багаторазовий переможець у турнірах рапіду",
        "Багаторазовий переможець у турнірах бліцу",
        "Багаторазовий переможець у турнірах класичних шахів",
        "Учень Міжнародного Майстра та багаторазового чемпіона Польщі"
      ]
    },
    en: {
      specialty: "Chess school coach",
      experience: "2 years of teaching experience",
      description: "Young chess coach with extensive tournament experience. Multiple winner in rapid, blitz and classical chess tournaments. Student of International Master and multiple Polish champion. Fluent in Polish and Russian.",
      education: "Student of International Master and multiple Polish champion",
      achievements: [
        "Extensive tournament experience in international class tournaments",
        "Multiple winner in rapid tournaments",
        "Multiple winner in blitz tournaments",
        "Multiple winner in classical chess tournaments",
        "Student of International Master and multiple Polish champion"
      ]
    },
    by: {
      specialty: "Трэнер шахматнай школы",
      experience: "2 гады вопыту ў навучанні",
      description: "Малады шахматны трэнер з вялікім турнірным вопытам. Шматразовы пераможца ў турнірах рапіду, бліцу і класічных шахмат. Вучань Міжнароднага Майстра і шматразовага чэмпіёна Польшчы. Вольна размаўляе польскай і рускай мовамі.",
      education: "Вучань Міжнароднага Майстра і шматразовага чэмпіёна Польшчы",
      achievements: [
        "Вялікі турнірны вопыт у турнірах міжнароднага класу",
        "Шматразовы пераможца ў турнірах рапіду",
        "Шматразовы пераможца ў турнірах бліцу",
        "Шматразовы пераможца ў турнірах класічных шахмат",
        "Вучань Міжнароднага Майстра і шматразовага чэмпіёна Польшчы"
      ]
    }
  }
}

const translations = {
  pl: {
    backToCoaches: "Powrót do trenerów",
    specialty: "Specjalizacja",
    experience: "Doświadczenie",
    education: "Wykształcenie",
    achievements: "Osiągnięcia",
    bookNow: "Zapisz się na zajęcia",
    viewSchedule: "Zobacz grafik",
    faqTitle: "Często zadawane pytania",
    faq: [
      {
        question: "Jakie doświadczenie ma trener?",
        answer: "Każdy z naszych trenerów posiada wieloletnie doświadczenie w swojej dziedzinie oraz odpowiednie wykształcenie i certyfikaty."
      },
      {
        question: "Dla jakich grup wiekowych prowadzone są zajęcia?",
        answer: "Oferujemy zajęcia dla wszystkich grup wiekowych - od przedszkolaków po dorosłych. Każdy trener specjalizuje się w pracy z określonymi grupami wiekowymi."
      },
      {
        question: "Jakie osiągnięcia mają nasi trenerzy?",
        answer: "Wśród naszych trenerów są mistrzowie sportu, wielokrotni zwycięzcy mistrzostw i turniejów, a także doświadczeni instruktorzy z międzynarodowymi certyfikatami i wieloletnim doświadczeniem."
      },
      {
        question: "Gdzie prowadzone są zajęcia?",
        answer: "Zajęcia prowadzone są w naszych filiach w Warszawie - Mokotów i Praga Północ. Szczegóły dotyczące lokalizacji znajdziesz w rozkładzie zajęć."
      }
    ]
  },
  uk: {
    backToCoaches: "Повернутися до тренерів",
    specialty: "Спеціалізація",
    experience: "Досвід",
    education: "Освіта",
    achievements: "Досягнення",
    bookNow: "Записатися на заняття",
    viewSchedule: "Переглянути розклад",
    faqTitle: "Часто задавані питання",
    faq: [
      {
        question: "Який досвід має тренер?",
        answer: "Кожен з наших тренерів має багаторічний досвід у своїй галузі та відповідну освіту та сертифікати."
      },
      {
        question: "Для яких вікових груп проводяться заняття?",
        answer: "Ми пропонуємо заняття для всіх вікових груп - від дошкільнят до дорослих. Кожен тренер спеціалізується на роботі з певними віковими групами."
      },
      {
        question: "Які досягнення мають наші тренери?",
        answer: "Серед наших тренерів є майстри спорту, багаторазові переможці чемпіонатів і турнірів, а також досвідчені інструктори з міжнародними сертифікатами та багаторічним досвідом."
      },
      {
        question: "Де проводяться заняття?",
        answer: "Заняття проводяться в наших філіях у Варшаві - Мокотув та Прага Північна. Деталі щодо локації ви знайдете в розкладі занять."
      }
    ]
  },
  en: {
    backToCoaches: "Back to coaches",
    specialty: "Specialty",
    experience: "Experience",
    education: "Education",
    achievements: "Achievements",
    bookNow: "Book now",
    viewSchedule: "View schedule",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        question: "What experience does the coach have?",
        answer: "Each of our coaches has years of experience in their field and appropriate education and certificates."
      },
      {
        question: "For which age groups are classes conducted?",
        answer: "We offer classes for all age groups - from preschoolers to adults. Each coach specializes in working with specific age groups."
      },
      {
        question: "What achievements do our coaches have?",
        answer: "Among our coaches are masters of sports, multiple winners of championships and tournaments, as well as experienced instructors with international certificates and years of experience."
      },
      {
        question: "Where are classes conducted?",
        answer: "Classes are conducted at our branches in Warsaw - Mokotów and Praga Północ. Details about the location can be found in the class schedule."
      }
    ]
  },
  by: {
    backToCoaches: "Вярнуцца да трэнераў",
    specialty: "Спецыялізацыя",
    experience: "Вопыт",
    education: "Адукацыя",
    achievements: "Дасягненні",
    bookNow: "Запісацца на заняткі",
    viewSchedule: "Паглядзець расклад",
    faqTitle: "Часта задаваныя пытанні",
    faq: [
      {
        question: "Які вопыт мае трэнер?",
        answer: "Кожны з нашых трэнераў мае шматгадовы вопыт у сваёй галіне і адпаведную адукацыю і сертыфікаты."
      },
      {
        question: "Для якіх узроставых груп праводзяцца заняткі?",
        answer: "Мы прапануем заняткі для ўсіх узроставых груп - ад дашкольнікаў да дарослых. Кожны трэнер спецыялізуецца на працы з пэўнымі узроставымі групамі."
      },
      {
        question: "Якія дасягненні маюць нашы трэнеры?",
        answer: "Сярод нашых трэнераў ёсць майстры спорту, шматразовыя пераможцы чэмпіянатаў і турніраў, а таксама вопытныя інструктары з міжнароднымі сертыфікатамі і шматгадовым вопытам."
      },
      {
        question: "Дзе праводзяцца заняткі?",
        answer: "Заняткі праводзяцца ў нашых філіялах у Варшаве - Макотув і Прага Паўночная. Дэталі адносна лакацыі вы знойдзеце ў раскладзе заняткаў."
      }
    ]
  }
}

export default function CoachDetailClient({ coach, slug }: CoachDetailClientProps) {
  const { currentLang } = useLanguage()
  
  // Используем примитивные значения для зависимостей useMemo
  const coachSpecialty = coach?.specialty || ""
  const coachExperience = coach?.experience || ""
  const coachDescription = coach?.description || ""
  const coachEducation = coach?.education || ""
  const coachAchievements = Array.isArray(coach?.achievements) ? coach.achievements : []
  
  const coachT = useMemo(() => {
    try {
      const translated = coachTranslations[slug]?.[currentLang] || coachTranslations[slug]?.pl
      if (translated && translated.achievements && Array.isArray(translated.achievements)) {
        return translated
      }
      return {
        specialty: coachSpecialty,
        experience: coachExperience,
        description: coachDescription,
        education: coachEducation,
        achievements: coachAchievements
      }
    } catch (error) {
      console.error("Error loading coach translations:", error)
      return {
        specialty: coachSpecialty,
        experience: coachExperience,
        description: coachDescription,
        education: coachEducation,
        achievements: coachAchievements
      }
    }
  }, [slug, currentLang, coachSpecialty, coachExperience, coachDescription, coachEducation, coachAchievements.length])
  
  const t = useMemo(() => {
    try {
      return translations[currentLang] || translations.pl
    } catch (error) {
      console.error("Error loading translations:", error)
      return translations.pl
    }
  }, [currentLang])
  
  // Если тренер не найден, это обрабатывается в page.tsx через notFound()
  // Но на всякий случай добавим проверку
  if (!coach) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Trener nie znaleziony</h1>
          <Link href="/coaches">
            <Button className="bg-red-600 hover:bg-red-700">Powrót do trenerów</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <section className="pt-28 sm:pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-8 flex justify-center sm:justify-start">
              <Link href="/coaches">
                <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl shadow-lg font-medium">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t?.backToCoaches || "Powrót do trenerów"}
                </Button>
              </Link>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 items-center lg:items-start">
              <div className="w-full max-w-md lg:max-w-full h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden rounded-3xl shadow-2xl relative bg-transparent bg-gradient-to-br from-gray-900 to-black mx-auto">
                <Image
                  src={coach.image || "/placeholder.svg"}
                  alt={`${coach.name} - ${coachT?.specialty || coach.specialty} w klubie VOLAT Warszawa`}
                  title={`${coach.name} - ${coachT?.specialty || coach.specialty} w klubie VOLAT Warszawa`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 600px"
                  className="object-cover"
                  priority
                  loading="eager"
                  quality={80}
                  placeholder="blur"
                  fetchPriority="high"
                  decoding="async"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>

              <div className="w-full space-y-6 text-center lg:text-left flex flex-col">
                <div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-6 break-words">
                    {coach.name}
                  </h1>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-red-500/20 p-6 min-h-[100px] shadow-lg">
                  <h3 className="text-red-400 font-semibold text-lg mb-3">{t?.specialty || "Specjalizacja"}</h3>
                  <p className="text-gray-300 text-base leading-relaxed">{coachT?.specialty || coach.specialty || ""}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-red-500/20 p-6 min-h-[100px] shadow-lg">
                  <h3 className="text-red-400 font-semibold text-lg mb-3 flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    {t?.experience || "Doświadczenie"}
                  </h3>
                  <p className="text-gray-300 text-base leading-relaxed">{coachT?.experience || coach.experience || ""}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-red-500/20 p-6 min-h-[120px] shadow-lg">
                  <h3 className="text-red-400 font-semibold text-lg mb-3 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {t?.education || "Wykształcenie"}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{coachT?.education || coach.education || ""}</p>
                </div>

                <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm rounded-xl border border-red-500/20 p-6 min-h-[150px] shadow-lg">
                  <p className="text-gray-400 text-base leading-relaxed">{coachT?.description || coach.description || ""}</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/schedule?coach=${slug}`}
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-gradient-to-r from-white to-gray-100 text-black hover:from-gray-50 hover:to-gray-200 font-medium text-lg px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto">
                      {t?.viewSchedule || "Zobacz grafik"}
                    </Button>
                  </Link>
                  <a
                    href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full sm:w-auto"
                  >
                    <Button className="bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 font-medium text-lg px-8 py-4 rounded-2xl shadow-lg w-full sm:w-auto">
                      {t?.bookNow || "Zapisz się na zajęcia"}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section - Full Width Outside Container */}
      <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="bg-gradient-to-br from-gray-900/95 via-red-900/10 to-gray-900/95 backdrop-blur-sm rounded-2xl border-2 border-red-500/30 p-8 sm:p-10 lg:p-12 shadow-2xl">
              <h3 className="text-3xl sm:text-4xl font-sans font-bold text-white mb-6 flex items-center justify-center gap-3">
                <Award className="w-8 h-8 text-red-500" />
                <span className="bg-gradient-to-r from-red-400 via-white to-red-400 bg-clip-text text-transparent">
                  {t?.achievements || "Osiągnięcia"}
                </span>
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
                {coachT && Array.isArray(coachT.achievements) && coachT.achievements.length > 0 ? (
                  coachT.achievements.map((achievement: string, index: number) => (
                    <li key={index} className="text-gray-300 text-sm sm:text-base flex items-start gap-3 p-5 bg-black/30 rounded-lg border border-red-500/10 h-full min-h-[80px]">
                      <span className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex-shrink-0 mt-2 shadow-lg shadow-red-500/50"></span>
                      <span className="break-words leading-relaxed flex-1">{achievement}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm col-span-full text-center py-4">
                    {t?.achievements || "Osiągnięcia"} - Brak danych
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-8 text-center">
              {t?.faqTitle || "Często zadawane pytania"}
            </h2>
            <div className="max-w-3xl mx-auto">
              {t?.faq && Array.isArray(t.faq) ? (
                <FAQAccordion items={t.faq} />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
