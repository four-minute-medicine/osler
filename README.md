# BrightStart - Medical Training Simulator

## Overview
BrightStart is an AI-powered medical training platform designed to help medical students and professionals enhance their clinical decision-making skills through interactive patient simulations. The platform provides realistic case scenarios, adaptive feedback, and comprehensive learning experiences.

## Backend Repo
https://github.com/four-minute-medicine/osler-backend

## Features
- **Virtual Patient Simulations**: Practice with realistic patient scenarios
- **Interactive Learning**: Real-time feedback and adaptive learning paths
- **Case Library**: Access to diverse medical cases and scenarios
- **Progress Tracking**: Monitor your learning journey and improvement
- **Responsive Design**: Seamless experience across all devices

## Technology Stack
- **Frontend**:
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Lucide Icons
  - React Hooks

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - LLM Integration

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn
- MongoDB (for local development)

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/brightstart.git
cd brightstart
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure
```
brightstart/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── chat/
│   └── welcome/
├── components/
│   ├── chat/
│   ├── sidebar/
│   └── ui/
├── lib/
│   └── utils/
├── public/
│   └── assets/
└── types/
```

## Usage
1. Visit the homepage
2. Click "Try Now" to start a new session
3. Select your preferred study mode:
   - Virtual Patient Cases
   - Knowledge Check (Coming Soon)
   - Ask Anything (Coming Soon)
4. Interact with the AI-powered patient simulator
5. Receive feedback and improve your clinical skills

## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch
```bash
git checkout -b feature/AmazingFeature
```
3. Commit your changes
```bash
git commit -m 'Add some AmazingFeature'
```
4. Push to the branch
```bash
git push origin feature/AmazingFeature
```
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- Medical professionals who provided valuable feedback

## Roadmap
- [ ] Add more patient scenarios
- [ ] Implement real-time collaboration
- [ ] Enhance AI responses
- [ ] Add mobile app support
- [ ] Integrate with medical education systems
