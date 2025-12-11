import { useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('equipment')

  const tabs = [
    { id: 'equipment', label: 'THIẾT BỊ Y TẾ' },
    { id: 'rooms', label: 'PHÒNG KHÁM' },
    { id: 'other', label: 'KHÁC' },
  ]

  // Images
  const IMG_XRAY = 'may-x-quang.png'
  const IMG_ULTRA = 'may-sieu-am-mau-dc-7.png'
  const IMG_ECG = 'dientim.png'
  const IMG_MICROSCOPE = 'hiển vi.png'
  const IMG_CENTRIFUGE = 'Máy_ly_tâm_12_ống-removebg-preview.png'
  const IMG_IMMUNO = 'Máy_miễn_dịch_Huỳnh_Quang-removebg-preview.png'
  const IMG_ELECTROLYTE = 'Máy_phân_tích_điện_giải-removebg-preview (1).png'
  const IMG_HEMATOLOGY = 'Máy_phân_tích_huyết_học_tự_động-removebg-preview.png'
  const IMG_URINE = 'Máy phân tích nước tiểu.png'
  const IMG_BIOCHEM = 'Máy_phân_tích_sinh_hóa_tự_động-removebg-preview.png'

  const IMG_ROOM = 'giadinh.jpg'
  const IMG_OTHER = 'giadinh.jpg'

  const images = {
    equipment: [
      { id: 'xray', title: 'Máy X-Quang Kỹ Thuật Số', subtitle: 'Hệ thống chụp X-Quang thế hệ mới', src: IMG_XRAY },
      { id: 'ultrasound', title: 'Máy Siêu Âm 4D', subtitle: 'Chẩn đoán hình ảnh chính xác', src: IMG_ULTRA },
      { id: 'ecg', title: 'Máy Điện Tim', subtitle: 'Theo dõi tình trạng tim mạch', src: IMG_ECG },
      { id: 'microscope', title: 'Kính Hiển Vi', subtitle: 'Quan sát mẫu bệnh học chính xác', src: IMG_MICROSCOPE },
      { id: 'centrifuge', title: 'Máy Ly Tâm', subtitle: 'Tách mẫu tốc độ cao – ổn định', src: IMG_CENTRIFUGE },
      { id: 'immuno', title: 'Máy Miễn Dịch Huỳnh Quang', subtitle: 'Phân tích miễn dịch nhanh & chính xác', src: IMG_IMMUNO },
      { id: 'electrolyte', title: 'Máy Phân Tích Điện Giải', subtitle: 'Đo các chỉ số điện giải quan trọng', src: IMG_ELECTROLYTE },
      { id: 'hematology', title: 'Máy Huyết Học Tự Động', subtitle: 'Phân tích công thức máu tự động', src: IMG_HEMATOLOGY },
      { id: 'urine', title: 'Máy Phân Tích Nước Tiểu', subtitle: 'Kết quả xét nghiệm nhanh – chính xác', src: IMG_URINE },
      { id: 'biochem', title: 'Máy Sinh Hóa Tự Động', subtitle: 'Phân tích sinh hóa chuyên sâu', src: IMG_BIOCHEM },
    ],

    rooms: [
      { id: 'clinic-room', title: 'Phòng Khám Chuyên Khoa', subtitle: 'Không gian sạch sẽ – tiêu chuẩn y tế', src: IMG_ROOM }
    ],

    other: [
      { id: 'other-1', title: 'Khu vực tiếp nhận', subtitle: 'Hỗ trợ bệnh nhân nhanh chóng', src: IMG_OTHER }
    ]
  }

  // EQUIPMENT RESPONSIVE
  const renderEquipmentResponsive = () => (
    <>
      {/* MOBILE SLIDE */}
      <div className="md:hidden flex overflow-x-auto gap-5 snap-x snap-mandatory pb-4">
        {images.equipment.map((it) => (
          <div key={it.id} className="snap-center min-w-[80%]">
            <GalleryCard item={it} className="h-72" />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {images.equipment.map((it) => (
          <GalleryCard key={it.id} item={it} className="h-72" />
        ))}
      </div>
    </>
  )

  return (
    <motion.section
      id="gallery"
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center text-teal-600 mb-8">
          THIẾT BỊ & CƠ SỞ VẬT CHẤT
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-teal-600 text-white'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {activeTab === 'equipment' && renderEquipmentResponsive()}

        {/* ROOMS: layout riêng */}
        {activeTab === 'rooms' && (
          <div className="w-full max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="w-full h-[380px] flex items-center justify-center overflow-hidden">
                <img
                  src={images.rooms[0].src}
                  alt={images.rooms[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <p className="text-red-600 text-xl font-bold">{images.rooms[0].title}</p>
                <p className="text-gray-600 text-base mt-1 italic">{images.rooms[0].subtitle}</p>
              </div>
            </div>
          </div>
        )}

        {/* OTHER: layout riêng */}
        {activeTab === 'other' && (
          <div className="w-full max-w-5xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="w-full h-[380px] flex items-center justify-center overflow-hidden">
                <img
                  src={images.other[0].src}
                  alt={images.other[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 text-center">
                <p className="text-red-600 text-xl font-bold">{images.other[0].title}</p>
                <p className="text-gray-600 text-base mt-1 italic">{images.other[0].subtitle}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </motion.section>
  )
}


// =======================================================
// CARD COMPONENT (cho thiết bị y tế)
// =======================================================
const GalleryCard = ({ item, className = '' }) => {
  return (
    <motion.div
      className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl bg-white ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ scale: 1.03 }}
    >

      {/* IMAGE FIXED */}
      <div className="w-full h-48 flex items-center justify-center bg-white overflow-hidden">
        <img
          src={item.src}
          alt={item.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* TEXT */}
      <div className="p-4 text-center">
        <p className="text-teal-600 font-semibold text-base">
          {item.title}
        </p>

        {item.subtitle && (
          <p className="text-gray-600 text-sm mt-1 italic">
            {item.subtitle}
          </p>
        )}
      </div>
    </motion.div>
  )
}

export default Gallery
