<template>
  <section id="about">
    <div class="about-column">
      <div class="profile-section">
        <img :src="profileImageUrl" alt="プロフィール写真" class="profile-image" />
        <div class="profile-text">
          <h2>{{ name }}</h2>
          <p>{{ introduction }}</p>
        </div>
      </div>
      <div class="education-section">
        <h3>経歴</h3>
        <ul>
          <li v-for="(item, index) in background" :key="index">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      profileImageUrl: import.meta.env.VITE_PROFILE_IMAGE_URL || '',
      name: import.meta.env.VITE_NAME || 'ycookiey',
      introduction: import.meta.env.VITE_INTRODUCTION || '自己紹介文',
      background: import.meta.env.VITE_BACKGROUND ? JSON.parse(import.meta.env.VITE_BACKGROUND) : []
    }
  }
}
</script>

<style scoped>
.about-column {
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.profile-section {
  display: flex;
  align-items: flex-start;
  gap: 2rem;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #e0e0e0;
}

.profile-text,
.education-section {
  flex: 1;
}

ul {
  padding-left: 1.5rem;
}

@media (max-width: 768px) {
  .profile-section {
    flex-direction: column;
    align-items: center;
  }

  .profile-image {
    margin-bottom: 1rem;
  }
}
</style>
