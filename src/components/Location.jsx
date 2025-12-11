import { motion } from 'framer-motion'

const Location = () => {
  const locationBoxes = [
  {
    title: "NHI KHOA",
    doctor: "BS.CKI Lưu Ngọc Lễ",
    specialist: "Khám Nhi",
    mainSpecial: "Sốt – Ho – Viêm phổi – Tiêu chảy – Phát triển trẻ",
    desc: "Khám và điều trị các bệnh lý Nhi khoa: sốt, ho, viêm họng, viêm phổi, tiêu chảy, nhiễm siêu vi, dị ứng; theo dõi phát triển, tư vấn dinh dưỡng và chăm sóc trẻ.",
    image: "bacsi.jpg"
  },
  {
    title: "NGOẠI KHOA",
    doctor: "BS. Dương Duy Đạt",
    specialist: "Ngoại tổng quát",
    mainSpecial: "Tiểu phẫu – Khâu vết thương – Trĩ – Áp xe – U bướu",
    desc: "Thăm khám và xử lý các bệnh lý ngoại khoa: trĩ, áp-xe, u bướu nhỏ, chấn thương phần mềm, khâu vết thương, nhọt – đinh râu, thoát vị nhẹ, thực hiện tiểu phẫu và thủ thuật an toàn.",
    image: "bacsi.jpg"
  },
  {
    title: "YHCT – PHCN",
    doctor: "BS. Trần Ngọc Minh Phương",
    specialist: "Y học cổ truyền – Phục hồi chức năng",
    mainSpecial: "Châm cứu – Bấm huyệt – PHCN cột sống",
    desc: "Điều trị bằng Y học cổ truyền & PHCN: đau lưng, thoái hóa cột sống, đau vai gáy, tê bì tay chân, liệt dây thần kinh, viêm xoang, mất ngủ, giảm đau sau chấn thương.",
    image: "bacsi.jpg"
  },
  {
    title: "NỘI KHOA",
    doctor: "BS. Phạm Văn Thành",
    specialist: "Nội tổng quát",
    mainSpecial: "Tăng huyết áp – Tiểu đường – Dạ dày – Gan mật",
    desc: "Khám và điều trị các bệnh nội khoa người lớn: tăng huyết áp, tiểu đường, rối loạn mỡ máu, đau dạ dày – đại tràng, bệnh gan mật, hen suyễn, viêm phế quản, rối loạn giấc ngủ.",
    image: "bacsi.jpg"
  }
];


  return (
    <motion.section 
      id="location" 
      className="py-16 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-teal-600 mb-6">
              CHUYÊN KHOA TẠI PHÒNG KHÁM
            </h2>

            <p className="text-gray-700 leading-relaxed text-lg">
              Phòng Khám Đa Khoa Nhân Đức Sài Gòn quy tụ đội ngũ bác sĩ giàu kinh nghiệm
              cùng nhiều chuyên khoa khác nhau, nhằm mang đến dịch vụ chăm sóc sức khỏe
              toàn diện, hiện đại và an toàn cho mọi bệnh nhân. Trang thiết bị tiên tiến,
              quy trình nhanh chóng và môi trường chuyên nghiệp luôn đảm bảo sự an tâm
              và hài lòng cho người bệnh.
            </p>
          </motion.div>

          {/* Map */}
          <motion.div
            className="glass-card glass-glow"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.4998354306053!2d108.1309685!3d11.076076400000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31769f003902701f%3A0xed7adb49eacccaef!2zUEjDkk5HIEtIw4FNIMSQQSBLSE9BIE5Iw4JOIMSQ4buoQyBTw4BJIEfDkk4!5e0!3m2!1svi!2s!4v1765333673720!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                loading="lazy"
                title="Vị trí phòng khám"
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Mobile Slider */}
        <div className="
          md:grid md:grid-cols-2 gap-6
          flex md:flex-none overflow-x-auto scroll-smooth
          snap-x snap-mandatory pb-4
          space-x-5 md:space-x-0
        ">
          {locationBoxes.map((item, index) => (
            <motion.div 
              key={index} 
              className="
                bg-white rounded-xl overflow-hidden shadow-lg glass-card glass-glow
                snap-center min-w-[80%] md:min-w-0
              "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >

              {/* Image */}
              <div className="w-full h-65 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Header */}
              <div className="bg-teal-600 text-white px-6 py-4 flex flex-col items-center justify-center gap-2 text-center">
                <h3 className="text-xl font-bold uppercase">{item.title}</h3>
              </div>

              {/* Description */}
              <div className="p-6 space-y-2">
                <p className="text-gray-900 font-semibold text-lg">{item.doctor}</p>
                {/* <p className="text-gray-600 text-sm">Chuyên khoa: {item.specialist}</p>
                <p className="text-gray-600 text-sm">Chuyên môn chính: {item.mainSpecial}</p> */}
                <p className="text-gray-700 leading-relaxed mt-2">{item.desc}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
}

export default Location;
