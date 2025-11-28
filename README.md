# 💪 Workout Planner - Your Personal Training Companion

> **Transform Your Fitness Journey** - A powerful, mobile-first workout tracking application designed to keep you motivated and on track with your training goals.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Mobile Friendly](https://img.shields.io/badge/mobile--friendly-YES-brightgreen.svg)

---

## 🎯 Overview

**Workout Planner** is a lightweight, offline-first web application that helps you track your daily workouts with precision. Whether you're following a structured 5-day split or running on recovery days, this app keeps you accountable and motivated with advanced tracking features.

### 🔥 Perfect For:
- 💪 Gym enthusiasts following structured programs
- 📱 Mobile fitness tracking on the go
- 🎯 Athletes building consistent habits
- 🏋️ Anyone serious about their fitness journey

---

## ✨ Key Features

### 📅 **Smart Day Detection**
- **Auto-detect** your current workout based on the day of the week
- **Manual selection** for flexibility
- Seamless date picker integration
- Supports rescheduling missed workouts

### ⏱️ **Advanced Timer System**
- Individual timer for each set
- Track actual workout duration automatically
- Visual time display (MM:SS format)
- Set-by-set progress monitoring

### ✅ **Comprehensive Tracking**
- Mark sets as complete with instant visual feedback
- Green highlight when exercise is finished
- Per-date progress persistence
- Track completed sets count in real-time

### 🎬 **Motivational Features**
- **"Giving Up?" button** with full-screen emergency ambulance lights (Red → Blue → Gold)
- **8 Sanskrit inspirational titles** (Bhagavad Gita quotes)
- **50+ heavy motivational quotes** that rotate on each view
- **Emergency motivation system** to push through tough moments

### 🏆 **Completion Celebration**
- **10+ second fireworks animation** with 60+ colorful particles
- **Modal celebration** with total workout time
- Instant motivation upon achievement

### 💾 **Offline Storage**
- All data saved locally in browser (`localStorage`)
- No internet required
- Never lose your progress
- Automatic data persistence

### 📊 **Exercise Details**
- Wikipedia summaries for each exercise (with local fallback)
- Quick exercise tips
- Google search integration
- Curated YouTube video links per exercise
- Ability to set custom video URLs

---


## 🚀 Quick Start

### 1️⃣ **Open the App**
```bash
# Simply open in your browser
start index.html    # Windows
open index.html     # Mac
firefox index.html  # Linux
```

### 2️⃣ **Select Your Workout**
- The app **auto-detects** your current day
- Or manually select from the dropdown
- Pick a date with the date picker

### 3️⃣ **Start Tracking**
- Click **"Open"** on any exercise
- Start the timer for each set
- Mark sets as complete ✅
- Watch your progress fill up

### 4️⃣ **Complete Your Workout**
- When all sets are done, exercises turn **green**
- Complete all exercises to trigger **fireworks celebration**
- View your total workout time

---

## 💡 How to Use Each Feature

### ⏱️ **Timer**
1. Open an exercise
2. Click **"Start Set"** button
3. The timer counts up
4. Click **"Stop Set"** to save duration
5. Set is marked as complete ✅

### 🆘 **Motivation Mode**
1. Feeling discouraged? Click **"Giving Up?"** button
2. Screen flashes emergency ambulance lights 🚨
3. Get Sanskrit wisdom and random motivation quotes
4. Stats show how many sets you've already crushed

### 📅 **Reschedule Missed Workouts**
1. Click **"Reschedule / Missed"** button
2. Select the date you want to reschedule to
3. The app maps that date to show the original workout
4. Or clear the mapping to reset

### 📖 **Exercise Details**
1. Click **"Load details"** in exercise panel
2. Wikipedia summary loads automatically
3. Quick tip displays below
4. Use Google or YouTube buttons for more info
5. Click **"Set video"** to add custom YouTube links

### 🔖 **Instruction Modals**
1. Click **Warm-up**, **Cardio**, or **Rules** in navbar
2. Read the prepopulated instructions
3. Click **"Save"** to edit and save your own notes

---

## 🎨 Design Highlights

- ✅ **Mobile-First Responsive** - Perfect on phones, tablets, and desktops
- 🎨 **Modern UI** - Clean gradient backgrounds, smooth animations
- 🔵 **Accent Color Scheme** - Professional blue gradients
- ✨ **Smooth Animations** - Fade-in effects, pulse animations
- 🏃 **Fast & Lightweight** - No external dependencies except Bootstrap
- 🌙 **Light Theme** - Easy on the eyes for gym workouts

---

## 💾 Data & Storage

### What's Saved Locally?
- ✅ Daily workout progress
- ✅ Set durations and completion status
- ✅ Reschedule mappings
- ✅ Custom video URLs
- ✅ Saved instruction notes
- ✅ All user preferences

### Browser Storage
- Uses `localStorage` API (5MB limit typically)
- Persists across sessions
- Works completely offline
- No data sent to any server

### Backup Your Data
Data is stored in browser `localStorage` under key: `workout_planner_v1`

---

## ⚠️ Important Notes

### ⚠️ Personalized Workout Plan Notice
**IMPORTANT:** This application contains a personalized 5-day workout split specifically designed for **Manish Bhavar's body type and fitness level**. The exercises, sets, reps, and progression are tailored to his specific needs and recovery capacity.

**Before using this app:**
- Consider consulting a fitness professional to customize the workout for YOUR body
- Modify exercises based on your fitness level, injuries, or limitations
- Adjust sets and reps according to your strength and experience
- Listen to your body and make changes as needed

You can easily customize the workouts by editing the `WORKOUTS` object in `js/app.js` to match your personal fitness goals.

### Data Protection
- ⚠️ **Browser refresh warning** - If you have today's progress, the browser will warn you before refreshing
- 🔒 **Confirmation dialogs** - Reset actions require confirmation
- 💾 **Auto-save** - All progress is automatically saved to localStorage

### Customization
You can customize the workouts by editing `js/app.js`:
- Modify the `WORKOUTS` object to change exercises
- Edit `DAY_TITLES` to update day names
- Add/remove exercises as needed
- Update `LOCAL_DETAILS` with custom tips

---

---

## 🔐 Privacy & Security

- ✅ **Zero data collection** - No tracking
- ✅ **Fully offline** - No server connection
- ✅ **Browser-local only** - Data never leaves your device
- ✅ **Open source** - See exactly what it does
- ✅ **No analytics** - Your privacy is sacred

---

## 🐛 Troubleshooting

### Q: My progress disappeared!
**A:** Check if you're on the same date. Use "Reschedule / Missed" to map past workouts.

### Q: Browser keeps asking about refresh?
**A:** This is protection! It means you have unsaved progress. Click "Stay" to continue.

### Q: How do I change the workout?
**A:** Edit the `WORKOUTS` object in `js/app.js` with your exercises.

### Q: Can I use this offline?
**A:** Yes! It works completely offline once loaded.

### Q: Where is my data stored?
**A:** In your browser's localStorage. It persists forever unless you clear it.

---

## 📝 Credits

**Created by:** Manish Bhavar  
**Version:** 1.0.0  
**Last Updated:** November 28, 2025

---

## 🙏 Motivation

> *"The only impossible journey is the one you never begin."* - Tony Robbins

This app is designed to help you **START** and **STAY** committed to your fitness journey. Every rep counts. Every set matters. You are capable of amazing things.

**Remember:** 
- 💪 Pain is weakness leaving the body
- 🔥 You're stronger than you think
- 🏆 Victory belongs to the persistent
- ⚡ **Never give up!**

---


## 🌟 Support This Project

If this app helps you crush your fitness goals, share it with friends! Spread the motivation! 🚀

---

**💪 Train Hard • Stay Strong • Never Give Up 🔥**

*Built with passion for fitness lovers everywhere.*
