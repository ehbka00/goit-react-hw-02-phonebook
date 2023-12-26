import "../css/form.css";

export const ContactForm = ({ handleAddContact }) => {
  return (
    <form className="form">
      <div>
        <div className="form__name-wrapper">
          <h3>Name</h3>
          <input type="text" name="name" required />
        </div>
        <div className="form__number-wrapper">
          <h3>Number</h3>
          <input type="text" name="number" required />
        </div>

        <button type="submit" className="btn" onClick={handleAddContact}>
          Add contact
        </button>
      </div>
    </form>
  );
};
