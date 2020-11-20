---
works_index: true
hero_text: Свободная площадка современного искусства
title: Главная
project_text: one two
footer_text: МАМ — Modern Art Museum, Гродно. Площадка для современного искусства,
  проекты в свободном формате, без цензуры, на различных плоскостях и поверхностях,
  актуальная информация о событиях в арт-пространстве Гродно. Клуб MAM — сообщество,
  готовое поддержать и развивать современное искусство, стать участниками, спонсорами
  арт-инициатив.

---
<Hero :text="$page.frontmatter.hero_text" />
<ClientOnly> <WorksList /> </ClientOnly>

<Hero :text="$page.frontmatter.project_text" />
<ClientOnly> <ProjectList /> </ClientOnly>