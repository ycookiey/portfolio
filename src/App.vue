<template>
  <div id="app">
    <NavigationHeader />
    <main class="main-content">
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  </div>
</template>

<script>
import NavigationHeader from './components/NavigationHeader.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'

export default {
  name: 'App',
  components: {
    NavigationHeader,
    AboutSection,
    ProjectsSection,
    SkillsSection
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
  color: #333;
}

#app {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
