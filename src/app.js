import React, { useState } from 'react';

function App() {
  const [animals] = useState([
    {
      id: 1,
      name: "Лев",
      image: "/images/lion.jpg",
      description: "Король джунглей"
    },
    {
      id: 2,
      name: "Слон",
      image: "/images/elephant.jpg", 
      description: "Большое и умное животное"
    },
    {
      id: 3,
      name: "Тигр",
      image: "/images/tiger.jpg",
      description: "Полосатый хищник"
    }
  ]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>🦁 Карточки животных</h1>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px', 
        justifyContent: 'center',
        marginTop: '30px'
      }}>
        {animals.map(animal => (
          <div key={animal.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px',
            width: '250px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
          }}>
            <img 
              src={animal.image} 
              alt={animal.name}
              style={{
                width: '200px',
                height: '150px',
                objectFit: 'cover',
                borderRadius: '5px'
              }}
            />
            <h3 style={{ margin: '10px 0', color: '#444' }}>{animal.name}</h3>
            <p style={{ color: '#666' }}>{animal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;