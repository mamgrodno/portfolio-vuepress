---
works_index: true
hero_text: "<strong>Свободная площадка современного искусства, Гродно</strong>"
title: Hero
project_text: 'Проекты или вставить свой текст <span style="text-decoration: underline;">подчеркиваю</span>
  <strong>жирный </strong>'

---
<Hero :text="$page.frontmatter.hero_text" />
<ClientOnly>
  <WorksList />
</ClientOnly>
<Hero :text="$page.frontmatter.project_text" />
<ProjectList />