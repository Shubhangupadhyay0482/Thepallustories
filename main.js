// Path to the new premium generated hero image
const HERO_IMAGE_PATH = "/hero_accessories.jpg";

// Elements for canvas scroll & cursor parallax
const canvas = document.getElementById('scroll-canvas');
const context = canvas.getContext('2d');
const preloader = document.getElementById('preloader');
const progressBar = document.getElementById('progress-bar');
const loaderPercent = document.getElementById('loader-percent');

// Elements for E-commerce Shop
const productGrid = document.getElementById('product-grid');
const filterChips = document.querySelectorAll('.filter-chip');
const cartBtn = document.getElementById('cart-btn');
const cartBadge = document.getElementById('cart-badge');
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const cartCloseBtn = document.getElementById('cart-close-btn');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const toast = document.getElementById('toast-notification');
const toastMessage = document.getElementById('toast-message');

// E-commerce Gift Wrapping elements
const giftProgressBar = document.getElementById('gift-progress-bar');
const giftProgressPercent = document.getElementById('gift-progress-percent');
const giftProgressLbl = document.getElementById('gift-progress-lbl');

// Quick View Modal elements
const quickviewModal = document.getElementById('quickview-modal');
const quickviewCloseBtn = document.getElementById('quickview-close-btn');
const quickviewImg = document.getElementById('quickview-img');
const quickviewTitle = document.getElementById('quickview-title');
const quickviewPrice = document.getElementById('quickview-price');
const quickviewDesc = document.getElementById('quickview-desc');
const quickviewDetails = document.getElementById('quickview-details');
const quickviewCategory = document.getElementById('quickview-category');
const quickviewAddBtn = document.getElementById('quickview-add-btn');

// Page View Elements (SPA Router)
const views = {
  home: document.getElementById('view-home'),
  login: document.getElementById('view-login'),
  signup: document.getElementById('view-signup'),
  forgot: document.getElementById('view-forgot'),
  dashboard: document.getElementById('view-dashboard')
};

// Profile & Navigation Elements
const profileBtn = document.getElementById('profile-btn');
const profileIcon = document.getElementById('profile-icon');
const profileAvatar = document.getElementById('profile-avatar');
const profileDropdown = document.getElementById('profile-dropdown');
const dropdownEmail = document.getElementById('dropdown-email');
const dropdownLogoutBtn = document.getElementById('dropdown-logout-btn');
const navWishlistBtn = document.getElementById('nav-wishlist-btn');

// Auth Form elements
const loginForm = document.getElementById('login-form');
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');
const demoLoginBtn = document.getElementById('demo-login-btn');

const signupForm = document.getElementById('signup-form');
const signupName = document.getElementById('signup-name');
const signupEmail = document.getElementById('signup-email');
const signupPhone = document.getElementById('signup-phone');
const signupPassword = document.getElementById('signup-password');
const signupConfirm = document.getElementById('signup-confirm');
const signupTerms = document.getElementById('signup-terms');

const forgotForm = document.getElementById('forgot-form');
const forgotEmail = document.getElementById('forgot-email');
const forgotFormScreen = document.getElementById('forgot-form-screen');
const forgotSuccessScreen = document.getElementById('forgot-success-screen');
const forgotTargetEmail = document.getElementById('forgot-target-email');

// Dashboard tab elements
const dashTabBtns = document.querySelectorAll('.dash-tab-btn');
const dashTabContents = document.querySelectorAll('.dash-tab-content');
const dashGreetingName = document.getElementById('dash-greeting-name');
const dashLogoutBtn = document.getElementById('dash-logout-btn');

// Dashboard sub-form elements
const profileViewState = document.getElementById('profile-view-state');
const profileEditToggle = document.getElementById('profile-edit-toggle');
const profileEditForm = document.getElementById('profile-edit-form');
const profileEditCancel = document.getElementById('profile-edit-cancel');
const editName = document.getElementById('edit-name');
const editPhone = document.getElementById('edit-phone');
const valName = document.getElementById('val-name');
const valEmail = document.getElementById('val-email');
const valPhone = document.getElementById('val-phone');

const ordersList = document.getElementById('orders-list');
const wishlistGrid = document.getElementById('wishlist-grid');

const addressViewState = document.getElementById('address-view-state');
const addressEditToggle = document.getElementById('address-edit-toggle');
const addressEditForm = document.getElementById('address-edit-form');
const addressEditCancel = document.getElementById('address-edit-cancel');
const editAddrName = document.getElementById('edit-addr-name');
const editAddrStreet = document.getElementById('edit-addr-street');
const editAddrCity = document.getElementById('edit-addr-city');
const editAddrPhone = document.getElementById('edit-addr-phone');
const addrNameLbl = document.getElementById('addr-name-lbl');
const addrLineLbl = document.getElementById('addr-line-lbl');
const addrCityLbl = document.getElementById('addr-city-lbl');
const addrPhoneLbl = document.getElementById('addr-phone-lbl');

const passwordChangeForm = document.getElementById('password-change-form');
const secOldPass = document.getElementById('sec-old-pass');
const secNewPass = document.getElementById('sec-new-pass');
const secConfirmPass = document.getElementById('sec-confirm-pass');

// Preloaded image variable
let heroImage = null;

// Animation & Cursor Parallax state
const state = {
  currentFraction: 0,
  targetFraction: 0,
  currentMouseX: 0,
  currentMouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0,
  lerpEase: 0.08,
  activeRoute: "home"
};

// E-commerce state
let cart = [];
const products = [
  {
    id: 1,
    title: "Crescent Gold Cuff",
    price: 42.00,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=600",
    description: "An elegant, hand-shaped gold cuff bracelet featuring a textured crescent pattern. Crafted to catch the soft light of golden hour and sit gracefully on the wrist.",
    details: ["24k Gold Plated Brass", "Adjustable Open Cuff Fit", "Handmade in Small Batches"]
  },
  {
    id: 2,
    title: "Solid Brass Ring Fob",
    price: 22.00,
    category: "Keychains",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1534224039826-c7a0dea0e66a?auto=format&fit=crop&q=80&w=600",
    description: "A functional yet refined keyholder made from sand-cast solid brass. Heavy in hand, featuring a premium screw-lock ring and custom engraving options.",
    details: ["100% Solid Brass", "Premium Screw-Lock Ring", "Dimensions: 3.5\" x 1.2\""]
  },
  {
    id: 3,
    title: "Woven Linen Hobo Bag",
    price: 125.00,
    category: "Handbags",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1566150905458-1bf1fc15a490?auto=format&fit=crop&q=80&w=600",
    description: "A spacious hobo-style shoulder bag crafted from organic linen and finished with full-grain espresso leather straps. Perfect for carrying daily essentials with ease.",
    details: ["Organic Flax Linen Canvas", "Full-Grain Italian Leather", "Inner Magnetic Clasp"]
  },
  {
    id: 4,
    title: "Raw Amber Bead Bracelet",
    price: 38.00,
    category: "Bracelets",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1611085583191-a3b1a3a395fa?auto=format&fit=crop&q=80&w=600",
    description: "Threaded beads of polished raw amber that glow with a deep cognac warmth. Designed to be stacked with other cuffs or worn as a single understated piece.",
    details: ["Natural Baltic Amber Beads", "High-Stretch Silk Cord", "Bead Diameter: 8mm"]
  },
  {
    id: 5,
    title: "Terracotta Tassel Keyholder",
    price: 28.00,
    category: "Keychains",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=600",
    description: "A statement keychain featuring a thick cotton tassel dyed in an organic terracotta hue. Outfitted with a gold-tone swivel clasp for easy attachment to handbags.",
    details: ["Organic Hand-dyed Cotton", "Gold-tone Swivel Clasp", "Length: 6.5\""]
  },
  {
    id: 6,
    title: "Suede Classic Crossbody",
    price: 145.00,
    category: "Handbags",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=600",
    hoverImage: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=600",
    description: "An understated crossbody bag crafted from ultra-soft sand suede. Designed with an adjustable leather shoulder strap and a polished brass hardware buckle.",
    details: ["Premium Sand Calf Suede", "Solid Brass Hardware Buckle", "Adjustable Strap: 20\"-24\""]
  }
];

// User session management state
let currentUser = null;

// Canvas resize handler
const resizeCanvas = () => {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width * window.devicePixelRatio;
  canvas.height = rect.height * window.devicePixelRatio;
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
  context.scale(window.devicePixelRatio, window.devicePixelRatio);
  drawFrame(state.currentFraction, state.currentMouseX, state.currentMouseY);
};

// Canvas drawing loop
const drawFrame = (fraction, mouseX, mouseY) => {
  if (!heroImage || !heroImage.complete) return;

  const rect = canvas.parentElement.getBoundingClientRect();
  const canvasWidth = rect.width;
  const canvasHeight = rect.height;
  
  const imgWidth = heroImage.naturalWidth;
  const imgHeight = heroImage.naturalHeight;
  
  const imgRatio = imgWidth / imgHeight;
  const canvasRatio = canvasWidth / canvasHeight;
  
  let drawWidth = canvasWidth;
  let drawHeight = canvasHeight;
  let offsetX = 0;
  let offsetY = 0;
  
  if (canvasRatio > imgRatio) {
    drawHeight = canvasWidth / imgRatio;
    offsetY = (canvasHeight - drawHeight) / 2;
  } else {
    drawWidth = canvasHeight * imgRatio;
    offsetX = (canvasWidth - drawWidth) / 2;
  }
  
  context.clearRect(0, 0, canvasWidth, canvasHeight);
  context.save();
  
  const zoom = 1.02 + fraction * 0.15; 
  const scrollPanY = fraction * -20;
  const cursorPanX = mouseX * 25; 
  const cursorPanY = mouseY * 25; 
  
  context.translate(canvasWidth / 2, canvasHeight / 2);
  context.scale(zoom, zoom);
  context.translate(cursorPanX, scrollPanY + cursorPanY);
  
  context.drawImage(heroImage, offsetX - canvasWidth / 2, offsetY - canvasHeight / 2, drawWidth, drawHeight);
  context.restore();
};

// Preload canvas hero image
const preloadImages = () => {
  return new Promise((resolve) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      progressBar.style.width = `${progress}%`;
      loaderPercent.textContent = `${progress}%`;
      if (progress >= 50) clearInterval(interval);
    }, 45);

    heroImage = new Image();
    heroImage.src = HERO_IMAGE_PATH;
    heroImage.onload = () => {
      clearInterval(interval);
      let finishProgress = progress;
      const finishInterval = setInterval(() => {
        finishProgress += 10;
        if (finishProgress > 100) finishProgress = 100;
        progressBar.style.width = `${finishProgress}%`;
        loaderPercent.textContent = `${finishProgress}%`;
        
        if (finishProgress === 100) {
          clearInterval(finishInterval);
          setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'auto';
            resolve();
          }, 600);
        }
      }, 20);
    };
    heroImage.onerror = () => {
      clearInterval(interval);
      preloader.classList.add('fade-out');
      document.body.style.overflow = 'auto';
      resolve();
    };
  });
};

// Animation tick loop
const tick = () => {
  const scrollDiff = state.targetFraction - state.currentFraction;
  state.currentFraction += scrollDiff * state.lerpEase;
  if (Math.abs(scrollDiff) < 0.001) state.currentFraction = state.targetFraction;
  
  const mouseXDiff = state.targetMouseX - state.currentMouseX;
  state.currentMouseX += mouseXDiff * 0.05; 
  
  const mouseYDiff = state.targetMouseY - state.currentMouseY;
  state.currentMouseY += mouseYDiff * 0.05;
  
  drawFrame(state.currentFraction, state.currentMouseX, state.currentMouseY);
  requestAnimationFrame(tick);
};

// Scroll update
const handleScroll = () => {
  if (state.activeRoute !== "home") return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const activeScrollHeight = window.innerHeight * 1.2;
  const scrollFraction = Math.min(1, Math.max(0, scrollTop / activeScrollHeight));
  state.targetFraction = scrollFraction;
};

// Mouse move tracking inside the hero container for cursor parallax
const handleMouseMove = (e) => {
  const container = canvas.parentElement;
  const rect = container.getBoundingClientRect();
  const relativeX = (e.clientX - rect.left) / rect.width - 0.5;
  const relativeY = (e.clientY - rect.top) / rect.height - 0.5;
  state.targetMouseX = relativeX;
  state.targetMouseY = relativeY;
};

const handleMouseLeave = () => {
  state.targetMouseX = 0;
  state.targetMouseY = 0;
};

// Setup Scroll Reveal Intersection Observer
const initScrollReveal = () => {
  const reveals = document.querySelectorAll('.scroll-reveal');
  const observerOptions = {
    root: null,
    threshold: 0.08,
    rootMargin: "0px 0px -40px 0px"
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, observerOptions);
  reveals.forEach(el => observer.observe(el));
};

const handleHeaderShrink = () => {
  const header = document.getElementById('main-header');
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
};

// ----------------------------------------------------
// SPA Routing Manager (Transitions view toggle)
// ----------------------------------------------------

const switchView = (targetRoute) => {
  state.activeRoute = targetRoute;
  
  // Close active overlay dropdowns or drawers
  profileDropdown.classList.remove('open');
  toggleCart(false);
  
  // Fade out current views
  Object.keys(views).forEach(key => {
    const view = views[key];
    if (key === targetRoute) {
      view.classList.remove('hidden');
      void view.offsetWidth; // trigger reflow
      view.classList.add('opacity-100');
    } else {
      view.classList.add('hidden');
      view.classList.remove('opacity-100');
    }
  });

  // Reset scroll position on route switch
  window.scrollTo({ top: 0, behavior: 'auto' });

  // Custom tab actions
  if (targetRoute === 'dashboard') {
    renderDashboard();
  }
  
  // Redraw canvas if going home
  if (targetRoute === 'home') {
    setTimeout(resizeCanvas, 50);
  }
};

// Handle route clicks
const setupRouter = () => {
  // Catch custom route triggers
  document.querySelectorAll('.route-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const route = trigger.dataset.route;
      
      // Route protection for dashboard
      if (route === 'dashboard' && !currentUser) {
        switchView('login');
      } else {
        switchView(route);
      }
    });
  });

  // Watch URL hashes
  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.substring(1);
    if (views[hash]) {
      if (hash === 'dashboard' && !currentUser) {
        switchView('login');
      } else {
        switchView(hash);
      }
    }
  });
};

// ----------------------------------------------------
// Authentication Handlers
// ----------------------------------------------------

// Seed local database in localStorage
const initLocalDatabase = () => {
  if (!localStorage.getItem('pallu_users')) {
    const seedUsers = [
      {
        name: "Aria Sharma",
        email: "guest@pallustories.com",
        phone: "+1 (555) 019-2834",
        password: "password123",
        wishlist: [1, 3],
        address: {
          name: "Aria Sharma",
          street: "128 Rue de L'Artisan, Suite 4B",
          city: "New York, NY 10013",
          phone: "+1 (555) 019-2834"
        },
        orders: [
          {
            id: "PS-9823",
            date: "July 5, 2026",
            total: 167.00,
            status: "In Transit",
            step: 3, // 1: Placed, 2: Shipped, 3: In Transit, 4: Delivered
            items: [
              { title: "Crescent Gold Cuff", price: 42.00, qty: 1 },
              { title: "Woven Linen Hobo Bag", price: 125.00, qty: 1 }
            ]
          },
          {
            id: "PS-9541",
            date: "June 28, 2026",
            total: 22.00,
            status: "Delivered",
            step: 4,
            items: [
              { title: "Solid Brass Ring Fob", price: 22.00, qty: 1 }
            ]
          }
        ]
      }
    ];
    localStorage.setItem('pallu_users', JSON.stringify(seedUsers));
  }
};

const handleLogin = (e) => {
  e.preventDefault();
  const email = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value;
  
  const users = JSON.parse(localStorage.getItem('pallu_users') || "[]");
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = user;
    sessionStorage.setItem('pallu_session', JSON.stringify(user));
    updateAuthUI();
    showToast(`Welcome back, ${user.name}`);
    switchView('dashboard');
    loginForm.reset();
  } else {
    showToast("Invalid email or password. Hint: guest@pallustories.com / password123");
  }
};

const handleSignup = (e) => {
  e.preventDefault();
  const name = signupName.value.trim();
  const email = signupEmail.value.trim().toLowerCase();
  const phone = signupPhone.value.trim();
  const password = signupPassword.value;
  const confirm = signupConfirm.value;
  
  if (password !== confirm) {
    showToast("Passwords do not match!");
    return;
  }
  
  const users = JSON.parse(localStorage.getItem('pallu_users') || "[]");
  if (users.some(u => u.email === email)) {
    showToast("Email address already registered!");
    return;
  }
  
  const newUser = {
    name,
    email,
    phone: phone || "Not Provided",
    password,
    wishlist: [],
    address: {
      name,
      street: "Not Provided",
      city: "Not Provided",
      phone: phone || "Not Provided"
    },
    orders: []
  };
  
  users.push(newUser);
  localStorage.setItem('pallu_users', JSON.stringify(users));
  
  currentUser = newUser;
  sessionStorage.setItem('pallu_session', JSON.stringify(newUser));
  updateAuthUI();
  showToast(`Account created! Welcome, ${name}`);
  switchView('dashboard');
  signupForm.reset();
};

const handleForgot = (e) => {
  e.preventDefault();
  const email = forgotEmail.value.trim();
  forgotTargetEmail.textContent = email;
  
  forgotFormScreen.classList.add('hidden');
  forgotSuccessScreen.classList.remove('hidden');
};

const handleLogout = () => {
  // Sync changes back to database before logout
  syncUserChanges();
  
  currentUser = null;
  sessionStorage.removeItem('pallu_session');
  updateAuthUI();
  showToast("Logged out successfully");
  switchView('home');
};

// Sync currentUser session back to local storage database
const syncUserChanges = () => {
  if (!currentUser) return;
  const users = JSON.parse(localStorage.getItem('pallu_users') || "[]");
  const idx = users.findIndex(u => u.email === currentUser.email);
  if (idx !== -1) {
    users[idx] = currentUser;
    localStorage.setItem('pallu_users', JSON.stringify(users));
    sessionStorage.setItem('pallu_session', JSON.stringify(currentUser));
  }
};

// Sync wishlist on product card hearts
const toggleWishlist = (productId) => {
  if (!currentUser) {
    showToast("Please log in to add items to your wishlist");
    switchView('login');
    return;
  }
  
  const idx = currentUser.wishlist.indexOf(productId);
  if (idx > -1) {
    currentUser.wishlist.splice(idx, 1);
    showToast("Removed from wishlist");
  } else {
    currentUser.wishlist.push(productId);
    showToast("Added to wishlist");
  }
  syncUserChanges();
  renderProducts();
};

// Update header profile button states based on login status
const updateAuthUI = () => {
  if (currentUser) {
    // Show avatar, hide standard icon
    profileIcon.classList.add('hidden');
    profileAvatar.classList.remove('hidden');
    profileAvatar.textContent = currentUser.name.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
    dropdownEmail.textContent = currentUser.email;
  } else {
    // Show icon, hide avatar
    profileIcon.classList.remove('hidden');
    profileAvatar.classList.add('hidden');
  }
};

// ----------------------------------------------------
// Account Dashboard View Renderer
// ----------------------------------------------------

const renderDashboard = () => {
  if (!currentUser) return;
  
  dashGreetingName.textContent = currentUser.name;
  
  // PROFILE TAB
  valName.textContent = currentUser.name;
  valEmail.textContent = currentUser.email;
  valPhone.textContent = currentUser.phone;
  editName.value = currentUser.name;
  editPhone.value = currentUser.phone;
  
  // ADDRESS TAB
  const addr = currentUser.address;
  addrNameLbl.textContent = addr.name;
  addrLineLbl.textContent = addr.street;
  addrCityLbl.textContent = addr.city;
  addrPhoneLbl.textContent = `Phone: ${addr.phone}`;
  
  editAddrName.value = addr.name;
  editAddrStreet.value = addr.street;
  editAddrCity.value = addr.city;
  editAddrPhone.value = addr.phone;
  
  // ORDERS TAB
  ordersList.innerHTML = "";
  if (!currentUser.orders || currentUser.orders.length === 0) {
    ordersList.innerHTML = `<p class="text-xs text-on-surface-variant/80 italic py-5">You haven't placed any orders yet.</p>`;
  } else {
    currentUser.orders.forEach(ord => {
      const card = document.createElement('div');
      card.className = "p-md border border-outline-variant/20 rounded bg-surface-container-low space-y-md";
      
      const itemRows = ord.items.map(item => `
        <div class="flex justify-between items-center text-xs text-secondary py-1">
          <span>${item.title} <span class="text-on-surface-variant font-bold">x${item.qty}</span></span>
          <span class="font-bold">$${(item.price * item.qty).toFixed(2)}</span>
        </div>
      `).join("");

      card.innerHTML = `
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-outline-variant/10 pb-sm gap-xs">
          <div>
            <span class="text-[9px] uppercase tracking-widest text-primary font-bold">Order ID: ${ord.id}</span>
            <p class="text-xs text-on-surface-variant font-body-md">${ord.date}</p>
          </div>
          <span class="text-xs font-bold text-secondary">Total: $${ord.total.toFixed(2)}</span>
        </div>
        
        <div class="py-xs">
          ${itemRows}
        </div>

        <!-- Tracking Timeline -->
        <div class="pt-sm border-t border-outline-variant/10">
          <p class="text-[10px] font-bold uppercase tracking-widest text-secondary mb-md">Delivery Tracker: <span class="text-tertiary">${ord.status}</span></p>
          <div class="flex justify-between items-center px-sm">
            <div class="timeline-step ${ord.step >= 1 ? 'completed' : ''} ${ord.step === 1 ? 'active' : ''}">
              <div class="step-dot"></div>
              <span class="step-label">Placed</span>
            </div>
            <div class="timeline-step ${ord.step >= 2 ? 'completed' : ''} ${ord.step === 2 ? 'active' : ''}">
              <div class="step-dot"></div>
              <span class="step-label">Shipped</span>
            </div>
            <div class="timeline-step ${ord.step >= 3 ? 'completed' : ''} ${ord.step === 3 ? 'active' : ''}">
              <div class="step-dot"></div>
              <span class="step-label">In Transit</span>
            </div>
            <div class="timeline-step ${ord.step >= 4 ? 'completed' : ''} ${ord.step === 4 ? 'active' : ''}">
              <div class="step-dot"></div>
              <span class="step-label">Delivered</span>
            </div>
          </div>
        </div>
      `;
      ordersList.appendChild(card);
    });
  }
  
  // WISHLIST TAB
  wishlistGrid.innerHTML = "";
  const wishItems = products.filter(p => currentUser.wishlist.includes(p.id));
  
  if (wishItems.length === 0) {
    wishlistGrid.innerHTML = `
      <div class="col-span-full py-10 text-center text-on-surface-variant/80 italic text-xs">
        Your wishlist is currently empty.
      </div>
    `;
  } else {
    wishItems.forEach(p => {
      const card = document.createElement('div');
      card.className = "product-card p-sm rounded border border-outline-variant/10 flex flex-col justify-between";
      card.innerHTML = `
        <div class="relative overflow-hidden aspect-square bg-surface-container mb-sm rounded">
          <img class="w-full h-full object-cover" src="${p.image}" alt="${p.title}" />
          <button class="wishlist-remove absolute top-2 right-2 w-7 h-7 rounded-full bg-surface/80 border border-outline-variant/30 flex items-center justify-center text-red-700 hover:bg-surface hover:scale-105 active:scale-95 transition-all z-20" data-id="${p.id}" aria-label="Remove item">
            <span class="material-symbols-outlined text-[16px]">close</span>
          </button>
        </div>
        <div>
          <h4 class="text-xs font-semibold text-secondary mb-1 leading-snug truncate">${p.title}</h4>
          <p class="text-xs text-tertiary font-bold mb-md">$${p.price.toFixed(2)}</p>
        </div>
        <button class="wishlist-add-bag w-full py-1.5 bg-secondary text-on-secondary font-button text-[10px] uppercase tracking-widest hover:bg-tertiary transition-all duration-300 z-20" data-id="${p.id}">
          Move to Bag
        </button>
      `;
      
      // Bind Wishlist Row actions
      card.querySelector('.wishlist-remove').onclick = () => toggleWishlist(p.id);
      card.querySelector('.wishlist-add-bag').onclick = () => {
        addToCart(p.id);
        toggleWishlist(p.id);
      };
      
      wishlistGrid.appendChild(card);
    });
  }
};

// Setup Dashboard Tab toggle buttons listeners
const setupDashboardTabs = () => {
  dashTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      
      // Set button active class
      dashTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Set panel active
      dashTabContents.forEach(content => {
        if (content.id === `tab-${tab}`) {
          content.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
        }
      });
      
      // Sync form displays
      profileViewState.classList.remove('hidden');
      profileEditForm.classList.add('hidden');
      addressViewState.classList.remove('hidden');
      addressEditForm.classList.add('hidden');
    });
  });
};

// ----------------------------------------------------
// E-commerce Shop System
// ----------------------------------------------------

// Render Shop Product Grid
const renderProducts = (categoryFilter = "All") => {
  productGrid.innerHTML = "";
  const filtered = products.filter(p => categoryFilter === "All" || p.category === categoryFilter);
  
  filtered.forEach((p, index) => {
    const card = document.createElement('div');
    const delay = (index % 3) * 100; 
    card.className = "product-card flex flex-col p-md rounded shadow-sm border border-outline-variant/10 group cursor-pointer scroll-reveal scale-in opacity-0 relative";
    card.style.transitionDelay = `${delay}ms`;
    card.dataset.id = p.id;
    
    // Heart icon styling based on wishlist
    const inWishlist = currentUser && currentUser.wishlist.includes(p.id);
    const heartIconName = inWishlist ? "favorite" : "favorite";
    const heartIconStyle = inWishlist ? 'font-variation-settings: "FILL" 1;' : 'font-variation-settings: "FILL" 0;';
    const heartColor = inWishlist ? 'text-tertiary' : 'text-on-surface-variant hover:text-tertiary';

    card.innerHTML = `
      <div class="overflow-hidden aspect-square bg-surface-container mb-md relative rounded">
        <img class="product-image-primary w-full h-full object-cover" src="${p.image}" alt="${p.title}" />
        <img class="product-image-hover" src="${p.hoverImage}" alt="${p.title} detail" />
        <span class="absolute top-3 left-3 bg-surface/90 backdrop-blur-sm border border-outline-variant/30 text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded text-secondary z-20">${p.category}</span>
        
        <!-- Toggle Wishlist Icon Overlay on Card -->
        <button class="heart-btn absolute top-3 right-3 w-8 h-8 rounded-full bg-surface/80 border border-outline-variant/20 flex items-center justify-center ${heartColor} hover:bg-surface hover:scale-105 active:scale-95 transition-all z-20" aria-label="Toggle wishlist" data-id="${p.id}">
          <span class="material-symbols-outlined text-[18px]" style='${heartIconStyle}'>favorite</span>
        </button>
      </div>
      <div class="flex-grow flex flex-col justify-between">
        <div>
          <h4 class="font-body-lg text-secondary text-sm font-semibold mb-xs leading-snug">${p.title}</h4>
          <p class="text-tertiary font-bold text-sm mb-md">$${p.price.toFixed(2)}</p>
        </div>
        <button class="add-to-cart-btn w-full py-2 bg-secondary text-on-secondary font-button text-[11px] uppercase tracking-widest hover:bg-tertiary transition-all duration-300 shadow-sm z-20" data-id="${p.id}">
          Add to Bag
        </button>
      </div>
    `;
    
    productGrid.appendChild(card);
    
    setTimeout(() => {
      card.classList.remove('opacity-0');
      card.classList.add('in-view');
    }, 60);
  });

  // Bind Open Quick View click on card (ignoring Add to Bag and Heart button clicks)
  document.querySelectorAll('.product-grid .product-card', '#product-grid .product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.add-to-cart-btn') || e.target.closest('.heart-btn')) return;
      const id = parseInt(card.dataset.id);
      openQuickView(id);
    });
  });

  // Bind Heart buttons
  document.querySelectorAll('.heart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const target = e.target.closest('.heart-btn');
      const id = parseInt(target.dataset.id);
      toggleWishlist(id);
    });
  });

  // Bind Add to Cart buttons
  document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      addToCart(id);
    });
  });
};

// Add Item to Cart
const addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  showToast(`Added "${product.title}" to bag`);
  triggerBadgeSpring();
  updateCartUI();
  toggleCart(true);
};

const triggerBadgeSpring = () => {
  cartBadge.classList.remove('animate-spring');
  void cartBadge.offsetWidth; 
  cartBadge.classList.add('animate-spring');
};

const showToast = (message) => {
  toastMessage.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
};

const toggleCart = (isOpen) => {
  if (isOpen) {
    cartDrawer.classList.add('open');
    cartOverlay.classList.remove('hidden');
    document.body.classList.add('cart-open');
  } else {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.add('hidden');
    document.body.classList.remove('cart-open');
  }
};

const updateCartItemQuantity = (productId, change) => {
  const idx = cart.findIndex(item => item.id === productId);
  if (idx === -1) return;

  cart[idx].quantity += change;
  if (cart[idx].quantity <= 0) cart.splice(idx, 1);
  updateCartUI();
};

const updateCartUI = () => {
  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartBadge.textContent = totalCount;
  
  cartItemsContainer.innerHTML = "";
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="text-center py-20 text-on-surface-variant flex flex-col items-center justify-center gap-sm">
        <span class="material-symbols-outlined text-[48px] opacity-30">shopping_bag</span>
        <p class="font-body-lg italic">Your bag is empty.</p>
        <a class="text-tertiary hover:text-secondary font-button text-[12px] uppercase mt-sm inline-block" href="#shop" id="cart-shop-now-btn">Shop Now</a>
      </div>
    `;
    document.getElementById('cart-shop-now-btn').addEventListener('click', () => toggleCart(false));
  } else {
    cart.forEach(item => {
      const row = document.createElement('div');
      row.className = "flex items-center gap-md border-b border-outline-variant/20 pb-md last:border-b-0";
      
      row.innerHTML = `
        <div class="w-16 h-16 bg-surface-container-low rounded overflow-hidden flex-shrink-0">
          <img class="w-full h-full object-cover" src="${item.image}" alt="${item.title}" />
        </div>
        <div class="flex-grow">
          <h4 class="font-body-lg text-secondary text-xs font-semibold mb-xs">${item.title}</h4>
          <p class="text-tertiary text-xs font-bold">$${item.price.toFixed(2)}</p>
          <div class="flex items-center gap-sm mt-sm">
            <button class="qty-btn-minus text-on-surface-variant hover:text-secondary border border-outline-variant/30 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold" data-id="${item.id}">-</button>
            <span class="text-xs text-secondary font-bold select-none w-4 text-center">${item.quantity}</span>
            <button class="qty-btn-plus text-on-surface-variant hover:text-secondary border border-outline-variant/30 w-5 h-5 flex items-center justify-center rounded-full text-xs font-bold" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="cart-remove-btn text-on-surface-variant hover:text-red-700 flex items-center" data-id="${item.id}" aria-label="Remove item">
          <span class="material-symbols-outlined text-[20px]">delete</span>
        </button>
      `;
      cartItemsContainer.appendChild(row);
    });

    document.querySelectorAll('.qty-btn-minus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        updateCartItemQuantity(id, -1);
      });
    });

    document.querySelectorAll('.qty-btn-plus').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.dataset.id);
        updateCartItemQuantity(id, 1);
      });
    });

    document.querySelectorAll('.cart-remove-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.target.closest('.cart-remove-btn');
        const id = parseInt(target.dataset.id);
        updateCartItemQuantity(id, -Infinity);
      });
    });
  }

  const totalSum = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  cartSubtotal.textContent = `$${totalSum.toFixed(2)}`;
  
  const targetGoal = 100.00;
  const progressPercent = Math.min(100, Math.round((totalSum / targetGoal) * 100));
  giftProgressBar.style.width = `${progressPercent}%`;
  giftProgressPercent.textContent = `${progressPercent}%`;
  
  if (totalSum >= targetGoal) {
    giftProgressPercent.innerHTML = `<span class="text-emerald-700 font-bold">UNLOCKED</span>`;
    giftProgressLbl.innerHTML = `🎁 Free Premium Linen Gift Wrapping Unlocked!`;
  } else {
    const diff = (targetGoal - totalSum).toFixed(2);
    giftProgressLbl.textContent = `Add $${diff} more for Free Premium Wrapping`;
  }
};

// ----------------------------------------------------
// Quick View Modal Actions
// ----------------------------------------------------

const openQuickView = (productId) => {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;
  
  quickviewImg.src = p.image;
  quickviewImg.alt = p.title;
  quickviewTitle.textContent = p.title;
  quickviewPrice.textContent = `$${p.price.toFixed(2)}`;
  quickviewDesc.textContent = p.description;
  quickviewCategory.textContent = p.category;
  
  quickviewDetails.innerHTML = "";
  p.details.forEach(spec => {
    const li = document.createElement('li');
    li.textContent = spec;
    quickviewDetails.appendChild(li);
  });
  
  quickviewAddBtn.onclick = () => {
    addToCart(p.id);
    closeQuickView();
  };
  
  quickviewModal.classList.remove('hidden');
  void quickviewModal.offsetWidth; 
  quickviewModal.classList.add('open');
  document.body.style.overflow = 'hidden'; 
};

const closeQuickView = () => {
  quickviewModal.classList.remove('open');
  setTimeout(() => {
    quickviewModal.classList.add('hidden');
    if (!document.body.classList.contains('cart-open') && state.activeRoute !== 'dashboard') {
      document.body.style.overflow = 'auto';
    }
  }, 300);
};

// Global Category Filter Trigger
window.filterCategory = (categoryName) => {
  filterChips.forEach(chip => {
    if (chip.dataset.category === categoryName) {
      chip.classList.add('active');
    } else {
      chip.classList.remove('active');
    }
  });
  renderProducts(categoryName);
};

// ----------------------------------------------------
// Global Event Listeners & Event Bindings
// ----------------------------------------------------

const bindEvents = () => {
  // Canvas Parallax Mouse hooks
  canvas.parentElement.addEventListener('mousemove', handleMouseMove);
  canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);
  window.addEventListener('scroll', handleHeaderShrink);

  // Cart toggles
  cartBtn.addEventListener('click', () => toggleCart(true));
  cartCloseBtn.addEventListener('click', () => toggleCart(false));
  cartOverlay.addEventListener('click', () => toggleCart(false));

  // Quick View toggles
  quickviewCloseBtn.addEventListener('click', closeQuickView);
  quickviewModal.addEventListener('click', (e) => {
    if (e.target === quickviewModal) closeQuickView();
  });

  // Spring animation end cleaner
  cartBadge.addEventListener('animationend', () => {
    cartBadge.classList.remove('animate-spring');
  });

  // Shop category filtering
  filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      const category = e.target.dataset.category;
      window.filterCategory(category);
    });
  });

  // Checkout warning click
  document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
      showToast("Your shopping bag is empty");
    } else {
      showToast("Checkout checkout initiated! (Demo)");
    }
  });

  // Toggle dropdown Profile menu click
  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentUser) {
      switchView('login');
    } else {
      profileDropdown.classList.toggle('open');
    }
  });

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (currentUser && !profileMenuContainer.contains(e.target)) {
      profileDropdown.classList.remove('open');
    }
  });

  // Dropdown options click triggers
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const tab = item.dataset.tab;
      if (tab) {
        e.preventDefault();
        switchView('dashboard');
        
        // Trigger active dashboard tab click
        const tabBtn = document.querySelector(`.dash-tab-btn[data-tab="${tab}"]`);
        if (tabBtn) tabBtn.click();
      }
    });
  });

  dropdownLogoutBtn.addEventListener('click', handleLogout);
  dashLogoutBtn.addEventListener('click', handleLogout);

  // Auto-fill demo credentials
  demoLoginBtn.addEventListener('click', () => {
    loginEmail.value = "guest@pallustories.com";
    loginPassword.value = "password123";
    showToast("Demo credentials auto-filled");
  });

  // Forms submit controls
  loginForm.addEventListener('submit', handleLogin);
  signupForm.addEventListener('submit', handleSignup);
  forgotForm.addEventListener('submit', handleForgot);

  // Show/Hide Password buttons toggle
  document.querySelectorAll('.password-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = btn.previousElementSibling;
      const icon = btn.querySelector('.material-symbols-outlined');
      if (input.type === 'password') {
        input.type = 'text';
        icon.textContent = 'visibility_off';
      } else {
        input.type = 'password';
        icon.textContent = 'visibility';
      }
    });
  });

  // Dashboard Sub-form edits toggles
  profileEditToggle.addEventListener('click', () => {
    profileViewState.classList.add('hidden');
    profileEditForm.classList.remove('hidden');
  });

  profileEditCancel.addEventListener('click', () => {
    profileViewState.classList.remove('hidden');
    profileEditForm.classList.add('hidden');
  });

  profileEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUser.name = editName.value.trim();
    currentUser.phone = editPhone.value.trim();
    syncUserChanges();
    updateAuthUI();
    renderDashboard();
    
    profileViewState.classList.remove('hidden');
    profileEditForm.classList.add('hidden');
    showToast("Profile details updated");
  });

  addressEditToggle.addEventListener('click', () => {
    addressViewState.classList.add('hidden');
    addressEditForm.classList.remove('hidden');
  });

  addressEditCancel.addEventListener('click', () => {
    addressViewState.classList.remove('hidden');
    addressEditForm.classList.add('hidden');
  });

  addressEditForm.addEventListener('submit', (e) => {
    e.preventDefault();
    currentUser.address = {
      name: editAddrName.value.trim(),
      street: editAddrStreet.value.trim(),
      city: editAddrCity.value.trim(),
      phone: editAddrPhone.value.trim()
    };
    syncUserChanges();
    renderDashboard();
    
    addressViewState.classList.remove('hidden');
    addressEditForm.classList.add('hidden');
    showToast("Shipping address updated");
  });

  passwordChangeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const oldPass = secOldPass.value;
    const newPass = secNewPass.value;
    const confirm = secConfirmPass.value;
    
    if (oldPass !== currentUser.password) {
      showToast("Current password is incorrect");
      return;
    }
    if (newPass !== confirm) {
      showToast("Passwords do not match");
      return;
    }
    currentUser.password = newPass;
    syncUserChanges();
    passwordChangeForm.reset();
    showToast("Password updated successfully");
  });

  // Nav Wishlist click trigger (goes to dashboard wishlist tab if logged in, else login page)
  navWishlistBtn.addEventListener('click', () => {
    if (!currentUser) {
      switchView('login');
    } else {
      switchView('dashboard');
      const wishTabBtn = document.querySelector('.dash-tab-btn[data-tab="wishlist"]');
      if (wishTabBtn) wishTabBtn.click();
    }
  });
};

const profileMenuContainer = document.getElementById('profile-menu-container');

// Initialization
const init = async () => {
  document.body.style.overflow = 'hidden';
  resizeCanvas();
  
  // Seed Database & Session
  initLocalDatabase();
  const session = sessionStorage.getItem('pallu_session');
  if (session) {
    currentUser = JSON.parse(session);
    updateAuthUI();
  }
  
  // Preloader skeletons grid
  productGrid.innerHTML = `
    <div class="skeleton-card p-md border border-outline-variant/10 rounded">
      <div class="aspect-square bg-surface-variant/20 rounded animate-pulse mb-md"></div>
      <div class="h-4 bg-surface-variant/20 rounded animate-pulse w-3/4 mb-sm"></div>
      <div class="h-3 bg-surface-variant/20 rounded animate-pulse w-1/4 mb-md"></div>
      <div class="h-8 bg-surface-variant/20 rounded animate-pulse w-full"></div>
    </div>
    <div class="skeleton-card p-md border border-outline-variant/10 rounded">
      <div class="aspect-square bg-surface-variant/20 rounded animate-pulse mb-md"></div>
      <div class="h-4 bg-surface-variant/20 rounded animate-pulse w-3/4 mb-sm"></div>
      <div class="h-3 bg-surface-variant/20 rounded animate-pulse w-1/4 mb-md"></div>
      <div class="h-8 bg-surface-variant/20 rounded animate-pulse w-full"></div>
    </div>
    <div class="skeleton-card p-md border border-outline-variant/10 rounded">
      <div class="aspect-square bg-surface-variant/20 rounded animate-pulse mb-md"></div>
      <div class="h-4 bg-surface-variant/20 rounded animate-pulse w-3/4 mb-sm"></div>
      <div class="h-3 bg-surface-variant/20 rounded animate-pulse w-1/4 mb-md"></div>
      <div class="h-8 bg-surface-variant/20 rounded animate-pulse w-full"></div>
    </div>
  `;

  // Bind Listeners
  bindEvents();
  setupDashboardTabs();
  setupRouter();

  // Load and fade preloader
  await preloadImages();
  document.body.classList.add('canvas-loaded');

  setTimeout(() => {
    renderProducts();
    initScrollReveal();
  }, 600);

  resizeCanvas();
  requestAnimationFrame(tick);
};

init();
