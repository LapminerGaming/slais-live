addEventListener('DOMContentLoaded', (event) => {
    const header = `
<nav class="menu">
        <div class="menuLogo"><h1>SLAIS</h1></div>
        
          
        
        </div>
        <div class="menuButtons">
          <div class="menuButton"></div>
        </div>
      </nav>
      <div class="sideBar">
        <div class="sideBarBox">
          <a class="sideBarLink" href="/"
            >Trang chủ</a
          >

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="/ai.html"
            >Trí tuệ nhân tạo</a
          >

          <a class="sideBarLink" href="/game/">
              Trò chơi
          </a>

          <a class="sideBarLink" href="/phanmem/"
            >Phần mềm - Ứng dụng
          </a>

          <a class="sideBarLink" href="https://kitomcvn.github.io/KitoMC/miniGame"
            ><img class="sideBarIcon" src="https://kitomcvn.github.io/KitoMC/assets/image/icons/saveIcon.png" />
            Mini Game
          </a>

          <div class="sideBarLine"></div>

          <a class="sideBarLink" href="https://youtube.com/@kitomc">
            <img
              class="sideBarIcon"
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/youtubeIcon.png"
            />YoutuBe
          </a>

          <a class="sideBarLink" href=""
            ><img
              class="sideBarIcon"
              src="https://kitomcvn.github.io/KitoMC/assets/image/icons/discordIcon.png"
            />Discord</a
          >
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
