import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.')
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.section 
      id="contact" 
      className="py-16 bg-gradient-to-b from-teal-500 to-teal-700 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">THÔNG TIN LIÊN HỆ</h2>
        <p className="text-center text-gray-100 mb-12">Để lại thông tin để được tư vấn miễn phí</p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* Form */}
          <motion.div 
            className="bg-white text-gray-800 p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-teal-700">Đăng ký nhận tư vấn miễn phí</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-teal-500 rounded-lg focus:outline-none focus:border-teal-600"
                    placeholder="Nhập họ tên"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-teal-500 rounded-lg focus:outline-none focus:border-teal-600"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-teal-500 rounded-lg focus:outline-none focus:border-teal-600"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Lời nhắn</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-teal-500 rounded-lg focus:outline-none focus:border-teal-600 resize-none"
                  placeholder="Nội dung cần tư vấn..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-4 rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105"
              >
                GỬI THÔNG TIN
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-teal-700">Thông tin liên hệ</h3>

              <div className="space-y-6">

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Địa chỉ:</h4>
                    <p className="text-gray-700">Thôn Lâm Hòa, Xã Hàm Thuận, Tỉnh Lâm Đồng</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
                    ☎️
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Hotline:</h4>
                    <p className="text-gray-700">+84 39 412 1115</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email:</h4>
                    <p className="text-gray-700">bvdknhanducbt@gmail.com</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-4 justify-center">
              <a href="https://www.facebook.com/profile.php?id=61559445441383" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121L7.773 13.98l-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.954z"/>
                </svg>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                </svg>
              </a>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
