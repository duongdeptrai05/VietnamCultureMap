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
        description: `<strong>Lào Cai</strong> là vùng đất phong phú về bản sắc văn hóa và thiên nhiên hùng vĩ.<br><br>
        <strong>Con người và Phong tục tập quán:</strong> Nơi đây là ngôi nhà chung của 25 dân tộc anh em như Mông, Dao, Tày, Giáy... Con người chân chất, mộc mạc và vô cùng hiếu khách. Phong tục tập quán vô cùng đa dạng: từ chợ tình Sa Pa, lễ hội Gầu Tào của người Mông, đến lễ Cấp Sắc của người Dao. Những nét văn hóa này phản ánh trực tiếp lên những bộ <strong>Trang phục</strong> sặc sỡ mà họ mặc hàng ngày hay các loại vải dệt thổ cẩm đầy nghệ thuật.<br><br>
        <strong>Món ăn đặc sắc:</strong> Sự giao thoa văn hóa tạo nên các <strong>Đồ ăn</strong> độc đáo mang đậm hương vị núi rừng. Các món ăn không chỉ để no mà còn gắn với lịch sử sinh tồn trên núi cao, được dùng để thiết đãi khách quý, thể hiện tinh thần đoàn kết cộng đồng.<br><br>
        <strong>Khu du lịch và Quà lưu niệm:</strong> Các <strong>Khu du lịch</strong> nổi tiếng như đỉnh Fansipan hùng vĩ, bản Cát Cát hay thung lũng Mường Hoa luôn thu hút khách du lịch. Khi đến đây, bạn có thể dễ dàng tìm mua các <strong>Quà lưu niệm</strong> mang ý nghĩa tâm linh và văn hóa sâu sắc từ các phiên chợ vùng cao.`,
        fashion: [
            { 
                name: "Thổ cẩm dân tộc Mông", 
                price: "500.000 - 2.000.000 đ", 
                description: "Vải thổ cẩm dệt thủ công rực rỡ mang đậm dấu ấn người Mông.",
                imageUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=400&auto=format&fit=crop",
                history: "Nghề dệt thổ cẩm của người Mông đã có từ hàng trăm năm trước, truyền từ đời này sang đời khác. Nó từng là thước đo để đánh giá sự khéo léo, chăm chỉ của người phụ nữ Mông trước khi lập gia đình.",
                ingredients: "Sợi lanh tự nhiên trồng trên nương, sáp ong để vẽ họa tiết, rễ cây rừng và các loại lá cây (như lá chàm) để nhuộm màu.",
                structure: "Quá trình gồm hàng chục công đoạn: tước sợi lanh, se chỉ, dệt trên khung cửi gỗ, đến vẽ sáp ong tạo hoa văn. Bố cục hoa văn thường đối xứng, hình học hóa các loài cỏ cây, muông thú.",
                usage: "Dùng để may trang phục truyền thống, chăn, địu trẻ em. Hoa văn thổ cẩm mang ý nghĩa bảo vệ con người khỏi tà ma, thú dữ, và là món quà hồi môn thiêng liêng."
            },
            { 
                name: "Trang phục Dao Đỏ", 
                price: "800.000 - 3.000.000 đ", 
                description: "Trang phục với sắc đỏ rực rỡ, thêu hoa văn tinh xảo.",
                imageUrl: "https://images.unsplash.com/photo-1526304760581-228784b11f32?q=80&w=400&auto=format&fit=crop",
                history: "Gắn liền với lịch sử sinh sống trên các vùng núi cao của người Dao Đỏ. Trang phục phản ánh nhân sinh quan và tín ngưỡng thờ cúng tổ tiên của dân tộc.",
                ingredients: "Vải chàm đen làm nền, chỉ thêu nhiều màu (chủ đạo là đỏ, trắng, vàng), cùng các hạt cườm, tua rua và trang sức bạc đính kèm.",
                structure: "Bao gồm áo dài, quần, yếm, khăn đội đầu và thắt lưng. Kỹ thuật thêu cực kỳ độc đáo: thêu từ mặt trái nhưng hình nổi lên mặt phải rất sắc nét.",
                usage: "Tác dụng bảo vệ cơ thể ở vùng núi lạnh. Ý nghĩa: Màu đỏ tượng trưng cho ngọn lửa, sự ấm no, hạnh phúc và sức sống mãnh liệt. Nó cũng có ý nghĩa xua đuổi tà khí."
            }
        ],
        food: [
            { 
                name: "Thịt trâu gác bếp", 
                price: "200.000 - 600.000 đ", 
                description: "Thịt trâu khô hun khói đậm vị núi rừng.",
                imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=400&auto=format&fit=crop",
                history: "Xuất phát từ nhu cầu dự trữ thức ăn qua những mùa đông sương giá, người dân Thái đen, Mông đã sáng tạo ra phương pháp sấy khô thịt bằng khói bếp để bảo quản được lâu tháng.",
                ingredients: "Thịt bắp của trâu bản (nuôi thả rông), hạt mắc khén (tiêu rừng), hạt dổi, tỏi, ớt, gừng, muối.",
                structure: "Thịt được thái dọc thớ thành từng miếng dài, ướp gia vị đặc trưng trong vài giờ. Sau đó xiên vào que tre và treo lên gác bếp, hun bằng khói từ củi gỗ rừng trong nhiều tuần cho đến khi khô lại, bên ngoài đen hóng nhưng bên trong đỏ hồng.",
                usage: "Tác dụng: Thức ăn dự trữ giàu đạm cho những ngày đông giá rét. Ý nghĩa: Món ăn đặc trưng thết đãi khách quý, tượng trưng cho sự trù phú và lòng hiếu khách của người vùng cao."
            },
            { 
                name: "Cơm lam nướng", 
                price: "50.000 - 150.000 đ", 
                description: "Cơm nếp nướng trong ống tre dẻo thơm.",
                imageUrl: "https://images.unsplash.com/photo-1626200419189-3b58941bb335?q=80&w=400&auto=format&fit=crop",
                history: "Ra đời từ thói quen đi rừng, làm nương dài ngày. Để tiện lợi, người bản địa dùng luôn ống nứa có sẵn trong rừng để nấu ăn thay cho nồi niêu cồng kềnh.",
                ingredients: "Gạo nếp nương dẻo thơm, ống tre/nứa/bương còn tươi (có lóng nước bên trong), lá chuối hoặc lá dong.",
                structure: "Gạo vo sạch ngâm nước vài giờ, cho vào ống tre và chêm thêm chút nước suối. Nút chặt miệng ống bằng lá chuối, nướng xoay đều trên than hồng đến khi vỏ tre cháy xém, nứt ra và tỏa mùi thơm của nếp hòa quyện với tre.",
                usage: "Tác dụng: Cung cấp năng lượng cho những chuyến đi rừng, giữ được lâu không thiu. Ý nghĩa: Thể hiện sự sáng tạo và hòa hợp tuyệt đối giữa con người và thiên nhiên."
            }
        ],
        souvenirs: [
            { 
                name: "Khèn Mông", 
                price: "1.000.000 - 5.000.000 đ", 
                description: "Nhạc cụ hơi bằng trúc, biểu tượng linh hồn người Mông.",
                imageUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=400&auto=format&fit=crop",
                history: "Là nhạc cụ lâu đời, gắn bó máu thịt với đời sống văn hóa, tâm linh của đàn ông dân tộc Mông.",
                ingredients: "Gỗ quý làm bầu khèn, 6 ống trúc với độ dài ngắn khác nhau tạo âm, và vỏ cây anh đào để nẹp.",
                structure: "Bầu khèn khoét rỗng, cắm 6 ống trúc xuyên qua. Mỗi ống có lam đồng (lưỡi gà) tạo ra âm thanh khi thổi và hít khí.",
                usage: "Tác dụng/Ý nghĩa: Dùng để thổi trong các dịp lễ hội, chợ tình để các chàng trai gọi bạn tình. Trong tang ma, tiếng khèn là phương tiện giao tiếp với cõi âm, dẫn đường cho linh hồn người chết về với tổ tiên. Khèn là biểu tượng của sức mạnh, tài hoa của đàn ông Mông."
            },
            { 
                name: "Trang sức bạc chạm khắc", 
                price: "500.000 - 2.000.000 đ", 
                description: "Vòng cổ, vòng tay bạc được chạm trổ thủ công.",
                imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop",
                history: "Nghề chạm bạc truyền thống của người Mông, Dao đã có từ lâu đời, được các nghệ nhân truyền tay nhau.",
                ingredients: "Bạc nguyên chất (thường được nấu chảy từ bạc vụn hoặc đồng xu bạc cũ).",
                structure: "Bạc được nung chảy, đổ khuôn, sau đó qua các công đoạn kéo sợi, dát mỏng, chạm khắc các họa tiết hoa lá, chim muông cực kỳ tỉ mỉ.",
                usage: "Tác dụng/Ý nghĩa: Tôn vinh vẻ đẹp phụ nữ vùng cao. Theo tín ngưỡng, bạc kỵ gió, trừ tà ma, bảo vệ sức khỏe người đeo. Đồng thời nó cũng là tài sản tiết kiệm và quà hồi môn vô giá."
            }
        ],
        tours: [
            { 
                name: "Tour Cáp treo Fansipan - Nóc nhà Đông Dương", 
                price: "1.200.000 đ/người", 
                description: "Hành trình chinh phục đỉnh Fansipan cao 3.143m bằng hệ thống cáp treo hiện đại, ngắm toàn cảnh thung lũng Mường Hoa, dãy Hoàng Liên Sơn hùng vĩ ẩn hiện trong mây biển.",
                imageUrl: "https://images.unsplash.com/photo-1549487508-251f224976fa?q=80&w=400&auto=format&fit=crop",
                history: "Fansipan từ lâu là mơ ước của những người mê leo núi. Từ năm 2016, hệ thống cáp treo hiện đại đã giúp mọi người dễ dàng chạm tay vào đỉnh cao này.",
                ingredients: "Tour bao gồm vé cáp treo khứ hồi, vé tàu hỏa leo núi (tuỳ chọn), và hướng dẫn viên điểm.",
                structure: "Lịch trình: Di chuyển từ trung tâm Sa Pa -> Ga Hoàng Liên -> Đi cáp treo xuyên mây -> Khu du lịch tâm linh (Chùa Trình) -> Leo bộ hoặc đi tàu hỏa lên Đỉnh Fansipan -> Check-in cột mốc -> Trở về.",
                usage: "Tác dụng/Ý nghĩa: Giúp du khách vượt qua giới hạn, chiêm ngưỡng vẻ đẹp ngoạn mục và thêm tự hào về thiên nhiên đất nước Việt Nam."
            },
            { 
                name: "Tour Trekking Bản Cát Cát - Tả Van", 
                price: "500.000 đ/người", 
                description: "Đi bộ xuyên qua các ruộng bậc thang tuyệt đẹp, thăm bản làng của người Mông và người Giáy. Trải nghiệm trực tiếp cuộc sống bản địa.",
                imageUrl: "https://images.unsplash.com/photo-1506452814470-3ef0c0d165f1?q=80&w=400&auto=format&fit=crop",
                history: "Bắt nguồn từ sự phát triển của du lịch sinh thái cộng đồng, đưa du khách về với thiên nhiên nguyên sơ.",
                ingredients: "Hướng dẫn viên bản địa am hiểu văn hóa, phí tham quan các bản, và một bữa ăn trưa đặc sản vùng cao.",
                structure: "Lịch trình: Trung tâm Sa Pa -> Bản Cát Cát ngắm thác nước và nghề dệt thổ cẩm -> Đi bộ men theo thung lũng Mường Hoa ngoạn mục -> Bản Tả Van của người Giáy -> Dùng bữa trưa -> Quay về.",
                usage: "Tác dụng/Ý nghĩa: Tôn vinh văn hóa bản địa, đem lại thu nhập bền vững cho người dân địa phương và mang lại góc nhìn sống động nhất cho du khách về văn hóa vùng cao."
            }
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
        description: `<strong>HÀ NỘI - Thủ Đô Ngàn Năm Văn Hiến</strong><br><br>
        <strong>Khám Phá:</strong> Hà Nội là trái tim của cả nước, nổi tiếng với lịch sử lâu đời, 36 phố phường rêu phong và nền văn hóa đậm đà bản sắc. Người Hà Nội thanh lịch, tinh tế trong cả lời ăn tiếng nói và nếp sống. Nơi đây có Hồ Gươm, Lăng Bác, Văn Miếu Quốc Tử Giám và những mùa hoa đặc trưng tạo nên nét lãng mạn rất riêng.`,
        fashion: [
            { 
                name: "Áo dài truyền thống", 
                price: "500.000 - 3.000.000 đ", 
                description: "Áo dài thanh lịch, gắn liền với hình ảnh người con gái Tràng An.",
                imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?q=80&w=400&auto=format&fit=crop",
                history: "Trải qua nhiều thời kỳ từ áo giao lĩnh, áo tứ thân, đến áo dài Le Mur và áo dài hiện đại ngày nay. Gắn liền với hình ảnh người con gái Tràng An.",
                ingredients: "Cắt may bằng lụa tơ tằm, gấm (như lụa Vạn Phúc).",
                structure: "Tà áo ôm vừa vặn, xẻ hông bay bổng, mặc cùng quần lụa ống rộng.",
                usage: "Ý nghĩa: Biểu tượng của vẻ đẹp đoan trang, kín đáo, thanh tao và niềm tự hào về quốc phục của Việt Nam."
            }
        ],
        food: [
            { 
                name: "Phở Bò", 
                price: "50.000 - 150.000 đ", 
                description: "Tinh hoa ẩm thực Hà Nội với nước dùng ngọt thanh từ xương bò.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Phở xuất hiện từ đầu thế kỷ 20, là sự kết hợp giữa kỹ thuật hầm xương bò của Pháp và gia vị, bánh phở gạo của Việt Nam.",
                ingredients: "Xương ống bò, quế, hồi, thảo quả, gừng nướng, bánh phở gạo, thịt bò, hành hoa.",
                structure: "Nước dùng hầm từ xương ống bò trong 10-12 tiếng, thêm quế, hồi, thảo quả, gừng nướng. Bánh phở mỏng dai, thịt bò thái lát mỏng, rắc thêm hành hoa.",
                usage: "Ý nghĩa: Tinh hoa ẩm thực Việt Nam, đại diện cho sự cầu kỳ, tinh tế trong cách nêm nếm gia vị của người Hà Thành."
            },
            {
                name: "Bún chả Hà Nội",
                price: "40.000 - 120.000 đ",
                description: "Thịt lợn nướng than hoa ăn kèm bún và nước mắm chua ngọt.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Là món ăn bình dị lâu đời của người dân thủ đô, nổi tiếng với kỹ thuật quạt chả bằng than hoa.",
                ingredients: "Thịt lợn (ba chỉ và nạc vai), nước mắm, đường, dấm, đu đủ xanh, bún tươi, rau sống.",
                structure: "Thịt được tẩm ướp đậm đà, nướng thơm lừng xém cạnh. Nước chấm pha chua ngọt tinh tế cùng su hào, đu đủ giòn sần sật.",
                usage: "Ý nghĩa: Thể hiện nét ẩm thực tinh tế, hài hòa về hương vị và màu sắc, trở thành biểu tượng ẩm thực đường phố Hà Nội."
            }
        ],
        souvenirs: [
            { 
                name: "Cốm làng Vòng", 
                price: "100.000 - 300.000 đ", 
                description: "Hạt cốm non xanh mát gói trong lá sen.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Đặc sản lâu đời của làng Vòng (Cầu Giấy, Hà Nội).",
                ingredients: "Lúa nếp non, lá sen để gói.",
                structure: "Lúa non được rang chín tới, giã dẹp, sàng sảy kỹ lưỡng, giữ lại màu xanh tự nhiên và hương thơm thoang thoảng.",
                usage: "Lịch sử & Ý nghĩa: Cốm là tinh hoa của lúa non, gắn liền với mùa thu Hà Nội. Nó là món quà gói trọn sự thanh tao, hương vị đồng quê của mảnh đất thủ đô."
            },
            {
                name: "Gốm sứ Bát Tràng",
                price: "100.000 - 1.000.000 đ",
                description: "Đồ gốm thủ công nghệ thuật tinh xảo.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Làng gốm có lịch sử hàng trăm năm, lưu giữ tinh hoa nghề gốm cổ truyền.",
                ingredients: "Đất sét trắng, men gốm tự nhiên.",
                structure: "Được nhào nặn thủ công, nung ở nhiệt độ cao, vẽ các hoa văn đậm chất văn hóa Việt.",
                usage: "Ý nghĩa: Quà lưu niệm mang giá trị văn hóa, nghệ thuật cao, biểu trưng cho sự trường tồn và đôi tay khéo léo của nghệ nhân Hà Thành."
            }
        ],
        tours: [
            { name: "Hanoi City Tour: Lăng Bác - Văn Miếu - Phố Cổ (1 ngày)", price: "650.000 VNĐ/khách", description: "Khám phá các di tích lịch sử tiêu biểu của Hà Nội." },
            { name: "Tour tham quan Làng gốm Bát Tràng - Làng lụa Vạn Phúc", price: "500.000 VNĐ/khách", description: "Tìm hiểu các làng nghề truyền thống lâu đời." },
            { name: "Food Tour Phố Cổ & xem múa rối nước", price: "700.000 VNĐ/khách", description: "Thưởng thức tinh hoa ẩm thực đường phố và nghệ thuật dân gian." },
            { name: "Tour nghỉ dưỡng Vườn quốc gia Ba Vì - Làng văn hóa các dân tộc", price: "900.000 VNĐ/khách", description: "Khám phá thiên nhiên và văn hóa các dân tộc Việt Nam." },
            { name: "Tour xe bus 2 tầng ngắm Hà Nội đêm", price: "150.000 VNĐ/khách", description: "Trải nghiệm ngắm phố phường Hà Nội lung linh từ trên cao." }
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
        description: `<strong>HỒ CHÍ MINH - Thành Phố Không Ngủ</strong><br><br>
        <strong>Khám Phá:</strong> Hồ Chí Minh (Sài Gòn) là trung tâm kinh tế, văn hóa năng động nhất cả nước. Con người nơi đây phóng khoáng, cởi mở và dễ tiếp nhận cái mới. Sài Gòn là sự giao thoa văn hóa đa dạng (Hoa, Chăm, Khmer, Âu, Mỹ...). Những địa điểm không thể bỏ qua gồm: Chợ Bến Thành, Dinh Độc Lập, Nhà thờ Đức Bà, Địa đạo Củ Chi và các khu phố ẩm thực sầm uất.`,
        fashion: [
            { 
                name: "Áo dài Tân thời (Áo dài Sài Gòn)", 
                price: "600.000 - 3.000.000 đ", 
                description: "Áo dài mang vẻ đẹp hiện đại, thanh lịch của phụ nữ Sài Gòn.",
                imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?q=80&w=400&auto=format&fit=crop",
                history: "Từ những năm 1930 (áo dài Lemur) đến những năm 1960 với sự ra đời của áo dài tay raglan tại tiệm may Dung (Đakao, Sài Gòn), giúp áo dài ôm sát đường cong mà không bị nhăn nách.",
                ingredients: "May đo thủ công từ các chất liệu như lụa, voan, gấm.",
                structure: "Đường cắt cúp tinh tế, tà dài, cổ cao hoặc cổ thuyền để tạo sự thoải mái và quyến rũ.",
                usage: "Ý nghĩa: Tôn vinh nét đẹp hiện đại, thanh lịch nhưng vẫn quyến rũ của phụ nữ Việt Nam, là biểu tượng thời trang vươn tầm quốc tế."
            }
        ],
        food: [
            { 
                name: "Cơm tấm Sài Gòn", 
                price: "30.000 - 80.000 đ", 
                description: "Món ăn đặc trưng của Sài Gòn với sườn nướng than hoa thơm lừng.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Ban đầu là món ăn sáng của tầng lớp lao động nghèo (dùng gạo nứt vỡ). Sau này được thêm thắt nhiều nguyên liệu và trở thành đặc sản nổi tiếng.",
                ingredients: "Gạo tấm, sườn heo, bì heo, chả trứng, trứng ốp la, mỡ hành, nước mắm.",
                structure: "Gạo tấm đồ chín tới. Đồ ăn kèm gồm: sườn nướng than hoa (ướp mật ong, sả), bì cuốn, chả trứng, trứng ốp la, mỡ hành và chén nước mắm kẹo chua ngọt.",
                usage: "Ý nghĩa: Tượng trưng cho sự sáng tạo, bình dân nhưng lại rất phong phú, mang đậm nhịp sống hối hả nhưng thực dụng của người Sài Gòn."
            },
            {
                name: "Bánh mì Sài Gòn",
                price: "20.000 - 60.000 đ",
                description: "Ổ bánh mì giòn rụm với nhân đa dạng, ngon nức tiếng thế giới.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Có nguồn gốc từ bánh mì Baguette của Pháp, được biến tấu phù hợp với khẩu vị người Việt.",
                ingredients: "Bánh mì, chả lụa, thịt nguội, pate, bơ, dưa leo, ngò rí, đồ chua.",
                structure: "Bánh mì nướng giòn xẻ dọc, phết bơ và pate, nhồi các loại thịt, chả, thêm rau dưa và chút xíu nước tương hay tương ớt.",
                usage: "Ý nghĩa: Biểu tượng cho sự giao thoa văn hóa ẩm thực nhanh gọn, tiện lợi và hương vị bùng nổ, phù hợp với nhịp sống năng động."
            }
        ],
        souvenirs: [
            { 
                name: "Cà phê phin Sài Gòn", 
                price: "100.000 - 300.000 đ", 
                description: "Cà phê đậm đà bản sắc văn hóa vỉa hè Sài Gòn.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Cà phê theo chân người Pháp vào Sài Gòn và tạo nên 'văn hóa cà phê bệt/cà phê vợt'.",
                ingredients: "Hạt cà phê Robusta/Arabica rang xay mộc.",
                structure: "Pha qua chiếc phin nhôm truyền thống, chắt từng giọt đắng ngắt, thêm chút sữa đặc ngọt ngào và đá lạnh xua tan nắng nóng.",
                usage: "Lịch sử & Ý nghĩa: Tặng cà phê là trao tặng sự tỉnh táo, sự kết nối bạn bè và văn hóa hè phố đặc trưng của Sài Gòn."
            },
            {
                name: "Đồ thủ công mỹ nghệ sơn mài",
                price: "300.000 - 2.000.000 đ",
                description: "Nghệ thuật sơn mài tinh xảo đậm chất Á Đông.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Nghề thủ công đòi hỏi sự kiên nhẫn và tinh tế cao.",
                ingredients: "Nhựa cây sơn, gỗ, vỏ trai, vàng lá, bạc lá.",
                structure: "Nhiều lớp sơn được phủ lên, mài nhẵn, cẩn vỏ trứng hoặc trai tạo thành các bức tranh, hộp quà đẹp mắt.",
                usage: "Ý nghĩa: Thể hiện sự tinh hoa của đôi bàn tay người thợ thủ công, mang giá trị thẩm mỹ và trang trí cao."
            }
        ],
        tours: [
            { name: "City Tour khám phá Sài Gòn lịch sử (Nửa ngày)", price: "450.000 VNĐ/khách", description: "Khám phá các công trình kiến trúc vượt thời gian của trung tâm Sài Gòn." },
            { name: "Tour khám phá Địa đạo Củ Chi (Nửa ngày)", price: "550.000 VNĐ/khách", description: "Trải nghiệm hệ thống địa đạo lịch sử vang bóng một thời." },
            { name: "Tour sinh thái rừng ngập mặn Cần Giờ - Đảo Khỉ", price: "900.000 VNĐ/khách", description: "Trở về với thiên nhiên ngập mặn hoang dã ngay sát thành phố." },
            { name: "Saigon Food Tour bằng xe máy về đêm", price: "800.000 VNĐ/khách", description: "Vi vu ngõ hẻm thưởng thức trọn vẹn ẩm thực đường phố nhộn nhịp." },
            { name: "Tour du ngoạn ăn tối trên sông Sài Gòn (Tàu cao cấp)", price: "1.200.000 VNĐ/khách", description: "Tận hưởng bữa tối lãng mạn ngắm thành phố lên đèn từ mặt sông." }
        ]
    },
    "Cần Thơ": {
        description: `<strong>CẦN THƠ - Đô Thị Sông Nước Miền Tây</strong><br><br>
        <strong>Khám Phá:</strong> Cần Thơ là trái tim của Đồng bằng sông Cửu Long. Nơi đây mang đậm dấu ấn văn hóa miệt vườn, sông nước với những con người miền Tây "hào sảng", chất phác và vô cùng mến khách. Phong tục tập quán gắn liền với những phiên chợ nổi trên sông từ tờ mờ sáng, di chuyển chủ yếu bằng ghe xuồng. Đến đây, bạn sẽ được khám phá Chợ nổi Cái Răng, Bến Ninh Kiều, Cồn Sơn và những vườn trái cây trĩu quả quanh năm.`,
        fashion: [
            { 
                name: "Áo bà ba và khăn rằn", 
                price: "150.000 - 500.000 đ", 
                description: "Trang phục truyền thống mộc mạc của người miền Tây.",
                imageUrl: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=400&auto=format&fit=crop",
                history: "Xuất hiện từ thế kỷ 19, được cách tân từ áo ngũ thân để phù hợp với việc lao động vùng sông nước.",
                ingredients: "Thường được may bằng các loại vải mềm, nhẹ, mau khô như lụa, gấm hoặc nilon.",
                structure: "Áo có cổ xẻ giữa, cài cúc, hai tà rộng và hai túi to phía trước để đựng đồ.",
                usage: "Ý nghĩa: Tượng trưng cho vẻ đẹp mộc mạc, dịu dàng và sự tần tảo của người phụ nữ Nam Bộ."
            }
        ],
        food: [
            { 
                name: "Lẩu mắm miền Tây", 
                price: "150.000 - 400.000 đ", 
                description: "Đặc sản lẩu đậm đà hương vị sông nước.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Lẩu mắm ra đời từ thói quen ủ cá làm mắm để dự trữ mùa nước nổi của người dân Nam Bộ.",
                ingredients: "Nước lẩu nấu từ mắm cá linh, cá sặc chắt lọc kỹ. Ăn kèm hơn 30 loại rau rừng, rau vườn (bông súng, điên điển, rau đắng) và các loại tôm, mực, cá lóc, thịt quay.",
                structure: "Nước dùng được nấu sôi, nhúng các loại thịt cá và hải sản, sau đó ăn kèm với bún tươi và các loại rau đặc trưng miền Tây.",
                usage: "Ý nghĩa: Thể hiện sự trù phú của thiên nhiên và tinh thần dung hợp văn hóa ẩm thực Khơ-me, Chăm và Việt."
            },
            {
                name: "Bánh xèo miền Tây",
                price: "30.000 - 80.000 đ",
                description: "Bánh xèo vàng ươm, giòn rụm với nhân tôm thịt đậm đà.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Là món ăn truyền thống dân dã, thường xuất hiện trong các dịp sum họp gia đình hoặc đãi khách.",
                ingredients: "Bột gạo, nước cốt dừa, bột nghệ, tôm, thịt ba chỉ, giá đỗ, đậu xanh.",
                structure: "Tráng lớp bột mỏng trên chảo lớn nóng già, cho nhân vào giữa rồi gập đôi khi vỏ bánh vàng giòn.",
                usage: "Ý nghĩa: Món ăn mang tính cộng đồng cao, thường gói cùng nhiều loại rau sống thể hiện sự gắn kết và trù phú của vườn tược."
            }
        ],
        souvenirs: [
            { 
                name: "Bánh tét lá cẩm gia tộc họ Huỳnh", 
                price: "100.000 - 200.000 đ", 
                description: "Đặc sản bánh tét màu tím cực kỳ đẹp mắt và ngon miệng.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Do nghệ nhân Huỳnh Thị Trọng sáng tạo ra vào thập niên 60.",
                ingredients: "Gạo nếp, nước cốt dừa, lá cẩm, nhân trứng muối, thịt mỡ, đậu xanh.",
                structure: "Nếp được xào với nước lá cẩm tạo màu tím tự nhiên, gói chặt trong lá chuối cùng với nhân thập cẩm đẫm vị, sau đó luộc chín.",
                usage: "Lịch sử & Ý nghĩa: Nó mang ý nghĩa cho sự sung túc, đoàn viên trong các dịp lễ Tết, là món quà biếu trân quý mang đậm hương vị miền Tây."
            }
        ],
        tours: [
            { name: "Tour Chợ nổi Cái Răng - Lò hủ tiếu truyền thống (Nửa ngày)", price: "350.000 VNĐ/khách", description: "Khám phá chợ nổi từ sáng sớm và xem cách làm hủ tiếu." },
            { name: "Tour sinh thái miệt vườn Cồn Sơn - Xem cá lóc bay", price: "500.000 VNĐ/khách", description: "Trải nghiệm sinh thái tại Cồn Sơn và tiết mục cá lóc bay độc đáo." },
            { name: "Tour tham quan Nhà cổ Bình Thủy - Vườn cò Bằng Lăng", price: "600.000 VNĐ/khách", description: "Tham quan kiến trúc cổ và khu sinh thái thiên nhiên." },
            { name: "Tour du thuyền sông Hậu ngắm hoàng hôn & ăn tối", price: "850.000 VNĐ/khách", description: "Tận hưởng không khí lãng mạn trên sông Hậu về đêm." },
            { name: "Tour trải nghiệm làm nông dân miền Tây (1 ngày)", price: "700.000 VNĐ/khách", description: "Một ngày hóa thân làm nông dân: tát mương bắt cá, hái trái cây." }
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
        description: `<strong>THANH HÓA - Vùng Đất Địa Linh Nhân Kiệt</strong><br><br>
        <strong>Khám Phá:</strong> Thanh Hóa là dải đất Bắc Trung Bộ, nơi giao thoa giữa núi rừng và biển cả. Người dân xứ Thanh nổi tiếng cần cù, chịu khó và có truyền thống hiếu học, yêu nước. Nơi đây có lịch sử hào hùng với Thành Nhà Hồ (Di sản thế giới), Lam Kinh, cùng cảnh quan tuyệt đẹp như bãi biển Sầm Sơn, khu bảo tồn Pù Luông.`,
        fashion: [
            { 
                name: "Trang phục dân tộc Thái", 
                price: "500.000 - 2.000.000 đ", 
                description: "Áo cóm bó sát và khăn piêu truyền thống duyên dáng.",
                imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?q=80&w=400&auto=format&fit=crop",
                history: "Trang phục Thái ở Thanh Hóa mang nét đặc trưng của nhóm Thái Đen và Thái Trắng sinh sống lâu đời ở vùng núi Pù Luông.",
                ingredients: "Vải dệt thủ công nhuộm chàm, các khuy bạc, chỉ thêu nhiều màu.",
                structure: "Phụ nữ Thái mặc áo cóm (ngắn) bó sát người, hàng khuy bạc hình con bướm, kết hợp váy ống màu đen dài chấm gót, đầu đội khăn piêu thêu rực rỡ.",
                usage: "Ý nghĩa: Thể hiện sự eo thót, duyên dáng của phụ nữ Thái, chiếc khăn piêu là tình cảm, là tín vật đính ước của lứa đôi."
            },
            {
                name: "Áo tứ thân nâu sòng",
                price: "300.000 - 800.000 đ",
                description: "Trang phục lao động của phụ nữ đồng bằng xưa.",
                imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?q=80&w=400&auto=format&fit=crop",
                history: "Gắn liền với hình ảnh người nông dân ở đồng bằng Bắc Bộ và Bắc Trung Bộ.",
                ingredients: "Vải thô, đũi nhuộm màu nâu sòng (chiết xuất từ củ nâu).",
                structure: "Áo khoác ngoài có 4 tà, mặc cùng yếm bên trong và thắt lưng lụa mộc mạc.",
                usage: "Ý nghĩa: Thể hiện đức tính cần cù, mộc mạc, lam lũ của phụ nữ nông thôn."
            }
        ],
        food: [
            { 
                name: "Nem chua Thanh Hóa", 
                price: "50.000 - 150.000 đ/chục", 
                description: "Món nem lên men tự nhiên chua cay mặn ngọt nức tiếng xứ Thanh.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Xuất hiện từ thời xa xưa như một cách ủ chín thịt để bảo quản lâu ngày, sau này trở thành đặc sản tiến vua và dùng trong mâm cỗ.",
                ingredients: "Thịt nạc mông heo, bì lợn, thính gạo rang, tỏi, ớt, lá đinh lăng, lá chuối.",
                structure: "Thịt nạc giã nhuyễn, trộn cùng bì lợn thái chỉ, thính gạo. Gói bằng lá chuối, ép kèm tỏi, ớt, lá đinh lăng, lên men tự nhiên trong 3-5 ngày.",
                usage: "Ý nghĩa: Mang hương vị hòa quyện, là món quà quê ý nghĩa nhất mọi du khách đều mua về khi ngang qua xứ Thanh, thể hiện sự khéo léo của người làm nêm nếm gia vị."
            }
        ],
        souvenirs: [
            { 
                name: "Đồ đá mỹ nghệ Làng Nhồi", 
                price: "200.000 - 2.000.000 đ", 
                description: "Tượng, đồ trang trí tinh xảo điêu khắc từ đá Làng Nhồi.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Đá Nhồi nổi tiếng từ thời Lý-Trần, cung cấp đá để tạc tượng, bia ký cho triều đình.",
                ingredients: "Đá tự nhiên lấy từ núi Nhồi.",
                structure: "Đục đẽo, chạm khắc thủ công bởi bàn tay khéo léo tạo hình các linh vật, tượng nghệ thuật.",
                usage: "Lịch sử & Ý nghĩa: Những bức tượng, đồ chạm khắc mang giá trị nghệ thuật cao, biểu tượng cho sự trường tồn và tài hoa của nghệ nhân xứ Thanh."
            },
            {
                name: "Chè lam Phủ Quảng",
                price: "50.000 - 150.000 đ/hộp",
                description: "Bánh ngọt truyền thống thơm mùi gừng và dẻo của nếp.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Có nguồn gốc từ huyện Vĩnh Lộc (Phủ Quảng xưa), là món ăn chống đói và giữ ấm bụng cho nghĩa quân Lam Sơn.",
                ingredients: "Bột gạo nếp rang, mật mía, mạch nha, gừng tươi, lạc rang.",
                structure: "Mật mía được cô đặc, trộn cùng bột nếp và gia vị, nhào mịn rồi cắt miếng hình chữ nhật.",
                usage: "Ý nghĩa: Gói trọn sự ấm áp, ngọt ngào, món quà dân dã thấm đượm tình quê."
            }
        ],
        tours: [
            { name: "Tour nghỉ dưỡng biển Sầm Sơn - Hòn Trống Mái (2N1Đ)", price: "1.500.000 VNĐ/khách", description: "Hòa mình vào làn sóng biển xanh mát và chiêm ngưỡng danh thắng Hòn Trống Mái." },
            { name: "Tour sinh thái Pù Luông - Mùa lúa chín (2N1Đ)", price: "2.200.000 VNĐ/khách", description: "Trải nghiệm không gian hoang sơ, yên bình bên những thửa ruộng bậc thang kỳ vĩ." },
            { name: "Tour khám phá Di sản Thành Nhà Hồ - Suối cá thần Cẩm Lương", price: "800.000 VNĐ/khách", description: "Tham quan di sản thế giới độc đáo và suối cá linh thiêng." },
            { name: "Tour du lịch về nguồn Khu di tích lịch sử Lam Kinh", price: "600.000 VNĐ/khách", description: "Tìm hiểu hào khí Lam Sơn và những vị vua anh minh thời Hậu Lê." },
            { name: "Tour khám phá Vườn quốc gia Bến En (Hạ Long trên cạn)", price: "900.000 VNĐ/khách", description: "Du ngoạn hồ tự nhiên rộng lớn bao quanh là rừng xanh bạt ngàn." }
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
        description: `<strong>KON TUM - Đại Ngàn Huyền Bí</strong><br><br>
        <strong>Khám Phá:</strong> Kon Tum mang vẻ đẹp hoang sơ của Tây Nguyên với những cánh rừng bạt ngàn. Đây là nơi sinh sống của các dân tộc Ba Na, Gia Rai, Xơ Đăng... Con người sống chân chất, gắn bó với đại ngàn. Phong tục nổi bật là lễ hội cồng chiêng, sinh hoạt cộng đồng tại Nhà Rông. Các điểm du lịch: Măng Đen, Ngã ba Đông Dương, Nhà thờ Gỗ Kon Tum.`,
        fashion: [
            { 
                name: "Vải Thổ cẩm Tây Nguyên", 
                price: "500.000 - 2.000.000 đ", 
                description: "Vải dệt tay với các hoa văn biểu tượng của núi rừng.",
                imageUrl: "https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?q=80&w=400&auto=format&fit=crop",
                history: "Nghề dệt thổ cẩm truyền đời từ các thế hệ phụ nữ dân tộc thiểu số, là thước đo sự khéo léo của người con gái trước khi lấy chồng.",
                ingredients: "Dệt từ sợi bông tự nhiên. Nhuộm màu từ rễ cây, vỏ cây, lá rừng (chủ yếu màu đen, đỏ, vàng).",
                structure: "Dệt thủ công bằng khung cửi gỗ, tạo các hoa văn dệt nổi tỉ mỉ thành từng dải màu tương phản mạnh mẽ.",
                usage: "Ý nghĩa: Mỗi hoa văn thể hiện thế giới quan về thiên nhiên, thần linh, sự giao hòa giữa đất và trời của người Tây Nguyên."
            }
        ],
        food: [
            { 
                name: "Gỏi lá Kon Tum", 
                price: "150.000 - 300.000 đ", 
                description: "Món cuốn độc đáo kết hợp từ hàng chục loại lá rừng thanh mát.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Gỏi lá bắt nguồn từ người bản địa tận dụng nguồn lá rừng phong phú làm món ăn sống thanh mát, giải nhiệt.",
                ingredients: "Khoảng 40-50 loại lá (đinh lăng, sung, mơ, hồng ngọc...), thịt ba chỉ luộc, tôm rang, bì lợn.",
                structure: "Lá được cuốn thành hình phễu, cho thịt tôm vào và chấm loại nước cốt đặc biệt làm từ hèm rượu, trứng, thịt băm.",
                usage: "Ý nghĩa: Tinh hoa của núi rừng, là bài thuốc tự nhiên tốt cho sức khỏe và thể hiện sự hiếu khách khi thết đãi bạn bè."
            },
            {
                name: "Gà nướng Măng Đen",
                price: "250.000 - 400.000 đ",
                description: "Gà đồi nướng than hoa thơm nức mũi ăn cùng cơm lam.",
                imageUrl: "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop",
                history: "Là món ăn truyền thống của người Mơ Nâm vùng Măng Đen.",
                ingredients: "Gà bản địa, lá tiêu rừng, sả, hành tỏi, mật ong rừng.",
                structure: "Gà được ướp với các loại lá rễ rùng, kẹp vào thanh tre nướng xém trên than củi cho đến khi da vàng rộm.",
                usage: "Ý nghĩa: Bữa ăn thấm đượm hương vị đại ngàn, sưởi ấm trong cái se lạnh của cao nguyên."
            }
        ],
        souvenirs: [
            { 
                name: "Rượu cần", 
                price: "300.000 - 1.000.000 đ/chóe", 
                description: "Thức uống linh thiêng của đồng bào Tây Nguyên.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Gắn bó với đời sống tín ngưỡng từ ngàn đời nay, chỉ được đem ra tiếp khách hoặc trong các lễ lớn.",
                ingredients: "Men lá rừng, nếp nương, bo bo, sắn, ủ trong các chóe đất nung.",
                structure: "Lên men tự nhiên không qua chưng cất, khi uống dùng những chiếc cần trúc dài cắm thẳng vào chóe.",
                usage: "Lịch sử & Ý nghĩa: Rượu cần là thức uống linh thiêng, không thể thiếu trong các dịp lễ tết, tế thần. Tặng rượu cần mang ý nghĩa chúc phúc, cầu mong sức khỏe và sự đoàn kết anh em."
            },
            {
                name: "Cà phê Đắk Hà",
                price: "150.000 - 300.000 đ/gói",
                description: "Đặc sản cà phê nguyên chất Kon Tum vang danh.",
                imageUrl: "https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop",
                history: "Vùng đất Đắk Hà có thổ nhưỡng vàng để cây cà phê phát triển hoàn hảo.",
                ingredients: "Hạt cà phê Robusta, Arabica nguyên chất.",
                structure: "Rang xay thủ công hoặc công nghệ cao giữ lại mùi thơm tự nhiên và vị đậm đà không pha tạp.",
                usage: "Ý nghĩa: Đánh thức sự tỉnh táo, món quà của sự chia sẻ từ sức lao động cần cù của nông dân vùng cao."
            }
        ],
        tours: [
            { name: "Tour săn mây Măng Đen - Nàng thơ đại ngàn (2N1Đ)", price: "1.800.000 VNĐ/khách", description: "Hòa mình vào thị trấn Măng Đen se lạnh và những thác nước hoang sơ." },
            { name: "Tour tham quan Nhà thờ Gỗ - Cầu treo Kon Klor (Nửa ngày)", price: "300.000 VNĐ/khách", description: "Khám phá kiến trúc độc đáo bằng gỗ và cây cầu vắt ngang sông Đăk Bla." },
            { name: "Check-in Ngã ba Đông Dương (Việt - Lào - Campuchia)", price: "750.000 VNĐ/khách", description: "Chạm tay vào cột mốc biên giới thiêng liêng của ba nước Đông Dương." },
            { name: "Tour Trekking khám phá vườn quốc gia Chư Mom Ray", price: "2.500.000 VNĐ/khách", description: "Hành trình thám hiểm rừng rậm nhiệt đới với đa dạng sinh học phong phú." },
            { name: "Tour trải nghiệm giao lưu Cồng Chiêng và đốt lửa trại tại làng Kon K'tu", price: "600.000 VNĐ/khách", description: "Giao lưu văn hóa bản địa, uống rượu cần bên bếp lửa bập bùng." }
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

    // Modal close events
    const modal = document.getElementById('detailModal');
    const closeBtn = document.getElementById('closeModal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
    }
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }
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
        displayProducts('fashionProducts', [], 'fashion');
        displayProducts('foodProducts', [], 'food');
        displayProducts('souvenirsProducts', [], 'souvenirs');
        displayTours('toursProducts', []);
        return;
    }

    document.getElementById('cityName').textContent = cityName;
    document.getElementById('cityDescription').innerHTML = cityData.description;

    // Hiển thị sản phẩm trang phục
    displayProducts('fashionProducts', cityData.fashion, 'fashion');
    displayProducts('foodProducts', cityData.food, 'food');
    displayProducts('souvenirsProducts', cityData.souvenirs, 'souvenirs');
    displayTours('toursProducts', cityData.tours);
}

function displayProducts(elementId, products, categoryType) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    if (!products || !products.length) {
        container.innerHTML = '<p class="detail-text">Chưa có dữ liệu cho mục này.</p>';
        return;
    }
    
    // Default image URLs based on category
    const defaultImages = {
        'fashion': 'https://images.unsplash.com/photo-1550614000-4b95d4ed1ab5?q=80&w=400&auto=format&fit=crop',
        'food': 'https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=400&auto=format&fit=crop',
        'souvenirs': 'https://images.unsplash.com/photo-1605389649576-905a5a730c49?q=80&w=400&auto=format&fit=crop',
        'tours': 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop'
    };
    const fallbackImage = defaultImages[categoryType] || defaultImages['tours'];

    products.forEach(product => {
        const itemImageUrl = product.imageUrl || fallbackImage;
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${itemImageUrl}" alt="${product.name}" class="product-image">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price}</div>
        `;
        card.addEventListener('click', () => openModal(product, itemImageUrl));
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
    
    const fallbackImage = 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=400&auto=format&fit=crop';

    tours.forEach(tour => {
        const itemImageUrl = tour.imageUrl || fallbackImage;
        const card = document.createElement('div');
        card.classList.add('tour-card');
        card.innerHTML = `
            <img src="${itemImageUrl}" alt="${tour.name}" class="product-image">
            <h3>${tour.name}</h3>
            <p>${tour.description}</p>
            <div class="tour-price">${tour.price}</div>
        `;
        card.addEventListener('click', () => openModal(tour, itemImageUrl));
        container.appendChild(card);
    });
}

function openModal(item, imageUrl) {
    const modal = document.getElementById('detailModal');
    if(!modal) return;
    document.getElementById('modalImage').src = imageUrl;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalPrice').textContent = item.price;
    document.getElementById('modalDescription').textContent = item.description;
    
    // Cập nhật các trường mở rộng
    document.getElementById('modalHistory').textContent = item.history || 'Chưa có thông tin về lịch sử phát triển.';
    document.getElementById('modalIngredients').textContent = item.ingredients || 'Chưa có thông tin về thành phần/nguyên liệu.';
    document.getElementById('modalStructure').textContent = item.structure || 'Chưa có thông tin về cấu tạo/cách làm.';
    document.getElementById('modalUsage').textContent = item.usage || 'Chưa có thông tin về tác dụng/ý nghĩa.';

    // Gán sự kiện mua hàng
    const addToCartBtn = document.getElementById('addToCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    
    // Clone and replace to remove old event listeners
    const newAddBtn = addToCartBtn.cloneNode(true);
    const newBuyBtn = buyNowBtn.cloneNode(true);
    addToCartBtn.parentNode.replaceChild(newAddBtn, addToCartBtn);
    buyNowBtn.parentNode.replaceChild(newBuyBtn, buyNowBtn);
    
    const cartItem = {
        name: item.name,
        price: item.price,
        imageUrl: imageUrl
    };

    newAddBtn.addEventListener('click', () => {
        if(typeof addToCart === 'function') addToCart(cartItem);
    });
    
    newBuyBtn.addEventListener('click', () => {
        if(typeof buyNow === 'function') buyNow(cartItem);
    });

    modal.classList.remove('hidden');
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
