jQuery("html").niceScroll({
    scrollspeed: 60,
    mousescrollstep: 50
});

$(function () {
  if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
    $('#ios-notice').removeClass('hidden');
    $('.parallax-container').height( $(window).height() * 0.5 | 0 );
  } 
  else {
    $(window).resize(function () {
      var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;
      $('.parallax-container').height(parallaxHeight);
    }).trigger('resize');
  }

  smoothScroll.init();
});

var app = angular.module("app", []);

var navLang = navigator.language;

app.controller('LanguageCtrl', ['$scope', function LanguageController($scope) {

  if (navLang == 'uk') {
    $scope.language = texts.uan;

  } else if (navLang == 'ru') {
    $scope.language = texts.rus;

  } else {
    $scope.language = texts.eng;
  }

  $scope.setLanguage = function (language) {
    $scope.language = texts[language];
  };
}]);

var texts = {
  rus: {
    about: "Каждый из нас имеет мечты. Мечты к которым мы движемся семимильными или сантиметровыми шагами, несмотря ни на что. Мы верим что дорога к светлому будущему лежит сквозь наши общие усилия. И как бы это пафосно не звучало, но это правда и мы зделаем это!",
    first_step: "Сделайте первый шаг! Расскажите нам про вашу мечту за чашкой ароматного кофе",
    second_step: "Вместе делаем технический план и согласовываем его",
    third_step: "Во время работы мы активно общаемся и делимся результатами",
    fourth_step: "Проект делаем вовремя и готовы сопровождать его",
    dream_team: "Команда мечтателей, которые хотят помочь Вам",
    web_tech: "Рaзроботка мощных WEB приложений з использованием современных фреймворков: AngularJS, BackboneJS, Ruby on Rails",
    mobile_tech: "Мы поддерживаем весь стек разработки под мобильные платформы",
    desktop_tech: "Хотим иметь опыт в розработке настольных програм",
    one_day: "Однажды мы будем иметь достаточно опыта и ресурсов чтобы работать только на свои мечты.",
    contact_step: "Мы в постоянных поисках новых проектов. У Вас есть идея? Мы готовы Вам помочь."

  },
  uan: {
    about: "У кожного із нас є мрії. Мрії до яких ми рухаємося семимильними або сантиметровими кроками, але рухаємося. Ми віримо що шлях до світлого майбутнього пролягає лише через наші спільні зусилля. І як би це пафонсо не звучало, але це правда і разом ми зробимо це!",
    first_step: "Зробіть перший крок! Розкажіть нам про вашу мрію за чашкою запашної кави",
    second_step: "Ваше бачення ідеї ми втілюємо в технічному плані, який разом узгоджуємо",
    third_step: "Під час роботи ативно спілкуємося і ділимося результатами",
    fourth_step: "Реліз проекту в зазначений час і при потребі його підтримка",
    dream_team: "Команда мрійників, які хочуть допомогти Вам",
    web_tech: "Розробка потужних WEB застосунків з використанням сучасних фреймворків: AngularJS, BackboneJS, Ruby on Rails",
    mobile_tech: "Ми підримуємо весь стек розробки під мобільні платформи",
    desktop_tech: "Хочемо мати досвід у створенні настільного програмного забезпечення",
    one_day: "Одного дня ми будемо мати достатньо досвіду і ресурсів щоб працювати лише на свої мрії.",
    contact_step: "Ми в постійних пошуках нових проектів. У вас є ідеї? Ми із радістю допоможемо Вам."
  },
  eng: {
    about: "Everybody has a dream. Dreams we move forvard to by tiny and little steps. We belive, that our way to the bright future lies threw our collective effort. And we trust, that we'll make it!",
    first_step: "Make your first step! Tell us about your dream over coffee.",
    second_step: "Your vision of idea we embody in technical plan, that conform together.",
    third_step: "During developing we make active communication and share our results.",
    fourth_step: "In time project release and future support.",
    dream_team: "The Dreamers Team, which make Your Dream will come true",
    web_tech: "Developing powerfull WEB application using modern frameworks: AngularJS, BackboneJS, Ruby on Rails",
    mobile_tech: "We developing for all mobile platforms",
    desktop_tech: "Loking for experience in creating desktop applications",
    one_day: "One day we'll have enuff experience and resourses working only for our dreams",
    contact_step: "We're currently accepting new client projects. Think we might help? We'd love to hear from you."
  },
  hun: {
    about: "Mindenkinek vannak almai. Almok amelyekhez megyünk óriási vagy kis léptekkel, de megyünk. Mi hiszük hogy az almok valóra válhatnak ha együtt  dolgozunk rajtuk!",
    first_step: "Tegye meg az első lepést! Mesejen nekünk az almáról egy forró kávé mellet ",
    second_step: "A maga ötletét összefoglaljuk  egy tervben, és közösen megbeszéljük aszt",
    third_step: "A munka folyamán aktívan beszeljük meg az eredményeket",
    fourth_step: "Igyekszünk időben elvégezni a munkát és segítünk a további fenntartásban",
    dream_team: "Az álmodozok csapatya, aki szeretne segíteni magának",
    web_tech: "WEB alkalmazások fejlesztése a legújabb eszközök használatával : AngularJS, BackboneJS, Ruby on Rails",
    mobile_tech: "Modern mobil alkalmazások fejlesztése",
    desktop_tech: "Szeretnénk új tapasztalatokat szerezni az asztali programok készítésében",
    one_day: "Egy napon mi készek leszünk arra hogy otthagyjuk eszt a munkát és csak a saját almainkat valósítsuk meg.",
    contact_step: "Új projektek keresünk. Van egy ötlete? Mi örömmel segítünk magának."
  },
};