# Intro Animation Video

Place your intro animation video file here and name it `intro-animation.mp4`.

## Video Requirements

- **Format**: MP4 (H.264 codec recommended for best browser compatibility)
- **Resolution**: 1920x1080 or 1280x720 recommended
- **Duration**: Any length is fine - the animation will play the entire video before transitioning
- **File Size**: Keep under 5MB if possible for faster loading

## How It Works

The animation will play when a user first visits your website. The system will:

1. Play your video from start to finish
2. After the video completes, it will transition to a stylized version of your name and title
3. Finally, it will fade into the regular website content with animated text elements

The animation only plays once per browser session (it uses sessionStorage to remember if it has already played).

## Playback Behavior

The component is designed to handle video playback in several ways:

- It will automatically detect when your video has finished playing and then transition
- If for some reason the video's 'ended' event doesn't trigger, there's a fallback timeout (set to 10 seconds by default)
- The video will start playing as soon as it's loaded enough to play without buffering
- Users can skip the animation at any time by clicking the "Skip" button

## Customizing the Animation

You can customize the animation behavior by editing the following files:

1. `src/components/animation/HeroAnimation.tsx` - The main animation component
2. `src/pages/HomePage.tsx` - Where the animation is used

To change the fallback duration of the animation, modify the `duration` prop in the `HomePage.tsx` file:

```jsx
<HeroAnimation 
  videoSrc="/videos/intro-animation.mp4" 
  duration={10} // Change this number to adjust the fallback duration in seconds
/>
```

## Disabling the Animation

If you want to temporarily disable the animation, you can comment out the HeroAnimation component in the HomePage.tsx file. 