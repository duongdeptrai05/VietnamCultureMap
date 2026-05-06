// Dữ liệu vùng kinh tế (được copy từ script.js để độc lập)
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

// Dữ liệu chi tiết cho các thành phố
const cityDetailsData = {
    "Lào Cai": {
        description: "Lào Cai là tỉnh biên giới phía Tây Bắc, nổi tiếng với Phan Xi Păng - nóc nhà Đông Dương, núi Fansipan cao 3,143m. Là cửa ngõ giao thương với Trung Quốc, Lào Cai là điểm khởi đầu của con đường tơ lụa cũ. Thành phố Lào Cai là trung tâm hành chính, kinh tế của tỉnh.",
        fashion: [
            { name: "Thổ cẩm Mông", price: "500.000 - 2.000.000 đ", description: "Vải thổ cẩm truyền thống của dân tộc Mông" },
            { name: "Áo dài Mông", price: "800.000 - 3.000.000 đ", description: "Áo dài truyền thống với họa tiết độc đáo" },
            { name: "Quần ngắn Tày", price: "300.000 - 1.000.000 đ", description: "Quần truyền thống của dân tộc Tày" }
        ],
        food: [
            { name: "Cơm lam Mông", price: "50.000 - 150.000 đ", description: "Cơm nếp nấu trong ống tre" },
            { name: "Lợn cắp nách", price: "150.000 - 500.000 đ", description: "Lợn rừng nướng trên bếp lửa truyền thống" },
            { name: "Thịt trâu gác bếp", price: "200.000 - 600.000 đ", description: "Thịt trâu khô hun khói" }
        ],
        souvenirs: [
            { name: "Khèn Mông", price: "1.000.000 - 5.000.000 đ", description: "Nhạc cụ truyền thống của dân tộc Mông" },
            { name: "Thêu Mông", price: "200.000 - 1.000.000 đ", description: "Sản phẩm thêu tay truyền thống" },
            { name: "Gốm Lào Cai", price: "100.000 - 500.000 đ", description: "Gốm sứ thủ công địa phương" }
        ],
        tours: [
            { name: "Tour Fansipan - 2 ngày 1 đêm", price: "1.500.000 đ/người", description: "Chinh phục nóc nhà Đông Dương, tham quan Mộc Châu" },
            { name: "Tour Cấp Cao - 1 ngày", price: "500.000 đ/người", description: "Tham quan bản làng, trải nghiệm cuộc sống dân tộc" },
            { name: "Tour Chợ Đêm Lào Cai - nửa ngày", price: "300.000 đ/người", description: "Khám phá chợ đêm, ẩm thực địa phương" }
        ]
    },
    "Yên Bái": {
        description: "Yên Bái là tỉnh miền núi phía Tây Bắc, nằm trên những con sông Thao và Chảy. Tỉnh có cảnh sắc thiên nhiên hùng vĩ, đông đảo dân tộc thiểu số. Thị xã Yên Bái là trung tâm hành chính của tỉnh.",
        fashion: [
            { name: "Áo dài dân tộc Thái Đen", price: "600.000 - 2.000.000 đ", description: "Áo dài truyền thống của dân tộc Thái Đen" },
            { name: "Thổ cẩm Thái", price: "500.000 - 1.500.000 đ", description: "Vải thổ cẩm với họa tiết sặc sỡ" }
        ],
        food: [
            { name: "Cơm lam", price: "50.000 - 150.000 đ", description: "Cơm nếp nấu trong ống tre" },
            { name: "Cá hấp lá chuối", price: "100.000 - 300.000 đ", description: "Cá hấp với hương lá chuối thơm ngon" },
            { name: "Vịt quay nước mắm", price: "150.000 - 400.000 đ", description: "Vịt quay cay nồng" }
        ],
        souvenirs: [
            { name: "Tây Bắc Du Lịch", price: "100.000 - 500.000 đ", description: "Các sản phẩm lưu niệm du lịch" }
        ],
        tours: [
            { name: "Tour Thác Phong Châu - 1 ngày", price: "600.000 đ/người", description: "Tham quan thác nước đẹp nhất Yên Bái" },
            { name: "Tour Vựa Đào Yên Bái - 1 ngày", price: "500.000 đ/người", description: "Khám phá vườn đào đẹp mùa xuân" }
        ]
    },
    "Hà Nội": {
        description: "Hà Nội - thủ đô của Việt Nam, thành phố lịch sử hàng ngàn năm. Là tâm điểm chính trị, kinh tế, văn hóa của đất nước. Hà Nội nổi tiếng với Hồ Tây, Phố Cổ, văn hóa trà chiều, ẩm thực đa dạng.",
        fashion: [
            { name: "Áo dài Việt cổ điển", price: "500.000 - 3.000.000 đ", description: "Áo dài truyền thống Hà Nội" },
            { name: "Khăn Hà Nội", price: "50.000 - 200.000 đ", description: "Khăn lụa truyền thống Hà Nội" }
        ],
        food: [
            { name: "Phở Hà Nội", price: "50.000 - 150.000 đ/tô", description: "Phở bò Hà Nội nổi tiếng" },
            { name: "Bún chả Hà Nội", price: "40.000 - 120.000 đ", description: "Bún chả với thịt nướng than" },
            { name: "Cốm làng Vòng", price: "100.000 - 500.000 đ/hộp", description: "Cốm xanh thơm ngon của Hà Nội" }
        ],
        souvenirs: [
            { name: "Gốm Bát Tràng", price: "100.000 - 1.000.000 đ", description: "Gốm sứ truyền thống Bát Tràng" },
            { name: "Tranh Dông Hồ", price: "50.000 - 500.000 đ", description: "Tranh phủ sắc của làng Dông Hồ" },
            { name: "Trà sen Hà Nội", price: "200.000 - 1.000.000 đ/hộp", description: "Trà sen tươi thơm" }
        ],
        tours: [
            { name: "Tour Phố Cổ Hà Nội - nửa ngày", price: "400.000 đ/người", description: "Khám phá phố cổ và chợ Đêm Hàng Đồng" },
            { name: "Tour Hồ Tây - 1 ngày", price: "500.000 đ/người", description: "Tham quan Hồ Tây, chùa Trấn Quốc, đảo Gỗ" },
            { name: "Tour Hoàng Thành Thăng Long - 1 ngày", price: "600.000 đ/người", description: "Du lịch các di tích lịch sử Hoàng Thành" }
        ]
    },
    "Đà Nẵng": {
        description: "Đà Nẵng - thành phố cảng lớn phía Trung Bộ, là nơi giao thoa của văn hóa Việt, Pháp và Trung Quốc. Nổi tiếng với bãi biển đẹp, cầu Vàng, Bà Nà Hills, thánh địa Mỹ Sơn.",
        fashion: [
            { name: "Áo dài Đà Nẵng", price: "600.000 - 2.000.000 đ", description: "Áo dài với phong cách đương đại" },
            { name: "Vải tơ Hội An", price: "300.000 - 1.500.000 đ", description: "Vải cao cấp từ Hội An gần Đà Nẵng" }
        ],
        food: [
            { name: "Mỳ Quảng", price: "40.000 - 100.000 đ/bát", description: "Mỳ Quảng nổi tiếng của Đà Nẵng" },
            { name: "Bánh hoai", price: "30.000 - 80.000 đ/ổ", description: "Bánh hoai ngon nhất tại Hội An" },
            { name: "Cá nướng than", price: "100.000 - 300.000 đ", description: "Cá nướng than trên bãi biển" }
        ],
        souvenirs: [
            { name: "Gốm Bát Tràng Đà Nẵng", price: "100.000 - 500.000 đ", description: "Gốm sứ chất lượng cao" },
            { name: "Lụa Hội An", price: "200.000 - 1.000.000 đ", description: "Lụa tơ tằm Hội An" }
        ],
        tours: [
            { name: "Tour Bà Nà Hills - 1 ngày", price: "800.000 đ/người", description: "Tham quan Bà Nà Hills, cầu Vàng" },
            { name: "Tour Mỹ Sơn - 1 ngày", price: "600.000 đ/người", description: "Khám phá di tích Mỹ Sơn - di sản UNESCO" },
            { name: "Tour Biển Mỹ Khê - nửa ngày", price: "300.000 đ/người", description: "Thả mình trên bãi biển đẹp Mỹ Khê" }
        ]
    },
    "Hồ Chí Minh": {
        description: "Hồ Chí Minh - thành phố lớn nhất Việt Nam, trung tâm kinh tế sôi động. Nơi giao thoa của nhiều nền văn hóa, ẩm thực phong phú, du lịch sầm uất. Thành phố có tốc độ phát triển nhanh nhất.",
        fashion: [
            { name: "Áo dài hiện đại", price: "600.000 - 3.000.000 đ", description: "Áo dài với kiểu dáng hiện đại" },
            { name: "Thời trang Việt Nam", price: "200.000 - 1.000.000 đ", description: "Quần áo địa phương, công xưởng Sài Gòn" }
        ],
        food: [
            { name: "Bánh mì Sài Gòn", price: "20.000 - 60.000 đ", description: "Bánh mì thơm ngon nổi tiếng" },
            { name: "Cơm tấm", price: "30.000 - 80.000 đ", description: "Cơm tấm sườn nướng" },
            { name: "Canh chua cá", price: "50.000 - 150.000 đ", description: "Canh chua cá miền Nam" }
        ],
        souvenirs: [
            { name: "Sản phẩm mỹ nghệ", price: "100.000 - 1.000.000 đ", description: "Các sản phẩm thủ công mỹ nghệ Sài Gòn" },
            { name: "Cà phê Sài Gòn", price: "100.000 - 300.000 đ/gói", description: "Cà phê chất lượng cao" }
        ],
        tours: [
            { name: "Tour Chợ Bến Thành - nửa ngày", price: "400.000 đ/người", description: "Khám phá chợ Bến Thành lịch sử" },
            { name: "Tour Dinh Độc Lập - 1 ngày", price: "500.000 đ/người", description: "Tham quan di tích lịch sử Sài Gòn" },
            { name: "Tour Mekong - 1 ngày", price: "700.000 đ/người", description: "Tham quan sông Mekong, chợ nổi Cần Thơ" }
        ]
    },
    "Cần Thơ": {
        description: "Cần Thơ - thành phố lớn nhất Đồng bằng sông Cửu Long, được gọi là 'Venice của Đông Nam Á'. Nổi tiếng với chợ nổi Cái Răng, cây ăn trái, sông nước và con người hào sảng.",
        fashion: [
            { name: "Áo bà ba miền Tây", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống miền Tây" },
            { name: "Áo dài miền Tây", price: "500.000 - 2.000.000 đ", description: "Áo dài với màu sắc đặc trưng" }
        ],
        food: [
            { name: "Lẩu mắm Cần Thơ", price: "150.000 - 400.000 đ", description: "Lẩu mắm Cần Thơ nổi tiếng" },
            { name: "Bánh xèo", price: "30.000 - 80.000 đ", description: "Bánh xèo giòn rụm" },
            { name: "Hủ tiếu Nam Vang", price: "40.000 - 100.000 đ", description: "Hủ tiếu với nước lèo đậm đà" }
        ],
        souvenirs: [
            { name: "Quà tặng chợ nổi", price: "100.000 - 500.000 đ", description: "Sản phẩm du lịch từ chợ nổi" },
            { name: "Mật ong rừng U Minh", price: "200.000 - 800.000 đ/hộp", description: "Mật ong tự nhiên U Minh" }
        ],
        tours: [
            { name: "Tour Chợ Nổi Cái Răng - sáng sớm", price: "400.000 đ/người", description: "Khám phá chợ nổi nổi tiếng thế giới" },
            { name: "Tour Sông Mekong - 1 ngày", price: "600.000 đ/người", description: "Tham quan sông Mekong, vườn ăn trái" },
            { name: "Tour Tây Phương - 2 ngày 1 đêm", price: "1.200.000 đ/người", description: "Khám phá vùng sâu U Minh" }
        ]
    },
    // Trung du & Miền núi phía Bắc - Các thành phố khác
    "Tuyên Quang": {
        description: "Tuyên Quang là tỉnh vùng Tây Bắc, nằm giữa hai sông Lô và Chảy. Có cảnh sắc núi non hùng vĩ, là nơi sinh sống của các dân tộc thiểu số. Thị xã Tuyên Quang là trung tâm chính trị-kinh tế.",
        fashion: [
            { name: "Thổ cẩm Tày", price: "400.000 - 1.500.000 đ", description: "Vải thổ cẩm truyền thống dân tộc Tày" },
            { name: "Áo dài dân tộc", price: "600.000 - 2.000.000 đ", description: "Áo dài với họa tiết dân tộc độc đáo" }
        ],
        food: [
            { name: "Cơm lam Tù Mơ", price: "50.000 - 150.000 đ", description: "Cơm nếp nấu trong ống tre" },
            { name: "Cá Cân Đèn", price: "100.000 - 300.000 đ", description: "Cá đặc sản sông Chảy" },
            { name: "Mỳ Tuyên Quang", price: "40.000 - 120.000 đ", description: "Mỳ trứng tươi, mềm mại" }
        ],
        souvenirs: [
            { name: "Gốm Tuyên Quang", price: "100.000 - 500.000 đ", description: "Gốm thủ công truyền thống" },
            { name: "Sản phẩm thêu Tày", price: "200.000 - 800.000 đ", description: "Thêu tay dân tộc Tày" }
        ],
        tours: [
            { name: "Tour Thần Tích Hang Động - 1 ngày", price: "500.000 đ/người", description: "Khám phá các hang động tự nhiên" },
            { name: "Tour bản làng dân tộc - nửa ngày", price: "400.000 đ/người", description: "Tham quan đời sống dân tộc Tày, Dao" }
        ]
    },
    "Cao Bằng": {
        description: "Cao Bằng là tỉnh biên giới phía Bắc, nổi tiếng với thác Bản Giốc chia đôi Việt-Trung. Có nhiều di tích lịch sử cách mạng, cảnh sắc thiên nhiên hoang sơ. Thành phố Cao Bằng là trung tâm hành chính.",
        fashion: [
            { name: "Vải thổ cẩm Mông", price: "500.000 - 2.000.000 đ", description: "Vải thổ cẩm đặc trưng dân tộc Mông" },
            { name: "Áo dài Mông đen", price: "700.000 - 2.500.000 đ", description: "Áo dài Mông truyền thống" }
        ],
        food: [
            { name: "Cơm lam Cao Bằng", price: "50.000 - 150.000 đ", description: "Cơm nếp truyền thống" },
            { name: "Cá suối Bản Giốc", price: "150.000 - 400.000 đ", description: "Cá suối tươi sống" },
            { name: "Bánh dâu Cao Bằng", price: "100.000 - 300.000 đ", description: "Bánh chứa vị ngon đặc biệt" }
        ],
        souvenirs: [
            { name: "Khèn Mông", price: "1.000.000 - 4.000.000 đ", description: "Nhạc cụ truyền thống Mông" },
            { name: "Nước mắm cá Cao Bằng", price: "100.000 - 300.000 đ/chai", description: "Nước mắm chế biến từ cá suối" }
        ],
        tours: [
            { name: "Tour Thác Bản Giốc - 1 ngày", price: "600.000 đ/người", description: "Chinh phục thác nước đẹp nhất miền Bắc" },
            { name: "Tour Mã Phục - Hòa Mạc - 1 ngày", price: "550.000 đ/người", description: "Tham quan di tích lịch sử cách mạng" }
        ]
    },
    "Hà Giang": {
        description: "Hà Giang là tỉnh biên giới xa xôi nhất Việt Nam. Có địa hình núi non hùng vĩ, độ cao lên đến 2.400m. Nơi sinh sống của các dân tộc đa dạng (Mông, Tày, Dao, Zao...). Thành phố Hà Giang là trung tâm hành chính.",
        fashion: [
            { name: "Vải thổ cẩm Hà Giang", price: "400.000 - 1.500.000 đ", description: "Vải thổ cẩm đa dân tộc" },
            { name: "Trang phục Dao Đỏ", price: "800.000 - 3.000.000 đ", description: "Trang phục truyền thống Dao Đỏ" }
        ],
        food: [
            { name: "Cơm lam dân tộc", price: "50.000 - 150.000 đ", description: "Cơm nếp nấu trong ống tre" },
            { name: "Thịt dê nướng lá", price: "200.000 - 500.000 đ", description: "Thịt dê nướng với lá chuối" },
            { name: "Mật ong rừng Hà Giang", price: "200.000 - 600.000 đ/hộp", description: "Mật ong nguyên chất từ rừng" }
        ],
        souvenirs: [
            { name: "Thêu Dao Hà Giang", price: "300.000 - 1.000.000 đ", description: "Sản phẩm thêu tay Dao" },
            { name: "Lụa Hà Giang", price: "200.000 - 800.000 đ", description: "Lụa truyền thống Hà Giang" }
        ],
        tours: [
            { name: "Tour Đèo Tà Sía Quán Bạ - 1 ngày", price: "600.000 đ/người", description: "Khám phá đèo đẹp nhất Hà Giang" },
            { name: "Tour Đồng bằng Thất Khoan - 1 ngày", price: "550.000 đ/người", description: "Tham quan cảnh sắc núi non hùng vĩ" }
        ]
    },
    "Lai Châu": {
        description: "Lai Châu là tỉnh vùng Tây Bắc, nơi có sự giao thoa của hai sông Đà và Mã. Địa hình núi non cao hơn 2.000m. Là nơi sinh sống của các dân tộc thiểu số (Thái, Dao, Mông). Thị xã Lai Châu là trung tâm.",
        fashion: [
            { name: "Áo dài Thái Đen", price: "600.000 - 2.000.000 đ", description: "Áo dài truyền thống Thái Đen" },
            { name: "Vải thổ cẩm Thái", price: "400.000 - 1.500.000 đ", description: "Vải thổ cẩm với họa tiết Thái" }
        ],
        food: [
            { name: "Cơm lam Thái", price: "50.000 - 150.000 đ", description: "Cơm nếp truyền thống Thái" },
            { name: "Cá hấp lá chuối", price: "100.000 - 300.000 đ", description: "Cá hấp với hương thơm lá chuối" },
            { name: "Nước mắm cá Lai Châu", price: "80.000 - 250.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        souvenirs: [
            { name: "Gốm Lai Châu", price: "80.000 - 400.000 đ", description: "Gốm thủ công truyền thống" },
            { name: "Sản phẩm Thêu Thái", price: "200.000 - 800.000 đ", description: "Thêu tay dân tộc Thái" }
        ],
        tours: [
            { name: "Tour Phú Sài Pass - 1 ngày", price: "550.000 đ/người", description: "Khám phá đèo cao nhất miền Bắc" },
            { name: "Tour bản Thái Lai Châu - nửa ngày", price: "400.000 đ/người", description: "Tham quan đời sống dân tộc Thái" }
        ]
    },
    "Điện Biên": {
        description: "Điện Biên là tỉnh biên giới xa xôi phía Tây Bắc, nơi xảy ra chiến dịch lịch sử Điện Biên Phủ. Có cảnh sắc núi non hoang sơ, nơi sinh sống của dân tộc Thái. Thị xã Điện Biên Phủ là trung tâm.",
        fashion: [
            { name: "Áo dài Thái trắng", price: "600.000 - 2.000.000 đ", description: "Áo dài truyền thống Thái trắng" },
            { name: "Khăn Thái Điện Biên", price: "100.000 - 400.000 đ", description: "Khăn truyền thống Thái" }
        ],
        food: [
            { name: "Cơm lam Thái", price: "50.000 - 150.000 đ", description: "Cơm nếp nấu trong ống tre" },
            { name: "Cá Hàm Hàm Điện Biên", price: "150.000 - 400.000 đ", description: "Cá Hàm Hàm tươi sống từ sông Đà" },
            { name: "Thịt trâu gác bếp", price: "200.000 - 600.000 đ", description: "Thịt trâu hun khói truyền thống" }
        ],
        souvenirs: [
            { name: "Vải thổ cẩm Thái", price: "400.000 - 1.500.000 đ", description: "Vải thổ cẩm Thái Điện Biên" },
            { name: "Sản phẩm lâm sản", price: "100.000 - 500.000 đ", description: "Lâm sản đặc sản Điện Biên" }
        ],
        tours: [
            { name: "Tour Di Tích Điện Biên Phủ - 1 ngày", price: "600.000 đ/người", description: "Tham quan di tích lịch sử nổi tiếng" },
            { name: "Tour Sơn La - Mộc Châu - 2 ngày", price: "1.100.000 đ/người", description: "Khám phá 2 tỉnh vùng Tây Bắc" }
        ]
    },
    // Đông bằng sông Hồng - Các thành phố khác
    "Hải Phòng": {
        description: "Hải Phòng là thành phố cảng lớn thứ hai Việt Nam, là cửa ngõ lên Trung Quốc. Có bãi biển đẹp, các di tích lịch sử, ẩm thực đặc sắc. Thành phố phát triển về kinh tế và du lịch.",
        fashion: [
            { name: "Áo dài Hải Phòng", price: "500.000 - 2.500.000 đ", description: "Áo dài với phong cách Hải Phòng" },
            { name: "Vải lụa Hải Phòng", price: "200.000 - 1.000.000 đ", description: "Lụa cao cấp từ Hải Phòng" }
        ],
        food: [
            { name: "Cơm cháy Hải Phòng", price: "30.000 - 80.000 đ", description: "Cơm cháy Hải Phòng thơm ngon" },
            { name: "Cua Cà Mau", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" },
            { name: "Bánh Hàng Kênh", price: "50.000 - 150.000 đ", description: "Bánh nước truyền thống Hải Phòng" }
        ],
        souvenirs: [
            { name: "Sâm Ngọc Linh", price: "500.000 - 2.000.000 đ/cây", description: "Sâm quý hiếm" },
            { name: "Mắm tôm Hải Phòng", price: "100.000 - 300.000 đ/chai", description: "Mắm tôm chất lượng cao" }
        ],
        tours: [
            { name: "Tour Quảng Ninh Hạ Long - 2 ngày", price: "1.200.000 đ/người", description: "Du lịch kết hợp Hải Phòng - Hạ Long" },
            { name: "Tour bãi biển Cát Bà - 1 ngày", price: "700.000 đ/người", description: "Khám phá đảo Cát Bà đẹp lãng mạn" }
        ]
    },
    "Hải Dương": {
        description: "Hải Dương là tỉnh đông bằng sông Hồng, nơi giao thoa kinh tế nông nghiệp với công nghiệp. Nổi tiếng về trồng cam, quế, và các làng nghề truyền thống. Thành phố Hải Dương là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Hải Dương", price: "500.000 - 2.000.000 đ", description: "Áo dài với phong cách truyền thống" },
            { name: "Khăn lụa Hải Dương", price: "100.000 - 400.000 đ", description: "Khăn lụa cao cấp" }
        ],
        food: [
            { name: "Cam Hưng Yên", price: "80.000 - 200.000 đ/kg", description: "Cam chín vàng, ngọt thơm" },
            { name: "Bánh chưng Hải Dương", price: "100.000 - 300.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Quế Hải Dương", price: "100.000 - 500.000 đ/gói", description: "Quế thơm ngon" }
        ],
        souvenirs: [
            { name: "Gốm Bát Tràng", price: "80.000 - 500.000 đ", description: "Gốm thủ công truyền thống" },
            { name: "Sản phẩm từ quế", price: "100.000 - 400.000 đ", description: "Các sản phẩm từ quế Hải Dương" }
        ],
        tours: [
            { name: "Tour làng quế Hương Sơn - nửa ngày", price: "400.000 đ/người", description: "Khám phá làng quế truyền thống" },
            { name: "Tour Kiến An - Kim Sơn - 1 ngày", price: "550.000 đ/người", description: "Tham quan các làng nghề Hải Dương" }
        ]
    },
    "Hưng Yên": {
        description: "Hưng Yên là tỉnh đông bằng sông Hồng, nơi sản xuất lúa và thủy sản. Nổi tiếng về cam Hưng Yên ngon lành, và các làng nghề truyền thống. Thành phố Hưng Yên là trung tâm.",
        fashion: [
            { name: "Áo dài Hưng Yên", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống Hưng Yên" },
            { name: "Vải thổ cẩm Hưng Yên", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm truyền thống" }
        ],
        food: [
            { name: "Cam Hưng Yên", price: "80.000 - 200.000 đ/kg", description: "Cam chín vàng, ngọt mềm" },
            { name: "Tôm Hưng Yên", price: "150.000 - 400.000 đ", description: "Tôm sông tươi ngon" },
            { name: "Bánh Mứt Hưng Yên", price: "100.000 - 300.000 đ", description: "Bánh mứt truyền thống" }
        ],
        souvenirs: [
            { name: "Cam sấy Hưng Yên", price: "150.000 - 400.000 đ/gói", description: "Cam sấy để dành" },
            { name: "Gốm Phù Lạng", price: "100.000 - 500.000 đ", description: "Gốm thủ công truyền thống" }
        ],
        tours: [
            { name: "Tour vườn cam Hưng Yên - nửa ngày", price: "400.000 đ/người", description: "Tham quan vườn cam, hái cam" },
            { name: "Tour Phố Hién - Cổ tích - 1 ngày", price: "550.000 đ/người", description: "Khám phá di tích lịch sử" }
        ]
    },
    "Bắc Ninh": {
        description: "Bắc Ninh là tỉnh đông bằng sông Hồng, nơi tập trung nhiều làng nghề truyền thống (gốm Bát Tràng, tranh Dông Hồ). Nổi tiếng về các sản phẩm thủ công mỹ nghệ. Thành phố Bắc Ninh là trung tâm.",
        fashion: [
            { name: "Áo dài Bắc Ninh", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống Bắc Ninh" },
            { name: "Khăn Bắc Ninh", price: "100.000 - 400.000 đ", description: "Khăn lụa cao cấp" }
        ],
        food: [
            { name: "Bánh Chưng Bắc Ninh", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Cơm nắm Bắc Ninh", price: "40.000 - 100.000 đ", description: "Cơm nắm truyền thống" },
            { name: "Mứt Bắc Ninh", price: "100.000 - 300.000 đ/hộp", description: "Mứt trái cây nhân tạo" }
        ],
        souvenirs: [
            { name: "Gốm Bát Tràng", price: "80.000 - 500.000 đ", description: "Gốm thủ công nổi tiếng" },
            { name: "Tranh Dông Hồ", price: "50.000 - 400.000 đ", description: "Tranh phủ sắc truyền thống" }
        ],
        tours: [
            { name: "Tour làng gốm Bát Tràng - nửa ngày", price: "400.000 đ/người", description: "Tham quan làng gốm nổi tiếng" },
            { name: "Tour chùa Bái Đính - 1 ngày", price: "600.000 đ/người", description: "Tham quan chùa Bái Đính tuyệt đẹp" }
        ]
    },
    "Quảng Ninh": {
        description: "Quảng Ninh là tỉnh biển của vùng Đông bằng sông Hồng, nổi tiếng với Vịnh Hạ Long (Di sản UNESCO). Nơi sản xuất than, du lịch phát triển. Thành phố Hạ Long là trung tâm du lịch.",
        fashion: [
            { name: "Áo dài Quảng Ninh", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống" },
            { name: "Vải lụa Quảng Ninh", price: "200.000 - 1.000.000 đ", description: "Lụa cao cấp" }
        ],
        food: [
            { name: "Cua Hạ Long", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" },
            { name: "Mục Quảng Ninh", price: "200.000 - 500.000 đ", description: "Mục (mực nhỏ) tươi ngon" },
            { name: "Bánh khọc Hạ Long", price: "30.000 - 80.000 đ", description: "Bánh khọc truyền thống" }
        ],
        souvenirs: [
            { name: "Sản phẩm biển Hạ Long", price: "100.000 - 500.000 đ", description: "Các sản phẩm lưu niệm du lịch" },
            { name: "Mắm tôm Quảng Ninh", price: "100.000 - 300.000 đ/chai", description: "Mắm tôm chất lượng cao" }
        ],
        tours: [
            { name: "Tour Vịnh Hạ Long 1 ngày", price: "900.000 đ/người", description: "Khám phá Vịnh Hạ Long nổi tiếng UNESCO" },
            { name: "Tour Cát Bà - Hạ Long 2 ngày", price: "1.500.000 đ/người", description: "Du lịch kết hợp Cát Bà và Hạ Long" }
        ]
    },
    // Bắc Trung Bộ & Duyên hải miền Trung - Các thành phố khác
    "Thanh Hóa": {
        description: "Thanh Hóa là tỉnh lớn vùng Bắc Trung Bộ, nơi sản xuất lúa, muối và thủy sản. Nổi tiếng về các làng nghề truyền thống (gốm Sa Rạ, muối Nghĩa Hưng). Thành phố Thanh Hóa là trung tâm.",
        fashion: [
            { name: "Áo dài Thanh Hóa", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống" },
            { name: "Khăn Thanh Hóa", price: "100.000 - 400.000 đ", description: "Khăn lụa truyền thống" }
        ],
        food: [
            { name: "Bánh cuốn Thanh Hóa", price: "30.000 - 80.000 đ", description: "Bánh cuốn tươi thơm" },
            { name: "Tôm muối Thanh Hóa", price: "150.000 - 400.000 đ", description: "Tôm muối đặc sản" },
            { name: "Gạo Thanh Hóa", price: "80.000 - 200.000 đ/kg", description: "Gạo chất lượng cao" }
        ],
        souvenirs: [
            { name: "Gốm Sa Rạ", price: "100.000 - 500.000 đ", description: "Gốm thủ công truyền thống" },
            { name: "Muối Nghĩa Hưng", price: "80.000 - 200.000 đ/kg", description: "Muối trắng chất lượng cao" }
        ],
        tours: [
            { name: "Tour Tuyệt vời Huyền - 1 ngày", price: "550.000 đ/người", description: "Tham quan các điểm du lịch Thanh Hóa" },
            { name: "Tour làng gốm Sa Rạ - nửa ngày", price: "400.000 đ/người", description: "Khám phá làng gốm truyền thống" }
        ]
    },
    "Nghệ An": {
        description: "Nghệ An là tỉnh lớn vùng Bắc Trung Bộ, nơi sản xuất lúa, cá. Nổi tiếng về cảnh sắc thiên nhiên, các di tích lịch sử cách mạng. Thành phố Vinh là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Nghệ An", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống" },
            { name: "Vải Nghệ An", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm truyền thống" }
        ],
        food: [
            { name: "Bánh chưng Nghệ An", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Cá Nghệ An", price: "150.000 - 400.000 đ", description: "Cá sông Cửa Lò tươi ngon" },
            { name: "Gạo Nghệ An", price: "80.000 - 200.000 đ/kg", description: "Gạo chất lượng cao" }
        ],
        souvenirs: [
            { name: "Sản phẩm lâm sản", price: "100.000 - 500.000 đ", description: "Lâm sản đặc sản Nghệ An" },
            { name: "Mật ong rừng", price: "200.000 - 600.000 đ/hộp", description: "Mật ong nguyên chất" }
        ],
        tours: [
            { name: "Tour Cửa Lò - 1 ngày", price: "550.000 đ/người", description: "Tham quan bãi biển Cửa Lò đẹp" },
            { name: "Tour Quế Phong - Kỳ Sơn - 1 ngày", price: "600.000 đ/người", description: "Khám phá vùng núi đẹp Nghệ An" }
        ]
    },
    "Hà Tĩnh": {
        description: "Hà Tĩnh là tỉnh vùng Bắc Trung Bộ, nơi sản xuất lúa, muối. Nổi tiếng về các làng nghề truyền thống, cảnh sắc hoang sơ. Thành phố Hà Tĩnh là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Hà Tĩnh", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống" },
            { name: "Vải Hà Tĩnh", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm" }
        ],
        food: [
            { name: "Bánh chưng Hà Tĩnh", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Cá Hà Tĩnh", price: "150.000 - 400.000 đ", description: "Cá sông tươi ngon" },
            { name: "Muối Hà Tĩnh", price: "80.000 - 200.000 đ/kg", description: "Muối trắng chất lượng" }
        ],
        souvenirs: [
            { name: "Gốm Hà Tĩnh", price: "100.000 - 500.000 đ", description: "Gốm thủ công truyền thống" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour khu du lịch Hà Tĩnh - 1 ngày", price: "550.000 đ/người", description: "Tham quan các điểm du lịch" },
            { name: "Tour Thiên hà - nửa ngày", price: "400.000 đ/người", description: "Khám phá cảnh sắc thiên nhiên" }
        ]
    },
    "Quảng Bình": {
        description: "Quảng Bình là tỉnh ven biển vùng Bắc Trung Bộ, nổi tiếng về hang Phong Nha, Kẻ Bàng (Di sản UNESCO), bãi biển Đông Hới. Thành phố Đông Hới là trung tâm du lịch.",
        fashion: [
            { name: "Áo dài Quảng Bình", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống" },
            { name: "Vải Quảng Bình", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm" }
        ],
        food: [
            { name: "Bánh Quảng Bình", price: "30.000 - 80.000 đ", description: "Bánh địa phương" },
            { name: "Cua Quảng Bình", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" },
            { name: "Cá Quảng Bình", price: "150.000 - 400.000 đ", description: "Cá biển tươi ngon" }
        ],
        souvenirs: [
            { name: "Sản phẩm biển", price: "100.000 - 500.000 đ", description: "Các sản phẩm lưu niệm" },
            { name: "Mắm cua Quảng Bình", price: "100.000 - 300.000 đ/chai", description: "Mắm cua chất lượng" }
        ],
        tours: [
            { name: "Tour Phong Nha Kẻ Bàng - 1 ngày", price: "700.000 đ/người", description: "Khám phá hang Phong Nha UNESCO" },
            { name: "Tour bãi biển Đông Hới - nửa ngày", price: "500.000 đ/người", description: "Tham quan bãi biển đẹp Đông Hới" }
        ]
    },
    "Quảng Trị": {
        description: "Quảng Trị là tỉnh ven biển vùng Bắc Trung Bộ, nơi có nhiều di tích lịch sử cách mạng. Nổi tiếng về bãi biển Cửa Tùng, các khu du lịch. Thành phố Đông Hà là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Quảng Trị", price: "500.000 - 2.000.000 đ", description: "Áo dài truyền thống" },
            { name: "Vải Quảng Trị", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm" }
        ],
        food: [
            { name: "Bánh Quảng Trị", price: "30.000 - 80.000 đ", description: "Bánh địa phương" },
            { name: "Cua Quảng Trị", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" },
            { name: "Cá nướng Quảng Trị", price: "100.000 - 300.000 đ", description: "Cá nướng than" }
        ],
        souvenirs: [
            { name: "Sản phẩm biển", price: "100.000 - 500.000 đ", description: "Các sản phẩm lưu niệm" },
            { name: "Nước mắm cá Quảng Trị", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour di tích Khe Sanh - 1 ngày", price: "600.000 đ/người", description: "Tham quan di tích lịch sử nổi tiếng" },
            { name: "Tour bãi biển Cửa Tùng - nửa ngày", price: "500.000 đ/người", description: "Tham quan bãi biển đẹp" }
        ]
    },
    "Thừa Thiên-Huế": {
        description: "Thừa Thiên-Huế là tỉnh ven biển vùng Trung Bộ, cố đô của Việt Nam. Nổi tiếng về Thành Huế, các lăng tẩm vua chúa, thơm lâu Huế. Thành phố Huế là trung tâm du lịch văn hóa.",
        fashion: [
            { name: "Áo dài Huế", price: "600.000 - 3.000.000 đ", description: "Áo dài cổ điển Huế" },
            { name: "Khăn Huế", price: "100.000 - 400.000 đ", description: "Khăn lụa truyền thống Huế" }
        ],
        food: [
            { name: "Bánh hoai Huế", price: "40.000 - 100.000 đ", description: "Bánh hoai truyền thống Huế" },
            { name: "Bún Huế", price: "40.000 - 100.000 đ", description: "Bún Huế nổi tiếng" },
            { name: "Thơm lâu Huế", price: "100.000 - 500.000 đ/hộp", description: "Thơm lâu nhân tạo Huế" }
        ],
        souvenirs: [
            { name: "Áo dài Huế", price: "600.000 - 3.000.000 đ", description: "Áo dài cao cấp Huế" },
            { name: "Hương Huế", price: "100.000 - 500.000 đ", description: "Hương lâu Huế" }
        ],
        tours: [
            { name: "Tour Thành Huế - 1 ngày", price: "600.000 đ/người", description: "Tham quan Thành Huế cổ kính" },
            { name: "Tour lăng tẩm vua - 1 ngày", price: "700.000 đ/người", description: "Khám phá các lăng tẩm vua chúa" }
        ]
    },
    // Tây Nguyên - Các thành phố khác
    "Kon Tum": {
        description: "Kon Tum là tỉnh cao nguyên vùng Tây Nguyên, nơi sinh sống của các dân tộc Êđê, Giarai, Bana. Nổi tiếng về cảnh sắc thiên nhiên hoang sơ, các làng truyền thống. Thành phố Kon Tum là trung tâm.",
        fashion: [
            { name: "Trang phục Êđê", price: "800.000 - 3.000.000 đ", description: "Trang phục truyền thống Êđê" },
            { name: "Trang phục Giarai", price: "800.000 - 3.000.000 đ", description: "Trang phục truyền thống Giarai" }
        ],
        food: [
            { name: "Cơm lam Tây Nguyên", price: "50.000 - 150.000 đ", description: "Cơm nếp truyền thống" },
            { name: "Gà nướng bản Tây Nguyên", price: "200.000 - 500.000 đ", description: "Gà nướng truyền thống" },
            { name: "Thịt rừng Tây Nguyên", price: "250.000 - 600.000 đ", description: "Thịt rừng gác bếp" }
        ],
        souvenirs: [
            { name: "Sản phẩm Êđê", price: "200.000 - 1.000.000 đ", description: "Thêu tay dân tộc Êđê" },
            { name: "Cồng chiêng Tây Nguyên", price: "1.000.000 - 5.000.000 đ", description: "Cồng chiêng di sản UNESCO" }
        ],
        tours: [
            { name: "Tour bản làng dân tộc - 1 ngày", price: "600.000 đ/người", description: "Tham quan đời sống dân tộc" },
            { name: "Tour vườn cà phê - nửa ngày", price: "400.000 đ/người", description: "Khám phá vườn cà phê Tây Nguyên" }
        ]
    },
    "Gia Lai": {
        description: "Gia Lai là tỉnh cao nguyên vùng Tây Nguyên, là trung tâm sản xuất cà phê, cao su. Nơi sinh sống của dân tộc Giarai, Êđê. Thành phố Pleiku là trung tâm hành chính.",
        fashion: [
            { name: "Trang phục Giarai", price: "800.000 - 3.000.000 đ", description: "Trang phục truyền thống Giarai" },
            { name: "Áo dài Tây Nguyên", price: "600.000 - 2.000.000 đ", description: "Áo dài Tây Nguyên" }
        ],
        food: [
            { name: "Cà phê Gia Lai", price: "150.000 - 400.000 đ/gói", description: "Cà phê chất lượng cao" },
            { name: "Cơm lam Tây Nguyên", price: "50.000 - 150.000 đ", description: "Cơm nếp truyền thống" },
            { name: "Gà nướng Tây Nguyên", price: "200.000 - 500.000 đ", description: "Gà nướng truyền thống" }
        ],
        souvenirs: [
            { name: "Cà phê Tây Nguyên", price: "150.000 - 400.000 đ/gói", description: "Cà phê nguyên chất" },
            { name: "Sản phẩm Giarai", price: "200.000 - 1.000.000 đ", description: "Thêu tay dân tộc Giarai" }
        ],
        tours: [
            { name: "Tour vườn cà phê Gia Lai - nửa ngày", price: "400.000 đ/người", description: "Khám phá vườn cà phê" },
            { name: "Tour bản Giarai - 1 ngày", price: "600.000 đ/người", description: "Tham quan đời sống dân tộc Giarai" }
        ]
    },
    "Đắk Lắk": {
        description: "Đắk Lắk là tỉnh cao nguyên vùng Tây Nguyên, là trung tâm sản xuất cà phê lớn nhất Việt Nam. Nổi tiếng về các đồi cà phê xanh mênh mông. Thành phố Buôn Ma Thuột là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Tây Nguyên", price: "600.000 - 2.000.000 đ", description: "Áo dài Tây Nguyên" },
            { name: "Vải Tây Nguyên", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm" }
        ],
        food: [
            { name: "Cà phê Buôn Ma Thuột", price: "150.000 - 400.000 đ/gói", description: "Cà phê chất lượng cao nhất" },
            { name: "Cơm lam Tây Nguyên", price: "50.000 - 150.000 đ", description: "Cơm nếp truyền thống" },
            { name: "Dứa Đắk Lắk", price: "60.000 - 150.000 đ/quả", description: "Dứa ngọt thơm Đắk Lắk" }
        ],
        souvenirs: [
            { name: "Cà phê Buôn Ma Thuột", price: "150.000 - 400.000 đ/gói", description: "Cà phê nguyên chất" },
            { name: "Hạt tiêu Đắk Lắk", price: "100.000 - 300.000 đ/gói", description: "Tiêu chất lượng cao" }
        ],
        tours: [
            { name: "Tour vườn cà phê Buôn Ma Thuột - nửa ngày", price: "400.000 đ/người", description: "Khám phá vườn cà phê lớn" },
            { name: "Tour Buôn Ma Thuột - 1 ngày", price: "600.000 đ/người", description: "Tham quan thành phố cà phê" }
        ]
    },
    "Đắk Nông": {
        description: "Đắk Nông là tỉnh cao nguyên vùng Tây Nguyên, là vùng nông nghiệp chính của khu vực. Nổi tiếng về cà phê, cao su, rừng tự nhiên. Thành phố Gia Nghĩa là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Tây Nguyên", price: "600.000 - 2.000.000 đ", description: "Áo dài Tây Nguyên" },
            { name: "Vải Tây Nguyên", price: "300.000 - 1.000.000 đ", description: "Vải thổ cẩm" }
        ],
        food: [
            { name: "Cà phê Đắk Nông", price: "150.000 - 400.000 đ/gói", description: "Cà phê chất lượng cao" },
            { name: "Cơm lam Tây Nguyên", price: "50.000 - 150.000 đ", description: "Cơm nếp truyền thống" },
            { name: "Rau Đắk Nông", price: "40.000 - 100.000 đ/kg", description: "Rau sạch Tây Nguyên" }
        ],
        souvenirs: [
            { name: "Cà phê Đắk Nông", price: "150.000 - 400.000 đ/gói", description: "Cà phê nguyên chất" },
            { name: "Sản phẩm lâm sản", price: "100.000 - 500.000 đ", description: "Lâm sản đặc sản" }
        ],
        tours: [
            { name: "Tour vườn cà phê - nửa ngày", price: "400.000 đ/người", description: "Khám phá vườn cà phê" },
            { name: "Tour Tây Nguyên - 1 ngày", price: "600.000 đ/người", description: "Tham quan vùng cao nguyên" }
        ]
    },
    "Lâm Đồng": {
        description: "Lâm Đồng là tỉnh cao nguyên vùng Tây Nguyên, nổi tiếng về thành phố Đà Lạt - 'Paris của Đông Dương'. Nơi sản xuất cà phê, trà, hoa tươi. Thành phố Đà Lạt là trung tâm du lịch.",
        fashion: [
            { name: "Áo dài Đà Lạt", price: "600.000 - 2.500.000 đ", description: "Áo dài Đà Lạt lãng mạn" },
            { name: "Vải Đà Lạt", price: "300.000 - 1.000.000 đ", description: "Vải lụa cao cấp" }
        ],
        food: [
            { name: "Cà phê Đà Lạt", price: "150.000 - 400.000 đ/gói", description: "Cà phê Đà Lạt chất lượng cao" },
            { name: "Trà Đà Lạt", price: "100.000 - 400.000 đ/hộp", description: "Trà cao nguyên ngon lành" },
            { name: "Dâu tây Đà Lạt", price: "80.000 - 200.000 đ/hộp", description: "Dâu tây tươi Đà Lạt" }
        ],
        souvenirs: [
            { name: "Hoa khô Đà Lạt", price: "100.000 - 500.000 đ/hộp", description: "Hoa khô trang trí" },
            { name: "Mứt Đà Lạt", price: "150.000 - 400.000 đ/hộp", description: "Mứt trái cây Đà Lạt" }
        ],
        tours: [
            { name: "Tour Đà Lạt - 2 ngày 1 đêm", price: "1.200.000 đ/người", description: "Khám phá thành phố lãng mạn Đà Lạt" },
            { name: "Tour Vườn hoa - Thác Datanla - 1 ngày", price: "700.000 đ/người", description: "Tham quan cảnh sắc thiên nhiên Đà Lạt" }
        ]
    },
    // Đông Nam Bộ - Các thành phố khác
    "Bình Dương": {
        description: "Bình Dương là tỉnh Đông Nam Bộ, là trung tâm công nghiệp đang phát triển nhanh. Nơi tập trung các nhà máy, khu công nghiệp. Thành phố Thủ Dầu Một là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Bình Dương", price: "500.000 - 2.000.000 đ", description: "Áo dài hiện đại" },
            { name: "Thời trang Bình Dương", price: "200.000 - 1.000.000 đ", description: "Quần áo công xưởng" }
        ],
        food: [
            { name: "Bánh mì Bình Dương", price: "20.000 - 50.000 đ", description: "Bánh mì ngon" },
            { name: "Cơm tấm Bình Dương", price: "30.000 - 80.000 đ", description: "Cơm tấm sườn nướng" },
            { name: "Ếu Bình Dương", price: "40.000 - 100.000 đ", description: "Ếu nướng/nấu" }
        ],
        souvenirs: [
            { name: "Sản phẩm thủ công", price: "100.000 - 500.000 đ", description: "Các sản phẩm mỹ nghệ" },
            { name: "Quà lưu niệm", price: "50.000 - 300.000 đ", description: "Các sản phẩm lưu niệm" }
        ],
        tours: [
            { name: "Tour Suối Tiên - nửa ngày", price: "500.000 đ/người", description: "Tham quan khu du lịch Suối Tiên" },
            { name: "Tour Bảo Tàng Bình Dương - nửa ngày", price: "400.000 đ/người", description: "Khám phá bảo tàng lịch sử" }
        ]
    },
    "Đồng Nai": {
        description: "Đồng Nai là tỉnh Đông Nam Bộ, là trung tâm công nghiệp lớn của vùng. Nổi tiếng về các nhà máy, khu công nghiệp, sản xuất nông sản. Thành phố Biên Hòa là trung tâm hành chính.",
        fashion: [
            { name: "Áo dài Đồng Nai", price: "500.000 - 2.000.000 đ", description: "Áo dài hiện đại" },
            { name: "Thời trang Đồng Nai", price: "200.000 - 1.000.000 đ", description: "Quần áo công xưởng" }
        ],
        food: [
            { name: "Bánh mì Biên Hòa", price: "20.000 - 50.000 đ", description: "Bánh mì ngon" },
            { name: "Cơm tấm Đồng Nai", price: "30.000 - 80.000 đ", description: "Cơm tấm sườn nướng" },
            { name: "Cá sông Đồng Nai", price: "150.000 - 400.000 đ", description: "Cá sông tươi ngon" }
        ],
        souvenirs: [
            { name: "Sản phẩm thủ công", price: "100.000 - 500.000 đ", description: "Các sản phẩm mỹ nghệ" },
            { name: "Quà lưu niệm", price: "50.000 - 300.000 đ", description: "Các sản phẩm lưu niệm" }
        ],
        tours: [
            { name: "Tour thành phố Biên Hòa - nửa ngày", price: "400.000 đ/người", description: "Tham quan thành phố Biên Hòa" },
            { name: "Tour di tích lịch sử - 1 ngày", price: "550.000 đ/người", description: "Khám phá di tích lịch sử" }
        ]
    },
    "Bà Rịa-Vũng Tàu": {
        description: "Bà Rịa-Vũng Tàu là tỉnh ven biển Đông Nam Bộ, nổi tiếng về bãi biển đẹp, du lịch biển. Nơi sản xuất dầu, thủy sản. Thành phố Vũng Tàu là trung tâm du lịch.",
        fashion: [
            { name: "Áo dài Vũng Tàu", price: "500.000 - 2.000.000 đ", description: "Áo dài phong cách biển" },
            { name: "Quần áo biển", price: "200.000 - 800.000 đ", description: "Quần áo phù hợp cho biển" }
        ],
        food: [
            { name: "Cua Vũng Tàu", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" },
            { name: "Cá nướng Vũng Tàu", price: "150.000 - 400.000 đ", description: "Cá nướng than trên biển" },
            { name: "Mực nướng Vũng Tàu", price: "200.000 - 500.000 đ", description: "Mực nướng trên biển" }
        ],
        souvenirs: [
            { name: "Sản phẩm biển", price: "100.000 - 500.000 đ", description: "Các sản phẩm lưu niệm biển" },
            { name: "Mắm cua Vũng Tàu", price: "100.000 - 300.000 đ/chai", description: "Mắm cua chất lượng cao" }
        ],
        tours: [
            { name: "Tour bãi biển Vũng Tàu - 1 ngày", price: "600.000 đ/người", description: "Tham quan bãi biển đẹp Vũng Tàu" },
            { name: "Tour đảo Cù Lao Chàm - 1 ngày", price: "700.000 đ/người", description: "Khám phá đảo thiên đường" }
        ]
    },
    "Long An": {
        description: "Long An là tỉnh đồng bằng sông Mekong vùng Đông Nam Bộ, nổi tiếng về sản xuất lúa, mía, tôm. Nơi giao thoa kinh tế nông nghiệp và công nghiệp. Thành phố Tân An là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài miền Tây", price: "500.000 - 2.000.000 đ", description: "Áo dài Long An" }
        ],
        food: [
            { name: "Bánh chưng Long An", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Tôm Long An", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Gạo Long An", price: "80.000 - 200.000 đ/kg", description: "Gạo chất lượng cao" }
        ],
        souvenirs: [
            { name: "Sản phẩm nông sản", price: "100.000 - 400.000 đ", description: "Nông sản đặc sản Long An" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour Tân An - nửa ngày", price: "400.000 đ/người", description: "Tham quan thành phố Tân An" },
            { name: "Tour vùng sâu Long An - 1 ngày", price: "550.000 đ/người", description: "Khám phá vùng nông thôn" }
        ]
    },
    "Tiền Giang": {
        description: "Tiền Giang là tỉnh đồng bằng sông Mekong vùng Đông Nam Bộ, nổi tiếng về sản xuất lúa, cây ăn trái, tôm. Thành phố Mỹ Tho là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài miền Tây", price: "500.000 - 2.000.000 đ", description: "Áo dài Tiền Giang" }
        ],
        food: [
            { name: "Bánh chưng Tiền Giang", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Tôm Tiền Giang", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Xoài Tiền Giang", price: "60.000 - 150.000 đ/kg", description: "Xoài ngọt thơm" }
        ],
        souvenirs: [
            { name: "Cây ăn trái", price: "100.000 - 300.000 đ/cây", description: "Cây ăn trái miệt vườn" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour Mỹ Tho - Bến Tre - 1 ngày", price: "600.000 đ/người", description: "Du lịch kết hợp Mỹ Tho và Bến Tre" },
            { name: "Tour chợ nổi Cái Rang - nửa ngày", price: "500.000 đ/người", description: "Tham quan chợ nổi nổi tiếng" }
        ]
    },
    "Bến Tre": {
        description: "Bến Tre là tỉnh đồng bằng sông Mekong vùng Đông Nam Bộ, nổi tiếng về dừa, mía, tôm. Nơi sản xuất nước cốt dừa, dầu dừa. Thành phố Bến Tre là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Bến Tre", price: "500.000 - 2.000.000 đ", description: "Áo dài Bến Tre" }
        ],
        food: [
            { name: "Cơm nước Bến Tre", price: "50.000 - 150.000 đ", description: "Cơm nước đặc sản" },
            { name: "Tôm Bến Tre", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Bánh tráng nướng Bến Tre", price: "50.000 - 150.000 đ/gói", description: "Bánh tráng nướng vị mặn" }
        ],
        souvenirs: [
            { name: "Sản phẩm dừa Bến Tre", price: "100.000 - 400.000 đ", description: "Dầu dừa, dừa sấy" },
            { name: "Mứt Bến Tre", price: "100.000 - 300.000 đ/hộp", description: "Mứt trái cây truyền thống" }
        ],
        tours: [
            { name: "Tour vườn dừa Bến Tre - nửa ngày", price: "400.000 đ/người", description: "Tham quan vườn dừa" },
            { name: "Tour sông Hàm Luôn - 1 ngày", price: "600.000 đ/người", description: "Du lịch sông nước Bến Tre" }
        ]
    },
    // Đồng bằng sông Cửu Long - Các thành phố khác
    "Kiên Giang": {
        description: "Kiên Giang là tỉnh ven biển đồng bằng sông Cửu Long, nổi tiếng về phú Quốc, các đảo đẹp. Nơi sản xuất muối, cà phê, nước mắm. Thành phố Rạch Giá là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba Kiên Giang", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Phú Quốc", price: "500.000 - 2.000.000 đ", description: "Áo dài Phú Quốc" }
        ],
        food: [
            { name: "Nước mắm Phú Quốc", price: "100.000 - 400.000 đ/chai", description: "Nước mắm Phú Quốc chất lượng cao" },
            { name: "Cá khô Phú Quốc", price: "200.000 - 500.000 đ/kg", description: "Cá khô Phú Quốc" },
            { name: "Tôm cạp Kiên Giang", price: "250.000 - 600.000 đ", description: "Tôm cạp tươi sống" }
        ],
        souvenirs: [
            { name: "Nước mắm Phú Quốc", price: "100.000 - 400.000 đ/chai", description: "Nước mắm chất lượng cao" },
            { name: "Mắm tôm Kiên Giang", price: "100.000 - 300.000 đ/chai", description: "Mắm tôm chất lượng" }
        ],
        tours: [
            { name: "Tour Phú Quốc - 2 ngày 1 đêm", price: "1.500.000 đ/người", description: "Du lịch đảo Phú Quốc thiên đường" },
            { name: "Tour Rạch Giá - Hà Tiên - 1 ngày", price: "700.000 đ/người", description: "Tham quan các thành phố ven biển" }
        ]
    },
    "An Giang": {
        description: "An Giang là tỉnh đồng bằng sông Cửu Long, nổi tiếng về sản xuất lúa, cà phê, tôm. Nơi có Tứ Giới - điểm nhỏ nhất Việt Nam. Thành phố Long Xuyên là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài An Giang", price: "500.000 - 2.000.000 đ", description: "Áo dài An Giang" }
        ],
        food: [
            { name: "Bánh chưng An Giang", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Tôm An Giang", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Cà phê An Giang", price: "150.000 - 400.000 đ/gói", description: "Cà phê chất lượng cao" }
        ],
        souvenirs: [
            { name: "Cà phê An Giang", price: "150.000 - 400.000 đ/gói", description: "Cà phê nguyên chất" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour Tứ Giới - nửa ngày", price: "400.000 đ/người", description: "Tham quan điểm nhỏ nhất Việt Nam" },
            { name: "Tour sông Hậu - 1 ngày", price: "600.000 đ/người", description: "Du lịch sông nước miền Tây" }
        ]
    },
    "Cà Mau": {
        description: "Cà Mau là tỉnh phía Nam cùng của Việt Nam, nổi tiếng về rừng ngập mặn U Minh, tôm cà mau, cua. Thành phố Cà Mau là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Cà Mau", price: "500.000 - 2.000.000 đ", description: "Áo dài Cà Mau" }
        ],
        food: [
            { name: "Cua Cà Mau", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" },
            { name: "Tôm Cà Mau", price: "250.000 - 600.000 đ/kg", description: "Tôm Cà Mau chất lượng cao" },
            { name: "Cá nhím", price: "150.000 - 400.000 đ", description: "Cá nhím tươi ngon" }
        ],
        souvenirs: [
            { name: "Mắm cua Cà Mau", price: "100.000 - 400.000 đ/chai", description: "Mắm cua chất lượng cao" },
            { name: "Tôm sấy Cà Mau", price: "150.000 - 400.000 đ/gói", description: "Tôm sấy để dành" }
        ],
        tours: [
            { name: "Tour rừng U Minh - 1 ngày", price: "700.000 đ/người", description: "Khám phá rừng ngập mặn U Minh" },
            { name: "Tour Mũi Cà Mau - nửa ngày", price: "600.000 đ/người", description: "Tham quan mũi cất nhất đất nước" }
        ]
    },
    "Bạc Liêu": {
        description: "Bạc Liêu là tỉnh đồng bằng sông Cửu Long, nổi tiếng về sản xuất muối, tôm, cua. Nơi có làng chim Bạc Liêu. Thành phố Bạc Liêu là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Bạc Liêu", price: "500.000 - 2.000.000 đ", description: "Áo dài Bạc Liêu" }
        ],
        food: [
            { name: "Muối Bạc Liêu", price: "80.000 - 200.000 đ/kg", description: "Muối trắng chất lượng cao" },
            { name: "Tôm Bạc Liêu", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Cua Bạc Liêu", price: "300.000 - 800.000 đ", description: "Cua biển tươi sống" }
        ],
        souvenirs: [
            { name: "Muối Bạc Liêu", price: "80.000 - 200.000 đ/kg", description: "Muối trắng chất lượng cao" },
            { name: "Mắm cua Bạc Liêu", price: "100.000 - 300.000 đ/chai", description: "Mắm cua chất lượng" }
        ],
        tours: [
            { name: "Tour làng chim Bạc Liêu - nửa ngày", price: "500.000 đ/người", description: "Tham quan làng chim độc đáo" },
            { name: "Tour cánh đồng muối - 1 ngày", price: "600.000 đ/người", description: "Khám phá cánh đồng muối" }
        ]
    },
    "Sóc Trăng": {
        description: "Sóc Trăng là tỉnh đồng bằng sông Cửu Long, nổi tiếng về sản xuất lúa, tôm, cua. Nơi tập trung các chùa Khmer cổ kính. Thành phố Sóc Trăng là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Sóc Trăng", price: "500.000 - 2.000.000 đ", description: "Áo dài Sóc Trăng" }
        ],
        food: [
            { name: "Bánh chưng Sóc Trăng", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Tôm Sóc Trăng", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Cơm nước Sóc Trăng", price: "50.000 - 150.000 đ", description: "Cơm nước đặc sản" }
        ],
        souvenirs: [
            { name: "Sản phẩm Khmer", price: "100.000 - 500.000 đ", description: "Sản phẩm thủ công Khmer" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour chùa Khmer Sóc Trăng - 1 ngày", price: "600.000 đ/người", description: "Tham quan chùa Khmer cổ kính" },
            { name: "Tour sông Hậu - nửa ngày", price: "500.000 đ/người", description: "Du lịch sông nước Sóc Trăng" }
        ]
    },
    "Hậu Giang": {
        description: "Hậu Giang là tỉnh đồng bằng sông Cửu Long, nổi tiếng về sản xuất lúa, trái cây, tôm. Nơi có các vườn ăn trái miệt vườn. Thành phố Vị Thanh là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Hậu Giang", price: "500.000 - 2.000.000 đ", description: "Áo dài Hậu Giang" }
        ],
        food: [
            { name: "Bánh chưng Hậu Giang", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Tôm Hậu Giang", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Trái cây miệt vườn", price: "60.000 - 150.000 đ/kg", description: "Trái cây tươi miệt vườn" }
        ],
        souvenirs: [
            { name: "Trái cây sấy", price: "100.000 - 300.000 đ/gói", description: "Trái cây sấy để dành" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour vườn trái cây - nửa ngày", price: "400.000 đ/người", description: "Tham quan vườn trái cây" },
            { name: "Tour sông Hậu - 1 ngày", price: "600.000 đ/người", description: "Du lịch sông nước Hậu Giang" }
        ]
    },
    "Trà Vinh": {
        description: "Trà Vinh là tỉnh đồng bằng sông Cửu Long, nổi tiếng về sản xuất lúa, tôm, cua. Nơi tập trung các chùa Khmer, đền Khmer cổ kính. Thành phố Trà Vinh là trung tâm hành chính.",
        fashion: [
            { name: "Áo bà ba", price: "150.000 - 500.000 đ", description: "Áo bà ba truyền thống" },
            { name: "Áo dài Trà Vinh", price: "500.000 - 2.000.000 đ", description: "Áo dài Trà Vinh" }
        ],
        food: [
            { name: "Bánh chưng Trà Vinh", price: "100.000 - 250.000 đ", description: "Bánh chưng truyền thống" },
            { name: "Tôm Trà Vinh", price: "200.000 - 500.000 đ/kg", description: "Tôm sông tươi ngon" },
            { name: "Cơm nước Trà Vinh", price: "50.000 - 150.000 đ", description: "Cơm nước đặc sản" }
        ],
        souvenirs: [
            { name: "Sản phẩm Khmer", price: "100.000 - 500.000 đ", description: "Sản phẩm thủ công Khmer" },
            { name: "Nước mắm cá", price: "100.000 - 300.000 đ/chai", description: "Nước mắm truyền thống" }
        ],
        tours: [
            { name: "Tour chùa Khmer Trà Vinh - 1 ngày", price: "600.000 đ/người", description: "Tham quan chùa Khmer cổ kính" },
            { name: "Tour sông Hàm Luôn - nửa ngày", price: "500.000 đ/người", description: "Du lịch sông nước Trà Vinh" }
        ]
    }
};

const pathRegionMap = {
    'detail-trung-du-mien-nui-bac.html': 'trung-du-mien-nui-bac',
    'detail-dong-bang-song-hong.html': 'dong-bang-song-hong',
    'detail-bac-trung-bo-duyen-hai.html': 'bac-trung-bo-duyen-hai',
    'detail-tay-nguyen.html': 'tay-nguyen',
    'detail-dong-nam-bo.html': 'dong-nam-bo',
    'detail-dong-bang-song-cuu-long.html': 'dong-bang-song-cuu-long'
};

function resolveRegionId() {
    const bodyRegion = document.body?.dataset?.regionId || null;
    if (bodyRegion && regionData[bodyRegion]) return bodyRegion;

    const urlParams = new URLSearchParams(window.location.search);
    const queryRegion = urlParams.get('region');
    if (queryRegion && regionData[queryRegion]) return queryRegion;

    const pathname = window.location.pathname.split('/').pop();
    const pathRegion = pathRegionMap[pathname];
    if (pathRegion && regionData[pathRegion]) return pathRegion;

    const storageRegion = localStorage.getItem('selectedRegionId');
    if (storageRegion && regionData[storageRegion]) return storageRegion;

    return Object.keys(regionData)[0] || null;
}

let selectedRegionId = resolveRegionId();
let currentRegionData = selectedRegionId ? regionData[selectedRegionId] : null;
let currentCityName = null;
let currentCategory = 'explore';

function bootPage() {
    if (!selectedRegionId || !currentRegionData) {
        document.getElementById('sidebarTitle').textContent = 'Không có dữ liệu';
        document.getElementById('cityName').textContent = 'Không xác định được vùng';
        document.getElementById('cityDescription').textContent = 'Vui lòng quay lại bản đồ và chọn vùng kinh tế.';
        return;
    }

    localStorage.setItem('selectedRegionId', selectedRegionId);
    initializePage();
    setupEventListeners();
}

// Khởi tạo (an toàn cho cả trường hợp DOMContentLoaded đã bắn trước đó)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootPage);
} else {
    bootPage();
}

function initializePage() {
    const citiesList = document.getElementById('citiesList');
    if (!citiesList) return;

    const regionCities = Array.isArray(currentRegionData?.cities)
        ? currentRegionData.cities.filter(city => typeof city === 'string' && city.trim())
        : [];

    if (!regionCities.length) {
        document.getElementById('sidebarTitle').textContent = 'Không có dữ liệu';
        document.getElementById('cityName').textContent = 'Không tìm thấy danh sách thành phố';
        document.getElementById('cityDescription').textContent = 'Dữ liệu vùng hiện tại chưa có danh sách thành phố hợp lệ.';
        displayProducts('fashionProducts', []);
        displayProducts('foodProducts', []);
        displayProducts('souvenirsProducts', []);
        displayTours('toursProducts', []);
        return;
    }

    // Hiển thị danh sách thành phố
    citiesList.innerHTML = '';
    regionCities.forEach(city => {
        const cityItem = document.createElement('button');
        cityItem.type = 'button';
        cityItem.classList.add('city-item');
        if (!currentCityName) {
            cityItem.classList.add('active');
            currentCityName = city;
        }
        cityItem.textContent = city;
        cityItem.addEventListener('click', () => selectCity(city, cityItem));
        citiesList.appendChild(cityItem);
    });

    // Cập nhật tiêu đề sidebar với tên thành phố đầu tiên
    document.getElementById('sidebarTitle').textContent = currentCityName;

    // Hiển thị thông tin thành phố đầu tiên
    displayCityInfo(currentCityName);
}

function setupEventListeners() {
    // Đảm bảo quay lại trang chủ ổn định
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            localStorage.removeItem('selectedRegionId');
        });
    }

    // Xử lý click category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.addEventListener('click', () => switchCategory(tab.dataset.category, tab));
    });

    // Xử lý tìm kiếm
    document.getElementById('searchInput').addEventListener('keyup', (e) => {
        filterBySearch(e.target.value);
    });
}

function selectCity(cityName, element) {
    currentCityName = cityName;
    document.querySelectorAll('.city-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');
    // Cập nhật tiêu đề sidebar
    document.getElementById('sidebarTitle').textContent = cityName;
    displayCityInfo(cityName);
}

function displayCityInfo(cityName) {
    const cityData = cityDetailsData[cityName];
    if (!cityData) {
        document.getElementById('cityName').textContent = cityName;
        document.getElementById('cityDescription').textContent = 'Chưa có dữ liệu chi tiết cho thành phố này.';
        displayProducts('fashionProducts', []);
        displayProducts('foodProducts', []);
        displayProducts('souvenirsProducts', []);
        displayTours('toursProducts', []);
        return;
    }

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('cityDescription').textContent = cityData.description;

    // Hiển thị sản phẩm trang phục
    displayProducts('fashionProducts', cityData.fashion);
    displayProducts('foodProducts', cityData.food);
    displayProducts('souvenirsProducts', cityData.souvenirs);
    displayTours('toursProducts', cityData.tours);
}

function displayProducts(elementId, products) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    if (!products || !products.length) {
        container.innerHTML = '<p class="detail-text">Chưa có dữ liệu cho mục này.</p>';
        return;
    }
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price}</div>
        `;
        container.appendChild(card);
    });
}

function displayTours(elementId, tours) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    if (!tours || !tours.length) {
        container.innerHTML = '<p class="detail-text">Chưa có dữ liệu cho mục này.</p>';
        return;
    }
    tours.forEach(tour => {
        const card = document.createElement('div');
        card.classList.add('tour-card');
        card.innerHTML = `
            <h3>${tour.name}</h3>
            <p>${tour.description}</p>
            <div class="tour-price">${tour.price}</div>
        `;
        container.appendChild(card);
    });
}

function switchCategory(category, element) {
    currentCategory = category;
    document.querySelectorAll('.category-tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');

    document.querySelectorAll('.content-section').forEach(section => section.classList.add('hidden'));

    const sectionMap = {
        'explore': 'exploreSection',
        'fashion': 'fashionSection',
        'food': 'foodSection',
        'souvenirs': 'souvenirsSection',
        'tourism': 'tourismSection'
    };

    document.getElementById(sectionMap[category]).classList.remove('hidden');
}

function filterBySearch(query) {
    const query_lower = query.toLowerCase();
    
    if (currentCategory === 'fashion') {
        const cards = document.querySelectorAll('#fashionProducts .product-card');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query_lower) ? 'block' : 'none';
        });
    } else if (currentCategory === 'food') {
        const cards = document.querySelectorAll('#foodProducts .product-card');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query_lower) ? 'block' : 'none';
        });
    } else if (currentCategory === 'souvenirs') {
        const cards = document.querySelectorAll('#souvenirsProducts .product-card');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query_lower) ? 'block' : 'none';
        });
    } else if (currentCategory === 'tourism') {
        const cards = document.querySelectorAll('#toursProducts .tour-card');
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query_lower) ? 'block' : 'none';
        });
    }
}
