import {
  initializeMobileMenu,
  setCurrentPageIconLink,
  getInstantClick,
  initializeTouchDevice,
} from '../topNavigation/utilities';

window.getFocusTrapToggle = async (selector) => {
  const [{ Modal }, { render, h }] = await Promise.all([
    import('@crayons/Modal'),
    import('preact'),
  ]);
  const modalRoot = document.createElement('div');
  document.body.appendChild(modalRoot);

  render(
    <Modal
      title="Log in to continue"
      onClose={() => {
        render(null, modalRoot);
      }}
      size="s"
    >
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: document.querySelector(selector).innerHTML,
        }}
      />
    </Modal>,
    modalRoot,
  );
};

function getPageEntries() {
  return Object.entries({
    'notifications-index': document.getElementById('notifications-link'),
    'chat_channels-index': document.getElementById('connect-link'),
    'moderations-index': document.getElementById('moderation-link'),
    'stories-search': document.getElementById('search-link'),
  });
}

const menus = [...document.getElementsByClassName('js-hamburger-trigger')];
const moreMenus = [...document.getElementsByClassName('js-nav-more-trigger')];

getInstantClick().then((spa) => {
  spa.on('change', () => {
    const { currentPage } = document.getElementById('page-content').dataset;

    setCurrentPageIconLink(currentPage, getPageEntries());
  });
});

const { currentPage } = document.getElementById('page-content').dataset;
const memberMenu = document.getElementById('crayons-header__menu');
const menuNavButton = document.getElementById('member-menu-button');

setCurrentPageIconLink(currentPage, getPageEntries());
initializeMobileMenu(menus, moreMenus);
initializeTouchDevice(memberMenu, menuNavButton);
