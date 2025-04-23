import React, { useState } from 'react';

export default function StudentItem({
  student,
  onDelete,
  onEdit,
  isEditing,
  editForm,
  setEditForm,
  onSave,
  onCancelEdit,
}) {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg rounded-xl p-4 transition-all duration-300 hover:scale-105">
      {isEditing ? (
        <div className="w-full space-y-4">
          {/* Input cho tên */}
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tên"
          />

          {/* Input cho lớp */}
          <input
            type="text"
            value={editForm.class}
            onChange={(e) => setEditForm({ ...editForm, class: e.target.value })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Lớp"
          />

          {/* Input cho tuổi */}
          <input
            type="number"
            value={editForm.age}
            onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tuổi"
          />

          {/* Nút lưu và huỷ */}
          <div className="flex gap-2">
            <button
              onClick={onSave}
              className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition-colors"
            >
              Lưu
            </button>
            <button
              onClick={onCancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded-xl hover:bg-gray-500 transition-colors"
            >
              Huỷ
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <p className="font-semibold text-xl text-gray-800">Tên: {student.name}</p>
            <p className="text-gray-600">Lớp: {student.class}</p>
            <p className="text-gray-600">Tuổi: {student.age}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(student)}
              className="bg-yellow-500 text-white px-3 py-2 rounded-xl hover:bg-yellow-600 transition-colors"
            >
              Sửa
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600 transition-colors"
            >
              Xoá
            </button>
          </div>
        </>
      )}
    </div>
  );
}
