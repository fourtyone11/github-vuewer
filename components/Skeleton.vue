<template>
  <div class="skeleton-wrapper">
    <div class="skeleton" />
    <div class="skeleton" />
    <div class="skeleton" />
  </div>
</template>

<style scoped>
.skeleton-wrapper {
  width: calc(50vw);
  height: 130px;

  @apply border rounded border-gray-300 p-4;
}

.skeleton {
  position: relative;
  padding: 0;
  background: #e5e5e5;
  border: none;
  box-shadow: none;
  pointer-events: none;
  width: 100%;
  height: 20px;
}

.skeleton:not(:first-of-type) {
  @apply mt-4;
}

.skeleton::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: #c6c6c6;
  -webkit-animation: 3000ms ease-in-out skeleton infinite;
  animation: 3000ms ease-in-out skeleton infinite;
  content: '';
}

@keyframes skeleton {
  0% {
    right: auto;
    left: 0;
    width: 0%;
    opacity: 0.3;
  }

  20% {
    right: auto;
    left: 0;
    width: 100%;
    opacity: 1;
  }

  28% {
    right: 0;
    left: auto;
    width: 100%;
  }

  51% {
    right: 0;
    left: auto;
    width: 0%;
  }

  58% {
    right: 0;
    left: auto;
    width: 0%;
  }

  82% {
    right: 0;
    left: auto;
    width: 100%;
  }

  83% {
    right: auto;
    left: 0;
    width: 100%;
  }

  96% {
    right: auto;
    left: 0;
    width: 0%;
  }

  100% {
    right: auto;
    left: 0;
    width: 0%;
    opacity: 0.3;
  }
}

</style>
