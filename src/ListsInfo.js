import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export function ListInfo() {
  const { id } = useParams();
  const [dress, setDress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDress = async () => {
      try {
        const response = await fetch(`https://my-dresses-backend.onrender.com/dresses/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setDress(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDress();
  }, [id]);

  return (
    <div>
     
      {dress && (
        <div className='list-info'>
          <div>
            <img className='id-image'style={{ height: "550px", width: "480px" }} src={dress.imageURL} alt={dress.name} />
          </div>
          <div className="others">
            <div className="product-name">
              <h3 className='info-heading'>{dress.name}-{dress.id}</h3>
              <h3 className='info-heading'>{dress.price}</h3>
            </div>

            <div className="category">
              <p className='ptag'>Occasion: {dress.occasion}</p>
              <p className='ptag'>
                Colors: {Array.isArray(dress.colors) ? dress.colors.join(", ") : dress.colors}
              </p>
            </div>
            <p className='ptag'>{dress.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
