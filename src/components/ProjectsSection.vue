<template>
  <section id="projects">
    <h2>プロジェクト</h2>
    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsSection',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: '貸し借り管理アプリ',
          description: 'Flutter と Firebase を使用したアプリ開発',
          technologies: ['Flutter', 'Firebase', 'Dart']
        },
        {
          id: 2,
          title: 'ゲーム関連サイト',
          description: 'Next.js を用いた Web アプリケーション開発',
          technologies: ['Next.js', 'React', 'TypeScript']
        }
      ]
    }
  }
}
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-stack span {
  background-color: #e0e0e0;
  color: #333;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.9em;
}
</style>
