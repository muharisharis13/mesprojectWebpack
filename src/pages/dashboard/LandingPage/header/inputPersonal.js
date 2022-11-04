const InputPersonal = () => {
  return (
    <div className="row mb-4">
      <div className="mb-3 col-md-6">
        <label forthml="email" className="form-label">
          Email
        </label>
        <input
          className="form-control"
          type="text"
          id="email"
          name="email"
          autoFocus
        />
      </div>
      <div className="mb-3 col-md-6">
        <label forthml="phoneNumber" className="form-label">
          Phone Number
        </label>
        <input
          className="form-control"
          type="text"
          name="phoneNumber"
          id="phoneNumber"
        />
      </div>
    </div>
  );
};

export default InputPersonal;
