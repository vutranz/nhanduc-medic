import { motion } from 'framer-motion'

const ProjectOverview = () => {
  const details = [
    { label: 'Tên cơ sở:', value: 'Phòng Khám Đa Khoa Nhân Đức Sài Gòn', icon: '⊙' },
    { label: 'Loại hình:', value: 'Phòng khám đa khoa – khám và điều trị tổng quát', icon: '⊙' },
    { label: 'Địa chỉ:', value: 'Thôn Lâm Hòa, Xã Hàm Thuận, Tỉnh Lâm Đồng', icon: '⊙' },
    { label: 'Giấy phép:', value: 'Đạt chuẩn Sở Y Tế – quy trình an toàn Y khoa', icon: '⊙' },
    { label: 'Đội ngũ bác sĩ:', value: 'Chuyên môn cao – giàu kinh nghiệm', icon: '⊙' },
    { label: 'Các chuyên khoa:', value: 'Nội tổng quát, ngoại, nhi, YHCT...', icon: '⊙' },
    { label: 'Thiết bị y tế:', value: 'Siêu âm, xét nghiệm, X-quang kỹ thuật số hiện đại, điện tim...', icon: '⊙' },
    { label: 'Thời gian làm việc:', value: 'Thứ 2 – Thứ 7 • 7:00 – 11:30 & 13:30 - 17:00 CN: 7:00 - 11:30', icon: '⊙' },
    { label: 'Dịch vụ chính:', value: 'Khám BHYT và dịch vụ – tư vấn nhiệt tình', icon: '⊙' },
    { label: 'Tư vấn:', value: 'Hỗ trợ 24/7 – nhận kết quả nhanh chóng', icon: '⊙' },
  ]

  return (
    <motion.section 
      className="relative py-20 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://nhadepgiatot.vn/uploads/auto/pc03tong-the-tien-ich-noi-khu-final-scaled-1699283541.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Box */}
          <motion.div 
            className="bg-black/30 backdrop-blur-sm p-10 rounded-lg border-4 border-teal-400 shadow-2xl glass-glow"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8 text-teal-400">
              TỔNG QUAN PHÒNG KHÁM
            </h2>

            <div className="space-y-4">
              {details.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start gap-4 text-white"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {/* FIX ICON LỆCH — CỐ ĐỊNH KÍCH THƯỚC */}
                  <span className="text-teal-300 w-5 flex justify-center pt-1">
                    {item.icon}
                  </span>

                  <div className="flex-1 leading-relaxed">
                    <span className="font-semibold">{item.label}</span>{' '}
                    <span className="font-normal">{item.value}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </motion.section>
  )
}

export default ProjectOverview
