---
works_index: true
hero_text: "<strong>Свободная площадка современного искусства, Гродно</strong>"
title: Hero

---
<Hero :text="$page.frontmatter.hero_text" />
<ClientOnly>
  <WorksList />
</ClientOnly>
<Hero :text="$page.frontmatter.project_text" />
<ProjectList />
