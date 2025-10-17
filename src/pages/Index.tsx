import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Truck" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-secondary">ВОСТОК ШИНА</h1>
              <p className="text-xs text-muted-foreground">Луганск</p>
            </div>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('catalog')} className="hover:text-primary transition-colors">Каталог</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">О компании</button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Грузовые шины
                <span className="block text-primary">для вашего бизнеса</span>
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Продажа, установка и ремонт шин для коммерческого транспорта в Луганске
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-primary hover:bg-primary/90 text-white">
                  Каталог шин
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="bg-white text-secondary hover:bg-white/90">
                  Консультация
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-4xl font-bold text-primary">15+</p>
                  <p className="text-sm text-white/80">лет опыта</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">500+</p>
                  <p className="text-sm text-white/80">клиентов</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-white/80">поддержка</p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in delay-200">
              <img 
                src="https://cdn.poehali.dev/projects/f7dff196-0b9c-443d-91a8-84aaf4042c9a/files/a7800a38-ebfd-43d2-9db9-2d9d1686f86d.jpg"
                alt="Грузовая шина"
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">Полный спектр работ с грузовыми шинами</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "ShoppingCart",
                title: "Продажа шин",
                description: "Широкий ассортимент шин для грузовых автомобилей от ведущих производителей",
                features: ["Оригинальные шины", "Гарантия качества", "Конкурентные цены"]
              },
              {
                icon: "Wrench",
                title: "Установка",
                description: "Профессиональный монтаж и балансировка шин на современном оборудовании",
                features: ["Быстрый монтаж", "Проверка давления", "Настройка баланса"]
              },
              {
                icon: "Settings",
                title: "Ремонт",
                description: "Качественный ремонт любой сложности с использованием современных технологий",
                features: ["Вулканизация", "Восстановление протектора", "Устранение проколов"]
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Каталог шин</h2>
            <p className="text-lg text-muted-foreground">Популярные бренды в наличии</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { brand: "Michelin", model: "X Multi Z", size: "315/80 R22.5", price: "45 000" },
              { brand: "Bridgestone", model: "R249 Ecopia", size: "315/70 R22.5", price: "42 500" },
              { brand: "Continental", model: "HDR2", size: "295/80 R22.5", price: "38 000" },
              { brand: "Goodyear", model: "KMAX S", size: "315/80 R22.5", price: "43 000" }
            ].map((tire, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover-scale">
                <CardHeader className="text-center">
                  <div className="mb-4 bg-gray-100 rounded-lg p-6">
                    <img 
                      src="https://cdn.poehali.dev/projects/f7dff196-0b9c-443d-91a8-84aaf4042c9a/files/a7800a38-ebfd-43d2-9db9-2d9d1686f86d.jpg"
                      alt={tire.brand}
                      className="w-full h-32 object-contain"
                    />
                  </div>
                  <CardTitle className="text-xl">{tire.brand}</CardTitle>
                  <CardDescription>{tire.model}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-2">{tire.size}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{tire.price} ₽</p>
                  <Button className="w-full">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/f7dff196-0b9c-443d-91a8-84aaf4042c9a/files/0e3c8897-b05d-40c3-a9b6-430226b32e7e.jpg"
                alt="Наша работа"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">О компании</h2>
              <p className="text-lg mb-6 text-muted-foreground">
                ООО "ВОСТОК ШИНА" — ведущий поставщик грузовых шин в Луганске с 15-летним опытом работы. 
                Мы специализируемся на продаже, установке и ремонте шин для коммерческого транспорта.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "Award", title: "Профессионализм", text: "Опытные мастера с многолетним стажем" },
                  { icon: "Clock", title: "Оперативность", text: "Быстрое выполнение заказов любой сложности" },
                  { icon: "Shield", title: "Гарантия", text: "Официальная гарантия на все работы и товары" },
                  { icon: "Headphones", title: "Поддержка 24/7", text: "Всегда на связи для решения ваших задач" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white transition-colors">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-white/80">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Icon name="MapPin" size={24} />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">г. Луганск</p>
                  <p className="text-white/80">ул. Промышленная, 25</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Icon name="Phone" size={24} />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">+7 (XXX) XXX-XX-XX</p>
                  <p className="text-white/80">Ежедневно с 8:00 до 20:00</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Icon name="Mail" size={24} />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">info@vostok-shina.ru</p>
                  <p className="text-white/80">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <Icon name="Clock" size={24} />
                    Режим работы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg">Пн-Вс: 8:00 - 20:00</p>
                  <p className="text-white/80">Без выходных</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8 bg-white">
              <CardHeader>
                <CardTitle className="text-secondary">Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <input 
                      type="tel" 
                      placeholder="Телефон" 
                      className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <textarea 
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Truck" className="text-white" size={24} />
            </div>
            <span className="text-xl font-bold">ВОСТОК ШИНА</span>
          </div>
          <p className="text-white/80">© 2025 ООО "ВОСТОК ШИНА". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
