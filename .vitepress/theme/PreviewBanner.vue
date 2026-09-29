<script setup lang="ts">
const isPreview = import.meta.env.VITE_DOCS_PREVIEW === 'true'
const prNumber = import.meta.env.VITE_DOCS_PREVIEW_PR
</script>

<template>
  <div v-if="isPreview" class="preview-banner">
    ⚠ You are currently viewing a preview of the site from <a target="_blank" :href="`https://github.com/dmocnik/test-docs/pull/${ prNumber }`">PR #{{ prNumber }}↗</a>.
  </div>
</template>

<style scoped>
a {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: var(--vp-c-brand-1)
}

a:hover {
  text-decoration-thickness: 2px;
}

.preview-banner {
  position: fixed;
  left: 50%;
  top: 69px;
  transform: translateX(-50%);

  z-index: 100;

  padding: 8px 16px;
  border-radius: 8px;

  background: var(--vp-c-warning-soft);
  border: 2px solid var(--vp-c-warning-1);
  color: var(--vp-c-warning-1);

  font-size: 14px;
  font-weight: 600;

  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}
</style>