import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Dumbbell, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-black bg-gradient-to-r from-red-500 via-white to-red-500 bg-clip-text text-transparent mb-6 sm:mb-8 tracking-tight">
              O VOLAT
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-gray-300 font-serif leading-relaxed px-4 font-light mb-8">
                VOLAT to centrum sportu i edukacji, które łączy tradycję z nowoczesnością. Oferujemy kompleksowe
                szkolenia w różnych dyscyplinach sportowych oraz programy edukacyjne dla wszystkich grup wiekowych.
              </p>
              <p className="text-lg text-gray-400 font-serif leading-relaxed px-4 font-light">
                Nasza misja to rozwijanie potencjału każdego uczestnika poprzez sport, edukację i budowanie charakteru.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto mb-20">
            <Card className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group backdrop-blur-md">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <Award className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <CardTitle className="font-sans text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent font-bold">
                  2012
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-gray-300 text-lg sm:text-xl font-light mb-2">Założenie w Mińsku</p>
                <p className="font-serif text-gray-400 text-sm font-light">Pierwsze kroki w świecie sztuk walki</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group backdrop-blur-md">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-black to-gray-800 border-3 border-red-400 rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-red-400" />
                </div>
                <CardTitle className="font-sans text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent font-bold">
                  2023
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-gray-300 text-lg sm:text-xl font-light mb-2">Otwarcie w Warszawie</p>
                <p className="font-serif text-gray-400 text-sm font-light">Ekspansja na polski rynek</p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-red-400/30 shadow-2xl rounded-3xl bg-gradient-to-br from-gray-900 to-black hover:shadow-red-400/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group backdrop-blur-md">
              <CardHeader className="pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                  <Dumbbell className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                </div>
                <CardTitle className="font-sans text-2xl sm:text-3xl bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent font-bold">
                  Dziś
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-serif text-gray-300 text-lg sm:text-xl font-light mb-2">
                  Centrum multidyscyplinarne
                </p>
                <p className="font-serif text-gray-400 text-sm font-light">Ponad 500 aktywnych uczestników</p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-sans font-black bg-gradient-to-r from-red-400 to-white bg-clip-text text-transparent text-center mb-16">
              Nasze Wartości
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4">Społeczność</h3>
                <p className="text-gray-400 font-serif leading-relaxed">
                  Budujemy silną społeczność opartą na wzajemnym szacunku i wsparciu
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4">Doskonałość</h3>
                <p className="text-gray-400 font-serif leading-relaxed">
                  Dążymy do najwyższych standardów w każdym aspekcie naszej działalności
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-xl">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4">Pasja</h3>
                <p className="text-gray-400 font-serif leading-relaxed">
                  Nasza pasja do sportu i edukacji jest motorem naszego działania
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-sans font-bold text-white mb-8">Nasza Misja</h2>
            <p className="text-xl text-gray-300 font-serif leading-relaxed mb-8">
              W VOLAT wierzymy, że sport to nie tylko aktywność fizyczna, ale także narzędzie do budowania charakteru,
              dyscypliny i pewności siebie. Naszym celem jest stworzenie przestrzeni, gdzie każdy może rozwijać swój
              potencjał w przyjaznej i profesjonalnej atmosferze.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-sans font-bold text-white mb-4">Dla Dzieci i Młodzieży</h3>
                <p className="text-gray-300 font-serif leading-relaxed">
                  Rozwijamy umiejętności społeczne, budujemy pewność siebie i uczymy szacunku poprzez sport
                </p>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-white/10">
                <h3 className="text-2xl font-sans font-bold text-white mb-4">Dla Dorosłych</h3>
                <p className="text-gray-300 font-serif leading-relaxed">
                  Oferujemy przestrzeń do rozwoju osobistego, poprawy kondycji i nauki nowych umiejętności
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
