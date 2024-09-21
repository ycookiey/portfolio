<template>
  <section id="skills">
    <h2>スキル</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <div class="skill-icon">
          <img src="" :alt="skill.name" />
        </div>
        <p>{{ skill.name }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [{ name: 'JavaScript' }, { name: 'Vue.js' }, { name: 'Flutter' }, { name: 'Python' }]
    }
  }
}
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-item {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: center;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.skill-icon img {
  width: 50px;
  height: 50px;
  margin-bottom: 0.5rem;
}
</style>
