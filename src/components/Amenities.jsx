import { motion } from 'framer-motion'

const Amenities = () => {
  const amenitiesNoiKhu = [
    { number: '①', name: 'Phòng chờ rộng rãi' },
    { number: '②', name: 'Khu tiếp nhận – hướng dẫn bệnh nhân' },
    { number: '③', name: 'Phòng khám Nội – Ngoại – Nhi' },
    { number: '④', name: 'Phòng nội soi' },
    { number: '⑤', name: 'Phòng siêu âm 2D/4D' },
    { number: '⑥', name: 'Phòng xét nghiệm nhanh' },
    { number: '⑦', name: 'Phòng cấp cứu – xử lý vết thương' },
    { number: '⑧', name: 'Phòng tiêm chủng' },
    { number: '⑨', name: 'Khu nhà thuốc chuẩn GPP' },
    { number: '⑩', name: 'Phòng tư vấn riêng tư' },
    { number: '⑪', name: 'Khu vực vệ sinh sạch sẽ' },
    { number: '⑫', name: 'Bãi giữ xe an toàn' },
  ]

  const amenitiesNgoaiKhuCol1 = [
  { number: '①', name: 'Siêu âm tổng quát – sản phụ khoa – 4D' },
  { number: '③', name: 'Xét nghiệm máu sinh hóa – huyết học – miễn dịch' },
  { number: '⑤', name: 'Điện tâm đồ – tầm soát bệnh tim mạch' },
  { number: '⑦', name: 'Chụp X-Quang kỹ thuật số' },
  { number: '⑨', name: 'Nội soi tai mũi họng – xử lý dị vật' },
  { number: '⑪', name: 'Tiểu phẫu ngoại khoa: trĩ, u mềm, u mỡ, áp-xe' },
]


const amenitiesNgoaiKhuCol2 = [
  { number: '②', name: 'Tầm soát ung thư sớm (gan, phổi, đường tiêu hoá)' },
  { number: '④', name: 'Khám & điều trị bệnh lý dạ dày – đại tràng' },
  { number: '⑥', name: 'Khám sức khỏe tổng quát – định kỳ' },
  { number: '⑧', name: 'Châm cứu – bấm huyệt – PHCN cột sống' },
  { number: '⑩', name: 'Khâu vết thương – xử lý chấn thương phần mềm' },
  { number: '⑫', name: 'Tiêm chủng: cúm, uốn ván, viêm gan, HPV, phế cầu' },
]


  return (
    <motion.section 
      id="amenities" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">
          TIỆN ÍCH VÀ DỊCH VỤ TẠI PHÒNG KHÁM
        </h2>

        {/* Top Section - Nội khu */}  
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left - Image */}
          <div className="glass-card glass-glow glass-float">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="bacsi1.jpg" 
                alt="Tiện ích phòng khám"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Tiện ích nội khu */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-700">Tiện ích trong phòng khám:</h3>
            <div className="grid grid-cols-2 gap-4">
              {amenitiesNoiKhu.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {item.number}
                  </span>
                  <span className="text-gray-700">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Ngoại khu */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Tiện ích ngoại khu */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-teal-700">Dịch vụ kỹ thuật nỗi bật:</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              
              {/* Column 1 */}
              <div className="space-y-4">
                {amenitiesNgoaiKhuCol1.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.number}
                    </span>
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Column 2 */}
              <div className="space-y-4">
                {amenitiesNgoaiKhuCol2.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.number}
                    </span>
                    <span className="text-gray-700 text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>

          {/* Right - Image */}
          <div className="glass-card glass-glow glass-float">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="bacsi2.jpg" 
                alt="Khu vực xung quanh phòng khám"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Amenities
