const InputListServices = ({
  fieldsListSErvices,
  register,
  btnDeleteServices,
  handleSubmit,
}) => {
  return (
    <div className="card">
      <div className="card-header">List Services</div>
      <div className="card-body">
        <div className="row">
          {fieldsListSErvices.map((item, idx) => (
            <div className="col-md-6">
              <div className="form-group">
                <div>
                  <label htmlFor="title">Title Services {item.title}</label>
                  <button
                    className="btn text-danger"
                    onClick={() => btnDeleteServices(item)}
                  >
                    Delete
                  </button>
                </div>
                <input
                  {...register(`listServices.${idx}.title`)}
                  type="text"
                  id="title"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="title">Description Services {item.title}</label>
                <textarea
                  rows={10}
                  {...register(`listServices.${idx}.desc`)}
                  type="text"
                  id="title"
                  className="form-control"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InputListServices;
