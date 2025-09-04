# 🎨 Background Changer

A dynamic and responsive background color changer built with **React**, **Vite**, and **TailwindCSS**. Features smooth transitions and an intuitive user interface with 22 beautiful color options.

## Screenshots

![App Screenshot 1](https://github.com/user-attachments/assets/7fcf7baa-28dd-4a3c-9034-c4b38c4fc711)

![App Screenshot 2](https://github.com/user-attachments/assets/d89d9e59-8148-4447-9a53-bbcdda5a7847)

![App Screenshot 3](https://github.com/user-attachments/assets/36817db1-4fb3-41f2-ada7-03f88cd673cf)


## ✨ Features

- 🎯 **Dynamic Color Switching** - 22 beautiful color options
- 🚀 **Smooth Animations** - CSS transitions with hover effects  
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development
- 🎨 **Modern UI** - Clean design with glassmorphism effects
- 🔄 **Real-time Indicator** - Shows current background color

## 🛠️ Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Next generation frontend tooling
- **TailwindCSS** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript features

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/bgchanger.git
   cd bgchanger
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

## 📁 Project Structure

```
bgchanger/
├── src/
│   ├── App.jsx          # Main component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/
├── package.json
└── README.md
```

## 🎯 Key Implementation

### Dynamic Color Management
```javascript
const colors = [
  { name: 'Red', class: 'bg-red-600', text: 'text-white' },
  { name: 'Blue', class: 'bg-blue-500', text: 'text-white' },
  // ... 20 more colors
];

// Dynamic rendering - Scalable approach
{colors.map((color) => (
  <button
    key={color.name}
    onClick={() => setBgColor(color.class)}
    className={`${color.class} ${color.text} ...`}
  >
    {color.name}
  </button>
))}
```

### Smart Color Detection
```javascript
// Real-time current color indicator
{colors.find(c => c.class === bgColor)?.name || 'Gray'}
```

## 🎨 Color Palette

The app includes 22 carefully selected colors:
- **Primary Colors:** Red, Blue, Green, Yellow
- **Extended Palette:** Purple, Pink, Orange, Teal, Indigo
- **Modern Variants:** Lime, Cyan, Rose, Violet, Emerald, Sky
- **Neutrals:** Gray, Slate, Stone, Neutral, Zinc, Amber, Fuchsia

## 🌟 Highlights

- **Scalable Architecture** - Easy to add more colors
- **Performance Optimized** - Efficient re-rendering
- **Accessibility Friendly** - Proper contrast ratios
- **Mobile First** - Responsive design approach

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Connect With Me

- **Live Link:**https://background-changer-pearl.vercel.app
- **LinkedIn:** https://www.linkedin.com/in/swarnabhadutta909
- **GitHub:** https://github.com/swarnabha-dutta


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🚀 Why This Project?

This project demonstrates:
- **React Hooks** proficiency (useState)
- **Component Architecture** understanding
- **Modern CSS** with TailwindCSS
- **Responsive Design** principles
- **Performance Optimization** techniques
- **Clean Code** practices

Perfect for showcasing **frontend development skills** in interviews and portfolios!

---

**⭐ Star this repo if you found it helpful!**