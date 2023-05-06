import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import user from "../images/user.jpg";

const ContactDetail = ({ contacts }) => {
  const { id } = useParams();
  const contact = contacts.find((contact) => contact.id === id);
  const { name, email } = contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
      <div className="center-div">
        <Link to="/">
          <button className="ui button blue center">
            Back to Contact List
          </button>
        </Link>
      </div>
    </div>
  );
};

ContactDetail.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactDetail;
