// importações necessárias
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

// informações para cadastro
const AdminEvents = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    category: "",
    date: "",
    price: "",
    contact: "",
    image: null,
  });

  //const pra carregar imagens
  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProduct((prevProduct) => ({
        ...prevProduct,
        image: file,
      }));

      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //informações de formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Você pode usar o FormData para enviar a imagem junto com os outros dados
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("category", product.category);
    formData.append("date", product.date);
    formData.append("price", product.price);
    formData.append("contact", product.contact);
    formData.append("image", product.image);

    console.log("Product submitted: ", product);
    // Aqui você pode adicionar a lógica para enviar o formulário para um servidor
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        {/* Seta para voltar ao menu adm */}
        <a href="/admin" className="justify-betweent flex gap-2 mb-2">
          <FaArrowLeft />
        </a>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Cadastrar Evento
        </h2>
        {/* informções para o cadastro */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Nome do evento
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite o nome do evento"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Descrição do evento
            </label>
            <input
              type="text"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite a descrição do evento"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Categoria do evento
            </label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite o categoria do evento"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Data do evento
            </label>
            <input
              type="date"
              name="date"
              value={product.date}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite o dia do evento"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Preço do ingresso
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite o valor do ingresso"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Contato
            </label>
            <input
              type="text"
              name="contact"
              value={product.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Digite o seu contato"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Imagem do evento
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {previewImage && (
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Pré-visualização da Imagem
              </label>
              <img
                src={previewImage}
                alt="Preview"
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Cadastrar Evento
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminEvents;
