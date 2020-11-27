---
works_index: true
hero_text: Свободная Площадка Современного Искусства
hero_subtitle: открытый формат общения и творчества
title: Главная
project_text: ''
footer_text: МАМ — Modern Art Museum, Гродно.  Проекты на различных плоскостях и поверхностях,
  которые позволят в свободном формате без цензуры  проводить выставки, перфомансы,
  фестивали, творческие акции. МАМ — это еще общение, интервью, рецензии, обзоры,
  образование, актуальная информация о событиях в арт-пространстве Гродно, тенденциях
  в искусстве.
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
Вместо художественного музея в Гродно в центре города планируют показывать «зверей и партизан». После реконструкции, в сентябре 2021 года, наиболее вероятное здание для музея, Дворец текстильщиков, власти решили отдать для демонстрации флоры, фауны и партизанского движения в регионе.
</p>
</div>

<ClientOnly> <ProjectList /> </ClientOnly>