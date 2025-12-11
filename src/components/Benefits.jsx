import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      title: 'Đội ngũ bác sĩ giàu kinh nghiệm',
      desc: 'Tập hợp các bác sĩ chuyên khoa Nội – Ngoại – Nhi với chuyên môn vững vàng và nhiều năm kinh nghiệm.',
      svg: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14c4.418 0 8-1.79 8-4V7c0-2.21-3.582-4-8-4S4 4.79 4 7v3c0 2.21 3.582 4 8 4z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 17c0-2.21 2.686-4 6-4s6 1.79 6 4v3H6v-3z" />
        </svg>
      ),
    },
    {
      title: 'Dịch vụ tận tâm – chi phí hợp lý',
      desc: 'Chi phí khám chữa bệnh minh bạch, tiết kiệm. Quy trình nhanh chóng – linh hoạt – phù hợp với mọi đối tượng.',
      svg: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: 'Trang thiết bị hiện đại',
      desc: 'Ứng dụng máy móc hiện đại: siêu âm, xét nghiệm, nội soi… giúp chẩn đoán chính xác và điều trị hiệu quả.',
      svg: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H7a2 2 0 00-2 2v2a2 2 0 002 2h2" />
        </svg>
      ),
    },
  ]

  return (
    <motion.section 
      className="py-16 bg-gradient-to-b from-teal-50 to-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="glass-card glass-glow rounded-lg p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {benefit.svg}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Benefits
