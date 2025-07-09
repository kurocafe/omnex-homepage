'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    business: '',
    country: '',
    industry: '',
    category: '',
    experience: '',
    timeframe: '',
    message: '',
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    let fieldValue: string | boolean = value;
    if (type === 'checkbox' && 'checked' in e.target) {
      fieldValue = (e.target as HTMLInputElement).checked;
    }
    setFormData(prev => ({
      ...prev,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company || !formData.business || !formData.country || !formData.message || !formData.agreed) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("送信データ:", formData);
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('送信完了しました！');
    } else {
      alert('送信に失敗しちゃった💦');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl w-full text-black bg-gray-200 p-6 rounded-xl shadow-md">
      <input name="name" placeholder="Name*" required className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="email" type="email" placeholder="Email*" required className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="phone" placeholder="Phone" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="company" placeholder="Company Name*" className="w-full p-2 border rounded" onChange={handleChange} />

      <select name="business" required className="w-full p-2 border rounded" onChange={handleChange}>
        <option value="">What best describes your business*</option>
        <option value="manufacturer">Manufacturer looking to enter Japan</option>
        <option value="brand">Brand looking to enter Japan</option>
        <option value="company">Company looking to source from Japan</option>
        <option value="japanese">Japanese company looking to source products internationally</option>
        <option value="other">Other business type</option>
        {/* 他にも選択肢追加してOK */}
      </select>

      {/* <select name="country" required className="w-full p-2 border rounded" onChange={handleChange}>
        <option value="">Country of Origin*</option>
        <option value="Japan">Japan</option>
        <option value="USA">USA</option> */}
      {/* 必要に応じて追加してね！ */}
      {/* </select> */}

      <input name="country" placeholder='Country of Origin*' required className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="industry" placeholder="Industry" className="w-full p-2 border rounded" onChange={handleChange} />
      <input name="category" placeholder="Product Category" className="w-full p-2 border rounded" onChange={handleChange} />

      <div className="space-y-1">
        <label className="block font-semibold">Level of experience in the Japanese market</label>
        <label><input type="radio" name="experience" value="none" onChange={handleChange} /> No experience yet</label><br />
        <label><input type="radio" name="experience" value="some" onChange={handleChange} /> Some experience/initial research</label><br />
        <label><input type="radio" name="experience" value="established" onChange={handleChange} /> Established presence</label>
      </div>

      <select name="timeframe" className="w-full p-2 border rounded" onChange={handleChange}>
        <option value="">Your target timeframe</option>
        <option value="within 1 month">Immediate (within 1 month)</option>
        <option value="1-3 months">Short term (1-3 months)</option>
        <option value="3-6 months">Medium term (3-6 months)</option>
        <option value="6+ months">Long term (6+ months)</option>
      </select>

      <textarea name="message" placeholder="Message*" required className="w-full p-2 border rounded min-h-[100px]" onChange={handleChange} />

      <label className="block">
        <input type="checkbox" name="agreed" className="mr-2" onChange={handleChange} />
        I agree to the processing of my data according to the ...
      </label>

      <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Submit Inquiry</button>
    </form>
  );
}
