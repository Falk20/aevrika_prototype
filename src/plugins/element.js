import Vue from "vue";
import {
  Loading,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  MenuItem,
  Input,
  Pagination,
  Image,
  Dialog,
  Carousel,
  CarouselItem,
} from "element-ui";
import lang from "element-ui/lib/locale/lang/ru-RU";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Input);
Vue.use(Pagination);
Vue.use(Image);
Vue.use(Dialog);
Vue.use(Carousel);
Vue.use(CarouselItem);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
