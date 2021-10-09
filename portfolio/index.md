---
works_index: true
hero_text: Свободная Площадка Современного Искусства
hero_subtitle: открытый формат общения и творчества
title: Главная
project_text: ''
footer_text: МАМ - Музей современного искусства, Гродно. Проекты на различных плоскостях
  и поверхностях, которые позволяют в свободном формате без цензуры проведения выставки,
  перфомансы, фестивали, творческие акции. МАМ - это еще общение, интервью, рецензии,
  обзоры, образование, актуальная информация о событиях в арт-рекламе Гродно, тенденциях
  в искусстве.
project2_text: ''
project3_text: ''
project4_text: ''

---
<Hero :text="$page.frontmatter.hero_text"/> <Hero :sub="$page.frontmatter.hero_subtitle" />

<ClientOnly> <WorksList /> </ClientOnly>

<div style="margin: 0 5vw"> <p style="font-size: clamp(1rem, 2.5vw, 1.5rem); color:#7b808a; margin: 15vh auto; text-align: start; max-width:800px">Свет трансформирует хаос и порядок в логическую, подвижную структуру. Он течет, движется, ощущается тактильно, замирает и пульсирует в черном стекле, на луне и бетоне, прерывает разговор, растворяет эмоции. В галерее 400kvadratov до 22 октября можно посмотреть арт-проект художника Александра Болдакова LUMINARIUM.</p> </div>

<ClientOnly> <ProjectList /> </ClientOnly>