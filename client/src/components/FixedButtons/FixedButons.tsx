import "./fixedButtons.css"

const FixedButtons: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1150043472', '_blank');
  };

  return (
    <>
      <button className="arrowButton" onClick={scrollToTop}>
      <i className="bi bi-arrow-bar-up"></i>
      </button>
      <button className="whatsappButton" onClick={openWhatsApp}>
      <i className="bi bi-whatsapp"></i>
      </button>
    </>
  );
};


export default FixedButtons;
