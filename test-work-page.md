# Work Page Testing Checklist

## Local Development Testing

### 1. Start Development Server
```bash
npm run dev
```

### 2. Test Navigation
- [ ] Navigate to home page
- [ ] Click on "Logo Design Collection" project
- [ ] Verify URL changes to `/work/logo-design-collection`
- [ ] Verify page loads with correct content
- [ ] Test "Back to Projects" button

### 3. Test Asset Loading
- [ ] Verify images load from `/public/logo-design-collection/`
- [ ] Test PDF files open in new tab
- [ ] Test image modal opens on click
- [ ] Verify loading states appear
- [ ] Test error handling for missing images

### 4. Test All Work Categories
- [ ] Logo Design Collection (`/work/logo-design-collection`)
- [ ] Print Materials (`/work/print-materials`)
- [ ] Social Media Graphics (`/work/social-media-graphics`)

### 5. Test Error Scenarios
- [ ] Navigate to non-existent work (`/work/non-existent`)
- [ ] Verify 404 page displays correctly
- [ ] Test retry button functionality

## Vercel Deployment Testing

### 1. Deploy to Vercel
```bash
vercel --prod
```

### 2. Test Production URLs
- [ ] Test direct navigation to `/work/logo-design-collection`
- [ ] Test direct navigation to `/work/print-materials`
- [ ] Test direct navigation to `/work/social-media-graphics`
- [ ] Verify no 404 errors on refresh

### 3. Test Asset Loading in Production
- [ ] Verify all images load correctly
- [ ] Test PDF downloads
- [ ] Test image modal functionality
- [ ] Verify loading states work

### 4. Test Cross-Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Key Features to Verify

### ✅ Asset Path Compatibility
- Uses `import.meta.env.BASE_URL` for all asset URLs
- Works with both root and subpath deployments

### ✅ Error Handling
- Graceful handling of missing manifest files
- Image load error fallbacks
- Retry functionality for failed requests

### ✅ Loading States
- Skeleton loading for initial load
- Individual image loading indicators
- Smooth transitions and animations

### ✅ Responsive Design
- Works on mobile devices
- Grid layout adapts to screen size
- Touch-friendly interactions

### ✅ Accessibility
- Proper alt text for images
- Keyboard navigation support
- Screen reader compatibility

## Troubleshooting

### If images don't load:
1. Check that `public/[slug]/images.json` exists
2. Verify image files are in the correct folder
3. Check browser console for network errors
4. Verify Vercel deployment includes public folder

### If routing doesn't work:
1. Check `vercel.json` configuration
2. Verify SPA fallback is working
3. Test direct URL navigation

### If build fails:
1. Check TypeScript errors
2. Verify all imports are correct
3. Check for missing dependencies 