import initScrollSuave from './modules/scroll-suave.js';
import initAnimacaoScroll from './modules/animacao-scroll.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropDownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';

const modal = Modal(
  '[data-modal="abrir"]',
  '[data-modal="fechar"]',
  '[data-modal="container"]',
);
modal.init();

initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();

