import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'Nguyễn Văn A', class: '12A1', age: 17 },
  { id: 2, name: 'Trần Thị B', class: '11B2', age: 16 },
];

export default function StudentList() {
  const [students, setStudents] = useState(initialStudents);
  const [form, setForm] = useState({ name: '', class: '', age: '' });

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleAdd = () => {
    if (!form.name || !form.class || !form.age) return alert('Vui lòng nhập đầy đủ thông tin');
    const newStudent = {
      id: Date.now(),
      name: form.name,
      class: form.class,
      age: parseInt(form.age),
    };
    setStudents([...students, newStudent]);
    setForm({ name: '', class: '', age: '' });
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sinh viên</h1>

      {/* Form thêm sinh viên */}
      <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow space-y-3">
        <input
          type="text"
          placeholder="Họ tên"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Lớp"
          value={form.class}
          onChange={e => setForm({ ...form, class: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Tuổi"
          value={form.age}
          onChange={e => setForm({ ...form, age: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleAdd}
          className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
        >
          Thêm sinh viên
        </button>
      </div>

      {/* Danh sách sinh viên */}
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="flex justify-between items-center bg-white shadow rounded-2xl p-4">
            <div>
              <p className="font-semibold">Tên: {student.name}</p>
              <p>Lớp: {student.class}</p>
              <p>Tuổi: {student.age}</p>
            </div>
            <button
              onClick={() => handleDelete(student.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            >
              Xoá
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
