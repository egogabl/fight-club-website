import NavigationComponent from "@/components/navigation"

export default function NewsPage() {
  const newsItems = [
    {
      id: 1,
      title: "Открытие нового зала для MMA",
      date: "15 декабря 2024",
      excerpt: "Мы рады сообщить об открытии нового специализированного зала для занятий смешанными единоборствами.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Турнир по карате среди детей",
      date: "10 декабря 2024",
      excerpt: "Состоялся ежегодный турнир по карате WKF среди детей и подростков. Поздравляем всех участников!",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Новые программы в образовательном центре",
      date: "5 декабря 2024",
      excerpt: "Запускаем новые курсы подготовки к международным экзаменам по английскому языку.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <NavigationComponent />

      <div className="container mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent">
            Новости и События
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Последние новости нашего спортивного клуба и образовательного центра
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="bg-black/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-red-400 text-sm mb-2">{item.date}</div>
                <h2 className="text-xl font-bold mb-3 hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h2>
                <p className="text-white/70 text-sm mb-4">{item.excerpt}</p>
                <button className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors duration-300">
                  Читать далее →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-black/10 backdrop-blur-lg border border-white/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Предстоящие события</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-black/5 rounded-lg">
                <div>
                  <h3 className="font-semibold">Открытая тренировка по муай-тай</h3>
                  <p className="text-white/70 text-sm">Приглашаем всех желающих</p>
                </div>
                <div className="text-red-400 font-semibold">20 декабря</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-black/5 rounded-lg">
                <div>
                  <h3 className="font-semibold">Шахматный турнир</h3>
                  <p className="text-white/70 text-sm">Для всех возрастных категорий</p>
                </div>
                <div className="text-red-400 font-semibold">25 декабря</div>
              </div>
              <div className="flex justify-between items-center p-4 bg-black/5 rounded-lg">
                <div>
                  <h3 className="font-semibold">День открытых дверей</h3>
                  <p className="text-white/70 text-sm">Знакомство с нашими программами</p>
                </div>
                <div className="text-red-400 font-semibold">1 января</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
