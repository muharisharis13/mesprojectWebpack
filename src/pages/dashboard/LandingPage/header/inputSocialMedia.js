const InputSocialMedia = () => {
  return (
    <div className="row mt-4">
      <div className="mb-3 col-md-6">
        <label forthml="facebbok" className="form-label">
          Facebook
        </label>
        <input
          className="form-control"
          type="text"
          id="facebook"
          name="facebook"
        />
      </div>
      <div className="mb-3 col-md-6">
        <label className="form-label" forthml="wa">
          Whatsapp
        </label>
        <div className="input-group input-group-merge">
          <span className="input-group-text">ID (+62)</span>
          <input
            type="text"
            id="wa"
            name="wa"
            className="form-control"
            placeholder="202 555 0111"
          />
        </div>
      </div>
      <div className="mb-3 col-md-6">
        <label forthml="instagram" className="form-label">
          Instagram
        </label>
        <input
          type="text"
          className="form-control"
          id="instagram"
          name="instagram"
        />
      </div>
    </div>
  );
};

export default InputSocialMedia;
