import React, { useState, useEffect } from 'react';
import StudentItem from './StudentItem'; // import component mới

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', class: '', age: '' });

  // Lấy danh sách sinh viên từ localStorage khi load trang
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem('students'));
    if (savedStudents) {
      setStudents(savedStudents);
    }
  }, []);

  // Lưu danh sách sinh viên vào localStorage khi danh sách thay đổi
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students]);

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleAdd = () => {
    if (!editForm.name || !editForm.class || !editForm.age) return alert('Vui lòng nhập đầy đủ thông tin');
    const newStudent = {
      id: Date.now(),
      name: editForm.name,
      class: editForm.class,
      age: parseInt(editForm.age),
    };
    setStudents([...students, newStudent]);
    setEditForm({ name: '', class: '', age: '' });
  };

  const handleEditClick = (student) => {
    setEditingId(student.id);
    setEditForm({ name: student.name, class: student.class, age: student.age });
  };

  const handleSave = () => {
    setStudents(students.map(s =>
      s.id === editingId ? { ...s, ...editForm, age: parseInt(editForm.age) } : s
    ));
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearchTerm = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = selectedClass ? s.class === selectedClass : true;
    return matchesSearchTerm && matchesClass;
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sinh viên</h1>

      {/* Tìm kiếm */}
      <input
        type="text"
        placeholder="Tìm kiếm theo tên..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full p-2 border rounded"
      />

      {/* Lọc theo lớp */}
      <select
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
        className="mb-4 p-2 border rounded"
      >
        <option value="">Chọn lớp</option>
        <option value="12A1">12A1</option>
        <option value="11B2">11B2</option>
        <option value="10C3">10C3</option>
      </select>

      {/* Form thêm sinh viên */}
      <div className="mb-6 bg-gray-50 p-4 rounded-xl shadow space-y-3">
        <input
          type="text"
          placeholder="Họ tên"
          value={editForm.name}
          onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Lớp"
          value={editForm.class}
          onChange={(e) => setEditForm({ ...editForm, class: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Tuổi"
          value={editForm.age}
          onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
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
        {filteredStudents.map(student => (
          <StudentItem
            key={student.id}
            student={student}
            onDelete={handleDelete}
            onEdit={handleEditClick}
            isEditing={editingId === student.id}
            editForm={editForm}
            setEditForm={setEditForm}
            onSave={handleSave}
            onCancelEdit={handleCancelEdit}
          />
        ))}
      </div>
    </div>
  );
}
