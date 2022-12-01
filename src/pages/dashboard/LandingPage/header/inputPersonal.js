const InputPersonal = ({ register }) => {
  return (
    <div className="row mb-4">
      <div className="mb-3 col-md-6">
        <label forthml="email" className="form-label">
          Email
        </label>
        <input
          className="form-control"
          type="email"
          id="email"
          name="email"
          autoFocus
          {...register("email")}
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
          {...register("phone_number")}
        />
      </div>
    </div>
  );
};

export default InputPersonal;
