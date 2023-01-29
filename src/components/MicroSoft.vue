<template>
  <div class="navbar flex ml-8 py-3">
    <div class="flex justify-content-start align-items-center gap-5">
      <div>
        <img
          v-bind:src="'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31'"
          style="height: 23px"
        />
      </div>
      <div>
        <a :href="'https://www.microsoft.com/microsoft-365'">Microsoft 365</a>
      </div>
      <div>
        <a
          :href="'https://www.microsoft.com/microsoft-teams/group-chat-software'"
          >Teams</a
        >
      </div>
      <div>
        <a :href="'https://www.microsoft.com/en-in/windows/'">Windows</a>
      </div>
      <div>
        <a :href="'https://www.microsoft.com/surface'">Surface</a>
      </div>
      <div>
        <a :href="'https://www.xbox.com/'">Xbox</a>
      </div>
      <div>
        <a :href="'https://support.microsoft.com/en-in'">Support</a>
      </div>
    </div>

    <div
      class="flex justify-content-end align-items-center gap-5"
      style="margin-left: 300px"
    >
      <div>
        <a :href="'https://support.microsoft.com/en-in'">All Microsoft</a>
      </div>
      <div>
        <i class="pi pi-search"></i>
      </div>
      <div>
        <i class="pi pi-shopping-cart"></i>
      </div>
      <div>
        <i class="pi pi-user-plus"></i>
      </div>
    </div>
  </div>
  <div class="container">
    <div>
      <h2>Microsoft 365</h2>
      <p>Everything you need to achieve more in less time</p>
      <div>
        <ButTon
          :href="'https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf?icid=mscom_marcom_H1a_M365Personal'"
          >For one person</ButTon
        >
        <a
          href="https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_H1b_M365Family"
        >
          For up to six people
        </a>
      </div>
      <img
        v-bind:src="'  https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP4-1399x600'"
      />
    </div>
  </div>
  <div
    class="container-1 flex justify-content-center alignt-items-center gap-8 my-8"
  >
    <div>
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40'"
        />
      </div>
      <div class="mt-2">
        <a href="https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface">
          Choose your Microsoft 365
        </a>
      </div>
    </div>
    <div>
      <div>
        <img
          v-bind:src="'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Tablet-Kickstand-Landscape-Mode-Fluent-80x80?wid=40&hei=40'"
        />
      </div>
      <div class="mt-2">
        <a href="https://www.microsoft.com/en-in/surface?icid=MSCOM_QL_Surface">
          Explore Surface devices
        </a>
      </div>
    </div>
    <div class="text-align-center">
      <img
        v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Xbox-Logo-80x80?wid=40&hei=40'"
      />
      <div class="mt-2">
        <a
          href="https://www.microsoft.com/en-in/store/b/xbox?icid=MSCOM_QL_Xbox"
        >
          Buy Xbox games
        </a>
      </div>
    </div>
    <div>
      <img
        v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/icon-LL-Windows-Logo-80x80?wid=40&hei=40'"
      />
      <div class="mt-2">
        <a
          href="https://www.microsoft.com/en-in/windows/get-windows-11?icid=MSCOM_QL_Windows"
        >
          Get Windows 11
        </a>
      </div>
    </div>
  </div>
  <div class="card flex justify-content-center align-items-center gap-4 px-5">
    <div class="card1 flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop'"
        />
        <h2>Surface Pro 9</h2>
        <p class="text-900 line-height-4">
          The tablet flexibility you want and the laptop performance you need —
          all in one ultra-portable device.
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/surface/devices/surface-pro-9?icid=mscom_marcom_CPH1a_SurfacePro9&amp;FY23FallSurface'"
            >Learn more</a
          >
        </div>
      </div>
    </div>
    <div class="card2 flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-M1-Platinum-01-1?wid=297&hei=167&fit=crop'"
        />
        <h2>Surface Laptop 5</h2>
        <p class="text-900 line-height-4">
          Sophisticated style and multitasking speed powered by 12th Gen Intel®
          Core, with Windows 11
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/surface/devices/surface-pro-9?icid=mscom_marcom_CPH1a_SurfacePro9&amp;FY23FallSurface'"
            >Learn more</a
          >
        </div>
      </div>
    </div>

    <div class="card3 flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Event-Education-Reimagined-Student-Teacher?wid=297&hei=167&fit=crop'"
        />
        <h2>Reimagine Education</h2>
        <p class="text-900 line-height-4">
          Unlock the full potential of every student. Join us for a digital
          event on 9 February at 10:30 PM IST or 9 February at 7:30 AM IST.
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/surface/devices/surface-pro-9?icid=mscom_marcom_CPH1a_SurfacePro9&amp;FY23FallSurface'"
            >Learn more</a
          >
        </div>
      </div>
    </div>
    <div class="card4 flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Surface-Laptop-Studio-01-CP?wid=297&hei=167&fit=crop'"
        />
        <h2>Surface Laptop Studio</h2>
        <p class="text-900 line-height-4">
          Flex your creative muscle on the most powerful Surface Laptop. Now
          available with Windows 11.
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/surface?icid=mscom_marcom_CPH4a_SurfaceLaptopStudio'"
            >Shop now</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="container-3 flex justify-content-center mt-8 mb-5">
    <div>
      <img
        v-bind:src="'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-Xbox-Series-S-Light-Background:VP4-1260x600'"
      />
      <h1>Xbox Series X</h1>
      <p>The fastest, most powerful Xbox ever</p>

      <ButTon
        :href="'https://www.xbox.com/en-in/consoles/xbox-series-x?icid=mscom_marcom_MPH1a_XboxSeriesX'"
        >Shop Now</ButTon
      >
    </div>
  </div>
  <h1 class="ml-5 mb-0">For business</h1>
  <div class="cards flex gap-4 px-5">
    <div class="flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Family-2022-M2-1?wid=297&hei=167&fit=crop'"
        />
        <h2>Surface for business family</h2>
        <p class="text-900 line-height-4">
          Surface for Business devices enable work on your team's terms with
          flexibility, built-in security and the power they need to succeed.
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/surface/business?icid=mscom_marcom_CPW1a_SurfaceforBusiness&amp;FY23FallSurface_VSB'"
          >
            Learn more</a
          >
        </div>
      </div>
    </div>
    <div class="flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=297&hei=167&fit=crop'"
          class="-mt-5"
        />
        <h2>Get Microsoft Teams for free</h2>
        <p class="text-900 line-height-4">
          Online meetings, chat and shared cloud storage – all in one place..
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/microsoft-teams/free?icid=mscom_marcom_CPW2a_MicrosoftTeams'"
          >
            Sign up for free</a
          >
        </div>
      </div>
    </div>

    <div class="flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-For-Business-Woman-Teams-Call?wid=297&hei=167&fit=crop'"
          class="mt-5"
        />
        <h2>Try Microsoft 365 for free</h2>
        <p class="text-900 line-height-4">
          Get Microsoft Teams, secure cloud storage and premium apps across
          devices with a free one-month Microsoft 365 Business Standard
          trial.ed.
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/microsoft-365/business/compare-all-microsoft-365-business-products?icid=mscom_marcom_CPW3a_M365forBusiness&amp;activetab=tab%3aprimaryr2'"
          >
            Start your free trial</a
          >
        </div>
      </div>
    </div>
    <div class="flex justify-content-center align-items-center">
      <div>
        <img
          v-bind:src="'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=297&hei=167&fit=crop'"
        />
        <h2>Windows 11 for business</h2>
        <p class="text-900 line-height-4">
          Flex your creative muscle on the most powerful Surface Laptop. Now
          available with Windows 11
        </p>
        <div>
          <a
            :href="'https://www.microsoft.com/en-in/windows/business?icid=mscom_marcom_CPW4a_Windows11forBusiness'"
          >
            Learn more</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="media flex mt-8 align-items-center">
    <p class="ml-5">Follow Microsoft</p>
    <img
      v-bind:src="' https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Facebook%202x?scl=1'"
      style="height: 32px"
      class="ml-5"
    />
    <img
      v-bind:src="'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Twitter%202x?scl=1'"
      style="height: 32px"
      class="ml-5"
    />
    <img
      v-bind:src="'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/YouTube%202x?scl=1'"
      style="height: 32px"
      class="ml-5"
    />
  </div>
  <div class="foote flex justify-content-center mt-8 py-5 gap-8">
    <div>
      <h4>What's new</h4>

      <p>Microsoft 365</p>
      <p>Games</p>
      <p>Surface Pro 9</p>
      <p>Surface Laptop 5</p>
      <p>Surface Laptop Studio</p>
      <p>Surface Laptop Go 2</p>
      <p>Windows 11 apps</p>
    </div>
    <div>
      <h4>Microsoft Store</h4>
      <p>Microsoft 365</p>
      <p>Download Center</p>
      <p>Microsoft Store Support</p>
      <p>Order tracking</p>
    </div>
    <div>
      <h4>Education</h4>

      <p>Microsoft in education</p>
      <p>Devices for education</p>
      <p>Microsoft Teams for Education</p>
      <p>Microsoft 365 Education</p>
      <p>Office Education</p>
      <p>Educator training and development</p>
      <p>Deals for students and parents</p>
      <p>Azure for students</p>
    </div>
    <div>
      <h4>Business</h4>

      <p>Microsoft Cloud</p>
      <p>Azure</p>
      <p>Dynamics 365</p>
      <p>Microsoft 365</p>
      <p>Microsoft Advertising</p>
      <p>Microsoft Industry</p>
      <p>Microsoft Teams</p>
    </div>
    <div>
      <h4>Developer & IT</h4>

      <p>Documentation</p>
      <p>Microsoft Learn</p>
      <p>Microsoft Tech Community</p>
      <p>Azure Marketplace</p>
      <p>AppSource</p>
      <p>Microsoft Power Platform</p>
      <p>Microsoft Teams</p>
    </div>

    <div>
      <h4>Company</h4>

      <p>Careers</p>
      <p>About Microsoft</p>
      <p>Company news</p>
      <p>Privacy at Microsoft</p>
      <p>Investors</p>
      <p>Security</p>
      <p>Sustainability</p>
    </div>
  </div>
</template>

<script></script>
<style scoped>
.navbar a {
  color: black;
  text-decoration: none;
}
.navbar a:hover {
  text-decoration: underline;
}
.container h2 {
  position: relative;
  top: 300px;
  left: 122px;
  font-size: 35px;
}
.container {
  margin-top: -168px;
}
.container p {
  position: relative;
  top: 300px;
  left: 122px;
}
.container ButTon {
  position: relative;
  top: 315px;
  left: 122px;
  border-radius: inherit;
}
.container a {
  position: relative;
  top: 303px;
  left: 155px;
  color: black;
  text-decoration: none;
  font-weight: 600;
}
.container-1 div {
  text-align: center;
}

.card a {
  text-decoration: none;
  font-weight: bolder;
  color: #0067b8;
}
.container-3 h1 {
  position: relative;
  top: -392px;
  left: 800px;
}
.container-3 p {
  position: relative;
  top: -395px;
  left: 800px;
}
.container-3 button {
  position: relative;
  top: -388px;
  left: 800px;
  border-radius: inherit;
}
.cards a {
  text-decoration: none;
  font-weight: bolder;
  color: #0067b8;
}
.foote {
  background-color: #f2f2f2;
}
.foote h4 {
  color: #936f6f;
}
.foote p {
  color: #616161;
  font-size: 14px;
}
</style>
