import logo from "../images/logo.svg";
import photo from "../images/photo.png";
import banner from "../images/movie_banner.png";
import banner2 from "../images/movie_banner-2.png";

export const data = {
  header: {
    logo: {
      src: logo,
      alt: "Логотип",
    },
    unauth: {
      register: {
        text: "Регистрация",
        path: "/signup",
      },
      login: {
        text: "Войти",
        path: "/signin",
      },
    },
    auth: {
      account: {
        text: "Аккаунт",
        path: "/profile",
      },
      links: [
        {
          name: "Главная",
          path: "/",
          isDesktopHidden: true,
        },
        {
          name: "Фильмы",
          path: "/movies",
        },
        {
          name: "Сохраненные фильмы",
          path: "/saved-movies",
        },
      ],
    },
  },
  footer: {
    title: "Учебный проект Яндекс.Практикум х BeatFilm.",
    links: [
      { name: "Яндекс.Практикум", href: "/" },
      { name: "Github", href: "/" },
    ],
  },
  promo: {
    title: "Учебный проект студента факультета Веб-разработки.",
  },
  aboutProject: {
    title: "О проекте",
    description: {
      stages: {
        title: "Дипломный проект включал 5 этапов",
        text: "Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.",
      },
      duration: {
        title: "На выполнение диплома ушло 5 недель",
        text: "У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.",
      },
    },
    durationBar: {
      frontend: {
        name: "Front-end",
        duration: "4 недели",
      },
      backend: {
        name: "Back-end",
        duration: "1 неделя",
      },
    },
  },
  techs: {
    title: "Технологии",
    text: "На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.",
    stack: ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"],
  },
  aboutMe: {
    title: "Студент",
    name: "Виталий",
    profession: "Фронтенд-разработкич, 30 лет",
    photo: photo,
    about:
      "Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы. ",
    links: [{ name: "GitHub", link: "https://github.com/12-web" }],
  },
  portfolio: {
    title: "Портфолио",
    links: [
      { name: "Статичный сайт", href: "/" },
      { name: "Адаптивный сайт", href: "/" },
      { name: "Одностраничное приложение", href: "/" },
    ],
  },
  movies: {
    checkbox: {
      text: "Короткометражки",
      name: "isShort",
      baseClass: "movies",
    },
    moreContentButton: {
      name: "Еще",
    },
    list: [
      {
        name: "бег это свобода asjdkba kjs bdkjasb",
        duration: "765765",
        banner: banner,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner2,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner,
      },
      {
        name: "бег это свобода asdln alskdn alskdn alksnd",
        duration: "765765",
        banner: banner,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner,
      },
    ],
  },
  savedMovies: {
    checkbox: {
      text: "Короткометражки",
      name: "isShort",
      baseClass: "movies",
    },
    moreContentButton: {
      name: "Еще",
    },
    list: [
      {
        name: "бег это свобода asjdkba kjs bdkjasb",
        duration: "765765",
        banner: banner,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner2,
      },
      {
        name: "бег это свобода",
        duration: "765765",
        banner: banner,
      },
    ],
  },
  register: {
    title: "Добро пожаловать!",
    submit: "Зарегистрироваться",
    link: {
      description: "Уже зарегистрированы?",
      href: "/signin",
      text: "Войти",
    },
  },
  login: {
    title: "Рады видеть!",
    submit: "Отправить",
    link: {
      description: "Ещё не зарегистрированы?",
      href: "/signup",
      text: "Регистрация",
    },
  },
  profile: {
    greet: {
      text: "Привет,",
    },
    signout: {
      text: "Выйти из аккаунта",
    },
    edit: {
      init: { text: "Редактировать" },
      save: { text: "Cохранить" },
    },
  },
};
