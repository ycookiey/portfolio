<template>
  <section id="skills">
    <h2>スキル</h2>
    <div class="skills-grid">
      <div v-for="skill in skills" :key="skill.name" class="skill-item">
        <div class="skill-icon">
          <img :src="getSkillIcon(skill.name)" :alt="skill.name" />
        </div>
        <p>{{ skill.name }}</p>
        <div class="skill-level"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
  data() {
    return {
      skills: [
        { name: 'JavaScript' },
        { name: 'TypeScript' },
        { name: 'Vue.js' },
        { name: 'React' },
        { name: 'Flutter' },
        { name: 'Python' },
        { name: 'Firebase' },
        { name: 'Git' }
      ]
    }
  },
  methods: {
    getSkillIcon(skillName) {
      const iconMap = {
        JavaScript:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        TypeScript:
          'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
        Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
        Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
      }

      return iconMap[skillName] || 'https://via.placeholder.com/50'
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
  object-fit: contain;
}

.skill-level {
  margin-top: 0.75rem;
}

@keyframes fill {
  0% {
    width: 0;
  }
  100% {
    width: var(--skill-level);
  }
}

.skill-item:hover .skill-progress {
  animation: fill 1s forwards;
}
</style>
