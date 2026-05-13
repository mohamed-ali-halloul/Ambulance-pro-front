#  Ambulance Pro — Frontend

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![Redux](https://img.shields.io/badge/Redux_Toolkit-1.9.2-764ABC?style=flat-square&logo=redux)
![Ant Design](https://img.shields.io/badge/Ant_Design-5.1.6-0170FE?style=flat-square&logo=ant-design)
![JavaScript](https://img.shields.io/badge/JavaScript-90.7%25-F7DF1E?style=flat-square&logo=javascript)
![GitHub last commit](https://img.shields.io/github/last-commit/mohamed-ali-halloul/Ambulance-pro-front?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

> The frontend application for **Ambulance Pro** — a platform for managing ambulance dispatch and emergency medical services.

---

##  Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

---

##  About

**Ambulance Pro Frontend** is a React-based web application that provides a user interface for managing ambulance operations, patient requests, and dispatch coordination. It communicates with the backend API to deliver real-time data to operators and administrators.

---

##  Tech Stack

| Technology | Version |
|---|---|
| React | 18.2.0 |
| Redux Toolkit | 1.9.2 |
| React Router DOM | 5.2.0 |
| Ant Design | 5.1.6 |
| Axios | 1.3.3 |
| React Toastify | 9.1.1 |
| Redux Persist | 6.0.0 |

---

##  Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/mohamed-ali-halloul/Ambulance-pro-front.git

# Navigate to the project directory
cd Ambulance-pro-front

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file at the root of the project and configure your API base URL:

```env
REACT_APP_API_URL=http://localhost:8080/api
```

---

##  Available Scripts

```bash
# Start the development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

---

## 📁 Project Structure

```
Ambulance-pro-front/
├── public/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components
│   ├── store/           # Redux store & slices
│   ├── services/        # Axios API calls
│   └── App.js
├── package.json
└── README.md
```

---

##  Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

##  License

This project is licensed under the MIT License.

---

<p align="center">Made by <a href="https://github.com/mohamed-ali-halloul">Mohamed Ali Halloul</a></p>
