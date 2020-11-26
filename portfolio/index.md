---
works_index: true
hero_text: Свободная Площадка Современного Искусства
hero_subtitle: открытый формат общения и творчества
title: Главная
project_text: ''
footer_text: Вместо художественного музея в Гродно в центре города планируют показывать
  «зверей и партизан». После реконструкции, в сентябре 2021 года, наиболее вероятное
  здание для музея, Дворец текстильщиков, власти решили отдать для демонстрации флоры,
  фауны и партизанского движения в регионе.
project2_text: ''
project3_text: ''
project4_text: ''

---
<Hero :text="$page.frontmatter.hero_text" />
<Hero :sub="$page.frontmatter.hero_subtitle" />


<ClientOnly> <WorksList /> </ClientOnly>

<div style="margin: 0 5vw">
<p style="font-size: clamp(1rem, 2.5vw, 1.5rem);
    color: #7b808a; margin: 15vh auto; text-align: start; max-width: 800px;">
МАМ&nbsp;&mdash; Modern Art Museum, Гродно. Площадка для современного искусства, проекты на&nbsp;различных плоскостях и&nbsp;поверхностях, которые позволят в&nbsp;свободном формате без цензуры выставляться гродненским художникам, скульпторам, дизайнерам, архитекторам, проводить перфомансы, фестивали, творческие акции. МАМ&nbsp;&mdash; это еще интервью, рецензии, обзоры, актуальная информация о&nbsp;выставках и&nbsp;проектах, событиях в&nbsp;арт-пространстве Гродно.
</p>
</div>

<ClientOnly> <ProjectList /> </ClientOnly>