"use client"

import { lazy, Suspense } from "react"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const Footer = lazy(() => import("@/components/footer"))

const translations = {
  pl: {
    title: "Aktualności",
    subtitle: "Ostatnie wiadomości z naszego klubu sportowego i centrum edukacyjnego",
    readMore: "Czytaj dalej",
    noNews: "Wkrótce pojawią się nowe wiadomości. Sprawdź ponownie za jakiś czas!",
    upcomingEvents: "Nadchodzące wydarzenia",
    date: "Data",
  },
  uk: {
    title: "Новини",
    subtitle: "Останні новини нашого спортивного клубу та освітнього центру",
    readMore: "Читати далі",
    noNews: "Незабаром з'являться нові новини. Перевірте знову через деякий час!",
    upcomingEvents: "Майбутні події",
    date: "Дата",
  },
  en: {
    title: "News",
    subtitle: "Latest news from our sports club and educational center",
    readMore: "Read more",
    noNews: "New news will appear soon. Check back later!",
    upcomingEvents: "Upcoming Events",
    date: "Date",
  },
  by: {
    title: "Навіны",
    subtitle: "Апошнія навіны нашага спартыўнага клуба і адукацыйнага цэнтра",
    readMore: "Чытаць далей",
    noNews: "Хутка з'явяцца новыя навіны. Праверце зноў праз некаторы час!",
    upcomingEvents: "Будучыя падзеі",
    date: "Дата",
  },
}

// Структура для новостей (пока пустая)
// Добавлять новости можно раз в 2 недели
interface NewsItem {
  id: number
  date: string // Формат: "YYYY-MM-DD"
  title: {
    pl: string
    uk: string
    en: string
    by: string
  }
  excerpt: {
    pl: string
    uk: string
    en: string
    by: string
  }
  image: string // Путь к изображению в /public
  imageAlt: {
    pl: string
    uk: string
    en: string
    by: string
  }
  fullText?: {
    pl: string
    uk: string
    en: string
    by: string
  } // Полный текст новости (опционально для будущего расширения)
}

const newsItems: NewsItem[] = [
  // Новости будут добавляться здесь раз в 2 недели
  // Пример структуры:
  // {
  //   id: 1,
  //   date: "2024-12-15",
  //   title: {
  //     pl: "Tytuł wiadomości",
  //     uk: "Заголовок новини",
  //     en: "News title",
  //     by: "Загаловак навіны",
  //   },
  //   excerpt: {
  //     pl: "Krótki opis wiadomości...",
  //     uk: "Короткий опис новини...",
  //     en: "Short news description...",
  //     by: "Кароткі апісанне навіны...",
  //   },
  //   image: "/news-image-1.jpg",
  //   imageAlt: {
  //     pl: "Opis obrazu",
  //     uk: "Опис зображення",
  //     en: "Image description",
  //     by: "Апісанне выявы",
  //   },
  // },
]

// Форматирование даты в зависимости от языка
const formatDate = (dateString: string, lang: string): string => {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  const locales: Record<string, string> = {
    pl: 'pl-PL',
    uk: 'uk-UA',
    en: 'en-US',
    by: 'be-BY', // Белорусская локализация
  }
  
  return date.toLocaleDateString(locales[lang] || 'pl-PL', options)
}

export default function NewsPage() {
  const { currentLang } = useLanguage()
  const t = translations[currentLang] || translations.pl

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-primary">
            {t.subtitle}
          </p>
        </div>

        {newsItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl p-12 max-w-2xl mx-auto border border-gray-700">
              <div className="text-6xl mb-6">📰</div>
              <h2 className="text-2xl font-display font-bold text-white mb-4">
                {t.noNews}
              </h2>
              <p className="text-gray-400 font-primary">
                Regularnie aktualizujemy nasze wiadomości i wydarzenia
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => (
            <article
              key={item.id}
                className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/20 group"
            >
                {item.image && (
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt[currentLang] || item.imageAlt.pl}
                      title={`${item.title[currentLang] || item.title.pl} - VOLAT Warszawa`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-opacity duration-300"
                      loading="lazy"
                      quality={75}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                )}
              <div className="p-6">
                  <div className="text-red-400 text-sm mb-3 font-accent">
                    {formatDate(item.date, currentLang)}
                  </div>
                  <h2 className="text-xl font-display font-bold mb-3 hover:text-red-400 transition-colors duration-300 text-white">
                    {item.title[currentLang] || item.title.pl}
                </h2>
                  <p className="text-gray-300 text-sm mb-4 font-primary leading-relaxed">
                    {item.excerpt[currentLang] || item.excerpt.pl}
                  </p>
                  <button className="text-red-400 hover:text-red-300 text-sm font-medium font-accent">
                    {t.readMore} →
                </button>
              </div>
            </article>
          ))}
        </div>
        )}

        {/* Место для будущих событий */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold mb-6 text-red-400">
              {t.upcomingEvents}
            </h2>
            <div className="space-y-4">
              {/* События будут добавляться здесь */}
              <div className="text-gray-400 font-primary">
                {currentLang === 'pl' && 'Nadchodzące wydarzenia będą ogłaszane tutaj'}
                {currentLang === 'uk' && 'Майбутні події будуть оголошуватися тут'}
                {currentLang === 'en' && 'Upcoming events will be announced here'}
                {currentLang === 'by' && 'Будучыя падзеі будуць абвяшчацца тут'}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
