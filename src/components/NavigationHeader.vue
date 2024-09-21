<template>
  <header>
    <nav>
      <a @click="scrollTo('about')" href="#about">自己紹介</a>
      <a @click="scrollTo('projects')" href="#projects">プロジェクト</a>
      <a @click="scrollTo('skills')" href="#skills">スキル</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationHeader',
  methods: {
    scrollTo(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1000;
}

nav a {
  color: #333;
  text-decoration: none;
  margin: 0 15px;
  font-weight: 600;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #42b983;
}

@media (max-width: 768px) {
  nav {
    flex-wrap: wrap;
  }

  nav a {
    margin: 5px 10px;
  }
}
</style>
