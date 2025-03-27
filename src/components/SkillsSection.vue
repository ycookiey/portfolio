<template>
  <section id="skills">
    <h2>スキル</h2>

    <div class="skills-container">
      <div
        v-for="group in skillGroups"
        :key="group.name"
        class="skill-group"
        :class="{ 'animation-complete': animationComplete }"
      >
        <h3 class="group-title">{{ group.name }}</h3>
        <div class="skills-grid">
          <div v-for="skill in group.skills" :key="skill" class="skill-item">
            <div class="skill-content">
              <div class="skill-icon-container">
                <img :src="getSkillIcon(skill)" :alt="skill" class="skill-icon" />
              </div>
              <span class="skill-name">{{ skill }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface SkillGroup {
  name: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    name: 'プログラミング言語',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Dart']
  },
  {
    name: 'フレームワーク & ライブラリ',
    skills: ['Vue.js', 'React', 'Next.js', 'Flutter', 'Prisma']
  },
  {
    name: 'ツール & サービス',
    skills: ['Firebase', 'Git', 'Docker', 'Vercel']
  }
]

const animationComplete = ref(false)

onMounted(() => {
  setTimeout(() => {
    animationComplete.value = true
  }, 500)
})

function getSkillIcon(skillName: string): string {
  const iconMap: Record<string, string> = {
    JavaScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    TypeScript:
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'Vue.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
    React: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    Flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    Firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
    Git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    Dart: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg',
    'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    Docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    Prisma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg',
    Vercel: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
  }

  return iconMap[skillName] || 'https://via.placeholder.com/50'
}
</script>

<style scoped>
#skills {
  padding-top: 1rem;
}

.skills-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 0.6s ease-out forwards;
}

.skill-group {
  padding: 0.5rem 0;
  transition: opacity 0.3s ease;
  position: relative;
}

.group-title {
  color: var(--secondary-color);
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  display: inline-block;
  position: relative;
}

.group-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: var(--accent-line-width);
  height: 3px;
  background-color: var(--primary-color);
  border-radius: 1.5px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
  gap: 2rem 1.5rem;
}

.skill-item {
  text-align: center;
  transition: transform 0.2s ease;
}

.skill-item:hover {
  transform: translateY(-3px);
}

.skill-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.skill-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  transition: transform 0.3s ease;
  width: 40px;
  height: 40px;
}

.skill-item:hover .skill-icon-container {
  transform: scale(1.1);
}

.skill-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-name {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animation-complete .skill-item {
  animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
  opacity: 0;
}

@keyframes popIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animation-complete .skill-item:nth-child(1) {
  animation-delay: 0.05s;
}
.animation-complete .skill-item:nth-child(2) {
  animation-delay: 0.1s;
}
.animation-complete .skill-item:nth-child(3) {
  animation-delay: 0.15s;
}
.animation-complete .skill-item:nth-child(4) {
  animation-delay: 0.2s;
}
.animation-complete .skill-item:nth-child(5) {
  animation-delay: 0.25s;
}
.animation-complete .skill-item:nth-child(6) {
  animation-delay: 0.3s;
}
.animation-complete .skill-item:nth-child(7) {
  animation-delay: 0.35s;
}
.animation-complete .skill-item:nth-child(8) {
  animation-delay: 0.4s;
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
    gap: 1.5rem 1rem;
  }

  .skill-icon-container {
    width: 36px;
    height: 36px;
  }

  .skill-name {
    font-size: 0.85rem;
  }
}
</style>
