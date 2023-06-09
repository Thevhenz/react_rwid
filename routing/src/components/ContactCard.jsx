import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import user from "../images/user.png";

function ContactCard(props) {
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{
            pathname: `/contact/${id}`,
            state: { contact: props.contact },
          }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      />
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.object.isRequired,
  clickHandler: PropTypes.func,
};

export default ContactCard;
