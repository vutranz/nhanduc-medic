import { motion } from 'framer-motion'

const ProjectInfo = () => {
  return (
    <motion.section 
      id="about" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm text-black font-bold mb-2">Giới thiệu phòng khám</h3>

            <h2 className="text-4xl font-bold text-teal-600 mb-6">
              Phòng Khám Đa Khoa Nhân Đức Sài Gòn
            </h2>


            <div className="space-y-4 text-gray-700 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Phòng Khám Đa Khoa Nhân Đức Sài Gòn là cơ sở y tế chất lượng cao,
                được xây dựng với mục tiêu mang đến cho cộng đồng một môi trường
                chăm sóc sức khỏe hiện đại, an toàn và thân thiện. Với đội ngũ bác sĩ
                nhiều kinh nghiệm, chúng tôi luôn hướng đến sự tận tâm, chuyên nghiệp
                và đặt sức khỏe người bệnh làm trọng tâm.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Phòng khám được trang bị hệ thống máy móc và thiết bị chẩn đoán tiên tiến,
                đáp ứng đầy đủ các chuyên khoa như: Nội tổng quát, Nhi khoa, Tai Mũi Họng,
                Da liễu, Sản phụ khoa, Xét nghiệm, Chẩn đoán hình ảnh… đảm bảo mang đến kết
                quả chính xác và nhanh chóng cho người bệnh.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Với không gian thoáng mát, quy trình khám chữa bệnh khoa học và đội ngũ nhân viên
                hỗ trợ tận tình, Nhân Đức Sài Gòn cam kết mang đến trải nghiệm dịch vụ y tế
                chất lượng, an tâm và hiệu quả cho mọi khách hàng.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative glass-card glass-glow glass-float"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/bacsi.jpg"
                alt="Clinic Facility"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default ProjectInfo
