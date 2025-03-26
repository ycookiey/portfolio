<template>
  <section id="projects">
    <h2>経験</h2>
    <div class="category-tabs">
      <button
        v-for="category in categories"
        :key="category.id"
        :class="[
          'tab-button',
          { active: activeCategory === category.id },
          { blink: shouldBlink(category.id) }
        ]"
        @click="handleCategoryClick(category.id)"
      >
        {{ category.name }}
      </button>
    </div>

    <div class="projects-grid">
      <div
        v-for="item in filteredProjects"
        :key="item.id"
        class="project-card"
        :class="{ blink: shouldProjectBlink(item.id) }"
        @click="openModal(item)"
      >
        <h3>{{ item.title }}</h3>
        <p class="period" v-if="item.period">{{ item.period }}</p>
        <p>{{ item.shortDescription }}</p>
        <div class="tech-stack">
          <span v-for="tech in item.technologies" :key="tech">{{ tech }}</span>
        </div>
      </div>
    </div>

    <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeModal">&times;</button>

        <div class="modal-header">
          <div class="title-section">
            <h2>{{ selectedProject.title }}</h2>
            <div class="header-info">
              <span class="category-tag">{{ getCategoryName(selectedProject.categoryId) }}</span>
              <span v-if="selectedProject.period" class="period-tag">{{
                selectedProject.period
              }}</span>
            </div>
          </div>
        </div>

        <div v-if="selectedProject.images?.length" class="image-slider">
          <div class="image-container">
            <img
              :src="selectedProject.images[currentImageIndex].src"
              :alt="selectedProject.images[currentImageIndex].alt"
              class="project-image"
            />
            <p
              v-if="selectedProject.images[currentImageIndex].description"
              class="image-description"
            >
              {{ selectedProject.images[currentImageIndex].description }}
            </p>
          </div>
          <div v-if="selectedProject.images.length > 1" class="image-navigation">
            <button @click="previousImage" :disabled="currentImageIndex === 0">&lt;</button>
            <button
              @click="nextImage"
              :disabled="currentImageIndex === selectedProject.images.length - 1"
            >
              &gt;
            </button>
          </div>
        </div>

        <div class="modal-section">
          <h3>概要</h3>
          <div class="description-content">
            {{ selectedProject.description }}
          </div>
        </div>

        <div v-if="selectedProject.teamStructure" class="modal-section">
          <h3>体制と役割</h3>
          <div class="description-content">
            {{ selectedProject.teamStructure }}
          </div>
        </div>

        <div v-if="selectedProject.technicalExperience?.length" class="modal-section">
          <h3>技術的経験</h3>
          <ul>
            <li v-for="(tech, index) in selectedProject.technicalExperience" :key="index">
              {{ tech }}
            </li>
          </ul>
        </div>

        <div v-if="selectedProject.features?.length" class="modal-section">
          <h3>主な機能</h3>
          <ul>
            <li v-for="(feature, index) in selectedProject.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>

        <div v-if="selectedProject.learnings" class="modal-section">
          <h3>得られた経験</h3>
          <div class="description-content">
            {{ selectedProject.learnings }}
          </div>
        </div>

        <div v-if="selectedProject.xPosts?.length" class="modal-section x-posts-section">
          <h3>関連投稿</h3>
          <div
            v-for="(post, index) in selectedProject.xPosts"
            :key="index"
            class="x-post-container"
          >
            <div class="twitter-embed" v-html="getTwitterEmbedCode(post.url)"></div>
            <p v-if="post.description" class="x-post-description">{{ post.description }}</p>
          </div>
        </div>

        <div class="tech-stack-full">
          <h3>使用技術</h3>
          <div class="tech-tags">
            <span v-for="tech in selectedProject.technologies" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { categories, projects } from '../data/projects'
import type { Project } from '../types/project'
import {
  CATEGORY_STORAGE_KEY_PREFIX,
  PROJECT_STORAGE_KEY_PREFIX,
  getFromStorage,
  saveToStorage,
  clearAllClickedStates
} from '../utils/storage'

const selectedProject = ref<Project | null>(null)
const activeCategory = ref('work')
const currentImageIndex = ref(0)
const clickedCategories = ref<Record<string, boolean>>({})
const clickedProjects = ref<Record<number, boolean>>({})

function handleTabClosing(event: BeforeUnloadEvent) {
  clearAllClickedStates()
}

onMounted(() => {
  categories.forEach((category) => {
    const hasClicked = getFromStorage(`${CATEGORY_STORAGE_KEY_PREFIX}${category.id}`, false)
    clickedCategories.value[category.id] = hasClicked
  })

  projects.forEach((project) => {
    const hasClicked = getFromStorage(`${PROJECT_STORAGE_KEY_PREFIX}${project.id}`, false)
    clickedProjects.value[project.id] = hasClicked
  })

  clickedCategories.value['work'] = true

  window.addEventListener('beforeunload', handleTabClosing)

  loadTwitterWidgets()
})

onBeforeUnmount(() => {
  window.removeEventListener('beforeunload', handleTabClosing)
})

function loadTwitterWidgets() {
  if (document.getElementById('twitter-widget-script')) return

  const script = document.createElement('script')
  script.id = 'twitter-widget-script'
  script.src = 'https://platform.twitter.com/widgets.js'
  script.async = true
  script.charset = 'utf-8'
  document.head.appendChild(script)
}

function getTwitterEmbedCode(url: string) {
  const tweetId = url.split('/').pop() || ''
  return `<blockquote class="twitter-tweet" data-lang="ja"><a href="${url}"></a></blockquote>`
}

watch(selectedProject, (newVal) => {
  if (newVal && newVal.xPosts?.length) {
    setTimeout(() => {
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load()
      } else {
        loadTwitterWidgets()
      }
    }, 100)
  }
})

const filteredProjects = computed(() => {
  return projects.filter((proj) => proj.categoryId === activeCategory.value)
})

const getCategoryName = (categoryId: string) => {
  const category = categories.find((c) => c.id === categoryId)
  return category ? category.name : ''
}

const shouldBlink = (categoryId: string) => {
  return !clickedCategories.value[categoryId]
}

const shouldProjectBlink = (projectId: number) => {
  return !clickedProjects.value[projectId]
}

const handleCategoryClick = (categoryId: string) => {
  activeCategory.value = categoryId

  if (!clickedCategories.value[categoryId]) {
    clickedCategories.value[categoryId] = true
    saveToStorage(`${CATEGORY_STORAGE_KEY_PREFIX}${categoryId}`, true)
  }
}

const openModal = (project: Project) => {
  selectedProject.value = project
  currentImageIndex.value = 0
  document.body.style.overflow = 'hidden'

  if (!clickedProjects.value[project.id]) {
    clickedProjects.value[project.id] = true
    saveToStorage(`${PROJECT_STORAGE_KEY_PREFIX}${project.id}`, true)
  }
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const nextImage = () => {
  if (
    selectedProject.value?.images &&
    currentImageIndex.value < selectedProject.value.images.length - 1
  ) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}
</script>

<style scoped>
@keyframes softBlink {
  0% {
    background-color: #f0f0f0;
    border: 1px solid #e0e0e0;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.2);
  }
  50% {
    background-color: #eaf7f0;
    border: 1px solid #42b983;
    box-shadow: 0 0 8px rgba(66, 185, 131, 0.4);
  }
  100% {
    background-color: #f0f0f0;
    border: 1px solid #e0e0e0;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.2);
  }
}

@keyframes borderBlink {
  0% {
    border: 1px solid #e0e0e0;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.2);
  }
  50% {
    border: 1px solid #42b983;
    box-shadow: 0 0 8px rgba(66, 185, 131, 0.4);
  }
  100% {
    border: 1px solid #e0e0e0;
    box-shadow: 0 0 5px rgba(66, 185, 131, 0.2);
  }
}

.category-tabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.5rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.tab-button.blink {
  animation: softBlink 2s infinite;
}

.tab-button.active {
  background-color: #42b983;
  color: white;
  animation: none;
  border: 1px solid #42b983;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.4);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-card.blink {
  animation: borderBlink 2s infinite;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.project-card h3 {
  margin: 0 0 0.5rem 0;
  color: #2c3e50;
}

.project-card .period {
  font-size: 0.9em;
  color: #666;
  margin-bottom: 0.5rem;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-stack span {
  background-color: #f5f5f5;
  color: #42b983;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
}

.modal-content {
  background-color: white;
  border-radius: 12px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  padding: 2rem;
}

.modal-header {
  margin-bottom: 2rem;
}

.title-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.header-info {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.category-tag,
.period-tag {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.9em;
}

.category-tag {
  background-color: #42b983;
  color: white;
}

.period-tag {
  background-color: #f5f5f5;
  color: #666;
}

.close-button {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.close-button:hover {
  background-color: #f0f0f0;
}

.modal-section {
  margin-bottom: 2rem;
}

.modal-section h3 {
  color: #42b983;
  margin-bottom: 1rem;
  font-size: 1.2em;
}

.description-content {
  white-space: pre-line;
  line-height: 1.6;
  color: #2c3e50;
}

.modal-section ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.tech-stack-full {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e0e0e0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.tech-tags span {
  background-color: #f5f5f5;
  color: #42b983;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

/* 画像スライダー */
.image-slider {
  margin: 1.5rem 0;
  border-radius: 12px;
  overflow: hidden;
}

.image-container {
  position: relative;
  background-color: #f5f5f5;
  border-radius: 8px;
}

.project-image {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.image-description {
  margin-top: 0.75rem;
  text-align: center;
  font-style: italic;
  color: #666;
}

.image-navigation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.image-navigation button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.image-navigation button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.image-navigation button:hover:not(:disabled) {
  background-color: #3aa876;
}

.x-posts-section {
  margin-top: 2rem;
}

.x-post-container {
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
}

.twitter-embed {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.x-post-description {
  font-style: italic;
  color: #666;
  text-align: center;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .modal-overlay {
    padding: 1rem;
  }

  .modal-content {
    padding: 1.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .tech-stack span {
    padding: 0.2rem 0.5rem;
  }
}
.modal-content::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.modal-content::-webkit-scrollbar-track {
  background: transparent;
  margin: 4px 0;
}

.modal-content::-webkit-scrollbar-thumb {
  background: rgba(66, 185, 131, 0.5);
  border-radius: 10px;
  transition: background-color 0.3s ease;
}

.modal-content::-webkit-scrollbar-thumb:hover {
  background: rgba(66, 185, 131, 0.8);
}
</style>
