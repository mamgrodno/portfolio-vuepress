<template>
<div>
  <header
    class="header"
    :style="{
      top: '0',
      left: '0',
      width: '100%',
    }"
  >

    <!-- <nav v-if="navLinks" class="navigation left desktop-nav">
      <ul>
        <router-link
          v-for="nav in navLinks"
          :key="nav.text"
          v-if="nav.position === 'left' && !nav.external"
          tag="li"
          :to="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        />
        <li v-for="nav in navLinks" v-if="nav.position === 'left' && nav.external">
          <a :href="nav.link" target="_blank">{{ nav.text }}</a>
        </li>
      </ul>
    </nav> -->

    <div class="brand">
      <a href="/">
        <div
          v-if="logo"
          class="logo"
          :style="{ backgroundImage: `url(${logo})`}"
          :title="$site.title"
        />
        <span v-else>{{ $site.title }}</span>
      </a>
      <!-- <div class="logo-text">
        <ul>
          <li>Свободная Площадка</li>
          <li>Современного Искусства,</li>
          <li>открытый формат общения и творчества</li>
        </ul>
      </div> -->
    </div>

    <nav class="navigation right desktop-nav">
      <ul>
        <li v-for="filter in filters" :key="filter.text"><span @click="click_on_nav">{{ filter.text }}</span></li>
        <a
          v-for="nav in navLinks"
          :key="nav.text"
          tag="li"
          :href="nav.link"
          active-class="active"
          v-text="nav.text"
          exact
        ></a>
        <li v-for="nav in navLinks" v-if="nav.position === 'right' && nav.external">
          <a :href="nav.link" target="_blank">{{ nav.text }}</a>
        </li>
        <li>
          <SearchBox />
        </li>
      </ul>
    </nav>

    <div class="mobile-nav-toggle" @click="toggleMobileNav" />
    <div class="mobile-nav" :class="{'mobile-nav--active': mobileNavActive}">
      <nav>
        <ul @click="toggleMobileNav">
          <li v-for="filter in filters" :key="filter.text"><span @click="click_on_nav">{{ filter.text }}</span></li>
          <li>
          <a
            v-for="nav in navLinks"
            :key="nav.text"
            v-if="!nav.external"
            tag="li"
            :href="nav.link"
            active-class="active"
            v-text="nav.text"
            exact
          ></a>
          </li>
          <li v-for="nav in navLinks" v-if="nav.external" @click="toggleMobileNav">
            <a :href="nav.link" target="_blank">{{ nav.text }}</a>
          </li>
        </ul>
        <div class="mobile-nav-close" @click="toggleMobileNav" />
      </nav>
    </div>
  </header>
  <div v-if="this.tags">
    <div class="project-list">
    <div v-for="project in projects"
          :key="project.title"
          class="projectbox"
          @click="click_on_link">
        <router-link
          :to="project.path"
          class="link"
          >
          <div class="image">
            <img :src="project.frontmatter.thumbnail" alt="">
          </div>
          <div class="gradientbox">
            <!-- <div v-if="project.frontmatter.size < 3" class="projectinfo-small">
              <h2>{{ project.frontmatter.heading }}</h2>
              <h3 v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
            <div v-else-if="project.frontmatter.size < 5" class="projectinfo-medium">
              <h2>{{ project.frontmatter.heading }}</h2>
              <h3 v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div> -->
            <div class="projectinfo">
              <h2>{{ project.frontmatter.heading }}</h2>
              <h3 v-if="project.frontmatter.description">{{ project.frontmatter.description }}</h3>
            </div>
          </div>
        </router-link>
    </div>
  </div>
  </div>
</div>
</template>

<script>
  import SearchBox from '@SearchBox';

  export default {
    components: {
      SearchBox,
    },
    props: {
      logo: {
        type: String,
        required: false,
      },
      sticky: {
        type: Boolean,
        required: false,
      }
    },
    data() {
      return {
        mobileNavActive: false,
        tags: false,
        clicked_tag: '',
      }
    },
    computed: {
      navLinks() {
        return this.$site.themeConfig.nav
      },
      filters() {
        return this.$site.themeConfig.filters
      },
      projects() {
        return this.$site.pages
          .filter(x => x.path.startsWith('/projects/') && !x.frontmatter.project_index && x.frontmatter.navigation == this.clicked_tag)
          .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
      },
    },
    methods: {
      toggleMobileNav() {
        this.mobileNavActive = !this.mobileNavActive
      },
      click_on_nav: function(e) {
        this.tags = true
        this.clicked_tag = e.currentTarget.innerHTML
        if (this.tags == true) {
          document.getElementById('main-container').style.display = "none"
        } else {
          document.getElementById('main-container').style.display = "block"
        }
      },
      click_on_link: function(e) {
        this.tags = false
        document.getElementById('main-container').style.display = "block"
      }
    }
  }
</script>

<style scoped>

  .brand {
    display: flex;
    align-items: center;
  }

  .logo-text {
    text-transform: uppercase;
    text-decoration: none;
    font-size: .8rem;
  }
  .logo-text ul {
    list-style-type: none;
  }
  .logo-text li {
    margin: .5rem 0;
  }

  .search-box {
    margin: 0 1rem;
  }
  .search-box input {
    background-color: rgb(0, 0, 0) !important;
  }

  .header {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    position: relative;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    padding: 0 12vw;
    font-size: clamp(.5rem, 1vw, 0.8rem);
    font-weight: 600;
    z-index: 300;
    background-color: white;
    color: black;
    text-transform: uppercase;
  }

  .logo {
    /* position: absolute; */
    width: 8rem;
    height: 8rem;
    margin-right: 1.5rem;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    /* left: 10%;
    top: 50%;
    transform: translate(-50%,-50%); */
  }
  @media screen and (max-width: 600px) {
    .logo {
      left: 20%;
    }
  }

  .navigation li {
    display: inline-block;
    list-style: none;
    margin-right: 1rem;
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }
  .navigation a {
    display: inline-block;
    list-style: none;
    margin-right: 1rem;
    user-select: none;
    cursor: pointer;
    border-bottom: 1px solid transparent;
  }

  /* .navigation li:last-of-type {
    margin: 0;
  } */
  .navigation a:last-of-type {
    margin: 0;
  }

  .navigation li:hover {
    border-bottom: 1px solid white;
  }
  .navigation a:hover {
    border-bottom: 1px solid white;
  }

  .active {
    border-bottom: 1px solid white;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:active { color: inherit; }
  a:visited { color: inherit; }

  .desktop-nav {
    display: none;
  }

  .mobile-nav {
    display: block;
    position: absolute;
    background: #ffffff;
    color: black;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 2rem;
    transform: translateY(-100%);
    transition: transform 0.35s ease-in-out;
    text-align: center;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 2;
  }

  .mobile-nav li {
    list-style: none;
    cursor: pointer;
    transition: opacity 0.15s;
    display: flex;
    flex-direction: column;
  }

  .mobile-nav li:hover {
    opacity: 0.6;
  }

  .mobile-nav--active {
    transform: translateY(0);
  }

  .mobile-nav-close {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 3rem;
    height: 3rem;
    padding: 3rem;
    background-image: url('/close.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle {
    display: block;
    width: 3rem;
    height: 3rem;
    background-image: url('/burger.svg');
    background-position: center;
    background-size: 1.5rem;
    background-repeat: no-repeat;
    transition: opacity 0.15s;
    cursor: pointer;
  }

  .mobile-nav-toggle:hover,
  .mobile-nav-close:hover {
    opacity: 0.6;
  }

  @media screen and (min-width: 1025px) {
    .desktop-nav {
      display: block;
    }
    .mobile-nav-toggle {
      display: none;
    }
    .mobile-nav {
      display: none;
    }
  }

  /* YO ITS PROJECT CSS */

 
  .tag {
    background-color: rgb(221, 221, 221);
    border-radius: 10px;
    padding: .4rem;
    margin-right: .4rem;
    cursor: pointer;
  }

  .gradientbox {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(0deg, rgba(13,12,8,1) 5%, rgba(242,242,242,0) 50%);
    opacity: 0;
    transition: ease-in-out 350ms;
    z-index: 200;
    position: absolute;
  }
  .gradientbox:hover {
    opacity: 1;
  }

  .image {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .image img {
    margin: 0;
    height: 100%;
  }

  @media only screen and (max-width: 600px) {
    /* .projectbox {
      grid-column: span 6 !important;
    } */
    .imgbox {
      height: 40vh !important;
    }
    .imgbox img {
      height: 40vh !important; 
    }
    .gradientbox {
      opacity: 1;
    }
    .logo-text {
      display: none;
    }
  }

  .projectinfo {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo h2 {
    margin: 0 1rem 0 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 1.5rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
  }

  .projectinfo h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: white;
  }

  .projectinfo-small {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo-small h2 {
    margin: 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 1.5rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
  }

  .projectinfo-small h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 2.5vw, 1.1rem);
    color: white;
  }

  .projectinfo-medium {
    position: absolute;
    width: 100%;
    bottom: 1rem;
  }

  .projectinfo-medium h2 {
    margin: 1rem;
    font-weight: 500;
    font-size: clamp(1rem, 5vw, 2.5rem);
    letter-spacing: -.025em;
    color: white;
    text-decoration: none;
  }

  .projectinfo-medium h3 {
    margin: 0 1rem;
    font-weight: 300;
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: white;
  }

  .link {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    position: relative;
  }

  img {
    margin: 0;
    min-height: 40vh;
    max-height: 70vh;
    object-fit: cover;
  }

  .imgbox {
    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    overflow: hidden; */
    object-fit: cover;
    transition: all .2s ease-in-out;
  }

  .imgbox:hover {
    transform: scale(1.04);
  }

  .projectbox {
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .project-list {
      margin: 5vh 3vh;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
</style>
