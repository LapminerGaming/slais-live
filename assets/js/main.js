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
  // Replace 'YOUR_CHANNEL_ID' with your actual YouTube channel ID
  const channelId = 'UCqZ4kYJ3QFdihfa3rZZa9Sg';
  const apiKey = 'AIzaSyBYJQWBBBoOFEFS0yd3FoFHoLTo7NavKu0';
  const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

  // Function to fetch subscriber count
  async function fetchSubscriberCount() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const subscriberCount = data.items[0].statistics.subscriberCount;
      document.getElementById('subscriberCount').innerText = `Subscriber Count: ${subscriberCount}`;
    } catch (error) {
      console.error('Error fetching subscriber count:', error);
      document.getElementById('subscriberCount').innerText = 'Error fetching subscriber count';
    }
  }

  fetchSubscriberCount();
