
const regionData = {
    "trung-du-mien-nui-bac": {
        id: "trung-du-mien-nui-bac",
        name: "Trung du và Miền núi phía Bắc",
        image_url: "https://images.unsplash.com/photo-1559592413-7ce4f0a048ac?q=80&w=1000&auto=format&fit=crop",
        cities: ["Lào Cai", "Yên Bái", "Tuyên Quang", "Cao Bằng", "Hà Giang", "Lai Châu", "Điện Biên"],
        location: "Phía Tây Bắc của Việt Nam, sát biên giới với Lào và Trung Quốc",
        geography: "Địa hình núi non hùng vĩ, cao nhất là Phan Xi Păng (3,143m). Ít bằng phẳng, có hệ thống sông suối dốc, mưa nhiều, khí hậu mát mẻ, độ cao từ 600-2000m",
        people: "Nơi sinh sống của 33 dân tộc thiểu số (Mông, Tày, Nùng, Hà Nhì, Lô Lô, Phát Ứ, v.v.) với đông dân số Kinh. Con người năng động, hiếu khách, chịu khó",
        economy: "Nông nghiệp (trồng lúa, bắp, chè, thuốc lá), lâm nghiệp, chăn nuôi, khoáng sản (thiếc, vũng). Du lịch trekking, du lịch sinh thái phát triển",
        culture: "Múa xòe, thổ cẩm, lợn cắp nách, cơm lam, khèn Mông, hát Then, Thắng cố, sắc phục sặc sỡ của các dân tộc"
    },
    "dong-bang-song-hong": {
        id: "dong-bang-song-hong",
        name: "Đông bằng sông Hồng",
        image_url: "https://images.unsplash.com/photo-1555921015-5532091f6026?q=80&w=1000&auto=format&fit=crop",
        cities: ["Hà Nội", "Hải Phòng", "Hải Dương", "Hưng Yên", "Bắc Ninh", "Quảng Ninh"],
        location: "Phía Đông Bắc của Việt Nam, nơi Sông Hồng chảy qua",
        geography: "Địa hình bằng phẳng, là đồng bằng lúa nước phì nhiêu, ít cao, có sông Hồng chảy qua. Đáy là bùn phù sa, mưa tập trung mùa Hè, khí hậu ấm áp, ẩm độ cao",
        people: "Đông dân số Kinh, cử cư định, lao động chặt chẽ, kỹ năng nông nghiệp cao. Con người tình cảm, đậm đà, yêu thương gia đình",
        economy: "Lúa nước (3-4 vụ/năm), nuôi trồng thủy sản, công nghiệp (dệu may, hoá chất, cơ khí), dịch vụ, thương mại. Hà Nội là kinh đô, là trung tâm chính trị-kinh tế",
        culture: "Phở Hà Nội, bún chả, cốm làng Vòng, trà sen, làng nghề truyền thống (Bát Tràng, Sơn Đông), rối nước, chèo, tuồng, dân ca Quan họ"
    },
    "bac-trung-bo-duyen-hai": {
        id: "bac-trung-bo-duyen-hai",
        name: "Bắc Trung Bộ và Duyên hải miền Trung",
        image_url: "https://images.unsplash.com/photo-1542651052-bd5a77f9c00b?q=80&w=1000&auto=format&fit=crop",
        cities: ["Thanh Hóa", "Nghệ An", "Hà Tĩnh", "Quảng Bình", "Quảng Trị", "Thừa Thiên-Huế", "Đà Nẵng"],
        location: "Ở giữa Việt Nam, dãy trường Sơn từ Tây sang Đông, ven biển Đông",
        geography: "Phía Tây là dãy Trường Sơn cao 1000-2000m, phía Đông là đồng bằng ven biển hẹp, ít bằng phẳng. Biển dài, nhiều cảng tự nhiên tốt. Khí hậu tropical, mưa nhiều",
        people: "Tập trung dân tộc Kinh, có ít người Thái. Con người mạnh mẽ, lạc quan, yêu thương tự do, mến khách, dân dã",
        economy: "Nông nghiệp (lúa, muối, thủy sản), lâm nghiệp, chế biến thực phẩm, du lịch (Huế - cố đô, Hôi An - phố cổ, Phong Nha - Kẻ Bàng). Thương mại biển phát triển",
        culture: "Bánh hoai, mực rim nướng, bánh chưng ngũ quốc, hương quế, gốm Bát Tràng, nhạc Huế, Hát ru Thanh Hóa, phủ kỳ kiến trúc cố đô"
    },
    "tay-nguyen": {
        id: "tay-nguyen",
        name: "Tây Nguyên",
        image_url: "https://images.unsplash.com/photo-1625404169206-8d1e389d4dc5?q=80&w=1000&auto=format&fit=crop",
        cities: ["Kon Tum", "Gia Lai", "Đắk Lắk", "Đắk Nông", "Lâm Đồng"],
        location: "Vùng cao nguyên ở Trung Bộ, dãy Trường Sơn phía Nam",
        geography: "Cao nguyên đất đỏ bazan cao 600-1000m, địa hình lươn sóng, rừng thưa, khí hậu mát mẻ. Có sông Sê Rêpôk, sông Ba chảy qua. Đất màu mỡ, phù hợp trồng cà phê",
        people: "Nơi sinh sống của các dân tộc Tây Nguyên (Êđê, Giarai, Bana, Jarai, Sedang, v.v.) chiếm đa số, cùng dân tộc Kinh. Con người mạnh dạn, hiếu khách, lao động chặt chẽ",
        economy: "Cà phê (cung cấp 90% cà phê Việt), cao su, lâm nghiệp, nông nghiệp (ngô, khoai, lúa mì). Du lịch sinh thái, khách sạn núi phát triển. Công nghiệp chế biến",
        culture: "Cà phê Tây Nguyên ngon, rượu cần, gà nướng bản Đôn, thịt rừng gác bếp, cơm lam, Cồng chiêng Tây Nguyên (di sản UNESCO), múa Êđê, Giarai, lễ hội mùa gặt"
    },
    "dong-nam-bo": {
        id: "dong-nam-bo",
        name: "Đông Nam Bộ",
        image_url: "https://images.unsplash.com/photo-1548868783-09988cfa4e97?q=80&w=1000&auto=format&fit=crop",
        cities: ["Hồ Chí Minh", "Bình Dương", "Đồng Nai", "Bà Rịa-Vũng Tàu", "Long An", "Tiền Giang", "Bến Tre"],
        location: "Phía Đông Nam của Việt Nam, ven Vịnh Thái Lan, là cổng ra Biển Đông",
        geography: "Đồng bằng bằng phẳng, có đề cao chỗ, ít sông suối lớn. Sông Sài Gòn, Đồng Nai chảy qua. Đất đỏ bazan, đất cát. Khí hậu tropical, mưa hè nhiều, nóng ẩm",
        people: "Đông dân tộc Kinh, hòa lẫn với dân tộc hoa kiều, cham, khmer. Con người năng động, tham vọng, yêu kinh doanh, thích mạo hiểm, hiếu khách",
        economy: "Kinh tế năng động nhất cả nước. Công nghiệp (dệu may, hoá chất, điện tử, cơ khí), thương mại, dịch vụ, tài chính, bất động sản, du lịch. Hồ Chí Minh là trung tâm kinh tế",
        culture: "Bánh mì Sài Gòn, cơm tấm, canh chua, chè ba màu, bánh bao, ẩm thực phong phú từ nhiều dân tộc, chợ Bến Thành, phố cổ Sài Gòn, văn hóa đa sắc tộc"
    },
    "dong-bang-song-cuu-long": {
        id: "dong-bang-song-cuu-long",
        name: "Đồng bằng sông Cửu Long",
        image_url: "https://images.unsplash.com/photo-1583417657208-de0c96eb8e62?q=80&w=1000&auto=format&fit=crop",
        cities: ["Cần Thơ", "Kiên Giang", "An Giang", "Cà Mau", "Bạc Liêu", "Sóc Trăng", "Hậu Giang", "Trà Vinh"],
        location: "Phía Tây Nam của Việt Nam, vùng đồng bằng sông Mekong (Cửu Long)",
        geography: "Đồng bằng phù sa thấp, nhiều sông nhánh, kênh rạch chằng chịt, nước ngập một phần năm. Đất màu mỡ, cây cối um tùm, nhiều cây ăn trái. Khí hậu tropical, mưa hè",
        people: "Dân tộc Kinh cùng các dân tộc thiểu số (Khmer, Hoa, Cham). Con người lạc quan, hào sảng, hiền hòa, yêu nước, đoàn kết, thích ghe xuồng",
        economy: "Nông nghiệp (lúa 3 vụ/năm, cây ăn trái, thủy sản). Chợ nổi Cần Thơ nổi tiếng. Công nghiệp chế biến gạo, tôm, cá. Du lịch sông nước, chợ nổi. Lâm nghiệp (rừng ngập mặn)",
        culture: "Lẩu mắm, bánh xèo, hủ tiếu Nam Vang, cá kho, trái cây miệt vườn (nhãn, xoài, dừa, dưa hấu), Đờn ca tài tử, chơi nước, chợ nổi Cần Thơ, chùa Bằng"
    }
};


const hotspots = document.querySelectorAll('.hotspot');
const infoPanel = document.getElementById('infoPanel');
const closeBtn = document.getElementById('closeBtn');
const exploreBtn = document.getElementById('exploreBtn');

// Các elements bên trong Panel cần cập nhật dữ liệu
const elImage = document.getElementById('regionImage');
const elName = document.getElementById('regionName');
const elCities = document.getElementById('regionCities');
const elLocation = document.getElementById('regionLocation');
const elGeography = document.getElementById('regionGeography');
const elPeople = document.getElementById('regionPeople');
const elEconomy = document.getElementById('regionEconomy');
const elCulture = document.getElementById('regionCulture');

let currentRegionId = null;
const regionDetailPages = {
    "trung-du-mien-nui-bac": "detail-trung-du-mien-nui-bac.html",
    "dong-bang-song-hong": "detail-dong-bang-song-hong.html",
    "bac-trung-bo-duyen-hai": "detail-bac-trung-bo-duyen-hai.html",
    "tay-nguyen": "detail-tay-nguyen.html",
    "dong-nam-bo": "detail-dong-nam-bo.html",
    "dong-bang-song-cuu-long": "detail-dong-bang-song-cuu-long.html"
};

function closeInfoPanel() {
    if (!infoPanel) return;
    infoPanel.classList.remove('open');
    hotspots.forEach(hotspot => hotspot.classList.remove('active'));
}

function showRegionInfo(regionId) {
    const data = regionData[regionId];
    if (!data) {
        console.warn(`Chưa có dữ liệu cho vùng: ${regionId}`);
        return;
    }

    if (!infoPanel || !elImage || !elName || !elCities || !elLocation || !elGeography || !elPeople || !elEconomy || !elCulture) {
        return;
    }

    currentRegionId = regionId;
    hotspots.forEach(hotspot => hotspot.classList.remove('active'));

    const activeRegion = document.getElementById(regionId);
    if (activeRegion) activeRegion.classList.add('active');

    elName.textContent = data.name;
    elImage.src = data.image_url;
    elImage.alt = `Phong cảnh đặc trưng của ${data.name}`;
    elCities.textContent = data.cities.join(", ");
    elLocation.textContent = data.location;
    elGeography.textContent = data.geography;
    elPeople.textContent = data.people;
    elEconomy.textContent = data.economy;
    elCulture.textContent = data.culture;

    infoPanel.classList.add('open');
}

if (hotspots.length && infoPanel && closeBtn && exploreBtn) {
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function() {
            showRegionInfo(this.id);
        });
    });

    closeBtn.addEventListener('click', closeInfoPanel);

    exploreBtn.addEventListener('click', () => {
        if (!currentRegionId) return;
        localStorage.setItem('selectedRegionId', currentRegionId);
        window.location.href = regionDetailPages[currentRegionId] || `detail.html?region=${currentRegionId}`;
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && infoPanel.classList.contains('open')) {
            closeInfoPanel();
        }
    });

    document.addEventListener('click', (e) => {
        if (!infoPanel.contains(e.target) && !e.target.closest('.map-wrapper')) {
            closeInfoPanel();
        }
    });
}

// Make regionData available globally for detail.js
window.regionData = regionData;
