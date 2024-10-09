import { useEffect, useState } from "react";
import { enterpriseDetailsAdapter } from "../../../../adapters/enterpriseProfile.adapter";
import { fetchEnterpriseDetails } from "../../../../services/fetchsEnterpriseDetails.service";
import {
  updateCoverImage,
  updateEnterpriseDetails,
} from "../../../../services/updateEnterpriseDetails.service";

export default function EnterpriseDetails() {
  const [enterpriseData, setEnterpriseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    instagram: "",
    description: "",
    category: "",
  });
  const [coverImage, setCoverImage] = useState("");

  const getEnterpriseData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const details = enterpriseDetailsAdapter(await fetchEnterpriseDetails());
      setEnterpriseData(details);
      setFormData({
        name: details.name || "",
        whatsapp: details.whatsapp || "",
        instagram: details.instagram || "",
        description: details.description || "",
        category: details.category || "",
      });
      setCoverImage(details.cover_image || "");
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveDetails = async () => {
    if (
      formData.name !== enterpriseData.name ||
      formData.whatsapp !== enterpriseData.whatsapp ||
      formData.instagram !== enterpriseData.instagram ||
      formData.description !== enterpriseData.description ||
      formData.category !== enterpriseData.category
    ) {
      try {
        await updateEnterpriseDetails(formData);
        await getEnterpriseData();
      } catch (err) {
        console.error("Error al guardar los detalles:", err.message);
      }
    }

    setIsEditing(false);
  };

  const handleSaveCoverImage = async () => {
    if (coverImage) {
      const formData = new FormData();
      formData.append("cover-image", coverImage);

      try {
        await updateCoverImage(formData);
        await getEnterpriseData();
      } catch (err) {
        console.error("Error al guardar la imagen de portada:", err);
      }
    }
  };

  useEffect(() => {
    getEnterpriseData();
  }, []);

  return (
    <div>
      {isLoading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {enterpriseData && (
        <div>
          <h3>Detalles de la Empresa</h3>

          <div>
            <h4>Imagen de Portada</h4>
            {coverImage && (
              <img
                src={coverImage}
                alt="Imagen de Portada"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            )}
          </div>

          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>WhatsApp:</label>
            <input
              type="text"
              value={formData.whatsapp || ""}
              onChange={(e) =>
                setFormData({ ...formData, whatsapp: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Instagram:</label>
            <input
              type="text"
              value={formData.instagram || ""}
              onChange={(e) =>
                setFormData({ ...formData, instagram: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>
          <div>
            <label>Categoría:</label>
            <input
              type="text"
              value={formData.category || ""}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
              disabled={!isEditing}
            />
          </div>
          <button onClick={isEditing ? handleSaveDetails : handleEdit}>
            {isEditing ? "Guardar Detalles" : "Editar Detalles"}
          </button>
          <div>
            <h3>Actualizar Imagen de Portada</h3>
            <input type="file" accept="image/*" />
            <button onClick={handleSaveCoverImage}>
              Editar Imagen de Fondo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
