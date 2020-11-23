---
works_index: true
hero_text: Свободная Площадка Современного Искусства
title: Главная
project_text: ''
footer_text: МАМ — Modern Art Museum, Гродно. Площадка для современного искусства,
  проекты в свободном формате, без цензуры, на различных плоскостях и поверхностях,
  актуальная информация о событиях в арт-пространстве Гродно. Клуб MAM — сообщество,
  готовое поддержать и развивать современное искусство, стать участниками, спонсорами
  арт-инициатив.
project2_text: ''
project3_text: ''
project4_text: ''

---
<Hero :text="$page.frontmatter.hero_text" />
<div style="margin: 0 auto 10vh auto">
<p style="font-size: clamp(1rem, 2.5vw, 1.5rem); margin: 2vh auto; text-align: center;">
открытый формат общения и творчества
</p>
</div>

<ClientOnly> <WorksList /> </ClientOnly>

<div style="margin: 0 5vw">
<p style="font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #7b808a; margin: 15vh auto; text-align: start; max-width: 1000px;">
МАМ&nbsp;&mdash; Modern Art Museum, Гродно. Площадка для современного искусства, проекты на&nbsp;различных плоскостях и&nbsp;поверхностях, которые позволят в&nbsp;свободном формате без цензуры выставляться гродненским художникам, скульпторам, дизайнерам, архитекторам, проводить перфомансы, фестивали, творческие акции. МАМ&nbsp;&mdash; это еще интервью, рецензии, обзоры, актуальная информация о&nbsp;выставках и&nbsp;проектах, событиях в&nbsp;арт-пространстве Гродно.
</p>
</div>

<ClientOnly> <ProjectList /> </ClientOnly>