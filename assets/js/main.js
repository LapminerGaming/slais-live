addEventListener('DOMContentLoaded', (event) => {
    const header = `
<nav class="menu">
        <div class="menuLogo"><h1>BestNico</h1></div>
        <div class="menuLinks">
          
        <div class="menuButtons">
          <div class="menuButton"></div>
        </div>
      </nav>
      <div class="sideBar">
        <div class="sideBarBox">
                      <a class="sideBarLink" href="/">Trang chủ</a
          >

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="/ai.html"
            >NicoAI - Trí tuệ nhân tạo</a
          >

          <a class="sideBarLink" href="/phanmem/">
              Phần mềm - Ứng dụng linh tinh
          </a>

          <a class="sideBarLink" href="/nhakho/"
            >Nhà kho(kho Phế liệu) của Nico
          </a>

          
        </div>
      </div>

      <div class="overlay"></div>

`;

    const headerContainer = document.querySelector('#header');

    headerContainer.innerHTML = header;

    const menu = document.querySelector('.header');
    const menuButton = document.querySelector('.menuButtons');

    menuButton.addEventListener('click', () => {
        menu.classList.toggle('menuOpen');
    });
});

addEventListener('DOMContentLoaded', (event) => {
    const footer = `
              <div class="footerTop">
                    <div class="container">
                        <p>© KitoMC 2023</p>
                        <p>Make by KitoMC & ChatGPT</p>
                    </div>
                </div>
  `;

    const footerContainer = document.querySelector('#footer');

    footerContainer.innerHTML = footer;
});
