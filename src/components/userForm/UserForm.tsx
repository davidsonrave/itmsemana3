import React, { useState } from 'react';

interface FormData {
  name: string;
  lastName: string;
  email: string;
}

interface SubmittedData {
  name: string;
  lastName: string;
  email: string;
}

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', lastName: '', email: '' });
  const [submittedData, setSubmittedData] = useState<SubmittedData[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formData]);
    setFormData({ name: '', lastName: '', email: '' });
  };

  return (
    <div>
      <h1>UserForm</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <h2>Lista de Datos Enviados:</h2>
      <ul>
        {submittedData.map((data, index) => (
          <li key={index}>
            Nombre: {data.name}, Apellido: {data.lastName}, Correo: {data.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
