<template>
  <div
    style="
      width: 1200px;
      height: 630px;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 80px;
      font-family: Georgia, serif;
      border: 1px solid #e5e5e5;
    "
  >
    <!-- Top: site name -->
    <div
      style="
        font-family: 'Courier New', monospace;
        font-size: 14px;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: #999999;
      "
    >
      anuragkanade.com
    </div>

    <!-- Middle: title -->
    <div style="flex: 1; display: flex; align-items: center; padding: 40px 0;">
      <div
        style="
          font-size: 52px;
          font-weight: 400;
          line-height: 1.15;
          color: #0a0a0a;
          letter-spacing: -0.01em;
          max-width: 900px;
        "
      >
        {{ title }}
      </div>
    </div>

    <!-- Bottom: author + category row -->
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #e5e5e5;
        padding-top: 28px;
      "
    >
      <div
        style="
          font-family: 'Courier New', monospace;
          font-size: 13px;
          color: #555555;
          letter-spacing: 0.04em;
        "
      >
        Anurag Kanade
      </div>
      <div
        v-if="category"
        style="
          font-family: 'Courier New', monospace;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #999999;
          border: 1px solid #e5e5e5;
          padding: 4px 12px;
        "
      >
        {{ category }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  category?: string
}>()
</script>
