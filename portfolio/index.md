---
works_index: true
hero_text: Свободная площадка современного искусства
title: Главная
project_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'
project2_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'
project3_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'
project4_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'
footer_text: '<hr style="margin-bottom:2rem;">МАМ&nbsp;&mdash; Modern Art Museum, Гродно. Площадка для современного искусства, проекты в&nbsp;свободном формате, без цензуры, на&nbsp;различных плоскостях и&nbsp;поверхностях, актуальная информация о&nbsp;событиях в&nbsp;арт-пространстве Гродно.
Клуб MAM&nbsp;&mdash; сообщество, готовое поддержать и&nbsp;развивать современное искусство, стать участниками, спонсорами арт-инициатив.<br>Контакты: mamgrodno@gmail.com'

---
<transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
<Hero :text="$page.frontmatter.hero_text" />
</transition>

<ClientOnly>
<WorksList />
</ClientOnly>

<Hero :text="$page.frontmatter.project_text" />
<ClientOnly><ProjectList /></ClientOnly>

<Hero :text="$page.frontmatter.project2_text" />
<ClientOnly> <ProjectList2 /> </ClientOnly>

<Hero :text="$page.frontmatter.project3_text" />
<ClientOnly> <ProjectList3 /> </ClientOnly>

<Hero :text="$page.frontmatter.project4_text" />
<ClientOnly> <ProjectList4 /> </ClientOnly>

<Hero :text="$page.frontmatter.footer_text" />