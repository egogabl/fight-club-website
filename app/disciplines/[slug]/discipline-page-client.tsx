"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/components/language-provider'

interface DisciplinePageClientProps {
  discipline: {
    id: string
    name: string
    description: string
    slug: string
    trainer: string
    trainerId: string
    image: string
    imageAlt?: string
    gallery: string[]
    fullDescription: string
    benefits: string[]
    schedule: string
    ageGroups: string
    price: string
  }
}

export default function DisciplinePageClient({ discipline }: DisciplinePageClientProps) {
  const { currentLang } = useLanguage()

  // Переводы названий дисциплин
  const disciplineTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Karate WKF",
      uk: "Карате WKF",
      en: "Karate WKF",
      by: "Каратэ WKF"
    },
    "muaythai": {
      pl: "Muay Thai / Kickboxing",
      uk: "Муай Тай / Кікбоксинг",
      en: "Muay Thai / Kickboxing",
      by: "Муай Тай / Кікбоксінг"
    },
    "judo": {
      pl: "Judo",
      uk: "Дзюдо",
      en: "Judo",
      by: "Дзюдо"
    },
    "mma": {
      pl: "MMA",
      uk: "ММА",
      en: "MMA",
      by: "ММА"
    },
    "volatmove-kids": {
      pl: "VolatMove! KIDS. Trening Motoryczny",
      uk: "VolatMove! KIDS. Моторичний тренінг",
      en: "VolatMove! KIDS. Motor Training",
      by: "VolatMove! KIDS. Маторныя трэніроўкі"
    },
    "volatmove-junior": {
      pl: "VolatMove! JUNIOR. Trening Motoryczny",
      uk: "VolatMove! JUNIOR. Моторичний тренінг",
      en: "VolatMove! JUNIOR. Motor Training",
      by: "VolatMove! JUNIOR. Маторныя трэніроўкі"
    },
    "functional-training": {
      pl: "Trening Funkcjonalny",
      uk: "Функціональний тренінг",
      en: "Functional Training",
      by: "Функцыянальныя трэніроўкі"
    },
    "chess": {
      pl: "Szachy",
      uk: "Шахи",
      en: "Chess",
      by: "Шахматы"
    }
  }

  // Переводы описаний
  const descriptionTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "muaythai": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "judo": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "mma": {
      pl: "Sztuki walki",
      uk: "Бойові мистецтва",
      en: "Martial arts",
      by: "Баявыя мастацтвы"
    },
    "volatmove-kids": {
      pl: "Trening motoryczny dla dzieci 5-7 lat",
      uk: "Моторичний тренінг для дітей 5-7 років",
      en: "Motor training for children 5-7 years",
      by: "Маторныя трэніроўкі для дзяцей 5-7 гадоў"
    },
    "volatmove-junior": {
      pl: "Trening motoryczny dla dzieci 8-15 lat",
      uk: "Моторичний тренінг для дітей 8-15 років",
      en: "Motor training for children 8-15 years",
      by: "Маторныя трэніроўкі для дзяцей 8-15 гадоў"
    },
    "functional-training": {
      pl: "Trening funkcjonalny i motoryczny",
      uk: "Функціональний та моторичний тренінг",
      en: "Functional and motor training",
      by: "Функцыянальныя і маторныя трэніроўкі"
    },
    "chess": {
      pl: "Gra strategiczna",
      uk: "Стратегічна гра",
      en: "Strategic game",
      by: "Стратэгічная гульня"
    }
  }

  // Переводы цен
  const priceTranslations: Record<string, Record<string, string>> = {
    "default": {
      pl: "Dzieci: 220 zł/miesiąc, Dorośli: 280 zł/miesiąc",
      uk: "Діти: 220 zł/місяць, Дорослі: 280 zł/місяць",
      en: "Children: 220 zł/month, Adults: 280 zł/month",
      by: "Дзеці: 220 zł/месяц, Дарослыя: 280 zł/месяц"
    },
    "ask": {
      pl: "Zapytaj o cenę",
      uk: "Запитайте про ціну",
      en: "Ask about price",
      by: "Спытайце пра цану"
    }
  }

  // Переводы полных описаний
  const fullDescriptionTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Karate WKF to tradycyjna sztuka walki pochodząca z Japonii, która łączy techniki uderzeń, kopnięć i bloków. Trening rozwija siłę, szybkość, koordynację, dyscyplinę i koncentrację. Prowadzimy zajęcia dla dzieci od 7 lat z Volha Yefimenka, młodzieży i dorosłych z Vital Rak. Klub jest członkiem Polskiej Unii Karate i Mazowieckiego Związku Karate, co zapewnia profesjonalny poziom nauczania.",
      uk: "Карате WKF - це традиційне бойове мистецтво з Японії, яке поєднує техніки ударів, ударів ногами та блокувань. Тренування розвиває силу, швидкість, координацію, дисципліну та концентрацію. Ми проводимо заняття для дітей від 7 років з Volha Yefimenka, молоді та дорослих з Vital Rak. Клуб є членом Польської Спілки Карате та Мазовецької Спілки Карате, що забезпечує професійний рівень навчання.",
      en: "Karate WKF is a traditional martial art from Japan that combines striking, kicking, and blocking techniques. Training develops strength, speed, coordination, discipline, and concentration. We conduct classes for children from 7 years old with Volha Yefimenka, youth and adults with Vital Rak. The club is a member of the Polish Karate Union and the Mazovian Karate Association, ensuring a professional level of instruction.",
      by: "Каратэ WKF - гэта традыцыйнае баявое мастацтва з Японіі, якое аб'ядноўвае тэхнікі удараў, удараў нагамі і блакаванняў. Трэніроўка развівае сілу, хуткасць, каардынацыю, дысцыпліну і канцэнтрацыю. Мы праводзім заняткі для дзяцей ад 7 гадоў з Volha Yefimenka, моладзі і дарослых з Vital Rak. Клуб з'яўляецца членам Польскай Асацыяцыі Каратэ і Мазавецкай Асацыяцыі Каратэ, што забяспечвае прафесійны ўзровень навучання."
    },
    "muaythai": {
      pl: "Muay Thai / Kickboxing to tajski boks i kickboxing, jedna z najskuteczniejszych sztuk walki na świecie. Charakteryzuje się użyciem uderzeń pięściami, łokciami, kolanami i kopnięciami. Trening jest bardzo intensywny i rozwija wytrzymałość, siłę, szybkość i refleks. Prowadzimy zajęcia dla różnych grup wiekowych, od dzieci po dorosłych, dostosowując program do poziomu zaawansowania uczestników.",
      uk: "Муай Тай / Кікбоксинг - це тайський бокс і кікбоксинг, один з найефективніших видів бойових мистецтв у світі. Характеризується використанням ударів кулаками, ліктями, колінами та ногами. Тренування дуже інтенсивне і розвиває витривалість, силу, швидкість та рефлекси. Ми проводимо заняття для різних вікових груп, від дітей до дорослих, адаптуючи програму до рівня підготовки учасників.",
      en: "Muay Thai / Kickboxing is Thai boxing and kickboxing, one of the most effective martial arts in the world. It is characterized by the use of punches, elbows, knees, and kicks. Training is very intense and develops endurance, strength, speed, and reflexes. We conduct classes for various age groups, from children to adults, adapting the program to the participants' skill level.",
      by: "Муай Тай / Кікбоксінг - гэта тайскі бокс і кікбоксінг, адзін з самых эфектыўных відаў баявых мастацтваў у свеце. Характарызуецца выкарыстаннем удараў кулакамі, локцямі, каленямі і нагамі. Трэніроўка вельмі інтэнсіўная і развівае вынослівасць, сілу, хуткасць і рэфлексы. Мы праводзім заняткі для розных узроставых груп, ад дзяцей да дарослых, адаптуючы праграму да ўзроўню падрыхтоўкі ўдзельнікаў."
    },
    "judo": {
      pl: "Judo to japońska sztuka walki olimpijska, która uczy rzutów, trzymań i dźwigni. Trening rozwija siłę, elastyczność, koordynację i równowagę. Prowadzimy zajęcia dla dzieci w wieku 6-12 lat, dostosowując program do możliwości młodych uczestników. Prowadzi Daria Koba - certyfikowana instruktorka judo z wieloletnim doświadczeniem, która zapewnia bezpieczne i efektywne nauczanie.",
      uk: "Дзюдо - це японське олімпійське бойове мистецтво, яке навчає кидків, утримань та заломів. Тренування розвиває силу, гнучкість, координацію та рівновагу. Ми проводимо заняття для дітей віком 6-12 років, адаптуючи програму до можливостей молодих учасників. Проводить Daria Koba - сертифікований інструктор дзюдо з багаторічним досвідом, який забезпечує безпечне та ефективне навчання.",
      en: "Judo is an Olympic Japanese martial art that teaches throws, holds, and locks. Training develops strength, flexibility, coordination, and balance. We conduct classes for children aged 6-12, adapting the program to young participants' capabilities. Led by Daria Koba - a certified judo instructor with years of experience who ensures safe and effective teaching.",
      by: "Дзюдо - гэта японскае алімпійскае баявое мастацтва, якое навучае кідкоў, трыманняў і заломаў. Трэніроўка развівае сілу, гнуткасць, каардынацыю і раўнавагу. Мы праводзім заняткі для дзяцей ва ўзросце 6-12 гадоў, адаптуючы праграму да магчымасцей маладых удзельнікаў. Праводзіць Daria Koba - сертыфікаваны інструктар дзюдо з шматгадовым досведам, які забяспечвае бяспечнае і эфектыўнае навучанне."
    },
    "mma": {
      pl: "MMA (Mixed Martial Arts) to mieszane sztuki walki, które łączą techniki z różnych dyscyplin. Trening obejmuje walkę w stójce i parterze, uderzenia, kopnięcia, rzuty i dźwignie. MMA łączy techniki boksu, zapasów, judo, brazylijskiego jiu-jitsu, kickboxingu i innych sztuk walki. Prowadzimy zajęcia dla młodzieży od 15 lat i dorosłych z różnym poziomem zaawansowania. Prowadzi Paweł Szymkowicz. Dostępne w filii Volat Mokotów.",
      uk: "ММА (Mixed Martial Arts) - це змішані бойові мистецтва, які поєднують техніки з різних дисциплін. Тренування включає боротьбу у стійці та партері, удари, удари ногами, кидки та заломи. ММА поєднує техніки боксу, боротьби, дзюдо, бразильського дзю-дзюцу, кікбоксингу та інших бойових мистецтв. Ми проводимо заняття для молоді від 15 років та дорослих з різним рівнем підготовки. Проводить Paweł Szymkowicz. Доступно у філії Volat Mokotów.",
      en: "MMA (Mixed Martial Arts) is mixed martial arts that combines techniques from various disciplines. Training includes stand-up and ground fighting, strikes, kicks, throws, and locks. MMA combines techniques from boxing, wrestling, judo, Brazilian jiu-jitsu, kickboxing, and other martial arts. We conduct classes for youth from 15 years old and adults with various skill levels. Led by Paweł Szymkowicz. Available at Volat Mokotów branch.",
      by: "ММА (Mixed Martial Arts) - гэта змешаныя баявыя мастацтвы, якія аб'ядноўваюць тэхнікі з розных дысцыплін. Трэніроўка ўключае барацьбу ў стаянцы і партэры, удары, удары нагамі, кідкі і заломы. ММА аб'ядноўвае тэхнікі боксу, барацьбы, дзюдо, бразільскага дзю-дзюцу, кікбоксінгу і іншых баявых мастацтваў. Мы праводзім заняткі для моладзі ад 15 гадоў і дарослых з розным узроўнем падрыхтоўкі. Праводзіць Paweł Szymkowicz. Даступна ў філіяле Volat Mokotów."
    },
    "volatmove-kids": {
      pl: "VolatMove! KIDS to ogólne przygotowanie motoryczne dla przedszkolaków, rozwój koordynacji i motoryki dużej. Program specjalnie zaprojektowany dla najmłodszych dzieci w wieku 5-7 lat, skupiający się na podstawowych umiejętnościach ruchowych i równowadze. Zajęcia prowadzą Volha Yefimenka i Daria Koba, które dostosowują program do możliwości każdego dziecka. Treningi odbywają się w przyjaznej atmosferze, zachęcając do aktywności fizycznej. Dostępne w filiach Volat Mokotów i Volat Praga.",
      uk: "VolatMove! KIDS - це загальна моторична підготовка для дошкільнят, розвиток координації та великої моторики. Програма спеціально розроблена для наймолодших дітей віком 5-7 років, зосереджуючись на основних рухових навичках та рівновазі. Заняття проводять Volha Yefimenka та Daria Koba, які адаптують програму до можливостей кожної дитини. Тренування проходять у дружній атмосфері, заохочуючи до фізичної активності. Доступно у філіях Volat Mokotów та Volat Praga.",
      en: "VolatMove! KIDS is general motor preparation for preschoolers, development of coordination and gross motor skills. The program is specially designed for the youngest children aged 5-7, focusing on basic movement skills and balance. Classes are conducted by Volha Yefimenka and Daria Koba, who adapt the program to each child's capabilities. Training takes place in a friendly atmosphere, encouraging physical activity. Available at Volat Mokotów and Volat Praga branches.",
      by: "VolatMove! KIDS - гэта агульная маторная падрыхтоўка для дашкольнікаў, развіццё каардынацыі і буйной маторыкі. Праграма спецыяльна распрацавана для самых маладых дзяцей ва ўзросце 5-7 гадоў, засяроджваючыся на асноўных рухавых навыках і раўнавазе. Заняткі праводзяць Volha Yefimenka і Daria Koba, якія адаптуюць праграму да магчымасцей кожнага дзіцяці. Трэніроўкі праходзяць у сяброўскай атмасферы, заахвочваючы да фізічнай актыўнасці. Даступна ў філіялах Volat Mokotów і Volat Praga."
    },
    "volatmove-junior": {
      pl: "VolatMove! JUNIOR to trening motoryczny dla dzieci 8-15 lat, skupiający się na korekcji problemów w ruchomości stawów i kształtowaniu prawidłowej postawy. Program obejmuje wzmocnienie stóp, poprawę elastyczności i rozwój siły mięśniowej. Zajęcia specjalnie zaprojektowane dla starszych dzieci i młodzieży, dostosowane do ich potrzeb rozwojowych. Prowadzi Volha Yefimenka z wieloletnim doświadczeniem w pracy z młodymi sportowcami. Dostępne w filiach Volat Mokotów i Volat Praga.",
      uk: "VolatMove! JUNIOR - це моторичний тренінг для дітей 8-15 років, зосереджений на корекції проблем рухливості суглобів та формуванні правильної постави. Програма включає зміцнення стоп, покращення гнучкості та розвиток м'язової сили. Заняття спеціально розроблені для старших дітей та молоді, адаптовані до їхніх розвиткових потреб. Проводить Volha Yefimenka з багаторічним досвідом роботи з молодими спортсменами. Доступно у філіях Volat Mokotów та Volat Praga.",
      en: "VolatMove! JUNIOR is motor training for children 8-15 years, focusing on correcting joint mobility issues and forming proper posture. The program includes strengthening the feet, improving flexibility, and developing muscle strength. Classes are specially designed for older children and youth, adapted to their developmental needs. Led by Volha Yefimenka with years of experience working with young athletes. Available at Volat Mokotów and Volat Praga branches.",
      by: "VolatMove! JUNIOR - гэта маторныя трэніроўкі для дзяцей 8-15 гадоў, засяроджаныя на карэкцыі праблем рухомасці суставаў і фарміраванні правільнай паставы. Праграма ўключае ўмацаванне стоп, паляпшэнне гнуткасці і развіццё цягліцавай сілы. Заняткі спецыяльна распрацаваны для старэйшых дзяцей і моладзі, адаптаваныя да іх развіццёвых патрэб. Праводзіць Volha Yefimenka з шматгадовым досведам працы з маладымі спартсменамі. Даступна ў філіялах Volat Mokotów і Volat Praga."
    },
    "functional-training": {
      pl: "Trening funkcjonalny i motoryczny dla młodzieży od 15 lat i dorosłych. Rozwój siły mięśni, szybkości reakcji, wytrzymałości, elastyczności i koordynacji, korekcja nadwagi. Program kompleksowy, skupiający się na ruchach naturalnych dla człowieka. Prowadzi Vital Rak. Dostępne w filii Volat Mokotów.",
      uk: "Функціональний та моторичний тренінг для молоді від 15 років та дорослих. Розвиток м'язової сили, швидкості реакції, витривалості, гнучкості та координації, корекція надмірної ваги. Комплексна програма, зосереджена на природних рухах людини. Проводить Vital Rak. Доступно у філії Volat Mokotów.",
      en: "Functional and motor training for youth from 15 years old and adults. Development of muscle strength, reaction speed, endurance, flexibility, and coordination, correction of excess weight. A comprehensive program focused on natural human movements. Led by Vital Rak. Available at Volat Mokotów branch.",
      by: "Функцыянальныя і маторныя трэніроўкі для моладзі ад 15 гадоў і дарослых. Развіццё цягліцавай сілы, хуткасці рэакцыі, вынослівасці, гнуткасці і каардынацыі, карэкцыя лішняй вагі. Камплексная праграма, засяроджаная на натуральных рухах чалавека. Праводзіць Vital Rak. Даступна ў філіяле Volat Mokotów."
    },
    "chess": {
      pl: "Szachy to gra strategiczna, która rozwija logiczne myślenie, koncentrację i umiejętności planowania. Trening szachowy poprawia pamięć, cierpliwość i umiejętności analityczne. Idealne dla osób w każdym wieku. Prowadzi Wiktor Murończyk - międzynarodowy mistrz szachowy.",
      uk: "Шахи - це стратегічна гра, яка розвиває логічне мислення, концентрацію та навички планування. Шаховий тренінг покращує пам'ять, терпіння та аналітичні навички. Ідеально підходить для людей будь-якого віку. Проводить Wiktor Murończyk - міжнародний шаховий майстер.",
      en: "Chess is a strategic game that develops logical thinking, concentration, and planning skills. Chess training improves memory, patience, and analytical skills. Perfect for people of all ages. Led by Wiktor Murończyk - an international chess master.",
      by: "Шахматы - гэта стратэгічная гульня, якая развівае лагічнае мысленне, канцэнтрацыю і навыкі планавання. Шахматная трэніроўка паляпшае памяць, цярпенне і аналітычныя навыкі. Ідэальна падыходзіць для людзей любога ўзросту. Праводзіць Wiktor Murończyk - міжнародны шахматны майстар."
    }
  }

  // Переводы преимуществ
  const benefitsTranslations: Record<string, Record<string, string[]>> = {
    "karate-wkf": {
      pl: ["Poprawa kondycji fizycznej", "Rozwój koordynacji ruchowej", "Wzrost pewności siebie", "Nauka samodyscypliny", "Redukcja stresu"],
      uk: ["Покращення фізичної форми", "Розвиток рухової координації", "Зростання впевненості в собі", "Навчання самодисципліні", "Зниження стресу"],
      en: ["Improved physical fitness", "Development of motor coordination", "Increased self-confidence", "Learning self-discipline", "Stress reduction"],
      by: ["Паляпшэнне фізічнай формы", "Развіццё руховай каардынацыі", "Рост упэўненасці ў сабе", "Навучанне самадысцыпліне", "Зніжэнне стрэсу"]
    },
    "muaythai": {
      pl: ["Maksymalna spalanie kalorii", "Rozwój siły i wytrzymałości", "Nauka samoobrony", "Poprawa refleksu", "Wzrost pewności siebie"],
      uk: ["Максимальне спалювання калорій", "Розвиток сили та витривалості", "Навчання самообороні", "Покращення рефлексів", "Зростання впевненості в собі"],
      en: ["Maximum calorie burning", "Development of strength and endurance", "Self-defense training", "Improved reflexes", "Increased self-confidence"],
      by: ["Максімальнае спальванне калорый", "Развіццё сілы і вынослівасці", "Навучанне самаабароне", "Паляпшэнне рэфлексаў", "Рост упэўненасці ў сабе"]
    },
    "judo": {
      pl: ["Rozwój siły i elastyczności", "Nauka technik rzutów", "Poprawa koordynacji", "Nauka szacunku", "Rozwój charakteru"],
      uk: ["Розвиток сили та гнучкості", "Навчання технік кидків", "Покращення координації", "Навчання поваги", "Розвиток характеру"],
      en: ["Development of strength and flexibility", "Learning throwing techniques", "Improved coordination", "Learning respect", "Character development"],
      by: ["Развіццё сілы і гнуткасці", "Навучанне тэхнік кідкоў", "Паляпшэнне каардынацыі", "Навучанне павагі", "Развіццё характару"]
    },
    "mma": {
      pl: ["Wszechstronny rozwój", "Nauka różnych technik", "Maksymalna spalanie kalorii", "Poprawa kondycji", "Nauka strategii walki"],
      uk: ["Всебічний розвиток", "Навчання різних технік", "Максимальне спалювання калорій", "Покращення форми", "Навчання стратегії боротьби"],
      en: ["Comprehensive development", "Learning various techniques", "Maximum calorie burning", "Improved fitness", "Learning fight strategy"],
      by: ["Усебаковае развіццё", "Навучанне розных тэхнік", "Максімальнае спальванне калорый", "Паляпшэнне формы", "Навучанне стратэгіі барацьбы"]
    },
    "volatmove-kids": {
      pl: ["Rozwój koordynacji ruchowej", "Rozwój motoryki dużej", "Kształtowanie podstawowych umiejętności ruchowych", "Poprawa równowagi i elastyczności", "Przygotowanie do aktywności sportowych"],
      uk: ["Розвиток рухової координації", "Розвиток великої моторики", "Формування основних рухових навичок", "Покращення рівноваги та гнучкості", "Підготовка до спортивних активностей"],
      en: ["Development of motor coordination", "Development of gross motor skills", "Formation of basic movement skills", "Improved balance and flexibility", "Preparation for sports activities"],
      by: ["Развіццё руховай каардынацыі", "Развіццё буйной маторыкі", "Фарміраванне асноўных рухавых навыкаў", "Паляпшэнне раўнавагі і гнуткасці", "Падрыхтоўка да спартыўных актыўнасцей"]
    },
    "volatmove-junior": {
      pl: ["Korekcja ruchomości stawów", "Kształtowanie prawidłowej postawy", "Wzmocnienie stóp", "Poprawa elastyczności", "Rozwój siły i koordynacji"],
      uk: ["Корекція рухливості суглобів", "Формування правильної постави", "Зміцнення стоп", "Покращення гнучкості", "Розвиток сили та координації"],
      en: ["Correction of joint mobility", "Formation of proper posture", "Strengthening the feet", "Improved flexibility", "Development of strength and coordination"],
      by: ["Карэкцыя рухомасці суставаў", "Фарміраванне правільнай паставы", "Умацаванне стоп", "Паляпшэнне гнуткасці", "Развіццё сілы і каардынацыі"]
    },
    "functional-training": {
      pl: ["Rozwój siły mięśni", "Poprawa szybkości reakcji", "Rozwój wytrzymałości", "Poprawa elastyczności i koordynacji", "Korekcja nadwagi"],
      uk: ["Розвиток м'язової сили", "Покращення швидкості реакції", "Розвиток витривалості", "Покращення гнучкості та координації", "Корекція надмірної ваги"],
      en: ["Development of muscle strength", "Improved reaction speed", "Development of endurance", "Improved flexibility and coordination", "Correction of excess weight"],
      by: ["Развіццё цягліцавай сілы", "Паляпшэнне хуткасці рэакцыі", "Развіццё вынослівасці", "Паляпшэнне гнуткасці і каардынацыі", "Карэкцыя лішняй вагі"]
    },
    "chess": {
      pl: ["Rozwój logicznego myślenia", "Poprawa koncentracji", "Nauka strategii i planowania", "Rozwój pamięci", "Nauka cierpliwości"],
      uk: ["Розвиток логічного мислення", "Покращення концентрації", "Навчання стратегії та планування", "Розвиток пам'яті", "Навчання терпіння"],
      en: ["Development of logical thinking", "Improved concentration", "Learning strategy and planning", "Memory development", "Learning patience"],
      by: ["Развіццё лагічнага мыслення", "Паляпшэнне канцэнтрацыі", "Навучанне стратэгіі і планавання", "Развіццё памяці", "Навучанне цярплівасці"]
    }
  }

  // Переводы расписания и возрастных групп
  const scheduleTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Poniedziałek, Środa, Piątek, Wtorek, Czwartek, Sobota (Mokotów) | Poniedziałek, Środa 18:00-19:00 (Praga)",
      uk: "Понеділок, Середа, П'ятниця, Вівторок, Четвер, Субота (Мокотув) | Понеділок, Середа 18:00-19:00 (Прага)",
      en: "Monday, Wednesday, Friday, Tuesday, Thursday, Saturday (Mokotów) | Monday, Wednesday 18:00-19:00 (Praga)",
      by: "Панядзелак, Серада, Пятніца, Аўторак, Чацвер, Субота (Макотув) | Панядзелак, Серада 18:00-19:00 (Прага)"
    },
    "muaythai": {
      pl: "Wtorek, Czwartek 19:00-20:30",
      uk: "Вівторок, Четвер 19:00-20:30",
      en: "Tuesday, Thursday 19:00-20:30",
      by: "Аўторак, Чацвер 19:00-20:30"
    },
    "judo": {
      pl: "Wtorek, Czwartek 18:00-19:30",
      uk: "Вівторок, Четвер 18:00-19:30",
      en: "Tuesday, Thursday 18:00-19:30",
      by: "Аўторак, Чацвер 18:00-19:30"
    },
    "mma": {
      pl: "Zapytaj o harmonogram",
      uk: "Запитайте про розклад",
      en: "Ask about schedule",
      by: "Спытайце пра расклад"
    },
    "volatmove-kids": {
      pl: "Poniedziałek, Środa 17:00-17:55 (Praga)",
      uk: "Понеділок, Середа 17:00-17:55 (Прага)",
      en: "Monday, Wednesday 17:00-17:55 (Praga)",
      by: "Панядзелак, Серада 17:00-17:55 (Прага)"
    },
    "volatmove-junior": {
      pl: "Zapytaj o harmonogram",
      uk: "Запитайте про розклад",
      en: "Ask about schedule",
      by: "Спытайце пра расклад"
    },
    "functional-training": {
      pl: "Zapytaj o harmonogram",
      uk: "Запитайте про розклад",
      en: "Ask about schedule",
      by: "Спытайце пра расклад"
    },
    "chess": {
      pl: "Zapytaj o harmonogram",
      uk: "Запитайте про розклад",
      en: "Ask about schedule",
      by: "Спытайце пра расклад"
    }
  }

  const ageGroupsTranslations: Record<string, Record<string, string>> = {
    "karate-wkf": {
      pl: "Dzieci od 7 lat, Młodzież, Dorośli",
      uk: "Діти від 7 років, Молодь, Дорослі",
      en: "Children from 7 years, Youth, Adults",
      by: "Дзеці ад 7 гадоў, Моладзь, Дарослыя"
    },
    "muaythai": {
      pl: "Młodzież 14+, Dorośli",
      uk: "Молодь 14+, Дорослі",
      en: "Youth 14+, Adults",
      by: "Моладзь 14+, Дарослыя"
    },
    "judo": {
      pl: "Dzieci 5+, Młodzież, Dorośli",
      uk: "Діти 5+, Молодь, Дорослі",
      en: "Children 5+, Youth, Adults",
      by: "Дзеці 5+, Моладзь, Дарослыя"
    },
    "mma": {
      pl: "Młodzież 15+, Dorośli",
      uk: "Молодь 15+, Дорослі",
      en: "Youth 15+, Adults",
      by: "Моладзь 15+, Дарослыя"
    },
    "volatmove-kids": {
      pl: "Dzieci 5-7 lat",
      uk: "Діти 5-7 років",
      en: "Children 5-7 years",
      by: "Дзеці 5-7 гадоў"
    },
    "volatmove-junior": {
      pl: "Dzieci 8-15 lat",
      uk: "Діти 8-15 років",
      en: "Children 8-15 years",
      by: "Дзеці 8-15 гадоў"
    },
    "functional-training": {
      pl: "Młodzież 15+, Dorośli",
      uk: "Молодь 15+, Дорослі",
      en: "Youth 15+, Adults",
      by: "Моладзь 15+, Дарослыя"
    },
    "chess": {
      pl: "Dzieci 6+, Młodzież, Dorośli",
      uk: "Діти 6+, Молодь, Дорослі",
      en: "Children 6+, Youth, Adults",
      by: "Дзеці 6+, Моладзь, Дарослыя"
    }
  }

  const translations = {
    pl: {
      backToDisciplines: "← Wróć do dyscyplin",
      bookNow: "Zapisz się",
      viewSchedule: "Zobacz grafik",
      viewTrainer: "Zobacz trenera",
      description: "Opis",
      benefits: "Korzyści",
      schedule: "Grafik",
      ageGroups: "Grupy wiekowe",
      price: "Cena",
      trainer: "Trener",
      notFound: "Dyscyplina nie znaleziona"
    },
    uk: {
      backToDisciplines: "← Повернутися до дисциплін",
      bookNow: "Записатися",
      viewSchedule: "Подивитися розклад",
      viewTrainer: "Подивитися тренера",
      description: "Опис",
      benefits: "Переваги",
      schedule: "Розклад",
      ageGroups: "Вікові групи",
      price: "Ціна",
      trainer: "Тренер",
      notFound: "Дисципліну не знайдено"
    },
    en: {
      backToDisciplines: "← Back to disciplines",
      bookNow: "Book now",
      viewSchedule: "View schedule",
      viewTrainer: "View trainer",
      description: "Description",
      benefits: "Benefits",
      schedule: "Schedule",
      ageGroups: "Age groups",
      price: "Price",
      trainer: "Trainer",
      notFound: "Discipline not found"
    },
    by: {
      backToDisciplines: "← Вярнуцца да дысцыплін",
      bookNow: "Запісацца",
      viewSchedule: "Паглядзець расклад",
      viewTrainer: "Паглядзець трэнера",
      description: "Апісанне",
      benefits: "Перавагі",
      schedule: "Расклад",
      ageGroups: "Узроставыя групы",
      price: "Цана",
      trainer: "Трэнер",
      notFound: "Дысцыпліну не знойдзена"
    }
  }

  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <main className="relative z-40 pt-20">
        <div className="container mx-auto px-4 py-12 sm:py-20">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/disciplines" 
              className="inline-flex items-center text-red-400 hover:text-red-300 font-accent transition-colors duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.backToDisciplines}
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images Section */}
            <div className="relative space-y-4">
              {/* Main Photo */}
              <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={discipline.image}
                  alt={discipline.imageAlt || `${disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name} - trening w klubie VOLAT Warszawa`}
                  title={`${disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name} - zajęcia w klubie VOLAT Warszawa, trener ${discipline.trainer}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Mini Gallery (up to 3 photos) */}
              {discipline.gallery && discipline.gallery.length > 0 && (
                <div className="grid grid-cols-3 gap-3">
                  {discipline.gallery.slice(0, 3).map((galleryImage: string, index: number) => {
                    // SEO alt тексты для конкретных фото
                    const altTexts: Record<string, string> = {
                      "/karate-mistrzostwa-volat-nagrody.jpg": "Karate WKF mistrzostwa VOLAT - nagrody i osiągnięcia klubu na turnieju karate",
                      "/karate-trening-aktywny-volat.jpg": "Karate WKF aktywny trening dzieci w klubie VOLAT - dynamiczne ćwiczenia i techniki karate",
                      "/karate-trening-rozgrzewka-volat.jpg": "Karate WKF rozgrzewka i ćwiczenia dzieci w klubie VOLAT - trening w sali sportowej",
                      "/mma-trening-grappling-volat.jpg": "MMA trening grappling w klubie VOLAT - techniki walki w parterze i kontrola przeciwnika",
                      "/mma-trening-parter-volat.jpg": "MMA trening w parterze w klubie VOLAT - techniki ground fighting i submisji z trenerem Paweł Szymkowicz",
                      "/mma-trening-volat.jpg": "MMA trening w klubie VOLAT - mieszane sztuki walki, walka w parterze i techniki grapplingu z trenerem Paweł Szymkowicz",
                      "/muaythai-trening-dzieci-volat.jpg": "Muay Thai trening dzieci w klubie VOLAT - techniki kopnięć i uderzeń w tajskim boksie z trenerem Mikoła Taczylin",
                      "/muaythai-trening-uderzenia-volat.jpg": "Muay Thai trening uderzeń w klubie VOLAT - techniki boksu tajskiego dla dzieci i młodzieży",
                      "/muaythai-trening-kopięcia-volat.jpg": "Muay Thai trening kopnięć w klubie VOLAT - techniki tajskiego boksu z trenerem Mikoła Taczylin",
                    }
                    const altText = altTexts[galleryImage] || `${discipline.name} - photo ${index + 1} w klubie VOLAT`
                    return (
                      <div key={index} className="relative w-full h-32 lg:h-40 rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={galleryImage}
                          alt={altText}
                          title={`${disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name} - ${altText}`}
                          fill
                          sizes="(max-width: 1024px) 33vw, 16vw"
                          className="object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                    )
                  })}
                  {/* Fill empty spaces if less than 3 photos */}
                  {Array.from({ length: Math.max(0, 3 - discipline.gallery.length) }).map((_, index) => (
                    <div key={`empty-${index}`} className="relative w-full h-32 lg:h-40 rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700/50 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">Photo {index + discipline.gallery.length + 1}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Header */}
              <div>
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4 tracking-tight bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent break-words leading-tight">
                  {disciplineTranslations[discipline.slug]?.[currentLang] || discipline.name}
                </h1>
                <p className="text-xl text-gray-300 font-primary mb-2">
                  {descriptionTranslations[discipline.slug]?.[currentLang] || discipline.description}
                </p>
                <p className="text-lg text-red-400 font-accent">
                  {t.trainer}: {discipline.trainer}
                </p>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  {t.description}
                </h2>
                <p className="text-gray-300 font-primary leading-relaxed break-words">
                  {fullDescriptionTranslations[discipline.slug]?.[currentLang] || discipline.fullDescription}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-4">
                  {t.benefits}
                </h2>
                <ul className="space-y-2">
                  {(benefitsTranslations[discipline.slug]?.[currentLang] || discipline.benefits).map((benefit, index) => (
                    <li key={index} className="flex items-center justify-center lg:justify-start text-gray-300 font-primary text-center lg:text-left">
                      <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-red-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="break-words">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center lg:text-left">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.schedule}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm break-words">
                    {scheduleTranslations[discipline.slug]?.[currentLang] || discipline.schedule}
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center lg:text-left">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.ageGroups}
                  </h3>
                  <p className="text-gray-300 font-primary text-sm break-words">
                    {ageGroupsTranslations[discipline.slug]?.[currentLang] || discipline.ageGroups}
                  </p>
                </div>
                <div className="bg-transparent backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 text-center lg:text-left">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {t.price}
                  </h3>
                  <p className="text-red-400 font-accent font-bold text-lg break-words">
                    {discipline.price === "Zapytaj o cenę" 
                      ? (priceTranslations["ask"][currentLang] || priceTranslations["ask"]["pl"])
                      : (priceTranslations["default"][currentLang] || priceTranslations["default"]["pl"])
                    }
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <a
                  href="https://docs.google.com/forms/d/1LhF3J7PteAcxbpV8jA2c8SA6aBDkPmN8yBp_j5UQTPU/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white text-sm font-accent font-medium rounded-xl shadow-lg h-[48px] flex items-center justify-center whitespace-nowrap no-underline"
                >
                  <span className="text-center">{t.bookNow}</span>
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Link
                    href="/schedule"
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-accent font-medium rounded-xl shadow-lg h-[48px] flex items-center justify-center whitespace-nowrap no-underline"
                  >
                    <span className="text-center">{t.viewSchedule}</span>
                  </Link>
                  <Link
                    href={discipline.trainer.includes(',') ? '/coaches' : `/coaches/${discipline.trainerId}`}
                    className="px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black text-sm font-accent font-medium rounded-xl shadow-lg h-[48px] flex items-center justify-center whitespace-nowrap no-underline"
                  >
                    <span className="text-center">{t.viewTrainer}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

