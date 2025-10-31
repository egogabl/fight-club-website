# 🚀 Deploy Instructions for Netlify

## Quick Deploy Steps

### 1. Prepare Repository
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit: VOLAT website ready for deployment"

# Push to GitHub
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### 2. Deploy on Netlify

#### Option A: Connect GitHub Repository
1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Choose GitHub and select your repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18
5. Click "Deploy site"

#### Option B: Drag & Drop Deploy
1. Run `npm run build` locally
2. Go to Netlify dashboard
3. Drag the `.next` folder to the deploy area

### 3. Configure Domain (Optional)
1. In Netlify dashboard, go to Site settings
2. Click "Domain management"
3. Add your custom domain
4. Configure DNS settings

### 4. Environment Variables (if needed)
Add in Netlify dashboard > Site settings > Environment variables:
- `NODE_VERSION=18`
- Any other environment variables your app needs

## Build Configuration

The project includes:
- ✅ `netlify.toml` - Netlify configuration
- ✅ `robots.txt` - SEO robots file
- ✅ `sitemap.xml` - SEO sitemap
- ✅ `.gitignore` - Git ignore file
- ✅ `README.md` - Project documentation

## Post-Deploy Checklist

- [ ] Test all pages work correctly
- [ ] Check mobile responsiveness
- [ ] Verify language switching works
- [ ] Test contact forms (if any)
- [ ] Check SEO meta tags
- [ ] Verify sitemap is accessible
- [ ] Test performance with PageSpeed Insights

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors

### Pages Not Loading
- Verify `netlify.toml` configuration
- Check redirects are working
- Ensure all routes are properly configured

### Performance Issues
- Enable Netlify's CDN
- Optimize images
- Check bundle size

## Support

For issues with deployment, check:
1. Netlify build logs
2. Browser console for errors
3. Network tab for failed requests

---

**Ready to deploy! 🎉**
