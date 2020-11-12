---
works_index: true
hero_text: Свободная площадка современного искусства
title: Главная
project_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'

---
<transition name="router-anim" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeIn">
<Hero :text="$page.frontmatter.hero_text" />
</transition>

<ClientOnly>
<WorksList />
</ClientOnly>

<Hero :text="$page.frontmatter.project_text" />
<ClientOnly><ProjectList /></ClientOnly>

