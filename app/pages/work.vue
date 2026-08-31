<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Work</h1>
      <p>Models and datasets I've published, plus open-source pull requests merged into projects I don't maintain.</p>
    </header>

    <div class="filter-row">
      <label v-for="f in filterTypes" :key="f.key" class="filter-toggle" :class="{ dim: !activeFilters[f.key] }">
        <input type="checkbox" v-model="activeFilters[f.key]">
        <span>{{ f.label }}</span>
      </label>
    </div>

    <ul class="post-list writing-list">
      <li v-for="item in filteredItems" :key="item.link" class="post-item">
        <a :href="item.link" target="_blank" rel="noopener noreferrer">
          <span class="post-title">{{ item.title }}</span>
          <span class="post-meta">{{ item.repo || typeLabel(item.type) }}</span>
        </a>
      </li>
    </ul>

    <p v-if="filteredItems.length === 0" class="work-empty">Nothing matches the selected filters.</p>
  </div>
</template>

<script setup>
const HF_AUTHOR = 'edwixx'

const filterTypes = [
  { key: 'model', label: 'Models' },
  { key: 'dataset', label: 'Datasets' },
  { key: 'contribution', label: 'Contributions' },
]

const activeFilters = reactive({ model: true, dataset: true, contribution: true })

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

const datasets = [
  {
    title: 'Triton Kernel Code Dataset',
    desc: 'Triton kernel bodies and CUDA→Triton translation pairs for fine-tuning code models.',
    link: 'https://huggingface.co/datasets/edwixx/triton-code-dataset',
  },
  {
    title: 'Aesthetic Images',
    desc: '7.9k+ filtered high-aesthetic images for diffusion and image-text alignment models.',
    link: 'https://huggingface.co/datasets/edwixx/aesthetic-images',
  },
  {
    title: 'Brazilian Portuguese TTS',
    desc: '≈150 hours of multi-speaker Brazilian Portuguese for text-to-speech synthesis.',
    link: 'https://huggingface.co/datasets/edwixx/brazilian-portuguese-TTS',
  },
  {
    title: 'Obama Voice Sample Dataset',
    desc: '25+ minutes of clean 24kHz speech from public addresses, optimized for RVC training.',
    link: 'https://huggingface.co/datasets/ModelsLab/Obama-Sample-Dataset',
  },
  {
    title: 'Speech Dataset International',
    desc: 'Multilingual speech dataset for TTS and speech synthesis research.',
    link: 'https://huggingface.co/datasets/edwixx/Speech-Dataset-International',
  },
].map(d => ({ ...d, type: 'dataset' }))

const contributions = [
  {
    title: 'Reject instructions changes on locked native duplex sessions',
    repo: 'vllm-project/vllm-omni',
    desc: 'Bugfix in the speech-to-speech duplex session handling.',
    link: 'https://github.com/vllm-project/vllm-omni/pull/6318',
  },
  {
    title: 'Prevent DiffusionResultPump crash on cancelled futures',
    repo: 'vllm-project/vllm-omni',
    desc: 'Bugfix for a crash when diffusion result futures are cancelled mid-flight.',
    link: 'https://github.com/vllm-project/vllm-omni/pull/5983',
  },
  {
    title: 'Add SFX support to ModelsLabTools',
    repo: 'agno-agi/agno',
    desc: 'Sound-effect generation support for the ModelsLab tools integration.',
    link: 'https://github.com/agno-agi/agno/pull/4361',
  },
  {
    title: 'Enigma profiler v1',
    repo: 'Klyne-org/Enigma-DSL',
    desc: 'First version of a profiler for the Enigma DSL.',
    link: 'https://github.com/Klyne-org/Enigma-DSL/pull/26',
  },
  {
    title: 'Fix Python version for failing CI tests',
    repo: 'Klyne-org/Enigma-DSL',
    desc: 'CI fix to unblock the test suite.',
    link: 'https://github.com/Klyne-org/Enigma-DSL/pull/23',
  },
  {
    title: 'Drop Python 3.10 support, keep 3.11–3.13',
    repo: 'Klyne-org/Enigma-Dialect',
    desc: 'Compatibility cleanup for supported Python versions.',
    link: 'https://github.com/Klyne-org/Enigma-Dialect/pull/8',
  },
  {
    title: 'Add release wheel build workflow',
    repo: 'Klyne-org/Enigma-Dialect',
    desc: 'CI workflow to build and publish release wheels.',
    link: 'https://github.com/Klyne-org/Enigma-Dialect/pull/7',
  },
  {
    title: 'Document English-only language support in README',
    repo: 'MisoLabsAI/MisoTTS',
    desc: 'Docs fix clarifying language support scope.',
    link: 'https://github.com/MisoLabsAI/MisoTTS/pull/9',
  },
].map(c => ({ ...c, type: 'contribution' }))

const models = ref(staticModels.map(m => ({ ...m, type: 'model' })))

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
        type: 'model',
      }))
    models.value = [...fetched, ...staticModels.map(m => ({ ...m, type: 'model' }))]
  } catch {
    // keep static list if the live fetch fails
  }
})

const filteredItems = computed(() =>
  [...models.value, ...datasets, ...contributions].filter(item => activeFilters[item.type]),
)

function typeLabel(type) {
  return { model: 'Model', dataset: 'Dataset', contribution: 'PR' }[type]
}

useSeoMeta({
  title: 'Work — Anurag Kanade',
  description: 'Models and datasets published on Hugging Face, plus open-source contributions.',
})
</script>

<style scoped>
/* Filter row — same compact, quiet register as the rest of the page */
.filter-row {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.filter-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8125rem;
  color: var(--fg-muted);
  cursor: pointer;
  user-select: none;
  transition: color var(--duration) var(--ease-out);
}

.filter-toggle.dim {
  color: var(--fg-subtle);
}

.filter-toggle:not(.dim) {
  color: var(--fg);
}

.filter-toggle input {
  accent-color: var(--fg);
  width: 13px;
  height: 13px;
  cursor: pointer;
}

.work-empty {
  color: var(--fg-muted);
  font-size: 0.875rem;
  padding: 1rem 0;
}
</style>
