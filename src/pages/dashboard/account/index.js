const AccountDashboard = () => {
  return (
    <div>
      {/* <!-- Content wrapper --> */}
      <div className="content-wrapper">
        {/* <!-- Content --> */}

        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                <h5 className="card-header">Profile Details</h5>
                {/* <!-- Account --> */}
                <div className="card-body">
                  <div className="d-flex align-items-start align-items-sm-center gap-4">
                    <img
                      src="/assets/dashboard/assets/img/avatars/1.png"
                      alt="user-avatar"
                      className="d-block rounded"
                      height="100"
                      width="100"
                      id="uploadedAvatar"
                    />
                    <div className="button-wrapper">
                      <label
                        forthml="upload"
                        className="btn btn-primary me-2 mb-4"
                        tabIndex="0"
                      >
                        <span className="d-none d-sm-block">
                          Upload new photo
                        </span>
                        <i className="bx bx-upload d-block d-sm-none"></i>
                        <input
                          type="file"
                          id="upload"
                          className="account-file-input"
                          hidden
                          accept="image/png, image/jpeg"
                        />
                      </label>

                      <p className="text-muted mb-0">
                        Allowed JPG, GIF or PNG. Max size of 800K
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-0" />
                <div className="card-body">
                  <form id="formAccountSettings">
                    <div className="row">
                      <div className="mb-3 col-md-6">
                        <label forthml="firstName" className="form-label">
                          First Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="firstName"
                          name="firstName"
                          value="John"
                          autoFocus
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label forthml="lastName" className="form-label">
                          Last Name
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          name="lastName"
                          id="lastName"
                          value="Doe"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label forthml="email" className="form-label">
                          E-mail
                        </label>
                        <input
                          className="form-control"
                          type="text"
                          id="email"
                          name="email"
                          value="john.doe@example.com"
                          placeholder="john.doe@example.com"
                        />
                      </div>
                      <div className="mb-3 col-md-6">
                        <label className="form-label" forthml="phoneNumber">
                          Phone Number
                        </label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text">ID (+62)</span>
                          <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="form-control"
                            placeholder="202 555 0111"
                          />
                        </div>
                      </div>
                      <div className="mb-3 col-md-6">
                        <label forthml="address" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="address"
                          name="address"
                          placeholder="Address"
                        />
                      </div>
                    </div>
                    <div className="mt-2">
                      <button type="submit" className="btn btn-primary me-2">
                        Save changes
                      </button>
                      <button
                        type="reset"
                        className="btn btn-outline-secondary"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
                {/* <!-- /Account --> */}
              </div>
              <div className="card">
                <h5 className="card-header">Delete Account</h5>
                <div className="card-body">
                  <div className="mb-3 col-12 mb-0">
                    <div className="alert alert-warning">
                      <h6 className="alert-heading fw-bold mb-1">
                        Are you sure you want to delete your account?
                      </h6>
                      <p className="mb-0">
                        Once you delete your account, there is no going back.
                        Please be certain.
                      </p>
                    </div>
                  </div>
                  <form id="formAccountDeactivation">
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="accountActivation"
                        id="accountActivation"
                      />
                      <label
                        className="form-check-label"
                        forthml="accountActivation"
                      >
                        I confirm my account deactivation
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger deactivate-account"
                    >
                      Deactivate Account
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- / Content --> */}
      </div>
      {/* <!-- Content wrapper --> */}
    </div>
  );
};

export default AccountDashboard;
