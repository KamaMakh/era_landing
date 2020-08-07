<template>
  <div class="free-landing">
    <div class="free-landing__header-wrap">
      <div class="free-landing__header">
        <div class="free-landing__header-logo">
          <v-row class="mx-0 align-center">
            <v-img
              width="60"
              height="60"
              src="../assets/logo.png"
              class="free-landing__header-logo-img"
            ></v-img>
            ERA
          </v-row>
        </div>
        <div v-if="windowWidth > 1024" class="free-landing__header-right">
          <ul class="free-landing__header-menu">
            <li v-scroll-to="'#mobile'">
              <a class="nav-link">Главная</a>
            </li>
            <li v-scroll-to="'#contacts'">
              <a class="nav-link">О нас</a>
            </li>
            <li v-scroll-to="'#adv'">
              <a class="nav-link">Преимущества</a>
            </li>
            <li v-scroll-to="'#why'">
              <a class="nav-link">Продукт</a>
            </li>
            <li v-scroll-to="'#reviews'">
              <a class="nav-link">Отзывы</a>
            </li>
            <li v-scroll-to="'#question'">
              <a class="nav-link">
                FAQ
              </a>
            </li>
            <li v-scroll-to="'#feedback'">
              <a class="nav-link">
                Контакты
              </a>
            </li>
          </ul>
          <div class="free-landing__header-button" v-scroll-to="'#contacts'">
            <v-btn rounded dark>
              Перезвоните мне
            </v-btn>
          </div>
        </div>
        <sl v-else right>
          <ul class="free-landing__header-menu burger">
            <li v-scroll-to="'#mobile'">
              <a class="nav-link">Главная</a>
            </li>
            <li v-scroll-to="'#contacts'">
              <a class="nav-link">О нас</a>
            </li>
            <li v-scroll-to="'#adv'">
              <a class="nav-link">Преимущества</a>
            </li>
            <li v-scroll-to="'#why'">
              <a class="nav-link">Продукт</a>
            </li>
            <li v-scroll-to="'#reviews'">
              <a class="nav-link">Отзывы</a>
            </li>
            <li v-scroll-to="'#question'">
              <a class="nav-link">
                FAQ
              </a>
            </li>
            <li v-scroll-to="'#feedback'">
              <a class="nav-link">
                Контакты
              </a>
            </li>
          </ul>
        </sl>
      </div>
    </div>
    <section id="mobile">
      <div class="mobile-wrap">
        <div class="mobile-wrap__inner">
          <div class="mobile-wrap__img">
            <v-img
              src="../assets/free-landing/watch-1.png"
              contain
              :width="
                windowWidth <= 500
                  ? 300
                  : windowWidth < 560
                  ? 120
                  : windowWidth < 640
                  ? 150
                  : windowWidth < 768
                  ? 200
                  : windowWidth < 1025
                  ? 300
                  : 400
              "
              :height="
                windowWidth <= 500
                  ? 370
                  : windowWidth < 560
                  ? 180
                  : windowWidth < 768
                  ? 300
                  : windowWidth < 1025
                  ? 400
                  : 500
              "
              light
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          <div class="mobile-wrap__text-block">
            <h1 class="mobile-wrap__title">
              Разработка мобильных приложений iOS и Android
            </h1>
            <div class="mobile-wrap__text">
              Создаём iOS / Android мобильные приложения на заказ для
              существующих бизнесов и для стартапов. Полный цикл разработки
              мобильных приложений под ключ: от идеи до публикации в App Store и
              Google Play. Разработка мобильного приложения – это инвестиции с
              расчётом на будущую прибыль. Грамотно спроектированный продукт
              позволит сформировать аудиторию и увеличить продажи
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contacts">
      <div class="contacts-wrap">
        <div class="contacts-wrap__inner">
          <div class="contacts-wrap__text-block">
            <div class="contacts-wrap__title">
              ERA Development
            </div>
            <div class="contacts-wrap__text">
              Наша компания создаёт мобильные приложения, которые работают и
              приносят прибыль. Большой опыт коммерческой разработки позволяет
              гарантировать нужный клиенту результат: запуск вашего проекта
              точно в срок с требуемым качеством и гарантией 12 месяцев.
              Закажите консультацию прямо сейчас!
            </div>
            <div class="contacts-wrap__form">
              <v-form ref="callMe" v-model="callMeValid">
                <v-row class="align-center">
                  <v-col cols="12" md="8" class="contacts-wrap__input">
                    <v-text-field
                      v-model="form.phone1"
                      light
                      :rules="[rules.required]"
                      rounded
                      outlined
                      v-mask="'+7 (###) ###-##-##'"
                    >
                    </v-text-field>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-btn
                      rounded
                      dark
                      :loading="loading"
                      @click="feedback(true)"
                    >
                      Перезвонить
                    </v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="adv">
      <div class="adv-wrap">
        <div class="adv-wrap__inner">
          <h2 class="adv-wrap__title">
            Преимущества
          </h2>
          <div class="adv-wrap__sub-title">
            С 2015 года разрабатываем мобильные приложения. Мы знаем, как
            сделать Ваше приложение популярным. В нашей команде 14
            высококвалифицированных специалистов, и мы сделали уже 29
            приложений.
          </div>
          <div v-if="windowWidth > 600" class="adv-wrap__blocks blocks">
            <v-row class="justify-space-between mx-0">
              <v-col cols="12" sm="6" md="4" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon1.png" alt="" />
                </div>
                <div class="blocks__title">
                  В самом начале
                </div>
                <div class="blocks__text">
                  С самого начала нашего сотрудничества мы превращаем идеи
                  клиента в чёткие требования к разработке и помогаем
                  сформулировать концепцию приложения.
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon2.png" alt="" />
                </div>
                <div class="blocks__title">
                  Нашей команде нет равных
                </div>
                <div class="blocks__text">
                  Для создания качественного мобильного приложения нужны 2
                  ингредиента: хорошая идея и крутая команда. Второе мы
                  гарантируем!
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon3.png" alt="" />
                </div>
                <div class="blocks__title">
                  Самосовершенствование
                </div>
                <div class="blocks__text">
                  Все сотрудники ежегодно (а иногда и чаще) проходят курсы
                  повышения квалификации, участвуют в международных
                  конференциях.
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon4.png" alt="" />
                </div>
                <div class="blocks__title">
                  Рост
                </div>
                <div class="blocks__text">
                  Мобильное приложение для бизнеса чаще создаётся с целью
                  увеличения продаж. И наши клиенты добиваются роста продаж!
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon5.png" alt="" />
                </div>
                <div class="blocks__title">
                  Исследования
                </div>
                <div class="blocks__text">
                  Наша компания занимается исследованиями в области нейросетей и
                  алгоритмов машинного обучения.
                </div>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon6.png" alt="" />
                </div>
                <div class="blocks__title">
                  Результат
                </div>
                <div class="blocks__text">
                  Великолепный результат гарантирован! Это подтверждают наши
                  клиенты.
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else class="adv-wrap__blocks blocks">
            <slick-carousel v-bind="settings">
              <v-col cols="12" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon1.png" alt="" />
                </div>
                <div class="blocks__title">
                  В самом начале
                </div>
                <div class="blocks__text">
                  С самого начала нашего сотрудничества мы превращаем идеи
                  клиента в чёткие требования к разработке и помогаем
                  сформулировать концепцию приложения.
                </div>
              </v-col>
              <v-col cols="12" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon2.png" alt="" />
                </div>
                <div class="blocks__title">
                  Нашей команде нет равных
                </div>
                <div class="blocks__text">
                  Для создания качественного мобильного приложения нужны 2
                  ингредиента: хорошая идея и крутая команда. Второе мы
                  гарантируем!
                </div>
              </v-col>
              <v-col cols="12" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon3.png" alt="" />
                </div>
                <div class="blocks__title">
                  Самосовершенствование
                </div>
                <div class="blocks__text">
                  Все сотрудники ежегодно (а иногда и чаще) проходят курсы
                  повышения квалификации, участвуют в международных
                  конференциях.
                </div>
              </v-col>
              <v-col cols="12" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon4.png" alt="" />
                </div>
                <div class="blocks__title">
                  Рост
                </div>
                <div class="blocks__text">
                  Мобильное приложение для бизнеса чаще создаётся с целью
                  увеличения продаж. И наши клиенты добиваются роста продаж!
                </div>
              </v-col>
              <v-col cols="12" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon5.png" alt="" />
                </div>
                <div class="blocks__title">
                  Исследования
                </div>
                <div class="blocks__text">
                  Наша компания занимается исследованиями в области нейросетей и
                  алгоритмов машинного обучения.
                </div>
              </v-col>
              <v-col cols="12" class="blocks__item">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/icon6.png" alt="" />
                </div>
                <div class="blocks__title">
                  Результат
                </div>
                <div class="blocks__text">
                  Великолепный результат гарантирован! Это подтверждают наши
                  клиенты.
                </div>
              </v-col>
            </slick-carousel>
          </div>
        </div>
      </div>
    </section>
    <section id="why">
      <div class="why-wrap">
        <div class="why-wrap__inner">
          <div class="why-wrap__img">
            <v-img
              src="../assets/free-landing/watch-6.png"
              contain
              width="350"
              height="350"
              light
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
          <div class="why-wrap__text-block">
            <h2 class="why-wrap__title">
              Почему нужно заказывать разработку именно у нас?
            </h2>
            <div class="why-wrap__text">
              Мы можем предложить приятные цены на разработку за счёт налаженных
              процессов разработки мобильных приложений. Также на каждый проект
              назначается Руководитель проекта, который ведёт проект с самого
              начала до публикации в App Store и Google Play. Каждую неделю мы
              публикуем демонстрационные версии мобильных приложений, чтобы вы
              могли скачать приложение, посмотреть его работу и дать обратную
              связь при необходимости.
              <v-row
                class="mx-0 mt-4 align-center flex-nowrap"
                style="margin-bottom: 22px;"
              >
                <v-icon color="#707070" light style="margin-right: 10px">
                  mdi-check
                </v-icon>
                <span>
                  Мы пишем качественное и объёмное Техническое задание.
                </span>
              </v-row>
              <v-row
                class="mx-0 align-center flex-nowrap"
                style="margin-bottom: 22px;"
              >
                <v-icon color="#707070" light style="margin-right: 10px">
                  mdi-check
                </v-icon>
                <span>
                  Сопровождение от идеи до публикации в магазинах.
                </span>
              </v-row>
              <v-row
                class="mx-0 align-center flex-nowrap"
                style="margin-bottom: 22px;"
              >
                <v-icon color="#707070" light style="margin-right: 10px">
                  mdi-check
                </v-icon>
                <span>
                  Мы разрабатываем качественные нативные приложения. <br />
                  Никакой кросс-платфомы.
                </span>
              </v-row>
              <v-row
                class="mx-0 align-center flex-nowrap"
                style="margin-bottom: 22px;"
              >
                <v-icon color="#707070" light style="margin-right: 10px">
                  mdi-check
                </v-icon>
                <span>
                  12 месяцев безусловной гарантии на код и функциональность.
                </span>
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="portfolio">
      <div class="portfolio-wrap">
        <div class="portfolio-wrap__inner">
          <h2 class="portfolio-wrap__title">
            Портфолио
          </h2>
          <div class="portfolio-wrap__sub-title">
            На данный момент созданы и опубликованы более 20 проектов. <br />
            Познакомьтесь с некоторыми из них
          </div>
          <div v-if="windowWidth > 600" class="portfolio-wrap__blocks blocks">
            <v-row class="justify-space-between mx-0">
              <v-col cols="12" sm="4" md="4" style="max-width: 340px">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/phone1_crop.png" />
                </div>
                <div class="blocks__title">
                  Фитнес - дневник
                </div>
                <div class="blocks__text">
                  1 089 600 руб.
                </div>
              </v-col>
              <v-col cols="12" sm="4" md="4" style="max-width: 340px">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/phone2.png" alt="" />
                </div>
                <div class="blocks__title">
                  Доктор Мама
                </div>
                <div class="blocks__text">
                  3 450 000 руб.
                </div>
              </v-col>
              <v-col cols="12" sm="4" md="4" style="max-width: 340px">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/phone3_crop.png" alt="" />
                </div>
                <div class="blocks__title">
                  Приложение для знакомств
                </div>
                <div class="blocks__text">
                  6 894 500 руб.
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-else class="portfolio-wrap__blocks blocks">
            <slick-carousel v-bind="settings">
              <v-col cols="12" style="max-width: 340px">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/phone1_crop.png" />
                </div>
                <div class="blocks__title">
                  Фитнес - дневник
                </div>
                <div class="blocks__text">
                  1 089 600 руб.
                </div>
              </v-col>
              <v-col cols="12" style="max-width: 340px">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/phone2.png" alt="" />
                </div>
                <div class="blocks__title">
                  Доктор Мама
                </div>
                <div class="blocks__text">
                  3 450 000 руб.
                </div>
              </v-col>
              <v-col cols="12" style="max-width: 340px">
                <div class="blocks__icon">
                  <img src="../assets/free-landing/phone3_crop.png" alt="" />
                </div>
                <div class="blocks__title">
                  Приложение для знакомств
                </div>
                <div class="blocks__text">
                  6 894 500 руб.
                </div>
              </v-col>
            </slick-carousel>
          </div>
        </div>
      </div>
    </section>
    <section id="reviews">
      <div class="reviews-wrap">
        <div class="reviews-wrap__inner">
          <h2 class="reviews-wrap__title">
            Отзывы Клиентов
          </h2>
          <div class="reviews-wrap__sub-title">
            В течение последних 4-х лет наша команда реализовала более 20
            проектов. <br />
            Посмотрите, что говорят о нас наши клиенты:
          </div>
          <div class="reviews-wrap__blocks blocks">
            <slick-carousel v-bind="settings">
              <div class="blocks__item">
                <div class="blocks__top">
                  <div class="blocks__top-icon">
                    <v-img
                      src="../assets/free-landing/denis.jpg"
                      width="80"
                      height="80"
                      light
                      class="rounded-circle"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                  <div class="blocks__top-right">
                    <div class="blocks__top-name">
                      Архипов Денис
                    </div>
                    <div class="blocks__top-desc">
                      ООО "Логит"
                    </div>
                  </div>
                </div>
                <div class="blocks__text">
                  Работаем с парнями над большим логистическим проектом.
                  Нравится их подход - всегда четко и по делу. Грамотное и
                  полное ТЗ. Идём без опозданий по графику. Получаю от них много
                  советов по проекту. В целом сотрудничеством доволен.
                  Рекомендую.
                </div>
              </div>
              <div class="blocks__item">
                <div class="blocks__top">
                  <div class="blocks__top-icon">
                    <v-img
                      src="../assets/free-landing/julia.jpg"
                      width="80"
                      height="80"
                      light
                      class="rounded-circle"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                  <div class="blocks__top-right">
                    <div class="blocks__top-name">
                      Юлия Доманова
                    </div>
                    <div class="blocks__top-desc">
                      "Доктор Мама"
                    </div>
                  </div>
                </div>
                <div class="blocks__text">
                  Компания ERA создавала мобильное приложение для трекинга сна
                  деткам. Получили приложение вовремя. Помогли выложить в гугл
                  плей и эпстор. Спасибо, вам ребята, очень понравилось
                  работать. Мы сейчас на гарантийном обслуживании, после думаем
                  продолжить работу с компанией.
                </div>
              </div>
              <div class="blocks__item">
                <div class="blocks__top">
                  <div class="blocks__top-icon">
                    <v-img
                      src="../assets/free-landing/ilya.jpg"
                      contain
                      width="80"
                      height="80"
                      light
                      class="rounded-circle"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </div>
                  <div class="blocks__top-right">
                    <div class="blocks__top-name">
                      Илья Опелович
                    </div>
                    <div class="blocks__top-desc"></div>
                  </div>
                </div>
                <div class="blocks__text">
                  Делали 2 проекта для Казахстана. Оба работают, всё в порядке.
                  Скоро начнём делать еще один. Компанию советую к
                  сотрудничеству.
                </div>
              </div>
            </slick-carousel>
          </div>
        </div>
      </div>
    </section>
    <section id="question">
      <div class="question-wrap">
        <div class="question-wrap__inner">
          <div class="question-wrap__text">
            <h2 class="question-wrap__title">
              Часто задаваемые вопросы
            </h2>
            <div class="question-wrap__panels">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    В какую сумму может обойтись разработка мобильного
                    приложения?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    - Простые мобильные приложения стоят от 500.000 рублей. К
                    примеру, каталог услуг, или приложение для фотофиксации.
                    Если добавить клиент-серверную архитектуру, то сумма может
                    вырасти до 1.000.000 рублей. Большие и крупные проекты,
                    например, системы онлайн кредитования или маркертпейс
                    товаров и услуг могут стоить значительно дороже.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Зависит ли цена от количества функций?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    - Стоимость разработки приложения напрямую зависит от
                    количества функций этого приложения. Мы советуем
                    сконцентрироваться на одной - самой главной функции,
                    реализовать с начала её, и уже позже получив обратную связь
                    от клиентов постепенно усовершенствовать мобильное
                    приложение добавляя в него новый функционал.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Что с гарантией?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    - Все наши продукты получают 12-месячную безусловную
                    гарантию на функциональность кода. Это значит, что если в
                    течение года пользования после сдачи работ выявится
                    неисправность, мы устраним её в течение 10-ти дней. А если
                    неисправность критическая - то в течение 2-х дней.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    А дальше?
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    - Даже после выпуска готового приложения его необходимо
                    постоянно улучшать, идти в ногу с тенденциями рынка. Мы с
                    удовольствием поможем вам в этом. Наша компания осуществляет
                    техническую и маркетинговую поддержку мобильных приложений
                    для бизнеса. Вы всегда сможете заказать у нас дополнительный
                    функционал или обновление дизайна.
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    Я не знаю, с чего начать разработку
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    - Мы советуем сконцентрироваться на одной, самой главной,
                    функции, реализовать сначала её, и уже позже, получив
                    обратную связь от клиентов, постепенно усовершенствовать
                    мобильное приложение, добавляя в него новый функционал.
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </div>
          <div class="question-wrap__pic">
            <v-img
              src="../assets/free-landing/watch-3.png"
              contain
              :width="windowWidth > 1201 ? 500 : windowWidth > 1024 ? 350 : 300"
              :height="
                windowWidth > 1201 ? 500 : windowWidth > 1024 ? 350 : 300
              "
              light
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </div>
        </div>
      </div>
    </section>
    <section id="feedback">
      <div class="feedback-wrap">
        <div class="feedback-wrap__inner">
          <h2 class="feedback-wrap__title">
            Контакты
          </h2>
          <div class="feedback-wrap__sub-title">
            Мы всегда рады, когда клиенты нам звонят. Звоните нам по телефону,
            Whats App и Skype. Если Вы не дозвонились, оставьте свои контакты, и
            мы Вам перезвоним.
          </div>
          <v-row class="mx-0 feedback-wrap__inner-row">
            <div class="feedback-wrap__form">
              <v-form ref="feedback" v-model="feedbackValid">
                <v-text-field
                  v-model="form.name"
                  light
                  rounded
                  outlined
                  height="50"
                  label="Имя"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  v-model="form.email"
                  light
                  rounded
                  outlined
                  height="50"
                  label="E-mail"
                  :rules="[rules.email]"
                ></v-text-field>
                <v-text-field
                  v-model="form.phone"
                  light
                  rounded
                  outlined
                  height="50"
                  v-mask="'+7 (###) ###-##-##'"
                  label="Телефон"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-textarea
                  v-model="form.comment"
                  outlined
                  rounded
                  hide-details
                  no-resize
                ></v-textarea>
                <v-btn
                  rounded
                  dark
                  class="feedback-wrap__button"
                  @click="feedback(false)"
                  :loading="loading"
                >
                  Отправить
                </v-btn>
              </v-form>
            </div>

            <div v-if="windowWidth > 760" class="feedback-wrap__contacts">
              <div class="feedback-wrap__contact">
                <div class="feedback-wrap__contact-title phone">
                  Телефон
                </div>
                <div class="feedback-wrap__contact-text">
                  <div>
                    <a href="tel:+7 (383) 277 27 39">
                      +7 (383) 277 27 39
                    </a>
                  </div>
                  <div>
                    <a href="tel:+7 (903) 903 39 29">
                      +7 (903) 903 39 29
                    </a>
                  </div>
                </div>
              </div>
              <div class="feedback-wrap__contact">
                <div class="feedback-wrap__contact-title email">
                  E-mail
                </div>
                <div class="feedback-wrap__contact-text">
                  <div>
                    <a href="mailto:info@eradevelopment.org">
                      info@eradevelopment.org
                    </a>
                  </div>
                </div>
              </div>
              <div class="feedback-wrap__contact">
                <div class="feedback-wrap__contact-title address">
                  Адрес
                </div>
                <div class="feedback-wrap__contact-text">
                  <div>Россия, Новосибирск, ул. Николаева, 12</div>
                </div>
              </div>
              <!--              <div class="feedback-wrap__contact">-->
              <!--                <div class="feedback-wrap__contact-title soc">-->
              <!--                  Подписаться на нас:-->
              <!--                </div>-->
              <!--                <div class="feedback-wrap__contact-text soc">-->
              <!--                  <div class="fb"></div>-->
              <!--                  <div class="tw"></div>-->
              <!--                  <div class="ins"></div>-->
              <!--                </div>-->
              <!--              </div>-->
            </div>
            <div v-else class="feedback-wrap__contacts">
              <v-card class="mx-auto" max-width="500">
                <v-card-text>
                  <div class="feedback-wrap__contact">
                    <div class="feedback-wrap__contact-title phone">
                      Телефон
                    </div>
                    <div class="feedback-wrap__contact-text">
                      <div>
                        <a href="tel:+7 (383) 277 27 39">
                          +7 (383) 277 27 39
                        </a>
                      </div>
                      <div>
                        <a href="tel:+7 (903) 903 39 29">
                          +7 (903) 903 39 29
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="feedback-wrap__contact">
                    <div class="feedback-wrap__contact-title email">
                      E-mail
                    </div>
                    <div class="feedback-wrap__contact-text">
                      <div>
                        <a href="mailto:info@eradevelopment.org">
                          info@eradevelopment.org
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="feedback-wrap__contact">
                    <div class="feedback-wrap__contact-title address">
                      Адрес
                    </div>
                    <div class="feedback-wrap__contact-text">
                      <div>Россия, Новосибирск, ул. Николаева, 12</div>
                    </div>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </v-row>
        </div>
      </div>
    </section>
    <v-card height="50" tile dark style="margin-top: 50px" color="#3B3B3B">
      <v-footer absolute class="free-landing__footer" color="#3B3B3B">
        <v-col class="text-center py-0 d-flex justify-space-between" cols="12">
          <span>© Copyright 2020 Все права защищены</span>
          <span class="free-landing__footer-name">ERA DEVELOPMENT</span>
        </v-col>
      </v-footer>
    </v-card>
    <v-bottom-sheet v-model="sheet" hide-overlay>
      <v-sheet class="text-center" height="80px" color="success">
        <v-alert
          prominent
          type="success"
          class="my-0 mx-auto d-flex align-center justify-center"
        >
          <v-row align="center">
            <v-col class="grow">
              Спасибо за обращение, мы свяжемся с Вами в ближайшее время.
            </v-col>
          </v-row>
        </v-alert>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { Slide as sl } from "vue-burger-menu";
import { required, isEmail } from "../shared/validator";
import { mapState } from "vuex";

export default {
  name: "FreeLanding",
  components: {
    sl
  },
  data() {
    return {
      form: {},
      feedbackValid: false,
      callMeValid: false,
      sheet: false,
      loading: false,
      feedbackSuccess: false,
      callMeSuccess: false,
      rules: {
        required: value => required(value) || "Обязательно для заполнения",
        email: v => isEmail(v) || "Некорректный адрес электронной почты"
      }
    };
  },
  methods: {
    feedback(onlyPhone) {
      this.loading = true;
      if (onlyPhone) {
        if (!this.$refs.callMe.validate()) {
          this.loading = false;
          return;
        }
      } else {
        if (!this.$refs.feedback.validate()) {
          this.loading = false;
          return;
        }
      }

      let formData = new FormData();
      formData.append("name", this.form.name ? this.form.name : "Без имени");
      formData.append("phone", onlyPhone ? this.form.phone1 : this.form.phone);
      if (this.form.email) formData.append("email", this.form.email);
      if (this.form.comment) formData.append("comment", this.form.comment);
      this.$store
        .dispatch("feedback", formData)
        .then(() => {
          if (this.windowWidth > 960) {
            this.sheet = true;
            setTimeout(() => {
              this.sheet = false;
              this.form = {};
              this.$refs.feedback.resetValidation();
              this.$refs.call1Me.resetValidation();
            }, 2000);
          } else {
            this.snackBar.value = true;
            this.snackBar.text =
              "Спасибо за обращение, мы свяжемся с Вами в ближайшее время.";
            this.snackBar.color = "success";
            this.form = {};
            this.$refs.feedback.resetValidation();
            this.$refs.callMe.resetValidation();
          }
        })
        .catch(() => {
          this.snackBar.value = true;
          this.snackBar.text = "Что-то пошло не так. Повторите попытку позже";
          this.snackBar.color = "error";
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  computed: {
    ...mapState({
      snackBar: state => state.snackBar
    }),
    settings() {
      return {
        arrows: false,
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow:
          this.windowWidth < 640 ? 1 : this.windowWidth < 960 ? 2 : 3
      };
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/free.css";
</style>
