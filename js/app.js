const WORKOUTS = {
  day1: [
    { id: 'incline-db-press', name: 'Incline Dumbbell Press', sets: 4, reps: '10' },
    { id: 'db-floor-press', name: 'Dumbbell Floor Press', sets: 4, reps: '12' },
    { id: 'pec-deck', name: 'Pec Deck Fly (or limited ROM DB Fly)', sets: 3, reps: '12' },
    { id: 'seated-lat-raise', name: 'Seated Dumbbell Lateral Raises', sets: 4, reps: '12' },
    { id: 'rope-pushdowns', name: 'Rope Pushdowns', sets: 3, reps: '12' },
    { id: 'skull-crushers', name: 'Skull Crushers', sets: 3, reps: '12' },
    { id: 'wrist-roller', name: 'Wrist Roller', sets: 2, reps: 'rounds' },
  ],
  day2: [
    { id: 'lat-pulldown', name: 'Lat Pulldown', sets: 4, reps: '10' },
    { id: 'seated-cable-row', name: 'Seated Cable Row', sets: 4, reps: '12' },
    { id: 'chest-support-db-row', name: 'Chest-supported Dumbbell Row', sets: 3, reps: '12' },
    { id: 'straight-arm-pulldown', name: 'Straight-arm Pulldown', sets: 3, reps: '15' },
    { id: 'hammer-curls', name: 'Hammer Curls', sets: 4, reps: '12' },
    { id: 'reverse-barbell-curl', name: 'Reverse Barbell Curls', sets: 3, reps: '12' },
    { id: 'farmers-walk', name: 'Farmer\'s Walk', sets: 3, reps: '45 sec' },
    { id: 'wrist-curls', name: 'Wrist Curls', sets: 3, reps: '15' },
  ],
  day3: [
    { id: 'leg-press', name: 'Leg Press', sets: 4, reps: '12' },
    { id: 'romanian-deadlift', name: 'Romanian Deadlift', sets: 4, reps: '10' },
    { id: 'goblet-squats', name: 'Goblet Squats', sets: 3, reps: '12' },
    { id: 'hip-thrust', name: 'Hip Thrust', sets: 3, reps: '12' },
    { id: 'standing-calf-raise', name: 'Standing Calf Raises', sets: 4, reps: '15' },
    { id: 'reverse-crunch', name: 'Reverse Crunch', sets: 3, reps: '15' },
    { id: 'plank', name: 'Plank', sets: 3, reps: '45 sec' },
  ],
  day4: [
    { id: 'machine-chest-press', name: 'Machine Chest Press', sets: 3, reps: '15' },
    { id: 'db-row', name: 'Dumbbell Row', sets: 3, reps: '12' },
    { id: 'seated-db-lateral-raise', name: 'Seated Dumbbell Lateral Raise', sets: 4, reps: '15' },
    { id: 'rear-delt-fly', name: 'Rear Delt Fly', sets: 3, reps: '15' },
    { id: 'barbell-curl-rope-pushdown', name: 'Barbell Curls + Rope Pushdown superset', sets: 3, reps: '12' },
    { id: 'reverse-grip-cable-curl', name: 'Reverse Grip Cable Curl', sets: 3, reps: '15' },
    { id: 'decline-crunch', name: 'Decline Crunch', sets: 3, reps: '12' },
  ],
  day5: [
    { id: 'db-bench-press', name: 'Dumbbell Bench Press', sets: 4, reps: '10' },
    { id: 'lat-pulldown-day5', name: 'Lat Pulldown', sets: 4, reps: '10' },
    { id: 'leg-press-day5', name: 'Leg Press', sets: 3, reps: '12' },
    { id: 'db-rdl', name: 'Dumbbell RDL', sets: 3, reps: '10' },
    { id: 'russian-twists', name: 'Russian Twists', sets: 3, reps: '20' },
    { id: 'mountain-climbers', name: 'Mountain Climbers', sets: 2, reps: '30 sec' },
    { id: 'cable-woodchoppers', name: 'Cable Woodchoppers', sets: 3, reps: '12' },
    { id: 'farmers-walk-day5', name: 'Farmer\'s Walk', sets: 2, reps: 'rounds' },
  ],
  jogging: [
    { id: 'jog-sat', name: 'Saturday Jogging', sets: 1, reps: 'motivational' },
    { id: 'jog-sun', name: 'Sunday Jogging', sets: 1, reps: 'motivational' }
  ]
};

// Small local help content used as immediate fallback if external lookup fails
const LOCAL_DETAILS = {
  'incline-db-press': 'Incline dumbbell press targets the upper chest. Use a 30-45° bench, control the descent and press explosively. Keep scapulae retracted.',
  'flat-db-press': 'Flat dumbbell press works the mid-chest. Maintain neutral wrist, full range of motion and controlled tempo.',
  'pec-deck': 'Pec deck or chest flyes isolate the pectoral muscles. Focus on a slight bend in the elbows and a slow eccentric.',
  'back-pullups': 'Pull-ups are a compound back exercise. Use full range and controlled reps; use assistance bands if needed.',
  'onearm-row': 'One-arm dumbbell row strengthens lats and mid-back. Keep back flat and pull the elbow to the hip.',
  'lat-pulldown': 'Lat pulldowns mimic pull-ups for lat development. Drive elbows down and back, avoid leaning too far back.',
  'squat': 'Back squat builds quads, glutes and core. Maintain a neutral spine and drive through mid-foot.',
  'leg-press': 'Leg press trains lower body with controlled depth. Keep knees tracking over toes.',
  'leg-curl': 'Leg curls isolate hamstrings. Control the eccentric and avoid hip lift.',
  'shoulder-press': 'Seated DB shoulder press targets deltoids. Press overhead with stable core.',
  'lat-raise': 'Lateral raises isolate side delts. Use light weight and control to avoid momentum.',
  'rear-delt': 'Rear delt flyes target posterior deltoids and upper back for balanced shoulders.',
  'deadlift': 'Romanian deadlifts focus on hamstrings and glutes. Hinge from hips and keep knees slightly bent.',
  'hamstring-curl': 'Hamstring curls isolate hamstrings; control the movement through full range.',
  'calf-raise': 'Standing calf raises train gastrocnemius. Use full stretch and contraction.',
  'jog': 'Jogging improves cardiovascular endurance. Keep a conversational pace for steady-state cardio.'
};

// Default instruction summaries (used when no saved summaries exist)
const DEFAULT_SUMMARIES = {
  warmup: `• 3 minutes shoulder mobility\n• 3 minutes spine mobility\n• Light band work for joints\n• Never start lifting without warm muscles`,
  cardio: `• Jog 20–25 minutes twice weekly\n• Keep it light to moderate\n• No sprinting during recovery phase`,
  rules: `• Never train through pain\n• Maintain perfect form\n• Protein goal: 130–150g/day\n• Hydrate 3L/day\n• Sleep 8–9 hours`
};

// Optional curated video links or search URLs per exercise.
// For quick prefill we provide YouTube search result URLs for each exercise.
// The app accepts either a YouTube video ID (shows thumbnail) or a full URL (opens search/results).
const VIDEO_LINKS = {
  'incline-db-press': 'https://www.youtube.com/results?search_query=Incline+Dumbbell+Press+exercise',
  'flat-db-press': 'https://www.youtube.com/results?search_query=Flat+Dumbbell+Press+exercise',
  'pec-deck': 'https://www.youtube.com/results?search_query=Pec+Deck+Flyes+exercise',
  'back-pullups': 'https://www.youtube.com/results?search_query=Pull-ups+exercise',
  'onearm-row': 'https://www.youtube.com/results?search_query=One-arm+Dumbbell+Row+exercise',
  'lat-pulldown': 'https://www.youtube.com/results?search_query=Lat+Pulldown+exercise',
  'squat': 'https://www.youtube.com/results?search_query=Back+Squat+technique',
  'leg-press': 'https://www.youtube.com/results?search_query=Leg+Press+exercise',
  'leg-curl': 'https://www.youtube.com/results?search_query=Leg+Curl+exercise',
  'shoulder-press': 'https://www.youtube.com/results?search_query=Seated+Dumbbell+Shoulder+Press+exercise',
  'lat-raise': 'https://www.youtube.com/results?search_query=Lateral+Raise+exercise',
  'rear-delt': 'https://www.youtube.com/results?search_query=Rear+Delt+Fly+exercise',
  'deadlift': 'https://www.youtube.com/results?search_query=Romanian+Deadlift+technique',
  'hamstring-curl': 'https://www.youtube.com/results?search_query=Hamstring+Curl+exercise',
  'calf-raise': 'https://www.youtube.com/results?search_query=Standing+Calf+Raise+exercise',
  'jog': 'https://www.youtube.com/results?search_query=Jogging+running+tips'
};


const DAY_MAP = {
  1: 'day1', // Monday
  2: 'day2', // Tuesday
  3: 'day3', // Wednesday
  4: 'day4', // Thursday
  5: 'day5', // Friday
  6: 'jogging', // Saturday
  0: 'jogging'  // Sunday (JS getDay: 0 = Sunday)
};

const DAY_TITLES = {
  day1: 'Day 1 PUSH (Chest + Shoulders + Triceps)',
  day2: 'Day 2 PULL (Back + Biceps + Forearms)',
  day3: 'Day 3 LEGS + CORE (Sciatica Safe)',
  day4: 'Day 4 UPPER BODY HYPERTROPHY',
  day5: 'Day 5 FULL BODY + ABS',
  jogging: 'Active Recovery - Jogging'
};

const JOGGING_MOTIVATIONS = {
  saturday: `<div class="card p-4 mb-3 text-center motivational-banner">
    <h4 class="mb-2"><i class="bi bi-heart-fill" style="color: #e74c3c;"></i> Active Recovery Day</h4>
    <p class="lead mb-0">Get outside and enjoy a light jog! Clear your mind and let your body recover from the week's hard work.</p>
  </div>`,
  sunday: `<div class="card p-4 mb-3 text-center motivational-banner">
    <h4 class="mb-2"><i class="bi bi-sunrise" style="color: #f39c12;"></i> Sunday Vibes</h4>
    <p class="lead mb-0">Perfect day for a refreshing run! Start your week energized and ready to crush your goals.</p>
  </div>`
};

// storage helpers
const STORAGE_KEY = 'workout_planner_v1';
function loadState(){
  try{ return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }catch(e){return{}};
}
function saveState(s){ localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); }

let state = loadState();

// Track if there's unsaved progress to prevent accidental loss
let hasProgressToday = false;

// Prevent accidental refresh when progress exists
window.addEventListener('beforeunload', (e) => {
  const date = dateInput.value || formatDateISO(new Date());
  const todayProgress = (state.progress || {})[date];
  
  if(todayProgress && Object.keys(todayProgress).length > 0){
    e.preventDefault();
    e.returnValue = '';
  }
});

// UI elements
const dateInput = document.getElementById('dateInput');
const daySelect = document.getElementById('daySelect');
const workoutArea = document.getElementById('workoutArea');
const currentLabel = document.getElementById('currentLabel');
const detectedLabel = document.getElementById('detectedLabel');
const todayBtn = document.getElementById('todayBtn');
const rescheduleBtn = document.getElementById('rescheduleBtn');

const exercisePanel = new bootstrap.Offcanvas(document.getElementById('exercisePanel'));

function formatDateISO(d){ return d.toISOString().slice(0,10); }

function getDetectedDay(date){
  const d = new Date(date);
  const day = d.getDay();
  return DAY_MAP[day];
}

function getSelectedKey(){
  if(daySelect.value !== 'auto') return daySelect.value;
  const date = dateInput.value || formatDateISO(new Date());
  // If this date has been rescheduled to another date, detect based on mapped date
  if(state.reschedule && state.reschedule[date]){
    return getDetectedDay(state.reschedule[date]);
  }
  return getDetectedDay(date);
}

function render(){
  const selKey = getSelectedKey();
  const date = dateInput.value || formatDateISO(new Date());
  currentLabel.textContent = `Selected: ${labelForKey(selKey)}`;

  // show detected mapping info
  const mappedDate = (state.reschedule && state.reschedule[date]) ? state.reschedule[date] : null;
  if(mappedDate){
    const mappedKey = getDetectedDay(mappedDate);
    detectedLabel.textContent = `Detected: ${labelForKey(mappedKey)} (${mappedDate}) — mapped from ${date}`;
  } else {
    const detected = getDetectedDay(date);
    detectedLabel.textContent = `Detected: ${labelForKey(detected)} (${date})`;
  }

  workoutArea.innerHTML = '';
  
  // Display motivational text for jogging days
  if(selKey === 'jogging'){
    const dayNum = new Date(date).getDay();
    if(dayNum === 6){ // Saturday
      workoutArea.innerHTML = JOGGING_MOTIVATIONS.saturday;
    } else if(dayNum === 0){ // Sunday
      workoutArea.innerHTML = JOGGING_MOTIVATIONS.sunday;
    }
  }

  const workouts = WORKOUTS[selKey] || [];
  if(workouts.length === 0){
    workoutArea.innerHTML += `<div class="card p-3 text-center">No workout found for this selection.</div>`;
    return;
  }

  workouts.forEach(w => {
    const exState = (state.progress || {})[date]?.[w.id] || { completed:false, sets: {} };
    const doneCount = Object.keys(exState.sets || {}).filter(k=>exState.sets[k].done).length;
    const isComplete = doneCount === w.sets && w.sets > 0;

    const div = document.createElement('div');
    div.className = `exercise p-3${isComplete ? ' completed-exercise' : ''}`;
    div.innerHTML = `
      <div class="d-flex justify-content-between align-items-start">
        <div>
          <div class="name fw-semibold"><i class="bi bi-stopwatch"></i>${w.name}</div>
          <div class="meta">${w.sets} sets • ${w.reps} reps</div>
        </div>
        <div class="text-end">
          <div class="small text-muted">${doneCount}/${w.sets} sets</div>
          <div class="mt-2">
            <button class="btn btn-sm btn-primary start-ex" data-id="${w.id}"><i class="bi bi-play-fill me-1"></i>Open</button>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="d-flex gap-2 sets" data-id="${w.id}"></div>
      </div>
    `;

    workoutArea.appendChild(div);

    const setsWrapper = div.querySelector('.sets');
    for(let i=1;i<=w.sets;i++){
      const sState = (exState.sets && exState.sets[i]) || {};
      const btn = document.createElement('button');
      btn.className = 'btn btn-outline-secondary set-btn';
      if(sState.done) btn.classList.add('completed');
      btn.dataset.ex = w.id;
      btn.dataset.set = i;
      btn.innerHTML = `${sState.done? '<i class="bi bi-check2-circle me-1"></i>':'' }${i}`;
      setsWrapper.appendChild(btn);
    }
  });

  // Check if all exercises are complete and trigger fireworks
  const allComplete = workouts.length > 0 && workouts.every(w => {
    const exState = (state.progress || {})[date]?.[w.id] || { completed:false, sets: {} };
    const doneCount = Object.keys(exState.sets || {}).filter(k=>exState.sets[k].done).length;
    return doneCount === w.sets && w.sets > 0;
  });
  
  if(allComplete && workouts.length > 0){
    triggerFireworks();
  }
}

function labelForKey(k){
  if(!k) return '—';
  return DAY_TITLES[k] || k;
}

function triggerFireworks(){
  const container = document.getElementById('fireworks');
  container.innerHTML = ''; // Clear previous fireworks
  
  const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FF1493', '#00FF00'];
  const celebrationDuration = 10000; // 10 seconds
  const burstInterval = 600; // New burst every 600ms
  
  const burstFireworks = () => {
    const particleCount = 80; // More particles per burst
    for(let i = 0; i < particleCount; i++){
      const particle = document.createElement('div');
      particle.className = 'firework';
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = particle.style.color;
      
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = 6 + Math.random() * 8;
      const tx = Math.cos(angle) * velocity * 60;
      const ty = Math.sin(angle) * velocity * 60;
      
      particle.style.setProperty('--tx', `${tx}px`);
      particle.style.setProperty('--ty', `${ty}px`);
      
      container.appendChild(particle);
      
      // Remove particle after animation completes
      setTimeout(() => particle.remove(), 1200);
    }
  };
  
  // Create multiple bursts over 10 seconds
  for(let i = 0; i <= celebrationDuration; i += burstInterval){
    setTimeout(() => {
      burstFireworks();
    }, i);
  }
  
  // Calculate and show total workout time
  setTimeout(() => {
    calculateAndShowCompletionTime();
  }, 800);
}

function calculateAndShowCompletionTime(){
  const date = dateInput.value || formatDateISO(new Date());
  const progressData = (state.progress || {})[date] || {};
  let totalSeconds = 0;
  
  // Sum all set durations
  Object.keys(progressData).forEach(exerciseId => {
    const exState = progressData[exerciseId];
    Object.keys(exState.sets || {}).forEach(setNum => {
      const duration = exState.sets[setNum].duration || 0;
      totalSeconds += duration;
    });
  });
  
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const timeDisplay = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  document.getElementById('totalTimeDisplay').textContent = timeDisplay;
  
  // Show completion modal
  const modal = new bootstrap.Modal(document.getElementById('completionModal'));
  modal.show();
}

function resetToNextDay(){
  // Confirm before resetting
  if(!confirm('🔥 CONFIRM: Are you absolutely sure? This will clear today\'s progress and move to tomorrow!\n\n💪 You crushed it today! Ready for tomorrow?')){
    return;
  }
  
  // Get current selected date
  const currentDate = new Date(dateInput.value || formatDateISO(new Date()));
  
  // Add one day
  const nextDate = new Date(currentDate);
  nextDate.setDate(nextDate.getDate() + 1);
  
  // Set date input to next day
  dateInput.value = formatDateISO(nextDate);
  
  // Reset day selector to auto-detect
  daySelect.value = 'auto';
  
  // Clear all progress for today
  const todayKey = formatDateISO(new Date(currentDate));
  if(state.progress && state.progress[todayKey]){
    delete state.progress[todayKey];
    saveState(state);
  }
  
  // Re-render with next day's workout
  render();
  
  // Close the modal
  const modal = bootstrap.Modal.getInstance(document.getElementById('completionModal'));
  if(modal) modal.hide();
}

// Event delegation for opening exercise
workoutArea.addEventListener('click', (ev)=>{
  const btn = ev.target.closest('.start-ex');
  if(!btn) return;
  const id = btn.dataset.id;
  openExercise(id);
});

// handle set clicks (start/stop)
workoutArea.addEventListener('click', (ev)=>{
  const setBtn = ev.target.closest('.set-btn');
  if(!setBtn) return;
  const exId = setBtn.dataset.ex;
  const setIndex = setBtn.dataset.set;
  const date = dateInput.value || formatDateISO(new Date());
  state = loadState();
  state.progress = state.progress || {};
  state.progress[date] = state.progress[date] || {};
  state.progress[date][exId] = state.progress[date][exId] || { sets: {} };
  const exState = state.progress[date][exId];
  exState.sets = exState.sets || {};
  exState.sets[setIndex] = exState.sets[setIndex] || {};

  // If set already done -> toggle undone
  if(exState.sets[setIndex].done){
    exState.sets[setIndex].done = false;
    exState.sets[setIndex].duration = 0;
    saveState(state);
    render();
    return;
  }

  // If timer running for this set? we'll start a timer UI in exercise panel
  startTimerFor(exId, Number(setIndex));
});

function openExercise(exId){
  const selectedDate = dateInput.value || formatDateISO(new Date());
  const ex = findExerciseById(exId);
  if(!ex) return;
  const elTitle = document.getElementById('exerciseTitle');
  const elBody = document.getElementById('exerciseBody');
  elTitle.innerHTML = `<i class="bi bi-dash-lg me-2"></i> ${ex.name} — ${ex.sets}×${ex.reps}`;

  // build content: sets list with durations and a big start/stop area
  const st = (state.progress || {})[selectedDate]?.[exId] || { sets:{} };
  let html = '<div class="mb-2">Sets</div>';
  html += '<div class="d-flex gap-2 flex-wrap mb-3">';
  for(let i=1;i<=ex.sets;i++){
    const s = st.sets[i] || {};
    html += `<button class="btn ${s.done? 'btn-success' : 'btn-outline-secondary'}" data-ex="${exId}" data-set="${i}">${s.done? '<i class="bi bi-check2-circle me-1"></i>':''}Set ${i} ${s.duration? '• '+ formatDuration(s.duration): ''}</button>`;
  }
  html += '</div>';

  html += `<div class="mb-2">Timer</div>
    <div class="d-flex gap-2 align-items-center">
      <button id="bigTimerBtn" class="btn btn-lg btn-primary flex-grow-1">Start Set</button>
      <div id="timerDisplay" class="ms-2 small text-muted">00:00</div>
    </div>`;

  // details area: Wikipedia summary + quick links
  html += `<div class="mt-3">
    <div class="mb-1 small text-muted">Details</div>
    <div class="d-flex gap-2 mb-2">
      <button id="loadDetailsBtn" class="btn btn-sm btn-outline-primary"><i class="bi bi-info-circle me-1"></i> Load details</button>
      <a id="googleLink" class="btn btn-sm btn-outline-secondary" target="_blank"><i class="bi bi-google me-1"></i>Google</a>
      <a id="youtubeLink" class="btn btn-sm btn-outline-secondary" target="_blank"><i class="bi bi-youtube me-1"></i>YouTube</a>
    </div>
    <div id="detailsContainer" class="small text-muted"></div>
    <div id="videoArea" class="mt-3"></div>
  </div>`;

  elBody.innerHTML = html;
  exercisePanel.show();

  // wire details loader and links
  const loadBtn = document.getElementById('loadDetailsBtn');
  const detailsContainer = document.getElementById('detailsContainer');
  const googleLink = document.getElementById('googleLink');
  const youtubeLink = document.getElementById('youtubeLink');
  const query = encodeURIComponent(ex.name);
  googleLink.href = `https://www.google.com/search?q=${query}+exercise`;
  youtubeLink.href = `https://www.youtube.com/results?search_query=${query}+exercise`;
  loadBtn.onclick = ()=>{ loadExerciseInfo(ex, detailsContainer, loadBtn); };

  // auto-load details immediately using local fallback then try external lookup
  // show local summary first if available
  const local = LOCAL_DETAILS[ex.id] || LOCAL_DETAILS[ex.name?.toLowerCase()];
  if(local){ detailsContainer.innerHTML = `<div class="fw-semibold mb-1">Quick tip</div><div class="mb-2">${escapeHtml(local)}</div>`; }
  // then attempt to load a richer summary
  loadExerciseInfo(ex, detailsContainer, loadBtn);

  // Video area: show curated video thumbnail/link if available or allow setting one
  const videoArea = document.getElementById('videoArea');
  videoArea.innerHTML = '';
  // resolve video id: check in state.videos, then VIDEO_LINKS mapping
  const savedVideos = (state.videos) || {};
  const vidFromState = savedVideos[ex.id];
  const vidFromDefault = VIDEO_LINKS[ex.id];
  const vidOrUrl = vidFromState || vidFromDefault || null;
  if(vidOrUrl){
    // determine whether this is a pure YouTube ID or a URL
    const isId = /^[A-Za-z0-9_-]{6,}$/.test(vidOrUrl);
    if(isId){
      const thumb = `https://img.youtube.com/vi/${vidOrUrl}/mqdefault.jpg`;
      videoArea.innerHTML = `
        <div class="small text-muted mb-1">Video</div>
        <a class="d-flex align-items-center gap-2" href="https://www.youtube.com/watch?v=${vidOrUrl}" target="_blank">
          <img src="${thumb}" alt="video" style="width:120px;border-radius:8px;object-fit:cover;"/>
          <div>
            <div class="fw-semibold">Watch demo</div>
            <div class="small text-muted">Opens YouTube</div>
          </div>
        </a>
        <div class="mt-2">
          <button id="setVideoBtn" class="btn btn-sm btn-outline-secondary">Change video</button>
        </div>
      `;
    } else {
      // treat as a URL (likely a YouTube search URL)
      const link = vidOrUrl;
      videoArea.innerHTML = `
        <div class="small text-muted mb-1">Video</div>
        <a class="btn btn-sm btn-outline-primary mb-2" href="${link}" target="_blank"><i class="bi bi-youtube me-1"></i>Search videos</a>
        <div><button id="setVideoBtn" class="btn btn-sm btn-outline-secondary ms-2">Change video</button></div>
      `;
    }
  } else {
    videoArea.innerHTML = `
      <div class="small text-muted mb-1">Video</div>
      <div class="mb-2 small text-muted">No curated video set for this exercise.</div>
      <div><button id="setVideoBtn" class="btn btn-sm btn-outline-primary">Set video</button></div>
    `;
  }

  // allow user to set/replace video by pasting a YouTube URL or ID (or a search URL)
  document.getElementById('setVideoBtn').addEventListener('click', ()=>{
    const input = prompt('Paste YouTube URL, search URL, or video ID for this exercise:');
    if(!input) return;
    const trimmed = input.trim();
    const id = extractYouTubeId(trimmed);
    state = loadState();
    state.videos = state.videos || {};
    if(id){
      state.videos[ex.id] = id;
    } else if(/^https?:\/\//i.test(trimmed)){
      // save as URL (search link or other URL)
      state.videos[ex.id] = trimmed;
    } else {
      alert('Could not parse a YouTube ID or URL. Please paste a full YouTube URL, a search URL, or the video ID.');
      return;
    }
    saveState(state);
    // re-open to refresh UI
    openExercise(exId);
  });

  // wire big timer button
  const bigBtn = document.getElementById('bigTimerBtn');
  let running = null; // { start, exId, setIndex }
  bigBtn.onclick = ()=>{
    // pick first undone set automatically
    const stNow = (state.progress || {})[selectedDate]?.[exId] || { sets:{} };
    let target = 1;
    for(let i=1;i<=ex.sets;i++){
      if(!stNow.sets[i] || !stNow.sets[i].done){ target = i; break; }
    }

    if(!running){
      running = { start: Date.now(), exId, setIndex: target };
      bigBtn.textContent = 'Stop Set';
      startDisplayTimer(running);
    } else {
      // stop
      const dur = Math.round((Date.now()-running.start)/1000);
      saveSetDuration(selectedDate, running.exId, running.setIndex, dur);
      running = null;
      bigBtn.textContent = 'Start Set';
      document.getElementById('timerDisplay').textContent = '00:00';
      render();
      // update panel content with new durations
      openExercise(exId);
    }
  };

  // small set buttons inside panel (stop/start by tapping)
  elBody.querySelectorAll('button[data-set]').forEach(b=>{
    b.addEventListener('click', ()=>{
      const idx = b.dataset.set;
      // toggle done
      if(!state.progress) state.progress = {};
      if(!state.progress[selectedDate]) state.progress[selectedDate] = {};
      if(!state.progress[selectedDate][exId]) state.progress[selectedDate][exId] = { sets:{} };
      const s = state.progress[selectedDate][exId].sets[idx] || {};
      s.done = !s.done;
      if(s.done && !s.duration) s.duration = 0;
      state.progress[selectedDate][exId].sets[idx] = s;
      saveState(state);
      openExercise(exId);
      render();
    });
  });
}

// Fetch a short summary from Wikipedia REST API for the exercise name
async function loadExerciseInfo(ex, container, btn){
  if(!ex || !container) return;
  container.innerHTML = '<div class="text-muted small">Loading…</div>';
  if(btn) btn.disabled = true;
  try{
    const name = ex.name || ex;
    const title = encodeURIComponent(String(name).replace(/\//g,' '));
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${title}`;
    const res = await fetch(url, {headers:{'Accept':'application/json'}});
    if(!res.ok){
      // use local fallback if available
      const local = LOCAL_DETAILS[ex.id] || LOCAL_DETAILS[name?.toLowerCase()];
      if(local){
        container.innerHTML = `<div class="fw-semibold mb-1">${escapeHtml(name)}</div><div class="mb-2">${escapeHtml(local)}</div>`;
      } else {
        container.innerHTML = `<div class="text-muted small">No article found. Try Google or YouTube.</div>`;
      }
      return;
    }
    const data = await res.json();
    // If extract exists, show it
    if(data.extract){
      const src = data.content_urls && data.content_urls.desktop && data.content_urls.desktop.page ? data.content_urls.desktop.page : `https://en.wikipedia.org/wiki/${title}`;
      container.innerHTML = `<div class="fw-semibold mb-1">${data.title}</div><div class="mb-2">${escapeHtml(data.extract)}</div><a class="small" href="${src}" target="_blank">Read full article on Wikipedia</a>`;
    } else {
      const local = LOCAL_DETAILS[ex.id] || LOCAL_DETAILS[name?.toLowerCase()];
      if(local){
        container.innerHTML = `<div class="fw-semibold mb-1">${escapeHtml(name)}</div><div class="mb-2">${escapeHtml(local)}</div>`;
      } else {
        container.innerHTML = `<div class="text-muted small">No detailed summary available. Try the links above.</div>`;
      }
    }
  }catch(err){
    const local = LOCAL_DETAILS[ex.id] || LOCAL_DETAILS[ex.name?.toLowerCase()];
    if(local){
      container.innerHTML = `<div class="fw-semibold mb-1">${escapeHtml(ex.name || ex)}</div><div class="mb-2">${escapeHtml(local)}</div>`;
    } else {
      container.innerHTML = `<div class="text-muted small">Error loading details. Try again.</div>`;
    }
  }finally{
    if(btn) btn.disabled = false;
  }
}

function escapeHtml(str){
  if(!str) return '';
  return str.replace(/[&<>\"']/g, function(tag){
    const chars = {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'};
    return chars[tag] || tag;
  });
}

function extractYouTubeId(input){
  // If it looks like a pure ID (11+ chars), return it
  const idOnly = /^[A-Za-z0-9_-]{6,}$/;
  if(idOnly.test(input)) return input;
  // Try to extract ID from common YouTube URL formats
  // e.g. https://www.youtube.com/watch?v=VIDEOID or https://youtu.be/VIDEOID
  try{
    const u = new URL(input);
    if(u.hostname.includes('youtu.be')){
      return u.pathname.slice(1);
    }
    if(u.searchParams && u.searchParams.get('v')){
      return u.searchParams.get('v');
    }
  }catch(e){
    // fallback regex
    const m = input.match(/(?:v=|\/)([A-Za-z0-9_-]{6,})/);
    if(m) return m[1];
  }
  return null;
}

function startTimerFor(exId, setIndex){
  // open panel and auto-start timer for that set
  openExercise(exId);
  // find bigTimerBtn and trigger start
  setTimeout(()=>{
    const bigBtn = document.getElementById('bigTimerBtn');
    if(bigBtn) bigBtn.click();
  },200);
}

function startDisplayTimer(running){
  const display = document.getElementById('timerDisplay');
  if(!display) return;
  const tick = ()=>{
    const now = Date.now();
    const s = Math.floor((now-running.start)/1000);
    display.textContent = formatDuration(s);
    if(running) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function formatDuration(s){
  const mm = String(Math.floor(s/60)).padStart(2,'0');
  const ss = String(s%60).padStart(2,'0');
  return `${mm}:${ss}`;
}

function saveSetDuration(date, exId, setIndex, seconds){
  state = loadState();
  state.progress = state.progress || {};
  state.progress[date] = state.progress[date] || {};
  state.progress[date][exId] = state.progress[date][exId] || { sets:{} };
  state.progress[date][exId].sets[setIndex] = { done: true, duration: seconds };
  saveState(state);
}

function findExerciseById(id){
  for(const k of Object.keys(WORKOUTS)){
    const arr = WORKOUTS[k];
    const f = arr.find(x=>x.id===id);
    if(f) return f;
  }
  return null;
}

// wire controls
todayBtn.addEventListener('click', ()=>{ dateInput.value = formatDateISO(new Date()); daySelect.value='auto'; render(); });
dateInput.addEventListener('change', render);
daySelect.addEventListener('change', render);
rescheduleBtn.addEventListener('click', ()=>{
  // open modal and populate fields
  const orig = dateInput.value || formatDateISO(new Date());
  document.getElementById('rescheduleOrig').textContent = orig;
  const targetInput = document.getElementById('rescheduleTarget');
  targetInput.value = (state.reschedule && state.reschedule[orig]) ? state.reschedule[orig] : orig;
  const modalEl = document.getElementById('rescheduleModal');
  const modal = new bootstrap.Modal(modalEl);
  modal.show();
  // wire save/clear only once
});

// modal save/clear handlers
document.getElementById('rescheduleSaveBtn').addEventListener('click', ()=>{
  const orig = document.getElementById('rescheduleOrig').textContent;
  const target = document.getElementById('rescheduleTarget').value;
  if(!target){ alert('Please pick a target date'); return; }
  state = loadState();
  state.reschedule = state.reschedule || {};
  if(target === orig){
    delete state.reschedule[orig];
  } else {
    state.reschedule[orig] = target;
  }
  saveState(state);
  const modal = bootstrap.Modal.getInstance(document.getElementById('rescheduleModal'));
  modal.hide();
  render();
});

document.getElementById('rescheduleClearBtn').addEventListener('click', ()=>{
  const orig = document.getElementById('rescheduleOrig').textContent;
  state = loadState();
  if(state.reschedule && state.reschedule[orig]){
    delete state.reschedule[orig];
    saveState(state);
  }
  const modal = bootstrap.Modal.getInstance(document.getElementById('rescheduleModal'));
  modal.hide();
  render();
});

// On load
if(!dateInput.value) dateInput.value = formatDateISO(new Date());
render();

// === Instruction modals: load/save simple summaries from localStorage ===
function loadInstructionSummaries(){
  state = loadState();
  state.summaries = state.summaries || {};
  const w = state.summaries.warmup || DEFAULT_SUMMARIES.warmup;
  const c = state.summaries.cardio || DEFAULT_SUMMARIES.cardio;
  const r = state.summaries.rules || DEFAULT_SUMMARIES.rules;
  document.getElementById('warmupContent').innerHTML = `<pre class="mb-0">${escapeHtml(w)}</pre>`;
  document.getElementById('cardioContent').innerHTML = `<pre class="mb-0">${escapeHtml(c)}</pre>`;
  document.getElementById('rulesContent').innerHTML = `<pre class="mb-0">${escapeHtml(r)}</pre>`;
}

// show a prompt to edit summary (simple mobile-friendly UX)
function editSummary(section){
  state = loadState();
  state.summaries = state.summaries || {};
  const current = state.summaries[section] || '';
  const newVal = prompt('Edit '+section+' summary (paste text from PDF or write your notes):', current);
  if(newVal === null) return; // cancelled
  state.summaries[section] = newVal;
  saveState(state);
  loadInstructionSummaries();
}

document.getElementById('warmupSave').addEventListener('click', ()=>{ editSummary('warmup'); });
document.getElementById('cardioSave').addEventListener('click', ()=>{ editSummary('cardio'); });
document.getElementById('rulesSave').addEventListener('click', ()=>{ editSummary('rules'); });

// Completion modal reset button
document.getElementById('completionResetBtn').addEventListener('click', resetToNextDay);

// When modals open, refresh contents from storage
document.getElementById('warmupModal').addEventListener('show.bs.modal', loadInstructionSummaries);
document.getElementById('cardioModal').addEventListener('show.bs.modal', loadInstructionSummaries);
document.getElementById('rulesModal').addEventListener('show.bs.modal', loadInstructionSummaries);

// === Motivation Modal with Ambulance Light Effect ===
const MOTIVATIONAL_TITLES = [
  { title: "क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप", subtitle: "Do not yield to weakness, O warrior!" },
  { title: "योगः कर्मसु कौशलम्", subtitle: "Excellence is achieved through dedicated practice!" },
  { title: "कर्मण्येवाधिकारस्ते", subtitle: "Focus on the effort, not the outcome!" },
  { title: "श्रमेव हि तपस्यते", subtitle: "Hard work is the ultimate meditation!" },
  { title: "तपसा चार्जितव्यो लोक:", subtitle: "The world is conquered through perseverance!" },
  { title: "वीर्य वृद्धि परं सुखम्", subtitle: "True happiness lies in growing stronger!" },
  { title: "न हि ज्ञानेन सदृशं", subtitle: "Nothing compares to the power of determination!" },
  { title: "उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत", subtitle: "Rise up and seize this moment!" }
];

const MOTIVATIONAL_QUOTES = [
  "🔥 Pain is weakness leaving the body!",
  "💪 You're stronger than you think!",
  "⚡ Champions are made, not born!",
  "🎯 No pain, no gain!",
  "🏆 Your body can stand almost anything. It's your mind that you need to convince!",
  "🚀 Don't wish for it, work for it!",
  "💎 Diamonds are made under pressure!",
  "⭐ You are capable of amazing things!",
  "🔑 Success is the sum of small efforts repeated day in and day out!",
  "🌟 The only impossible journey is the one you never begin!",
  "💥 Push yourself, because no one else is going to do it for you!",
  "🎖️ Your only limit is you!",
  "🏅 Greatness demands sacrifice!",
  "⚔️ Warriors don't quit, they dominate!",
  "🔱 Rise up and never give up!",
  "🌠 You are unstoppable!",
  "🎪 Every rep counts, every set matters!",
  "🎭 Embrace the grind, it makes you legendary!",
  "💫 Your future self will thank you!",
  "🚁 No excuses, only results!",
  "🏃 The pain you feel today will be the strength you feel tomorrow!",
  "⚡ Sweat is just fat crying!",
  "🔥 You've come too far to quit now!",
  "🎯 Every struggle is a stepping stone to glory!",
  "💪 Be the warrior you're meant to be!",
  "🏆 Your determination is your superpower!",
  "🌈 Impossible is just an opinion!",
  "🎖️ You are forged in fire and tested in battle!",
  "🚀 Legends never rest!",
  "⭐ Your dream body is one rep away!",
  "🔑 Success belongs to those who never quit!",
  "💎 Make every moment count!",
  "🎯 Your best self is waiting!",
  "⚔️ Conquer your limits!",
  "🏅 No retreat, only advance!",
  "🌟 Feel the power within you!",
  "💥 You are the champion of your own story!",
  "🔱 Rise above challenges!",
  "🎭 Prove yourself to yourself!",
  "💫 Your dedication defines you!",
  "🚁 Keep pushing, keep winning!",
  "🏃 The hardest step is showing up - you already did!",
  "⚡ Transform your pain into power!",
  "🔥 This is your moment to shine!",
  "🎪 Discipline equals freedom!",
  "💪 You are stronger than your excuses!",
  "🏆 Victory belongs to the persistent!",
  "🌠 Your sacrifice will be your triumph!",
  "🎖️ Never surrender!",
  "🚀 You are destined for greatness!"
];

function getRandomTitle(){
  return MOTIVATIONAL_TITLES[Math.floor(Math.random() * MOTIVATIONAL_TITLES.length)];
}

function getRandomQuote(){
  return MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
}

function calculateTodayStats(){
  const date = dateInput.value || formatDateISO(new Date());
  const progressData = (state.progress || {})[date] || {};
  let totalSetsDone = 0;
  
  Object.keys(progressData).forEach(exerciseId => {
    const exState = progressData[exerciseId];
    Object.keys(exState.sets || {}).forEach(setNum => {
      if(exState.sets[setNum].done) totalSetsDone++;
    });
  });
  
  return totalSetsDone;
}

document.getElementById('givingUpBtn').addEventListener('click', ()=>{
  const titleData = getRandomTitle();
  const randomQuote = getRandomQuote();
  const todayStats = calculateTodayStats();
  
  document.getElementById('motivationTitle').textContent = titleData.title;
  document.getElementById('motivationSubtitle').textContent = titleData.subtitle;
  document.querySelector('#randomQuote .lead').textContent = randomQuote;
  document.getElementById('completedSets').textContent = todayStats;
  
  const modal = new bootstrap.Modal(document.getElementById('motivationModal'));
  modal.show();
});

document.getElementById('motivationModal').addEventListener('show.bs.modal', ()=>{
  const titleData = getRandomTitle();
  const randomQuote = getRandomQuote();
  const todayStats = calculateTodayStats();
  
  document.getElementById('motivationTitle').textContent = titleData.title;
  document.getElementById('motivationSubtitle').textContent = titleData.subtitle;
  document.querySelector('#randomQuote .lead').textContent = randomQuote;
  document.getElementById('completedSets').textContent = todayStats;
  
  // Activate brutal ambulance effect
  const overlay = document.getElementById('ambulanceOverlay');
  overlay.classList.add('active-red');
  overlay.style.display = 'block';
});

document.getElementById('motivationModal').addEventListener('hide.bs.modal', ()=>{
  // Deactivate ambulance effect
  const overlay = document.getElementById('ambulanceOverlay');
  overlay.classList.remove('active-red');
  overlay.style.display = 'none';
});

document.getElementById('continueWorkoutBtn').addEventListener('click', ()=>{
  const modal = bootstrap.Modal.getInstance(document.getElementById('motivationModal'));
  modal.hide();
});

document.getElementById('resetTodayBtn').addEventListener('click', ()=>{
  if(!confirm('⚠️ WARNING: This will clear all progress for TODAY only!\n\n🔄 Are you sure you want to reset today\'s workout?')){
    return;
  }
  
  const date = dateInput.value || formatDateISO(new Date());
  state = loadState();
  
  // Clear only today's progress
  if(state.progress && state.progress[date]){
    delete state.progress[date];
    saveState(state);
  }
  
  // Close modal and refresh
  const modal = bootstrap.Modal.getInstance(document.getElementById('motivationModal'));
  modal.hide();
  
  // Re-render to show reset state
  render();
});

// Wire Today button in collapsed menu to behave same as main Today
const todayBtnMobile = document.getElementById('todayBtnMobile');
if(todayBtnMobile){ todayBtnMobile.addEventListener('click', ()=>{ dateInput.value = formatDateISO(new Date()); daySelect.value='auto'; render(); const menu = document.querySelector('.navbar-collapse'); if(menu && menu.classList.contains('show')){ new bootstrap.Collapse(menu).toggle(); } }); }

// Import functionality removed per user request.
