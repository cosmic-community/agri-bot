# Agri-Intel X

![App Preview](https://imgix.cosmicjs.com/10cb2be0-2c12-11f1-968e-a5a1e6389181-autopilot-photo-1560493676-04071c5f467b-1774859152790.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

**Agri-Intel X** is a production-grade, AI-powered intelligent farming assistant platform. It integrates weather intelligence, pest & disease detection, crop recommendations, irrigation optimization, market intelligence, and a ChatGPT-like conversational AI assistant — all powered by [Cosmic](https://www.cosmicjs.com) CMS and built with Next.js 16.

## Features

- 🌦 **Weather Intelligence** — Real-time weather data with auto-location detection and manual city search via Open-Meteo API
- 🐛 **Pest & Disease Detection** — Upload images or use your webcam for AI-powered crop disease identification
- 🌱 **Crop Intelligence** — Smart recommendations based on location, soil, weather, and season
- 💧 **Irrigation Optimization** — Data-driven watering schedules and water-saving tips
- 💰 **Market Intelligence** — Crop price trends, demand analysis, and 30-day price predictions
- 🤖 **AI Assistant** — ChatGPT-like conversational interface with streaming, chat history, and context-aware responses
- 🌍 **Multilingual Support** — Full UI localization for English, Hindi, Kannada, Tamil, Telugu, Marathi, and more
- 📱 **Mobile-First Design** — Responsive dark-mode UI optimized for farmer smartphones
- 📷 **Camera Support** — Real-time webcam-based pest/disease detection
- 🔐 **Secure Architecture** — Server-side API calls, environment variable protection, JWT-ready auth patterns

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69ca32ebf9808e52fa7dc515&clone_repository=69ca35edf9808e52fa7dc5ae)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Build a full-stack, production-grade AI-powered agritech platform named **"Agri-Intel X"** with the following capabilities and architecture.
>
> The system must be modular, scalable, and designed like a real startup product.
>
> ---
>
> # 🧠 CORE OBJECTIVE
>
> Create an intelligent farming assistant platform that integrates:
>
> * Weather intelligence
> * Pest & disease detection (image + camera)
> * Crop recommendation
> * Irrigation optimization
> * Market intelligence
> * Conversational AI assistant (ChatGPT-like)
>
> The system must provide **accurate, real-time, multilingual, and actionable insights for Indian farmers**.
>
> ---
>
> # 🏗️ SYSTEM ARCHITECTURE
>
> ## Backend
>
> * FastAPI (Python)
> * Microservices-based architecture
> * Redis (caching)
> * MongoDB (chat + user data)
> * PostgreSQL (structured data)
> * REST + WebSocket support
>
> ## Frontend
>
> * React + TypeScript + Tailwind
> * ChatGPT-like UI
> * Responsive (mobile-first)
>
> ## AI Models (MULTI-MODEL SYSTEM)
>
> Use multiple AI systems:
>
> 1. LLM (for assistant)
>
>    * Provider: NVIDIA / OpenAI / Local LLaMA
>    * Model: `meta/llama3-8b-instruct` (default)
>    * Replaceable via ENV
>
> 2. Vision Model (pest detection)
>
>    * Use: Vision Transformer / YOLOv8 / LLaMA Vision
>    * Input: image upload + live camera
>
> 3. Forecasting Model (market)
>
>    * Informer / Time-series model
>
> 4. Crop Recommendation Model
>
>    * TabTransformer / ML model
>
> ---
>
> # 🔐 AUTH SYSTEM
>
> Create a full authentication system:
>
> Signup:
>
> * Name
> * Mobile number
> * Email
> * Password
> * CAPTCHA
> * OTP verification (placeholder API)
>
> Login:
>
> * JWT-based authentication
> * Secure session handling
>
> ---
>
> # 🌍 MULTILINGUAL SUPPORT (VERY IMPORTANT)
>
> * Add language settings page
> * Support ALL Indian languages:
>
>   * English
>   * Hindi
>   * Kannada
>   * Tamil
>   * Telugu
>   * Marathi
>   * etc.
>
> When user selects language:
>
> * Entire UI changes
> * AI responses translated
> * Buttons, labels, chat — everything localized
>
> Use:
>
> * Google Translate API / open-source translation model (placeholder)
>
> ---
>
> # 🌦 WEATHER SYSTEM
>
> ## Features:
>
> * Auto location detection (browser permission)
> * Manual search (city/state input)
> * Only proceed AFTER user confirms location
>
> ## Data:
>
> Use real API:
>
> * Open-Meteo (default)
> * Placeholder for upgrade:
>   WEATHER_API_KEY=YOUR_KEY
>
> ## Output:
>
> * Temperature
> * Humidity
> * Rainfall
> * Wind speed
> * UV Index
>
> ---
>
> # 🤖 AI ASSISTANT (CHATGPT-LIKE)
>
> Design assistant EXACTLY like ChatGPT:
>
> ## UI:
>
> * Sidebar with chats
> * "+ New Chat" button
> * Chat titles auto-generated
> * Persistent history (MongoDB)
> * Typing animation
> * Streaming responses
>
> ## Behavior:
>
> * Context-aware (previous messages)
> * Memory per chat
> * Multilingual
> * Smart structured answers
>
> ## RESPONSE FORMAT (MANDATORY):
>
> Always return ALL in ONE response:
>
> 1. 🌦 Weather Summary
> 2. 💧 Irrigation Advice
> 3. 🐛 Pest/Disease Risk
> 4. 🌱 Crop Recommendation
> 5. 💰 Market Insight
>
> ---
>
> # 🐛 PEST & DISEASE DETECTION
>
> ## Features:
>
> * Upload image
> * Live camera detection
> * Detect: crops, leaves, trees, pests, diseases
>
> ## Output:
>
> * Disease name
> * Confidence %
> * Cause
> * Treatment
> * Recommended pesticide (India-specific)
>
> ## Model:
>
> * YOLOv8 / ViT / Vision API
> * Placeholder:
>   PEST_MODEL_API=YOUR_MODEL_ENDPOINT
>
> ---
>
> # 💧 IRRIGATION INTELLIGENCE
>
> Use: Weather + soil moisture (simulated or sensor API)
>
> Output:
>
> * Best irrigation time
> * Water quantity
> * Method (drip/sprinkler)
> * Water saving tips
>
> ---
>
> # 💰 MARKET INTELLIGENCE
>
> ## Features:
>
> * Search ANY crop (not limited list)
> * Show: price trends, demand, volatility, prediction (30 days)
>
> ## Model:
>
> * Informer / ML model
> * Placeholder:
>   MARKET_API=YOUR_API
>
> ---
>
> # 🌱 CROP INTELLIGENCE
>
> * Recommend crops based on: location, soil, weather, season
> * Provide: yield prediction, ROI estimate
>
> ---
>
> # 📷 CAMERA SUPPORT
>
> * Enable webcam
> * Real-time detection
> * Capture + analyze
>
> ---
>
> # 🧠 SMART AI LOGIC
>
> The assistant must: Combine ALL modules (weather + pest + market), Give ONE unified answer, Not give separate answers
>
> ---
>
> # 🎨 UI REQUIREMENTS
>
> * Clean modern UI (ChatGPT style)
> * Dark mode
> * Smooth animations
> * Mobile responsive
>
> ---
>
> # 🎯 FINAL GOAL
>
> The system should behave like a **real AI agritech assistant used by farmers**, not a demo.
>
> It must be: fast, accurate, scalable, production-ready
>
> give me a downloadable fil"

### Code Generation Prompt

> "Build a full-stack, production-grade AI-powered agritech platform named **"Agri-Intel X"** with the following capabilities and architecture.
>
> The system must be modular, scalable, and designed like a real startup product.
>
> Create an intelligent farming assistant platform that integrates: Weather intelligence, Pest & disease detection (image + camera), Crop recommendation, Irrigation optimization, Market intelligence, Conversational AI assistant (ChatGPT-like).
>
> The system must provide accurate, real-time, multilingual, and actionable insights for Indian farmers. Use React + TypeScript + Tailwind with ChatGPT-like UI, responsive mobile-first design. Include multilingual support for all Indian languages, weather system with auto location detection, AI assistant with ChatGPT-like sidebar and streaming responses, pest & disease detection with image upload and live camera, irrigation intelligence, market intelligence with price trends and predictions, crop intelligence with recommendations. Clean modern dark mode UI with smooth animations."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS
- [Cosmic](https://www.cosmicjs.com) — Headless CMS ([docs](https://www.cosmicjs.com/docs))
- [Open-Meteo API](https://open-meteo.com/) — Free weather data
- [OpenAI API](https://platform.openai.com/) — AI assistant (configurable)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) runtime installed
- A [Cosmic](https://www.cosmicjs.com) account with bucket configured
- (Optional) OpenAI API key for AI assistant features
- (Optional) Pest detection model API endpoint

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd agri-intel-x

# Install dependencies
bun install

# Run development server
bun dev
```

### Environment Variables

Set these in your hosting platform's dashboard:

| Variable | Description | Required |
|----------|-------------|----------|
| `COSMIC_BUCKET_SLUG` | Your Cosmic bucket slug | ✅ |
| `COSMIC_READ_KEY` | Cosmic read API key | ✅ |
| `COSMIC_WRITE_KEY` | Cosmic write API key | ✅ |
| `OPENAI_API_KEY` | OpenAI API key for AI assistant | Optional |
| `PEST_MODEL_API` | Pest detection model endpoint | Optional |
| `MARKET_API` | Market data API endpoint | Optional |
| `JWT_SECRET` | JWT signing secret | Optional |

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all crops
const { objects: crops } = await cosmic.objects
  .find({ type: 'crops' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single pest/disease
const { object: pest } = await cosmic.objects
  .findOne({ type: 'pest-disease-library', slug: 'some-slug' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Fetch platform settings
const { object: settings } = await cosmic.objects
  .findOne({ type: 'platform-settings' })
  .props(['title', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This app uses three Cosmic object types:

- **🌾 Crops** — Crop data with season, soil type, water requirements, growth duration, yield data, and diseases
- **🐛 Pest & Disease Library** — Comprehensive pest/disease entries with symptoms, causes, treatments, and pesticide recommendations
- **⚙️ Platform Settings** — App-wide configuration including language settings, feature flags, and AI model selection

## Deployment Options

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Netlify

1. Push to GitHub
2. Import project on [Netlify](https://netlify.com)
3. Set build command: `bun run build`
4. Set publish directory: `.next`
5. Add environment variables
6. Deploy

<!-- README_END -->