---
works_index: true
hero_text: Свободная площадка современного искусства
title: Hero
project_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'

---
<transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
<Hero :text="$page.frontmatter.hero_text" />
</transition>

<transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
<ClientOnly>
  <WorksList />
</ClientOnly>
</transition>

<Hero :text="$page.frontmatter.project_text" />

<ProjectList />
