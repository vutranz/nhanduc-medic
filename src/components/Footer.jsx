import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900/95 backdrop-blur-lg text-gray-300 py-8 border-t border-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/logonhanduc.png" 
                alt="City Lane Logo" 
                className="h-12 w-auto object-contain filter brightness-0 invert opacity-90"
              />
            </motion.div>
            <p className="text-sm leading-relaxed">
              Phòng khám đa khoa hiện đại, cung cấp dịch vụ chăm sóc sức khỏe toàn diện và an toàn cho mọi gia đình.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Giới thiệu</a></li>
              <li><a href="#location" className="hover:text-blue-400 transition-colors">Vị trí</a></li>
              <li><a href="#amenities" className="hover:text-blue-400 transition-colors">Tiện ích</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Hình ảnh</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-white font-bold mb-4">Giờ làm việc</h3>
            <ul className="space-y-2 text-sm">
              <li>+ Thứ 2 - Thứ 7: Sáng 7:00 - 11:30 & Chiều 13:30 - 17:00</li>
              
              <li>+ Chủ nhật: Sáng 7:00 - 11:30</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; 2025 Phòng Khám Đa Khoa Nhân Đức Sài Gòn. Tất cả các quyền được bảo lưu.</p>
          <p className="mt-2 text-gray-500">Website được phát triển bởi Trần Vũ IT</p>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

