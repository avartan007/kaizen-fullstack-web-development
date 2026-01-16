# Contributing to Full-Stack Learning Portfolio

This is a personal learning portfolio tracking my full-stack development journey. While it's open source, here are some guidelines:

## 📝 How to Use This Repository

### For Learning
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd full-stack-learning-portfolio
   ```

2. **Explore by difficulty level**
   - Start with `frontend/html-css-basics/`
   - Progress through modules sequentially
   - Reference `README.md` files for guidance

3. **Try the projects**
   - Read project-specific setup instructions
   - Follow prerequisites for each technology
   - Experiment and modify code

### For Your Own Learning
You're welcome to fork this repository and:
- Adapt projects for your learning path
- Add your own variations
- Create similar structures for your coursework
- Reference architecture and organization patterns

## 🔧 Setting Up Development Environment

### Prerequisites
- Git
- Code editor (VS Code recommended)
- Node.js 14+ (for Node.js projects)
- Java JDK 8+ (for Java projects)
- Python 3.7+ (for Python projects)
- MySQL/MongoDB (for database projects)

### Installation Steps

1. **Clone repository**
   ```bash
   git clone <repository-url>
   cd full-stack-learning-portfolio
   ```

2. **For Frontend projects**
   - Open `.html` files directly in browser
   - Or use Live Server extension in VS Code

3. **For Node.js backend**
   ```bash
   cd backend/nodejs-ejs
   npm install
   node index.js
   ```

4. **For Java projects**
   ```bash
   cd projects/<project-name>
   mvn clean install
   ```

5. **For Python projects**
   ```bash
   cd projects/personal-finance-tracker
   python3 -m venv myenv
   source myenv/bin/activate
   pip install -r requirements.txt
   python test_dependencies.py
   ```

## 📋 Repository Structure Guidelines

This portfolio follows a clear organization:

```
📦 Full-Stack-Learning-Portfolio
 ├── 📁 frontend/          # HTML, CSS, JavaScript, Bootstrap
 ├── 📁 backend/           # Node.js, Java, SQL
 ├── 📁 projects/          # Complete applications
 ├── .gitignore           # Git ignore patterns
 ├── README.md            # Main documentation
 └── CONTRIBUTING.md      # This file
```

### Naming Conventions

**Directories:**
- Use kebab-case for multi-word folder names
- Be descriptive (e.g., `nodejs-ejs`, not `backend`)
- Group related items in parent directories

**Files:**
- Use lowercase with hyphens for HTML/CSS (e.g., `style.css`)
- Use camelCase for JavaScript files
- Use PascalCase for Java files
- Use snake_case for Python files

## 📚 Documentation Standards

Each major section should include:
- `README.md` with clear structure
- Comments in code explaining complex logic
- Assignment descriptions in HTML/text files
- Setup instructions for projects

## ✅ Quality Guidelines

When contributing or using this repo:

1. **Code Quality**
   - Follow language-specific conventions
   - Add meaningful comments
   - Keep code readable and organized

2. **Documentation**
   - Update README when adding new modules
   - Include setup instructions
   - Document dependencies

3. **Git Practices**
   - Use clear commit messages
   - Keep commits focused and atomic
   - Update .gitignore appropriately

## 🐛 Reporting Issues

If you find errors or inconsistencies:
1. Check existing documentation
2. Verify the issue is reproducible
3. Provide clear description with steps to reproduce
4. Include your environment details

## 🚀 Improvement Ideas

Suggestions for improvement:
- Additional project ideas
- Better organization patterns
- Enhanced documentation
- Real-world application examples
- Advanced concept demonstrations

## 📄 License

This portfolio contains projects with various licenses:
- Most projects: MIT License
- Check individual project folders for specific terms

## 🙏 Acknowledgments

This learning portfolio represents education from:
- Online courses and tutorials
- Textbooks and documentation
- Practical experimentation
- Peer learning and discussion

---

**Happy Learning! 🎓**

For specific project questions, refer to the individual project README files.
