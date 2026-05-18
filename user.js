// User State Management
const STATE = {
    currentUser: null,
    cart: [],
    history: []
};

// Initialize State from LocalStorage
function initUser() {
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
        STATE.currentUser = JSON.parse(userStr);
        loadUserData();
    }
    updateNavUI();
}

function loadUserData() {
    if (!STATE.currentUser) return;
    const usersStr = localStorage.getItem('usersDB');
    if (usersStr) {
        const users = JSON.parse(usersStr);
        const user = users.find(u => u.username === STATE.currentUser.username);
        if (user) {
            STATE.cart = user.cart || [];
            STATE.history = user.history || [];
        }
    }
}

function saveUserData() {
    if (!STATE.currentUser) return;
    const usersStr = localStorage.getItem('usersDB') || '[]';
    let users = JSON.parse(usersStr);
    
    const index = users.findIndex(u => u.username === STATE.currentUser.username);
    if (index !== -1) {
        users[index].cart = STATE.cart;
        users[index].history = STATE.history;
    }
    
    localStorage.setItem('usersDB', JSON.stringify(users));
    updateNavUI();
}

// Add top nav to document if it doesn't exist
function injectNavbar() {
    if (document.getElementById('topNavbar')) return;
    
    const nav = document.createElement('nav');
    nav.id = 'topNavbar';
    nav.className = 'top-navbar';
    nav.innerHTML = `
        <div id="navAuthSection"></div>
        <a href="cart.html" class="nav-link">
            🛒 Giỏ hàng <span class="badge" id="cartBadge">0</span>
        </a>
        <a href="history.html" class="nav-link" id="navHistory" style="display: none;">
            📜 Lịch sử mua hàng
        </a>
    `;
    
    const detailContainer = document.querySelector('.detail-container');
    if (detailContainer) {
        detailContainer.insertBefore(nav, detailContainer.firstChild);
    } else {
        document.body.insertBefore(nav, document.body.firstChild);
    }
}

function updateNavUI() {
    const authSection = document.getElementById('navAuthSection');
    const historyLink = document.getElementById('navHistory');
    const cartBadge = document.getElementById('cartBadge');
    
    if (!authSection || !historyLink || !cartBadge) return;
    
    if (STATE.currentUser) {
        authSection.innerHTML = `
            <span class="nav-link">👤 Xin chào, ${STATE.currentUser.username}</span>
            <a href="#" class="nav-link" onclick="logoutUser(event)">Đăng xuất</a>
        `;
        historyLink.style.display = 'flex';
    } else {
        authSection.innerHTML = `
            <a href="account.html" class="nav-link">🔑 Đăng nhập / Đăng ký</a>
        `;
        historyLink.style.display = 'none';
    }
    
    // Update cart count
    const cartCount = STATE.cart.reduce((total, item) => total + item.quantity, 0);
    cartBadge.textContent = cartCount;
    if (cartCount > 0) {
        cartBadge.classList.add('show');
    } else {
        cartBadge.classList.remove('show');
    }
}

function logoutUser(e) {
    if (e) e.preventDefault();
    STATE.currentUser = null;
    STATE.cart = [];
    STATE.history = [];
    localStorage.removeItem('currentUser');
    window.location.reload();
}

// Add to Cart Logic
function addToCart(item, quantity = 1) {
    if (!STATE.currentUser) {
        alert("Vui lòng đăng nhập để thêm vào giỏ hàng.");
        window.location.href = "account.html";
        return;
    }
    
    const existingItemIndex = STATE.cart.findIndex(i => i.name === item.name);
    if (existingItemIndex !== -1) {
        STATE.cart[existingItemIndex].quantity += quantity;
    } else {
        STATE.cart.push({ ...item, quantity });
    }
    
    saveUserData();
    alert("Đã thêm vào giỏ hàng!");
}

function buyNow(item) {
    if (!STATE.currentUser) {
        alert("Vui lòng đăng nhập để mua hàng.");
        window.location.href = "account.html";
        return;
    }
    addToCart(item, 1);
    window.location.href = "cart.html";
}

// Ensure init is called
document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    initUser();
});
