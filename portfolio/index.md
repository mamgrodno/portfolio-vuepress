---
works_index: true
hero_text: Свободная площадка современного искусства
title: Главная
project_text: МАМ — Modern Art Museum, Гродно. Площадка для современного искусства,
  проекты в свободном формате, без цензуры, на различных плоскостях и поверхностях,
  актуальная информация о событиях в арт-пространстве Гродно. Клуб MAM — сообщество,
  готовое поддержать и развивать современное искусство, стать участниками, спонсорами
  арт-инициатив.
project2_text: ''
project3_text: ''
project4_text: ''
footer_text: ''

---
<transition name = "router-anim" enter-active-class = "animate__animated animate__fadeIn" leave-active-class = "animate__animated animate__fadeIn"> <Hero: text = "$page.frontmatter.hero_text" /> </transition>

<ClientOnly> <WorksList /> </ClientOnly>

<Hero: text = "$page.frontmatter.project_text" /> <ClientOnly> <ProjectList /> </ClientOnly>