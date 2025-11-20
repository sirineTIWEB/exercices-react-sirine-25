import './composants/AnimatedCards.css'
import CardGSAP from './composants/CardGSAP'

function App() {

  const cardsData = [
    {
      colorClass: 'card-blue',
      icon: '✨',
      title: 'Animation GSAP',
      description: 'Des animations fluides et performantes pour une expérience utilisateur exceptionnelle',
    },
    {
      colorClass: 'card-pink',
      icon: '⚛️',
      title: 'React',
      description: 'Intégration parfaite avec React pour des composants modernes et réactifs',
    },
    {
      colorClass: 'card-green',
      icon: '🚀',
      title: 'Interactive',
      description: 'Design dynamique et interactif qui captive et engage vos utilisateurs',
    },
  ];


  return (
    <div className="animated-cards-container">
      <div className="cards-wrapper">
        {cardsData.map((card, index) => (
          <CardGSAP
            key={index}
            colorClass={card.colorClass}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}

      </div>
    </div>
  );

}


export default App;
