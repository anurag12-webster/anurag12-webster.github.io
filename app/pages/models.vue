<template>
  <div class="blog-container">
    <h1 class="blog-title">Models</h1>
    <ul class="post-list writing-list">
      <li v-for="model in models" :key="model.id" class="post-item dataset-item">
        <a :href="model.link" target="_blank" rel="noopener noreferrer">
          <span class="post-title">{{ model.title }}</span>
        </a>
        <p class="dataset-desc">{{ model.desc }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const HF_AUTHOR = 'edwixx'

const staticModels = [
  {
    id: 'edwixx/diffusiongemma-26B-A4B-it-HERETIC-Uncensored',
    title: 'DiffusionGemma 26B A4B IT — HERETIC (Uncensored)',
    desc: 'Abliterated, uncensored fine-tune of Google\'s diffusion_gemma 26B MoE model for text generation.',
    link: 'https://huggingface.co/edwixx/diffusiongemma-26B-A4B-it-HERETIC-Uncensored',
  },
  {
    id: 'edwixx/omnivoice-brpt-v15',
    title: 'OmniVoice BR-PT v1.5',
    desc: 'Brazilian Portuguese text-to-speech checkpoint fine-tuned from k2-fsa/OmniVoice.',
    link: 'https://huggingface.co/edwixx/omnivoice-brpt-v15',
  },
  {
    id: 'edwixx/whisper-large-hebrew-finetune',
    title: 'Whisper Large Hebrew Fine-tune',
    desc: 'Whisper large fine-tuned on Hebrew speech from the Whisper Fine-Tuning Event, trained on google/fleurs.',
    link: 'https://huggingface.co/edwixx/whisper-large-hebrew-finetune',
  },
  {
    id: 'edwixx/miraTTS-hindi',
    title: 'MiraTTS Hindi',
    desc: 'Qwen2-based text-to-speech model fine-tuned for Hindi from YatharthS/MiraTTS.',
    link: 'https://huggingface.co/edwixx/miraTTS-hindi',
  },
  {
    id: 'edwixx/fish_speech_hindi_lora',
    title: 'Fish Speech Hindi LoRA',
    desc: 'LoRA adapter for Fish Speech (dual_ar architecture) adapted for Hindi speech synthesis.',
    link: 'https://huggingface.co/edwixx/fish_speech_hindi_lora',
  },
  {
    id: 'edwixx/qwen3-8b-triton',
    title: 'Qwen3-8B Triton',
    desc: 'Qwen3-8B fine-tune for generating Triton kernel code, trained on English and Chinese data.',
    link: 'https://huggingface.co/edwixx/qwen3-8b-triton',
  },
]

const models = ref(staticModels)

function titleize(name) {
  return name
    .replace(/-e$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
}

function describe(m) {
  const base = m.tags?.find(t => t.startsWith('base_model:'))?.split(':')[1]
  const task = m.pipeline_tag?.replace(/-/g, ' ')
  if (base && task) return `Fine-tune of ${base} for ${task}.`
  if (base) return `Fine-tune of ${base}.`
  if (task) return `Model for ${task}.`
  return m.library_name ? `${m.library_name} model.` : 'Hugging Face model.'
}

onMounted(async () => {
  try {
    const res = await fetch(`https://huggingface.co/api/models?author=${HF_AUTHOR}&full=true&limit=100`)
    const data = await res.json()
    const known = new Set(staticModels.map(m => m.id))
    const fetched = data
      .filter(m => m.id.split('/').pop().endsWith('-e') && !known.has(m.id))
      .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified))
      .map(m => ({
        id: m.id,
        title: titleize(m.id.split('/').pop()),
        desc: describe(m),
        link: `https://huggingface.co/${m.id}`,
      }))
    models.value = [...fetched, ...staticModels]
  } catch {
    // keep static list if the live fetch fails
  }
})

useSeoMeta({
  title: 'Models — Anurag Kanade',
  description: 'Open-source models for ML research and development.',
})
</script>
