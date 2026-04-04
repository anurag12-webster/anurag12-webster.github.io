---
title: "Building TTS Datasets That Actually Work"
description: "your model is only as good as your data - here's what you need to know about building high-quality TTS datasets"
author: "Anurag Kanade"
date: "2025-06-11"
categories: ["Datasets", "TTS", "Data"]
---

Let's get one thing straight: your TTS model will be as good as the data you train it upon. You can use the best pre-trained SOTA models out there, but without a high-quality dataset, you can't get the model to speak naturally and lifelike.

TTS (Text-to-Speech) models require a dataset with audio files and their respective transcription. The main advantage of TTS architecture is that you don't need to align the text transcriptions to the audio because the model can grasp the alignment process.

## Popular Datasets for TTS

If you're just starting out or want to see how others have done it, here are some datasets worth looking at:

### Public datasets everyone uses

- [LJSpeech](https://keithito.com/LJ-Speech-Dataset/) — single speaker, clean audio, very popular
- [LibriTTS](https://www.openslr.org/60/) — multi-speaker dataset derived from LibriVox audiobooks
- [TWEB](https://www.kaggle.com/datasets/bryanpark/the-world-english-bible-speech-dataset) — The World English Bible speech dataset

### My own datasets

I've also built some TTS datasets that you might find useful, especially for non-English languages or specific use cases:

- [Gujarati Female Speech](https://huggingface.co/datasets/edwixx/Gujrati_Female_SPeech) — 8 hours of clean single-speaker Gujarati audio. Recorded in controlled conditions with aligned transcripts.

- [Brazilian Portuguese TTS](https://huggingface.co/datasets/edwixx/brazilian-portuguese-TTS) — ~150 hours of multi-speaker Brazilian Portuguese, covering different accents and speaking styles, normalized and ready to train.

- [Obama Voice Sample Dataset](https://huggingface.co/datasets/ModelsLab/Obama-Sample-Dataset) — 25+ minutes of Barack Obama's voice from public speeches, optimized for RVC training. Clean 24 kHz WAV files.

Check out more on the [datasets page](/datasets).

## Things to Consider While Building the Dataset

### Noise-free

Make sure the audio samples are noise-free. Background noise may lead your model not to learn well, and ultimately won't be able to learn good alignment. Even if it learns alignment, the final output will be much worse than anticipated.

### Consistency

Audio samples within your dataset should have the same format (mp3, flac, opus, wav) and sampling rate — ideally between 16kHz–22kHz. If you have high-quality audio with a higher sampling rate, normalize the configs.

### Naturalness

Your model will learn what samples you feed into it. If you expect a natural-sounding voice with speed, pitch, and intonation differences, the dataset should accommodate the same.

### Diverse Phonemes

Make sure your dataset covers a good set of phonemes for your use case. If phoneme coverage is low, the model will struggle to pronounce certain words.

### Correctness

Before training, filter out bad-quality transcripts, compare transcript and audio lengths, and remove wrong or broken files.

### Clip Length Distribution

Verify the distribution of clip lengths and make sure your dataset has sufficient short and long audio clips. At maximum, use 30-second clips based on your available compute.

## Additional Quality Checks

- Check the spectrogram of audio files to measure noise levels. If the spectrogram looks cluttered in silent parts, the dataset might not be good for training.

- Analyze the dataset distribution in terms of clip and transcript lengths. Watch for outlier cases — a very long clip with short text, or a short clip with very long text, which can happen when using models like Whisper for transcription.
