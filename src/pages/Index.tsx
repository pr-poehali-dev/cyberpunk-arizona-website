import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navItems = [
    { name: "Главная", icon: "Home", active: true },
    { name: "Донат", icon: "CreditCard" },
    { name: "Правила", icon: "FileText" },
    { name: "Форум", icon: "MessageSquare" },
    { name: "Лидеры", icon: "Crown" }
  ];

  const shopItems = [
    { 
      name: "Нейроимплант", 
      price: "299₽", 
      description: "Улучшает хакерские способности",
      icon: "Cpu",
      rarity: "Легендарный"
    },
    { 
      name: "Киберкатана", 
      price: "599₽", 
      description: "Высокотехнологичное оружие",
      icon: "Sword",
      rarity: "Эпический"
    },
    { 
      name: "Голограмма", 
      price: "199₽", 
      description: "Маскировка от врагов",
      icon: "Zap",
      rarity: "Редкий"
    },
    { 
      name: "Дрон-разведчик", 
      price: "399₽", 
      description: "Автономная разведка",
      icon: "Bot",
      rarity: "Эпический"
    }
  ];

  const leaders = [
    { name: "CyberNinja", level: 87, faction: "Нейро-хакеры" },
    { name: "DataGhost", level: 84, faction: "Корпораты" },
    { name: "SynthWave", level: 82, faction: "Киберпанки" }
  ];

  const serverStats = [
    { label: "Игроков онлайн", value: "2,847", icon: "Users", trend: "+127", color: "text-green-400" },
    { label: "Пиковый онлайн", value: "3,245", icon: "TrendingUp", trend: "сегодня", color: "text-primary" },
    { label: "Всего игроков", value: "147,829", icon: "Globe", trend: "+1,234", color: "text-blue-400" },
    { label: "Активных фракций", value: "24", icon: "Shield", trend: "+2", color: "text-purple-400" }
  ];

  const dailyActivity = [
    { time: "00:00", players: 1420 },
    { time: "03:00", players: 980 },
    { time: "06:00", players: 1250 },
    { time: "09:00", players: 2100 },
    { time: "12:00", players: 2847 },
    { time: "15:00", players: 3100 },
    { time: "18:00", players: 3245 },
    { time: "21:00", players: 2950 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-slate-900 to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold text-primary">ARIZONA RP</span>
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    item.active 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={item.icon} size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="border-primary/30 text-primary hover:bg-primary/10">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="relative">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              ARIZONA RP
            </h1>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary blur-sm"></div>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Добро пожаловать в киберпанк будущее 2077 года. Создай свою историю в мире нейроимплантов и корпораций.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-black font-semibold px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Начать игру
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10">
              <Icon name="Users" className="mr-2" size={20} />
              Онлайн: 2,847
            </Button>
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Внутриигровой магазин</h2>
            <p className="text-muted-foreground">Улучши своего персонажа с помощью киберимплантов и оружия</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shopItems.map((item, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Icon name={item.icon} size={24} className="text-primary" />
                    </div>
                    <Badge variant="outline" className={`
                      ${item.rarity === 'Легендарный' ? 'border-yellow-500/50 text-yellow-400' : ''}
                      ${item.rarity === 'Эпический' ? 'border-purple-500/50 text-purple-400' : ''}
                      ${item.rarity === 'Редкий' ? 'border-blue-500/50 text-blue-400' : ''}
                    `}>
                      {item.rarity}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-black hover:from-primary/80 hover:to-secondary/80">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-background via-slate-800/20 to-background">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-primary">Статистика сервера</h2>
            <p className="text-muted-foreground">Актуальные данные активности и метрики игроков</p>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serverStats.map((stat, index) => (
              <Card key={index} className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Icon name={stat.icon} size={24} className="text-primary" />
                    </div>
                    <span className={`text-sm font-medium ${stat.color}`}>
                      {stat.trend}
                    </span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Activity Chart */}
          <Card className="bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Activity" className="mr-2 text-primary" />
                Активность игроков за сутки
              </CardTitle>
              <CardDescription>Количество игроков онлайн по часам</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 relative">
                <div className="absolute inset-0 flex items-end justify-between space-x-2">
                  {dailyActivity.map((point, index) => {
                    const height = (point.players / 3500) * 100;
                    const isActive = index === 6; // Peak hour
                    return (
                      <div key={index} className="flex-1 flex flex-col items-center">
                        <div className="relative group cursor-pointer">
                          <div 
                            className={`w-full rounded-t-lg transition-all duration-300 ${
                              isActive 
                                ? 'bg-gradient-to-t from-primary to-secondary shadow-lg shadow-primary/30' 
                                : 'bg-gradient-to-t from-primary/60 to-primary/80 hover:from-primary hover:to-secondary'
                            }`}
                            style={{ height: `${height}%`, minHeight: '20px' }}
                          ></div>
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border border-primary/20 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            {point.players.toLocaleString()}
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground mt-2">{point.time}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>Минимум: 980</span>
                <span>Среднее: 2,235</span>
                <span>Пик: 3,245</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leaders Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Таблица лидеров</h2>
          
          <Card className="max-w-2xl mx-auto bg-card/50 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Icon name="Trophy" className="mr-2 text-yellow-400" />
                Топ игроки недели
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaders.map((leader, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                        index === 1 ? 'bg-gray-500/20 text-gray-400' :
                        'bg-amber-600/20 text-amber-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold">{leader.name}</p>
                        <p className="text-sm text-muted-foreground">{leader.faction}</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      Уровень {leader.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Правила сервера</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Shield" className="mr-2 text-primary" />
                  Основные правила
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">• Запрещен читинг и использование ботов</p>
                <p className="text-muted-foreground">• Уважайте других игроков</p>
                <p className="text-muted-foreground">• Не используйте багги и эксплойты</p>
                <p className="text-muted-foreground">• Играйте честно и по ролям</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="AlertTriangle" className="mr-2 text-secondary" />
                  Наказания
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">• Предупреждение за нарушения</p>
                <p className="text-muted-foreground">• Мут на 1-24 часа</p>
                <p className="text-muted-foreground">• Кик с сервера</p>
                <p className="text-muted-foreground">• Постоянный бан за серьезные нарушения</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Forum Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Форум сообщества</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageSquare" className="mr-2 text-primary" />
                  Обсуждения
                </CardTitle>
                <CardDescription>Общайтесь с игроками</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="HelpCircle" className="mr-2 text-secondary" />
                  Помощь
                </CardTitle>
                <CardDescription>Задайте вопросы админам</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-card/50 border-primary/20 hover:border-primary/40 transition-all cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Megaphone" className="mr-2 text-accent" />
                  Новости
                </CardTitle>
                <CardDescription>Последние обновления</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-lg"></div>
            <span className="text-lg font-bold text-primary">ARIZONA RP</span>
          </div>
          <p className="text-muted-foreground">© 2024 Arizona RP. Киберпанк будущее уже здесь.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;