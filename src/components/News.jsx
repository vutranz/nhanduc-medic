import { motion } from 'framer-motion'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Lịch tiêm chủng vắc xin tháng 10',
      excerpt: 'Cập nhật lịch tiêm chủng, các loại vắc xin mới và khuyến cáo cho trẻ em – người lớn trong tháng 10...',
      date: '15/10/2025',
      image: 'giadinh.jpg',
    },
    {
      id: 2,
      title: 'Khám Y học cổ truyền – Giảm đau an toàn',
      excerpt: 'Phòng khám triển khai các dịch vụ châm cứu, bấm huyệt, xoa bóp trị liệu giúp cải thiện tình trạng đau nhức...',
      date: '1/1/2025',
      image: 'YHCT.jpg',
    },
    {
      id: 3,
      title: 'Thông báo tiếp nhận khám BHYT',
      excerpt: 'Phòng khám chính thức tiếp nhận khám chữa bệnh BHYT theo quy định, hỗ trợ người dân chi phí điều trị...',
      date: '05/10/2024',
      image: 'tiepnhanbhyt.jpg',
    },
    {
      id: 4,
      title: 'Gói tầm soát ung thư – Ưu đãi tháng 10',
      excerpt: 'Tầm soát ung thư định kỳ giúp phát hiện sớm và tăng hiệu quả điều trị. Giảm giá áp dụng trong tháng này...',
      date: '1/10/2024',
      image: 'ungthu.jpg',
    },
  ]

  return (
    <motion.section 
      id="news" 
      className="py-16 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center text-teal-600 mb-12">
          TIN TỨC Y TẾ
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-card glass-glow rounded-lg overflow-hidden group cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 w-full overflow-hidden flex-shrink-0 bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>

                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                  {item.excerpt}
                </p>

                <button className="text-teal-600 font-medium hover:text-teal-700 flex items-center gap-2 mt-auto">
                  Đọc thêm
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default News
