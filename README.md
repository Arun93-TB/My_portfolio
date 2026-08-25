# Arun Kumar - Developer Portfolio

A modern, responsive portfolio website for Arun Kumar that showcases projects from GitHub with live API integration.

## 🌟 Features

- ✅ **Dynamic GitHub Projects** - Automatically fetches and displays your latest repos
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- ✅ **Modern UI** - Beautiful gradient backgrounds and smooth animations
- ✅ **Social Links** - GitHub and LinkedIn integration
- ✅ **Contact Info** - Email and social media links
- ✅ **Performance Optimized** - Fast loading and smooth interactions
- ✅ **No Build Required** - HTML version works out of the box

## 📁 Files Included

- `index.html` - Standalone HTML version (ready to deploy!)
- `portfolio.jsx` - React component version
- `package.json` - Dependencies for React version
- `README.md` - This file

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - Easiest)

1. Create a new repository named `username.github.io` (replace `username` with your GitHub username)
   ```
   Example: arun93-tb.github.io
   ```

2. Clone the repository:
   ```bash
   git clone https://github.com/Arun93-TB/arun93-tb.github.io.git
   cd arun93-tb.github.io
   ```

3. Copy `index.html` to the repository root

4. Commit and push:
   ```bash
   git add index.html
   git commit -m "Add portfolio website"
   git push origin main
   ```

5. Visit `https://arun93-tb.github.io` (takes a few minutes to go live)

### Option 2: Deploy to Netlify

1. Push the HTML file to a GitHub repository

2. Go to [netlify.com](https://netlify.com) and sign up

3. Click "New site from Git"

4. Connect your GitHub account and select the portfolio repository

5. Set build settings:
   - Build command: (leave empty)
   - Publish directory: (leave empty, select the folder with index.html)

6. Deploy! Your site will be live at a Netlify URL

### Option 3: Vercel Deployment

1. Push files to GitHub

2. Visit [vercel.com](https://vercel.com) and sign up

3. Click "New Project" and import your GitHub repository

4. Vercel will automatically detect and deploy

5. Get a live URL instantly

### Option 4: Local Development (React Version)

If you want to use the React version:

1. Install Node.js (if not already installed)

2. Create a new React app:
   ```bash
   npx create-react-app portfolio
   cd portfolio
   ```

3. Replace the content of `src/App.js` with the `portfolio.jsx` code

4. Install dependencies:
   ```bash
   npm install lucide-react
   ```

5. Run locally:
   ```bash
   npm start
   ```

6. Build for production:
   ```bash
   npm run build
   ```

## 📝 Customization

### Change Contact Email
Find and replace `legendarunkumar47@gmail.com` with your email:
```html
<a href="mailto:your-email@gmail.com">
```

### Change GitHub Username
Find and replace `Arun93-TB` with your GitHub username:
```html
<a href="https://github.com/your-username">
```

### Change LinkedIn Profile
Find and replace `arung10` with your LinkedIn username:
```html
<a href="https://www.linkedin.com/in/your-username">
```

### Update About Section
Edit the About Me text in the HTML (around line 120-140)

### Add More Skills
Add more skills under the Skills section:
```html
<span class="tech-badge">Your Skill</span>
```

## 🎨 Design Customization

### Change Color Scheme
The portfolio uses Tailwind CSS. To change colors:

1. Blue → Replace `blue-400`, `blue-500`, etc. with other colors
2. Cyan → Replace `cyan-400`, `cyan-500`, etc.
3. Slate → Replace `slate-900`, `slate-800`, etc.

Example colors: `red`, `purple`, `green`, `orange`, `pink`, `indigo`

### Custom Fonts
Add to the `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

## 🔄 GitHub Integration

The portfolio automatically fetches your GitHub projects using the GitHub API:

```javascript
https://api.github.com/users/Arun93-TB/repos?sort=stars&per_page=12
```

This shows your top 12 repositories sorted by stars.

### Rate Limiting
GitHub API allows 60 requests per hour for unauthenticated requests. For unlimited access:

1. [Create a GitHub Personal Access Token](https://github.com/settings/tokens)
2. Add it to the fetch request (secure method):
```javascript
const token = 'your-token-here';
const response = await fetch(
  'https://api.github.com/users/Arun93-TB/repos?sort=stars&per_page=12',
  { headers: { 'Authorization': `token ${token}` } }
);
```

## 📱 Mobile Optimization

The portfolio is fully responsive and tested on:
- ✅ iPhone 12/13/14
- ✅ iPad
- ✅ Android devices
- ✅ Tablets
- ✅ Desktop screens

## 🎯 SEO Optimization

Add meta tags for better search results. Edit the `<head>` section:

```html
<meta name="description" content="Arun Kumar - Full Stack Developer Portfolio">
<meta name="keywords" content="developer, portfolio, full stack, react, nodejs">
<meta name="author" content="Arun Kumar">
<meta property="og:title" content="Arun Kumar - Developer">
<meta property="og:description" content="Full Stack Developer Portfolio">
<meta property="og:url" content="https://your-domain.com">
```

## 🔒 Performance Tips

1. **Images**: Use optimized images (Tinypng.com)
2. **Caching**: Set browser caching for static assets
3. **CDN**: Use a CDN to serve files faster
4. **Minification**: Minify CSS/JS for production

## 🐛 Troubleshooting

### GitHub Projects Not Loading
- Check browser console for errors (F12 → Console)
- Verify GitHub username is correct
- Check GitHub API rate limits (60/hour without token)
- Try refreshing the page

### Website Not Live After GitHub Pages Push
- Wait 5-10 minutes for GitHub to process
- Check repository settings → Pages tab
- Ensure branch is set to "main" or "master"

### Styling Issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS link is loading
- Verify no CSS conflicts

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Visit [GitHub Help](https://help.github.com)
3. Check [Netlify Docs](https://docs.netlify.com)
4. Visit [Vercel Docs](https://vercel.com/docs)

## 📄 License

This portfolio template is free to use and modify. Feel free to customize it for your needs!

## 🚀 Next Steps

1. **Deploy** - Choose a deployment option above
2. **Customize** - Update your info and colors
3. **Share** - Share your portfolio on LinkedIn and Twitter
4. **Update** - Push new projects to GitHub to see them auto-update

---

**Made with ❤️ for developers**

Last updated: 2024
