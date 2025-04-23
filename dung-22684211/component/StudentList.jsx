import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'Nguyễn Văn A', class: '12A1', age: 17 },
  { id: 2, name: 'Trần Thị B', class: '11B2', age: 16 },
  { id: 3, name: 'Lê Văn C', class: '10C3', age: 15 },
];

export default function StudentList() {
  const [students, setStudents] = useState(initialStudents);

  const handleDelete = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="max-w-2xl m-auto p-4 boder">
      <h1 className="text-2xl font-bold mb-4">Danh sách sinh viên</h1>
      <div className="space-y-4">
        {students.map(student => (
          <div key={student.id} className="flex justify-between items-center bg-white shadow-md rounded-2xl p-4">
            <div>
              <p className="text-lg font-semibold text-black">Tên: {student.name}</p>
              <p className="text-sm text-black">Lớp: {student.class}</p>
              <p className="text-sm text-black">Tuổi: {student.age}</p>
            </div>
            <button
              onClick={() => handleDelete(student.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
            >
              Xoá
            </button>
          </div>
        ))}
        {students.length === 0 && <p className="text-center text-gray-500">Không có sinh viên nào.</p>}
      </div>
    </div>
  );
}
