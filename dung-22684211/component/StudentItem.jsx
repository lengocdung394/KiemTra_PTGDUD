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
    <div className="flex justify-between items-center bg-white shadow rounded-2xl p-4">
      {isEditing ? (
        <div className="w-full space-y-2">
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            value={editForm.class}
            onChange={(e) => setEditForm({ ...editForm, class: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            value={editForm.age}
            onChange={(e) => setEditForm({ ...editForm, age: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <div className="flex gap-2">
            <button
              onClick={onSave}
              className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
            >
              Lưu
            </button>
            <button
              onClick={onCancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded-xl hover:bg-gray-500"
            >
              Huỷ
            </button>
          </div>
        </div>
      ) : (
        <>
          <div>
            <p className="font-semibold">Tên: {student.name}</p>
            <p>Lớp: {student.class}</p>
            <p>Tuổi: {student.age}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(student)}
              className="bg-yellow-500 text-white px-3 py-2 rounded-xl hover:bg-yellow-600"
            >
              Sửa
            </button>
            <button
              onClick={() => onDelete(student.id)}
              className="bg-red-500 text-white px-3 py-2 rounded-xl hover:bg-red-600"
            >
              Xoá
            </button>
          </div>
        </>
      )}
    </div>
  );
}
